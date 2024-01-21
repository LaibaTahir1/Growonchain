import React from 'react'
import Sliders from './Sliders'

function DailyTasks() {
  return (
    <div className='max-w-[1240px] mt-28 mx-auto w-full text-white'>
    <h1 className='text-3xl font-semibold'>Daily Tasks</h1>
   <div className=' flex  gap-5  mt-12'>
    <div className='bg-[#131413]  rounded-b-[20px]'>
    <img className='rounded-t-[20px] '  src='assets/images/Task1.png ' alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>Pray to Atia!</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Axie infinity</p>
    <div className='flex gap-2 mt-6 pl-5 mb-7'>
    <img className=' ' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8 '>100</p>
      <img className='' src='assets/images/Bbox.png' alt='' />
    </div>
    </div>
    
    <div className='bg-[#131413]  rounded-b-[20px]'>
    <img className='rounded-t-[20px] ' src='assets/images/Task2.png ' alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>Restake $AXS</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>75</p>
    </div>
    </div>
   <div className='bg-[#131413]  rounded-b-[20px]' >
   <img  className='rounded-t-[20px] ' src='assets/images/Task3.png ' alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>Restake $RON</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-4 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>50</p>
      <img className='' src='assets/images/tBox.png' alt='' />
    </div>
   </div>
   <div className='bg-[#131413]  rounded-b-[20px]'>
    <img className='rounded-t-[20px]' src='assets/images/Task4.png'  alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-4'>Ascend your Axie</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Axie Infinity</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>75</p>
    </div>
    </div>
    </div>
    
  </div>
  )
}

export default DailyTasks
