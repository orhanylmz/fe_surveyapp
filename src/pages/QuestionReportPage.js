import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import QuestionReport from "../components/QuestionReport";
import {login, logout} from "../actions/authAction";
import {activateOption, addNewOption, fetchOptionList, selectOption} from "../actions/optionAction";
import {loadQuestion, nextQuestion, previousQuestion, fetchReport} from "../actions/questionAction";
import {fetchSurveyList} from "../actions/surveyAction";
import {connect} from "react-redux";

class QuestionReportPage extends PureComponent {
    render() {
        const {match} = this.props;

        return (
            <div>
                <QuestionReport
                    questionId={match.params._question_id}
                    report={this.props.questionReducer.report}
                    fetchReport={this.props.fetchReport}
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
    fetchOptionList,
    addNewOption,
    nextQuestion,
    previousQuestion,
    activateOption,
    fetchReport
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionReportPage);