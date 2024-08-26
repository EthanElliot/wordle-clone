import React, { FC } from "react";
import Box from "./box";

type RowProps = {
  guess: string[];
};

const Row: FC<RowProps> = ({ guess }: RowProps) => {
  const chars: string[] = [];
  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    chars.push(char);
  }

  return (
    <div className="mb-2 flex flex-row gap-2">
      {chars.map((char) => (
        <Box value={char} />
      ))}
    </div>
  );
};

export default Row;
