import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import NewSlider from './NewSlider';
const NEWSWIPER = [
  {
    id: 1,
    img: 'assets/images/New1.png ',
    borderImg: 'assets/images/border.png',
    title: 'What is $AXS &',
    heading: '$SLP Token?',
    text: 'Axie Infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },

  {
    id: 2,
    img: 'assets/images/New2.png ',
    borderImg: 'assets/images/border3.png',
    title: 'App. Axie Marketplace',
    heading: 'Overview',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '125',

  },
  {
    id: 3,
    img: 'assets/images/New3.png ',
    borderImg: 'assets/images/border2.png',
    title: 'Mavis Hub: A Brief',
    heading: 'Guide',
    text: 'Ronin',
    xpImg: 'assets/images/lock.png',
    number: 'Quest Ended',

  },
  {
    id: 4,
    img: 'assets/images/New4.png',
    borderImg: 'assets/images/border2.png',
    title: 'Mavis Marketplace:',
    heading: 'A Brief Guide',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '25',
    boxImg: 'assets/images/tBox.png',
  },
  {
    id: 5,
    img: 'assets/images/New1.png ',
    borderImg: 'assets/images/border.png',
    title: 'What is $AXS &',
    heading: '$SLP Token?',
    text: 'Axie Infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },

  {
    id: 6,
    img: 'assets/images/New2.png ',
    borderImg: 'assets/images/border3.png',
    title: 'App. Axie Marketplace',
    heading: 'Overview',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '125',

  },
  {
    id: 7,
    img: 'assets/images/New3.png ',
    borderImg: 'assets/images/border2.png',
    title: 'Mavis Hub: A Brief',
    heading: 'Guide',
    text: 'Ronin',
    xpImg: 'assets/images/lock.png',
    number: 'Quest Ended',

  },
  {
    id: 8,
    img: 'assets/images/New4.png',
    borderImg: 'assets/images/border2.png',
    title: 'Mavis Marketplace:',
    heading: 'A Brief Guide',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '25',
    boxImg: 'assets/images/tBox.png',
  },{
    id: 9,
    img: 'assets/images/New1.png ',
    borderImg: 'assets/images/border.png',
    title: 'What is $AXS &',
    heading: '$SLP Token?',
    text: 'Axie Infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },

  {
    id: 10,
    img: 'assets/images/New2.png ',
    borderImg: 'assets/images/border3.png',
    title: 'App. Axie Marketplace',
    heading: 'Overview',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '125',

  },
  {
    id: 11,
    img: 'assets/images/New3.png ',
    borderImg: 'assets/images/border2.png',
    title: 'Mavis Hub: A Brief',
    heading: 'Guide',
    text: 'Ronin',
    xpImg: 'assets/images/lock.png',
    number: 'Quest Ended',

  },
  {
    id: 12,
    img: 'assets/images/New4.png',
    borderImg: 'assets/images/border2.png',
    title: '>Mavis Marketplace:',
    heading: 'A Brief Guide',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '25',
    boxImg: 'assets/images/tBox.png',
  },
]

export default function NewSwiper() {
  return (
    <>
      <Swiper navigation={false} slidesPerView={4} spaceBetween={20} modules={[Navigation]} className="mySwiper">

        {NEWSWIPER.map((item, index) => {
          return (
            <SwiperSlide key={`${item.id}___${index}`}><NewSlider
              img={item.img}
              borderImg={item.borderImg}
              title={item.title}
              heading={item.heading}
              text={item.text}
              xpImg={item.xpImg}
              number={item.number}
              boxImg={item.boxImg}/></SwiperSlide>
          )
        })}





      </Swiper>

    </>
  );
}
