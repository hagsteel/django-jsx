import React from "react";


export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

    componentDidMount () {

    }

    render () {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home view</p>
                <p>{this.state.data.date}</p>
                <p><a href="/about/" onClick={this.state.handleClick}>About</a></p>
                <p><a href="/form/" onClick={this.state.handleClick}>Form</a></p>
            </div>
        )
    }
}
