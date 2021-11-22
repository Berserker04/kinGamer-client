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
