import { API } from '../api'
import { error, success } from './responseAlert'

export const ListProduct = async (header) => {
  return await API.GET('/product').then(({ data }) => data.body)
}

export const RegisterProduct = async (item, header) => {
  return await API.POST(`/product`, item, header)
    .then(({ data }) => {
      console.log(data)
      if (data.ok) {
        success(data.message)
        return true
      } else {
        error(data.message)
        return false
      }
    })
    .catch((e) => console.log(e))
}

export const UpdateProduct = async (item, header) => {
  return await API.PUT(`/product/${item.id}`, item, header)
    .then(({ data }) => {
      if (data.ok) {
        success(data.message)
        return true
      } else {
        error(data.message)
        return false
      }
    })
    .catch((e) => console.log(e))
}

export const ChangeStateProduct = async (item = {}, header) => {
  return await API.PUT(`/product/state/${item.id}`, {}, header)
    .then(({ data }) => {
      if (data.ok) {
        success(data.message)
        return true
      } else {
        error(data.message)
        return false
      }
    })
    .catch((e) => console.log(e))
}
