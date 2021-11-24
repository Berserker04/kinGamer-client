import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logos/logo.png'

// import logo from "../../assets/images/logo.png";
import './styles/styles.css'

const RegisterView = ({ onChange, register, form }) => (
  <div className="bg-pattern">
    <div className="bg-overlay"></div>
    <div
      class="account-pages pt-5"
      style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-lg-6 col-md-8">
            <div class="card">
              <div class="card-body p-4">
                <div className="text-center">
                  <Link replace to="/">
                    <img src={logo} alt="" height="100" />
                  </Link>
                </div>
                <h4 className="font-size-18 text-muted mt-2 text-center">
                  Registrae ahora!
                </h4>
                <p className="mb-5 text-center">
                  Y podras conocer más personas gamer.
                </p>
                <form class="form-horizontal" action="index.html">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-4">
                        <label class="form-label" for="username">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Nombre"
                          name="first_name"
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="useremail">
                          Apellido
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="useremail"
                          placeholder="Apellido"
                          name="last_name"
                          onChange={onChange}
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="user_name">
                          Usuario *
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="useremail"
                          placeholder="Usuario"
                          name="user_name"
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="useremail">
                          Correo *
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="useremail"
                          placeholder="Correo electronico"
                          name="email"
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="userpassword">
                          Contraseña *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          placeholder="Contraseña"
                          name="password"
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="term-conditionCheck"
                          name="acceptTerms"
                          onChange={(e) => {
                            e.target.value = e.target.checked
                            onChange(e)
                          }}
                        />
                        <label
                          class="form-check-label fw-normal"
                          for="term-conditionCheck"
                        >
                          Yo acepto *{' '}
                          <a href="#" class="text-primary">
                            Los Terminos y Condiciones
                          </a>
                        </label>
                      </div>
                      <div class="d-grid mt-4">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="button"
                          onClick={() => register()}
                          disabled={form.acceptTerms !== 'true' ? true : false}
                        >
                          Registrar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-5 text-center">
              <p class="text-white-50">
                Already have account ?
                <Link className="fw-medium text-primary" to="/login">
                  Iniciar sesión
                </Link>
              </p>
              <p class="text-white-50">
                © <script>document.write(new Date().getFullYear())</script>{' '}
                Upzet. Crafted with <i class="mdi mdi-heart text-danger"></i> by
                Themesdesign
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RegisterView
