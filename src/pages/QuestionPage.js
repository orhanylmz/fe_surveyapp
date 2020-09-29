import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {login, logout} from "../actions/authAction";
import {selectOption, addNewOption, fetchOptionList, activateOption} from "../actions/optionAction";
import {loadQuestion} from "../actions/questionAction";
import {fetchSurveyList} from "../actions/surveyAction";
import {connect} from "react-redux";

import Question from "../components/Question";

class QuestionPage extends PureComponent {

    render() {
        const {match} = this.props;

        return (
            <div>
                <Question questionId={match.params._question_id}
                          question={this.props.questionReducer.question}
                          isAdmin={this.props.authReducer.isAdmin}
                          optionList={this.props.optionReducer.optionList}
                          selectedOptionId={this.props.optionReducer.selectedOptionId}
                          fetchOptionList={this.props.fetchOptionList}
                          addNewOption={this.props.addNewOption}
                          selectOption={this.props.selectOption}
                          questionList={this.props.questionReducer.questionList}
                          activateOption={this.props.activateOption}
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
    activateOption
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);