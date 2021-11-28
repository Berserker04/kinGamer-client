import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { API } from '../../../../api'
import { listNews } from '../../../../redux/actions/news'
import NewsView from './NewsView'

const initialForm = {
  title: '',
  description: '',
  image: '',
}

export default function NewsContainer() {
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

  const changeState = async (news) => {
    news.state = !news.state
    delete news.image
    await API.PUT(`/news/${news._id}`, news).then(({ data }) => {
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
        dispatch(listNews(header))
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
    console.log(form)
    await API.POST(`/news`, form).then(({ data }) => {
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
        dispatch(listNews(header))
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

    if (!form.image.includes('data:image/png;base64')) delete form.image
    await API.PUT(`/news/${form._id}`, form).then(({ data }) => {
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
        dispatch(listNews(header))
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

  const setNewsAdd = () => {
    setForm(initialForm)
    setIsAdd(true)
    setShowModal(!showModal)
  }

  const setNewsEdit = (news) => {
    setForm(news)
    setIsAdd(false)
    setShowModal(!showModal)
  }

  return (
    <NewsView
      showModal={showModal}
      setShowModal={setNewsAdd}
      form={form}
      titleForm={isAdd ? 'Agregar noticia' : 'Actualizar noticia'}
      sendForm={isAdd ? sendForm : sendFormEdit}
      onChange={onChange}
      changeState={changeState}
      setNewsEdit={setNewsEdit}
      loading={loading}
    />
  )
}
