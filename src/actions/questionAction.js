import axios from "axios";
import {QUESTION_URL, SURVEY_URL} from "../helpers/urlHelper";

export const LOAD_QUESTION = 'LOAD_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';

export const FETCH_QUESTION_LIST = 'FETCH_QUESTION_LIST';
export const FETCH_QUESTION_LIST_PENDING = "FETCH_QUESTION_LIST_PENDING";
export const FETCH_QUESTION_LIST_FULFILLED = "FETCH_QUESTION_LIST_FULFILLED";
export const FETCH_QUESTION_LIST_REJECTED = "FETCH_QUESTION_LIST_REJECTED";

export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const ADD_NEW_QUESTION_PENDING = "ADD_NEW_QUESTION_PENDING";
export const ADD_NEW_QUESTION_FULFILLED = "ADD_NEW_QUESTION_FULFILLED";
export const ADD_NEW_QUESTION_REJECTED = "ADD_NEW_QUESTION_REJECTED";

export const ACTIVATE_QUESTION = 'ACTIVATE_QUESTION';
export const ACTIVATE_QUESTION_PENDING = "ACTIVATE_QUESTION_PENDING";
export const ACTIVATE_QUESTION_FULFILLED = "ACTIVATE_QUESTION_FULFILLED";
export const ACTIVATE_QUESTION_REJECTED = "ACTIVATE_QUESTION_REJECTED";

export const FETCH_REPORT = 'FETCH_REPORT';
export const FETCH_REPORT_PENDING = "FETCH_REPORT_PENDING";
export const FETCH_REPORT_FULFILLED = "FETCH_REPORT_FULFILLED";
export const FETCH_REPORT_REJECTED = "FETCH_REPORT_REJECTED";

export function fetchQuestionList(serveyId) {
    return dispatch => {
        dispatch({
            type: FETCH_QUESTION_LIST,
            payload: axios.get(QUESTION_URL + "/surveyId/" + serveyId + "/0").then(result => result.data.list)

        })
    }
}

export function addNewQuestion(surveyId, question) {
    let request = {
        question: {
            question: question,
            survey: {
                id: surveyId
            }
        }
    }
    return dispatch => {
        dispatch({
            type: ADD_NEW_QUESTION,
            payload: axios.put(QUESTION_URL, request).then(result => result.data)

        })
    }
}

export function loadQuestion(id) {
    return dispatch => {
        dispatch({
            type: LOAD_QUESTION,
            payload: {
                id
            }
        })
    }
}

export function nextQuestion() {
    return dispatch => {
        dispatch({
            type: NEXT_QUESTION
        })
    }
}

export function previousQuestion() {
    return dispatch => {
        dispatch({
            type: PREVIOUS_QUESTION
        })
    }
}

export function activateQuestion(questionId) {
    return dispatch => {
        dispatch({
            type: ACTIVATE_QUESTION,
            payload: axios.get(QUESTION_URL + "/id/" + questionId + "/activate").then(result => result.data)

        })
    }
}

export function fetchReport(questionId) {
    return dispatch => {
        dispatch({
            type: FETCH_REPORT,
            payload: axios.get(QUESTION_URL + "/id/" + questionId + "/report").then(result => result.data)

        })
    }
}