import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../../../../api'
import { refreshHeader } from '../../../../redux/actions/auth'
import { Me, User } from '../../../../redux/actions/users'
import ProfileView from './ProfileView'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ProfileContainer() {
  const dispatch = useDispatch()
  const { header } = useSelector((state) => state.auth)
  const { user, me } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)
  const [btnSend, setBtnSend] = useState(true)

  const [form, setForm] = useState({ ...me, ...user })

  const onChange = (e) => {
    setBtnSend(false)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleUpdate = async () => {
    setLoading(true)

    let { image, ...user } = form

    if (me.image === image) image = null

    let data = {
      _id: me._id,
      image,
      user,
    }

    await API.PUT(`/user/${user._id}`, data).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
        API.POST(
          '/login/refresh_token',
          { user_name: user.user_name },
          header,
        ).then(async ({ data }) => {
          if (!data.ok) {
            localStorage.removeItem('token')
          } else {
            console.log(data.body.token)
            const { person_id, ...user } = data.body.user
            dispatch(User(user))
            dispatch(Me(person_id))
            localStorage.setItem('token', data.body.token)
            dispatch(refreshHeader(data.body.token))
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
    setBtnSend(true)
    setLoading(false)
  }
  const handleUpdatePassword = async (values) => {
    setLoading(true)

    await API.PUT(`/user/password/${user._id}`, values).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
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

  const formChange = ({ name, value }) => {
    setBtnSend(false)
    setForm({ ...form, [name]: value })
  }

  const formik = useFormik({
    initialValues: {
      user_name: user.user_name,
      password: '',
      oldPassword: '',
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .min(8, 'Debe tener 8 caracteres minimo')
        .required('Ingresa un usuario valido'),
      password: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .min(8, 'Debe tener 8 caracteres minimo')
        .required('Ingresa una contraseña valida'),
    }),
    onSubmit: (values) => {
      handleUpdatePassword(values)
    },
  })

  // if (updateFinish) return <Navigate to="/" />

  return (
    <div>
      <ProfileView
        formChange={formChange}
        form={form}
        user={user}
        btnSend={btnSend}
        onChange={onChange}
        handleUpdate={handleUpdate}
        handleUpdatePassword={handleUpdatePassword}
        formik={formik}
      />
    </div>
  )
}
