import React from "react";

const isNode = typeof window === 'undefined';


export default class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    content() {
        return "";
    }

    stringify() {
        return {__html: "window.props=" + JSON.stringify(this.props)};
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <title>Foo</title>
                </head>

                <body>
                    <div>
                        <h1>Master page</h1>
                        <div id="app">{this.content()}</div>
                    </div>

                    <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
                </body>
            </html>
        )
    }
}
