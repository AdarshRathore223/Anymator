import * as React from "react";

const FloatKeyframes = `@keyframes SlidingText {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
}`;

const textStyle: React.CSSProperties = {
  animation: "SlidingText 25s Linear infinite",
  transform: "translateX(-100%)",
};
const containerStyle: React.CSSProperties = {
  overflowX: "hidden",
  width: "100vw",
};
function SlidingText({ children }: { children: React.ReactNode }) {
  return (
    <div style={containerStyle}>
      <style>{FloatKeyframes}</style>
      <div style={textStyle}>{children}</div>
    </div>
  );
}

export { SlidingText };
