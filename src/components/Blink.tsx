import * as React from "react";
import { useState, useEffect } from "react";

interface BlinkProps {
  text: string;
}

const Blink: React.FC<BlinkProps> = ({ text }:{text:string}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500); // Toggle visibility every 500ms

    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  return (
    <p className={`animate-blink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-5xl text-indigo-500 ${isVisible ? '' : 'invisible'}`}>
      {text}
    </p>
  );
};

export default Blink;
