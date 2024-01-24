import React from 'react'

function TaskSwipper(props) {
  return (
    <div>
      <div >
   
   <div className='    mt-12'>
    <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] '  src={props.img} alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>{props.title}</h2>
    <p className='mt-3 text-lg font-normal pl-5'>{props.heading}</p>
    <div className='flex gap-2 mt-6 pl-5 pb-[31px]'>
    <img className=' ' src={props.xpImg} alt='' />
      <p className='text-xl font-bold leading-8 '>{props.number}</p>
      <img className='h-[32px] w-[36px] ' src={props.boxImg} alt='' />
    </div>
    </div>
{/*     
    <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] ' src='assets/images/Task2.png ' alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>Restake $AXS</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>75</p>
    </div>
    </div>
   <div className='bg-[#131413]  rounded-[20px]' >
   <img  className='rounded-t-[20px] ' src='assets/images/Task3.png ' alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-6'>Restake $RON</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-4 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>50</p>
      <img className='h-[32px] w-[36px]' src='assets/images/tBox.png' alt='' />
    </div>
   </div>
   <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px]' src='assets/images/Task4.png'  alt='' />
    
    <h2 className='text-2xl pl-5 font-semibold mt-4'>Ascend your Axie</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Axie Infinity</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>75</p>
    </div>
    </div> */}
    </div>
    
  </div>
    </div>
  )
}

export default TaskSwipper
