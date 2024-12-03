import React from 'react';
import Image from 'next/image';
import company from "@/public/images/company.jpg"

const Company = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
      <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]'>Company who also worked with us</h1>
      <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-800 opacity-80'>We carefully select our partners to ensure the highest standards of quality, safety, and customer satisfaction. Together, we aim to provide seamless, enriching, and memorable travel experiences for every traveler.</p>
      <p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600'>Explore Details</p>
      <div className='mt-[2rem] text-center w-[80%] mx-auto'>
          <Image src={company} alt='company' />
      </div>
    </div>
  )
}

export default Company
