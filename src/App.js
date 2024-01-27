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
import { Routes ,Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './layout/Navbar';
import Dashboard from './pages/Dashboard';
import Nav from './Components/Nav';
import DashboardHeader from './Components/DashboardHeader';
import AboutLesson from './Components/AboutLesson';
import AboutChapter from './Components/AboutChapter';
import AboutModule from './Components/AboutModule';
import ModuleSection from './Components/ModuleSection';
import NewModule from './Components/NewModule';
import ActionSection from './Components/ActionSection';
import Contract from './Components/Contract';
import Footer from './Components/Footer';




function App() {
  return (
    <div className='bg-black'>
      <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Dashboard' element={<Dashboard/>} ></Route>
        
      </Routes>
    </div>

  );
}
export default App;

