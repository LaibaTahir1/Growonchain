import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-black mt-0 h-[1000px] text-white'>
        <div className=''>
        <div className=' text-white h-[800px] bg-blue-700 flex justify-around   w-600'>
           <div className='block mt-8 '>
           <h1 className='text-green-300 text-2xl font-semibold'>Grow</h1>
            <h1  className='text-purple-500 text-2xl font-semibold'>OnChain</h1>
            <div className='block text-lg mt-4'>
                <h3>twitter</h3>
                <h3>Instagram</h3>
                <h3> discord</h3>
                <h3>opensa</h3>
            </div>
           </div>
            <div className='flex justify-between mt-8 gap-12 text-white'>
            <h2> Term</h2>
            <h2>Pricing</h2>
            <h2>Return Policy</h2>
            <h2>Privacy Policy</h2>
            
            </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Footer
