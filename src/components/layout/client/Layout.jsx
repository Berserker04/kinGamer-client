import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer';
import './styles.css';
// import Employees from './pages/Employees';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">

          <Outlet />
          <Footer/>
        </div>
      </main>
    </>
  )
}

export default Layout
