import React from 'react'

function Header() {
    return (
        <>
            <div className=' text-white  ' style={{
                backgroundImage: 'url(./assets/images/Navbg.png)',
                backgroundSize: 'cover',
                width: '100%',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='max-w-[1240px] mx-auto text-center  w-full'>
                    <div className=' justify-center text-center'>
                        <div className='flex p-10 justify-center font-semibold text-xl items-centre'>
                            <h2 className='text-white' >SEASON 1 IS </h2>
                            <h2 className='text-green-300'>. LIVE</h2>

                        </div>
                        <img src='assets/images/Web3.png' className='mb-4 mt-4 mx-auto align-center text-center' alt='' />
                    </div>
                    <div className='text-center leading-8 mt-5'>
                        <h4 className='text-white mt-4 font-medium text-[12px] sm:text-[18px] md:text-[27px]'>An invite only private Community.Become a better designer, </h4>
                        <h4 className='text-white font-medium  text-[12px] sm:text-[18px] md:text-[27px]'>meet other creatives, find new opportunities and level up your skills.</h4>
                        <div className='mt-[60px]'>
                            <h3 className='font-medium text-sm'>Enrollment is open!</h3>
                            <div className='mt-3 mb-3'> <button className=' w-56 md:w-80 h-[30px] md:h-[46px] text-[10px] md:text-[16px] font-semibold  rounded-xl  pl-2 md:pl-4 pr-2 md:pr-4  pb-3 md:pb-3  bg-[#95A3EC]'>Enroll Now</button></div>
                           
                            <h4 className='mt-3 font-normal'>Limites Seats Only</h4>

                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default Header
