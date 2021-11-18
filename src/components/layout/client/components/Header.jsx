import React from 'react'
import logo from '../../../../assets/images/img/KingGamerLogo.png'
import { NavLink } from 'react-router-dom'
import './header.css'
export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="." className="logo-slogan">
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
          </a>
          <ul className="nav__menu">
            <li>
              <NavLink activeclassname="active" end to="/">
                <i className="fas fa-home"></i>Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="products">
                <i className="fas fa-box-open"></i>Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
                <i className="fas fa-newspaper"></i>Noticias
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="fondo"></div>
        <div className="text">
          <div className="logo-and-title">
            <h1 className="title-header">¡Hola Gamer!</h1>
          </div>
          <p>
            Llegaste al lugar correcto. Explora, chatea, mantente informad@ de
            lo último en videojuegos, y artículos con precios increíbles y
            novedosos que tenemos para ti, para que disfrutes y vivas una mejor
            experiencia en tus juegos. ¿Qué estás esperando?... Te damos la
            bienvenida.
          </p>
        </div>
      </header>
    </>
  )
}
