import React from 'react'
import mundoGamer from '../../../assets/images/logos/mundoGamer.jpg'
import logo from '../../../assets/images/logos/logo.png'
import ChatCardList from './components/ChatCardList'
import ChatCardUser from './components/ChatCardUser'
import './styles.css'

export default function ChatView({
  user,
  chatsPublic,
  chatsPrivate,
  chatSelected,
  messages,
  getMessages,
  sendMessage,
  setMessage,
  message,
}) {
  return (
    <div
      className=""
      style={{ backgroundColor: '#FFFFFF', height: 'calc(100vh - 170px)' }}
    >
      <div
        className="col-md-12"
        style={{
          height: 'calc(100vh - 170px)',
        }}
      >
        <div className="row">
          <div
            className="col-md-4"
            style={{
              paddingRight: 0,
            }}
          >
            <div className="p-3" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="col-12 d-flex">
                <div className="col-6">
                  <img
                    src={logo}
                    alt=""
                    height="50"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                {/* <div className="col-6 d-flex justify-content-end">
                  <i
                    className="mdi mdi-dots-vertical"
                    style={{ fontSize: 30 }}
                  ></i>
                </div> */}
              </div>
              <div className="col-12 my-2">
                {/* <input type="text" className="form-control" /> */}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="ri-search-line"></span>
                  </div>
                </form>
              </div>
            </div>
            <div
              style={{
                height: 'calc(100vh - 340px)',
                overflow: 'hidden !important',
                overflowY: 'scroll',
              }}
            >
              <h2 style={{ marginLeft: 10, color: '#22D3EE' }}>Chat público</h2>
              {/* <!-- CARD USER --> */}
              {chatsPublic.map((chat) => (
                <ChatCardList
                  key={chat._id}
                  chat={chat}
                  getMessages={getMessages}
                />
              ))}

              <h2 style={{ marginLeft: 10, color: '#22D3EE' }}>
                Chats privados
              </h2>
              {chatsPrivate.map((chat) => (
                <ChatCardList
                  key={chat._id}
                  chat={chat}
                  getMessages={getMessages}
                />
              ))}
            </div>
          </div>
          <div
            className="col-md-8"
            style={{
              padding: 0,
            }}
          >
            {!chatSelected._id ? (
              <div
                className="col-md-12 container-chat"
                style={{
                  padding: '20px 30px 100px',
                  height: 'calc(100vh - 170px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#00000099',
                    padding: 30,
                    borderRadius: '20px',
                  }}
                >
                  <img src={logo} height={200} />
                  <h2>Chat Gamer</h2>
                  <p style={{ fontSize: 16 }}>
                    ¡Seleccione un usuario para iniciar una conversación! ...{' '}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div
                  className="col-md-12 p-2 d-flex align-items-center"
                  style={{ backgroundColor: '#252F3E' }}
                >
                  <img
                    src={mundoGamer}
                    alt=""
                    height="50"
                    width="50"
                    className="rounded-circle mx-2"
                  />{' '}
                  <h2>Name User</h2>
                </div>

                <div
                  className="col-md-12 container-chat"
                  style={{
                    padding: '20px 30px 100px',
                    height: 'calc(100vh - 235px)',
                    overflow: 'hidden !important',
                    overflowY: 'scroll',
                    // background:"#EFEFEF"
                  }}
                >
                  <div className="col-md-12">
                    {messages.map((message) => (
                      <ChatCardUser
                        key={message._id}
                        message={message}
                        pos={
                          user._id === message.user ? 'flex-end' : 'flex-start'
                        }
                        color={user._id === message.user ? 'white' : 'black'}
                        bg={user._id === message.user ? '#252F3E' : 'white'}
                      />
                    ))}
                  </div>

                  <div
                    className="col-md-12"
                    style={{ position: 'absolute', bottom: 20 }}
                  >
                    <form>
                      <div className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Texto..."
                            value={message}
                            onChange={({ target }) => setMessage(target.value)}
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            class="btn btn-info waves-effect waves-light"
                            style={{ width: '100%' }}
                            onClick={() => sendMessage()}
                          >
                            <i class="fab fa-telegram-plane ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
