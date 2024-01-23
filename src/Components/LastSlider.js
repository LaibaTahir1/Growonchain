import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import LastSwiper from './LastSwiper';


export default function LastSlider() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide><LastSwiper /></SwiperSlide>
        <SwiperSlide><LastSwiper /></SwiperSlide>
        <SwiperSlide><LastSwiper /></SwiperSlide>
       

       
      </Swiper>
      
    </>
  );
}
