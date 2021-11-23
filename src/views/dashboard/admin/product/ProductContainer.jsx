import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { API } from '../../../../api'
import { listProducts } from '../../../../redux/actions/product'
import ProductView from './ProductView'

const initialForm = {
  name: '',
  description: '',
  urlBuy: '',
  image: '',
}

export default function ProductContainer() {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { header } = useSelector((state) => state.auth)

  const [form, setForm] = useState(initialForm)

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const setProductEdit = (product) => {
    setForm(product)
    setShowModal(!showModal)
  }

  const changeState = async (product) => {
    product.state = !product.state
    delete product.image
    await API.PUT(`/product/${product._id}`, product).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
        setShowModal(false)
        setForm(initialForm)
        dispatch(listProducts(header))
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
  }

  const sendForm = async () => {
    setLoading(true)

    await API.POST(`/product`, form).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
        setShowModal(false)
        setForm(initialForm)
        dispatch(listProducts(header))
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
    // setBtnSend(true)
    setLoading(false)
  }

  return (
    <ProductView
      showModal={showModal}
      setShowModal={() => setShowModal(!showModal)}
      form={form}
      sendForm={sendForm}
      onChange={onChange}
      changeState={changeState}
      setProductEdit={setProductEdit}
    />
  )
}
