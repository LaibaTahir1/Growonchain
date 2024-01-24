import React from 'react'

function NewSlider(props) {
  return (
    <div>
      <div >
    
    <div className='   mt-12'>
    <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] '  src={props.img} alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src={props.borderImg} alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold mt-4 leading-8'>{props.title} </h2>
    <h2 className='text-2xl pl-5 font-semibold leading-8'> {props.heading}</h2>
    <p className='mt-3 text-lg font-normal pl-5'>{props.text}</p>
    <div className='flex gap-2 mt-6 pl-5 pb-7'>
    <img className=' ' src={props.xpImg} alt='' />
      <p className='text-xl font-bold leading-8 '>{props.number}</p>
   { props.boxImg ? <img className='h-[32px] w-[36px]' src={props.boxImg} alt='' /> :null}
    </div>
    </div>
    
    {/* <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px] ' src='assets/images/New2.png ' alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border3.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold mt-4'>App. Axie Marketplace</h2>
    <h2 className='text-2xl pl-5 font-semibold '> Overview</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>125</p>
    </div>
    </div> */}
   {/* <div className='bg-[#131413]  rounded-[20px]' >
   <img  className='rounded-t-[20px] ' src='assets/images/New3.png ' alt='' />
   <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border2.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold mt-4'>Mavis Hub: A Brief</h2>
    <h2 className='text-2xl pl-5 font-semibold '>Guide</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-4 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/lock.png' alt='' />
      <p className='text-base font-normal leading-8'>Quest Ended</p>
     
    </div>
   </div> */}
   {/* <div className='bg-[#131413]  rounded-[20px]'>
    <img className='rounded-t-[20px]' src='assets/images/New4.png'  alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border2.png' alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold mt-4'>Mavis Marketplace:</h2>
    <h2 className='text-2xl pl-5 font-semibold '>A Brief Guide</h2>
    <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
    <div  className='flex gap-2 mt-3 pl-5 mb-7'>
    <img className='' src='assets/images/XP.png' alt='' />
      <p className='text-xl font-bold leading-8'>25</p>
      <img className='h-[32px] w-[36px]' src='assets/images/tBox.png' alt='' />
    </div>
    </div> */}
    </div>
    
  </div>
    </div>
  )
}

export default NewSlider
