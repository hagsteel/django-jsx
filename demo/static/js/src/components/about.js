import React from 'react'
import Nav from './nav'


export default class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

    render() {
        const data = this.state.data.data || [];
        return (
            <div>
                <h2>About</h2>
                <Nav handleClick={this.props.handleClick} />
                {data.map((d, i) => {
                    return <p key={"p-" + i}>{d}</p>
                })}
            </div>
        )
    }
}
