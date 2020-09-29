import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import {Button, Container, Divider, Grid, Header, Icon, Input, Popup, Form, Checkbox, Label} from 'semantic-ui-react'
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

    isSelected = (option) => {
        return this.props.selectedOptionId == option.id;
    }

    render() {
        return (
            <div>
                <Form>
                    {
                        this.props.optionList && this.props.optionList.length > 0 && this.props.optionList
                            .map(option =>
                                <Form.Field key={option.id} disabled={this.props.selectedOptionId > 0} className={"option"}
                                            onClick={() => this.onclickOption(option.id)}>
                                    <Checkbox
                                        celled
                                        radio
                                        label={option.option}
                                        name={option.id}
                                        value={option.option}
                                        checked={this.isSelected(option)
                                        }
                                    />
                                </Form.Field>


                            )
                    }
                </Form>

                <br/><br/>
                <Grid divided='vertically'>
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