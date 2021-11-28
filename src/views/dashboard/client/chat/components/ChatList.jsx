import React, { useEffect, useState } from 'react'
import mundoGamer from '../../../../../assets/images/logos/mundoGamer.jpg'
import defaultChat from '../../../../../assets/images/img/defaultChat.jpg'
import '../styles.css'
import { NavLink } from 'react-router-dom'
import { URL_IMAGE } from '../../../../../api'

export default function ChatList({ chat, setUserSelected, user, roomId }) {
  const [name, setName] = useState({
    user_name: 'Chat Público',
    person_id: {
      image: null,
    },
  })

  if (chat.users.length) setName(chat.users.find((u) => u._id !== user._id))

  useEffect(() => {
    if (roomId === chat._id) {
      setUserSelected(name)
    }
  }, [roomId, chat, name, setUserSelected])

  return (
    <NavLink
      className="col-12 row p-2 btn-outline-secondary chat-card-list"
      onClick={() => setUserSelected(name)}
      to={`/chat/${chat._id}`}
    >
      <div className="col-2">
        <img
          src={
            name.user_name === 'Chat Público'
              ? mundoGamer
              : name.person_id.image
              ? URL_IMAGE + name.person_id.image
              : defaultChat
          }
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
        <strong>{name.user_name}</strong>
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
    </NavLink>
  )
}
