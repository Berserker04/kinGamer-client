import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const hiddenLateralNav = () => {
    document.getElementById('sidenav-main').classList.toggle('bg-white')
    document.getElementById('body-id').classList.toggle('g-sidenav-pinned')
  }

  return (
    <>
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <h6 className="font-weight-bolder mb-0">Salud para todos</h6>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav  justify-content-end">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/noticias">Noticias</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a
                  href="/login"
                  className=""
                  onClick={() => localStorage.removeItem('token')}
                >
                  <i
                    className="fas fa-sign-in-alt me-sm-1"
                    aria-hidden="true"
                  ></i>
                  <span className="d-sm-inline d-none">NADA</span>
                </a>
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <div
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                  onClick={() => hiddenLateralNav()}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
