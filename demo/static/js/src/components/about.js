import React from "react";


export default class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                <p><a href="/" onClick={this.state.handleClick}>Home</a></p>
                {this.state.data.data.map((d, i) => {
                    return <p key={"p-" + i}>{d}</p>
                })}
            </div>
        )
    }
}
