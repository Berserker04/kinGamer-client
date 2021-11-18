import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";
// import Logo from "../../assets/img/logos/MedicalApp.png";
import "./styles/styles.css";

const LogiView = ({
  // Variables
  singIn,
  loading,
  // Funtions
  onChange,
}) => (
  <div className="bg-pattern">
    <div className="bg-overlay"></div>
    <div
      className="account-pages pt-5"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8">
            <div className="card">
              <div className="card-body p-4">
                <div className="">
                  <div className="text-center">
                      <Link replace to="/">
                        <img
                          src={logo}
                          alt=""
                          height="100"
                        />
                      </Link>
                  </div>
                  <h4 className="font-size-18 text-muted mt-2 text-center">
                    Bienvenido de nuevo!
                  </h4>
                  <p className="mb-5 text-center">
                    Ingrese su correo electrónico y contraseña para iniciar
                    sesión.
                  </p>
                  <form className="form-horizontal" action="index.html">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-4">
                          <label className="form-label" for="username">
                            Usuario o correo
                          </label>
                          <input
                            onKeyUp={onChange}
                            name="user_name"
                            type="email"
                            className="form-control"
                            id="username"
                            placeholder="Ingresar usuario"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label" for="userpassword">
                            Contraseña
                          </label>
                          <input
                            onKeyUp={onChange}
                            name="password"
                            type="password"
                            className="form-control"
                            id="userpassword"
                            placeholder="Ingresar contraseña"
                          />
                        </div>

                        {/* <div className="row">
                                                    <div className="col">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="customControlInline"/>
                                                            <label className="form-label" className="form-check-label" for="customControlInline">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-end mt-3 mt-md-0">
                                                            <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock"></i> Forgot your password?</a>
                                                        </div>
                                                    </div>
                                                </div> */}
                        <div className="d-grid mt-4">
                          <button
                            type="button"
                            onClick={singIn}
                            disabled={loading}
                            className="btn btn-primary waves-effect waves-light"
                          >
                            {loading ? "Validando..." : "Ingresar"}
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
                ¿No tienes una cuenta?{" "}
                <Link className="fw-medium text-primary" to="/registrar">
                  Registrate
                </Link>
              </p>
              <p className="text-white-50">
                © <script>document.write(new Date().getFullYear())</script>{" "}
                KinGamer. Desarrollado por{" "}
                <i className="mdi mdi-heart text-danger"></i> Equipo KinGamer
                grupo 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LogiView;
