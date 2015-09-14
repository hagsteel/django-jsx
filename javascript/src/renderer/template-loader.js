import React from "react";


const loader = {
    load(templatePath) {
        const template = require(templatePath);
        return React.createFactory(template)
    }
};


export {loader};
