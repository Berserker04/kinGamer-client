import React from 'react'
import ModalView from '../../../../components/modal/ModalView'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function ProductView({
  showModal,
  setShowModal,
  form,
  onChange,
  titleForm,
  sendForm,
  changeState,
  setProductEdit,
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
      <ProductList
        btnAdd={btnAdd}
        onHide={setShowModal}
        changeState={changeState}
        setProductEdit={setProductEdit}
      />

      <ModalView
        show={showModal}
        title={titleForm}
        onHide={setShowModal}
        btnSuccess={() => sendForm()}
        btnSuccessTitle="Guardar"
      >
        <ProductForm form={form} onChange={onChange} />
      </ModalView>
    </>
  )
}
