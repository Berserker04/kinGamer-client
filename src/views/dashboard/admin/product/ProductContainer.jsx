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
  const [isAdd, setIsAdd] = useState(() => null)
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

  async function sendForm() {
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

  const sendFormEdit = async () => {
    setLoading(true)

    if (!form.image.includes('data:image/')) delete form.image
    await API.PUT(`/product/${form._id}`, form).then(({ data }) => {
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

  const setProductAdd = () => {
    setForm(initialForm)
    setIsAdd(true)
    setShowModal(!showModal)
  }

  const setProductEdit = (product) => {
    setForm(product)
    setIsAdd(false)
    setShowModal(!showModal)
  }

  return (
    <ProductView
      showModal={showModal}
      setShowModal={setProductAdd}
      form={form}
      titleForm={isAdd ? "Agregar producto" : "Actualizar producto"}
      sendForm={isAdd ? sendForm : sendFormEdit}
      onChange={onChange}
      changeState={changeState}
      setProductEdit={setProductEdit}
    />
  )
}
