import React from 'react';
import wildjs from "wildjs";
import Nav from './nav'


export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const val = e.target.getElementsByTagName("input")[0].value;
        wildjs.rest.post('/api/form/', {value: val}).then((response) => {
            this.setState({message: response.value});
        });
    }

    render() {
        return (
            <form method="post" onSubmit={this.submitForm}>
                <h1>Form</h1>
                <h4>{this.state.message}</h4>
                <input type="text" name="foo" id="foo" />
                <button type='submit'>Save</button>
                <Nav handleClick={this.props.handleClick} />
            </form>
        )
    }
}