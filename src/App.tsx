import { useState, useEffect } from "react";
import { getWord } from "./services/getWord";
import Row from "./components/Row";
import useWordle from "./hooks/useWordle";
import Keyboard from "./components/Keyboard";
import ErrorPopup from "./components/ErrorPopup";

function App() {
  const [word, setWord] = useState<string | null>(null);
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

  //get random word
  useEffect(() => {
    setWord(getWord());
  }, [setWord]);

  return (
    <div
      className={`flex flex-col w-screen h-screen bg-slate-900 text-white justify-center items-center ${
        incorrectGuess ? "incorrectguess" : ""
      } `}
    >
      <ErrorPopup message={incorrectGuessMessage} isVisible={incorrectGuess} />
      {isCorrect && <h1>The word was: {word}!</h1>}
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === turn;

        if (isCurrentGuess) {
          return <Row key={i} guess={guess} currentGuess={currentGuess} />;
        } else {
          return <Row key={i} guess={guess} />;
        }
      })}
      <Keyboard handleKey={handleKey} letters={letters} />
    </div>
  );
}

export default App;
