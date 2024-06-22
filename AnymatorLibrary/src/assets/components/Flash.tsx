import React from 'react';

function Flash() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='animate-flash w-10 h-10 bg-black'></div>
    </div>
  );
}

export default Flash;
