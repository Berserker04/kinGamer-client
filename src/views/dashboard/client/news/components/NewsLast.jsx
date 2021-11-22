import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../../../api'
import NewsCard from './NewsCard'

export default function NewsLast() {
  const [news, setNews] = useState([])

  const getNews = useCallback(() => {
    API.GET('/news?limit=5').then(({ data }) => {
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
      {news.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </>
  )
}