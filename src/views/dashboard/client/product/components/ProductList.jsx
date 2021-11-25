import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../../../api'
import ProductCard from './ProductCard'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [productsFilter, setProductsFilter] = useState([])

  const getProducts = useCallback(() => {
    API.GET('/product?state=true').then(({ data }) => {
      if (data.ok) {
        setProducts(data.body)
        setProductsFilter(data.body)
      }
    })
  }, [setProducts])

  const handleFiler = ({ target }) => {
    const filter = products.filter((p) =>
      p.name.toLowerCase().includes(target.value.toLowerCase()),
    )
    setProductsFilter(filter)
  }

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <div className="col-sm-12 col-md-6">
        <input
          className="form-control"
          style={{ marginBottom: 10 }}
          type="text"
          placeholder="Buscar producto..."
          onChange={handleFiler}
        />
      </div>
      <hr />
      {!productsFilter.length && (
        <h3 align="center">No hay datos registrados</h3>
      )}
      {productsFilter.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  )
}
