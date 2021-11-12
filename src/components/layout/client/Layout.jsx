import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
// import Employees from './pages/Employees';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">

          <Outlet />

          <footer>
            <div class="container-footer-all">
              <div class="container-body">
                <div class="colum1">
                  <h1>Más información de la compañía</h1>
                  <p>
                    Este sitio se dedica a la venta de equipo gamer, desde los
                    artículos más utilizados, hasta información y noticias más
                    relevantes del tema.
                  </p>
                </div>

                <div class="colum2">
                  <h1>Redes Sociales</h1>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" />
                    <label>Síguenos en facebook</label>
                  </div>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" />
                    <label>Síguenos en twitter</label>
                  </div>

                  <div>
                    <img
                      class="logo-instagram"
                      src="https://img.icons8.com/plasticine/100/000000/instagram-new--v2.png"
                    />
                    <label>Síguenos en instagram</label>
                  </div>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/tiktok--v2.png" />
                    <label>Síguenos en tiktok</label>
                  </div>
                </div>

                <div class="colum3">
                  <h1>Información de contacto</h1>

                  <div class="row2">
                    <img src="https://img.icons8.com/doodle/48/000000/google-maps-new.png" />
                    <label>Colombia, santa marta, calle 17A # 12A - 51 </label>
                  </div>

                  <div class="row2">
                    <img src="https://img.icons8.com/ultraviolet/40/000000/phone-office.png" />
                    <label>+57-301-599-9999</label>
                  </div>

                  <div class="row2">
                    <img src="https://img.icons8.com/color/48/000000/important-mail.png" />
                    <label>kinGamer@sitioweb.com</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-foter">
              <div class="footer">
                <div class="copyright">
                  © 2021 Todos los derechos reservados <a href="">KinGamer</a>
                </div>

                <div class="information">
                  <a href="">Información compañía</a> |
                  <a href="">Privación y Política</a> |
                  <a href="">Términos y Condiciones</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}

export default Layout
