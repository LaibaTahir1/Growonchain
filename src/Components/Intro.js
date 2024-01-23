import React from 'react'

export default function Intro() {
  return (
    <div className='max-w-[1240px] mx-auto w-full mt-[106px] rounded-[20px] bg-[#131413] text-white'>
        <div className=''>
            <div className=' flex justify-between gap-24'>
                <div className='block pl-10  pt-[146px]  '>
                <h1 className='text-5xl font-bold '>Introducing</h1>
           <div className='block'>
           <div className='flex gap-4'>
                <h1  className='text-[#8DF0B2] text-6xl font-bold'>Grow</h1>
                <h1 className='text-[#9DB5FF] text-6xl font-semibold'>OnChain.</h1>
                </div>
                <div className='block pb-[150px]'>
                 <p  className='mt-10 '>Onchain Learning platfrom for Axie Infinity & Ronin Ecosystem.</p>
            <button className='bg-[#FF5C38]  mt-10 pt-5 pb-5 pl-10 pr-10 rounded-full '>Begin</button>
        </div>
           
           </div>
                </div>
            <img className='pt-[74px] w-[467px] pr-[85px] pb-[59px] ' src='assets/images/GrowHeaderBoxes.webp' alt='' />
            </div>
           
        </div>
      
    </div>
  )
}
