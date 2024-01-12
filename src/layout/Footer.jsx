import React from 'react'

function Footer() {
  return (
    <>
    <div className=' bg-[image-assets/images/Footer.png] mt-0 '>
     
        <div className=' bg-blue-700 max-w-[760px] mx-auto w-full'>
        <div className=' text-white h-[600px] bg-blue-700 flex justify-around w-600'>
           <div className='block mt-8 '>
           <h1 className='text-green-300 text-2xl font-semibold'>Grow</h1>
            <h1  className='text-purple-600 text-2xl font-semibold'>OnChain</h1>
            <div className='block text-lg mt-4'>
                <h3>twitter</h3>
                <h3>Instagram</h3>
                <h3> discord</h3>
                <h3>opensa</h3>
            </div>
           </div>
            <div className='flex justify-between text-bold gap-10 mt-10 text-white'>
            <h2> Terms</h2>
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
