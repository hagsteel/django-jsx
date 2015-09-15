import React from 'react';
import wildjs from "wildjs";


export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const val = e.target.getElementsByTagName("input")[0].value;
        wildjs.rest.post('/api/', {value: val}).then((response) => {
            this.setState({message: response.value});
        });
    }

    render() {
        return (
            <form method="post" onSubmit={this.submitForm}>
                <h4>{this.state.message}</h4>
                <input type="text" name="foo" id="foo" />
                <button type='submit'>Save</button>
                <p><a href="/about/" onClick={this.state.handleClick}>About</a></p>
                <p><a href="/form/" onClick={this.state.handleClick}>Form</a></p>
            </form>
        )
    }
}