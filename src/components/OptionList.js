import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import {Button, Container, Divider, Grid, Header, Icon, Input, Popup} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import {QUESTION} from "../helpers/pathHelper";

class OptionList extends PureComponent {
    state = {
        addNewOption: false,
        newOption: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClickAddNewOption = () => {
        this.props.addNewOption(this.props.questionId, this.state.newOption);
        this.setState({
            addNewOption: false,
            newOption: null
        })
    }

    onclickOption = (id) => {
        const {selectedOptionId} = this.props;
        if (selectedOptionId != null && selectedOptionId > 0) {
            return;
        }
        this.props.selectOption(id);
    };

    isPassiveAndAdminSession = (option) => {
        if (!this.props.isAdmin) {
            return false;
        }
        if (option.status == 'ACTIVE') {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <Grid divided='vertically'>
                    {
                        this.props.optionList && this.props.optionList.length > 0 && this.props.optionList
                            .map(option =>
                                <Grid.Row key={option.id}
                                          color={this.props.selectedOptionId == option.id ? "blue" : ""}>
                                    <Grid.Column onClick={() => this.onclickOption(option.id)}
                                                 width={(this.isPassiveAndAdminSession(option)) ? 14 : 16}>
                                        <p>
                                            <span>{option.option}</span>
                                        </p>
                                    </Grid.Column>

                                    {this.isPassiveAndAdminSession(option) &&
                                    <Grid.Column onClick={() => this.props.activateOption(option.id)} width={2}>
                                        <p>
                                            <span>Activate</span>
                                        </p>
                                    </Grid.Column>
                                    }
                                </Grid.Row>
                            )
                    }
                    {
                        !this.state.addNewOption
                        && <Popup content='Add New Option' trigger={<Button icon='add'
                                                                            onClick={() => this.setState({addNewOption: true})}/>}/>
                    }

                    {
                        this.state.addNewOption &&
                        <Grid.Row>
                            <Grid.Column>
                                <p>
                                    <Input name={"newOption"} onChange={this.onChange}></Input>
                                    <Button onClick={this.onClickAddNewOption}>Save</Button>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    }
                </Grid>

            </div>
        );
    }
}

OptionList.propTypes = {};

export default OptionList;