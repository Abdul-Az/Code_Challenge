import React from 'react';
import PropTypes from 'prop-types';
import RecDash from './rDash';

export default class AddChallenge extends React.Component {

    constructor(props) {
        super(props);
            
            this.state = {
            source_code: "",
            language_id: 4,
            stdin: '',
            expected_output: '',
            data: [],
            language: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sourceCode = this.sourceCode.bind(this);
        this.languageId = this.languageId.bind(this);
        this.stdin = this.stdin.bind(this);
        this.expected_output = this.expected_output.bind(this);
    }

    stdin(ev) {
        this.setState({ stdin: ev.target.value });
    }

    expected_output(ev) {
        this.setState({
            expected_output: ev.target.value
        });
    }

    sourceCode(event) {
        this.setState({
            source_code: event.target.value
        });
    }

    componentDidMount() {
        fetch('https://api.judge0.com/languages', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => response.json())
            .then((result) => {

                this.setState({
                    language: result,

                });
            }).catch(err => {
                alert(err);
            });

    }

    languageId(event) {
        this.setState({
            language_id: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { source_code, language_id, stdin, expected_output } = this.state;
        fetch('https://api.judge0.com/submissions/?wait=true', {
            method: 'POST',
            body: JSON.stringify({
                source_code,
                language_id,
                stdin,
                expected_output
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => response.json())
            .then((result) => {

                this.setState({
                    data: result,

                });
            }).catch(err => {
                alert(err);
            });
    }

    render() {
       
        return (
            <div>
                <RecDash/>
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <span>AddChallenges 1</span>
                        </div>
                    </div>
                    <div className="row"></div>
                </div>
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <div className="CreateComponent">
                                <form onSubmit={this.handleSubmit}>
                                    <select onClick={this.languageId} className='language'>
                                        {
                                            this.state.language.map((value, i) =>
                                                <option key={value.id}>{value.id}</option>
                                            )
                                        }
                                    </select>
                                    <textarea name="sourceCode" className='text-area' value={this.state.sourceCode} onChange={this.sourceCode}></textarea>
                                    <button type="button" className="btn btn-outline-success">Submit</button>
                                    <input value={this.state.stdin} onChange={this.stdin} className='stdin' placeholder="stdin"/>
                                    <input value={this.state.data.stdout} className='stdin' onChange={this.expected_output} placeholder="expected_output"/>

                                    <div className="output">
                                        <p>Output: {this.state.data.stdout}</p>
                                        <p>Status: {this.state.data.status && this.state.data.status.description ? this.state.data.status.description : null}</p>
                                        <p>Time: {this.state.data.time}</p>
                                        <p>ErrorMessage:  {this.state.data.stderr}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddChallenge.propTypes = {
    classes: PropTypes.object.isRequired,
};