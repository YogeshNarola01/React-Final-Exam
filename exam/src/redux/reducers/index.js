import { combineReducers } from "redux";
import userReducer from "./userReducer";

let rootReducer = combineReducers({
  userlist: userReducer,
});

export default rootReducer;
