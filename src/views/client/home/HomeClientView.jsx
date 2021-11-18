import React from 'react'
import { URL_IMAGE } from '../../../api'
import NewsClientContainer from '../news/NewsClientContainer'
import productClientContainer from '../product/productClientContainer'
import { Team } from './components/Team'
// import DataTableHomeView from '../../../components/datatable/DataTableHomeView'

export default function HomeClientView({}) {
  return (
    <>
      <productClientContainer />
      <NewsClientContainer />
      <Team />
    </>
  )
}
