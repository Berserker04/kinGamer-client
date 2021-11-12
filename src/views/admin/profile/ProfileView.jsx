import React, { useState } from "react";
import { URL_IMAGE } from "../../../api";

export default function ProfileView({
  user,
  specialties,
  form,
  professions,
  formChange,
  update,
}) {
  const [newImage, setNewImage] = useState(false);
  const handleFiles = () => {
    let files = document.querySelector(`#upload-images`)?.files;

    if (files) {
      files = [files[0]];
      Object.keys(files).forEach((f, i) => {
        let reader = new FileReader();
        let preview = {};
        reader.onloadend = function () {
          if (files) {
            let base64 = typeof reader.result === "string" ? reader.result : "";
            // filesAdd(base64);
            // console.log(base64);
            setNewImage(true);
            formChange({ name: "image", value: base64 });
          }
        };

        if (files) {
          reader.readAsDataURL(files[i]);
        } else {
          if (preview) preview.src = "";
        }
      });
    }
  };

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
                : "../assets/img/profile.jpg"
            }`}
            height="100"
            width="100"
            style={{ borderRadius: 10 }}
            alt="user1"
          />
        </div>
        <div className="card-body">
          <form role="form text-left">
            <div className="row mt-3">
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Name"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  className="form-control"
                  placeholder="Apellidos"
                  aria-label="Name"
                  aria-describedby="email-addon"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  name="email"
                  type="email"
                  value={form.email}
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  name="document"
                  type="text"
                  value={form.document}
                  className="form-control"
                  placeholder="documento"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <select
                  name="profession_id"
                  onChange={({ target }) => formChange(target)}
                  name="profession_id"
                  className="form-control"
                >
                  <option value="0" disabled selected>
                    Seleccionar profesión
                  </option>
                  {professions.map(
                    (e) =>
                      e.state && (
                        <option
                          key={e.id}
                          value={e.id}
                          selected={e.id == form.profession_id ? true : false}
                        >
                          {e.name}
                        </option>
                      )
                  )}
                </select>
              </div>
              <div className="col">
                <select
                  onChange={({ target }) => formChange(target)}
                  name="specialty_id"
                  className="form-control"
                >
                  <option value="0" disabled selected>
                    Seleccionar especialidad
                  </option>
                  {specialties.map(
                    (e) =>
                      e.state && (
                        <option
                          key={e.id}
                          value={e.id}
                          selected={e.id === form.specialty_id ? true : false}
                        >
                          {e.name}
                        </option>
                      )
                  )}
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  name="cellPhone"
                  type="text"
                  value={form.cellPhone}
                  className="form-control"
                  placeholder="Telefono"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <input
                  onChange={({ target }) => formChange(target)}
                  type="password"
                  className="form-control"
                  placeholder="contraseña"
                  aria-describedby="email-addon"
                />
              </div>
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
            <div className="mb-3">
              <button
                type="button"
                onClick={() => update()}
                className="btn bg-gradient-dark w-100 my-4 mb-2"
              >
                Actulizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
