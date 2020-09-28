import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import {SIGNUP} from "../helpers/pathHelper";

class Signin extends PureComponent {
    state = {
        username: null,
        password: null
    }

    onClickSignin = () => {
        console.log(this.state)
        this.props.login(this.state.username, this.state.password);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo192.png'/> Sign In
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

                            <Button color='teal' fluid size='large' onClick={this.onClickSignin}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href={SIGNUP}>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

Signin.propTypes = {};

export default Signin;