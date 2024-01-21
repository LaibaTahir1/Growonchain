import React from 'react'
import Sliders from './Sliders'

function Returning() {
  return ( 
    <div className='max-w-[1240px] mt-28 mx-auto w-full text-white'>
      <h1 className='text-3xl font-bold'>Returning Quests</h1>
      <Sliders /> 
      <div className=' flex  gap-5  mt-12'>
      <div className='bg-[#131413]  rounded-b-[20px]'>
      <img className='rounded-t-[20px] '  src='assets/images/tree.png ' alt='' />
      <div className= ' mt-3.5 pr-3 pl-5'> <img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>What is Ronin?</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
      <div className='flex gap-2 mt-3 pl-5 mb-7'>
      <img className=' ' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8 '>75</p>
        <img className='' src='assets/images/Bbox.png' alt='' />
      </div>
      </div>
      
      <div className='bg-[#131413]  rounded-b-[20px]'>
      <img className='rounded-t-[20px] ' src='assets/images/sky.png ' alt='' />
      <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>Get your .RON Domain!</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
      <div  className='flex gap-2 mt-3 pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>100</p>
      </div>
      </div>
     <div className='bg-[#131413]  rounded-b-[20px]' >
     <img  className='rounded-t-[20px] ' src='assets/images/Man.png ' alt='' />
      <div className= ' mt-3.5 pr-3 pl-5 '><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>Stake that $RON</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
      <div  className='flex gap-4 mt-3 pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>75</p>
        <img className='' src='assets/images/tBox.png' alt='' />
      </div>
     </div>
     <div className='bg-[#131413]  rounded-b-[20px]'>
      <img className='rounded-t-[20px]' src='assets/images/Bulb.png'  alt='' />
      <div className= '  mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>What is the Axie Infinity?</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Axie Infinity</p>
      <div  className='flex gap-2 mt-3 pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>100</p>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Returning
