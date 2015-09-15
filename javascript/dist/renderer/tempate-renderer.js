"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _templateLoader = require("./template-loader");

var renderer = {
    render: function render(templatePath, context) {
        var renderStatic = arguments[2] === undefined ? false : arguments[2];

        //const basePath = '/Users/jonas/Projects/Django/django-jsx/demo/static/js/transpiled/components/master.js';
        //const BaseComponent = loader.load(basePath);
        var Component = _templateLoader.loader.load(templatePath);
        //if (renderStatic === true) {
        return _react2["default"].renderToStaticMarkup(Component(context));
        //} else {
        //    const child = React.renderToString(Component(context));
        //    return React.renderToStaticMarkup(BaseComponent({children:child, context:context}));

        // Default
        //return React.renderToString(Component(context));
        //}
    }
};

exports.renderer = renderer;