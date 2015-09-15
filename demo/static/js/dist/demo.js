(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcComponentsHome = require("./src/components/home");

var _srcComponentsHome2 = _interopRequireDefault(_srcComponentsHome);

var _srcComponentsAbout = require("./src/components/about");

var _srcComponentsAbout2 = _interopRequireDefault(_srcComponentsAbout);

function getComponent() {
    switch (window.location.pathname) {
        case "/":
            return _srcComponentsHome2["default"];
        case "/about/":
            return _srcComponentsAbout2["default"];
    }
}

var Component = _react2["default"].createFactory(getComponent());

_react2["default"].render(Component(window.props), document);

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

var isNode = typeof window === 'undefined';

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
                "div",
                null,
                _react2["default"].createElement(
                    "h2",
                    null,
                    "About"
                ),
                this.props.data.map(function (d, i) {
                    return _react2["default"].createElement(
                        "p",
                        { key: "p-" + i },
                        d
                    );
                })
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

var _about = require("./about");

var _about2 = _interopRequireDefault(_about);

var isNode = typeof window === 'undefined';

var Home = (function (_Master) {
    _inherits(Home, _Master);

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
            _react2["default"].render(_react2["default"].createElement(_about2["default"], null), document);
        }
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
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "button",
                        { onClick: this.click },
                        "Click me"
                    )
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
                        "a",
                        { href: "/about/" },
                        "About"
                    )
                )
            );
        }
    }]);

    return Home;
})(_master2["default"]);

exports["default"] = Home;
module.exports = exports["default"];

},{"./about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./master":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js":[function(require,module,exports){
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

var isNode = typeof window === 'undefined';

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
        key: "stringify",
        value: function stringify() {
            return { __html: "window.props=" + JSON.stringify(this.props) };
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
                    _react2["default"].createElement("script", { type: "text/javascript", dangerouslySetInnerHTML: this.stringify() }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9tYXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLFNBQVMsWUFBWSxHQUFHO0FBQ3BCLFlBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO0FBQzVCLGFBQUssR0FBRztBQUNKLGtEQUFZO0FBQUEsQUFDaEIsYUFBSyxTQUFTO0FBQ1YsbURBQWE7QUFBQSxLQUNwQjtDQUNKOztBQUdELElBQU0sU0FBUyxHQUFHLG1CQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCxtQkFBTSxNQUFNLENBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxDQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDcEJnQixPQUFPOzs7O3NCQUNOLFVBQVU7Ozs7QUFFN0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDOztJQUd4QixLQUFLO2NBQUwsS0FBSzs7QUFDWCxhQURNLEtBQUssQ0FDVixLQUFLLEVBQUU7OEJBREYsS0FBSzs7QUFFbEIsbUNBRmEsS0FBSyw2Q0FFWixLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixLQUFLOztlQUtmLG1CQUFHO0FBQ04sbUJBQ0k7OztnQkFDSTs7OztpQkFBYztnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQzVCLDJCQUFPOzswQkFBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsQUFBQzt3QkFBRSxDQUFDO3FCQUFLLENBQUE7aUJBQ25DLENBQUM7YUFDQSxDQUNUO1NBQ0o7OztXQWRnQixLQUFLOzs7cUJBQUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDTlIsT0FBTzs7OztzQkFDTixVQUFVOzs7O3FCQUNYLFNBQVM7Ozs7QUFFM0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDOztJQUd4QixJQUFJO2NBQUosSUFBSTs7QUFDVCxhQURLLElBQUksQ0FDUixLQUFLLEVBQUU7OEJBREgsSUFBSTs7QUFFakIsbUNBRmEsSUFBSSw2Q0FFWCxLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixJQUFJOztlQUtILDZCQUFHLEVBRXBCOzs7ZUFFSSxlQUFDLENBQUMsRUFBRTtBQUNMLCtCQUFNLE1BQU0sQ0FDUiwwREFBUyxFQUNULFFBQVEsQ0FDWCxDQUFDO1NBQ0w7OztlQUVPLG1CQUFHO0FBQ1AsbUJBQ0k7OztnQkFDSTs7OztpQkFBYTtnQkFDYjs7OztpQkFBNEI7Z0JBQzVCOzs7b0JBQUc7OzBCQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxBQUFDOztxQkFBa0I7aUJBQUk7Z0JBQ3JEOzs7b0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2lCQUFLO2dCQUN4Qjs7O29CQUFHOzswQkFBRyxJQUFJLEVBQUMsU0FBUzs7cUJBQVU7aUJBQUk7YUFDaEMsQ0FDVDtTQUNKOzs7V0ExQmdCLElBQUk7OztxQkFBSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNQUCxPQUFPOzs7O0FBRXpCLElBQU0sTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQzs7SUFHeEIsTUFBTTtjQUFOLE1BQU07O0FBQ1osYUFETSxNQUFNLENBQ1gsS0FBSyxFQUFFOzhCQURGLE1BQU07O0FBRW5CLG1DQUZhLE1BQU0sNkNBRWIsS0FBSyxFQUFFO0tBQ2hCOztpQkFIZ0IsTUFBTTs7ZUFLaEIsbUJBQUc7QUFDTixtQkFBTyxFQUFFLENBQUM7U0FDYjs7O2VBRVEscUJBQUc7QUFDUixtQkFBTyxFQUFDLE1BQU0sRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztTQUNqRTs7O2VBRUssa0JBQUc7QUFDTCxtQkFDSTs7O2dCQUNJOzs7b0JBQ0ksMkNBQU0sT0FBTyxFQUFDLE9BQU8sR0FBRztvQkFDeEI7Ozs7cUJBQWtCO2lCQUNmO2dCQUVQOzs7b0JBQ0k7Ozt3QkFDSTs7Ozt5QkFBb0I7d0JBQ3BCOzs4QkFBSyxFQUFFLEVBQUMsS0FBSzs0QkFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO3lCQUFPO3FCQUNsQztvQkFFTiw2Q0FBUSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxBQUFDLEdBQUc7b0JBQzVFLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMsMkJBQTJCLEdBQVU7b0JBQ3hFLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMseUJBQXlCLEdBQVU7aUJBQ25FO2FBQ0osQ0FDVjtTQUNKOzs7V0FqQ2dCLE1BQU07R0FBUyxtQkFBTSxTQUFTOztxQkFBOUIsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9zcmMvY29tcG9uZW50cy9ob21lXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvYWJvdXRcIjtcblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgIHJldHVybiBIb21lO1xuICAgICAgICBjYXNlIFwiL2Fib3V0L1wiOlxuICAgICAgICAgICAgcmV0dXJuIEFib3V0O1xuICAgIH1cbn1cblxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KGdldENvbXBvbmVudCgpKTtcblxuUmVhY3QucmVuZGVyKFxuICAgIENvbXBvbmVudCh3aW5kb3cucHJvcHMpLFxuICAgIGRvY3VtZW50XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuY29uc3QgaXNOb2RlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBNYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtcInAtXCIgKyBpfT57ZH08L3A+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXN0ZXIgZnJvbSBcIi4vbWFzdGVyXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vYWJvdXRcIlxuXG5jb25zdCBpc05vZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgTWFzdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgUmVhY3QucmVuZGVyKFxuICAgICAgICAgICAgPEFib3V0IC8+LFxuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb250ZW50ICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWUgdmlldzwvcD5cbiAgICAgICAgICAgICAgICA8cD48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2t9PkNsaWNrIG1lPC9idXR0b24+PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYWJvdXQvXCI+QWJvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHN0cmluZ2lmeSgpIHtcbiAgICAgICAgcmV0dXJuIHtfX2h0bWw6IFwid2luZG93LnByb3BzPVwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcyl9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxodG1sPlxuICAgICAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Rm9vPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L2hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYXN0ZXIgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+e3RoaXMuY29udGVudCgpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5zdHJpbmdpZnkoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9qcy9kaXN0L3ZlbmRvci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2pzL2Rpc3QvZGVtby5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvaHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==
