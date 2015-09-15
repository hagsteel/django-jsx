"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Master = (function (_React$Component) {
    function Master(props) {
        _classCallCheck(this, Master);

        _get(Object.getPrototypeOf(Master.prototype), "constructor", this).call(this, props);
    }

    _inherits(Master, _React$Component);

    _createClass(Master, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "html",
                null,
                _react2["default"].createElement(
                    "head",
                    null,
                    _react2["default"].createElement("meta", { charSet: "UTF-8" }),
                    _react2["default"].createElement(
                        "title",
                        null,
                        "Foo"
                    )
                ),
                _react2["default"].createElement("html", { lang: this.props.language }),
                _react2["default"].createElement(
                    "body",
                    null,
                    _react2["default"].createElement(
                        "div",
                        null,
                        _react2["default"].createElement(
                            "h1",
                            null,
                            "Master page"
                        ),
                        _react2["default"].createElement(
                            "div",
                            { id: "app" },
                            this.content()
                        )
                    ),
                    _react2["default"].createElement("script", { type: "text/javascript", src: "/static/js/dist/vendor.js" }),
                    _react2["default"].createElement("script", { type: "text/javascript", src: "/static/js/dist/demo.js" })
                )
            );
        }
    }]);

    return Master;
})(_react2["default"].Component);

exports["default"] = Master;
module.exports = exports["default"];