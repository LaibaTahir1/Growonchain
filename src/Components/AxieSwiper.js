import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import AxieSlider from './AxieSlider';

const AXIESWIPER = [
  {
    id: 1,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: 'Intro to Axie Lore',
    heading: 'Origins & Mystic',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
  },
  {
    id: 2,
    img: 'assets/images/Axie2.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 1',
    heading: 'Origins & Mystic',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
   
  },
  {
    id: 3,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 2',
    heading: 'Xmas & Japanase',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
    boxImg : 'assets/images/tBox.png' ,
  },
  {
    id: 4,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 3',
    heading: 'MEO & Agamogenesis',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/tBox.png' ,
  },
  {
    id: 5,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: 'Intro to Axie Lore',
    heading: 'Origins & Mystic',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
  },
  {
    id: 6,
    img: 'assets/images/Axie2.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 1',
    heading: 'Origins & Mystic',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
  },
  {
    id: 7,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 2',
    heading: 'Xmas & Japanase',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
    boxImg: 'assets/images/tBox.png' ,
  },
  {
    id: 8,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 3',
    heading: 'MEO & Agamogenesis',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/tBox.png' ,
  },
  {
    id: 9,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: 'Intro to Axie Lore',
    text: 'Axie infinity',
    heading: 'Origins & Mystic',
    xpImg: 'assets/images/XP.png',
    number: '100',
  },
  {
    id: 10,
    img: 'assets/images/Axie2.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 1',
    heading: 'Origins & Mystic',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
  },
  {
    id: 11,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 2',
    heading: 'Xmas & Japanase',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '100',
    boxImg: 'assets/images/tBox.png' ,
  },
  {
    id: 12,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border.png',
    title: 'Collectible Axies 3',
    heading: 'MEO & Agamogenesis',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/tBox.png' ,
  },
]
export default function AxieSwiper() {
  return (
    <>
      <Swiper navigation={false}slidesPerView={4} spaceBetween={20} modules={[Navigation]} className="mySwiper">

        {AXIESWIPER.map((item ,index) => {
          return (
            <SwiperSlide key={`${item.id}___${index}`}><AxieSlider
            img={item.img}
            borderImg={item.borderImg}
            title={item.title}
            heading={item.heading}
            text={item.text}
            xpImg={item.xpImg}
            number={item.number} 
            boxImg= {item.boxImg} /></SwiperSlide>
         )
        })}
       




      </Swiper>

    </>
  );
}
