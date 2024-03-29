import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
  return (
    <div>
         <div className='max-w-[1200px] mx-auto w-full'>
        <div className=' block lg:flex justify-around gap-[675px] text-white'>
            <div className='block mt-11'>
           <Link to={'/Home'}> <img src='assets/images/GrowOnChain.png ' className='w-[101px] h-10 ' alt='' /></Link>
            </div>
            <div className=' flex justify-between items-center mt-11 gap-[23px]  '>
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
              <button className='text-lg font-medium bg-[#32E274] h-12 w-[105px] leading-normal rounded-full'>Sign in</button>
            </div>
        </div>
      
    </div>
      
    </div>
  )
}
