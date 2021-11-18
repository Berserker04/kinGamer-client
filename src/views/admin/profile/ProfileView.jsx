import React, { useState } from 'react'
import { URL_IMAGE } from '../../../api'

export default function ProfileView({
  user,
  specialties,
  form,
  professions,
  formChange,
  update,
  onChange,
  handleUpdate,
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
        <div className="d-flex justify-content-center">
          <img
            src={`${
              newImage
                ? form.image
                : form.image
                ? URL_IMAGE + form.image
                : '../assets/img/profile.jpg'
            }`}
            height="100"
            width="100"
            style={{ borderRadius: 10 }}
            alt="user1"
          />
        </div>
        <div className="card-body">
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
                    value={form.user_name}
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
                    value={form.email}
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
                    value={form.password}
                    required
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
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
