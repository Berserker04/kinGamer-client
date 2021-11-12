import { typeStore } from "../constants";

export const Token = (token) => ({
  type: typeStore.auth.token,
  token,
});
export const Header = (header) => ({
  type: typeStore.auth.header,
  header,
});

export const setStorage = (key, item) => (dispatch) => {
    try {
    localStorage.setItem(key, item);

    dispatch(refreshHeader(item));
  } catch (error) {
    console.log(error);
  }
};

export const delStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const refreshHeader = (token) => (dispatch) => {
  try {
    dispatch(
      Header({
        headers: {
          authorization: `bearer ${token}`,
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};
