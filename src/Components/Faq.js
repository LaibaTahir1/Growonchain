import React from 'react'
const FAQ = [
  {
    id: 1,
    img: '/assets/images/arrow2.png',
    titile: 'What is the time Commitment?',
  },
  {
    id: 2,
    img: '/assets/images/arrow2.png',
    titile: 'Who is web three cohort for? What if i nothing about Web3?',
  },
  {
    id: 3,
    img: '/assets/images/arrow2.png',
    titile: 'What will i learn in this chorot?',
  },
  {
    id: 4,
    img: '/assets/images/arrow2.png',
    titile: 'What is the Web3 Cohort?',
    heading: 'Our invites-only cohort empower people to unlock financial fredom through crypto education ,experimantation, and community. Through cohort base learning member will explore and gain learning experience using the top blockchain protocols and applications.',
    list: '40 ¬ hours of content via a comprehensive learning program:',
    li1: 'Live Classes + Demo + Live Q&A Sessions',
    li2: 'Access to Recordings & Class Materials, Step-by-Step How-to Guides, & Quizzes',
    li3: 'Membership NFT & Certification NFT',
    li4: 'Community discussion platform for continued learning & Building connection',
    li5: 'Guest Speakers for leading crypto companies and VC firm',
  },
];
function Faq() {
  return (
    <div className=' text-white'>
      <div className='max-w-[800px] mx-auto w-full '>
        <div className='' > <h1 className='text-[#4860DE] p-2 text-start  text-[54px] font-semibold '>FAQS</h1></div>
        <div className='mt-[60px] text-start  '>
          {FAQ.map((items ,index) => {
            return (
              <div key={`${items.id}___${index}`}><div className='flex  pb-3 pl-3 pr-3  gap-2.5  bg-[#93A4F3] max-w-[800px] mx-auto w-full rounded-xl '>
                <img className='pt-3' src={items.img} alt='' />
                <h1 className=' text-[#2C3B87] pt-3  text-start   font-semibold text-lg md:text-2xl'>{items.titile} </h1>
              </div>


                <div><div className=' rounded-t-lg   mt-4 '>
                <h1 className='block justify-center pt-3 pl-8 pr-8 pb-6 text-white bg-[#2C3B87]  max-w-[800px] w-full mx-auto text-sm md:text-lg  font-medium'>{items.heading}</h1>
                <div className='block rounded-b-lg justify-center  text-white bg-blue-900      font-bold text-lg  '>
                  <ul className='block justify-center  pl-14 pr-12  text-white bg-[#2C3B87] list-disc  max-w-[800px] w-full mx-auto text-sm md:text-lg  font-medium'><li> {items.list}</li>  </ul>
                  <div className='block justify-center pl-3 pr-3  text-white bg-[#2C3B87]  max-w-[800px] w-full mx-auto text-sm md:text-lg  font-medium'>
                    <ul className='list-disc pl-16 pr-16'><li> {items.li1} </li> </ul>
                    <ul className='list-disc pl-16 pr-10'><li>{items.li2}</li> </ul>
                    <ul className='list-disc pl-16 pr-16'><li> {items.li3} </li> </ul>
                  </div>
                  <div className='block rounded-b-lg  pt-3 pl-3 pr-3 pb-6 text-white bg-[#2C3B87]  max-w-[800px] w-full mx-auto  text-sm md:text-lg font-medium'>
                    <ul className='list-disc pl-11 pr-11'>  <li>{items.li4}</li></ul>
                    <ul className='list-disc pl-11 pr-11'>  <li>{items.li5}</li></ul>
                  </div>
                </div>
              </div></div></div>
            );
          })}
        </div>

        <div className='   text-white text-start mt-20 '>
          <h1 className=' text-[16px] md:text-[22px] font-normal'>Have more Question? Drop us a mail at  </h1>
          <div className='flex gap-1'> <h1 className='mt-4  text-[16px] md:text-[22px] font-medium'>web3withdhee@gmail.com</h1>
            <img src='assets/images/copy.png' alt=' ' /> </div>
        </div>
      </div>


    </div>
  )
}

export default Faq
