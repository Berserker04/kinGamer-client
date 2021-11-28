import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { URL_IMAGE } from '../../../../api'
import logo from '../../../../assets/images/logos/logo.png'
import defaultChat from '../../../../assets/images/img/defaultChat.jpg'

const Navbar = () => {
  const { me, user } = useSelector((state) => state.user)

  const [profileIsOpen, setProfileIsOpen] = useState(false)

  const stylesProfileOpen = {
    position: 'absolute',
    inset: '0px auto auto 0px',
    margin: '0px',
    transform: 'translate(-36px, 72px)',
  }

  const toggleMenu = () => {
    document.body.classList.toggle('sidebar-enable')
    document.body.classList.toggle('vertical-collpsed')
  }

  return (
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          {/* <!-- LOGO --> */}
          <div class="navbar-brand-box text-center">
            <Link to="/">
              <span class="logo-lg">
                <img src={logo} alt="logo-dark" height="70" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            class="btn btn-sm px-3 font-size-24 header-item waves-effect"
            id="vertical-menu-btn"
            onClick={toggleMenu}
          >
            <i class="ri-menu-2-line align-middle"></i>
          </button>
        </div>

        <div class="d-flex">
          <div class="dropdown d-inline-block user-dropdown">
            <button
              type="button"
              className={`btn header-item waves-effect d-flex align-items-center ${
                profileIsOpen ? 'show' : ''
              }`}
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setProfileIsOpen(!profileIsOpen)}
            >
              <img
                class="rounded-circle header-profile-user"
                src={me.image ? URL_IMAGE + me.image : defaultChat}
                alt="Header Avatar"
              />
              <span class="d-none d-xl-inline-block ms-1">
                {user.user_name}
              </span>
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div
              className={`dropdown-menu dropdown-menu-end ${
                profileIsOpen ? 'show' : ''
              }`}
              style={profileIsOpen ? stylesProfileOpen : {}}
            >
              <NavLink to="/perfil" className="dropdown-item">
                <i class="ri-user-line align-middle me-1"></i> Perfil
              </NavLink>

              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item text-danger"
                href="/login"
                onClick={() => localStorage.removeItem('token')}
              >
                <i class="ri-shut-down-line align-middle me-1 text-danger"></i>{' '}
                Salir
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
