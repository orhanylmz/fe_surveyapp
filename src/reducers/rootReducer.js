import {combineReducers} from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";
import questionReducer from "./questionReducer";
import optionReducer from "./optionReducer";

export default combineReducers({
    authReducer, surveyReducer, questionReducer, optionReducer
});