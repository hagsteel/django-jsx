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

        var basePath = "/Users/jonas/Projects/Django/django-jsx/demo/static/js/transpiled/components/master.js";
        var BaseComponent = _templateLoader.loader.load(basePath);
        var Component = _templateLoader.loader.load(templatePath);
        if (renderStatic === true) {
            return _react2["default"].renderToStaticMarkup(Component(context));
        } else {
            var child = _react2["default"].renderToString(Component(context));
            return _react2["default"].renderToStaticMarkup(BaseComponent({ children: child, context: context }));

            // Default
            //return React.renderToString(Component(context));
        }
    }
};

exports.renderer = renderer;