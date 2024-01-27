import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import LastSwiper from './LastSwiper';

const LASTSLIDER = [
  {
    id: 1,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: "Beginner's Guide to",
    heading: 'Axie Homeland',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 2,
    img: 'assets/images/Axie2.png',
    borderImg: 'assets/images/border.png',
    title: "A Guide to Project T",
    heading: 'Axie infinity',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 3,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: "Learn Axie Classic!",
    heading: 'Ronin Safe',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '75',

  },
  {
    id: 4,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border2.png',
    title: "Create a multisig with",
    heading: 'Ronin Safe',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '100',

  },
  {
    id: 5,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: "Beginner's Guide to",
    heading: 'Axie Homeland',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 6,
    img: 'assets/images/Axie2.png',
    borderImg: 'assets/images/border.png',
    title: "A Guide to Project T",
    heading: 'Axie infinity',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 7,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: "Learn Axie Classic!",
    heading: 'Ronin Safe',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '75',

  },
  {
    id: 8,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border2.png',
    title: "Create a multisig with",
    heading: 'Ronin Safe',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '100',

  },
  {
    id: 9,
    img: 'assets/images/Axie1.png ',
    borderImg: 'assets/images/border.png',
    title: "Beginner's Guide to",
    heading: 'Axie Homeland',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '200',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 10,
    img: 'assets/images/Axie2.png',
    borderImg: 'assets/images/border.png',
    title: "A Guide to Project T",
    heading: 'Axie infinity',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '50',
    boxImg: 'assets/images/Bbox.png',
  },
  {
    id: 11,
    img: 'assets/images/Axie3.png ',
    borderImg: 'assets/images/border.png',
    title: "Learn Axie Classic!",
    heading: 'Ronin Safe',
    text: 'Axie infinity',
    xpImg: 'assets/images/XP.png',
    number: '75',

  },
  {
    id: 12,
    img: 'assets/images/Axie4.png ',
    borderImg: 'assets/images/border2.png',
    title: "Create a multisig with",
    heading: 'Ronin Safe',
    text: 'Ronin',
    xpImg: 'assets/images/XP.png',
    number: '100',

  },
]

export default function LastSlider() {
  return (
    <>
      <Swiper navigation={false} slidesPerView={4} spaceBetween={20} modules={[Navigation]} className="mySwiper">

        {LASTSLIDER.map((item ,index) => {
          return (
            <SwiperSlide key={`${item.id}___${index}`}><LastSwiper
              img={item.img}
              borderImg={item.borderImg}
              title={item.title}
              heading={item.heading}
              text={item.text}
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
