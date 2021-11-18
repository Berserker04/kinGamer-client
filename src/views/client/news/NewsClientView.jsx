import React from 'react'
import fire from '../../../assets/images/img/free-fire.jpg'
import cpu from '../../../assets/images/img/CPUGPU.jpg'
import juice from '../../../assets/images/img/Juice_Noche.png'
import punk from '../../../assets/images/img/cyberpunk.jpg'
import './styles.css'
import NewsList from '../../admin/news/components/NewsList'
export default function NewsClientView() {
  return (
    <>
      <h2 className="title-section2">Noticias</h2>
      <div className="row">
        <NewsList />
      </div>
      {/* <h2 className="title-section2">Las Últimas Noticias</h2>
      <section className="row section" style={{ padding: '50px' }}>
        <div
          className="card-news col-sm-12 col-md-6"
          style={{ marginBottom: '30px' }}
        >
          <h3 className="noticia1">Noticia 1</h3>
          <div className="noticia">
            <img
              className="img-1"
              src={fire}
              width="50%"
              height="50%"
              alt="free-fire"
            />

            <p className="paragraph1" id="info-freefire">
              Como ya es conocido por los amantes del famoso juego creado por
              Garena y cuya Beta fue lanzada en noviembre de 2017, En cada
              temporada se liberan por parte de los desarrolladores de 111dot
              Studio códigos que se pueden canjear por atributos tanto para
              mejorar las armas, como también para personalizar a tus personajes
              favoritos para hacer la experiencia de juego memorable... y lo
              mejor de todo... tenemos los códigos que se liberaron este 27 de
              agosto!!!
            </p>
            <a
              className="info"
              href="https://www.geekmi.news/videojuegos/Garena-Free-Fire-Codigos-de-canje-gratis-27-de-agosto-2021-20210826-0035.html"
            >
              <i className="arrow fas fa-arrow-right"></i>Encuentra los códigos
              aquí
            </a>
          </div>
        </div>
      </section> */}
    </>
  )
}
