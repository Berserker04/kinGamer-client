import React, { useEffect } from 'react'
import mundoGamer from '../../../../../assets/images/logos/mundoGamer.jpg'
import defaultChat from '../../../../../assets/images/img/defaultChat.jpg'
import '../styles.css'
import { NavLink } from 'react-router-dom'
import { URL_IMAGE } from '../../../../../api'

export default function ChatList({ chat, setUserSelected, user, roomId }) {
  let name = {
    user_name: 'Chat Público',
    person_id: {
      image: null,
    },
  }

  if (chat.users.length) name = chat.users.find((u) => u._id !== user._id)

  useEffect(() => {
    if (roomId === chat._id) {
      setUserSelected(name)
    }
  }, [setUserSelected])

  return (
    <NavLink
      className="col-12 row p-2 btn-outline-secondary chat-card-list"
      onClick={() => setUserSelected(name)}
      to={`/chat/${chat._id}`}
    >
      <div className="row">
        <div className="col-4">
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
        <div className="col-4">
          <strong>{name.user_name}</strong>
          {/* <p>Nuevo mensaje</p> */}
        </div>
        <div className="col-4">
          {/* <span class="badge rounded-pill bg-primary float-end">3</span> */}
        </div>
      </div>
    </NavLink>
  )
}
