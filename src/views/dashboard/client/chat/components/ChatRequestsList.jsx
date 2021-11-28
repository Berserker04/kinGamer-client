import React from 'react'
import { URL_IMAGE } from '../../../../../api'
import defaultChat from '../../../../../assets/images/img/defaultChat.jpg'

export default function ChatRequestsList({
  chatRequests,
  declineChatRequest,
  aceptChatRequest,
}) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="table-rep-plugin">
          <div class="table-responsive mb-0" data-pattern="priority-columns">
            <table
              id="datatable"
              class="table table-bordered dt-responsive nowrap"
              // style="border-collapse: collapse; border-spacing: 0; width: 100%;"
              style={{
                borderCollapse: 'collapse',
                borderSpacing: 0,
                width: '100%',
              }}
            >
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th>Usuario</th>
                  <th>Perfil</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {!chatRequests.length && (
                  <tr>
                    <td colSpan="4" align="center">
                      No hay solicidutes
                    </td>
                  </tr>
                )}
                {chatRequests.map((item) => (
                  <tr key={item._id}>
                    <td align="center">
                      <h2>{item.user1.user_name}</h2>
                    </td>
                    <td align="center">
                      <img
                        src={
                          item.user1.person_id.image
                            ? URL_IMAGE + item.user1.person_id.image
                            : defaultChat
                        }
                        alt=""
                        height="60"
                      />
                    </td>
                    <td align="center">
                      <button
                        className="btn btn-success"
                        onClick={() => aceptChatRequest(item)}
                      >
                        Aceptar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => declineChatRequest(item._id)}
                      >
                        Rechazar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
