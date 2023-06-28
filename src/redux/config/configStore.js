// 중앙 데이터 관리소 를 설정하는 부분 
import { createStore } from "redux";
import { combineReducers } from "redux";
import todoinput from "../modules/todoinput";

const rootReducer = combineReducers({
  todoinput,
});
const store = createStore(rootReducer);

export default store;