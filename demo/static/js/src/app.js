import React from 'react';
import routers from "./routers"


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateUrl = this.updateUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {pathname: props.pathname || '/'};
    }

    handleClick (e) {
        e.preventDefault();
        window.history.pushState(null, null, e.target.pathname);
        this.updateUrl(e.target.pathname);
    }

    updateUrl(pathname) {
        this.setState({pathname: pathname});
    }

    getPathName() {
        return this.state.pathname;
    }

    render() {
        return (
            React.createElement(routers.getComponent(this.getPathName()), {data: this.props, handleClick: this.handleClick})
        )
    }
}
