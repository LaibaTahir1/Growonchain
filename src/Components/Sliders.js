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

export default function Sliders(props) {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide><Cardswipper
        img="assets/images/tree.png"
        bimg="assets/images/border.png"
        title="What is Ronin?"
        txt="Ronin"
        Ximg="assets/images/XP.png"
        numbr="75"
        Boximg="assets/images/Bbox.png" /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide>
        <SwiperSlide><Cardswipper /></SwiperSlide>

       
      </Swiper>
      
    </>
  );
}
