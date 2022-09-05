import { combineReducers } from "redux";
import posts from "../reducer/taskReducer";



const reducer = combineReducers({
  posts,
});

export default reducer