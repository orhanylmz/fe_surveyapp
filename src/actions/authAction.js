import {LOGIN_URL, LOGOUT_URL, REGISTER_URL} from "../helpers/urlHelper";

import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";


export const LOGOUT = 'LOGOUT'
export const LOGOUT_PENDING = "LOGOUT_PENDING";
export const LOGOUT_FULFILLED = "LOGOUT_FULFILLED";
export const LOGOUT_REJECTED = "LOGOUT_REJECTED";

export const REGISTER = 'REGISTER';
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_FULFILLED = "REGISTER_FULFILLED";
export const REGISTER_REJECTED = "REGISTER_REJECTED";


export function login(username, password) {
    return dispatch => {
        dispatch({
            type: LOGIN,
            payload: axios.post(LOGIN_URL, {username, password}) .then(result => result.data)

        })
    }
}

export function logout() {
    return dispatch => {
        dispatch({
            type: LOGOUT,
            payload: axios.get(LOGOUT_URL)
        })
    }
}

export function register(username, password) {
    return dispatch => {
        dispatch({
            type: REGISTER,
            payload: axios.put(REGISTER_URL, {username, password, userType: "USER"}).then(result => result.data.username)
        })
    }
}

