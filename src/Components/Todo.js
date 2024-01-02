// import React, { useState } from 'react'

// function Todo() {
//     const [ inputText , setInputText]=useState("")
//     const [item,setitem]=useState([])
//     const inputChange=(event)=>{
//         setInputText(event.target.value);
//     }
//     const itemsClick=()=>{
//         setitem([...item, inputText]);
//         console.log('items no')
//     }
//     const DeleteThings=(index)=>{
//       const UpdateThings=item.filter((elemnt,id)=>{
//         return index!==id;
//       })
//       setitem(UpdateThings);
//     }
//     const RemoveAll=()=>{
//       setitem([]);
//     }
    
//   return (
//     <>
//     <div className='content-center mt-20  w-full max-w-[500px] h-96 text-center bg-orange-400 rounded-lg items-center '>
//      <div className=' '  >
//       <h1 className='font-bold text-3xl  mb-5 text-black-900 italic' >ToDo List</h1>
//      <div className='space-x-4 '> 
//      <input  className=' h-10 border-black  w-full max-w-[300px] font-bold px-2  rounded-md bg-white-500 text-black'type='text' placeholder=' What do you Need to do...' value={inputText} onChange={inputChange} />
//       <button className='bg-green-700 text-white font-semibold w-[80px] mt-3 rounded-md  ' onClick={itemsClick}>Add  :{")"} </button></div> 
//       </div>
//       <p className='mt-6 font-bold italic  text-yellow-500  shadow shadow-black bg-black'>Here is your List</p>


//         { item!=[] && item?.map((items, index)=>{
//             return(
//                 <p key={index}>
//                   <div className='flex gap-80 font-bold mt-3 max-w-prose max-h-full border-b-2 my-0 border-black    text-black'>
//                   <div className='font-bold leading-4 mt-4 w-full max-w-[50%] max-h-full text-black'>{items}
//                   </div><div><button className='bg-red-600 text-black font-semibold w-[100px]  mt-3 rounded-md' onClick={()=>DeleteThings(index)}>Delete</button></div>
//                  </div> </p>
//             )
//         })
//         }
//       {item.length>=1 && <button className='bg-blue-800 text-black-600 font-semibold w-[100px]  mt-3 rounded-md' onClick={RemoveAll}>Remove All</button>}
//       </div>
    
    
    
//     </>
   
//   )
// }

// export default Todo
