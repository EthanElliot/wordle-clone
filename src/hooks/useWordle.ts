import { useState } from "react";
import { checkWord } from "../services/checkWord";
import { keys } from "../constants/letters";



type charType =  {
    value: string;
    color: string
}

type KeysProps =  {
    [key:string]: {color:string;}
}

const useWordle = (word:string|null) => {
    console.log(word)
    const [guesses, setGuesses] = useState<charType[][]>([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [turn, setTurn] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [letters, setLetters] = useState<KeysProps>(keys)


    const formatGuess= () => { 
        const wordArray: string[] | null[] = [...word]
        const formatGuess:charType[] = [...currentGuess].map((value)=>{
            setLetters((prevLetters) => ({
                ...prevLetters,
                [value]: {color:'grey'}
            }))
            return {value: value, color:'grey'}
        })

        formatGuess.forEach((char,i) => {
            if(wordArray[i] === char.value){
                formatGuess[i].color = 'green'
                setLetters((prevLetters) => ({
                    ...prevLetters,
                    [char.value]: {color:'green'}
                }))
                wordArray[i]=null
            }
        })

        formatGuess.forEach((char,i) => {
            if(wordArray.includes(char.value,i) && char.color !== 'green'){
                formatGuess[i].color = 'yellow'
                setLetters((prevLetters) => ({
                    ...prevLetters,
                    [char.value]: {color:'yellow'}
                }))
                wordArray[wordArray.indexOf(char.value)]=null
            }
        })
        console.log(letters)
        return formatGuess
    }

    const addNewGuess = (formattedGuess:charType[])=>{
        if(currentGuess === word){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses)=>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses

        })
        setHistory((prevHistory)=>{
            return [ ...prevHistory,currentGuess]
        })

        setTurn((prevTurn)=>{return prevTurn+1
        })

        setCurrentGuess('')
    }

    const handleKey = (key:string) => {
        //handle letters
        if (key.length == 1 && key.match(/^[a-zA-Z]/)) {
            if (currentGuess.length >= 5) {
                return;
            }
            setCurrentGuess((oldGuess) => oldGuess + key);
        }
        //handle backspace
        else if (key == "Backspace") {
            setCurrentGuess((oldGuess) => oldGuess.slice(0, -1));
        }
        //handle enter
        else if (key == "Enter") {
            if (turn >6){
                console.log('All guesses used!')
                return
            }

            if (currentGuess.length < 5) {
                console.log('Word not long enouph')
                return;
            }

            if (history.includes(currentGuess)) {
                console.log('Word already used')
                return
            }

            if (!checkWord(currentGuess)){
                console.log('invalid guess')
                return;
            }

            const formatted = formatGuess()
            addNewGuess(formatted)

        }
    }


    const handleKeyPress = (event: KeyboardEvent) => {
        const key: string = event.key;
        handleKey(key);
      };


    return {
        guesses,
        isCorrect,
        turn,
        currentGuess,
        history,
        letters,handleKey,
        handleKeyPress
    }
}

export default useWordle