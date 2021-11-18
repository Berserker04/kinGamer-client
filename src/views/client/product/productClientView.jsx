import React from 'react'
import pc from '../../../assets//images/images/pc.jpg'
import mouse from '../../../assets//images/images/mouse.jpg'
import audifonos from '../../../assets//images/images/audifonos.jpg'
import teclado from '../../../assets//images/images/teclado.jpg'
import ryzen from '../../../assets//images/images/ryzen.jpg'
import silla from '../../../assets//images/images/silla.png'
import refri from '../../../assets//images/images/refrigeracion.jpg'
import laptop from '../../../assets//images/images/portatil.jpg'
import screen from '../../../assets//images/images/pantalla.jpg'
import desk from '../../../assets//images/images/escritorio.jpg'
import './styles.css'
export default function productClientView() {
  return (
    <div className="products-container">
      <h2 className="title-section">Últimos servicios</h2>
      <div className="flex-container">
        <div className="product-item">
          <div className="img-container">
            <img src={pc} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>

        <div className="product-item">
          <div className="img-container">
            <img src={mouse} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>

        <div className="product-item">
          <div className="img-container">
            <img src={audifonos} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>

        <div className="product-item">
          <div className="img-container">
            <img src={teclado} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
        <div className="product-item">
          <div className="img-container">
            <img src={ryzen} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>

        <div className="product-item">
          <div className="img-container">
            <img src={silla} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
        <div className="product-item">
          <div className="img-container">
            <img src={refri} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
        <div className="product-item">
          <div className="img-container">
            <img src={laptop} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
        <div className="product-item">
          <div className="img-container">
            <img src={screen} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
        <div className="product-item">
          <div className="img-container">
            <img src={desk} alt="img-product.png" />
          </div>
          <p>
            lorem 1 b random lorem 1 b random lorem 1 b random lorem 1 b random
            lorem 1 b random lorem 1 b random lorem 1 b random
          </p>
          <a href=".">
            <button className="btn-buy">Ir a comprar</button>
          </a>
          <button className="btn-details">Ver detalles</button>
        </div>
      </div>
    </div>
  )
}
