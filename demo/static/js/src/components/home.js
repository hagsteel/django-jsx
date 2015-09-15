import React from "react";
import Master from "./master";


export default class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    click(e) {
        alert("clicked");
    }

    render () {
        const isNode = typeof window === 'undefined';

        if (isNode === false) {
            return (
                <div>
                    <h1>Home</h1>
                    <p>This is the home view</p>
                    <p>{this.props.date}</p>
                    <p><button onClick={this.click}>Click me</button></p>
                </div>
            )
        }

        return (
            <Master>
                <h1>Home</h1>
                <p>This is the home view</p>
                <p>{this.props.date}</p>
                <p><button onClick={this.click}>Click me</button></p>
            </Master>
        )
    }
}
