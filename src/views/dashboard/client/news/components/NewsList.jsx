import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../../../api'
import NewsCard from './NewsCard'

export default function NewsList() {
  const [news, setNews] = useState([])
  const [newsFilter, setNewsFilter] = useState([])

  const getNews = useCallback(() => {
    API.GET('/news?state=true').then(({ data }) => {
      if (data.ok) {
        setNews(data.body)
        setNewsFilter(data.body)
      }
    })
  }, [setNews])

  const handleFiler = ({ target }) => {
    const filter = news.filter((p) =>
      p.title.toLowerCase().includes(target.value.toLowerCase()),
    )
    setNewsFilter(filter)
  }

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <>
      <div className="col-6">
        <input
          className="form-control"
          style={{ marginBottom: 10 }}
          type="text"
          placeholder="Buscar noticia..."
          onChange={handleFiler}
        />
      </div>
      <hr />
      {newsFilter.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </>
  )
}
