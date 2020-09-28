import axios from "axios";
import {SURVEY_URL} from "../helpers/urlHelper";

export const LOAD_SURVEY = 'LOAD_SURVEY';

export const FETCH_SURVEY_LIST = 'FETCH_SURVEY_LIST';
export const FETCH_SURVEY_LIST_PENDING = "FETCH_SURVEY_LIST_PENDING";
export const FETCH_SURVEY_LIST_FULFILLED = "FETCH_SURVEY_LIST_FULFILLED";
export const FETCH_SURVEY_LIST_REJECTED = "FETCH_SURVEY_LIST_REJECTED";

export const ADD_NEW_SURVEY = 'ADD_NEW_SURVEY';
export const ADD_NEW_SURVEY_PENDING = "ADD_NEW_SURVEY_PENDING";
export const ADD_NEW_SURVEY_FULFILLED = "ADD_NEW_SURVEY_FULFILLED";
export const ADD_NEW_SURVEY_REJECTED = "ADD_NEW_SURVEY_REJECTED";

export function fetchSurveyList() {
    return dispatch => {
        dispatch({
            type: FETCH_SURVEY_LIST,
            payload: axios.get(SURVEY_URL + "/0").then(result => result.data.list.content)

        })
    }
}

export function addNewSurvey(surveyName, surveyDescription) {
    let request = {
        survey : {
            name: surveyName,
            description: surveyDescription,
            category: {
                id: 1
            }
        }
    }
    return dispatch => {
        dispatch({
            type: ADD_NEW_SURVEY,
            payload: axios.put(SURVEY_URL, request).then(result => result.data)

        })
    }
}

export function loadSurvey(id) {
    return dispatch => {
        dispatch({
            type: LOAD_SURVEY,
            payload: {
                id
            }
        })
    }
}