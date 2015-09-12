import React from "react";
import {loader} from "./template-loader"


const renderer = {
    render(templatePath, context) {
        const Component = loader.load(templatePath);
        return React.renderToString(
            Component(context)
        );
    }
};


export {renderer};
