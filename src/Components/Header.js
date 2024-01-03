import React from 'react'

function Header() {
  return (
    <>
    <div  className='bg-black text-white'>
    <div className='justify-center text-center'>
                <div className='flex p-10 justify-center font-semibold text-xl items-centre'>
                    <h2 className='text-white' >SEASON 1 IS </h2>
                <h2 className='text-green-300'>. LIVE</h2>
                <br/>
                </div>
            </div>
            <div className='text-center mt-5'>
            <h1 className='text-white font-extrabold text-8xl'>Web3</h1>
                <h1 className='text-white font-extrabold text-8xl'>Zero-to-Hero</h1>
                <h4 className='text-white mt-5 font-bold text-xl'>An invite only private Community.Become a better designer, </h4>
                <h4 className='text-white mt-5 font-bold '>meet other creatives, find new opportunities and level up your skills</h4>
                <div className='mt-10'>
                <h3 className='font-semibold'>Enrollment is open!</h3>
                <button className='w-80 h-9 font-semibold mt-3 rounded-xl bg-blue-400'>Enroll Now</button>
                <h4 className='mt-3 font-normal'>Limites Seats Only</h4>
                <div className='flex justify-center mt-10 gap-8'>
                <div className='w-64 rounded-lg h-24 text-center text-black bg-yellow-300'>
                    <p className='font-semibold pt-4 text-center'>Application open</p>
                    <p className='font-bold  text-lg'>15 December</p>
                </div>
                <div className='w-64 rounded-lg h-24 text-center text-black bg-red-400'>
                    <p className='font-semibold pt-4 text-center'>Lat Day to Apply</p>
                    <p className='font-bold  text-lg'>29 December 2023</p>
                </div>
                <div className='w-64 rounded-lg h-24 text-center text-black bg-green-400'>
                    <p className='font-semibold pt-4 text-center'>Cohort  Start</p>
                    <p className='font-bold  text-lg'>13 January 2024</p>
                </div>
                </div>
                </div>

            </div>

    </div>
    </>
      

  )
}

export default Header
