import React from "react";

type ErrorPopupProps = {
  message: string;
  isVisible: boolean;
};
const ErrorPopup: React.FC<ErrorPopupProps> = ({
  message,
  isVisible,
}: ErrorPopupProps) => {
  return (
    <div
      className={`absolute  top-10 bg-slate-950 text-white px-4 py-2 rounded-md animate-error ${
        isVisible ? "absolute" : "hidden"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default ErrorPopup;
