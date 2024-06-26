import * as React from "react";

const shrinkkeyframes = `
@keyframes shrink{
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.5);
    }
}
`;

interface shrink extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationspeed?: string;
}

function Shrink({ children, animationspeed = "1s", ...divprops }: shrink) {
  const myStyle: React.CSSProperties = {
    animation: "shrink forwards",
    animationDuration: animationspeed,
    textAlign: "center",
  };
  return (
    <>
      <style>{shrinkkeyframes}</style>
      <div style={myStyle} {...divprops}>
        {children}
      </div>
    </>
  );
}

export { Shrink };
