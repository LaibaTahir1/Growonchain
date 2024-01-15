import React from 'react'

function Footer() {
  return (
    <>
    <div className='mt-20' style={{
      backgroundImage:'url(./assets/images/footer.png)',
      backgroundSize:'cover',
      width:'100%',
      backgroundRepeat:'no-repeat',
    }} >
    
        <div className=' max-w-[800px] mx-auto w-full '>
        <div className=' text-white  pt-8 pb-8 pl-2.5 pr-2.5 flex justify-around max-w-[800px] w-full mx-auto'>
           <div className='block pt-8 pb-8   '>
           <img src='assets/images/GrowOnChain.png ' className='w-[101px] h-10 ' alt='' />
           
            <div className='block text-[16px]  font-medium'>
                <h3 className='mt-2.5'>twitter</h3>
                <h3 className='mt-2.5'>Instagram</h3>
                <h3 className='mt-2.5'> discord</h3>
             <h3 className='mt-2.5'>opensa</h3>
                
            </div>
           </div>
            <div className=' block md:flex justify-between text-[16px] font-medium gap-6 pt-8 text-[#FFFFFF]'>
            <h2> Terms</h2>
            <h2>Pricing</h2>
            <h2>Return Policy</h2>
            <div className='block'><h2>Privacy Policy</h2>
            <p className=' mt-10 '>Copyright.2023</p></div>
            
            </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Footer
