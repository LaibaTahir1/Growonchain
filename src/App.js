import './App.css';
import Benefit from './Components/Benefit';
import DailyTasks from './Components/DailyTasks';
import Description from './Components/Description';
import Faq from './Components/Faq';
import Feature from './Components/Feature';
import Figma from './Components/Figma';
import Header from './Components/Header';
import Journey from './Components/Journey'
import Intro from './Components/Intro';
import Progress from './Components/Progress';
import Returning from './Components/Returning';
import Top from './Components/Top';
import Newto from './Components/Newto';
import Communities from './Components/Communities';
import Infinity from './Components/Infinity';
import LastNew from './Components/LastNew';
import Ending from './Components/Ending';
import Layout from './layout';
import Boxes from './Components/Boxes';



function App() {
  return (
    <div className='bg-black'>
     <div style={{
      background:'url(/assets/images/GrowHeaderBg.svg)',
      backgroundSize:'cover',
      width:'100%',
      backgroundRepeat:'no-repeat',
     }}>
      <Top />
        <Intro />
        <Progress /> 
        </div>
      <Returning />
      <DailyTasks />
      <Newto />
      <Communities />
      <Infinity />
      <LastNew />
      <Ending />
    </div>
    // <div >
    //   <Layout >
    //     <Header />
    //     <div className='max-w-[1240px] mx-auto p-4'>
    //     <Boxes/>
    //     <Description />
    //     <Feature />
    //     <Journey />
    //     <Benefit />
    //     <Figma />
    //     <Faq />
    //     </div>
    //   </Layout>
    // </div>
  );
}
export default App;

