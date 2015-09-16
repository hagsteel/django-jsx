"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var renderer = {
    render: function render(templatePath, context, request) {
        context.request = request;
        var Component = require(templatePath);
        return _react2["default"].renderToStaticMarkup(_react2["default"].createElement(Component, context));
    }
};

exports["default"] = renderer;
module.exports = exports["default"];
