import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Cardswipper from './Cardswipper';
const SLIDERS=[
  {
    id:1 ,
    img:"assets/images/tree.png" ,
    bimg:"assets/images/border.png" ,
    title:"What is Ronin?" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/Bbox.png" ,
  },
  {
    id:2 ,
    img:"assets/images/sky.png" ,
    bimg:"assets/images/border.png" ,
    title:"Get your .RON Domain!" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },
  {
    id:3 ,
    img:"assets/images/Man.png" ,
    bimg:"assets/images/border.png" ,
    title:"Stake that $RON" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/tBox.png" ,
  },
  {
    id:4 ,
    img:"assets/images/Bulb.png" ,
    bimg:"assets/images/border.png" ,
    title:"What the Axie Infinity?" ,
    txt:"Axie Infinity" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },
  {
    id:5 ,
    img:"assets/images/tree.png" ,
    bimg:"assets/images/border.png" ,
    title:"What is Ronin?" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/Bbox.png" ,
  },
  {
    id:6 ,
    img:"assets/images/sky.png" ,
    bimg:"assets/images/border.png" ,
    title:"Get your .RON Domain!" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },
  {
    id:7 ,
    img:"assets/images/Man.png" ,
    bimg:"assets/images/border.png" ,
    title:"Stake that $RON" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/tBox.png" ,
  },
  {
    id:8 ,
    img:"assets/images/Bulb.png" ,
    bimg:"assets/images/border.png" ,
    title:"What the Axie Infinity?" ,
    txt:"Axie Infinity" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },
  {
    id:9 ,
    img:"assets/images/tree.png" ,
    bimg:"assets/images/border.png" ,
    title:"What is Ronin?" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/Bbox.png" ,
  },
  {
    id:10 ,
    img:"assets/images/sky.png" ,
    bimg:"assets/images/border.png" ,
    title:"Get your .RON Domain!" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },
  {
    id:11 ,
    img:"assets/images/Man.png" ,
    bimg:"assets/images/border.png" ,
    title:"Stake that $RON" ,
    txt:"Ronin" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"75" ,
    Boximg:"assets/images/tBox.png" ,
  },
  {
    id:12 ,
    img:"assets/images/Bulb.png" ,
    bimg:"assets/images/border.png" ,
    title:"What the Axie Infinity?" ,
    txt:"Axie Infinity" ,
    Ximg:"assets/images/XP.png" ,
    numbr:"100" ,
   
  },


];


export default function Sliders() {

  return (
    <>
      <Swiper navigation={false } slidesPerView={4}  spaceBetween={20}   modules={[Navigation]} className="mySwiper">

        {SLIDERS.map((item ,index) =>{
          return(
            <SwiperSlide  key={`${item.id}___${index}`}><Cardswipper img={item.img}
          bimg={item.bimg}
          title={item.title}
          txt={item.txt}
          Ximg={item.Ximg}
          numbr={item.numbr}
          Boximg={item.Boximg} />
           </SwiperSlide>
          

          )
        })}
        
        

      </Swiper>

    </>
  );
}
