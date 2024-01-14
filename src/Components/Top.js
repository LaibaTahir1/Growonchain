import React from 'react'

export default function Top() {
  return (
    <div>
         <div className='max-w-[1400px] mx-auto w-full'>
        <div className='flex justify-around mt-8 bg-black text-white'>
            <div className='block '>
            <img src='assets/images/GrowOnChain.png ' className='w-[101px] h-10 ' alt='' />
            </div>
            <div className='flex justify-between gap-10  '>
               <div className='flex gap-1 leading-normal'>
                <img className='h-5 w-5' src='assets/images/Learn.png' alt='' />
                <p className='text-lg font-medium leading-normal'>Learn</p>
               </div>
               <div className='flex gap-1 leading-normal'>
                <img  className='h-5 w-5' src='assets/images/Search.png' alt='' />
                <p className='text-lg font-medium'>Search</p>
               </div>
               <div className='flex gap-1 leading-normal'>
                <img  className='h-5 w-5'  src='assets/images/Leaderboard.png' alt='' />
                <p className='text-lg font-medium'>Leaderboard</p>
                
               </div>
              <button className='bg-[#32E274] h-12 w-[105px] leading-normal rounded-full'>Sign in</button>
            </div>
        </div>
      
    </div>
      
    </div>
  )
}
