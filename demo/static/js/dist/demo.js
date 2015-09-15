(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcApp = require("./src/app");

var _srcApp2 = _interopRequireDefault(_srcApp);

var Component = _react2["default"].createFactory(_srcApp2["default"]);

_react2["default"].render(Component(window.props), document.getElementById("app"));

},{"./src/app":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routers = require("./routers");

var _routers2 = _interopRequireDefault(_routers);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        this.updateUrl = this.updateUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(props.pathname);
        this.state = { pathname: props.pathname || '/' };
    }

    _createClass(App, [{
        key: 'handleClick',
        value: function handleClick(e) {
            e.preventDefault();
            window.history.pushState(null, null, e.target.pathname);
            this.updateUrl(e.target.pathname);
        }
    }, {
        key: 'updateUrl',
        value: function updateUrl(pathname) {
            this.setState({ pathname: pathname });
        }
    }, {
        key: 'getPathName',
        value: function getPathName() {
            return this.state.pathname;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_routers2['default'].getComponent(this.getPathName()), { data: this.props, handleClick: this.handleClick });
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./routers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/routers.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js":[function(require,module,exports){
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

var About = (function (_React$Component) {
    _inherits(About, _React$Component);

    function About(props) {
        _classCallCheck(this, About);

        _get(Object.getPrototypeOf(About.prototype), "constructor", this).call(this, props);
        this.state = props;
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    "h2",
                    null,
                    "About"
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/", onClick: this.state.handleClick },
                        "Home"
                    )
                )
            );
        }
    }]);

    return About;
})(_react2["default"].Component);

exports["default"] = About;
module.exports = exports["default"];

},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js":[function(require,module,exports){
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

//import Master from "./master";

var _about = require("./about");

var _about2 = _interopRequireDefault(_about);

var isNode = typeof window === 'undefined';

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
        this.state = props;
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
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
                    this.state.data.date
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/about/", onClick: this.state.handleClick },
                        "About"
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"./about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/routers.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _componentsAbout = require("./components/about");

var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

var _componentsHome = require("./components/home");

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var router = {
    getComponent: function getComponent(pathname) {
        switch (pathname) {
            case "/":
                return _componentsHome2["default"];
            case "/about/":
                return _componentsAbout2["default"];
            default:
                return _componentsHome2["default"];
        }
    }
};

exports["default"] = router;
module.exports = exports["default"];

},{"./components/about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9yb3V0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztxQkNBa0IsT0FBTzs7OztzQkFDVCxXQUFXOzs7O0FBRzNCLElBQU0sU0FBUyxHQUFHLG1CQUFNLGFBQWEscUJBQUssQ0FBQzs7QUFFM0MsbUJBQU0sTUFBTSxDQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDVGdCLE9BQU87Ozs7dUJBQ0wsV0FBVzs7OztJQUdWLEdBQUc7Y0FBSCxHQUFHOztBQUNULGFBRE0sR0FBRyxDQUNSLEtBQUssRUFBRTs4QkFERixHQUFHOztBQUVoQixtQ0FGYSxHQUFHLDZDQUVWLEtBQUssRUFBRTtBQUNiLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNB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LGdCQUFZLEVBQUEsc0JBQUMsUUFBUSxFQUFFO0FBQ25CLGdCQUFRLFFBQVE7QUFDWixpQkFBSyxHQUFHO0FBQ0osbURBQVk7QUFBQSxBQUNoQixpQkFBSyxTQUFTO0FBQ1Ysb0RBQWE7QUFBQSxBQUNqQjtBQUNJLG1EQUFXO0FBQUEsU0FDbEI7S0FDSjtDQUNKLENBQUM7O3FCQUVhLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9zcmMvYXBwXCI7XG5cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShBcHApO1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgQ29tcG9uZW50KHdpbmRvdy5wcm9wcyksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJvdXRlcnMgZnJvbSBcIi4vcm91dGVyc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVXJsID0gdGhpcy51cGRhdGVVcmwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMucGF0aG5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3BhdGhuYW1lOiBwcm9wcy5wYXRobmFtZSB8fCAnLyd9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgdGhpcy51cGRhdGVVcmwoZS50YXJnZXQucGF0aG5hbWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVVybChwYXRobmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRobmFtZTogcGF0aG5hbWV9KTtcbiAgICB9XG5cbiAgICBnZXRQYXRoTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGF0aG5hbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZXJzLmdldENvbXBvbmVudCh0aGlzLmdldFBhdGhOYW1lKCkpLCB7ZGF0YTogdGhpcy5wcm9wcywgaGFuZGxlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+SG9tZTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9hYm91dFwiXG5cbmNvbnN0IGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+SG9tZTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kYXRhLmRhdGV9PC9wPlxuXG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9hYm91dC9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5BYm91dDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0XCJcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZVwiXG5cblxuY29uc3Qgcm91dGVyID0ge1xuICAgIGdldENvbXBvbmVudChwYXRobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBIb21lO1xuICAgICAgICAgICAgY2FzZSBcIi9hYm91dC9cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gQWJvdXQ7XG4gICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19
