import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../api'
import { useDispatch } from 'react-redux'
import { refreshHeader } from '../../redux/actions/auth'
import { Me, User } from '../../redux/actions/users'
import { Navigate } from 'react-router-dom'
// import LoginContainer from './LoginContainer'
import Logo from '../../assets/images/logos/logo.png'

export default function CheckAuth({ children }) {
  const [loading, setLoading] = useState(true)
  const [isCheck, setIsCheck] = useState(false)
  const dispatch = useDispatch()

  const checkToken = useCallback(async () => {
    let token = localStorage.getItem('token')
    if (token) {
      try {
        let config = {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
        await API.GET('/login', {}, config).then(async ({ data }) => {
          if (!data.ok) {
            localStorage.removeItem('token')
          } else {
            // await this.props.setMe(data);
            // await this.props.setUser(data, config);
            const { person_id, ...user } = data.body.user
            dispatch(User(user))
            dispatch(Me(person_id))
            dispatch(refreshHeader(token))
            setIsCheck(true)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [dispatch])

  useEffect(() => {
    checkToken()
  }, [checkToken])

  if (loading) {
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <img
          src={Logo}
          height="100"
          alt="main_logo"
          style={{ borderRadius: 50, marginRight: 10 }}
        />{' '}
        <h1>Cargando...</h1>
      </div>
    )
  } else if (isCheck) {
    return children
  }
  // return <Navigate replace to="/login" />
  window.location.href = "/login"
}
