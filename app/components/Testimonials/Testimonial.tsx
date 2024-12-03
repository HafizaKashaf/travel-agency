import React from 'react';
import profile1 from "@/public/images/profile1.jpg"
import profile2 from "@/public/images/profile2.jpg"
import  testimonial from "@/public/images/testimonial.png"
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='pt-[7rem] pb-[3rem] '>
      <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
        <div>
            <h1  className='text-[14px] md:text-[16px] lg:text-[20px] mb-[1rem] font-bold 
        '>Testimonials</h1>
            <h1  data-aos='fade-right' data-aos-ancher-placement="top-center" data-aos-delay='200'  className='text-[27px] md:text-[35px] lg:[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem] '>What Our Customers Say</h1>
            <p  data-aos='fade-left' data-aos-ancher-placement="top-center" data-aos-delay='400'   className='text-gray-900 opacity-90 text-[17px] mt-[1rem]'>We believe in providing exceptional service and unforgettable experiences, and our customers agree. Here is what some of our happy travelers have to say about their journeys with us</p>
            <div  data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='600'   className='flex items-center space-x-6 mt-[2rem] bg-[#F7F7F7] rounded-md'>
              <Image src={profile1} alt="profile1" width={40} height={20} className='rounded-[50%] mb-16 ml-5'/>
              <div>
                <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Mark John</h1>
                <p className='md:w-[70%] w-[90%] text-[12px] text-black opacity-85'>Our Tropical Paradise Escape was exactly what we needed. The whole trip was seamless, thanks to the amazing planning from Triplane. We will definitely be back.</p>
                <div className='flex mt-3 text-rose-900 mb-2'>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStarHalfAlt width={10} height={10}/>
                </div>
              </div>
            </div>
            <div  data-aos='fade-up' data-aos-ancher-placement="top-center" data-aos-delay='800'   className='flex items-center space-x-6 mt-[2rem] bg-[#F7F7F7] rounded-md'>
              <Image src={profile2} alt="profile2" width={40} height={20} className='rounded-[50%] mb-16 ml-5'/>
              <div>
                <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Sarah Rose</h1>
                <p className='md:w-[70%] w-[90%] text-[12px] text-black opacity-85'>I had a fantastic experience with Triplane. The customer support was exceptional and helped me plan every detail of my adventure in New Zealand.I will certainly be booking my next trip with them </p>
                <div className='flex mt-3 text-rose-900 mb-2'>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStar width={10} height={10}/>
                <FaStarHalfAlt width={10} height={10}/>
                </div>
              </div>
            </div>
        </div>
        <div data-aos='fade-left' data-aos-anchor-placement='top center' >
          <Image  src={testimonial} alt='testimonial'/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

