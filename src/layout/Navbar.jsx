import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='text-white'>
        <div className=' text-white max-w-[760px] mx-auto w-full flex justify-around '>
          <div className='block mt-8'>
            <h1 className='text-green-300 text-2xl font-semibold'>Grow</h1>
            <h1 className='text-purple-500 text-2xl font-semibold'>OnChain</h1>
          </div>
          <div className='flex justify-between gap-10 mt-10 text-white'>
            <h2> Curriculum</h2>
            <h2>Mentors</h2>
            <h2>FAQ</h2>
            <button className='bg-purple-400  text-white w-24  font-semibold rounded-lg h-10'>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
