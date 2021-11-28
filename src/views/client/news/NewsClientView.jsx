import React from 'react'
import './styles.css'
import NewsList from '../../dashboard/client/news/components/NewsList'
export default function NewsClientView() {
  return (
    <>
      <h2 className="title-section2">Noticias</h2>
      <div className="row">
        <NewsList />
      </div>
    </>
  )
}
