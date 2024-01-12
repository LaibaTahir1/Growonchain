import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-[#0E100F] max-w-[1240px] mx-auto flex-1 w-full'>
        <Navbar />
        <div className='max-w-[1000px] mx-auto'>{children}</div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Layout;
