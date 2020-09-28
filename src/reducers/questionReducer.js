import {
    ADD_NEW_QUESTION_PENDING,
    ADD_NEW_QUESTION_FULFILLED,
    ADD_NEW_QUESTION_REJECTED,
    FETCH_QUESTION_LIST_PENDING,
    FETCH_QUESTION_LIST_FULFILLED,
    FETCH_QUESTION_LIST_REJECTED,
    LOAD_QUESTION,
    NEXT_QUESTION,
    PREVIOUS_QUESTION,
    ACTIVATE_QUESTION_PENDING,
    ACTIVATE_QUESTION_FULFILLED,
    ACTIVATE_QUESTION_REJECTED,
    FETCH_REPORT_PENDING,
    FETCH_REPORT_FULFILLED,
    FETCH_REPORT_REJECTED
} from '../actions/questionAction'

const initialState = {
    fetching: false,
    questionList: [],
    questionIndex: null,
    report: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_QUESTION_PENDING:
            return {
                ...state,
                fetching: true
            }
        case ADD_NEW_QUESTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                questionList: [
                    ...state.questionList
                    , action.payload
                ]
            }
        case ADD_NEW_QUESTION_REJECTED:
            return {
                ...state,
                fetching: false
            }
        case FETCH_QUESTION_LIST_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_QUESTION_LIST_FULFILLED:
            return {
                ...state,
                fetching: false,
                questionList: action.payload
            }
        case FETCH_QUESTION_LIST_REJECTED:
            return {
                ...state,
                fetching: false,
                questionList: []
            }
        case FETCH_REPORT_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_REPORT_FULFILLED:
            return {
                ...state,
                fetching: false,
                report: action.payload
            }
        case FETCH_REPORT_REJECTED:
            return {
                ...state,
                fetching: false,
                report: null
            }
        case ACTIVATE_QUESTION_PENDING:
            return {
                ...state,
                fetching: true
            }
        case ACTIVATE_QUESTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                questionList: state.questionList.map(question => (question.id == action.payload.id) ? action.payload : question)
            }
        case ACTIVATE_QUESTION_REJECTED:
            return {
                ...state,
                fetching: false,
                questionList: []
            }
        case LOAD_QUESTION:
            return {
                ...state,
                questionIndex: state.questionList.indexOf(state.questionList.filter(item => item.id == action.payload.id)[0])
            }
        case NEXT_QUESTION:
            return {
                ...state,
                questionIndex: state.questionIndex == null ? 0 : Math.min([(state.questionIndex + 1), state.questionList.length -1])
            }
        case PREVIOUS_QUESTION:
            return {
                ...state,
                questionIndex: state.questionIndex == null ? 0 : Math.max([(state.questionIndex - 1), 0])
            }
        default:
            return state;
    }
}