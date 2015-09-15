import React from "react";


export default class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}
