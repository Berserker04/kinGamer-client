import React from 'react'
import logo from '../../../../../assets/images/logos/logo.png'

export default function MessageList({
  message,
  pos = 'flex-end',
  color = 'white',
  bg,
  icon,
  user
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: pos,
        width: '100%',
        alignItems: 'flex-end',
      }}
    >
      {icon ? (
        <div
          className="rounded-circle"
          style={{
            backgroundColor: 'white',
            padding: 4,
            marginRight: 5,
            width: 55,
            height: 55,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            alt=""
            height="50"
            width="50"
            className="rounded-circle"
          />
        </div>
      ) : (
        <div style={{ width: 55, marginRight: 5 }}></div>
      )}

      <span
        style={{
          fontSize: 18,
          backgroundColor: bg,
          maxWidth: '70%',
          padding: 10,
          justifySelf: 'flex-end',
          margin: '2px 0 ',
          borderRadius: '10px',
          color,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {message.message}
        <br />
        <span style={{ color: '#22D3EE', fontWeight: 'bold' }}>
          {icon ? message.user.user_name : ''}
        </span>
      </span>
    </div>
  )
}
