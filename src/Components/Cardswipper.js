import React from 'react'
import Sliders from './Sliders'

function Cardswipper(props) {
  console.log(props)
    return (
      <div>
      <div className='  h-[100%]  mt-12'>
      <div className='bg-[#131413] pb-[29px]  rounded-[20px]'>
      <img className='rounded-t-[20px] '  src={props.img} alt='' />
      <div className= ' mt-3.5 pr-3 pl-5'> <img src={props.bimg} alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>{props.title}</h2>
      <p className='mt-3 text-lg font-normal pl-5'>{props.txt}</p>
      <div className='flex gap-2 mt-[29px] pl-5 mb-7'>
      <img className=' ' src={props.Ximg} alt='' />
        <p className='text-xl font-bold leading-8 '>{props.numbr}</p>
       {props.Boximg  ? <img className='w-[36px] h-[30px]' src={props.Boximg} alt='' /> : null}
      </div> 
      </div>
      
      
      </div>
      
    </div>
    )
}

export default Cardswipper
