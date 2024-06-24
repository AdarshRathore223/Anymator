import * as React from "react";
import { useState, useEffect } from "react";

interface BlinkProps {
  text: string;
}

const Blink = ({ text }: BlinkProps) => {
  return (
    <p
      className={`animate-blink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-5xl text-indigo-500 `}
    >
      {text}
    </p>
  );
};

export { Blink };
