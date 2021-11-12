import { typeStore } from "../constants";

const INITIAL_STATE = {
  token: "",
  header: {},
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.auth.header:
      return { ...state, header: action.header };
    case typeStore.auth.token:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default Action;
