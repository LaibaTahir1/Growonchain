import React from 'react'

function LastSwiper(props) {
  return (
    <div>
      <div>
   
    <div className='    mt-12'>
    <div className='bg-[#131413] h-[500px]  rounded-[20px]'>
    <img className='rounded-t-[20px] '  src={props.img} alt='' />
    <div className= ' mt-3.5 pr-3 pl-5'><img src={props.borderImg} alt='' /></div>
    <h2 className='text-2xl pl-5 font-semibold pt-6 leading-8'>{props.title}  </h2>
    <h2 className='text-2xl pl-5 font-semibold leading-8'>{props.heading}</h2>
    <p className='pt-8 text-lg font-normal pl-5'>{props.text}</p>
    <div className='flex gap-2 pt-8 pl-5 pb-7'>
    <img className=' ' src={props.xpImg} alt='' />
      <p className='text-xl font-bold leading-8 '>{props.number}</p>
      {props.boxImg ? <img className='h-[32px] w-[36px]' src={props.boxImg} alt='' /> : null}
    </div>
    </div>
    
    
    </div>
    
  </div>
    </div>
  )
}

export default LastSwiper
