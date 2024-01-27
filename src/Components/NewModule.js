import React from 'react'

function NewModule() {
  return (
    <div className='mt-[100px]   text-white'>
      <h1 className='text-[36px] font-semibold'>New Module</h1>
      <div className='grid grid-cols-5 gap-[20px]'>
        <div>
            <p className='bg-[#161616] text-[#5B5C5B] rounded-lg py-[20px] pl-[20px]'>Name & Desc</p>
        </div>
        <div className='flex justify-between bg-[#161616] rounded-lg py-[20px] px-[20px]'>
        <p className='text-[#5B5C5B]'>Upload Images</p>
        <img src='/assets/images/galery2.png' alt='' />
        </div>
        <div>
        <p className='bg-[#161616] text-[#5B5C5B] rounded-lg py-[20px] pl-[20px]'>Option need to be selected</p>
        </div>
        <p className='bg-[#161616] text-[#5B5C5B] rounded-lg py-[20px] pl-[20px]'>Added</p> 
        <p className='bg-[#161616]  rounded-lg py-[20px] pl-[20px] text-[#5B5C5B]'>Module</p>
      </div>
      {/* Section 2 */}
      <div className='grid grid-cols-5 gap-[20px] mt-[20px]'>
        <div>
            <p className='bg-[#161616] text-[#5B5C5B] rounded-lg py-[20px] pl-[20px]'>Chapter</p>
        </div>
        <div className='flex justify-between  bg-[#161616] rounded-lg py-[20px] px-[20px]'>
        <p className='text-[#5B5C5B]'>Categories</p>
       <select className='bg-[#161616]'></select>
        </div>
        <div className='flex justify-between  bg-[#161616] rounded-lg py-[20px] px-[20px]'>
        <p className='text-[#5B5C5B]'>Gain or NFT</p>
       <select className='bg-[#161616]'></select>
        </div>
        <div className=''>
        <p className='bg-[#161616]  rounded-lg py-[20px] pl-[20px] min-w-[546px] text-[#5B5C5B]'>Chain</p>
        
        </div>
      </div>
      {/* Section 3 */}
      <div className='grid grid-cols-5 mt-[20px] gap-[20px]'>
      <p className='bg-[#161616] text-[#5B5C5B]  rounded-lg py-[20px] pl-[20px]'>XP</p>
      <p className='bg-[#161616] text-[#5B5C5B] rounded-lg py-[20px] pl-[20px]'>Chest</p>
      <div className='flex justify-between bg-[#161616] rounded-lg py-[20px] px-[20px]'>
        <p className='text-[#5B5C5B]'>Diffculty</p>
       <select className='bg-[#161616]'></select>
        </div>
        <div className='flex justify-between rounded-lg py-[20px] pl-[20px] min-w-[546px] bg-[#161616] '>
        <p className='  text-[#5B5C5B]'>Component or Optional</p>
        <select className='bg-[#161616] mr-[30px]'></select>
        </div>

      </div>
      
    </div>
  )
}

export default NewModule
