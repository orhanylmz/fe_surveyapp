import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Survey from "../components/Survey";
import {login, logout} from "../actions/authAction";
import {selectOption} from "../actions/optionAction";
import {loadQuestion, addNewQuestion, fetchQuestionList, activateQuestion} from "../actions/questionAction";
import {loadSurvey, fetchSurveyList} from "../actions/surveyAction";
import {connect} from "react-redux";

class SurveyPage extends PureComponent {
    render() {
        const {match} = this.props;

        return (
            <div>
                <Survey surveyId={match.params._survey_id}
                        survey={this.props.surveyReducer.survey}
                        isAdmin={this.props.authReducer.isAdmin}
                        addNewQuestion={this.props.addNewQuestion}
                        fetchQuestionList={this.props.fetchQuestionList}
                        questionList={this.props.questionReducer.questionList}
                        activateQuestion={this.props.activateQuestion}
                />
            </div>
        );
    }
}

const mapStateToProps = ({authReducer, optionReducer, questionReducer, surveyReducer}) => {
    return {
        authReducer,
        optionReducer,
        questionReducer,
        surveyReducer,

    };
}

const mapDispatchToProps = {
    login,
    logout,
    selectOption,
    loadQuestion,
    fetchSurveyList,
    addNewQuestion,
    fetchQuestionList,
    activateQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);