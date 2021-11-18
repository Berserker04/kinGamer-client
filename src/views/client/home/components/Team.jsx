import React from 'react';
import uno from '../../../../assets/images/desarrollador1.jpg';
import dos from '../../../../assets/images/desarrollador2.jpeg';
import tres from '../../../../assets/images/desarrollador3.jpeg';
import cuatro from '../../../../assets/images/desarrollador4.jpeg';
import cinco from '../../../../assets/images/desarrollador5.jpeg';

import '../styles.css';
export const Team = () => {
    return (
        <>
         <h1 className="desarrollo">Equipo de desarrollo</h1>
        <br />
        <section className="section2">
          <div className="row justify-content-center section-team">
            <div
              className="
                col-sm-12 col-md-4 col-xl-2
                mb-4
                d-flex
                justify-content-center
              "
            >
              <div className="card" style={{width: '18rem'}}>
                <img
                  src={uno}
                  height="380"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Carlos Andrés Hernandez</h5>
                  <p className="card-text">
                    Estudiante de sistemas de infomación y desarrollo de
                    software.
                  </p>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#desarrollador1"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div
              className="
                col-sm-12 col-md-4 col-xl-2
                mb-4
                d-flex
                justify-content-center
              "
            >
              <div className="card" style={{width: '18rem'}}>
                <img
                  src={dos}
                  height="380"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Simón Ceballos Jaramillo</h5>
                  <p className="card-text">
                    Soy estudiante de la Misión TIC, de la Universidad Digital
                    de Antioquia y ex estudiante de la Universidad de Antioquia.
                  </p>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#desarrollador2"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div
              className="
                col-sm-12 col-md-4 col-xl-2
                mb-4
                d-flex
                justify-content-center
              "
            >
              <div className="card" style={{width: '18rem'}}>
                <img
                  src={tres}
                  height="380"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Juan Carlos Bohorquez</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#desarrollador3"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div
              className="
                col-sm-12 col-md-4 col-xl-2
                mb-4
                d-flex
                justify-content-center
              "
            >
              <div className="card" style={{width: '18rem'}}>
                <img
                  src={cuatro}
                  height="380"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Luis Jorge Guerrero</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#desarrollador4"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div
              className="
                col-sm-12 col-md-4 col-xl-2
                mb-4
                d-flex
                justify-content-center
              "
            >
              <div className="card" style={{width: "18rem"}}>
                <img
                  src={cinco}
                  height="380"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Emerson Reyes</h5>
                  <p className="card-text">Estudiante de Ingeniería Electrónica.</p>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#desarrollador5"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="desarrollador1" className="modal" tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Carlos Andrés Hernández</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={uno}
                  height="200"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <p>
                  Estudiante del area de la informática apasionado a la
                  programación.
                </p>
                <hr />
                <strong>Estudios</strong>
                <ul>
                  <li>Técnico en programación de software</li>
                  <li>Certificado de la escuela JavaScript Platzi</li>
                </ul>
                <strong>Habilidades</strong>
                <ul>
                  <hr />
                  <h6>Lenguajes</h6>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                  <hr />
                  <h6>FrameWork</h6>
                  <li>Rect Js</li>
                  <li>React Native</li>
                  <li>Laravel 8</li>
                  <li>Vue 3</li>
                  <li>Emtity Framework core</li>
                  <li>Express</li>
                  <hr />
                  <h6>Base de datos</h6>
                  <li>MongoDB</li>
                  <li>MySql</li>
                  <li>SqlServer</li>
                  <li>Oracle</li>
                  <hr />
                  <h6>Otros</h6>
                  <li>GitHub</li>
                  <li>Node Js</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Adobe Xd</li>
                  <li>Ingles basico</li>
                  <li>Desplique de servidores y aplicativos web</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div id="desarrollador2" className="modal" tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Simón Ceballos Jaramillo</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={dos}
                  height="200"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <p>
                  Soy estudiante de la Misión TIC, de la Universidad Digital de
                  Antioquia y ex estudiante de la Universidad de Antioquia.
                  Apasionado en el área de matemáticas y programación.F
                </p>
                <hr />
                <strong>Habilidades</strong>
                <ul>
                  <hr />
                  <h6>Lenguajes</h6>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <hr />
                  <h6>Otros</h6>
                  <li>GitHub</li>
                  <li>Cálculo</li>
                  <li>Trigonometráa</li>
                  <li>Álgebra</li>
                  <li>Fundamento de matemáticas</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
               
              </div>
            </div>
          </div>
        </div>
        <div id="desarrollador3" className="modal" tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Juan Carlos Bohorquez</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptatem tempore ex vitae sit animi facere molestiae
                  assumenda temporibus veritatis rerum dolorum ipsam, veniam et
                  blanditiis? Reiciendis molestiae totam placeat.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
               
              </div>
            </div>
          </div>
        </div>
        <div id="desarrollador4" className="modal" tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Luis Jorge Guerrero</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptatem tempore ex vitae sit animi facere molestiae
                  assumenda temporibus veritatis rerum dolorum ipsam, veniam et
                  blanditiis? Reiciendis molestiae totam placeat.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
               
              </div>
            </div>
          </div>
        </div>
        <div id="desarrollador5" className="modal" tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Emerson Reyes</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={cinco}
                  height="200"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <p>Estudiante de Ingeniería Electrónica.</p>
                <hr />
                <strong>Habilidades</strong>
                <ul>
                  <hr />
                  <h6>Python</h6>
                  <li>C#</li>
                  <li>C++</li>
                  <li>Java</li>
                  <hr />
                  <h6>Otros</h6>
                  <li>GitHub</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
               
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
