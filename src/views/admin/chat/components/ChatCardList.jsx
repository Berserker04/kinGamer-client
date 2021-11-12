import React from 'react'
import mundoGamer from '../../../../assets/images/logos/mundoGamer.jpg'
import '../styles.css'

export default function ChatCardList({chat, getMessages }) {
  return (
    <div className="col-12 row p-2 btn-outline-secondary chat-card-list" onClick={()=>getMessages(chat)}>
      <div className="col-2">
        <img
          src={mundoGamer}
          alt=""
          height="50"
          width="50"
          className="rounded-circle"
        />
      </div>
      <div
        className="
                col-7
                d-flex
                flex-column
                justify-content-center
              "
      >
        <strong>Name</strong>
        <p>Nuevo mensaje</p>
      </div>
      <div
        className="
                col-3
                d-flex
                flex-column
                justify-content-center
                align-items-end
              "
      >
        {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
      </div>
    </div>
  )
}
