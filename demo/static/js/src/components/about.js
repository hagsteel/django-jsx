import React from "react";
import Master from "./master";

const isNode = typeof window === 'undefined';


export default class About extends Master {
    constructor(props) {
        super(props);
    }

    content() {
        return (
            <div>
                <h2>About</h2>
                {this.props.data.map( (d, i) => {
                    return <p key={"p-" + i}>{d}</p>
                })}
            </div>
        )
    }
}
