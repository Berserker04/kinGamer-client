import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../../../../api'
import {
  listNews,
  NewsFilter,
} from '../../../../../redux/actions/news'
import NewsCard from './NewsCard'

export default function NewsList({ btnAdd, changeState, setNewsEdit }) {
  // const [news, setNews] = useState([])
  // const [newsFilter, setNewsFilter] = useState([])
  const { header } = useSelector((state) => state.auth)
  const { news, newsFilter } = useSelector((state) => state.news)

  const dispatch = useDispatch()

  const getNews = useCallback(() => {
    dispatch(listNews(header))
  }, [dispatch, header])

  const handleFiler = ({ target }) => {
    const filter = news.filter((p) =>
      p.name.toLowerCase().includes(target.value.toLowerCase()),
    )
    dispatch(NewsFilter(filter))
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

      {btnAdd}

      <hr />
      {/* {newsFilter.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))} */}
      <div class="card">
        <div class="card-body">
          <table
            id="datatable"
            class="table table-bordered dt-responsive nowrap"
            // style="border-collapse: collapse; border-spacing: 0; width: 100%;"
            style={{
              borderCollapse: 'collapse',
              borderSpacing: 0,
              width: '100%',
            }}
          >
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Titulo de la noticia</th>
                <th>Imagen</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {newsFilter.map((news) => (
                <NewsCard
                  key={news._id}
                  news={news}
                  changeState={changeState}
                  setNewsEdit={setNewsEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
