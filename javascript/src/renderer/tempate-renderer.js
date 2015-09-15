import React from "react";
import {loader} from "./template-loader"


const renderer = {
    render(templatePath, context, renderStatic=false) {
        //const basePath = '/Users/jonas/Projects/Django/django-jsx/demo/static/js/transpiled/components/master.js';
        //const BaseComponent = loader.load(basePath);
        const Component = loader.load(templatePath);
        //if (renderStatic === true) {
            return React.renderToStaticMarkup(Component(context));
        //} else {
        //    const child = React.renderToString(Component(context));
        //    return React.renderToStaticMarkup(BaseComponent({children:child, context:context}));

            // Default
            //return React.renderToString(Component(context));
        //}
    }
};


export {renderer};
