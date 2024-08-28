import React from "react";
import Key from "./key";

type letterProps = {
  handleKey: (key: string) => void;
  letters: {
    [key: string]: { color: string };
  };
};

const Keyboard: React.FC<letterProps> = ({
  handleKey,
  letters,
}: letterProps) => {
  const keys: string[] = Object.keys(letters);

  return (
    <div className="flex flex-col gap-2 mt-16">
      <div className="flex gap-2 justify-center">
        {keys.slice(0, 10).map((key) => (
          <div onClick={() => handleKey(key)} className="cursor-pointer key">
            <Key char={key} color={letters[key].color} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {keys.slice(10, 19).map((key) => (
          <div onClick={() => handleKey(key)} className="cursor-pointer key">
            <Key char={key} color={letters[key].color} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <div onClick={() => handleKey("Enter")} className="cursor-pointer key">
          <Key char={"Enter"} styles={"w-14 text-xs"} />
        </div>
        {keys.slice(19, 26).map((key) => (
          <div onClick={() => handleKey(key)} className="cursor-pointer key">
            <Key char={key} color={letters[key].color} />
          </div>
        ))}
        <div
          onClick={() => handleKey("Backspace")}
          className="cursor-pointer key"
        >
          <Key char={"Backspace"} styles={"w-14 "} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
