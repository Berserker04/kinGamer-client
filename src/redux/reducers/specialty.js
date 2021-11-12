import { typeStore } from "../constants";

const INITIAL_STATE = {
    specialties: [],
    specialtiesFilter: [],
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.specialty.list:
      return { ...state, specialties: action.specialties };
    case typeStore.specialty.filter:
      return { ...state, specialtiesFilter: action.specialtiesFilter };
    default:
      return state;
  }
};

export default Action;
