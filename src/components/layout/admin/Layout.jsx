import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
// import Employees from './pages/Employees';

const Layout = ({ children }) => {
  return (
    <div id="layout-wrapper">
      <Navbar />

      <Sidebar />

      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            {/* <!-- start page title --> */}
            {/* <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 class="mb-sm-0">Dashboard</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Upzet</a></li>
                                            <li class="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div> */}
            {/* <!-- end page title --> */}

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
