import React from 'react'

function TrendingSwiper(props) {
  return (
    <div>
      <div >

        <div className='  rounded-b-2xl  mt-11'>
          <div className='bg-[#131413]  rounded-2xl'>

            <div className='min-h-[190px]'>  <img className='rounded-t-2xl pl-12 pr-12 pt-14 mx-auto ' src={props.img} alt='' /></div>
            <h2 className='text-2xl font-bold text-center pt-14 pl-[61px] pr-[61px]'>{props.heading}</h2>
            <p className=' text-center pb-8 pt-4 text-lg font-normal '>{props.text}</p>
          </div>

          {/* <div className='bg-[#131413]    text-center rounded-2xl'>
            <img className='  pt-10 pl-[107px] pr-[107px]  ' src='assets/images/Grow2.png ' alt='' />

            <h2 className='text-2xl font-bold pt-10'>Ronin</h2>
            <p className='pb-8 pt-4 text-lg font-normal '>12 Quests</p>

          </div>
          <div className='bg-[#131413]   text-center rounded-2xl' >
            <img className=' pt-10 pl-11 pr-11 ' src='assets/images/Grow3.png ' alt='' />

            <h2 className='text-2xl font-bold pt-10 '>Axie Infinity</h2>
            <p className=' text-center pb-8 pt-4 text-lg font-normal '>Quests</p>

          </div>
          <div className='bg-[#131413]  text-center rounded-2xl'>
            <img className=' pt-7 pl-20 pr-20  ' src='assets/images/Grow4.png' alt='' />

            <h2 className='text-2xl font-bold pt-10  '>CyberKongz</h2>
            <p className='text-center pb-8 pt-4 text-lg font-normal'>2 Quests</p>

          </div> */}
        </div>

      </div>
    </div>
  )
}

export default TrendingSwiper
