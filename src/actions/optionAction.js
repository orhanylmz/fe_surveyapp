import axios from "axios";
import {OPTION_URL, QUESTION_URL} from "../helpers/urlHelper";
import {ACTIVATE_QUESTION} from "./questionAction";

export const SELECT_OPTION = 'SELECT_OPTION';
export const SELECT_OPTION_PENDING = "SELECT_OPTION_PENDING";
export const SELECT_OPTION_FULFILLED = "SELECT_OPTION_FULFILLED";
export const SELECT_OPTION_REJECTED = "SELECT_OPTION_REJECTED";

export const FETCH_OPTION_LIST = 'FETCH_OPTION_LIST';
export const FETCH_OPTION_LIST_PENDING = "FETCH_OPTION_LIST_PENDING";
export const FETCH_OPTION_LIST_FULFILLED = "FETCH_OPTION_LIST_FULFILLED";
export const FETCH_OPTION_LIST_REJECTED = "FETCH_OPTION_LIST_REJECTED";

export const ADD_NEW_OPTION = 'ADD_NEW_OPTION';
export const ADD_NEW_OPTION_PENDING = "ADD_NEW_OPTION_PENDING";
export const ADD_NEW_OPTION_FULFILLED = "ADD_NEW_OPTION_FULFILLED";
export const ADD_NEW_OPTION_REJECTED = "ADD_NEW_OPTION_REJECTED";

export const ACTIVATE_OPTION = 'ACTIVATE_OPTION';
export const ACTIVATE_OPTION_PENDING = "ACTIVATE_OPTION_PENDING";
export const ACTIVATE_OPTION_FULFILLED = "ACTIVATE_OPTION_FULFILLED";
export const ACTIVATE_OPTION_REJECTED = "ACTIVATE_OPTION_REJECTED";

export function fetchOptionList(questionId) {
    return dispatch => {
        dispatch({
            type: FETCH_OPTION_LIST,
            payload: axios.get(OPTION_URL + "/questionId/" + questionId).then(result => result.data)

        })
    }
}

export function addNewOption(questionId, option) {
    let request = {
        option: {
            option: option,
            question: {
                id: questionId
            }
        }
    }
    return dispatch => {
        dispatch({
            type: ADD_NEW_OPTION,
            payload: axios.put(OPTION_URL, request).then(result => result.data.list)

        })
    }
}

export function selectOption(id) {
    return dispatch => {
        dispatch({
            type: SELECT_OPTION,
            payload: axios.get(OPTION_URL + "/id/" + id + "/select").then(result => result.data)
        })
    }
}

export function activateOption(optionId) {
    return dispatch => {
        dispatch({
            type: ACTIVATE_OPTION,
            payload: axios.get(OPTION_URL + "/id/" + optionId + "/activate").then(result => result.data.list)

        })
    }
}