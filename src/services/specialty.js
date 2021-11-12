import { API } from "../api";
import { error, success } from "./responseAlert";

export const ListSpecialty = async (header) => {
  return await API.GET("/specialty", {}, header).then(({ data }) => data);
};

export const RegisterSpecialty = async (item, header) => {
  return await API.POST(`/specialty`, item, header)
    .then(({ data }) => {
      if (data.ok) {
        success(data.message);
        return true;
      } else {
        error(data.message);
        return false;
      }
    })
    .catch((e) => console.log(e));
};

export const UpdateSpecialty = async (item, header) => {
  return await API.PUT(`/specialty/${item.id}`, item, header)
    .then(({ data }) => {
      if (data.ok) {
        success(data.message);
        return true;
      } else {
        error(data.message);
        return false;
      }
    })
    .catch((e) => console.log(e));
};

export const ChangeStateSpecialty = async (item={}, header) => {
  return await API.PUT(`/specialty/state/${item.id}`, {}, header)
    .then(({ data }) => {
      if (data.ok) {
        success(data.message);
        return true;
      } else {
        error(data.message);
        return false;
      }
    })
    .catch((e) => console.log(e));
};
