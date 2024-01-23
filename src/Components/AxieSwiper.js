import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import AxieSlider from './AxieSlider';

export default function AxieSwiper() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide><AxieSlider /></SwiperSlide>
        <SwiperSlide><AxieSlider /></SwiperSlide>
       

       
      </Swiper>
      
    </>
  );
}
