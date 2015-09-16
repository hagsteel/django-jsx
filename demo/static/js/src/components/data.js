import React from 'react';
import wildjs from 'wildjs'


export default class Data extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

    componentDidMount() {
        if (this.state.data.data_list === "" || this.state.data.data_list === undefined) {
            wildjs.rest.get('/api/list/').then((response) => {
                this.setState({data: {data_list: response}});
            });
        }
    }

    render() {
        const dataList = this.state.data.data_list || [];
        return (
            <div>
                <h2>List of data</h2>
                <p><a href="/" onClick={this.state.handleClick}>Home</a></p>
                <p><a href="/about/" onClick={this.state.handleClick}>About</a></p>
                <p><a href="/form/" onClick={this.state.handleClick}>Form</a></p>
                <p><a href="/data/" onClick={this.state.handleClick}>Data</a></p>

                <ul>
                    {dataList.results.map( (data, i) => {
                        return <li key={"p-" + i}>{data.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
