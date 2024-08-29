import { FC } from "react";
import Box from "./Box";

type CharType = {
  value: string;
  color: string;
};

type RowProps = {
  guess: CharType[];
  currentGuess?: string;
};

const Row: FC<RowProps> = ({ guess, currentGuess }: RowProps) => {
  let guessArray: CharType[] = guess;

  if (currentGuess) {
    const letters = currentGuess.split("");
    guessArray = [
      ...letters.map((char) => ({ value: char, color: "" })),
      ...Array(5 - letters.length).fill({ value: "", color: "" }),
    ];
  } else if (!guess) {
    guessArray = [...Array(5).fill({ value: "", color: "" })];
  }

  return (
    <div
      className={`mb-2 flex flex-row gap-2 row
         ${guess ? "guessrow" : ""} 
         ${currentGuess ? "currentguessrow" : ""}
          `}
    >
      {guessArray.map(({ value, color }, i) => (
        <Box key={i} value={value} color={color} />
      ))}
    </div>
  );
};

export default Row;
