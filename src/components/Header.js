import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    render() {
        return (
            <Grid>
                <Grid.Row columns={7}>
                    <Grid.Column floated='right' >
                        <p>
                            <span onClick={this.props.logout}>Logout</span>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

Header.propTypes = {};

export default Header;