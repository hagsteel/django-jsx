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

    fetchNext() {
        const url = this.state.data.data_list.next;
        wildjs.rest.get(url).then((response) => {
            this.setState({data: {data_list: response}});
        });
    }

    fetchPrev() {
        const url = this.state.data.data_list.previous;
        wildjs.rest.get(url).then((response) => {
            this.setState({data: {data_list: response}});
        });
    }

    render() {
        const dataList = this.state.data.data_list || {results: []};

        let next = "";
        let prev = "";

        if (dataList.next) {
            next = <button onClick={this.fetchNext.bind(this)}>Next</button>
        }

        if (dataList.previous) {
            prev = <button onClick={this.fetchPrev.bind(this)}>Prev</button>
        }

        return (
            <div>
                <h2>List of data</h2>
                <p><a href="/" onClick={this.state.handleClick}>Home</a></p>
                <p><a href="/about/" onClick={this.state.handleClick}>About</a></p>
                <p><a href="/form/" onClick={this.state.handleClick}>Form</a></p>
                <p><a href="/data/" onClick={this.state.handleClick}>Data</a></p>
                {next}
                {prev}
                <ul>
                    {dataList.results.map( (data, i) => {
                        return <li key={"p-" + i}>{data.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
