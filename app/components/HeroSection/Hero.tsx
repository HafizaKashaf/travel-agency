import React from 'react'
import ButtonBlue from '../Button/ButtonBlue'
import ButtonRed from '../Button/ButtonRed';
import Image from 'next/image';
import hero from "@/public/images/hero.png"

const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:[75vh] flex items-center flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
            <div className='col-span-2'>
                <h1 data-aos="fade-right" className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.5rem] md:leading-[4rem] '>Your Gateway to Unforgettable Travel Adventures</h1>
                <p data-aos="fade-left" data-aos-delay="200" className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90'>Discover the joy of travel with expertly crafted packages tailored just for you. Whether it is a serene beach getaway, a cultural escape, or an adventure-packed trip, we handle every detail to make your journey seamless and unforgettable. Let us turn your travel dreams into reality—your adventure begins here!</p>
                <div  data-aos='zoom-in' data-aos-delay='400' className='flex items-center space-x-4 md:space-x-6'>
                   <ButtonBlue text="Get Started"/>
                   <ButtonRed  text="Explore Features"/>
                </div>
            </div>
            <div   data-aos='fade-left' data-aos-delay='600' className='col-span-3 hidden sm:block'>
                <Image src={hero} alt="Hero" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero