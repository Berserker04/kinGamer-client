import { API } from "../api";
import { error, success } from "./responseAlert";

export const ListProfession = async (header) => {
  return await API.GET("/profession", {}, header).then(({ data }) => data);
};

export const RegisterProfession = async (item, header) => {
  return await API.POST(`/profession`, item, header)
    .then(({ data }) => {
      console.log(data);
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

export const UpdateProfession = async (item, header) => {
  return await API.PUT(`/profession/${item.id}`, item, header)
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

export const ChangeStateProfession = async (item={}, header) => {
  return await API.PUT(`/profession/state/${item.id}`, {}, header)
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
