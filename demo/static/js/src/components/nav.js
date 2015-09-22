import React from 'react'


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><a href="/" onClick={this.props.handleClick}>Home</a></li>
                <li><a href="/form/" onClick={this.props.handleClick}>Form</a></li>
                <li><a href="/data/" onClick={this.props.handleClick}>Data</a></li>
            </ul>
        )
    }
}
