// import  React,{useEffect, useState} from 'react'


// function Button(props) {
//   //Use props
//   const defaultStyle={ background :'yellow' , color:'black'}
//     const { style ,children} = props
//     //use state

//     const [text, setText]=useState('Enter text');
//     console.log(text);
    
//     const handleUpClick=()=>{
//       console.log("uppercase was clicked");
//       let NewText=text.toUpperCase();
//       setText(NewText)
//     }
//     const handleOnChane=(event)=>{
//       setText(event.target.value);
//     }

//     //use stae2
//     const [count,setcount]=useState(0)
//     const updateCounter=()=>{
//       setcount(count+1); 
//     }
//     const Ondecremnt=()=>{
//       if(count > 0){
//         setcount(count-1);
//       }
//       else{
//         alert('sorry Limit Reached');
//         setcount(0);
//       }
//     }

//     //use state3
//     const [name ,setName]=useState(false)
//     const changebtn=()=>{
//       setName(!name);
//     }
//     console.log(name)

//    // use state4
//    const[changeColor, SetchangeColor]=useState()
//     //usestate5
//     const[Text,SetText]=useState()

//    const btncolour=()=>{
//     SetchangeColor('purple')
//    }

// useEffect(()=>{
//   console.log('hello world')
//   if(setText){
//     SetchangeColor('red')
//   }
// },[Text])
//   return (
//     <>
//     <h1>Enter Text</h1>
//     <textarea id='box' rows="8" value={text} onChange={handleOnChane} ></textarea>
//     <button style={style ? style : defaultStyle }  onClick={handleUpClick}  >{children}</button> 
//     <div style={{background:'blueviolet' , width:'310px' , height:'110px'}}>
//     <h1>button click {count} time</h1>
//     <div style={{display:'flex' , gap:' 40px'}}>
//     <button style={{background:'green' , font:'caption'}} onClick={updateCounter}>Increment</button>
//     <button style={{background:'red' , font:'caption'}} onClick={Ondecremnt}>Decrement</button>
//     </div>
//     </div>

//    <p> { name ? 'laiba' : 'hello world'} </p>
//    <button onClick={changebtn}>click to change</button>
   
//    <h1 style={{background: SetText? SetText: 'green'}}>hello world</h1>
  
//    <button onClick={btncolour} style={{background: changeColor}}> click to change</button>
//     </>
//   )
// }

// export default Button;

