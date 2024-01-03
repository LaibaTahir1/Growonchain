import React from 'react'

function Layout() {
  return (
    <>
    <div className='bg-black mt-0 text-white'>
    <div className=' text-white  bg-black flex justify-around   w-600'>
           <div className='block mt-8'>
           <h1 className='text-green-300 text-2xl font-semibold'>Grow</h1>
            <h1  className='text-purple-500 text-2xl font-semibold'>OnChain</h1>
           </div>
            <div className='flex justify-between mt-8 gap-12 text-white'>
            <h2> Curriculum</h2>
            <h2>Mentors</h2>
            <h2>FAQ</h2>
            <button className='bg-purple-400 text-white w-24 font-semibold rounded-lg h-9'>Enroll Now</button>
            </div>
        </div>
    </div></>
  )
}

export default Layout

