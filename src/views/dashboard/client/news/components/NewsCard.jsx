import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { URL_IMAGE } from '../../../../../api'
import "moment/min/locales";
moment.locale('es');

export default function ProductCard({ news }) {
  return (
    <div class="col-lg-6">
      <div class="card" style={{backgroundColor:"#00000099",color:"white"}}>
        <Link to={`/noticias/${news.slug}`}>
          <img
            className="card-img-top img-fluid"
            src={URL_IMAGE + news.image}
            alt={news.image}
          />
        </Link>
        <div class="card-body">
          <h4 class="card-title " style={{fontWeight:"bold"}}>{news.title}</h4>
          <p class="card-text">{news.description}</p>
          <p class="card-text">
            <small class="text-muted">Publicado: {moment.utc(news.created_at).format('LL')}</small>
          </p>
          <Link to={`/noticias/${news.slug}`}>Leer más</Link>
        </div>
      </div>
    </div>
  )
}
