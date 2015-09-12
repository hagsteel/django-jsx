"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _resolve = require("resolve");

var _resolve2 = _interopRequireDefault(_resolve);

var loader = {
    load: function load(templatePath) {
        var template = require(templatePath);
        return _react2["default"].createFactory(template);
    }
};

exports.loader = loader;