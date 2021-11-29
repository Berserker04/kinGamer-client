import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../../../api'
import NewsCard from './NewsCard'

export default function NewsLast() {
  const [news, setNews] = useState([])

  const getNews = useCallback(() => {
    API.GET('/news?limit=5&state=true').then(({ data }) => {
      if (data.ok) {
        setNews(data.body)
      }
    })
  }, [setNews])

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <>
      {!news.length && <h3 align="center">No hay datos registrados</h3>}
      <div className="row">
        {news.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </>
  )
}
