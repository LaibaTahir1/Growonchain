import React from 'react'

export default function Navbar() {
  return (
    <div className='text-white    flex justify-between  max-w-[1240px] mx-auto  py-8 px-7'>
      <div className='ml-2.5 mr-2.5'>
      <img src='assets/images/GrowOnChain.png ' className='w-[101px] h-10 ' alt='' />
      </div>
      <div className='hidden sm:flex justify-between items-center  gap-6 text-lg text-white'>
        <h2> Curriculum</h2>
        <h2>Mentors</h2>
        <h2>FAQ</h2>
        <button className='bg-[#95A3EC] text-md  rounded-[18px]  px-[18px] py-3'>Enroll Now</button>
      </div>
    </div>
  )
}
