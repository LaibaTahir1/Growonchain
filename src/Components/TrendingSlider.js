import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import TrendingSwiper from './TrendingSwiper';

const TRENDINGSLIDER = [
  {
    id: 1,
    img: 'assets/images/Grow1.png ',
    heading: 'Grow OnChain',
    text: '69 Quest',
  },
  {
    id: 2,
    img: 'assets/images/Grow2.png ',
    heading: 'Ronin',
    text: '12 Quest',
  },
  {
    id: 3,
    img: 'assets/images/Grow3.png ',
    heading: 'Axie Infinity',
    text: ' Quest',
  },
  {
    id: 4,
    img: 'assets/images/Grow4.png ',
    heading: 'CyberKongz',
    text: 'Quest',
  },
  {
    id: 5,
    img: 'assets/images/Grow1.png ',
    heading: 'Grow OnChain',
    text: '69 Quest',
  },
  {
    id: 6,
    img: 'assets/images/Grow2.png ',
    heading: 'Ronin',
    text: '12 Quest',
  },
  {
    id: 7,
    img: 'assets/images/Grow3.png ',
    heading: 'Axie Infinity',
    text: ' Quest',
  },
  {
    id: 8,
    img: 'assets/images/Grow4.png ',
    heading: 'CyberKongz',
    text: 'Quest',
  },
  {
    id: 9,
    img: 'assets/images/Grow1.png ',
    heading: 'Grow OnChain',
    text: '69 Quest',
  },
  {
    id: 10,
    img: 'assets/images/Grow2.png ',
    heading: 'Ronin',
    text: '12 Quest',
  },
  {
    id: 11,
    img: 'assets/images/Grow3.png ',
    heading: 'Axie Infinity',
    text: ' Quest',
  },
  {
    id: 12,
    img: 'assets/images/Grow4.png ',
    heading: 'CyberKongz',
    text: 'Quest',
  },
]
export default function TrendingSlider() {
  return (
    <>
      <Swiper navigation={false} slidesPerView={4} spaceBetween={20} modules={[Navigation]} className="mySwiper">

        {TRENDINGSLIDER.map((item ,index) => {
          return (
            <SwiperSlide key={`${item.id}___${index}`}><TrendingSwiper
              img={item.img}
              heading={item.heading}
              text={item.text}
            /></SwiperSlide>
          )
        })}





      </Swiper>

    </>
  );
}
