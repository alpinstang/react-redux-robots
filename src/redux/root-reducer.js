import { combineReducers } from "redux";
import robotsReducer from "./robots.reducer";

export default combineReducers({
  robots: robotsReducer,
});
