import React from "react";


const renderer = {
    render(templatePath, context, request) {
        context.request = request;
        const Component = require(templatePath);
        return React.renderToStaticMarkup(<Component {...context} />);
    }
};


export default renderer;
