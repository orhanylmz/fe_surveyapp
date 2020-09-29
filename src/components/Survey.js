import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Button, Container, Divider, Grid, Header, Icon, Input} from 'semantic-ui-react'
import QuestionList from "./QuestionList";

class Survey extends PureComponent {
    state = {
        addNewQuestionMode: false,
        newQuestion: null
    }

    componentDidMount() {
        this.props.fetchQuestionList(this.props.surveyId);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Header as='h2' inverted textAlign='center'>
                    {this.props.survey && this.props.survey.name}
                </Header>
                <Header as='h3' inverted textAlign='center'>
                    {this.props.survey && this.props.survey.description}
                </Header>
                <br/><br/><br/>
                <QuestionList surveyId={this.props.surveyId}
                              isAdmin={this.props.isAdmin}
                              addNewQuestion={this.props.addNewQuestion}
                              fetchQuestionList={this.props.fetchQuestionList}
                              questionList={this.props.questionList}
                              activateQuestion={this.props.activateQuestion}
                              loadQuestion={this.props.loadQuestion}
                />

            </div>
        );
    }
}

Survey.propTypes = {};

export default Survey;