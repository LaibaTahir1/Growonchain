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

export default function SwiprTask() {
    return (
        <>
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">

                <SwiperSlide><TaskSwipper /></SwiperSlide>
                <SwiperSlide><TaskSwipper /></SwiperSlide>
                <SwiperSlide><TaskSwipper /></SwiperSlide> 
            </Swiper>

        </>
    );
}
