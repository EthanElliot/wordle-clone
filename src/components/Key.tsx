import React from "react";

type KeyProps = {
  char: string;
  color?: string;
  styles?: string;
};

const Key: React.FC<KeyProps> = ({ char, color, styles }: KeyProps) => {
  return (
    <div
      className={`h-14 w-10 flex items-center justify-center rounded-md text-white uppercase ${
        color || "bg-slate-800"
      } ${styles || ""}`}
    >
      {char === "Backspace" ? (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          data-testid="icon-backspace"
        >
          <path
            fill="white"
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
          ></path>
        </svg>
      ) : (
        <p>{char}</p>
      )}
    </div>
  );
};

export default Key;
