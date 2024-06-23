import React from 'react';
import hand from '../svg/wavehand.svg';

function WavingHand() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <img src={hand} alt="" className='animate-wave'/>
        <h1 className='text-3xl font-semibold mt-4'>Waving Hand Animation</h1>
    </div>
  );
}

export default WavingHand;
