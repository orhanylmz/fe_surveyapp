import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Input, Popup} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {QUESTION} from "../helpers/pathHelper";

class QuestionList extends PureComponent {
    state = {
        addNewQuestionMode: false,
        newQuestion: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClickAddNewQuestion = () => {
        this.props.addNewQuestion(this.props.surveyId, this.state.newQuestion);
        this.setState({
            addNewQuestionMode: false,
            newQuestion: null
        })
    }

    isPassiveAndAdminSession = (question) => {
        if (!this.props.isAdmin) {
            return false;
        }
        if (question.status == 'ACTIVE') {
            return false;
        }
        return true;
    }

    render() {
        return (
            <Grid columns={2} divided='vertically'>
                {
                    (this.props.questionList.length) && this.props.questionList
                        .map(question =>
                            <Grid.Row key={question.id}>
                                <Grid.Column as={NavLink} to={QUESTION + "/" + question.id} exact={"true"}
                                             width={this.isPassiveAndAdminSession(question) ? 14 : 16}>
                                    <p>
                                        <span>{question.question}</span>
                                    </p>
                                </Grid.Column>
                                {this.isPassiveAndAdminSession(question) &&
                                <Grid.Column onClick={() => this.props.activateQuestion(question.id)} width={2}>
                                    <p>
                                        <span>Activate</span>
                                    </p>
                                </Grid.Column>
                                }
                            </Grid.Row>
                        )
                }

                {
                    !this.state.addNewQuestionMode
                    && <Popup content='Add New Question' trigger={<Button icon='add'
                                                                          onClick={() => this.setState({addNewQuestionMode: true})}/>}/>
                }

                {this.state.addNewQuestionMode &&
                <Grid.Row>
                    <Grid.Column>
                        <p>
                            <Input name={"newQuestion"} onChange={this.onChange}></Input>
                            <Button onClick={this.onClickAddNewQuestion}>Save</Button>
                        </p>
                    </Grid.Column>
                </Grid.Row>}
            </Grid>
        );
    }
}

QuestionList.propTypes = {};

export default QuestionList;