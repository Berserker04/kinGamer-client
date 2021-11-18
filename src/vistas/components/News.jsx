import React from 'react';
import fire from "../assets/img/free-fire.jpg";
import cpu from "../assets/img/CPUGPU.jpg";
import juice from "../assets/img/Juice_Noche.png";
import punk from "../assets/img/cyberpunk.jpg";
import './css/news.css';
export const News = () => {
    return (
        <>
        <h2 className="title-section2">Las Últimas Noticias</h2>
     <section className="row section" style={{padding: '50px'}}>
      <div className="card-news col-sm-12 col-md-6" style={{marginBottom: '30px'}}>
        <h3 className="noticia1">Noticia 1</h3>
        <div className="noticia">
          <img className="img-1" src={fire} width="50%" height="50%" alt="free-fire" />

          <p className="paragraph1" id="info-freefire">
            Como ya es conocido por los amantes del famoso juego creado por
            Garena y cuya Beta fue lanzada
            en noviembre de 2017, En cada temporada se liberan por parte de los
            desarrolladores de 111dot Studio códigos que se pueden canjear
            por atributos tanto para mejorar las armas, como también para
            personalizar
            a tus personajes favoritos para hacer la experiencia de juego
            memorable... y lo mejor de todo...
            tenemos los códigos que se liberaron este 27 de agosto!!!
          </p>
          <a className="info"
            href="https://www.geekmi.news/videojuegos/Garena-Free-Fire-Codigos-de-canje-gratis-27-de-agosto-2021-20210826-0035.html"
            ><i className="arrow fas fa-arrow-right"></i>Encuentra los códigos aquí</a
          >
        </div>
      </div>
      <div className="card-news col-sm-12 col-md-6" style={{marginBottom:'30px'}}>
        <h3 className="noticia2">Noticia 2</h3>
        <div className="noticia">
          <img className="img-2" src={cpu} width="50%" height="50%" alt=""/>
          <p className="paragraph2" id="info-cpugpu">
            Para muchos Gamers y amantes del desarrollo ha sido siempre muy
            importante tener en cuenta qué procesador,
            y qué tarjeta gráfica usar para sacar el mayor rendimiento de su
            máquina, y es que no es para menos puesto que dependiendo
            de esta combinación, se puede crear un flujo de trabajo excelente
            para la máquina o morir en el cuello de botella...
          </p>
          <a className="info"
            href="https://noticiast.com/4-mejores-combinaciones-de-cpu-gpu-para-juegos-y-estaciones-de-trabajo/"
            ><i className="arrow fas fa-arrow-right"></i>Mira las mejores combinaciones aquí</a
          >
        </div>
      </div>
      <div className="card-news col-sm-12 col-md-6" style={{marginBottom:'30px'}}>
        <h3 className="noticia3">Noticia 3</h3>
        <div className="noticia">
          <img className="img-3" src={juice} width="50%" height="50%" alt="" />
          <p className="paragraph3" id="info-studio">
            Muchos de los creadores y desarrolladores independientes Colombianos,
            literalmente trabajan desde cero y con toda el alma
            para materializar sus creaciones, y así poder abarcar un amplio
            público objetivo en el cual buscan satisfacer la sed de diversión
            y retar sus habilidades, este es el caso de Enigmatic 3D, un Studio
            indie situado en Barrancabermeja que cuenta con talento a nivel
            nacional
          </p>

          <a className="info" href="https://www.facebook.com/Enigmatic3D/"
            ><i className=" arrow fas fa-arrow-right"></i>Mira el perfil en Facebook de Enigmatic 3D</a
          >
        </div>
      </div>
      <div className="card-news col-sm-12 col-md-6" style={{marginBottom: '30px'}}>
        <h3 className="noticia4">Noticia 4</h3>
        <div className="noticia">
          <img className="img-4" src={punk} width="50%" height="50%" alt="" />
          <p className="paragraph4" id="info-cyberpunk">
            Muchos de los gamers que se encontraban esperando este anhelo,
            se quedaron con las manos en la cara y asombrados al ver que
            PlayStation
            que había invertido bastantes millones de dolares en este proyecto,
            lo sacaron de circulación después de haber luchado contra el tiempo
            de cara a
            un lanzamiento que no fructificó como se tenía planeado, y es que
            parece ser que la ambición por sacar un producto para las fechas
            navideñas fue su gran
            error.
          </p>

          <a className="info"
            href="https://www.eltiempo.com/tecnosfera/videojuegos/cyberpunk-2077-la-historia-del-fracaso-del-videojuego-563812"
            ><i className=" arrow fas fa-arrow-right"></i>Amplia esta historia aquí</a
          >
        </div>
      </div>
    </section>
        </>
    )
}
