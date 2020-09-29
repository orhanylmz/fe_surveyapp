import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OptionList from "./OptionList";

import {Container, Divider, Grid, Header, Icon, Button} from 'semantic-ui-react'
import {NavLink, Link} from "react-router-dom";
import {QUESTION, QUESTION_REPORT} from "../helpers/pathHelper";

class Question extends PureComponent {
    componentDidMount() {
        this.props.fetchOptionList(this.props.questionId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.questionId !== prevProps.questionId) {
            this.props.fetchOptionList(this.props.questionId);
        }
    }

    state = {
        addNewOptionMode: false,
        newOption: null
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClickAddNewOption = () => {
        this.props.addNewOption(this.props.questionId, this.state.newOption)
        this.setState({
            addNewOptionMode: false,
            newOption: null
        })
    }

    getPreviousQuestionId = () => {
        console.log("getPreviousQuestionId");
        const index = this.getQuestionIndex() - 1;
        if (index < 0) {
            return null;
        }
        console.log("getPreviousQuestionId " + index);
        return this.props.questionList[index].id;
    }

    getNextQuestionId = () => {
        console.log("getNextQuestionId");
        const index = this.getQuestionIndex() + 1;
        if (index >= this.props.questionList.length) {
            return null;
        }
        console.log("getNextQuestionId " + index);

        return this.props.questionList[index].id;
    }

    getQuestionIndex = () => {
        return this.props.questionList.indexOf(this.props.questionList.filter(item => item.id == this.props.questionId)[0])
    }

    isAdmin = () => {
        console.log(this.props.isAdmin)
        if (!this.props.isAdmin) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <Header as='h2' inverted textAlign='center'>
                    {this.props.question && this.props.question.question}
                </Header>

                <OptionList questionId={this.props.questionId}
                            isAdmin={this.props.isAdmin}
                            addNewOption={this.props.addNewOption}
                            fetchOptionList={this.props.fetchOptionList}
                            optionList={this.props.optionList}
                            selectedOptionId={this.props.selectedOptionId}
                            selectOption={this.props.selectOption}
                            activateOption={this.props.activateOption}
                />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <Grid>
                    <Grid.Row columns={5}>
                        {
                            this.getPreviousQuestionId() != null &&
                            <Grid.Column as={NavLink} to={QUESTION + "/" + this.getPreviousQuestionId()} exact={"true"}
                                         floated='left'>
                                <p>
                                    <span>Back</span>
                                </p>
                            </Grid.Column>
                        }

                        {
                            this.getNextQuestionId() != null &&
                            <Grid.Column as={NavLink} to={QUESTION + "/" + this.getNextQuestionId()} exact={"true"}
                                         floated='right'>
                                <p>
                                    <span>Next</span>
                                </p>
                            </Grid.Column>
                        }
                    </Grid.Row>
                    {
                        this.isAdmin() &&
                        <Grid.Row>
                            <Grid.Column as={NavLink} to={QUESTION_REPORT + "/" + this.props.questionId} exact={"true"}>
                                <p>
                                    <span>Report</span>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    }
                </Grid>
            </div>
        );
    }
}

Question.propTypes = {};

export default Question;