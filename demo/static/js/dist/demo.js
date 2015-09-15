(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcComponentsHome = require("./src/components/home");

var _srcComponentsHome2 = _interopRequireDefault(_srcComponentsHome);

var _srcComponentsAbout = require("./src/components/about");

var _srcComponentsAbout2 = _interopRequireDefault(_srcComponentsAbout);

_react2["default"].render(_react2["default"].createElement(_srcComponentsHome2["default"], null), document);

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

var Home = (function (_Master) {
    _inherits(Home, _Master);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
        this.state = {};
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "content",
        value: function content() {
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
                )
            );
        }
    }]);

    return Home;
})(_master2["default"]);

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

},{"react":"react"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9tYXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLG1CQUFNLE1BQU0sQ0FDUixzRUFBUSxFQUNSLFFBQVEsQ0FDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1JnQixPQUFPOzs7O3NCQUNOLFVBQVU7Ozs7SUFHUixLQUFLO2NBQUwsS0FBSzs7QUFDWCxhQURNLEtBQUssQ0FDVixLQUFLLEVBQUU7OEJBREYsS0FBSzs7QUFFbEIsbUNBRmEsS0FBSyw2Q0FFWixLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixLQUFLOztlQUtmLG1CQUFHO0FBQ04sbUJBQ0k7Ozs7YUFBYyxDQUNqQjtTQUNKOzs7V0FUZ0IsS0FBSzs7O3FCQUFMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0pSLE9BQU87Ozs7c0JBQ04sVUFBVTs7OztJQUdSLElBQUk7Y0FBSixJQUFJOztBQUNULGFBREssSUFBSSxDQUNSLEtBQUssRUFBRTs4QkFESCxJQUFJOztBQUVqQixtQ0FGYSxJQUFJLDZDQUVYLEtBQUssRUFBRTtBQUNiLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25COztpQkFKZ0IsSUFBSTs7ZUFNSCw2QkFBRyxFQUVwQjs7O2VBRU8sbUJBQUc7QUFDUCxtQkFDSTs7O2dCQUNJOzs7O2lCQUFhO2dCQUNiOzs7O2lCQUE0QjthQUMxQixDQUNUO1NBQ0o7OztXQWpCZ0IsSUFBSTs7O3FCQUFKLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0pQLE9BQU87Ozs7SUFHSixNQUFNO2NBQU4sTUFBTTs7QUFDWixhQURNLE1BQU0sQ0FDWCxLQUFLLEVBQUU7OEJBREYsTUFBTTs7QUFFbkIsbUNBRmEsTUFBTSw2Q0FFYixLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixNQUFNOztlQUtqQixrQkFBRztBQUNMLG1CQUNJOzs7Z0JBQ0k7OztvQkFDSSwyQ0FBTSxPQUFPLEVBQUMsT0FBTyxHQUFHO29CQUN4Qjs7OztxQkFBa0I7aUJBQ2Y7Z0JBRVAsMkNBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxBQUFDLEdBQUc7Z0JBQ25DOzs7b0JBQ0k7Ozt3QkFDSTs7Ozt5QkFBb0I7d0JBQ3BCOzs4QkFBSyxFQUFFLEVBQUMsS0FBSzs0QkFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO3lCQUFPO3FCQUNsQztvQkFFTiw2Q0FBUSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFDLDJCQUEyQixHQUFVO29CQUN4RSw2Q0FBUSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFDLHlCQUF5QixHQUFVO2lCQUNuRTthQUNKLENBQ1Y7U0FDSjs7O1dBekJnQixNQUFNO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTlCLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvaG9tZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3NyYy9jb21wb25lbnRzL2Fib3V0XCI7XG5cblxuUmVhY3QucmVuZGVyKFxuICAgIDxIb21lIC8+LFxuICAgIGRvY3VtZW50XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIE1hc3RlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgTWFzdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgfVxuXG4gICAgY29udGVudCAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkZvbzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9oZWFkPlxuXG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz17dGhpcy5wcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYXN0ZXIgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+e3RoaXMuY29udGVudCgpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2pzL2Rpc3QvdmVuZG9yLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvanMvZGlzdC9kZW1vLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgPC9odG1sPlxuICAgICAgICApXG4gICAgfVxufVxuIl19
