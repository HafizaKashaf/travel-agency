import React from 'react';
import Image from 'next/image';
interface props{
  image:string
  title:string
  paragraph:string
}

const FeaturesCard = ({image,title,paragraph}:props) => {
  return (
    <div className=' h-[350px] text-center  bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
      
      <Image 
       src={image} 
       alt="icon"
       width={70} 
       height={70}
       className='mx-auto'/>
       <h1 className='text-[20px] mt-[1.4rem] font-[500] text-[#02073e]'>{title}</h1>
       <p className='mt-[1rem] text-black opacity-90 text-[15px]'>{paragraph}</p>
       <p className='mt-[1.4rem] text-rose-800 font-[500] cursor-pointer hover:text-rose-950'>Learn More</p>

      
    </div>
  )
    
}

export default FeaturesCard
