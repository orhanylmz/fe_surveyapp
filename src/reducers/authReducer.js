import {
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGOUT_PENDING,
    LOGOUT_FULFILLED,
    LOGOUT_REJECTED,
    REGISTER_PENDING,
    REGISTER_FULFILLED,
    REGISTER_REJECTED
} from '../actions/authAction'

const initialState = {
    username: null,
    fetching: false,
    isAdmin: false,
    error: null
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_FULFILLED:
            return {
                ...state,
                fetching: false,
                username: action.payload.username,
                isAdmin: action.payload.userType == 'ADMIN'
            }
        case LOGIN_REJECTED:
            return {
                ...state,
                fetching: false,
                username: null
            }
        case LOGOUT_PENDING:
            return {
                ...state,
                fetching: true
            }
        case LOGOUT_FULFILLED:
            return {
                ...state,
                fetching: false,
                username: null
            }
        case LOGOUT_REJECTED:
            return {
                ...state,
                fetching: false
            }
        case REGISTER_PENDING:
            return {
                ...state,
                fetching: true
            }
        case REGISTER_FULFILLED:
            return {
                ...state,
                fetching: false,
                username: action.payload
            }
        case REGISTER_REJECTED:
            return {
                ...state,
                fetching: false,
                username: null
            }
        default:
            return state;
    }
}