import React from 'react'
import logo from '../../../../assets/images/logos/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
export const Header = () => {
  const toggleMenu = () => {
    document.body.classList.toggle('sidebar-enable')
    document.body.classList.toggle('vertical-collpsed')
  }
  return (
    <>
      <header className="header">
        <div className="fondo">
          <div className="d-none d-lg-block">
            <nav className="nav">
              <Link to="/" className="logo-slogan">
                <img src={logo} alt="" className="logo" />
                <div className="letters">
                  <span>K</span>
                  <span>i</span>
                  <span>n</span>
                  <span>G</span>
                  <span>a</span>
                  <span>m</span>
                  <span>e</span>
                  <span>r</span>
                </div>
              </Link>
              <ul className="nav__menu">
                <li>
                  <NavLink activeclassname="active" end to="/">
                    <i className="fas fa-home"></i> Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/productos">
                    <i className="fas fa-box-open"></i> Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/noticias">
                    <i className="fas fa-newspaper"></i> Noticias
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <i class="fas fa-sign-in-alt"></i> Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="d-lg-none">
            <nav className="nav">
              <button
                type="button"
                class="btn btn-sm px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
                onClick={toggleMenu}
              >
                <i class="ri-menu-2-line align-middle"></i>
              </button>
              <NavLink to="/" className="logo-slogan">
                <img
                  src={logo}
                  alt=""
                  className="logo"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 'calc(50% - 40px)',
                  }}
                />
              </NavLink>
              {/* <ul className="nav__menu">
              <li>
                <NavLink activeclassname="active" end to="/">
                  <i className="fas fa-home"></i> Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos">
                  <i className="fas fa-box-open"></i> Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/noticias">
                  <i className="fas fa-newspaper"></i> Noticias
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <i class="fas fa-sign-in-alt"></i> Login
                </NavLink>
              </li>
            </ul> */}
            </nav>

            <div class="vertical-menu">
              <div data-simplebar class="" style={{position:"absolute"}}>
                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">
                  {/* <!-- Left Menu Start --> */}
                  <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title">Menu</li>
                    <li>
                      <NavLink to="/" className="waves-effect">
                        <i className="fas fa-home"></i>
                        <span>Inicio</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/productos" className="waves-effect">
                        <i class="mdi mdi-package-variant-closed"></i>
                        <span>Productos</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/noticias" className="waves-effect">
                        <i class="mdi mdi-newspaper-variant-multiple"></i>
                        <span>Noticias</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Login</span>
                      </NavLink>
                    </li>
                    {/* si es admin mostrar */}
                  </ul>
                </div>
                {/* <!-- Sidebar --> */}
              </div>
            </div>
          </div>

          <div className="text d-none d-lg-block">
            <div className="logo-and-title">
              <h1 className="title-header">¡Hola Gamer!</h1>
            </div>
            <p>
              Llegaste al lugar correcto. Explora, chatea, mantente informad@ de
              lo último en videojuegos, y artículos con precios increíbles y
              novedosos que tenemos para ti, para que disfrutes y vivas una
              mejor experiencia en tus juegos. ¿Qué estás esperando?... Te damos
              la bienvenida.
            </p>
          </div>

          <div className="text2 d-lg-none img-fluid">
            <div className="logo-and-title">
              <h1 className="title-header">¡Hola Gamer!</h1>
            </div>
            <p>
              Llegaste al lugar correcto. Explora, chatea, mantente informad@ de
              lo último en videojuegos, y artículos con precios increíbles y
              novedosos que tenemos para ti, para que disfrutes y vivas una
              mejor experiencia en tus juegos. ¿Qué estás esperando?... Te damos
              la bienvenida.
            </p>
          </div>
        </div>
      </header>
    </>
  )
}
