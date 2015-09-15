import React from "react";


export default class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    stringify() {
        return {__html: "window.props=" + JSON.stringify(this.props.context)};
    }

    children() {
        return {__html: this.props.children};
    }

    render() {
        console.log(this.props);
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <title>Foo</title>
                </head>

                <body>
                    <div>
                        <h1>Master page</h1>
                        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
                    </div>

                    <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
                </body>
            </html>
        )
    }
}
