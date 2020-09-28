import {
    FETCH_SURVEY_LIST_PENDING,
    FETCH_SURVEY_LIST_FULFILLED,
    FETCH_SURVEY_LIST_REJECTED,
    ADD_NEW_SURVEY_PENDING,
    ADD_NEW_SURVEY_FULFILLED,
    ADD_NEW_SURVEY_REJECTED,
    LOAD_SURVEY
} from '../actions/surveyAction'

const initialState = {
    fetching: false,
    surveyList: [],
    survey: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SURVEY_LIST_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SURVEY_LIST_FULFILLED:
            return {
                ...state,
                fetching: false,
                surveyList: action.payload
            }
        case FETCH_SURVEY_LIST_REJECTED:
            return {
                ...state,
                fetching: false,
                surveyList: []
            }
        case ADD_NEW_SURVEY_PENDING:
            return {
                ...state,
                fetching: true
            }
        case ADD_NEW_SURVEY_FULFILLED:
            return {
                ...state,
                fetching: false,
                surveyList: [
                    ...state.surveyList
                    , action.payload
                ]
            }
        case ADD_NEW_SURVEY_REJECTED:
            return {
                ...state,
                fetching: false
            }
        case LOAD_SURVEY:
            return {
                ...state,
                survey: state.surveyList.filter(item => item.id == action.payload.id)[0]
            }
        default:
            return state;
    }
}