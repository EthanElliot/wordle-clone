import { useState } from "react";


interface charType {
    value: string;
    color: string
}

const useWordle = (word) => {
    const [guesses, setGuesses] = useState<charType[][]>([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [turn, setTurn] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    

    const formatGuess= () => { 
        const wordArray: string[] | null[] = [...word]
        const formatGuess:charType[] = [...currentGuess].map((value)=>{
            return {value: value, color:'grey'}
        })

        formatGuess.forEach((char,i) => {
            if(wordArray[i] === char.value){
                formatGuess[i].color = 'green'
                wordArray[i]=null
            }
        })

        formatGuess.forEach((char,i) => {
            if(wordArray.includes(char.value,i) && char.color !== 'green'){
                formatGuess[i].color = 'yellow'
                wordArray[wordArray.indexOf(char.value)]=null
            }
        })
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

    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
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

            const formatted = formatGuess()
            addNewGuess(formatted)

        }
    }


    return {
        guesses,
        isCorrect,
        turn,
        currentGuess,
        history,
        handleKeyPress
    }
}

export default useWordle