import React from 'react'

function DailyTasks() {
  return (
     <div className='max-w-[1000px] mt-24 mx-auto w-full text-white'>
     <h1 className='text-3xl font-bold'>Daily Tasks</h1>
     <div className=' flex  gap-6 mt-10'>
     <div className='bg-[#131413]  rounded-b-2xl'>
     <img className='rounded-t-2xl max-w-[220px]'  src='assets/images/Task1.png ' alt='' />
     <div className= ' mt-2 w-[220px]'> <img src='assets/images/border.png' alt='' /></div>
     <h2 className='text-xl font-semibold mt-3 pl-2'>What is Ronin?</h2>
     <p className='mt-2 text-sm pl-2'>Ronin</p>
     <div className='flex gap-2 mt-3 pl-2 '>
     <img className='h-6 w-6 mt-1' src='assets/images/XP.png' alt='' />
       <p className='text-xl '>75</p>
       <img className='h-6 w-6' src='assets/images/Bbox.png' alt='' />
     </div>
     </div>
     
     <div className='bg-[#131413]  rounded-b-2xl'>
     <img className='rounded-t-2xl w-[220px]' src='assets/images/Task2.png ' alt='' />
     <div className= ' mt-2 w-[220px]'><img src='assets/images/border.png' alt='' /></div>
     <h2 className='text-xl font-semibold mt-3 pl-2'>Get your .RON Domain!</h2>
     <p className='mt-2 text-sm pl-2'>Ronin</p>
     <div  className='flex gap-2  pl-2 mt-3'>
     <img className='h-6 w-6 mt-1' src='assets/images/XP.png' alt='' />
       <p className='text-xl pl-2'>100</p>
     </div>
     </div>
    <div className='bg-[#131413]  rounded-b-2xl' >
    <img  className='rounded-t-2xl w-[220px]' src='assets/images/Task3.png ' alt='' />
     <div className= ' mt-2 w-[220px] '><img src='assets/images/border.png' alt='' /></div>
     <h2 className='text-xl font-semibold mt-3 pl-2'>Stake that $RON</h2>
     <p className='mt-2 text-sm pl-2'>Ronin</p>
     <div  className='flex gap-2 pl-2 mt-3'>
     <img className='h-6 w-6 mt-1' src='assets/images/XP.png' alt='' />
       <p className='text-xl pl-2'>75</p>
       <img className='h-6 w-6 mt-1' src='assets/images/tBox.png' alt='' />
     </div>
    </div>
    <div className='bg-[#131413]  rounded-b-2xl'>
     <img className='rounded-t-2xl w-[220px] ' src='assets/images/Task4.png'  alt='' />
     <div className= ' mt-2 w-[220px]'><img src='assets/images/border.png' alt='' /></div>
     <h2 className='text-lg font-semibold mt-3 pl-2 '>What is the Axie Infinity?</h2>
     <p className='mt-2 text-sm pl-2'>Axie Infinity</p>
     <div  className='flex gap-2 mt-3 pl-2'>
     <img className='h-6 w-6 mt-1' src='assets/images/XP.png' alt='' />
       <p className='text-xl pl-2'>100</p>
     </div>
     </div>
     </div>
     
   </div>
  )
}

export default DailyTasks
