import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../../../api'
import ProductCard from './ProductCard'

export default function ProductLast() {
  const [products, setProducts] = useState([])

  const getProducts = useCallback(() => {
    API.GET('/product?limit=5').then(({ data }) => {
      if (data.ok) {
        setProducts(data.body)
      }
    })
  }, [setProducts])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      ´{!products.length && <h3 align="center">No hay datos registrados</h3>}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  )
}
