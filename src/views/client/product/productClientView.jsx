import React from 'react'
import './styles.css'
import ProductList from '../../dashboard/client/product/components/ProductList'
export default function productClientView() {
  return (
    <div className="products-container">
      <h2 className="title-section">Productos</h2>
      <div className="row">
        <ProductList />
      </div>
    </div>
  )
}
