import React from "react";

function Tim() {
  return (
    <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1">
      <button className="border-2 rounded-md p-2 bg-violet-950 text-white text-xl">Transaction done</button>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 right-2"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 right-2"></span>
      </span>
    </div>
  );
}

export default Tim;
