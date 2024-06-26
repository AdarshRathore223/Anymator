import * as React from "react";

function Wiggle({ children }: { children: React.ReactNode }) {
  const wiggleKeyframes = `
    @keyframes wiggle {
        0%, 100% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
    }`;

  const textStyle: React.CSSProperties = {
    textAlign: "center",
    animation: "wiggle 1s infinite",
  };

  return (
    <>
      <style>{wiggleKeyframes}</style>
      <div style={textStyle}>{children}</div>
    </>
  );
}

export { Wiggle };
