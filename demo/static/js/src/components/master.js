import React from "react";


export default class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <link href="/static/css/core.css" media="all" rel="stylesheet" />
                    <link href="/static/css/react-widgets.css" media="all" rel="stylesheet" />
                    <link href="/static/css/variables.css" media="all" rel="stylesheet" />
                    <title>Foo</title>
                </head>

                <html lang={this.props.language} />
                <body>
                    <div>
                        <h1>Master page</h1>
                        <div id="app">{this.content()}</div>
                    </div>

                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
                </body>
            </html>
        )
    }
}
