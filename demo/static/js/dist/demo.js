(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcComponentsHome = require("./src/components/home");

var _srcComponentsHome2 = _interopRequireDefault(_srcComponentsHome);

var _srcComponentsAbout = require("./src/components/about");

var _srcComponentsAbout2 = _interopRequireDefault(_srcComponentsAbout);

_react2["default"].render(_react2["default"].createElement(_srcComponentsHome2["default"], null), document //.getElementById("app")
);
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
        console.log(props);
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

            //if (isNode === false) {
            //    return (
            //        <div>
            //            <h1>Home</h1>
            //            <p>This is the home view</p>
            //            <p>{this.props.date}</p>
            //            <p><button onClick={this.click}>Click me</button></p>
            //        </div>
            //    )
            //}

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9tYXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLG1CQUFNLE1BQU0sQ0FDUixzRUFBUSxFQUNSLFFBQVE7Q0FDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNSZ0IsT0FBTzs7OztzQkFDTixVQUFVOzs7O0lBR1IsS0FBSztjQUFMLEtBQUs7O0FBQ1gsYUFETSxLQUFLLENBQ1YsS0FBSyxFQUFFOzhCQURGLEtBQUs7O0FBRWxCLG1DQUZhLEtBQUssNkNBRVosS0FBSyxFQUFFO0tBQ2hCOztpQkFIZ0IsS0FBSzs7ZUFLZixtQkFBRztBQUNOLG1CQUNJOzs7O2FBQWMsQ0FDakI7U0FDSjs7O1dBVGdCLEtBQUs7OztxQkFBTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNKUixPQUFPOzs7O3NCQUNOLFVBQVU7Ozs7SUFHUixJQUFJO2NBQUosSUFBSTs7QUFDVCxhQURLLElBQUksQ0FDUixLQUFLLEVBQUU7OEJBREgsSUFBSTs7QUFFakIsbUNBRmEsSUFBSSw2Q0FFWCxLQUFLLEVBQUU7QUFDYixlQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCOztpQkFKZ0IsSUFBSTs7ZUFNSCw2QkFBRyxFQUNwQjs7O2VBRUksZUFBQyxDQUFDLEVBQUU7QUFDTCxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCOzs7ZUFFTSxrQkFBRztBQUNOLGdCQUFNLE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhN0MsbUJBQ0k7OztnQkFDSTs7OztpQkFBYTtnQkFDYjs7OztpQkFBNEI7Z0JBQzVCOzs7b0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2lCQUFLO2dCQUN4Qjs7O29CQUFHOzswQkFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQUFBQzs7cUJBQWtCO2lCQUFJO2FBQ2hELENBQ1o7U0FDSjs7O1dBbkNnQixJQUFJO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTVCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0pQLE9BQU87Ozs7SUFHSixNQUFNO2NBQU4sTUFBTTs7QUFDWixhQURNLE1BQU0sQ0FDWCxLQUFLLEVBQUU7OEJBREYsTUFBTTs7QUFFbkIsbUNBRmEsTUFBTSw2Q0FFYixLQUFLLEVBQUU7S0FDaEI7O2lCQUhnQixNQUFNOztlQUtoQixtQkFBRztBQUNOLG1CQUFPLEVBQUUsQ0FBQztTQUNiOzs7ZUFFSyxrQkFBRztBQUNMLG1CQUNJOzs7Z0JBQ0k7OztvQkFDSSwyQ0FBTSxPQUFPLEVBQUMsT0FBTyxHQUFHO29CQUN4Qjs7OztxQkFBa0I7aUJBQ2Y7Z0JBRVAsMkNBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxBQUFDLEdBQUc7Z0JBQ25DOzs7b0JBQ0k7Ozt3QkFDSTs7Ozt5QkFBb0I7d0JBQ3BCOzs4QkFBSyxFQUFFLEVBQUMsS0FBSzs0QkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7eUJBQU87cUJBQ3ZDO29CQUVOLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMsMkJBQTJCLEdBQVU7b0JBQ3hFLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMseUJBQXlCLEdBQVU7aUJBQ25FO2FBQ0osQ0FDVjtTQUNKOzs7V0E3QmdCLE1BQU07R0FBUyxtQkFBTSxTQUFTOztxQkFBOUIsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9zcmMvY29tcG9uZW50cy9ob21lXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvYWJvdXRcIjtcblxuXG5SZWFjdC5yZW5kZXIoXG4gICAgPEhvbWUgLz4sXG4gICAgZG9jdW1lbnQvLy5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTtcbiAgICAvL2RvY3VtZW50XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFzdGVyIGZyb20gXCIuL21hc3RlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgTWFzdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFzdGVyIGZyb20gXCIuL21hc3RlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG4gICAgICAgIGFsZXJ0KFwiY2xpY2tlZFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBpc05vZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICAgICAgICAvL2lmIChpc05vZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgIHJldHVybiAoXG4gICAgICAgIC8vICAgICAgICA8ZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgLy8gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0ZX08L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgPHA+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrfT5DbGljayBtZTwvYnV0dG9uPjwvcD5cbiAgICAgICAgLy8gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICApXG4gICAgICAgIC8vfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFzdGVyPlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrfT5DbGljayBtZTwvYnV0dG9uPjwvcD5cbiAgICAgICAgICAgIDwvTWFzdGVyPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxodG1sPlxuICAgICAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Rm9vPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L2hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPXt0aGlzLnByb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1hc3RlciBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9qcy9kaXN0L3ZlbmRvci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2pzL2Rpc3QvZGVtby5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvaHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==
