import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {selectOption} from "../actions/optionAction"
import {login, logout} from "../actions/authAction"
import {loadQuestion} from "../actions/questionAction"
import {loadSurvey} from "../actions/surveyAction"
import {fetchSurveyList, addNewSurvey} from "../actions/surveyAction"

import OptionList from "../components/OptionList"
import Question from "../components/Question";
import Survey from "../components/Survey";
import SurveyList from "../components/SurveyList";

class MainPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SurveyList surveyList={this.props.surveyReducer.surveyList}
                            fetchSurveyList={this.props.fetchSurveyList}
                            addNewSurvey={this.props.addNewSurvey}
                            isAdmin={this.props.authReducer.isAdmin}
                            loadSurvey={this.props.loadSurvey}
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
    addNewSurvey,
    fetchSurveyList,
    loadSurvey
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);