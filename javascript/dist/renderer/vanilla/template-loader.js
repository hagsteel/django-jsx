"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var loader = {
    load: function load(templatePath) {
        return require(templatePath);
    }
};

exports.loader = loader;