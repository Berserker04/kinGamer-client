import { typeStore } from "../constants";

const INITIAL_STATE = {
    products: [],
    productsFilter: [],
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.product.list:
      return { ...state, products: action.products };
    case typeStore.product.productsFilter:
      return { ...state, productsFilter: action.productsFilter };
    default:
      return state;
  }
};

export default Action;
