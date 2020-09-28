import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

import {SIGNUP} from "../helpers/pathHelper";
import {login, logout} from "../actions/authAction";
import {select} from "../actions/optionAction";
import {loadQuestion} from "../actions/questionAction";
import {loadSurvey, loadSurveyList} from "../actions/surveyAction";
import {connect} from "react-redux";
import Signin from "../components/Signin";

class SigninPage extends Component {
    render() {
        return (
            <Signin login={this.props.login}/>
        );
    }
}

const mapStateToProps = ({authReducer}) => {
    return {
        authReducer
    };
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);