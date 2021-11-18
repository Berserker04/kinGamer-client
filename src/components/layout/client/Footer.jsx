import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="container-footer-all">
              <div className="container-body">
                <div className="colum1">
                  <h1>Más información de la compañía</h1>
                  <p>
                    Este sitio se dedica a la venta de equipo gamer, desde los
                    artículos más utilizados, hasta información y noticias más
                    relevantes del tema.
                  </p>
                </div>

                <div className="colum2">
                  <h1>Redes Sociales</h1>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" alt="facebook" />
                    <label>Síguenos en facebook</label>
                  </div>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" alt="twitter"/>
                    <label>Síguenos en twitter</label>
                  </div>

                  <div>
                    <img
                      className="logo-instagram"
                      src="https://img.icons8.com/plasticine/100/000000/instagram-new--v2.png"
                      alt="instagram"
                    />
                    <label>Síguenos en instagram</label>
                  </div>

                  <div>
                    <img src="https://img.icons8.com/color/48/000000/tiktok--v2.png" alt="tiktok" />
                    <label>Síguenos en tiktok</label>
                  </div>
                </div>

                <div className="colum3">
                  <h1>Información de contacto</h1>

                  <div className="row2">
                    <img src="https://img.icons8.com/doodle/48/000000/google-maps-new.png" alt="" />
                    <label>Colombia, santa marta, calle 17A # 12A - 51 </label>
                  </div>

                  <div className="row2">
                    <img src="https://img.icons8.com/ultraviolet/40/000000/phone-office.png" alt="" />
                    <label>+57-301-599-9999</label>
                  </div>

                  <div className="row2">
                    <img src="https://img.icons8.com/color/48/000000/important-mail.png" alt="" />
                    <label>kinGamer@sitioweb.com</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-foter">
              <div className="footer">
                <div className="copyright">
                  © 2021 Todos los derechos reservados <a href="*">KinGamer</a>
                </div>

                <div className="information">
                  <a href="*">Información compañía</a> |
                  <a href="*">Privación y Política</a> |
                  <a href="*">Términos y Condiciones</a>
                </div>
              </div>
            </div>
          </footer>
    )
}
