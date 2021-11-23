import React, { useState } from 'react'
import { URL_IMAGE } from '../../../../../api'
import imgDefault from '../../../../../assets/images/img/defaultChat.jpg'

export default function ProductForm({ form, onChange }) {
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
            onChange({
              target: {
                name: 'image',
                value: base64,
              },
            })
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
    <div className="card-body">
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
                name="name"
                onChange={onChange}
                value={form.name}
                required
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="useremail">
                URl Compra
              </label>
              <input
                type="text"
                class="form-control"
                id="useremail"
                placeholder="Apellido"
                name="urlBuy"
                onChange={onChange}
                value={form.urlBuy}
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="user_name">
                Descripción
              </label>
              <textarea
                required
                class="form-control"
                name="description"
                placeholder="Descripcion"
                rows={5}
                onChange={onChange}
              >
                {form.description}
              </textarea>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label class="form-label" for="user_name">
                  Imagen *
                </label>
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
          </div>
        </div>
      </form>
    </div>
  )
}
