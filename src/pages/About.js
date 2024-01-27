import React from 'react'
import Benefit from '../Components/Benefit';

import Description from '../Components/Description';
import Faq from '../Components/Faq';
import Feature from '../Components/Feature';
import Figma from '../Components/Figma';
import Header from '../Components/Header';
import Journey from '../Components/Journey'
import Boxes from '../Components/Boxes';
import Layout from '../layout';
function About() {
  return (
    <Layout>
      <Header />
        <div className='max-w-[1240px] mx-auto p-4'>
        <Boxes/>
        <Description />
        <Feature />
        <Journey />
        <Benefit />
        <Figma />
        <Faq />
        </div>
    </Layout>
  )
}

export default About
