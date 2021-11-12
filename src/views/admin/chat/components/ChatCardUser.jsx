import React from 'react'

export default function ChatCardUser({message, pos = 'flex-end', color = 'white', bg }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: pos,
        width: '100%',
      }}
    >
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
        }}
      >
        {message.message}
      </span>
    </div>
  )
}
