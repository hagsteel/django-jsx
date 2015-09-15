import React from "react";
import Master from "./master";


export default class Home extends Master {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {

    }

    content () {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home view</p>
            </div>
        )
    }
}
