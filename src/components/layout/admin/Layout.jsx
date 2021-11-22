import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div id="layout-wrapper">
      <Navbar />

      <Sidebar />

      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
