import React from "react";
import Master from "./master";


export default class About extends Master {
    constructor(props) {
        super(props);
    }

    content() {
        return (
            <h1>About</h1>
        )
    }
}
