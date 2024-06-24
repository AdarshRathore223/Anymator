import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};
const Button2 = ({ children, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button2 };