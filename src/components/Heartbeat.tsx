import * as React from 'react';

const heartbeatkeyframes = `
@keyframes heartbeat{
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.3);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(1);
    }
}
`;



interface heartbeat extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;
    animationspeed?: string;
  }


function Heartbeat({ children,animationspeed ="1s",...divprops }:heartbeat) {

    const myStyle: React.CSSProperties = {
        animation: "heartbeat infinite",
        animationDuration: animationspeed,
        textAlign: "center",
        overflowX: "hidden",
        
    };

  return (
    <>
      <style>{heartbeatkeyframes}</style>
      <div style={myStyle} {...divprops}>{children}</div>
      
    </>
  );
}

export { Heartbeat } ;