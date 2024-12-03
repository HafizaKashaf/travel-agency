import React from 'react';
import Link from 'next/link';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid';
interface Props{
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='h-[12vh] bg-white shadow-md'>
        <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
            <h1 className='text-[16px] md:text-[25px] font-bold text-gray-800'>
                <span className='text-[27px] md:text-[40px] text-rose-800'>Trip</span>
                lane
            </h1>
            <ul className='hidden lg:flex items-center space-x-10'>
                <li className='text-[18px] cursor-pointer text-rose-800'>
                <Link href="/">Home</Link>
                </li>
                <li className='text-[18px] cursor-pointer hover:text-rose-800 transition-all duration-200'>
                <Link href="/">About</Link>
                </li>
                <li className='text-[18px] cursor-pointer hover:text-rose-800 transition-all duration-200'>
                <Link href="/">Services</Link>
                </li>
                <li className='text-[18px] cursor-pointer hover:text-rose-800 transition-all duration-200'>
                <Link href="/">Customer</Link>
                </li>
                <li className='text-[18px] cursor-pointer hover:text-rose-800 transition-all duration-200'>
                <Link href="/">Blog</Link>
                </li>
                <li className='text-[18px] cursor-pointer hover:text-rose-800 transition-all duration-200'>
                <Link href="/">Contact Us</Link>
                </li>
            </ul>
            <div className='flex items-center space-x-2 md:space-x-5'>
                <ButtonBlue text='Login' />
                 {/* Login */}
                 <ButtonRed text='SignIn' />
                {/* SignIn */}
                <Bars3BottomRightIcon 
                onClick={openNav}
                className='w-[1.5rem] lg:hidden h-[1.5rem] text-gray-700 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Nav
