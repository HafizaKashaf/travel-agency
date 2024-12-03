import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FeaturesCard from './FeaturesCard';
import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import icon4 from "@/public/images/icon4.png";
import icon5 from "@/public/images/icon5.png";
import icon6 from "@/public/images/icon6.png";

const Features = () => {
  return <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading headingMini="make your journeys seamless, memorable, and stress-free" headingPrimary="Travel And Explore Our Features"/>
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      items-center gap-[1.4rem]'>
       <div data-aos='zoom-in' data-aos-anchor-placement='top-center'>
        <FeaturesCard title="Hassle-free Flight Bookings" image={icon1.src} paragraph="Booking your flights has never been easier! We offer seamless flight arrangements, ensuring you get the best routes, competitive fares, and a stress-free booking experience."/>
       </div>
       <div data-aos='zoom-in' data-aos-delay='200' data-aos-anchor-placement='top-center'>
        <FeaturesCard title="Handpicked Accommodations" image={icon2.src}  paragraph="Stay in style with our curated selection of hotels, resorts, and unique stays. We ensure comfort, convenience, and quality at every destination you visit."/>
       </div>
       <div data-aos='zoom-in' data-aos-delay='400' data-aos-anchor-placement='top-center'>
        <FeaturesCard title=" Exciting Local Tours & Transport" image={icon3.src}  paragraph="Explore  like a local! From guided tours to private transportation, we ensure you enjoy every moment of your  journey  with ease and excitement,  immersing yourself in the culture making every trip unforgettable."/>
       </div>
       <div data-aos='zoom-in' data-aos-delay='600' data-aos-anchor-placement='top-center'>
        <FeaturesCard title="Customized Travel Packages" image={icon4.src}  paragraph="Tailor your travel experience to match your dreams. Whether it’s a romantic getaway or a family adventure, we create packages that suit your preferences and budget."/>
       </div>
       <div data-aos='zoom-in' data-aos-delay='800' data-aos-anchor-placement='top-center'>
        <FeaturesCard title="Exclusive Deals & Discounts" image={icon5.src}  paragraph="Save big with our exclusive offers! From early bird discounts to last-minute deals, we bring you value-packed options for your travels, ensuring the best bang for your buck."/>
       </div>
       <div data-aos='zoom-in' data-aos-delay='1000' data-aos-anchor-placement='top-center'>
        <FeaturesCard title=" Travel Insurance Services" image={icon6.src}  paragraph="Travel worry-free with our comprehensive travel insurance options. From trip cancellations to medical emergencies, we've got you covered every step of the way."/>
       </div>

      </div>
    </div>
 
}

export default Features
