
import React, { Component } from 'react';
import Dash from './dash';
export default class ViewSubmission extends Component {
    render() {
        return (
            <div>
                <Dash />
                <p>QUESTION: </p>
                <div>{this.props.location.source_code}</div>
            </div>
        )
    }
}
