import React from "react";


export default class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <title></title>
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
