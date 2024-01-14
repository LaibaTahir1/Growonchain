import React from 'react'

export default function Boxes() {
  return (
    <div>
       <div className='flex justify-center mt-20 mb-20 gap-[10px]'>
                <div className='w-64 rounded-xl   px-6 py-6 pt-3 pb-3 text-center text-black bg-[#FFD05C]'>
                    <p className='text-sm font-medium  text-center'>Application open</p>
                    <p className=' font-extrabold text-[#0E100F] text-lg'>15 December 2023</p>
                </div>
                <div className='w-64 rounded-xl  px-6 py-6 pt-3 pb-3 text-center text-black bg-[#FF785A]'>
                    <p className='text-sm font-medium  text-center'>Lat Day to Apply</p>
                    <p className='font-semibold  text-[#0E100F] text-lg'>29 December 2023</p>
                </div>
                <div className='w-64 rounded-xl  px-6 py-6 pt-3 pb-3 text-center text-black bg-[#55E78C]'>
                    <p className='text-sm font-medium  text-center'>Cohort  Start</p>
                    <p className='font-semibold text-[#0E100F] text-lg'>13 January 2024</p>
                </div>
                </div>
    </div>
  )
}
