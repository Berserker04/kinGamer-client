import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import LoginView from './LoginView'
import { API } from '../../api'

export default function LoginContainer() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    user_name: '',
    password: '',
  })

  const { token } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const singIn = async () => {
    setLoading(true)
    await API.POST('/login', form).then(({ data }) => {
      if (data.ok) {
        localStorage.setItem('token', data.body.token)
        window.location.href = '/'
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
    setLoading(false)
  }

  const getToken = localStorage.getItem('token')
  if (token || getToken) {
    window.location.href = '/'
  }
  return <LoginView loading={loading} onChange={onChange} singIn={singIn} />
}
