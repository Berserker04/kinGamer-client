import React, { useCallback, useEffect, useState } from 'react'
import { API, URL_IMAGE } from '../../../../../api'
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
    <>
      <div className="col-sm-12 col-md-6">
        <figure
          className="d-flex justify-content-center"
          style={{ backgroundColor: '#00000099', padding: 30 }}
        >
          <img
            className="card-img-center img-fluid"
            src={URL_IMAGE + product.image}
            alt={product.image}
            style={{maxHeight:500}}
          />
        </figure>
      </div>
      <div
        className="col-sm-12 col-md-6"
        style={{ backgroundColor: '#00000099', padding: 30 }}
      >
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
      <ProductLast />
    </>
  )
}
