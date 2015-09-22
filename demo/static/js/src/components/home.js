import React from 'react';
import Nav from './nav'


export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

    render () {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home view</p>
                <Nav handleClick={this.state.handleClick} />
            </div>
        )
    }
}
