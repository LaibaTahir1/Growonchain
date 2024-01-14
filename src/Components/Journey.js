import React from 'react'

function Journey() {
  return (
    <>
    <div className=' text-white'>
    <div  className=  'bg-[#4A2988] pt-10  pl-10 pr-10 pb-10 max-w-[800px] mx-auto w-full   rounded-xl'>
              <div className='flex gap-20 justify-center'>
              <div className='block'> 
              <div className='leading-[51px] pt-10'><h1 className=' font-medium  text-2xl   text-[#32E274] '>Journey </h1>
                <h1 className=' font-semibold text-[54px]  text-white '>Curriculum </h1></div>
                <div className='flex mt-6  gap-8 justify-around'>
                <div  className=' h-32 w-32 text-start pl-3 rounded-xl bg-[#7943DF]'>
                    <p className='text-semibold text-[56px]'>8</p>
                    <p className='text-bold  text-[24px]'>weeks</p>
                </div>
                <div  className='w-32 h-32 text-start pl-3 rounded-xl bg-[#7943DF]'>
                    <p className='text-semibold  text-[56px]'>7</p>
                    <p className='text-bold text-[24px]'>Module</p>
                </div>
        
                </div>
              </div>
                
                <div className='pt-10'><p  className=' text-start pt-8 text-xl leading-[22px] text-bold'>This topic include Blockchain ,Scaling Solution (ZK), Decentralized Finance(Defi) ,Non-Fungible Tokens(NFTS) ,Decentralized Autonomous Organizations (DAOS) ,Governance ,Gaming and Mataverse,Artifical Intelligence,Web3 Social and Consumer Crypto</p></div> 
              </div>

              <div className='mt-20   justify-center items-center mb-10'>
              <div className='     block  justify-center items-center h-52 max-w-[750px] mx-auto w-full bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='pt-3 pl-3' src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 1</p>
                </div>
                <p className='text-start mt-4 pl-4 font-semibold text-2xl' > Blockchain Basics</p>
              </div>
              {/* flex */}
              <div className='flex gap-4  justify-center mt-4  ' >
              <div className='   w-[350px] mx-auto h-52  bg-[#7943DF] rounded-xl'> 
                <div className=' flex justify-between'>
                <img className='pl-3 pt-3'src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 2</p>
                </div>
               <div className='text-start  pl-4 font-semibold text-2xl leading-[22px]'> <p className='text-start mt-4' > Blockchain</p>
                <p >  Scaling</p></div>
              </div>
              <div className=' w-[350px] mx-auto h-52  bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='pl-3 pr-3' src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 3</p>
                </div>
                <div className='text-start pl-4 font-semibold text-2xl leading-[22px]'><p className='text-start mt-4' > Decentralized</p>
                <p  >Finance</p></div>
              </div>
              </div>
              {/* 2 */}
              <div className='flex gap-4 justify-center mt-4  ' >
              <div className='  w-[350px] mx-auto h-52  bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='pl-3 pt-3' src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 4</p>
                </div>
               <div className='text-start pl-4 font-semibold text-2xl leading-[22px]'> <p className='text-start mt-4' > Non-Fungible</p>
                <p  >Tokens</p></div>
              </div>
              <div className='  w-[350px] mx-auto h-52 bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='pl-3 pt-3' src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 5</p>
                </div>
                <div className='text-start pl-4 font-semibold text-2xl leading-[22px]'><p className='text-start mt-4' >Gaming &</p>
                <p  > MetaVerse</p></div>
              </div>
              </div>
              {/* 3 */}
              <div className='flex gap-4 justify-center mt-4  ' >
              <div className='   w-[350px] mx-auto h-52 bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='pl-3 pt-3' src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 6</p>
                </div>
                <div className='text-start pl-4 font-semibold text-2xl leading-[22px]' ><p className='text-start mt-4 ' > DAO </p>
                <p >  Governance & Grants</p></div>
              </div>
              <div className='  w-[350px] mx-auto h-52  bg-[#7943DF] rounded-xl'>
                <div className=' flex  justify-between'>
                <img className='pl-3 pt-3'src="./assets/images/Group.png" alt=''></img>
                <p className='font-semibold text-2xl  pr-3 mt-4'>Week 7</p>
                </div>
               <div className='text-start pl-4 font-semibold text-2xl leading-[22px]'> <p className='mt-4 text-semibold text-2xl ' > Web3 Social </p>
                <p  >  Venture & Beyound!</p></div>
              </div>
              </div>
              </div>

              </div>

    </div>
    </>
  )
}

export default Journey
