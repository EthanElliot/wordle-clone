import { useState, useEffect } from "react";
import { getWord } from "./services/getWord";
import Row from "./components/Row";
import useWordle from "./hooks/useWordle";
import Keyboard from "./components/Keyboard";
import ErrorPopup from "./components/ErrorPopup";

function App() {
  const [word, setWord] = useState<string>("");

  //get random word
  useEffect(() => {
    setWord(getWord());
  }, [setWord]);

  //use wordle hook
  const {
    currentGuess,
    handleKeyPress,
    handleKey,
    turn,
    guesses,
    isCorrect,
    letters,
    incorrectGuess,
    incorrectGuessMessage,
  } = useWordle(word);

  // add event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    if (isCorrect) {
      window.removeEventListener("keydown", handleKeyPress);
    }
    if (turn > 5) {
      window.removeEventListener("keydown", handleKeyPress);
    }
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, isCorrect, turn]);

  return (
    <div className="w-screen h-screen bg-slate-900 text-white ">
      <header className="w-full flex items-center justify-center h-14 border-b-2 border-slate-500 text-3xl uppercase font-bold font-wordle">
        wordle
      </header>
      <main className="flex flex-col justify-center items-center font-bold p-5 ">
        <ErrorPopup
          message={incorrectGuessMessage}
          isVisible={incorrectGuess}
        />
        <div className={`text-2xl ${incorrectGuess ? "incorrectguess" : ""} `}>
          {guesses.map((guess, i) => {
            const isCurrentGuess = i === turn;
            if (isCurrentGuess) {
              return <Row key={i} guess={guess} currentGuess={currentGuess} />;
            } else {
              return <Row key={i} guess={guess} />;
            }
          })}
        </div>
        <Keyboard handleKey={handleKey} letters={letters} />
      </main>
    </div>
  );
}

export default App;
