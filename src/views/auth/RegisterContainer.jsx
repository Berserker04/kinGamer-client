import React, { Component, useState } from 'react'
import Swal from 'sweetalert2'

import RegisterView from './RegisterView'
import { API } from '../../api'

export default function RegisterContainer() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    image: null,
    acceptTerms: true,
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const register = async () => {
    setLoading(true)

    let { first_name, last_name, ...user } = form

    let data = {
      first_name,
      last_name,
      user,
    }

    await API.POST('/user', data).then(({ data }) => {
      if (data.ok) {
        API.POST('/login', user).then(({ data: result }) => {
          if (result.ok) {
            localStorage.setItem('token', result.body.token)
            window.location.href = '/'
          } else {
            window.location.href = '/login'
          }
        })
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

  return <RegisterView onChange={onChange} register={register} form={form} />
}
