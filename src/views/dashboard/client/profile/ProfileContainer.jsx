import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../../../../api'
import { refreshHeader } from '../../../../redux/actions/auth'
import { listProfessions } from '../../../../redux/actions/product'
import { listSpecialties } from '../../../../redux/actions/specialty'
import { getUser, Me, updateUser, User } from '../../../../redux/actions/users'
import ProfileView from './ProfileView'
export default function ProfileContainer() {
  const dispatch = useDispatch()
  const { header } = useSelector((state) => state.auth)
  const { user, me } = useSelector((state) => state.user)
  const { specialties } = useSelector((state) => state.specialty)
  const { professions } = useSelector((state) => state.profession)
  const [updateFinish, setUpdateFinish] = useState(false)
  const [loading, setLoading] = useState(false)
  const [btnSend, setBtnSend] = useState(true)

  const [form, setForm] = useState({ ...me, ...user })

  // const getData = useCallback(async () => {
  //   dispatch(listSpecialties(header));
  //   dispatch(listProfessions(header));
  //   setForm(user);
  // }, [dispatch, setForm, getUser]);

  const onChange = (e) => {
    setBtnSend(false)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleUpdate = async () => {
    setLoading(true)

    let { first_name, last_name, image, ...user } = form

    if (me.image === image) image = null

    let data = {
      _id: me._id,
      first_name,
      last_name,
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

  useEffect(() => {
    // getData();
  }, [])

  const formChange = ({ name, value }) => {
    setBtnSend(false)
    setForm({ ...form, [name]: value })
  }

  const update = async () => {
    let isOk = false

    form.user = {
      password: form.password ? form.password : null,
      role_id: form.role_id,
      state: form.state,
    }

    isOk = await dispatch(updateUser(form, header))
    setTimeout(() => {
      //   window.location.href = "/";
      setUpdateFinish(true)
    }, 2000)
    // if (isOk) reset();
  }

  if (updateFinish) return <Navigate to="/" />

  return (
    <div>
      <ProfileView
        formChange={formChange}
        form={form}
        update={update}
        user={user}
        btnSend={btnSend}
        specialties={specialties}
        professions={professions}
        onChange={onChange}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}
