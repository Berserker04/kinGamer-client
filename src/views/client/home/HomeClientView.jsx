import React from 'react'
import NewsLast from '../../dashboard/client/news/components/NewsLast'
import ProductLast from '../../dashboard/client/product/components/ProductLast'
import { Team } from './components/Team'

export default function HomeClientView() {
  return (
    <>
      <h2 className="title-section">Últimos productos</h2>
      <div className="row">
        <ProductLast />
      </div>
      <h2 className="title-section2">Las Últimas Noticias</h2>
      <div className="row">
        <NewsLast />
      </div>
      <Team />
    </>
  )
}
