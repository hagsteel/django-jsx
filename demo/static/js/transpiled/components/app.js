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

var _reactRouter = require('react-router');

//import routers from "./routers"

var App = (function (_React$Component) {
    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        //this.updateUrl = this.updateUrl.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        //this.state = {pathname: props.pathname || '/'};
    }

    _inherits(App, _React$Component);

    _createClass(App, [{
        key: 'render',

        //handleClick (e) {
        //    e.preventDefault();
        //    window.history.pushState(null, null, e.target.pathname);
        //    this.updateUrl(e.target.pathname);
        //}
        //
        //updateUrl (pathname) {
        //    this.setState({pathname: pathname});
        //}
        //
        //getPathName () {
        //    return this.state.pathname;
        //}

        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h1',
                    null,
                    'App'
                ),
                _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/form/' },
                            'Form'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/about/' },
                            'About'
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];
/* change the <a>s to <Links>s */ /*
                                  next we replace `<Child>` with `this.props.children`
                                  the router will figure out the children for us
                                  */
//React.createElement(routers.getComponent(this.getPathName()), {data: this.props, handleClick: this.handleClick})