import React, { useCallback, useEffect, useState } from 'react'
import { API, URL_IMAGE } from '../../../../../api'
import NewsLast from './NewsLast'
import { useNavigate } from 'react-router-dom'

export default function NewsDetail() {
  const [news, setNews] = useState({})
  const navigate = useNavigate()

  const getNews = useCallback(() => {
    API.GET('/news').then(({ data }) => {
      if (data.ok) {
        if (data.body.length) setNews(data.body[0])
      }
    })
  }, [setNews])

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <div className="row">
      <div className="col-md-6">
        <figure>
          <img
            className="col-md-12"
            src={URL_IMAGE + news.image}
            alt={news.image}
            style={{ backgroundSize: 'cover' }}
          />
        </figure>
      </div>
      <div className="col-md-6">
        {/* <div className="col-12"> */}
        <h2>{news.name}</h2>
        {/* </div> */}
        <p style={{ fontSize: 20 }}>{news.description}</p>
        {/* <button className="btn btn-success" style={{ marginRight: 5 }}>Ir a comprar</button> */}
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Regresar
        </button>
      </div>
      <hr />
      <h2 style={{ textAlign: 'center' }}>últimas noticias</h2>
      <div className="row">
        <NewsLast />
      </div>
    </div>
  )
}
