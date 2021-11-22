import React from 'react'
// import Logo from "../../../assets/img/logos/MedicalApp.png";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const hiddenLateralNav = () => {
    document.getElementById('sidenav-main').classList.toggle('bg-white')
    document.getElementById('body-id').classList.toggle('g-sidenav-pinned')
  }

  // const { user } = useSelector((state) => state.user);
  const { pathname } = useLocation()
  return (
    <div class="vertical-menu">
      <div data-simplebar class="h-100">
        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <ul class="metismenu list-unstyled" id="side-menu">
            <li class="menu-title">Menu</li>
            <li className={`${pathname === '/' ? 'mm-active' : ''}`}>
              <NavLink to="/" className="waves-effect">
                <i class="mdi mdi-home-variant-outline"></i>
                <span>Inicio</span>
              </NavLink>
            </li>
            <li className={`${pathname === '/chat' ? 'mm-active' : ''}`}>
              <NavLink to="/chat" className="waves-effect">
                <i class="mdi mdi-chat"></i>
                {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
                <span>Chat</span>
              </NavLink>
            </li>
            <li className={`${pathname === '/productos' ? 'mm-active' : ''}`}>
              <NavLink to="/productos" className="waves-effect">
                <i class="mdi mdi-package-variant-closed"></i>
                {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
                <span>Productos</span>
              </NavLink>
            </li>
            <li className={`${pathname === '/noticias' ? 'mm-active' : ''}`}>
              <NavLink to="/noticias" className="waves-effect">
                <i class="mdi mdi-newspaper-variant-multiple"></i>
                {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
                <span>Noticias</span>
              </NavLink>
            </li>
            <li>
              <a href="javascript: void(0);" class="waves-effect" aria-expanded="false">
                <i class="mdi mdi-format-page-break"></i>
                <span>Admin</span>
              </a>
              <ul class="sub-menu" aria-expanded="false" style={{height:0}}>
                <li
                  className={`${pathname === '/productos' ? 'mm-active' : ''}`}
                >
                  <NavLink to="/productos" className="waves-effect">
                    <i class="mdi mdi-package-variant-closed"></i>
                    {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
                    <span>Productos</span>
                  </NavLink>
                </li>
                <li
                  className={`${pathname === '/noticias' ? 'mm-active' : ''}`}
                >
                  <NavLink to="/noticias" className="waves-effect">
                    <i class="mdi mdi-newspaper-variant-multiple"></i>
                    {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
                    <span>Noticias</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- Sidebar --> */}
      </div>
    </div>
  )
}

export default Sidebar
