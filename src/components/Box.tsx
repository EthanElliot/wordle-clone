import React from "react";

type BoxProps = {
  value: string | null;
  color?: string;
};
const Box: React.FC<BoxProps> = ({ value, color }: BoxProps) => {
  return (
    <div
      className={`border-2 border-slate-300 aspect-square w-16 flex justify-center items-center ${color}`}
    >
      <p>{value == null ? " " : value}</p>
    </div>
  );
};

export default Box;
