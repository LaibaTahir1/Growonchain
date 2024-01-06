import React from 'react'

export default function Intro() {
  return (
    <div className='max-w-[900px] mx-auto w-full mt-32 text-white'>
        <div className=' mt-10'>
            <div className=' flex justify-between gap-14'>
                <div className='block'>
                <h1 className='text-5xl font-bold '>Introducing</h1>
           <div className='block'>
           <div className='flex gap-4'>
                <h1  className='text-[#8DF0B2] text-6xl font-bold'>Grow</h1>
                <h1 className='text-[#9DB5FF] text-6xl font-semibold'>OnChain.</h1>
                </div>
                <div className='block'>
                 <p  className='mt-6 '>Onchain Learning platfrom for Axie Infinity & Ronin Ecosystem.</p>
            <button className='bg-[#FF5C38]  mt-8 rounded-3xl h-14 w-32'>Begin</button>
        </div>
           
           </div>
                </div>
            <img className='h-94 w-96 bg-black' src='assets/images/blueboxes.png' alt='' />
            </div>
           
        </div>
      
    </div>
  )
}
