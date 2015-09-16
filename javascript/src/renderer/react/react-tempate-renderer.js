import React from "react";
import {loader} from "./template-loader"


const renderer = {
    render(templatePath, context, request) {
        const Component = loader.load(templatePath);
        return React.renderToStaticMarkup(Component(context));
    }
};


export {renderer};
