import React from 'react';
import wildjs from 'wildjs'
import Nav from './nav'


export default class Data extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
        this.fetchNext = this.fetchNext.bind(this);
    }

    componentDidMount() {
        if (this.state.data.data_list === "" || this.state.data.data_list === undefined) {
            wildjs.rest.get('/api/list/').then((response) => {
                this.setState({data: {data_list: response}});
            });
        }
    }

    fetchNext(e) {
        e.preventDefault();
        //console.log('getting next');
        const url = this.state.data.data_list.next;
        console.log(url);
        //wildjs.rest.get(url).then((response) => {
        //    this.setState({data: {data_list: response}});
        //});
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
            next = <a href={dataList.next} onClick={this.fetchNext}>Next</a>
        }

        if (dataList.previous) {
            prev = <a href={dataList.previous} onClick={this.state.handleClick}>Prev</a>
        }

        return (
            <div>
                <h2>List of data</h2>
                <Nav handleClick={this.props.handleClick} />
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
