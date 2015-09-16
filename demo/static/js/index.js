import React from "react";
import App from "./src/app";


const Component = React.createFactory(App);

React.render(
    Component(window.props),
    document.getElementById("app")
);
