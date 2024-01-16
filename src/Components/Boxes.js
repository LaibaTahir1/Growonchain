import React from 'react'

export default function Boxes() {
  return (
    <div>
       <div className='flex justify-center mt-20 mb-20 gap-[10px]'>
                <div className='w-36 md:w-64 rounded-xl px-3  md:px-6 py-3 md:py-6 pt-1 md:pt-3 pb:1 md:pb-3 text-center text-black bg-[#FFD05C]'>
                    <p className='text-sm font-medium  text-center'>Application open</p>
                    <p className=' font-semibold text-[#0E100F] text-sm md:text-lg'>15 December 2023</p>
                </div>
                <div className='w-36 md:w-64 rounded-xl px-3  md:px-6 py-3 md:py-6 pt-1 md:pt-3 pb:1 md:pb-3 text-center text-black bg-[#FF785A]'>
                    <p className='text-sm font-medium  text-center'>Lat Day to Apply</p>
                    <p className='font-semibold  text-[#0E100F] text-sm md:text-lg'>29 December 2023</p>
                </div>
                <div className='w-36 md:w-64 rounded-xl px-3  md:px-6 py-3 md:py-6 pt-1 md:pt-3 pb:1 md:pb-3 text-center text-black bg-[#55E78C]'>
                    <p className='text-sm font-medium  text-center'>Cohort  Start</p>
                    <p className='font-semibold text-[#0E100F] text-sm md:text-lg'>13 January 2024</p>
                </div>
                </div>
    </div>
  )
}
