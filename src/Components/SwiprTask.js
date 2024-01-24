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
const SWIPERTASK = [
    {
        id:1,
        img: 'assets/images/Task1.png ',
        title: 'Pray to Atia!',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '100',
        boxImg: 'assets/images/Bbox.png',
    },
    {
        id:2,
        img: 'assets/images/Task2.png ',
        title: 'Restake $AXS',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '75',
    },
    {
        id:3,
        img: 'assets/images/Task3.png ',
        title: 'Restake $RON',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '50',
        boxImg: 'assets/images/tBox.png',
    },
    {
        id:4,
        img: 'assets/images/Task4.png ',
        title: 'Ascend your Axie',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '75',

    },
    
    {
        id:1,
        img: 'assets/images/Task1.png ',
        title: 'Pray to Atia!',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '100',
        boxImg: 'assets/images/Bbox.png',
    },
    {
        id:2,
        img: 'assets/images/Task2.png ',
        title: 'Restake $AXS',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '75',
    },
    {
        id:3,
        img: 'assets/images/Task3.png ',
        title: 'Restake $RON',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '50',
        boxImg: 'assets/images/tBox.png',
    },
    {
        id:4,
        img: 'assets/images/Task4.png ',
        title: 'Ascend your Axie',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '75',

    },
    {
        id:5,
        img: 'assets/images/Task1.png ',
        title: 'Pray to Atia!',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '100',
        boxImg: 'assets/images/Bbox.png',
    },
    {
        id:6,
        img: 'assets/images/Task2.png ',
        title: 'Restake $AXS',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '75',
    },
    {
        id:7,
        img: 'assets/images/Task3.png ',
        title: 'Restake $RON',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '50',
        boxImg: 'assets/images/tBox.png',
    },
    {
        id:8,
        img: 'assets/images/Task4.png ',
        title: 'Ascend your Axie',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '75',

    },
    {
        id:9,
        img: 'assets/images/Task1.png ',
        title: 'Pray to Atia!',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '100',
        boxImg: 'assets/images/Bbox.png',
    },
    {
        id:10,
        img: 'assets/images/Task2.png ',
        title: 'Restake $AXS',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '75',
    },
    {
        id:11,
        img: 'assets/images/Task3.png ',
        title: 'Restake $RON',
        heading: 'Ronin',
        xpImg: 'assets/images/XP.png',
        number: '50',
        boxImg: 'assets/images/tBox.png',
    },
    {
        id:12,
        img: 'assets/images/Task4.png ',
        title: 'Ascend your Axie',
        heading: 'Axie infinity',
        xpImg: 'assets/images/XP.png',
        number: '75',

    },
]
export default function SwiprTask() {
    return (
        <>
            <Swiper navigation={false} slidesPerView={4} spaceBetween={20} modules={[Navigation]} className="mySwiper">

            {SWIPERTASK.map((item, index) =>{
                return(
                    <SwiperSlide key={`${item.id}___${index}`}><TaskSwipper
                    img={item.img}
                    title={item.title}
                    heading={item.heading}
                    xpImg={item.xpImg}
                    number={item.number}
                    boxImg={item.boxImg}
                /></SwiperSlide>
                )
            })}
                

            </Swiper>

        </>
    );
}
