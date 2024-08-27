import React from "react";

type BoxProps = {
  value: string;
  color?: string | null;
};
const Box: React.FC<BoxProps> = ({ value, color }: BoxProps) => {
  return (
    <div
      className={`border-2 border-slate-300 aspect-square w-16 flex justify-center items-center uppercase ${
        color ?? ""
      }`}
    >
      <p>{value == null ? " " : value}</p>
    </div>
  );
};

export default Box;
