import React from 'react'


function Benefit() {
  return (
    <>

      <div className='mt-20 mb-20  text-white'>
        <div className='bg-[#FFE8AF] max-w-[800px] p-10  mx-auto w-full rounded-xl   '>
          <div><h1 className='text-start   text-[#9C7924] font-semibold text-[30px] md:text-[54px]'>Benefits</h1></div>
          <div className=' block md:flex justify-center gap-4  mt-[60px]'>
            <div className='pl-3 pt-3 max-w-[520px] mx-auto w-full h-[200px] flex flex-col  rounded-xl  bg-[#FFD05C]'>
              <div className='flex-1'><img className=' ' src="./assets/images/Vector.png" alt="" /></div>
              <div className='leading-[22px] pb-3'><p className='   text-[#9C7924] font-semibold text-[12px] md:text-[24px]   text-start '> Career</p>
                <p className='text-start   text-[#9C7924] font-semibold text-[12px] md:text-[24px]'>Launchpad</p></div>
            </div>
            <div className='pl-3 pt-3 max-w-[230px] mx-auto w-full rounded-xl h-[200px]  flex flex-col bg-[#FFD05C]'>
              <div className='flex-1'><img className='' src="./assets/images/Vector.png" alt="" /></div>
              <p className='   text-[#9C7924]  font-semibold text-[12px] md:text-[24px] pb-3 text-start'> Knowledge</p>
            </div>
          </div>
          <div className=' grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 justify-center mt-4'>
            <div className='pl-3 pt-3  h-[200px]  flex flex-col rounded-xl  bg-[#FFD05C]'>
              <div className='flex-1'> <img className='w' src="./assets/images/Vector.png" alt="" /></div>
              <div className='leading-[22px] pb-3'> <p className=' mt-8 text-[#9C7924] font-semibold text-[12px] md:text-[24px]  text-start'> Ticket to</p>
                <p className='text-start  text-[#9C7924] font-semibold text-[12px] md:text-[24px] '>Web3 Events</p></div>
            </div>
            <div className='pl-3 pt-3  h-[200px]  flex flex-col rounded-xl   bg-[#FFD05C]'>
              <div className='flex-1'> <img className=' ' src="./assets/images/Vector.png" alt="" /></div>
              <p className='  text-[#9C7924] font-semibold text-[12px] md:text-[24px] pb-3 text-start'> Network</p>
            </div>
            <div className='pl-3 pt-3  h-[200px]  flex flex-col rounded-xl  bg-[#FFD05C]'>
              <div className='flex-1'> <img className='' src="./assets/images/Vector.png" alt="" /></div>
              <div className='leading-[22px] pb-3'><p className='  text-[#9C7924] font-semibold text-[12px] md:text-[24px]  text-start'>Exclusive</p>
                <p className='  text-[#9C7924] font-semibold text-[12px] md:text-[24px]  text-start'>Guest</p></div>
            </div>
          </div>
          <div className='grid grid-cols-1 justify-center mt-4 '>
            <div className='  h-[200px] pl-3 pt-3 flex flex-col rounded-xl  bg-[#FFD05C]'>
              <div className='flex-1'><img className='' src="./assets/images/Vector.png" alt="" /></div>
              <p className='  text-[#9C7924] font-semibold text-[12px] md:text-[24px] pb-3  text-start'> Network</p>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Benefit
