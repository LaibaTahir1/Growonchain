// import React, { useState } from 'react'

// function Caluclator() {
//     const [valuetype , setValue]=useState("");

//     const handle=(event)=>{
//         setValue(valuetype.concat(event.target.value))
//     }

//     const ClearDisplay=()=>{
//         setValue("");
//     }
    
//     const Calculate=()=>{
//         setValue(eval(valuetype).toString());
//     }

//     const [deletething , setdelete]=useState([]);

//     const DeleteThings=(index)=>{
//               const UpdateThings=deletething.filter((elemnt,id)=>{
//                 return index!==id;
//               })
//               setdelete(UpdateThings);
//             }
    

//   return (
//    <>
   
//     < div className='bg-black rounded-lg p-6  text-white w-80 justify-center m-auto mt-10 items-center h-100' >
//   <input className=' w-60 text-black max-w-80 font-bold p-4  border-4 ring-1 shadow-lg rounded-lg h-12' type="text" placeholder="0"  value={valuetype} /> 
//         <div className=' mt-6 flex justify-around '>
//         <input type='button' value="Ac" onClick={ClearDisplay} className='border  rounded-lg w-12  shadow shadow-slate-100  bg-orange-600 text-black font-bold' />
//         <input type='button' value="DELL" onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black font-bold' />
//         < input type="button" value="%" onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600  text-black font-bold' />
//         <input type='button' value='/' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100 bg-orange-600 text-black font-bold' />
//         </div>
//         <div  className='  mt-6 flex justify-around '>
//         <input type='button' value='7' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type="button" value="8" onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='9'  onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100'/>
//         <input type='button' value='*' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black font-bold' />
//         </div>
//         <div className=' mt-6 flex justify-around '>
//         <input type='button' value='4'  onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='5' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100'/>
//         <input type='button' value='6' onClick={handle}  className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='-' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black font-bold' />
//         </div>
//         <div className=' mt-6 flex justify-around '>
//         <input type='button' value='1' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='2' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100'/>
//         <input type='button' value='3' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='+'  onClick={handle}className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black' />
//         </div>
//         <div className=' mt-6 flex justify-around '>
//         <input type='button' value='00' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='0'  onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100' />
//         <input type='button' value='.' onClick={handle} className='border  rounded-lg w-12 shadow shadow-slate-100'/>
//         <input type='button' value='=' onClick={Calculate} className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black font-bold' />
//         </div>
//       </div>

//       {deletething!=[] && deletething?.map((items,index)=>{
//         return(
//             <p key={index}><div>{items}</div>
//             <div><input onClick={()=>DeleteThings(index)} type='button' value="DELL" className='border  rounded-lg w-12 shadow shadow-slate-100  bg-orange-600 text-black font-bold' /></div>
//             </p>
//         )

//       })

//       }
    
//    </>
//   )
// }

// export default Caluclator
