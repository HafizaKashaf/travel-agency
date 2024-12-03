import React from 'react';
interface Props{
    text:string
}

const ButtonRed = ({text}:Props) => {
  return (
    <button className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-rose-500 relative hover:bg-gradient-to-r hover:from-rose-500 hover:to-rose-300 text-white hover:ring-2 hover:ring-offset-2 hover:ring-rose-300 transition-all duration-300 ease-out'>
    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
    <span className='relative'>{text}</span>

   </button>
  )
}

export default ButtonRed
