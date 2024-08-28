import React from "react";

type BoxProps = {
  value: string;
  color?: string | null;
  styles?: string;
};
const Box: React.FC<BoxProps> = ({ value, color, styles }: BoxProps) => {
  return (
    <div
      className={`border-2  aspect-square w-14 flex justify-center items-center uppercase  
        ${color ?? ""}
        ${value == " " ? "border-slate-500" : "border-slate-300"}
        ${styles ?? ""} `}
    >
      <p>{value}</p>
    </div>
  );
};

export default Box;
