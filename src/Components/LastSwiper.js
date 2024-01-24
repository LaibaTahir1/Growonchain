import React from 'react'

function LastSwiper(props) {
  return (
    <div>
      <div>
   
    <div className='    mt-12'>
    <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] '  src={props.img} alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src={props.borderImg} alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold pt-6 leading-8'>{props.title}  </h2>
    <h2 className='text-2xl pl-5 font-semibold leading-8'>{props.heading}</h2>
    <p className='pt-8 text-lg font-normal pl-5'>{props.text}</p>
    <div className='flex gap-2 pt-8 pl-5 pb-7'>
    <img className=' ' src={props.xpImg} alt='' />
      <p className='text-xl font-bold leading-8 '>{props.number}</p>
      <img className='h-[32px] w-[36px]' src={props.boxImg} alt='' />
    </div>
    </div>
    
    {/* <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] ' src='assets/images/Axie2.png ' alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold pt-6'>A Guide to Project T</h2>
    <p className='pt-14 text-lg font-normal pl-5'>Axie infinity</p>
    <div  className='flex gap-2 pt-8 pl-5 pb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>50</p>
      <img className='h-[32px] w-[36px]' src='assets/images/tBox.png' alt='' />
    </div>
    </div> */}
   {/* <div className='bg-[#131413]  rounded-[20px]' >
   <img  className='rounded-t-[20px] ' src='assets/images/Axie3.png ' alt='' />
   <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold pt-6'>Learn Axie Classic!</h2>
    <p className='pt-14 text-lg font-normal pl-5'>Axie infinity</p>
    <div  className='flex gap-2 pt-8 pl-5 pb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-base font-normal leading-8'>75</p>
     
    </div>
   </div> */}
   {/* <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px]' src='assets/images/Axie4.png'  alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border2.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold pt-6'>Create a multisig with </h2>
    <h2 className='text-2xl pl-5 font-semibold '>Ronin Safe</h2>
    <p className='pt-7 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-2 pt-9 pl-5 pb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>100</p>
     
    </div>
    </div> */}
    </div>
    
  </div>
    </div>
  )
}

export default LastSwiper
