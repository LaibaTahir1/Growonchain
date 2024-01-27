import React from 'react'

import DailyTasks from '../Components/DailyTasks';
import Intro from '../Components/Intro';
import Progress from '../Components/Progress';
import Returning from '../Components/Returning';
import Top from '../Components/Top';
import Newto from '../Components/Newto';
import Communities from '../Components/Communities';
import Infinity from '../Components/Infinity';
import LastNew from '../Components/LastNew';
import Ending from '../Components/Ending';


function Home() {
  return (
    <div>
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
  )
}

export default Home
