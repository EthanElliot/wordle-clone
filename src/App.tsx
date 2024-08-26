import React, { useState, useEffect } from "react";
import Box from "./components/box";
import { getWord } from "./services/getWord";

function App() {
  const [guesses, setGuesses] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]);
  const [current, setCurrent] = useState("");
  const [word, setWord] = useState("");

  //get random word
  useEffect(() => {
    getWord().then((word) => setWord(word));
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-900 text-white justify-center items-center ">
      {guesses.map((guess) => (
        <div className="mb-2 flex flex-row gap-2">
          {guess.map((char) => (
            <Box value={char} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
