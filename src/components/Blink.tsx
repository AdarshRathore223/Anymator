import * as React from "react";


const blinkKeyframes = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

const myStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: "500",
  fontSize: "3rem", // Equivalent to text-5xl
  color: "#6366F1", // Equivalent to text-indigo-500
  animation: "blink 1s infinite",
};

function Blink() {
  return (
    <>
      <style>{blinkKeyframes}</style>
      <div style={myStyle}>Blinking Text</div>
    </>
  );
}

export { Blink } ;
