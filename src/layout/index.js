import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-[#0E100F]  flex-1 w-full'>
        <Navbar />
        <div className=' '>{children}</div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Layout;
