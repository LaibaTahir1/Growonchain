import React from 'react'

export default function Ending() {
  return (
    <div className=' w-full mx-auto '  style={{
      backgroundImage:'url(./assets/images/footer.png)',
      backgroundSize:'cover',
      width:'100%',
      backgroundRepeat:'no-repeat',
    }} >
         <div className='max-w-[1400px] w-full mx-auto p-8 mt-[103px] '>
        <div className=''>
        <div className=' text-white  flex justify-around w-600'>
           <div className='block mt-8 '>
           <img src='assets/images/GrowOnChain.png ' className='w-[101px] h-10 ' alt='' />
           
           <div className=''>
           <div className='block pb-48 text-base font-medium pt-3 '>
                <h3>twitter</h3>
                <h3>Instagram</h3>
                <h3> discord</h3>
                <h3>opensa</h3>
                <h3>Contact Us</h3>
            </div>
            
           </div>
           </div>
            <div className='block text-base font-medium ' >
            <div className='flex justify-between text-bold gap-7 pt-8 text-white'>
            <h2> Terms</h2>
            <h2>Pricing</h2>
            <h2>Return Policy</h2>
            <h2>Privacy Policy</h2>
            </div>
            <div className=' mt-9 flex gap-4'>
                <button className='text-gray-400 text-start pl-4 h-10 rounded-3xl w-64  bg-white'>Your Email</button>
                <button className='text-white text-center pl-2 h-10 rounded-3xl w-32  bg-[#FF5C38]' >Subscribe</button>
            </div>
            </div>
        </div>
        </div>

    </div>
      
    </div>
  )
}
