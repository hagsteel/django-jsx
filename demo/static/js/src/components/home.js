import React from "react";
import Master from "./master";
import About from "./about"

const isNode = typeof window === 'undefined';


export default class Home extends Master {
    constructor (props) {
        super(props);
    }

    componentDidMount () {

    }

    click(e) {
        React.render(
            <About />,
            document
        );
    }

    content () {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home view</p>
                <p><button onClick={this.click}>Click me</button></p>
                <p>{this.props.date}</p>
                <p><a href="/about/">About</a></p>
            </div>
        )
    }
}
