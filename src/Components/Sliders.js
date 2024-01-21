import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Cardswipper from './Cardswipper';
import Returning from './Returning';

export default function Sliders() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Returning /></SwiperSlide>
        <SwiperSlide><Returning /></SwiperSlide>
        <SwiperSlide><Returning /></SwiperSlide>
        <SwiperSlide><Returning /></SwiperSlide>
        <SwiperSlide><Returning /></SwiperSlide>
        <SwiperSlide><Returning /></SwiperSlide>
        {/* <SwiperSlide><Cardswipper /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide> */}

      </Swiper>
    </>
  );
}
