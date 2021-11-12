import { typeStore } from "../constants";

const INITIAL_STATE = {
    professions: [],
    professionsFilter: [],
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.profession.list:
      return { ...state, professions: action.professions };
    case typeStore.profession.professionsFilter:
      return { ...state, professionsFilter: action.professionsFilter };
    default:
      return state;
  }
};

export default Action;
