import React from 'react'
import { URL_IMAGE } from '../../../../../api'

export default function NewsCard({ news, changeState, setNewsEdit }) {
  return (
    <tr>
      <td>{news.title}</td>
      <td align="center">
        <img
          className="card-img-top img-fluid"
          src={URL_IMAGE + news.image}
          style={{ height: 60, width: 100 }}
          alt={news.image}
        />
      </td>
      <td align="center">
        {news.state ? (
          <button
            className="btn btn-success"
            onClick={() => changeState(news)}
          >
            <i class="fas fa-toggle-on"></i>
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => changeState(news)}
          >
            <i class="fas fa-toggle-off"></i>
          </button>
        )}
      </td>
      <td align="center">
        <button
          className="btn btn-outline-warning"
          onClick={() => setNewsEdit(news)}
        >
          <i class="fas fa-edit"></i>
        </button>
      </td>
    </tr>
  )
}
