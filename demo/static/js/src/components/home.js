import React from "react";
import Master from "./master";


export default class Home extends Master {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({extra: 'foo'});
    }

    content() {
        return (
            <h1>Home {this.state.extra}</h1>
        )
    }
}
