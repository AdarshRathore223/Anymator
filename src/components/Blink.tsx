import * as React from "react";

const blinkKeyframes = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`;

const myStyle: React.CSSProperties = {
  animation: "blink 1s infinite",
};
interface blink extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationspeed?: string;
}
function Blink({children,...divprops}:blink) {
  return (
    <>
      <style>{blinkKeyframes}</style>
      <div style={myStyle} {...divprops}>{children}</div>
    </>
  );
}

export { Blink };
