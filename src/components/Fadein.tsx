import * as React from "react";

const fadeinKeyframes = `
@keyframes fadein {
  0% {
    opacity: 0;
    margin-top: 2rem;
  }
  100% {
    opacity: 1;
    margin-top: 0rem;
  }
}
`;

interface FadeIn extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationspeed?: string;
}

function Fadein({ children,animationspeed ="1s",...divprops }: FadeIn) {
  const myStyle: React.CSSProperties = {
    animation: "fadein ease-in forwards",
    animationDuration: animationspeed,
  };
  return (
    <>
      <style>{fadeinKeyframes}</style>
      <div style={myStyle} {...divprops}>
        {children}
      </div>
    </>
  );
}

export { Fadein };
