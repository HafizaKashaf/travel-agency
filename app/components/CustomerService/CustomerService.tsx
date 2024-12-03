import React from 'react';
import Image from 'next/image';
import Contact from "@/public/images/contact.png"
import { CheckIcon } from '@heroicons/react/16/solid';

const CustomerService = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center "> 
        <div  data-aos='fade-right' data-aos-ancher-placement="top-center" className='order-2 lg:order-1'>
            <Image  src={Contact} alt='support'/>
        </div>
        <div className='order-1 lg:order-2'>
            <h1 data-aos='fade-left' data-aos-ancher-placement="top-center" data-aos-delay='200' className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]'>Our customer support is designed to make your travel experience truly memorable.</h1> 
            <p data-aos='fade-right' data-aos-ancher-placement="top-center" data-aos-delay='400'  className='mt-[1.5rem] mb-[1.5rem] opacity-90 text-black text-[15px] md:text-[16px]'>Choose us for reliable, professional, and friendly customer support that enhances every step of your travel journey.</p>
            <div data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='600'  className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className='w-[1.3rem] h-[1.3rem] text-rose-950' />
                <p className='text-[17px] text-[#02073e] font-[500]'>24/7 Availability</p>
            </div>
            <div data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='800' className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className='w-[1.3rem] h-[1.3rem] text-rose-950' />
                <p className='text-[17px] text-[#02073e] font-[500]'>Expert Guidance</p>
            </div>
            <div data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='1000' className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className='w-[1.3rem] h-[1.3rem] text-rose-950' />
                <p className='text-[17px] text-[#02073e] font-[500]'>Quick Problem Resolution</p>
            </div>
            <div  data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='1200'className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className='w-[1.3rem] h-[1.3rem] text-rose-950' />
                <p className='text-[17px] text-[#02073e] font-[500]'>Multi-Channel Support</p>
            </div>
            <div  data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='1400' className="flex items-center mb-[1rem] space-x-3">
                <CheckIcon className='w-[1.3rem] h-[1.3rem] text-rose-950' />
                <p className='text-[17px] text-[#02073e] font-[500]'> Customer Satisfaction Focus</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerService
