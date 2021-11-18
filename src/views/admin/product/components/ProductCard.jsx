import React from 'react'
import { Link } from 'react-router-dom'
import { URL_IMAGE } from '../../../../api'

export default function ProductCard({ product }) {
  return (
    <div class="col-md-6 col-xl-3">
      <div class="card">
        <Link to={`/productos/${product.slug}`}>
          <img
            className="card-img-top img-fluid"
            src={URL_IMAGE + product.image}
            style={{ height: 350 }}
            alt={product.image}
          />
        </Link>
        <div class="card-body">
          <h4 class="card-title ">{product.name}</h4>
          <p class="card-text">{product.description}</p>
          <a
            rel="noreferrer"
            target="_blank"
            href={product.urlBuy}
            class="btn btn-success waves-effect waves-light"
            style={{ marginRight: 5 }}
          >
            Ir a comprar
          </a>
          <Link to={`/productos/${product.slug}`}>Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}
