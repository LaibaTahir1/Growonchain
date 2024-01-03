import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="bg-[#0E100F] ">
      <Navbar />
      <div className='max-w-[1000px] mx-auto'>
      {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

