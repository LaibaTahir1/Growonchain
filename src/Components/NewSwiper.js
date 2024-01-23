import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import NewSlider from './NewSlider';

export default function NewSwiper() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide><NewSlider /></SwiperSlide>
        <SwiperSlide><NewSlider /></SwiperSlide>
        <SwiperSlide><NewSlider /></SwiperSlide>
        

       
      </Swiper>
      
    </>
  );
}
