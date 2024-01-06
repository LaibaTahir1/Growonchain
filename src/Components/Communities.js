import React from 'react'

function Communities() {
  return (
    <div>
       <div className='max-w-[1000px] mt-24 mx-auto w-full text-white'>
     <h1 className='text-3xl font-bold'>Trending Communities</h1>
     <div className=' flex  rounded-b-2xl gap-6 mt-10'>
     <div className='bg-[#131413] h-52 rounded-2xl'>
     <img className='rounded-t-2xl p-6'  src='assets/images/Grow1.png ' alt='' />
     <h2 className='text-xl text-center font-semibold mt-3 pl-2'>Grow OnChain</h2>
     <p className='mt-2 text-center text-sm pl-2'>69 Quest</p>
     </div>
     
     <div className='bg-[#131413] h-52 w-56  p-6  text-center rounded-2xl'>
     <img className=' w-18 h-18  ml-14  ' src='assets/images/Grow2.png ' alt='' />
     
     <h2 className='text-xl font-semibold mt-3 pl-2'>Ronin</h2>
     <p className='mt-2 text-sm pl-2'>12 Quests</p>
     
     </div>
    <div className='bg-[#131413]  h-52 w-56 text-center rounded-2xl' >
    <img  className='p-6 ' src='assets/images/Grow3.png ' alt='' />
     
     <h2 className='text-xl font-semibold mt-1'>Axie Infinity</h2>
     <p className='mt-2 text-sm '>Quests</p>
    
    </div>
    <div className='bg-[#131413] p-2 h-52 w-56 text-center rounded-2xl'>
     <img className='  w-24 h-24 ml-10 mt-4 ' src='assets/images/Grow4.png'  alt='' />
     
     <h2 className='text-lg font-semibold mt-6 pl-2 '>CyberKongz</h2>
     <p className='mt-2 text-sm pl-2'>2 Quests</p>
    
     </div>
     </div>
     
   </div>
    </div>
  )
}

export default Communities
