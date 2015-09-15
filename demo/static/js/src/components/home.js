import React from "react";
import Master from "./master";

const isNode = typeof window === 'undefined';


export default class Home extends Master {
    constructor (props) {
        super(props);
    }

    componentDidMount () {

    }

    click(e) {
        alert("clicked");
    }

    content () {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home view</p>
                <p><button onClick={this.click}>Click me</button></p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}
