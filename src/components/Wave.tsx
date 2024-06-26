import * as React from "react";
const waveKeyframes = `
    @keyframes wave {
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
    }`;

function WavingHand({ children }: { children: React.ReactNode }){
  const imgStyle: React.CSSProperties = {
    animation: "wave 2s infinite",
    textAlign: "center",
  };

  return (
    <>
      <style>{waveKeyframes}</style>
      <h1 style={imgStyle}>{children}</h1>
    </>
  );
};

export { WavingHand };
