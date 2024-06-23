import React from 'react';

function Blob() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-96 h-96 bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-400 animate-blob'></div>
      <div className='w-72 h-72 bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-400 animate-blob absolute top-[-5%] right-[-6%] '></div>
      <div className='w-48 h-48 bg-gradient-to-r from-rose-500 via-red-400 to-orange-400 animate-blob absolute left-0 top-1'></div>
      <div className=' w-80 h-80 bg-gradient-to-r from-rose-500 via-red-400 to-orange-400 animate-blob absolute right-[-5%] bottom-[-20%]'></div>
      <div className='w-48 h-48 bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 animate-blob absolute left-5 bottom-0'></div>

    </div>
  );
}

export default Blob;
