import { typeStore } from "../constants";

const INITIAL_STATE = {
    users: [],
    usersFilter: [],
    user: {},
    me: {},
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.user.list:
      return { ...state, users: action.users };
    case typeStore.user.filter:
      return { ...state, usersFilter: action.usersFilter };
    case typeStore.user.user:
      return { ...state, user: action.user };
    case typeStore.user.me:
      return { ...state, me: action.me };
    default:
      return state;
  }
};

export default Action;
