import React, {  useState } from 'react'
import Swal from 'sweetalert2'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import RegisterView from './RegisterView'
import { API } from '../../api'

export default function RegisterContainer() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
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

  const register = async (user) => {
    setLoading(true)

    await API.POST('/user', { user }).then(({ data }) => {
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

  const formik = useFormik({
    initialValues: {
      user_name: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Ingresa un usuario valido'),
      password: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Ingresa una contraseña valida'),
      password2: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Ingresa una contraseña valida'),
      email: Yup.string()
        .email('Dirección de correo electrónico inválida')
        .required('Ingresa un correo valido'),
    }),
    onSubmit: (values) => {
      if (values.password !== values.password2) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          showConfirmButton: false,
          timer: 2000,
        })
      } else {
        register(values)
      }
    },
  })

  return (
    <RegisterView
      onChange={onChange}
      register={register}
      form={form}
      formik={formik}
      loading={loading}
    />
  )
}
