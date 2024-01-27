import React from 'react'

function Nav() {
    return (
        <div className='max-w-[1400px] mx-auto pb-[81px] text-white w-full'>
            <div className=' flex gap-[651px]  pt-8'>
                <img className='pl-14 leading-5' src='/assets/images/GrowOnChain.png' alt='' />
                <div className=' flex gap-[88px]'>
                    <div className='flex justify-center gap-4 p-4'>
                       <div className='flex gap-[14px]'> <img className='w-[24px] h-[24px] ' src='/assets/images/AmericaLogo.png' alt='' />
                        <p className='  text-center text-lg  font-semibold leading-normal'>Eng (US)</p></div>
                        <select className='bg-black  '></select>
                    </div>
                   <div className=' flex'>
                   <div className='flex'>
                        <div className='flex gap-[24px]'>
                          <img className='p-4  ' src='/assets/images/RingTone.png ' />
                            <img className='' src='/assets/images/ManLogo.png ' />
                        </div>
                    </div>
                       <div className=' block pl-3'>
                       <div className=' flex gap-[56px] pt-1 '>
                            <h3  className='text-[16px]  pl-[20px] font-medium'>Musfiq</h3>
                            <select className='bg-black'></select>
                           
                        </div>
                        <p className='text-sm font-normal pl-[20px] '>Admin</p>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
