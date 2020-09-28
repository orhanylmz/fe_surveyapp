import {
    SELECT_OPTION_PENDING,
    SELECT_OPTION_FULFILLED,
    SELECT_OPTION_REJECTED,
    FETCH_OPTION_LIST_PENDING,
    FETCH_OPTION_LIST_FULFILLED,
    FETCH_OPTION_LIST_REJECTED,
    ADD_NEW_OPTION_PENDING,
    ADD_NEW_OPTION_FULFILLED,
    ADD_NEW_OPTION_REJECTED,
    ACTIVATE_OPTION_PENDING,
    ACTIVATE_OPTION_FULFILLED,
    ACTIVATE_OPTION_REJECTED
} from '../actions/optionAction'

const initialState = {
    fetching: false,
    optionList: [],
    selectedOptionId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_OPTION_PENDING:
            return {
                ...state,
                fetching: true
            }
        case SELECT_OPTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                selectedOptionId: action.payload
            }
        case SELECT_OPTION_REJECTED:
            return {
                ...state,
                fetching: false,
                selectedOptionId: null
            }
        case FETCH_OPTION_LIST_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_OPTION_LIST_FULFILLED:
            return {
                ...state,
                fetching: false,
                optionList: action.payload.list,
                selectedOptionId: action.payload.selectedOptionId
            }
        case FETCH_OPTION_LIST_REJECTED:
            return {
                ...state,
                fetching: false,
                optionList: []
            }
        case ADD_NEW_OPTION_PENDING:
            return {
                ...state,
                fetching: true
            }
        case ADD_NEW_OPTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                optionList: action.payload
            }
        case ADD_NEW_OPTION_REJECTED:
            return {
                ...state,
                fetching: false
            }
        case ACTIVATE_OPTION_PENDING:
            return {
                ...state,
                fetching: true
            }
        case ACTIVATE_OPTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                optionList: action.payload
            }
        case ACTIVATE_OPTION_REJECTED:
            return {
                ...state,
                fetching: false
            }
        default:
            return state;
    }
}