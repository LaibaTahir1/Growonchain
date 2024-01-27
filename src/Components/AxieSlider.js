import React from 'react'

function AxieSlider(props) {
  return (
    <div>
      <div >
  
  <div className='    mt-12'>
  <div className='bg-[#131413] h-[520px]  rounded-[20px]'>
  <img className='rounded-t-[20px] '  src={props.img} alt='' />
  <div className= ' mt-3.5 pr-3 pl-5'><img src={props.borderImg} alt='' /></div>
  <h2 className='text-2xl pl-5 font-semibold pt-7 leading-8'>{props.title}</h2>
  <h2 className='text-lg pl-4 font-normal pt-4'> {props.heading}</h2>
  <p className='pt-14 text-lg font-normal pl-5'>{props.text}</p>
  <div className='flex gap-2 pt-6 pl-5 pb-8'>
  <img className=' ' src={props.xpImg} alt='' />
    <p className='text-xl font-bold leading-8 '>{props.number}</p>
    {props.boxImg ? <img className=' w-[36px] h-[30px] ' src={props.boxImg} alt='' /> :null }
  </div>
  </div>
  
  </div>
  
</div>
    </div>
  )
}

export default AxieSlider
