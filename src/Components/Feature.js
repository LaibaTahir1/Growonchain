import React from 'react';

const KEY_FEATURE = [
  {
    id: 1,
    title: 'Weekly LIVE Session',
    image: '/assets/images/Calendar.png',
  },
  {
    id: 2,
    title: 'Make Real Friends',
    image: '/assets/images/heart11.png',
  },
  {
    id: 3,
    title: 'Real Assignments',
    image: '/assets/images/star11.png',
  },
  {
    id: 4,
    title: 'Mentor Based Learning',
    image: '/assets/images/badminton-line.png',
  },
  {
    id: 5,
    title: 'Get Shit Done',
    image: '/assets/images/shuttle1.png',
  },
  {
    id: 6,
    title: 'Exclusive Guest Sessions',
    image: '/assets/images/1sparkle.png',
  },
  {
    id: 7,
    title: 'Real Stories',
    image: '/assets/images/coin.png',
  },
  {
    id: 8,
    title: 'Build Your Knowledge',
    image: '/assets/images/sign.png',
  },
  {
    id: 9,
    title: 'Lifetime Network',
    image: '/assets/images/ok.png',
  },
];

function Feature() {
  return (
    <>
      <div className=' text-white pb-20'>
        <div className='text-center'>
          <div className=' bg-[#2C3B87]  p-10 max-w-[800px] mx-auto w-full  rounded-2xl '>
            <h1 className=' text-white  text-start  text-[25px] md:text-[54px] font-semibold'>Key Features</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mt-[60px]  justify-center'>
              {KEY_FEATURE.map((item, idx) => {
                return (
                  <div key={`${item.id}___${idx}`} className=' text-x rounded-xl lh-32 p-3 font-thin md:font-bold text-start bg-[#4860DE]'>
                    <img className='pt-3 pl-3' src={item.image} alt='' />
                    <div className='leading-[22px] text-xl font-semibold pl-3'>
                      <p className='mt-4 '>{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
