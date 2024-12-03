"use client"
import React, { useEffect } from 'react';
import Hero from './HeroSection/Hero'; 
import Features from './Features/Features';
import CustomerService from './CustomerService/CustomerService';
import Price from './Price/Price';
import Testimonial from './Testimonials/Testimonial';
import Company from './Company/Company';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:"top-bottom",
    })
  },[])
  return  <div>
    <Hero />
    <Features />
    <CustomerService />
    <Price />
    <Testimonial />
    <Company  />
    <Footer />
  </div>
   
}

export default Home