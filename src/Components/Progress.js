import React from 'react'

function Progress() {
  return (
    <div className='bg-[#131413] rounded-lg max-w-[900px] mx-auto w-full mt-32'>
      <div className='block text-center'>
      <h1 className='text-4xl font-bold text-white'>Learning Progress</h1>
      <div className=' flex justify-center mt-8 gap-[80px] text-center'>
        <p className='text-2xl font-bold text-white'>Level 7</p>
        <p className='text-white mt-1'>566/1,500 XP</p>
      </div>
      <div className='relative mt-4 text-center max-w-[700px] mx-auto w-full'>
        <img src='assets/images/High1.png' alt='' />
        <img src='assets/images/High.png' alt='' />
      </div>
      </div>
    </div>
  )
}

export default Progress
