import React from 'react'

function Contract() {
    return (
        <div className='mt-[30px] text-white'>
            <div className='py-[40px] px-[24px] bg-[#161616] rounded-[24px]'>
            <div className='   bg-[#212221]  w-[626px]  rounded-[7px]  '>
                <img className=' pt-[49px] px-[280px] ' src='/assets/images/galery1.png' alt='' />
                <p className='mt-[20px] px-[270px] '>Drag & Drop</p>
                <p className=' mt-[10px] px-[200px] font-medium text-base text-[#909190] pb-[49px]'>Upload Up to 20 MB Image Size</p>
            </div>
            <div className='mt-[30px]'>
                <h1 className='text-[16px] font-semibold'>Smart Contract</h1>
                <div className='mt-[20px]'>
                   <div className='flex gap-[40px]'>
                   <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>ERC20</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>ERC 21</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>ERC1155</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Swap</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>LP</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Deposit</p>
                    </div>
                   </div>

                </div>

            </div>
            {/* section 2 */}
            <div className=''>
                
                <div className='mt-[20px]'>
                   <div className='flex gap-[40px]'>
                   <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Delegate</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Stake</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Delegate</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Burn</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Revoke Access</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p>Wrap Unwrap</p>
                    </div>
                   </div>

                </div>
                <div  className='mt-[30px]  rounded-[7px] pl-[20px]   py-[20px]  w-[630px] bg-[#212221]'>
                           <p className='bg-[#212221]  text-[#909190]  '>For Address</p>
                           
                           </div>

            </div>
            
            </div>
            <div className='mt-[30px]'>
            <div className='bg-[#161616] rounded-[24px] py-[40px] px-[24px]'>
            <div className='flex justify-between '>
            <div className='flex gap-[40px]'>
                   <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5'>Discord</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5' >Instagram</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5'>Youtube</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5'>TikTok</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5'>Mirror</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input type='checkbox' className='bg-[#212221] border border-white' />
                        <p className='pt-5'>Twitter</p>
                    </div>
                   </div>
                            <div className='flex gap-[160px]  rounded-[7px]  p-[20px] bg-[#212221]'>
                                <p>Social</p>
                                <select className='bg-[#212221]'></select>
                            </div>
                        </div> 
            </div>

            </div>
            <div className='mt-[30px]'>
                <button className='bg-[#32E274] px-[40px] py-[20px] rounded-full text-black font-normal text-lg'>Submit</button>

            </div>
        </div>
    )
}

export default Contract
