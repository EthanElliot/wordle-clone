import { useState } from "react";
import { checkWord } from "../services/checkWord";
import { keys } from "../constants/letters";
import { formatGuess } from "../services/formatGuess";

type CharType = {
    value: string;
    color: string;
};

type KeysProps = {
    [key: string]: { color: string };
};

const useWordle = (word: string) => {
    const [guesses, setGuesses] = useState<CharType[][]>([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [turn, setTurn] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [incorrectGuess, setIncorrectGuess] = useState<boolean>(false);
    const [incorrectGuessMessage, setIncorrectGuessMessage] =
        useState<string>("");
    const [letters, setLetters] = useState<KeysProps>(keys);

    const addNewGuess = (formattedGuess: CharType[]) => {
        if (currentGuess === word) {
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setTurn((prevTurn) => {
            return prevTurn + 1;
        });

        setCurrentGuess("");
    };


    const handleKey = (key: string) => {
        if (isCorrect) {
            return;
        }
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
            if (turn > 6) {
                console.log("All guesses used!");
                return;
            }

            if (currentGuess.length < 5) {
                handleIncorrectGuess("Word not long enouph");
                return;
            }

            if (history.includes(currentGuess)) {
                handleIncorrectGuess("Word already used");
                return;
            }

            if (!checkWord(currentGuess)) {
                handleIncorrectGuess("invalid word");
                return;
            }

            const formatted = formatGuess(word, currentGuess);
            addNewGuess(formatted);
            formatted.forEach((char) =>
                setLetters((prevLetters) => ({
                    ...prevLetters,
                    [char.value]: { color: char.color },
                }))
            );
        }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        const key: string = event.key;
        handleKey(key);
    };

    const handleIncorrectGuess = (message: string) => {
        setIncorrectGuess(true);
        setIncorrectGuessMessage(message);
        setTimeout(() => {
            setIncorrectGuess(false);
        }, 1000);
    };

    return {
        guesses,
        isCorrect,
        turn,
        currentGuess,
        history,
        letters,
        handleKey,
        handleKeyPress,
        incorrectGuess,
        incorrectGuessMessage,
    };
};

export default useWordle;
