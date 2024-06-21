import React from 'react';
import Grass from '../svg/Grass.png';

function Bounce() {
  return (
    <>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='relative h-[33.5vh] flex'>
            <div className='animate-bounce w-14 h-14 bg-rose-500 rounded-full absolute bottom-0 left-24'></div>
            <div>
                <img src={Grass} alt=""/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Bounce;
