import React from "react";
import { Link } from "react-router-dom";

// import logo from "../../assets/images/logo.png";
import "./styles/styles.css";

const RegisterView = ({ onChange, register }) => (
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-8">
          <div class="card">
            <div class="card-body p-4">
              <div class="text-center">
                <a href="index.html" class="">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    height="24"
                    class="auth-logo logo-dark mx-auto"
                  />
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    height="24"
                    class="auth-logo logo-light mx-auto"
                  />
                </a>
              </div>

              <h4 class="font-size-18 text-muted text-center mt-2">
                Free Register
              </h4>
              <p class="text-muted text-center mb-4">
                Get your free Upzet account now.
              </p>
              <form class="form-horizontal" action="index.html">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-4">
                      <label class="form-label" for="username">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="useremail">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="userpassword">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        placeholder="Enter password"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="term-conditionCheck"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="term-conditionCheck"
                      >
                        I accept{" "}
                        <a href="#" class="text-primary">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                    <div class="d-grid mt-4">
                      <button
                        class="btn btn-primary waves-effect waves-light"
                        type="submit"
                      >
                        Register
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
              <a href="auth-login.html" class="fw-medium text-primary">
                {" "}
                Login{" "}
              </a>{" "}
            </p>
            <p class="text-white-50">
              © <script>document.write(new Date().getFullYear())</script> Upzet.
              Crafted with <i class="mdi mdi-heart text-danger"></i> by
              Themesdesign
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterView;
