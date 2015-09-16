"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var renderer = {
    render: function render(templatePath, context, request) {
        return "This is a custom renderer";
    }
};

exports["default"] = renderer;
module.exports = exports["default"];
