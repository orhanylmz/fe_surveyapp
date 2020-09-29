import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Header, Input, Popup} from "semantic-ui-react";
import {SURVEY} from "../helpers/pathHelper";
import {NavLink, Redirect} from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';



class SurveyList extends PureComponent {
    state = {
        addNewSurveyMode: false,
        newSurveyName: null,
        newSurveyDescription: null
    }

    componentDidMount() {
        this.props.fetchSurveyList();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClickAddNewSurvey = () => {
        console.log(this.state);
        this.props.addNewSurvey(this.state.newSurveyName, this.state.newSurveyDescription);
        /*FIXME SAVE*/
        this.setState({
            addNewSurveyMode: false,
            newSurveyName: null,
            newSurveyDescription: null
        })
    }

    onClickSurvey = (survey) => {
        this.props.loadSurvey(survey);
        this.props.history.push(SURVEY + "/" + survey.id)
    }

    render() {
        return (
            <div>
                <Header as='h2' inverted textAlign='center'>
                    Surveys
                </Header>
                <br/><br/><br/>
                <Grid columns={1} divided='vertically'>
                    {
                        (this.props.surveyList.length) && this.props.surveyList
                            .map(survey =>
                                <Grid.Row key={survey.id}>
                                    <Grid.Column exact={"true"} onClick={() => this.onClickSurvey(survey)}>
                                        <p>
                                            <span>{survey.name}</span>
                                            <span>{survey.description}</span>
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            )
                    }
                    {
                        this.props.isAdmin
                        && !this.state.addNewSurveyMode
                        && <Popup content='Add New Survey' trigger={<Button icon='add'
                                                                            onClick={() => this.setState({addNewSurveyMode: true})}/>}/>
                    }

                    {this.props.isAdmin && this.state.addNewSurveyMode &&
                    <Grid.Row>
                        <Grid.Column>
                            <p>
                                <Input name={"newSurveyName"} onChange={this.onChange}></Input>
                                <Input name={"newSurveyDescription"} onChange={this.onChange}></Input>
                                <Button onClick={this.onClickAddNewSurvey}>Save</Button>
                            </p>
                        </Grid.Column>
                    </Grid.Row>}
                </Grid>
            </div>
        );
    }
}

SurveyList.propTypes = {};

export default withRouter(SurveyList);