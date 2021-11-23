import { combineReducers } from "redux";
import user from "./users";
import auth from "./auth";
import product from "./product";
import news from "./news";
import specialty from "./specialty";

export default combineReducers({
  user,
  auth,
  product,
  news,
  specialty,
});
