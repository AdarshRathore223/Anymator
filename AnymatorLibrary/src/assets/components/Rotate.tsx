import React from 'react';

function Rotate() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='animate-rotate w-10 h-10 bg-transparent border-4 rounded-full border-b-rose-500'></div>
    </div>
  );
}

export default Rotate;
