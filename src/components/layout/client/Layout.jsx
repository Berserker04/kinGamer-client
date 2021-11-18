import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { Footer } from './components/Footer'
import './styles.css'
import { Header } from './components/Header'
// import Employees from './pages/Employees';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Header />
        <div className="container-fluid py-4">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
