import React from 'react'

function ModuleSection() {
    return (
        <div className='text-white mt-[100px]'>
            <h1 className='text-[36px] font-semibold' >Module Metrics</h1>
            <div className='grid grid-cols-4 gap-[20px] mt-[30px]'>
                <div className='px-[63px] py-[52px] bg-[#161616] rounded-[14px] text-center'>
                    <p className='text-2xl font-medium'>Completion Rate</p>
                    <p className='text-4xl font-semibold text-[#D24F32]'>88%</p>
                </div>
                <div className='px-[63px] py-[52px] bg-[#161616] rounded-[14px] text-center'>
                    <p className='text-2xl font-medium'>Quiz Accyracy</p>
                    <p className='text-4xl font-semibold mt-[10px] text-[#32E274]'>354</p>
                </div>
                <div className='px-[63px] py-[52px] bg-[#161616] rounded-[14px] text-center'>
                    <p className='text-2xl font-medium'>Time taken to</p>
                    <p className='text-2xl font-medium'> complete module</p>
                    <p className='text-4xl font-semibold mt-[10px] text-[#32E274]'>6h</p>
                </div>
                <div className='px-[63px] py-[52px] bg-[#161616] rounded-[14px] text-center'>
                    <p className='text-2xl font-medium'>Pre-Completed Module</p>
                    <p className='text-sm text-center text-[#8F9BAB]'>task was already done before </p>
                    <p className='text-sm text-center text-[#8F9BAB]'>joining the website</p>
                    <div className='flex justify-center gap-[7px] text-center'>
                        <p className='text-4xl font-semibold mt-[10px] text-center text-[#FFC63B]'>450</p>
                        <p className='text-sm pt-6'>Tasks</p>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className='grid grid-cols-4 mt-[20px] gap-[20px]'>
                <div className='px-[13px] py-[50px] bg-[#161616] rounded-[14px]'>
                    <h2 className='font-semibold text-center  text-2xl'>User Participated</h2>
                    <p className='text-sm text-center text-[#8F9BAB]'>From all projects</p>
                    <div className='bg-[#1F201F] mt-[20px] rounded-[20px]'>
                        <div className='flex justify-between px-[15px] pt-[17px]'>
                            <p className='text-sm text-[#8F9BAB]'>0%</p>
                            <p className='text-sm text-[#8F9BAB]'>100%</p>
                        </div>
                        <div className='block pb-[20px]  text-center'>
                            <p className='text-[28px] font-semibold'>95</p>
                            <p className='text-sm text-[#8F9BAB]'>Completed</p>
                        </div>
                    </div>

                </div>
                <div className='px-[63px] pt-[125px] bg-[#161616] rounded-[14px] text-center'>
                    <p className='text-2xl font-medium'>Bounce Rate</p>
                    <p className='text-4xl font-semibold text-[#9063E4]'>84%</p>
                </div>
                <div className='px-[63px] pt-[60px] pb-[28px] bg-[#161616] rounded-[14px] text-center' >
                    <p className='font-semibold text-center  text-2xl'>Active Quests</p>
                    <div className='block text-center bg-[#1F201F] rounded-[14px] pt-[14px]'>
                        <p className='font-semibold text-[17px]  text-[#A0AEC0]'>Quests</p>
                        <p className='text-[20px] font-semibold'>150</p>
                    </div>
                    <div className='block text-center mt-[10px] bg-[#1F201F] rounded-[14px] pt-[14px]'>
                        <p className='font-semibold text-[17px] text-[#A0AEC0]'>Invited</p>
                        <p className='text-[20px] font-semibold'>145 people</p>
                    </div>
                </div>
                <div className='bg-[#161616] rounded-[14px]'>
                    <div className='pt-[7px] pl-[21px] bg-[#1F201F] rounded-t-[14px]'>
                        <p className='font-bold  text-xl'>Popular Modules</p>
                        <div className='flex justify-between pb-[10px] '>
                            <p className='text-[#A3AED0]'>Name</p>
                            <p className='pr-[42px] text-[#A3AED0]'>Artwork</p>
                        </div>
                    </div>
                    <div className='pt-[14px] px-[45px]'>
                        <div className='flex justify-between'>
                            <div className='flex justify-center align-center gap-[8px]'>
                                <img src='/assets/images/People1.png' alt='' />
                                <p className='font-bold text-center text-sm'>@maddison_c21</p>
                            </div>
                            <p className='text-sm font-medium'>9821</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <div className='flex gap-[8px]'>
                                <img src='/assets/images/People2.png' alt='' />
                                <p className='font-bold text-center text-sm'>@Karl.will02</p>
                            </div>
                            <p className='text-sm font-medium'>7032</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <div className='flex text-center gap-[8px]'>
                                <img src='/assets/images/People3.png' alt='' />
                                <p className='font-bold text-center text-sm'>@andreea.1z</p>
                            </div>
                            <p className='text-sm font-medium'>5204</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <div className='flex gap-[8px]'>
                                <img src='/assets/images/People4.png' alt='' />
                                <p className='font-bold text-center text-sm'>@abraham47.y</p>
                            </div>
                            <p className='text-sm font-medium'>4309</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModuleSection
