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

var _wildjs = require('wildjs');

var _wildjs2 = _interopRequireDefault(_wildjs);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var Data = (function (_React$Component) {
    function Data(props) {
        _classCallCheck(this, Data);

        _get(Object.getPrototypeOf(Data.prototype), 'constructor', this).call(this, props);
        this.state = props;
        this.click = this.click.bind(this);
    }

    _inherits(Data, _React$Component);

    _createClass(Data, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            if (this.state.data.data_list === '' || this.state.data.data_list === undefined) {
                _wildjs2['default'].rest.get('/api/list/').then(function (response) {
                    _this.setState({ data: { data_list: response } });
                });
            }
        }
    }, {
        key: 'click',
        value: function click(page, e) {
            var _this2 = this;

            e.preventDefault();
            var url = this.state.data.data_list.api_url;
            if (page !== null) {
                url = this.state.data.data_list.api_url + page;
            }

            _wildjs2['default'].rest.get(url).then(function (response) {
                console.log(response);
                _this2.setState({ data: { data_list: response } });
            });

            window.history.pushState(null, null, e.target.pathname + e.target.search);
            //this.state.handleClick(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var dataList = this.state.data.data_list || { results: [] };

            var next = '';
            var prev = '';

            if (dataList.next) {
                next = _react2['default'].createElement(
                    'a',
                    { href: dataList.next, onClick: this.click.bind(this, dataList.next) },
                    'Next'
                );
            }

            if (dataList.previous) {
                prev = _react2['default'].createElement(
                    'a',
                    { href: dataList.previous, onClick: this.click.bind(this, dataList.previous) },
                    'Prev'
                );
            }

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h2',
                    null,
                    'List of data'
                ),
                _react2['default'].createElement(_nav2['default'], { handleClick: this.props.handleClick }),
                prev,
                _react2['default'].createElement(
                    'span',
                    null,
                    ' | '
                ),
                next,
                _react2['default'].createElement(
                    'ul',
                    null,
                    dataList.results.map(function (data, i) {
                        return _react2['default'].createElement(
                            'li',
                            { key: 'p-' + i },
                            data.name
                        );
                    })
                )
            );
        }
    }]);

    return Data;
})(_react2['default'].Component);

exports['default'] = Data;
module.exports = exports['default'];