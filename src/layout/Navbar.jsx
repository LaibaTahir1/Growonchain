import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='text-white'>
        <div className=' text-white   max-w-[760px] mx-auto w-full flex justify-around '>
          <img className='w-24 h-10  ' src='assets/images/GrowOnChain.png ' alt='' />
          <div className='flex justify-between p-6 gap-10 mt-8 text-white'>
            <h2> Curriculum</h2>
            <h2>Mentors</h2>
            <h2>FAQ</h2>
           <button className='bg-[#95A3EC]  w-28 h-11  rounded-xl  px-4 '>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
