import React from 'react'

function ActionSection() {
    return (
        <div className='mt-[100px]   text-white'>
            <h1 className='text-[22px] font-semibold'>Action Required</h1>
            <div className='mt-[30px]'>
                <div className='  '>
                    <div className='block py-[40px] px-[24px] bg-[#161616] rounded-[24px] '>
                        <div className='flex justify-between '>
                            <p className='bg-[#212221]  rounded-[7px] text-[#909190]  py-[20px] pl-[20px] pr-[569px]'>Text..</p>
                            <div className='flex justify-between  rounded-[7px] gap-[102px] p-[20px] bg-[#212221]'>
                                <p>Normal Info Page </p>
                                <select className='bg-[#212221]'></select>
                            </div>
                        </div>

                        <div className='mt-[20px]  '>
                            <div className='   bg-[#212221]  w-[626px]  rounded-[7px]  '>
                                <img className=' pt-[49px] px-[280px] ' src='/assets/images/galery1.png' alt='' />
                                <p className='mt-[20px] px-[270px] '>Drag & Drop</p>
                                <p className=' mt-[10px] px-[200px] font-medium text-base text-[#909190] pb-[49px]'>Upload Up to 20 MB Image Size</p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='px-[24px] py-[40px] bg-[#161616] rounded-[24px]'>
                        <div className='flex justify-between '>
                           <div  className='flex gap-[462px]  rounded-[7px]  py-[20px] px-[20px]  bg-[#212221]'>
                           <p className='bg-[#212221]  text-[#909190]  '>Single Choice</p>
                            <select className='bg-[#212221]'></select>
                           </div>
                            <div className='flex gap-[160px]  rounded-[7px]  p-[20px] bg-[#212221]'>
                                <p>Quiz Poll</p>
                                <select className='bg-[#212221]'></select>
                            </div>
                        </div>
                        <div className='mt-[30px]'>
                        <div >    
                        <div className='flex gap-[20px]'>
                       <div className='block'>
                        <p className='mb-[10px] text-[16px] font-semibold'>Right Option</p>
                       <div className='flex gap-[230px]  rounded-[7px]  p-[20px] bg-[#212221]'>
                                <p className=' '>1</p>
                                <select className='bg-[#212221]'></select>
                            </div>
                       </div>
                            <div className='block'>
                            <p className='mb-[10px] text-[16px] font-semibold'>Wrong Option</p>
                            <div className='flex gap-[230px]  rounded-[7px]  p-[20px] bg-[#212221]'>
                                <p className=' '>B</p>
                                <select className='bg-[#212221]'></select>
                            </div>
                            </div>
                       </div>
                        </div>
                        <div  className='mt-[30px]  rounded-[7px]   py-[20px]  w-[630px] bg-[#212221]'>
                           <p className='bg-[#212221] pl-[20px] pr-[571px] text-[#909190]  '>Text...</p>
                           
                           </div>

                        </div>

                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default ActionSection
