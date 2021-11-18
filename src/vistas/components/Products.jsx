import React from 'react';
import './css/services.css';
import pc from "../assets/pc.jpg";
import mouse from "../assets/mouse.jpg";
import audifonos from "../assets/audifonos.jpg";
import teclado from "../assets/teclado.jpg";
import ryzen from "../assets/ryzen.jpg";
import silla from "../assets/silla.png";
import refri from "../assets/refrigeracion.jpg";
import laptop from "../assets/portatil.jpg";
import screen from "../assets/pantalla.jpg";
import desk from "../assets/escritorio.jpg";
export const Products = () => {
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
