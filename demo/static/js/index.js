import React from "react";
import Home from "./src/components/home";
import About from "./src/components/about";


function getComponent() {
    switch (window.location.pathname) {
        case "/":
            return Home;
        case "/about/":
            return About;
    }
}


const Component = React.createFactory(getComponent());

React.render(
    Component(window.props),
    document
);
