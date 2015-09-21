import React from 'react';
import wildjs from 'wildjs'
import Nav from './nav'


export default class Data extends React.Component {
    constructor (props) {
        super(props);
        this.state = props;
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        if (this.state.data.data_list === "" || this.state.data.data_list === undefined) {
            wildjs.rest.get('/api/list/').then((response) => {
                this.setState({data: {data_list: response}});
            });
        }
    }

    click(page, e) {
        e.preventDefault();
        let url = this.state.data.data_list.api_url;
        if (page !== null) {
            url = this.state.data.data_list.api_url + page;
        }

        console.log(url);

        wildjs.rest.get(url).then((response) => {
            console.log('got it');
            this.setState({data: {data_list: response}});
        });

        this.state.handleClick(e);
    }

    render() {
        const dataList = this.state.data.data_list || {results: []};

        let next = "";
        let prev = "";

        if (dataList.next) {
            next = <a href={dataList.next} onClick={this.click.bind(this, dataList.next)}>Next</a>
        }

        if (dataList.previous) {
            prev = <a href={dataList.previous} onClick={this.click.bind(this, dataList.next)}>Prev</a>
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
