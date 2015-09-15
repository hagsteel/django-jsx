import React from "react";
//import Master from "./master";
import About from "./about"

const isNode = typeof window === 'undefined';


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
            </div>
        )
    }
}
