import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Signup from "../components/Signup";
import {register} from "../actions/authAction";
import {connect} from "react-redux";

class SignupPage extends Component {
    render() {
        return (
            <Signup register={this.props.register}/>
        );
    }
}

const mapStateToProps = ({authReducer}) => {
    return {
        authReducer
    };
}

const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);