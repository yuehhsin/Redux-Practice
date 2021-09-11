// reducers
import { combineReducers } from "redux";
import counterReducer from "./counter";
import typingReducer from "./typing";

const allReducer = combineReducers({
  counter: counterReducer,
  typing: typingReducer,
});

export default allReducer;
