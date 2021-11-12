import { API } from "../api";
import { error, success } from "./responseAlert";

export const ListUser = async (header) => {
    return await API.GET("/user", {}, header).then(({ data }) => data);
};

export const RegisterUser = async (item, header) => {
    return await API.POST(`/user`, item, header)
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

export const GetUser = async (item, header) => {
    return await API.GET(`/user/${item.id}`, {}, header)
        .then(({ data }) => data.body)
        .catch((e) => console.log(e));
};

export const UpdateUser = async (item, header) => {
    return await API.PUT(`/user/${item.id}`, item, header)
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

export const ChangeStateUser = async (item = {}, header) => {
    return await API.PUT(`/user/state/${item.id}`, {}, header)
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
