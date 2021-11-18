import React, { useCallback, useEffect, useState } from 'react'
import { API, URL_IMAGE } from '../../../../api'
import ProductLast from './ProductLast'
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  const getProduct = useCallback(() => {
    API.GET('/product').then(({ data }) => {
      if (data.ok) {
        if (data.body.length) setProduct(data.body[0])
      }
    })
  }, [setProduct])

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <div className="row">
      <div className="col-md-6">
        <figure>
          <img
            className="col-md-12"
            src={URL_IMAGE + product.image}
            alt={product.image}
            style={{ backgroundSize: 'cover' }}
          />
        </figure>
      </div>
      <div className="col-md-6">
        {/* <div className="col-12"> */}
        <h2>{product.name}</h2>
        {/* </div> */}
        <p style={{ fontSize: 20 }}>{product.description}</p>
        {/* <button className="btn btn-success" style={{ marginRight: 5 }}>Ir a comprar</button> */}
        <a
          rel="noreferrer"
          target="_blank"
          href={product.urlBuy}
          class="btn btn-success waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          Ir a comprar
        </a>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Regresar
        </button>
      </div>
      <hr />
      <h2 style={{ textAlign: 'center' }}>últimos productos</h2>
      <div className="row">
        <ProductLast />
      </div>
    </div>
  )
}
