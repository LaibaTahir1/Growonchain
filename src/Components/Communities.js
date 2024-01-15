import React from 'react'

function Communities() {
  return (
    <div>
      <div className='max-w-[1240px] mt-28 mx-auto w-full text-white'>
        <h1 className='text-3xl font-semibold'>Trending Communities</h1>
        <div className=' flex  rounded-b-2xl gap-12 mt-10'>
          <div className='bg-[#131413]  rounded-2xl'>
      
            <img className='rounded-t-2xl '  src='assets/images/Grow1.png ' alt='' />
     <h2 className='text-xl text-center '>Grow OnChain</h2>
     <p className='mt-2 text-center text-sm pl-2'>69 Quest</p>
          </div>

          <div className='bg-[#131413]  p-6  text-center rounded-2xl'>
            <img className='     ' src='assets/images/Grow2.png ' alt='' />

            <h2 className='text-xl font-semibold mt-3 pl-2'>Ronin</h2>
            <p className='mt-2 text-sm pl-2'>12 Quests</p>

          </div>
          <div className='bg-[#131413]   text-center rounded-2xl' >
            <img className=' ' src='assets/images/Grow3.png ' alt='' />

            <h2 className='text-xl font-semibold mt-1'>Axie Infinity</h2>
            <p className='mt-2 text-sm '>Quests</p>

          </div>
          <div className='bg-[#131413]  text-center rounded-2xl'>
            <img className='   ' src='assets/images/Grow4.png' alt='' />

            <h2 className='text-lg '>CyberKongz</h2>
            <p className=''>2 Quests</p>

          </div>
        </div>

      </div>
    </div>
  )
}


export default Communities
