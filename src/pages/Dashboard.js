import React from 'react'
import Nav from '../Components/Nav';
import DashboardHeader from '../Components/DashboardHeader';
import AboutLesson from '../Components/AboutLesson';
import AboutChapter from '../Components/AboutChapter';
import AboutModule from '../Components/AboutModule';
import ModuleSection from '../Components/ModuleSection';
import NewModule from '../Components/NewModule';
import ActionSection from '../Components/ActionSection';
import Contract from '../Components/Contract';
import Footer from '../Components/Footer';

function Dashboard() {
  return (
    <div>
        <div className='bg-black max-w-[1400px] mx-auto w-full' >
     <Nav/>
     <DashboardHeader />
     <AboutLesson />
     <AboutChapter />
     <AboutModule />
     <ModuleSection />
     <NewModule />
     <ActionSection />
     <Contract />
    </div>
    <Footer />
    </div>
  )
}

export default Dashboard
