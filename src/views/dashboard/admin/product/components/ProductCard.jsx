import React from 'react'
import { URL_IMAGE } from '../../../../../api'

export default function ProductCard({ product, changeState, setProductEdit }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td align="center">
        <img
          className="card-img-top img-fluid"
          src={URL_IMAGE + product.image}
          style={{ height: 60, width: 100 }}
          alt={product.image}
        />
      </td>
      <td align="center">
        <a
          rel="noreferrer"
          target="_blank"
          href={product.urlBuy}
          class="btn btn-info waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          <i class="fas fa-shopping-cart"></i>
        </a>
      </td>
      <td align="center">
        {product.state ? (
          <button
            className="btn btn-success"
            onClick={() => changeState(product)}
          >
            <i class="fas fa-toggle-on"></i>
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => changeState(product)}
          >
            <i class="fas fa-toggle-off"></i>
          </button>
        )}
      </td>
      <td align="center">
        <button
          className="btn btn-outline-warning"
          onClick={() => setProductEdit(product)}
        >
          <i class="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  )
}
