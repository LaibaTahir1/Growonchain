import React from 'react'

function Journey() {
  return (
    <>
    <div className=' text-white'>
    <div  className=  'bg-[#4A2988]  p-10 max-w-[760px] mx-auto w-full   rounded-lg'>
              <div className='flex gap-20 justify-center'>
              <div className='block'> 
              <h1 className=' font-extrabold text-xl  mt-6 text-green-400'>Journey </h1>
                <h1 className=' font-extrabold text-2xl  text-white '>Curriculum </h1>
                <div className='flex mt-8  gap-8 justify-around'>
                <div  className=' h-32 w-32 text-start p-3 rounded-lg bg-[#7943DF]'>
                    <p className='text-bold text-6xl'>8</p>
                    <p className='text-bold mt-4 text-3xl'>weeks</p>
                </div>
                <div  className='w-32 h-32 text-start p-3 rounded-lg bg-[#7943DF]'>
                    <p className='text-bold text-6xl'>7</p>
                    <p className='text-bold mt-4 text-3xl'>Module</p>
                </div>
        
                </div>
              </div>
                
                <p  className='w-96 text-start mt-10 text-xl text-bold'>This topic include Blockchain ,Scaling Solution (ZK), Decentralized Finance(Defi) ,Non-Fungible Tokens(NFTS) ,Decentralized Autonomous Organizations (DAOS) ,Governance ,Gaming and Mataverse,Artifical Intelligence,Web3 Social and Consumer Crypto</p> 
              </div>

              <div className='mt-20   justify-center items-center mb-10'>
              <div className='     block  justify-center items-center h-64 bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14' src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 1</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > Blockchain Basics</p>
              </div>
              {/* flex */}
              <div className='flex gap-6 justify-center mt-10  ' >
              <div className='   w-80 h-48  bg-[#7943DF] rounded-xl'> 
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14'src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 2</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > Blockchain</p>
                <p className='text-start ml-4 text-bold text-2xl' >  Scaling</p>
              </div>
              <div className=' w-80 h-48  bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14' src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 3</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > Decentralized</p>
                <p className='text-start ml-4 text-bold text-2xl' >Finance</p>
              </div>
              </div>
              {/* 2 */}
              <div className='flex gap-6 justify-center mt-10  ' >
              <div className='  w-80 h-48  bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14' src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 4</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > Non-Fungible</p>
                <p className='text-start ml-4 text-bold text-2xl' >Tokens</p>
              </div>
              <div className='  w-80 h-48 bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14' src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 5</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' >Gaming &</p>
                <p className='text-start ml-4 text-bold text-2xl' > MetaVerse</p>
              </div>
              </div>
              {/* 3 */}
              <div className='flex gap-6 justify-center mt-10  ' >
              <div className='   w-80 h-48 bg-[#7943DF] rounded-xl'>
                <div className=' flex justify-between'>
                <img className='w-14 m-4 mt-4  h-14' src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 6</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > DAO </p>
                <p className='text-start ml-4 text-bold text-2xl' >  Governance & Grants</p>
              </div>
              <div className=' mb-10  w-80 h-48  bg-[#7943DF] rounded-xl'>
                <div className=' flex  justify-between'>
                <img className='w-14 m-2 mt-4  h-14'src="./assets/images/Group.png" alt=''></img>
                <p className='font-bold text-lg  mr-8 mt-4'>Week 7</p>
                </div>
                <p className='text-start ml-4 text-bold text-2xl' > Web3 Social </p>
                <p className='text-start ml-4 text-bold text-2xl' >  Venture & Beyound!</p>
              </div>
              </div>
              </div>

              </div>

    </div>
    </>
  )
}

export default Journey
