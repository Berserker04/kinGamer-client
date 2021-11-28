import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/images/logos/logo.png'
import './styles/styles.css'
import { Button, Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { API } from '../../api'

const LogiRecoveryView = ({}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [form, setForm] = useState({
    email: '',
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = async () => {
    setLoading(true)
    await API.POST('/login/recovery/password', form).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 3000,
        })
        setRedirect(true)
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
    setLoading(false)
  }

  if (redirect) return <Navigate to="/" />

  return (
    <div className="bg-pattern">
      <div className="bg-overlay"></div>
      <div
        className="account-pages pt-5"
        style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="card">
                <div className="card-body p-4">
                  <div className="">
                    <div className="text-center">
                      <Link replace to="/">
                        <img src={logo} alt="" height="100" />
                      </Link>
                    </div>
                    <h4 className="font-size-18 text-muted mt-2 text-center">
                      Restablecer la contraseña
                    </h4>
                    <form className="form-horizontal" action="index.html">
                      <div className="row">
                        <div className="col-md-12">
                          <div class="alert alert-warning alert-dismissible">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                            Ingrese su <b>correo electrónico</b> y se le
                            enviarán las instrucciones.
                          </div>
                          <div className="mb-4">
                            <label class="form-label" for="useremail">
                              Email
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="useremail"
                              placeholder="Ingresar correo electronico"
                              onChange={onChange}
                              name="email"
                            />
                          </div>
                          <div className="d-grid mt-4">
                            <button
                              type="button"
                              onClick={sendEmail}
                              className="btn btn-primary waves-effect waves-light"
                              disabled={loading}
                            >
                              {loading ? (
                                <>
                                  <Spinner
                                    as="span"
                                    variant="light"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    animation="border"
                                  />{' '}
                                  Enviando...
                                </>
                              ) : (
                                'Enviar correo'
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-white-50">
                  ¿No tienes una cuenta?{' '}
                  <Link className="fw-medium text-primary" to="/registrar">
                    Registrate
                  </Link>
                </p>
                <p className="text-white-50">
                  © <script>document.write(new Date().getFullYear())</script>{' '}
                  KinGamer. Desarrollado por{' '}
                  <i className="mdi mdi-heart text-danger"></i> Equipo KinGamer
                  grupo 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogiRecoveryView
