import React, {Component} from 'react';
import './App.css';
import {Route, Redirect} from "react-router-dom";

import {Switch} from "react-router";

import {connect} from 'react-redux';

import {Container} from 'semantic-ui-react';

import Header from "./components/Header";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import SurveyPage from "./pages/SurveyPage";
import QuestionPage from "./pages/QuestionPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import QuestionReportPage from "./pages/QuestionReportPage";

import {selectOption} from "./actions/optionAction"
import {login, logout} from "./actions/authAction"
import {loadQuestion} from "./actions/questionAction"
import {fetchSurveyList} from "./actions/surveyAction"

import 'semantic-ui-css/semantic.min.css';
import './css/layout.css';

import {HOME, SIGNIN, SIGNUP, SURVEY, QUESTION, QUESTION_REPORT} from "./helpers/pathHelper"

class App extends Component {
    authBlock = (<Container content>
        <Header logout={this.props.logout}/>
        <Switch>
            <Route path={HOME} exact component={MainPage}/>
            <Route exact path={SURVEY + "/:_survey_id"} component={SurveyPage}/>
            <Route exact path={QUESTION + "/:_question_id"} component={QuestionPage}></Route>
            <Route exact path={QUESTION_REPORT + "/:_question_id"} component={QuestionReportPage}/>
            <Route render={() => (<Redirect to={HOME}/>)}/>
        </Switch>
        <Footer/>
    </Container>);

    noAuthBlock = (<Container content>
        <Switch>
            <Route path={SIGNIN} exact component={SigninPage}/>
            <Route path={SIGNUP} exact component={SignupPage}/>
            <Route render={() => (<Redirect to={SIGNIN}/>)}/>
        </Switch>
    </Container>);

    render() {
        return (
            (this.props.authReducer.username == null || this.props.authReducer.username == {} ? this.noAuthBlock : this.authBlock)
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
    fetchSurveyList
}

export default connect(mapStateToProps, mapDispatchToProps)(App);