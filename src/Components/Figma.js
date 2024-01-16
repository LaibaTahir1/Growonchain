import React from 'react'
const FIGMA = [
  {
    id: 1,
    img: '/assets/images/bpic1.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
  {
    id: 1,
    img: '/assets/images/bpic2.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
  {
    id: 1,
    img: '/assets/images/bpic3.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
  {
    id: 1,
    img: '/assets/images/bpic1.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
  {
    id: 1,
    img: '/assets/images/bpic2.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
  {
    id: 1,
    img: '/assets/images/bpic3.png',
    heading: 'Dheeraj Shah',
    title: 'Founder,GrowOnchain',
    txt: 'IND',
  },
];

function Figma() {
  return (
    <div>
      <div className=' text-white'>
        <div className='text-center  mb-20 max-w-[800px] mx-auto w-full  '>
          <div className='bg-[#EDEFFC] pl-10 pr-10 rounded-xl pt-10 pb-10'>
            <h1 className='text-start  text-[#4860DE]  font-semibold text-[30px] md:text-[54px]'>Pricing</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[60px] gap-4'>
              <div className='max-w-[200px]  md:max-w-[400px] mx-auto w-full  pt-3 pb-3 pl-6 pr-6 rounded-xl bg-[#4860DE]'>
                <p className='text-[#55E78C] font-semibold text-xs sm:text-sm md:text-lg pt-6 text-start '>Full course Acess</p>
                <div className='block mt-2'>
                  <div className=  ' flex rounded '>
                    <p className='bg-green-400 text-xs sm:text-sm  md:text-lg font-semibold rounded-l-lg pt-1 pb-1 pl-1.5 pr-1.5 text-start text-[#4860DE]'>Deal 15%</p>
                    <p className='bg-[#EDEFFC] text-xs sm:text-sm  md:text-lg  text-start rounded-r-lg  pt-1 pb-1 pl-1.5 pr-1.5  text-[#4860DE]'>19,000 INR</p>
                  </div>
                  <p className='text-start text-[7px] sm:text-[13px] md:text-[35px] text-[#55E78C] font-semibold '>RS.14,998.oo</p>
                </div>
              </div>
              <div className=' max-w-[200px]  md:max-w-[400px] mx-auto w-full  pt-3 pb-3 pl-6 pr-6 border-4 border-[#4860DE]   rounded-xl bg-[#EDEFFC]'>
                <p className='text-[#4860DE] font-semibold pt-6 text-xs sm:text-sm md:text-lg text-start '>Fundamental Crash Course</p>
                <div className='block mt-2'>
                  <div className='flex   '>
                    <p className=' bg-[#4860DE] font-semibold text-xs sm:text-sm  md:text-lg rounded-l-lg  pt-1 pb-1 pl-1.5 pr-1.5 text-start text-white'>Deal 15%</p>
                    <p className='bg-[#55E78C] font-semibold text-xs sm:text-sm  md:text-lg rounded-r-lg pt-1 pb-1 pl-1.5 pr-1.5 text-[#4860DE]'>19,000 INR</p>
                  </div>
                  <p className='text-start text-[#4860DE] font-semibold text-[7px] sm:text-[13px] md:text-[35px] '>RS.14,998.oo</p>
                </div>
              </div>

            </div>
            <div className='mt-2.5'> <button className='bg-[#95A3EC]  max-w-[710px] mx-auto w-full text-xl pt-1 pb-1 font-semibold  rounded-lg h-10'>Enroll Now</button></div>
          </div>

          <div >
            <h1 className='text-center text-[#8BF0B2]  mt-20 mb-20 text-[30px] md:text-[54px] font-semibold'>Our Partners</h1>
           
            <div className='flex justify-center text-center mt-10 gap-4 items-center'>
            <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center'>
              {FIGMA.map((items, index) => {
                return (

                  <div key={`${items.id}___${index}`}>
                    <img className='' src={items.img} alt='' />
                    <div className='flex justify-center gap-10 border-[4px] border-t-0 rounded-b-xl  border-[#4860DE] '>
                      <div className='pt-2 pb-2 pl-3 pr-3 '>
                        <p className='text-start font-semibold text-lg'>{items.heading}</p>
                        <p className='text-start text-sm font-medium'>{items.title}</p>
                      </div>
                      <p className='text-lg  pt-2 font-normal'>{items.txt}</p>
                    </div>
                  </div>



                );
              })}
            </div>
          </div>
          </div>





        </div>
      </div>
    </div>
  )
}

export default Figma
