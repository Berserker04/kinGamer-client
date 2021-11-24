import React, { useState } from 'react'
import { URL_IMAGE } from '../../../../api'
import imgDefault from '../../../../assets/images/img/defaultChat.jpg'

export default function ProfileView({
  form,
  formChange,
  onChange,
  handleUpdate,
  handleUpdatePassword,
  btnSend,
  formik,
}) {
  const [newImage, setNewImage] = useState(false)
  const handleFiles = () => {
    let files = document.querySelector(`#upload-images`)?.files

    if (files) {
      files = [files[0]]
      Object.keys(files).forEach((f, i) => {
        let reader = new FileReader()
        let preview = {}
        reader.onloadend = function () {
          if (files) {
            let base64 = typeof reader.result === 'string' ? reader.result : ''
            // filesAdd(base64);
            // console.log(base64);
            setNewImage(true)
            formChange({ name: 'image', value: base64 })
          }
        }

        if (files) {
          reader.readAsDataURL(files[i])
        } else {
          if (preview) preview.src = ''
        }
      })
    }
  }

  return (
    <div className="col-xl-5 col-lg-5 col-md-7 mx-auto">
      <div className="card z-index-0">
        <div className="card-header text-center pt-4">
          <h5>Actulizar Perfil</h5>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <img
            src={`${
              newImage
                ? form.image
                : form.image
                ? URL_IMAGE + form.image
                : imgDefault
            }`}
            height="100"
            width="100"
            style={{ borderRadius: 10 }}
            alt="user1"
          />
        </div>
        <div className="card-body">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Usuario
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Contraseña
              </button>
            </div>
          </nav>

          <div class="form-horizontal" action="index.html">
            <div class="row">
              <div class="col-md-12">
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <form class="form-horizontal">
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
                          value={form.user_name}
                          required
                          disabled
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
                          value={form.email}
                          required
                          disabled
                        />
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          {/* <input type="file" accept=".jpg,.png"  aria-describedby="email-addon" /> */}
                          <input
                            className="form-control"
                            id="upload-images"
                            type="file"
                            name="image"
                            multiple
                            onChange={handleFiles}
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="d-grid mt-4">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="button"
                          onClick={() => handleUpdate()}
                          disabled={btnSend}
                        >
                          Actualizar
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <form
                      class="form-horizontal"
                      onSubmit={formik.handleSubmit}
                    >
                      <div class="mb-4">
                        <label class="form-label" for="userpassword">
                          Actual contraseña *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          placeholder="Contraseña"
                          name="oldPassword"
                          onChange={formik.handleChange}
                          value={form.oldPassword}
                          // required
                        />
                        {formik.touched.oldPassword && formik.errors.oldPassword ? (
                          <div style={{ color: 'pink' }}>
                            {formik.errors.oldPassword}
                          </div>
                        ) : null}
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="userpassword">
                          Nueva contraseña *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          placeholder="Contraseña"
                          name="password"
                          onChange={formik.handleChange}
                          value={form.password}
                          // required
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div style={{ color: 'pink' }}>
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div class="d-grid mt-4">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="submit"
                          // onClick={() => handleUpdatePassword()}
                          // disabled={btnSend}
                        >
                          Actualizar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
