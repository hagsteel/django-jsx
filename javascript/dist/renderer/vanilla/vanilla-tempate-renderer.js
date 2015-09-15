"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateLoader = require("./template-loader");

var renderer = {
    render: function render(templatePath, context) {
        var Component = _templateLoader.loader.load(templatePath);
        return React.renderToStaticMarkup(Component(context));
    }
};

exports.renderer = renderer;