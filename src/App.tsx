import React, { useState, useEffect, useCallback } from "react";
import { getWord } from "./services/getWord";
import Row from "./components/Row";

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [current, setCurrent] = useState("");
  const [word, setWord] = useState("");

  const keyPress = useCallback(
    (event) => {
      const key = event.key;
      if (key.length == 1 && key.match(/^[a-zA-Z]/)) {
        if (current.length >= 5) {
          return;
        }
        setCurrent((oldGuess) => oldGuess + key);
      } else if (key == "Backspace") {
        setCurrent((oldGuess) => oldGuess.slice(0, -1));
      } else if (key == "Enter") {
        if (current.length < 5) {
          return;
        }
        console.log("Enter");
      }
    },
    [current, setCurrent]
  );

  //get random word
  useEffect(() => {
    getWord().then((word) => setWord(word));
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-900 text-white justify-center items-center ">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        return (
          <Row
            guess={
              isCurrentGuess ? current.split("") : guess ?? Array(5).fill(" ")
            }
          />
        );
      })}
    </div>
  );
}

export default App;
