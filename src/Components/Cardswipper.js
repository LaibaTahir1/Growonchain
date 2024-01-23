import React from 'react'

function Cardswipper(props) {
  console.log(props)
    return (
      <div>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5  mt-12'>
      <div className='bg-[#131413]  rounded-[20px]'>
      <img className='rounded-t-[20px] '  src={props.img} alt='' />
      <div className= ' mt-3.5 pr-3 pl-5'> <img src={props.bimg} alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>{props.title}</h2>
      <p className='mt-3 text-lg font-normal pl-5'>{props.txt}</p>
      <div className='flex gap-2 mt-[29px] pl-5 mb-7'>
      <img className=' ' src={props.Ximg} alt='' />
        <p className='text-xl font-bold leading-8 '>{props.numbr}</p>
        <img className='' src={props.Boximg} alt='' />
      </div>
      </div>
      
      <div className='bg-[#131413]  rounded-[20px]'>
      <img className='rounded-t-[20px] ' src='assets/images/sky.png ' alt='' />
      <div className= ' mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>Get your .RON Domain!</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
      <div  className='flex gap-2 mt-[29px] pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>100</p>
      </div>
      </div>
     <div className='bg-[#131413]  rounded-[20px]' >
     <img  className='rounded-t-[20px] ' src='assets/images/Man.png ' alt='' />
      <div className= ' mt-3.5 pr-3 pl-5 '><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-2xl pl-5 font-semibold mt-4'>Stake that $RON</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Ronin</p>
      <div  className='flex gap-4 mt-[29px] pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>75</p>
        <img className='h-[32px] w-[36px]' src='assets/images/tBox.png' alt='' />
      </div>
     </div>
     <div className='bg-[#131413]  rounded-[20px]'>
      <img className='rounded-t-[20px]' src='assets/images/Bulb.png'  alt='' />
      <div className= '  mt-3.5 pr-3 pl-5'><img src='assets/images/border.png' alt='' /></div>
      <h2 className='text-[24px]  pl-2 font-semibold mt-4'>What is the Axie Infinity?</h2>
      <p className='mt-3 text-lg font-normal pl-5'>Axie Infinity</p>
      <div  className='flex gap-2 mt-[29px] pl-5 mb-7'>
      <img className='' src='assets/images/XP.png' alt='' />
        <p className='text-xl font-bold leading-8'>100</p>
      </div>
      </div>
      </div>
      
    </div>
    )
}

export default Cardswipper
