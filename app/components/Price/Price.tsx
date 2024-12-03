import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini='Deal for your Business'
         headingPrimary='Meet Our Best Packages plan that suit you'/>
         <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div data-aos='fade-right' data-aos-anchor-placement='top-center'> 
                <PriceCard bg="bg-[#e2664c]" price=" 2,499" num="1" plan=" Tropical Paradise Escape"/>
            </div>
            <div  data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'> 
                <PriceCard bg="bg-[#d08477]" price="3,799" num="2" plan=" European Heritage Tour"/>
            </div>
            <div  data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay='400'> 
                <PriceCard bg="bg-[#e8c4c4]" price="2,999" num="1" plan=" Adventure Seeker Delight"/>
            </div>
            
         </div>

      
    </div>
  )
}

export default Price
