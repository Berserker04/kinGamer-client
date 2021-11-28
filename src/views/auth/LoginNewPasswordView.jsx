import React, { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import logo from '../../assets/images/logos/logo.png'
// import Logo from "../../assets/img/logos/MedicalApp.png";
import './styles/styles.css'
import { Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { API } from '../../api'

const LogiNewPasswordView = ({}) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [loadingValidate, setLoadingValidate] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [form, setForm] = useState({
    password: '',
    password2: '',
  })

  const { tokenRecoveryPassword } = useParams()

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const sendNewPassword = async () => {
    setLoading(true)
    const data = {
      user: form,
    }
    await API.PUT(`/user/${user._id}`, data).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
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

  const getUser = useCallback(async () => {
    const config = {
      headers: {
        authorization: `bearer ${tokenRecoveryPassword}`,
      },
    }
    await API.GET('/login/recovery/password', {}, config).then(({ data }) => {
      if (data.ok) {
        setUser(data.body.user)
        setTokenValid(true)
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
    setLoadingValidate(false)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  if (redirect) return <Navigate to="/login" />

  return (
    <div className="bg-pattern">
      <div className="bg-overlay"></div>
      <div
        className="account-pages pt-5"
        style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
      >
        {!loadingValidate && (
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

                      {tokenValid ? (
                        <h4 className="font-size-18 text-muted mt-2 text-center">
                          ¡Hola{' '}
                          <strong style={{ textTransform: 'uppercase' }}>
                            {user.user_name}
                          </strong>
                          ! <br />
                          Restablece tu contraseña
                        </h4>
                      ) : (
                        <>
                          <h4 className="font-size-18 text-muted mt-2 text-center">
                            Token expirado, vuelve a generar el link de
                            recuperación de contraseña.
                          </h4>
                          <div className="row">
                            <div
                              className="col-md-6"
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                              }}
                            >
                              <Link to="/" className="btn btn-info">
                                Inicio
                              </Link>
                            </div>
                            <div
                              className="col-md-6"
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                              }}
                            >
                              <Link to="/login" className="btn btn-success">
                                Login
                              </Link>
                            </div>
                            {/* <div className="col-md-4"><button className="btn btn-primary">Registrarse</button></div> */}
                          </div>
                        </>
                      )}

                      {tokenValid && (
                        <form className="form-horizontal" action="index.html">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mb-4">
                                <label class="form-label" for="useremail">
                                  Nueva contraseña
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="useremail"
                                  placeholder="Ingresar la nueva contraseña"
                                  onChange={onChange}
                                  name="password"
                                />
                              </div>
                              <div className="mb-4">
                                <label class="form-label" for="useremail">
                                  Confirmar contraseña
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="useremail"
                                  placeholder="Ingresar nuevamente la contraseña"
                                  onChange={onChange}
                                  name="password2"
                                />
                              </div>
                              <div className="d-grid mt-4">
                                <button
                                  type="button"
                                  onClick={sendNewPassword}
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
                                    'Actualizar contraseña'
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
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
                    <i className="mdi mdi-heart text-danger"></i> Equipo
                    KinGamer grupo 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LogiNewPasswordView
