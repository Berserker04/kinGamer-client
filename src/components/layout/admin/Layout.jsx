import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
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
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                KinGamer.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                  Desarrollado <i class="mdi mdi-heart text-danger"></i> por
                  Equipo KinGamer - grupp 3
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
