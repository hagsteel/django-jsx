import createLocation from 'history/lib/createLocation'
import React from "react";
import App from "../app"
import { RoutingContext, match } from 'react-router'


export default class Base extends React.Component {
    constructor(props) {
        super(props);
    }

    stringify() {
        return {__html: "window.props=" + JSON.stringify(this.props)};
    }

    children() {
        //const app = React.createFactory(App);
        //return {__html: React.renderToString(app(this.props))};

        return {__html: <RoutingContext {...this.props}/>}
    }

    render() {
        return (
            <RoutingContext {...this.props}>
                <h1>Base component</h1>
                {this.props.children}
            </RoutingContext>
        );

        //return (
        //    <div>
        //        <h1>Master page</h1>
        //        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
        //        <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
        //    </div>
        //)
    }
}



//export default class Master extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//
//    stringify() {
//        return {__html: "window.props=" + JSON.stringify(this.props)};
//    }
//
//    children() {
//        const app = React.createFactory(App);
//        return {__html: React.renderToString(app(this.props))};
//
//        //return {__html: this.props.children};
//    }
//
//    render() {
//        return (
//                    <div>
//                        <h1>Master page</h1>
//                        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
//                        <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
//                    </div>
//
//        )
//
//        return (
//            <html>
//                <head>
//                    <meta charSet="UTF-8" />
//                    <title>Foo</title>
//                </head>
//
//                <body>
//                    <div>
//                        <h1>Master page</h1>
//                        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
//                    </div>
//
//                    <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
//                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
//                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
//                </body>
//            </html>
//        )
//    }
//}
