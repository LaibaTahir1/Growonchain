import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import card1 from './Images/Card1.jpg'
import card2 from './Images/Card2.jpg'
import card3 from './Images/Card3.jpg'
import { Children } from 'react'; 
import Todo from './Components/Todo'
import Caluclator from './Components/Caluclator';
import Portfolio from './Components/Portfolio';
import Figma from './Components/Figma';




function App() {
  return (
    <> 
    {/* <div className='container' >
    <div className='bigBox'>
      <div className='boxBlock'>
        <h2>Upcoming Jackpot</h2>
        <h4>$2.420,69</h4>
      </div>
      <div className='boxBlock'>
        <h2>Countdown to Next Draw</h2>
        <h4>05:12:4:23</h4>
        <p>Days Hours Minutes Second</p>
      </div>
    </div>
    <div className='box'>
      <div className='clr'>
      <h2 className='smalbox'>
        sign-Up 
      </h2>
      <div className='border'></div></div>
      <div className='clr'><h2 className='smalbox'>Like-Up</h2>
      <div className='border'></div></div> 
       <div className='clr'><h2 className='smalbox'>Win</h2>
      <div className='border'></div></div>
    </div> 
    </div>  
     */}
      {/* Card1
     <div style={{maxWidth:'882px', border:'4px solid red',background:'aqua' }}>
     <div style={{display:'flex' ,gap:'30px',margin:'0px',padding:'0px'}}>
      <div style={{display:'block', maxWidth:'250px',border:'2px solid black'}}> 
     <Card style={{width:'250px' }}
     imageUrl={card1} 
     title='Playground'
     body='Lorem ipsum dolor sit amet consecctor adipiscing elit. Laboriosam distivio maxime, sapiente temporibus cum quisquam totam voluptatum asperiores.'>
     
     </Card> </div> 
     card2
      <div  style={{display:'block', maxWidth:'329px', border:"2px solid black",boxShadow:'initial', shadow:'4px solid yellow'}}>
      <Card
       style={{gap:'20px', maxWidth:'329px'}}
       imageUrl={card2}
       title='What Happend in Thiland?'
       body='Kaykas crowd Three Sisters Springs, 
       where people and manatees maintain controversial coexistence'
     button='click me'>
     </Card></div> 
     card3
     <div  style={{display:'block', maxWidth:'235px',border:'2px solid black',margin:'0px',padding:'0px'}}>
      <Card 
      body='25-10-2022'
     imageUrl={card3} 
     title='What is Lorem Ipsum'
     button='click me'> hello World
     </Card>  <button style={{background:'yellow', color:'black'}} onClick={()=>{alert("r u sure")}} > done</button></div>
     </div>
     </div> 

     <Button >click to convert uppercase</Button> */}


     {/* <Todo/> */}
     
    {/* <Caluclator/> */}
     
     {/* <Portfolio/> */}
     <Figma/>
    
     
     
    
    </> 
  );
    }
export default App;

