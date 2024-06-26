import * as React from "react";

const spinnerAnimation = `
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface LoadingSpinnerProps {
  size: string;
  bordersize: string;
  color: string;
}

function LoadingSpinner({ size, bordersize, color }: LoadingSpinnerProps) {
  const circleStyle: React.CSSProperties = {
    width: size,
    aspectRatio: "1",
    borderWidth: bordersize,
    border: "solid transparent",
    borderRadius: "50%",
    borderBottomColor: color,
    animation: "rotate 1s linear infinite",
  };

  return (
    <div>
      <style>{spinnerAnimation}</style>
      <div style={circleStyle}></div>
    </div>
  );
}

export { LoadingSpinner };
