import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../../api'
import ChatView from './ChatView'

export default function ChatContainer() {
  const { user } = useSelector((state) => state.user)
  const { header } = useSelector((state) => state.auth)

  const [chatsPublic, setChatsPublic] = useState([])
  const [chatsPrivate, setChatsPrivate] = useState([])
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [chatSelected, setChatSelected] = useState({})

  const dispatch = useDispatch()

  const getChats = useCallback(async () => {
    try {
      await API.GET(`/chats?type=publico`, {}, header).then(
        async ({ data }) => {
          if (data.ok) {
            setChatsPublic(data.body)
          }
        },
      )
      await API.GET(`/chats?users=${user._id}`, {}, header).then(
        async ({ data }) => {
          if (data.ok) {
            setChatsPrivate(data.body)
          }
        },
      )
    } catch (error) {
      console.log(error)
    }
  }, [setChatsPublic, setChatsPrivate])

  const getMessages = async (chat) => {
    setChatSelected(chat)
    try {
      await API.GET(`/messages?chat=${chat._id}`, {}, header).then(
        async ({ data }) => {
          if (data.ok) {
            console.log(data.body)
            setMessages(data.body)
          }
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  const sendMessage = async () => {
    const data = {
      message,
      user: user._id,
      chat: chatSelected._id,
    }
    messages.push(data)
    setMessages([...messages])
    setMessage('')
    try {
      await API.POST(`/messages`, data, header).then(async ({ data }) => {
        if (data.ok) {
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChats()
  }, [getChats])

  return (
    <div>
      <ChatView
        user={user}
        chatsPublic={chatsPublic}
        chatsPrivate={chatsPrivate}
        chatSelected={chatSelected}
        message={message}
        messages={messages}
        getMessages={getMessages}
        sendMessage={sendMessage}
        setMessage={setMessage}
      />
    </div>
  )
}
