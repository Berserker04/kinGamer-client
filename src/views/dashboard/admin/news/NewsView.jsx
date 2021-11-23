import React from 'react'
import ModalView from '../../../../components/modal/ModalView'
import NewsForm from './components/NewsForm'
import NewsList from './components/NewsList'

export default function NewsView({
  showModal,
  setShowModal,
  form,
  onChange,
  titleForm,
  sendForm,
  changeState,
  setNewsEdit,
}) {
  const btnAdd = (
    <div className="col-6">
      <button className="btn btn-primary" onClick={setShowModal}>
        Agregar producto
      </button>
    </div>
  )

  return (
    <>
      <NewsList
        btnAdd={btnAdd}
        onHide={setShowModal}
        changeState={changeState}
        setNewsEdit={setNewsEdit}
      />

      <ModalView
        show={showModal}
        title={titleForm}
        onHide={setShowModal}
        btnSuccess={() => sendForm()}
        btnSuccessTitle="Guardar"
      >
        <NewsForm form={form} onChange={onChange} />
      </ModalView>
    </>
  )
}
