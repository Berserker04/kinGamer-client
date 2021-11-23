import { combineReducers } from "redux";
import user from "./users";
import auth from "./auth";
import product from "./product";
import specialty from "./specialty";

export default combineReducers({
  user,
  auth,
  product,
  specialty,
});
