import { combineReducers } from "redux";
import user from "./users";
import auth from "./auth";
import professionReducer from "./prefession";
import specialty from "./specialty";

export default combineReducers({
  user,
  auth,
  profession: professionReducer,
  specialty,
});
