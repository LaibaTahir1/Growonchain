import React from 'react'

function DashboardHeader() {
    return (
        <div className='text-white pl-[50px]'>
            <h1 className=' font-semibold text-4xl '>Website Metrice</h1>
            <div className='grid grid-cols-4 mt-[30px]  gap-[20px]'>
                <div className='bg-[#161616] flex gap-8 pt-[38px] pb-[20px]  pl-9  rounded-[14px]'>
                    <div className='flex gap-8  '><img className='w-[80px] h-[67px] mt-3 ' src='/assets/images/People.png' alt='' />
                        <div className='' >
                            <p className='font-light mt-1  text-lg'>New Users</p>
                            <p className='font-semibold  mb-0  pb-0 text-[54px]  leading-normal'> 75%</p>
                        </div></div>
                </div>
                <div className='bg-[#161616] flex gap-8 pt-[38px]  pl-8 pb-[20px]  rounded-[14px]'>
                    <img className='w-[80px] h-[67px] mt-3 ' src='/assets/images/People.png' alt='' />
                    <div className='block'>
                        <p className='font-light mt-1 text-lg'>Daily Active User</p>
                        <p className='font-semibold text-[54px] leading-normal'> 45</p>
                    </div>
                </div>
                <div className='bg-[#161616] flex gap-8 pt-[38px]  pl-8 pb-[20px] rounded-[14px]'>
                    <img className='w-[80px] h-[67px] mt-3 ' src='/assets/images/People.png' alt='' />
                    <div className='block'>
                        <p className='font-light mt-1 text-lg'>Monthly Active Users</p>
                        <p className='font-semibold text-[54px] leading-normal'>1000</p>
                    </div>
                </div>
                <div className='bg-[#161616] flex gap-8 pt-[38px] pl-8 pb-[20px]  rounded-[14px]'>
                    <img className='w-[80px] h-[67px] mt-3 ' src='/assets/images/People.png' alt='' />
                    <div className='block'>
                        <p className='font-light mt-1 text-lg'>Total Users</p>
                        <p className='font-semibold text-[54px] leading-normal'> 1500</p>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div className='mt-[20px] '>
                <div className='grid grid-cols-5 gap-[20px]'>
                    <div className='pt-[36px] pl-[26px] pr-[26px] text-center bg-[#161616] rounded-[14px]'>
                        <p className='text-2xl font-semibold'>Completion Rate</p>
                        <p className='text-[#9063E4] text-center text-[44px] font-semibold'>12 K</p>
                    </div>
                    <div className='pt-[36px] pl-[26px] text-center pr-[26px] bg-[#161616] rounded-[14px]'>
                        <p className='text-2xl font-semibold'>Average Time on Site</p>
                        <p className='text-[#F0AB17]  text-center text-[44px]  font-semibold'>10h 30m</p>
                    </div>
                    <div className='pt-[36px] pl-[26px]  pr-[26px] bg-[#161616] rounded-[14px]'>
                        <p className='text-2xl text-center font-semibold'>First Time Wallet </p>
                        <p className='text-2xl text-center font-semibold'> Download</p>
                        <p className='text-[#32E274]  text-center text-[34px]   font-semibold'>351</p>
                    </div>
                    <div className='pt-[36px] pl-[26px] pr-[26px] text-center  bg-[#161616] rounded-[14px]'>
                        <div className='flex  gap-2  '>
                            <p className='text-2xl font-semibold'>Quests </p>
                            <p className='text-2xl font-semibold  mr-[26px]'>Completed</p>
                        </div>
                        <p className='text-[#9063E4] text-center text-[44px] font-semibold'>6000</p>
                    </div>
                    <div className='pt-[36px] pl-[26px] pr-[26px] bg-[#161616] rounded-[14px]'>
                        <p className='text-2xl mb-[8px] font-semibold'>Acquisition Via?</p>
                        <div className=''>
                            <div className='flex gap-[10px]  mb-[8px]'>
                                <img src='/assets/images/Whatsapp.png' alt='' />
                                <div className='block '>
                                    <p className='text-[12px] font-medium'>Whatsapp</p>
                                    <p className='text-[12px] font-semibold text-[#32E274]'>75%</p>
                                </div>
                            </div>
                            <div className='flex gap-[10px] mb-[8px]'>
                                <img src='/assets/images/Facebook.png' alt='' />
                                <div className='block  '>
                                    <p className='text-[12px] font-medium'>Facebook</p>
                                    <p className='text-[12px] font-semibold text-[#32E274]'>75%</p>
                                </div>
                            </div>
                            <div className='flex gap-[10px] py-[8px]'>
                                <img src='/assets/images/Youtube.png' alt='' />
                                <div className='block'>
                                    <p className='text-[12px] font-medium'>Whatsapp</p>
                                    <p className='text-[12px] font-semibold text-[#32E274]'>75%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className='mt-[100px] '>
                <div className='bg-[#161616] mx-auto w-[506px] h-[76px] rounded-full'>
                <div  className='flex justify-center px-[36px] ' >
                    <div className='flex justify-center  py-[26px]  text-lg font-normal gap-[35px]'>
                <p>Lesson</p>
                <p>Chapter</p>
                <p className=' pl-[38px] pr-[40px]'>Module</p></div>
              <div  className='py-[13px] ' >  <p className='px-[42px] text-lg font-semibold rounded-full bg-[#32E274] text-[#090A09] py-[13px]'>All</p></div></div>
                
                </div>
            </div>

        </div>
    )
}

export default DashboardHeader
