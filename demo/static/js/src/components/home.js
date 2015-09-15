import React from "react";
import Master from "./master";


var colors = ['orange', 'red', 'blue', 'purple'];
const Calendar = require('react-widgets').Calendar

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
                <Calendar />
            </div>
        )
    }
}
