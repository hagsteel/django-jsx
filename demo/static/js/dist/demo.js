(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcComponentsHome = require("./src/components/home");

var _srcComponentsHome2 = _interopRequireDefault(_srcComponentsHome);

var _srcComponentsAbout = require("./src/components/about");

var _srcComponentsAbout2 = _interopRequireDefault(_srcComponentsAbout);

_react2["default"].render(_react2["default"].createElement(_srcComponentsHome2["default"], { date: "now" }), document.getElementById("app"));
//document

},{"./src/components/about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./src/components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _master = require("./master");

var _master2 = _interopRequireDefault(_master);

var About = (function (_Master) {
    _inherits(About, _Master);

    function About(props) {
        _classCallCheck(this, About);

        _get(Object.getPrototypeOf(About.prototype), "constructor", this).call(this, props);
    }

    _createClass(About, [{
        key: "content",
        value: function content() {
            return _react2["default"].createElement(
                "h1",
                null,
                "About"
            );
        }
    }]);

    return About;
})(_master2["default"]);

exports["default"] = About;
module.exports = exports["default"];

},{"./master":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _master = require("./master");

var _master2 = _interopRequireDefault(_master);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "click",
        value: function click(e) {
            alert("clicked");
        }
    }, {
        key: "render",
        value: function render() {
            var isNode = typeof window === 'undefined';

            if (isNode === false) {
                return _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "h1",
                        null,
                        "Home"
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        "This is the home view"
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        this.props.date
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        _react2["default"].createElement(
                            "button",
                            { onClick: this.click },
                            "Click me"
                        )
                    )
                );
            }

            return _react2["default"].createElement(
                _master2["default"],
                null,
                _react2["default"].createElement(
                    "h1",
                    null,
                    "Home"
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    "This is the home view"
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    this.props.date
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "button",
                        { onClick: this.click },
                        "Click me"
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"./master":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Master = (function (_React$Component) {
    _inherits(Master, _React$Component);

    function Master(props) {
        _classCallCheck(this, Master);

        _get(Object.getPrototypeOf(Master.prototype), "constructor", this).call(this, props);
    }

    _createClass(Master, [{
        key: "content",
        value: function content() {
            return "";
        }
    }, {
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
                            this.props.children
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

},{"react":"react"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9tYXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLG1CQUFNLE1BQU0sQ0FDUixtRUFBTSxJQUFJLEVBQUMsS0FBSyxHQUFHLEVBQ25CLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1JnQixPQUFPOzs7O3NCQUNOLFVBQVU7Ozs7SUFHUixLQUFLO2NBQUwsS0FBSzs7QUFDWCxhQURNLEtBQUssQ0FDVixLQUFLLEVBQUU7OEJBREYsS0FBSzs7QUFFbEIsbUNBRmEsS0FBSyw2Q0FFWixLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixLQUFLOztlQUtmLG1CQUFHO0FBQ04sbUJBQ0k7Ozs7YUFBYyxDQUNqQjtTQUNKOzs7V0FUZ0IsS0FBSzs7O3FCQUFMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0pSLE9BQU87Ozs7c0JBQ04sVUFBVTs7OztJQUdSLElBQUk7Y0FBSixJQUFJOztBQUNULGFBREssSUFBSSxDQUNSLEtBQUssRUFBRTs4QkFESCxJQUFJOztBQUVqQixtQ0FGYSxJQUFJLDZDQUVYLEtBQUssRUFBRTtLQUNoQjs7aUJBSGdCLElBQUk7O2VBS0gsNkJBQUcsRUFDcEI7OztlQUVJLGVBQUMsQ0FBQyxFQUFFO0FBQ0wsaUJBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQjs7O2VBRU0sa0JBQUc7QUFDTixnQkFBTSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDOztBQUU3QyxnQkFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO0FBQ2xCLHVCQUNJOzs7b0JBQ0k7Ozs7cUJBQWE7b0JBQ2I7Ozs7cUJBQTRCO29CQUM1Qjs7O3dCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtxQkFBSztvQkFDeEI7Ozt3QkFBRzs7OEJBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEFBQUM7O3lCQUFrQjtxQkFBSTtpQkFDbkQsQ0FDVDthQUNKOztBQUVELG1CQUNJOzs7Z0JBQ0k7Ozs7aUJBQWE7Z0JBQ2I7Ozs7aUJBQTRCO2dCQUM1Qjs7O29CQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtpQkFBSztnQkFDeEI7OztvQkFBRzs7MEJBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEFBQUM7O3FCQUFrQjtpQkFBSTthQUNoRCxDQUNaO1NBQ0o7OztXQWxDZ0IsSUFBSTtHQUFTLG1CQUFNLFNBQVM7O3FCQUE1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNKUCxPQUFPOzs7O0lBR0osTUFBTTtjQUFOLE1BQU07O0FBQ1osYUFETSxNQUFNLENBQ1gsS0FBSyxFQUFFOzhCQURGLE1BQU07O0FBRW5CLG1DQUZhLE1BQU0sNkNBRWIsS0FBSyxFQUFFO0tBQ2hCOztpQkFIZ0IsTUFBTTs7ZUFLaEIsbUJBQUc7QUFDTixtQkFBTyxFQUFFLENBQUM7U0FDYjs7O2VBRUssa0JBQUc7QUFDTCxtQkFDSTs7O2dCQUNJOzs7b0JBQ0ksMkNBQU0sT0FBTyxFQUFDLE9BQU8sR0FBRztvQkFDeEI7Ozs7cUJBQWtCO2lCQUNmO2dCQUVQLDJDQUFNLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQyxHQUFHO2dCQUNuQzs7O29CQUNJOzs7d0JBQ0k7Ozs7eUJBQW9CO3dCQUNwQjs7OEJBQUssRUFBRSxFQUFDLEtBQUs7NEJBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO3lCQUFPO3FCQUN2QztvQkFFTiw2Q0FBUSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFDLDJCQUEyQixHQUFVO29CQUN4RSw2Q0FBUSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFDLHlCQUF5QixHQUFVO2lCQUNuRTthQUNKLENBQ1Y7U0FDSjs7O1dBN0JnQixNQUFNO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTlCLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvaG9tZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3NyYy9jb21wb25lbnRzL2Fib3V0XCI7XG5cblxuUmVhY3QucmVuZGVyKFxuICAgIDxIb21lIGRhdGU9J25vdycgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG4gICAgLy9kb2N1bWVudFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIE1hc3RlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG4gICAgICAgIGFsZXJ0KFwiY2xpY2tlZFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBpc05vZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICAgICAgICBpZiAoaXNOb2RlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWUgdmlldzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxidXR0b24gb25DbGljaz17dGhpcy5jbGlja30+Q2xpY2sgbWU8L2J1dHRvbj48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hc3Rlcj5cbiAgICAgICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgaG9tZSB2aWV3PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxidXR0b24gb25DbGljaz17dGhpcy5jbGlja30+Q2xpY2sgbWU8L2J1dHRvbj48L3A+XG4gICAgICAgICAgICA8L01hc3Rlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkZvbzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9oZWFkPlxuXG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz17dGhpcy5wcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYXN0ZXIgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvanMvZGlzdC92ZW5kb3IuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9qcy9kaXN0L2RlbW8uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L2h0bWw+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=
