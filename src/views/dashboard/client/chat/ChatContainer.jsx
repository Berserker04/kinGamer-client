import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API, URL_SERVER } from '../../../../api'
import ChatView from './ChatView'
import socketIOClient from 'socket.io-client'
import { useLocation, useParams } from 'react-router'
import useChat from '../../../../hooks/useChat'
import Swal from 'sweetalert2'
import ChatRequestsList from './components/ChatRequestsList'
import ModalView from '../../../../components/modal/ModalView'
import ChatList from './components/ChatList'

export default function ChatContainer(props) {
  const { user, me } = useSelector((state) => state.user)
  const { header } = useSelector((state) => state.auth)

  const { roomId, newUser } = useParams()

  const [currentRoomId, setCurrentRoomId] = useState(roomId || newUser)
  const { messages, sendMessage } = useChat(currentRoomId)

  const [emoji, setEmoji] = useState(false)

  const [chatsPublic, setChatsPublic] = useState([])
  const [chatsPrivate, setChatsPrivate] = useState([])
  const [chatsPrivateFilter, setChatsPrivateFilter] = useState([])
  //   const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [chatSelected, setChatSelected] = useState('')
  const [userSelected, setUserSelected] = useState({})

  // Modal
  const [showModal, setShowModal] = useState(false)
  const [showModalChat, setShowModalChat] = useState(false)
  const [chatRequests, setChatRequests] = useState([])

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
            setChatsPrivateFilter(data.body)
          }
        },
      )
    } catch (error) {
      console.log(error)
    }
  }, [setChatsPublic, setChatsPrivate, setChatsPrivateFilter, header, user])

  const getChatRequest = useCallback(async () => {
    try {
      await API.GET(`/addUser?user2=${user.user_name}`, {}, header).then(
        async ({ data }) => {
          if (data.ok) {
            setChatRequests(data.body)
          }
        },
      )
    } catch (error) {
      console.log(error)
    }
  }, [setChatRequests, header, user])

  const getMessages = useCallback(async () => {
    setCurrentRoomId(roomId)
    setChatSelected(roomId)
  }, [roomId, setChatSelected, setCurrentRoomId])

  const getMessages2 = useCallback(async () => {
    await API.GET(
      `/chats/private/?users=${newUser}&users=${user._id}`,
      {},
      header,
    ).then(async ({ data }) => {
      if (data.ok) {
        if (data.body?.length) {
          setCurrentRoomId(data.body[0]._id)
          setChatSelected(data.body[0]._id)
        } else {
          setCurrentRoomId(newUser)
          setChatSelected(newUser)
        }
      }
    })
  }, [currentRoomId, newUser, setChatSelected, setCurrentRoomId])

  const handleSendMessage = async () => {
    const data = {
      message: newMessage,
      user: { ...user, person_id: me },
      user2: userSelected,
      chat: currentRoomId,
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
    socket.on(user._id, (data) => {
      getChats()
    })
  }, [user, chatSelected, getChats])

  const addUser = () => {
    Swal.fire({
      title: 'Nombre de usuario',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
        placeholder: 'Ingresa el usuario a añadir',
      },
      showCancelButton: true,
      confirmButtonText: 'Añadir',
      showLoaderOnConfirm: true,
      preConfirm: async (newUserName) => {
        return await API.POST(
          `/addUser`,
          { user1: user._id, user2: newUserName },
          header,
        ).then(async ({ data }) => {
          if (data.ok) {
            return data
          } else Swal.showValidationMessage(`${data.message}`)
        })
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: result.value.message,
            showConfirmButton: false,
            timer: 2000,
          })
        }
      }
    })
  }

  const aceptChatRequest = async (item) => {
    let data = {
      users: [user._id, item.user1._id],
      type: 'privado',
    }
    await API.POST(`/chats`, data, header).then(async ({ data }) => {
      if (data.ok) {
        getChats()
        getChatRequest()
        setShowModal(false)

        await API.DEL(`/addUser/${item._id}`, {}, header).then(
          async ({ data }) => {
            getChatRequest()
          },
        )
      }
    })
  }

  const declineChatRequest = async (id) => {
    await API.DEL(`/addUser/${id}`, {}, header).then(async ({ data }) => {
      getChatRequest()
    })
  }

  const filterChats = async (value) => {
    let result = chatsPrivate.filter((chat) => {
      let currentUser = chat.users.find((u) => u._id !== user._id)
      if (currentUser.user_name.toLowerCase().includes(value.toLowerCase()))
        return true
      else return false
    })

    setChatsPrivateFilter([...result])
  }

  useEffect(() => {
    if (roomId) getMessages()
    else if (newUser) getMessages2()
    else setChatSelected('')

    startSocket()
    getChats()
    getChatRequest()
  }, [getChats, startSocket, getMessages, getMessages2, roomId, getChatRequest])

  return (
    <div>
      <ChatView
        me={me}
        user={user}
        chatsPublic={chatsPublic}
        chatsPrivate={chatsPrivateFilter}
        chatSelected={chatSelected}
        roomId={currentRoomId}
        message={newMessage}
        messages={messages}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        sendMessage={handleSendMessage}
        setMessage={setNewMessage}
        emoji={emoji}
        setEmoji={setEmoji}
        addUser={addUser}
        filterChats={filterChats}
        setShowModal={() => {
          getChatRequest()
          setShowModal(true)
        }}
        setShowModalChat={() => {
          getChats()
          setShowModalChat(true)
        }}
      />
      <ModalView
        show={showModal}
        title="Lista de solicitudes"
        onHide={() => setShowModal(false)}
      >
        <ChatRequestsList
          chatRequests={chatRequests}
          declineChatRequest={declineChatRequest}
          aceptChatRequest={aceptChatRequest}
        />
      </ModalView>
      <ModalView
        show={showModalChat}
        title="Lista de chats"
        onHide={() => setShowModalChat(false)}
      >
        <div className="col-12">
          <form className="app-search">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar usuario"
                onChange={({ target }) => filterChats(target.value)}
              />
              <span className="ri-search-line"></span>
            </div>
          </form>
        </div>
        <div
          style={{
            height: 'calc(100vh - 450px)',
            overflow: 'hidden !important',
            overflowY: 'scroll',
          }}
        >
          <h2 style={{ marginLeft: 10, color: '#22D3EE' }}>Chat público</h2>
          {/* <!-- CARD USER --> */}
          {!chatsPublic.length && (
            <p style={{ marginLeft: 15 }}>No hay chat público disponible</p>
          )}

          {chatsPublic.map((chat) => (
            <ChatList
              key={chat._id}
              chat={chat}
              roomId={roomId}
              setUserSelected={setUserSelected}
              user={user}
            />
          ))}

          <h2 style={{ marginLeft: 10, color: '#22D3EE' }}>Chats privados</h2>
          {!chatsPrivateFilter.length && (
            <p style={{ marginLeft: 15 }}>
              No hay chats privados, agrega personas
            </p>
          )}
          {chatsPrivateFilter.map((chat) => (
            <ChatList
              key={chat._id}
              chat={chat}
              roomId={roomId}
              setUserSelected={setUserSelected}
              user={user}
            />
          ))}
        </div>
      </ModalView>
    </div>
  )
}
