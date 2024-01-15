import React from 'react'

function Progress() {
  return (
    <div className=' mt-14 rounded-[20px]  bg-[#131413] max-w-[1240px] mx-auto w-full '>
      <div className='block mt-7 mb-8 text-center'>
      <h1 className='text-[43px] font-semibold leading-[58px] mt-7 text-white'>Learning Progress</h1>
      <div className=' flex justify-center leading-10 mt-10 gap-32 text-center'>
        <p className='text-[32px] font-semibold text-white'>Level 7</p>
        <p className='text-white text-lg font-normal mt-1'>566/1,500 XP</p>
      </div>
      <div className=' mt-5 pb-8  mb-8 text-center max-w-[700px] mx-auto w-full'>
        <p className='rounded-full   bg-[#373938] max-w-[604px] w-full mx-auto h-[11px]'></p>
        <p className=' rounded-full  max-w-[537px] w-full mx-aut0 h-[11px] bg-gradient-to-r from-[#FF5C38]  via-[#FFC63B]  to-[#32E274]  '></p>
      </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Progress
