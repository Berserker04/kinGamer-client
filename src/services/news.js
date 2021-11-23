import { API } from '../api'
import { error, success } from './responseAlert'

export const ListNews = async (header) => {
  return await API.GET('/news').then(({ data }) => data.body)
}

export const RegisterNews = async (item, header) => {
  return await API.POST(`/news`, item, header)
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

export const UpdateNews = async (item, header) => {
  return await API.PUT(`/news/${item.id}`, item, header)
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

export const ChangeStateNews = async (item = {}, header) => {
  return await API.PUT(`/news/state/${item.id}`, {}, header)
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
