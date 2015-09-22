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

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var Base = (function (_React$Component) {
    function Base(props) {
        _classCallCheck(this, Base);

        _get(Object.getPrototypeOf(Base.prototype), "constructor", this).call(this, props);
    }

    _inherits(Base, _React$Component);

    _createClass(Base, [{
        key: "stringify",
        value: function stringify() {
            return { __html: "window.props=" + JSON.stringify(this.props) };
        }
    }, {
        key: "children",
        value: function children() {
            var app = _react2["default"].createFactory(_app2["default"]);
            return { __html: _react2["default"].renderToString(app(this.props)) };
        }
    }, {
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    "h1",
                    null,
                    "Base component"
                ),
                _react2["default"].createElement("div", { id: "app", dangerouslySetInnerHTML: this.children() }),
                _react2["default"].createElement("script", { type: "text/javascript", dangerouslySetInnerHTML: this.stringify() })
            );
        }
    }]);

    return Base;
})(_react2["default"].Component);

exports["default"] = Base;
module.exports = exports["default"];

//export default class Master extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//
//    stringify() {
//        return {__html: "window.props=" + JSON.stringify(this.props)};
//    }
//
//    children() {
//        const app = React.createFactory(App);
//        return {__html: React.renderToString(app(this.props))};
//
//        //return {__html: this.props.children};
//    }
//
//    render() {
//        return (
//                    <div>
//                        <h1>Master page</h1>
//                        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
//                        <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
//                    </div>
//
//        )
//
//        return (
//            <html>
//                <head>
//                    <meta charSet="UTF-8" />
//                    <title>Foo</title>
//                </head>
//
//                <body>
//                    <div>
//                        <h1>Master page</h1>
//                        <div id="app" dangerouslySetInnerHTML={this.children()}></div>
//                    </div>
//
//                    <script type="text/javascript" dangerouslySetInnerHTML={this.stringify()} />
//                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
//                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
//                </body>
//            </html>
//        )
//    }
//}