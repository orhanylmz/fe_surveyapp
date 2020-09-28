import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import {SIGNIN} from "../helpers/pathHelper";

class Signup extends Component {
    state = {
        username: null,
        password: null,
        confirmPassword: null
    }

    onClickSignup = () => {
        if (this.state.password != this.state.confirmPassword) {
            /*FIXME ERROR MESSAGE*/
            return;
        }
        this.props.register(this.state.username, this.state.password);
    }

    onChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo192.png' /> Sign Up
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user'
                                        iconPosition='left'
                                        placeholder='Username'
                                        name={"username"}
                                        value={this.state.username}
                                        onChange={this.onChange}/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name={"password"}
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm Password'
                                type='password'
                                name={"confirmPassword"}
                                value={this.state.confirmPassword}
                                onChange={this.onChange}
                            />

                            <Button color='teal' fluid size='large' onClick={this.onClickSignup}>
                                Signup
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Account exists <a href={SIGNIN}>Sign In</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

Signup.propTypes = {};

export default Signup;