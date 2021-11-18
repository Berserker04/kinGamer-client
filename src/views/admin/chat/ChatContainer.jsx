import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, URL_SERVER } from '../../../api'
import ChatView from './ChatView'
import socketIOClient from 'socket.io-client'
import { useLocation, useParams } from 'react-router'
import useChat from '../../../hooks/useChat'

export default function ChatContainer(props) {
  const { user } = useSelector((state) => state.user)
  const { header } = useSelector((state) => state.auth)

  const { roomId } = useParams()
  const { messages, sendMessage } = useChat(roomId)

  const [emoji, setEmoji] = useState(false)

  const [chatsPublic, setChatsPublic] = useState([])
  const [chatsPrivate, setChatsPrivate] = useState([])
  //   const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [chatSelected, setChatSelected] = useState('')
  const [userSelected, setUserSelected] = useState({})

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
  }, [setChatsPublic, setChatsPrivate, header, user])

  const getMessages = useCallback(async () => {
    setChatSelected(roomId)
  }, [roomId])

  const handleSendMessage = async () => {
    const data = {
      message: newMessage,
      user: user,
      chat: roomId,
    }
    sendMessage(data)
    setNewMessage('')
    setEmoji(false)
  }

  const startSocket = useCallback(() => {
    const socket = socketIOClient(URL_SERVER)
    socket.on('chat message', (data) => {
      if (chatSelected._id === data.chat && user._id !== data.user._id) {
        messages.push(data)
        // setMessages([...messages])
      }
    })
  }, [user, chatSelected])

  useEffect(() => {
    if (roomId) getMessages()
    else setChatSelected('')

    startSocket()
    getChats()
  }, [getChats, startSocket, getMessages, roomId])

  return (
    <div>
      <ChatView
        user={user}
        chatsPublic={chatsPublic}
        chatsPrivate={chatsPrivate}
        chatSelected={chatSelected}
        roomId={roomId}
        message={newMessage}
        messages={messages}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        sendMessage={handleSendMessage}
        setMessage={setNewMessage}
        emoji={emoji}
        setEmoji={setEmoji}
      />
    </div>
  )
}
