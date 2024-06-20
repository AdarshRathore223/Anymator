import React, { useState } from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Typewriter() {
    const [text] = useTypewriter({
        words: ['Ronaldo', 'from Portugal', 'a Footballer', 'an Actor'],
        loop: (5),
        typeSpeed: 100,
        
    })
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-3xl font-semibold'>Hi, I am <span>{text}<Cursor cursorColor='red'></Cursor></span></h1>
      
    </div>
  );
}

export default Typewriter;
