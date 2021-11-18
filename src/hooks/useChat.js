import { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { API, URL_SERVER } from '../api'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage' // Name of the event

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]) // Sent and received messages
  const socketRef = useRef()

  const { header } = useSelector((state) => state.auth)

  const getMessages = useCallback(async () => {
    // setChatSelected(roomId)
    try {
      await API.GET(`/messages?chat=${roomId}`, {}, header).then(
        async ({ data }) => {
          if (data.ok) {
            setMessages([...data.body])
          }
        },
      )
    } catch (error) {
      console.log(error)
    }
  }, [header, roomId])

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(URL_SERVER, {
      query: { roomId },
    })

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      }
      setMessages((messages) => [...messages, incomingMessage])
    })

    getMessages()

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect()
    }
  }, [roomId, getMessages])

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {

    try {
      API.POST(`/messages`, messageBody, header).then(async ({ data }) => {
        if (data.ok) {
          data.body.user = messageBody.user
          setMessages([...messages, data.body])
          
        }
      })
    } catch (error) {
      console.log(error)
    }


    // socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
    //   body: messageBody,
    //   senderId: socketRef.current.id,
    // })
  }

  return { messages, sendMessage }
}

export default useChat
