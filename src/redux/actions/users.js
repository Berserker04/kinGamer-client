import {
  ChangeStateUser,
  GetUser,
  ListUser,
  RegisterUser,
  UpdateUser,
} from "../../services/user";
import { typeStore } from "../constants";

export const Users = (users) => ({
  type: typeStore.user.list,
  users,
});

export const Me = (me) => ({
  type: typeStore.user.me,
  me,
});

export const User = (user) => ({
  type: typeStore.user.user,
  user,
});

export const UsersFilter = (usersFilter) => ({
  type: typeStore.user.filter,
  usersFilter,
});

export const listUsers = (header) => async (dispatch) => {
  try {
    const users = await ListUser(header);
    dispatch(Users(users));
    dispatch(UsersFilter(users));
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (item, header) => async (dispatch) => {
  try {
    const user = await GetUser(item, header);
    console.log(user, " ###");
    await dispatch(User({ ...user, ...user.employee }));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (item, header) => async (dispatch) => {
  try {
    console.log(item, " LO QUE VA A ENVIAR");

    let isOk = await UpdateUser(item, header);
    if (isOk) {
      dispatch(listUsers(header));
      dispatch(getUser(item, header));
    }
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (item, header) => async (dispatch) => {
  try {
    let isOk = await RegisterUser(item, header);
    if (isOk) dispatch(listUsers(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const changeStateUser = (item, header) => async (dispatch) => {
  try {
    let isOk = await ChangeStateUser(item, header);
    if (isOk) dispatch(listUsers(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};
