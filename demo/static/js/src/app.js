import React from 'react';
import { Router, Route, Link } from 'react-router'

//import routers from "./routers"


export default class App extends React.Component {
    constructor (props) {
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

    updateUrl (pathname) {
        this.setState({pathname: pathname});
    }

    getPathName () {
        return this.state.pathname;
    }

    render () {
        return (
            <div>
                <h1>App</h1>
                {/* change the <a>s to <Links>s */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/form/">Form</Link></li>
                    <li><Link to="/about/">About</Link></li>
                </ul>

                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
            //React.createElement(routers.getComponent(this.getPathName()), {data: this.props, handleClick: this.handleClick})
        )
    }
}
