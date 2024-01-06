import React from 'react'

export default function Top() {
  return (
    <div>
         <div className='max-w-[1400px] mx-auto w-full'>
        <div className='flex justify-around bg-black text-white'>
            <div className='block mt-8'>
            <h1 className='text-[#8DF0B2] text-2xl font-semibold'>Grow</h1>
            <h1 className='text-[#9DB5FF] text-2xl font-semibold'>OnChain</h1>
            </div>
            <div className='flex justify-between gap-10 mt-10 '>
               <div className='flex'>
                <img className='h-5 w-5' src='assets/images/Learn.png' alt='' />
                <p>Learn</p>
               </div>
               <div className='flex'>
                <img  className='h-5 w-5' src='assets/images/Search.png' alt='' />
                <p>Search</p>
               </div>
               <div className='flex'>
                <img  className='h-5 w-5'  src='assets/images/Leaderboard.png' alt='' />
                <p>Leaderboard</p>
               </div>
               <img className='h-12 w-20 mb-2' src='assets/images/Rectangle.png' alt='' />
            </div>
        </div>
      
    </div>
      
    </div>
  )
}
