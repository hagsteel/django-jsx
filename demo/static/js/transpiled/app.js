'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routers = require('./routers');

var _routers2 = _interopRequireDefault(_routers);

var App = (function (_React$Component) {
    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        this.updateUrl = this.updateUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);

        // Get the initial path name from the server side request
        this.state = { pathname: props._request.path || '/' };
    }

    _inherits(App, _React$Component);

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            window.onpopstate = function (e) {
                _this.updateUrl(window.location.pathname);
            };
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (window.history.pushState !== undefined) {
                e.preventDefault();
                window.history.pushState(null, null, e.target.pathname + e.target.search);
                this.updateUrl(e.target.pathname);
            }
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