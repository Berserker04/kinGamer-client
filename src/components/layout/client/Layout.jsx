import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './components/Footer'
import './styles.css'
import { Header } from './components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <main className="position-relative max-height-vh-100 h-100 border-radius-lg ">
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
