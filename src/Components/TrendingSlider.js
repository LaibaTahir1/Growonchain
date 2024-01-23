import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Cardswipper from './Cardswipper';

import TaskSwipper from './TaskSwipper';
import TrendingSwiper from './TrendingSwiper';

export default function TrendingSlider() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide><TrendingSwiper /></SwiperSlide>
        <SwiperSlide><TrendingSwiper /></SwiperSlide>
        <SwiperSlide><TrendingSwiper /></SwiperSlide>
        

       
      </Swiper>
      
    </>
  );
}
