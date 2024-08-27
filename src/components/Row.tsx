import { FC } from "react";
import Box from "./Box";

type RowProps = {
  guess: { value: string; color: string }[];
  currentGuess?: string;
};

const Row: FC<RowProps> = ({ guess, currentGuess }: RowProps) => {
  let boxes: React.ReactNode[] = [];
  if (guess) {
    boxes = guess.map(({ value, color }, i) => (
      <Box key={i} value={value} color={color} />
    ));
  } else if (currentGuess) {
    const letters = currentGuess.split("");
    boxes = [
      ...letters.map((char, i) => <Box key={i} value={char} />),
      ...Array(5 - letters.length).fill(<Box value={" "} />),
    ];
  } else {
    boxes = [...Array(5).fill(<Box value={" "} />)];
  }
  return <div className="mb-2 flex flex-row gap-2">{boxes}</div>;
};

export default Row;
