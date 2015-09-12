import React from "react";
import resolve from "resolve";


const loader = {
    load(templatePath) {
        const template = require(templatePath);
        return React.createFactory(template)
    }
};


export {loader};
