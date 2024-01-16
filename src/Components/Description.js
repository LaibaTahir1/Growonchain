import React from 'react'

const ABOUT = [
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

function About() {
  return (
    <>
      <div className=' text-white'>
        <div className='text-center max-w-[800px]   mx-auto '>
          <div className='grid grid-cols-2  gap-16 justify-center '>
            <div className='block'>
              <h2 className='font-medium text-start  text-2xl'>OVERVIEW</h2>
              <div className='leading-[51px]'>
                <h1 className='font-semibold  text-start text-[54px]  text-[#9364EB]'>About the </h1>
                <h1 className=' text-start text-[28px] md:text-[54px] font-semibold  text-[#9364EB]'>Course</h1>
              </div>

            </div>
            <p className=' text-start pt-[32px] text-lg font-normal leading-[22px]'>This Web3 Cohort is an invite-only 8 weeks of focused, collaborative learning complete with curated instructional courses, expert guest lectures, demos, and engagement activities to ensure participants walk away with a deep understanding of the Web3 and crypto ecosystem. We will meet twice weekly to learn and demo various protocols, use cases, platforms, and projects. </p>
          </div>
          <div className=' '>
            <div className='grid grid-cols-2   w-full gap-16 mt-20 mb-[60px]'>
              <div className='block leading-[51px]'>
                <h1 className='font-semibold  text-start text-3xl md:text-6xl  text-[#FFB400]'>Know your </h1>
                <h1 className='font-semibold  text-start text-[28px] md:text-[54px]  text-[#FFB400]'>Mentors</h1>
              </div>
              <p className=' text-start text-lg font-normal leading-[22px]'>This Web3 Cohort is an invite-only 8 weeks of focused, collaborative learning complete with curated instructional courses, expert guest lectures, demos, and engagement activities to ensure participants walk away with a deep understanding of the Web3 and crypto ecosystem. We will meet twice weekly to learn and demo various protocols, use cases, platforms, and projects. </p>
            </div>
          </div>


          <div className='flex justify-center text-center mt-10 mb-20 gap-4 items-center'>
            <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center'>
              {ABOUT.map((items, index) => {
                return (

                  <div key={`${items.id}___${index}`}>
                    <img className='' src={items.img} alt='' />
                    <div className=' flex justify-center gap-10 border-[4px] border-t-0 rounded-b-xl  border-[#4860DE] '>
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




      -
    </>
  )
}

export default About
