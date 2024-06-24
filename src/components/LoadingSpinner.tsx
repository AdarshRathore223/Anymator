import * as React from "react";

const LoadingSpinner: React.FC = () => {
  const spinnerAnimation = `
                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;

  const circleStyle: React.CSSProperties = {
    width: "5rem",
    aspectRatio: "1",
    border: "1rem solid transparent",
    borderRadius: "50%",
    borderBottomColor: "#f43f5e",
    animation: "rotate 1s linear infinite",
  };

  return (
    <div>
      <style>{spinnerAnimation}</style>
      <div style={circleStyle}></div>
    </div>
  );
};

export default LoadingSpinner;
