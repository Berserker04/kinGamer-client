import React from 'react'
import { URL_IMAGE } from '../../../api'
import NewsLast from '../../admin/news/components/NewsLast'
import ProductLast from '../../admin/product/components/ProductLast'
import NewsClientContainer from '../news/NewsClientContainer'
import productClientContainer from '../product/productClientContainer'
import { Team } from './components/Team'
// import DataTableHomeView from '../../../components/datatable/DataTableHomeView'

export default function HomeClientView({}) {
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

      {/* <productClientContainer /> */}
      {/* <NewsClientContainer /> */}
      <Team />
    </>
  )
}
