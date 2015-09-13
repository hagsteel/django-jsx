import React from "react";
import {loader} from "./template-loader"


const renderer = {
    render(templatePath, context, renderStatic=false) {
        const Component = loader.load(templatePath);
        if (renderStatic === true) {
            return React.renderToStaticMarkup(Component(context));
        } else {
            return React.renderToString(Component(context));
        }
    }
};


export {renderer};
