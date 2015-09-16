(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcApp = require("./src/app");

var _srcApp2 = _interopRequireDefault(_srcApp);

var Component = _react2["default"].createFactory(_srcApp2["default"]);

_react2["default"].render(Component(window.props), document.getElementById("app"));

},{"./src/app":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/cookies.js":[function(require,module,exports){
/*******************************************************
 * From:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 *******************************************************/

// Deal with Node, as there is no `document` in Node
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getCookieStore = function getCookieStore() {
    try {
        return window.document;
    } catch (er) {
        return { cookie: "" };
    }
};

var cookies = {
    getItem: function getItem(sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(getCookieStore().cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },

    setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        getCookieStore().cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },

    removeItem: function removeItem(sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        getCookieStore().cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },

    hasItem: function hasItem(sKey) {
        if (!sKey) {
            return false;
        }
        return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(getCookieStore().cookie);
    },

    keys: function keys() {
        var aKeys = getCookieStore().cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

exports.cookies = cookies;

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/rest.js":[function(require,module,exports){
//function getCookie (name) {
//    // From https://docs.djangoproject.com/en/1.7/ref/contrib/csrf/
//    var cookieValue = null, cookies, i, cookie;
//    if (document.cookie && document.cookie !== "") {
//        cookies = document.cookie.split(";");
//        for (i = 0; i < cookies.length; i += 1) {
//            cookie = cookies[i].trim(); // Doesn't work in all browsers
//            // Does this cookie string begin with the name we want?
//            if (cookie.substring(0, name.length + 1) === (name + "=")) {
//                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                break;
//            }
//        }
//    }
//    return cookieValue;
//}

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var extraHeaders = {};

function makeRequest(url, method, data) {
    var contentType = arguments.length <= 3 || arguments[3] === undefined ? 'application/json' : arguments[3];

    return new Promise(function (resolve, reject) {

        url += '?format=json';

        var req = new XMLHttpRequest();

        // We don't want CSRF tokens if we are using this as
        // a public API for now
        //if (method !== "GET") {
        //    req.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
        //}

        req.open(method, url, true);

        // if the content tpye is multipart/form-data let the browser handle it
        if (contentType !== 'multipart/form-data') {
            if (req.overrideMimeType !== undefined) {
                req.overrideMimeType(contentType);
            }

            req.setRequestHeader('Content-Type', contentType);
        }

        for (var key in extraHeaders) {
            req.setRequestHeader(key, extraHeaders[key]);
        }

        // When done processing data
        req.onreadystatechange = function () {
            if (req.readyState !== 4) {
                return;
            }

            if (req.status >= 200 && req.status <= 299) {
                if (req.responseText) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    resolve();
                }
            } else {
                try {
                    var jsonData = JSON.parse(req.responseText);
                    reject(jsonData);
                } catch (err) {
                    reject(req.responseText);
                }
            }
        };

        if (contentType === 'application/json') {
            req.send(JSON.stringify(data));
        } else {
            req.send(data);
        }
    });
}

var rest = {
    get: function get(url, data) {
        var contentType = arguments.length <= 2 || arguments[2] === undefined ? 'application/json' : arguments[2];

        return makeRequest(url, 'GET', data, contentType);
    },

    post: function post(url, data) {
        var contentType = arguments.length <= 2 || arguments[2] === undefined ? 'application/json' : arguments[2];

        return makeRequest(url, 'POST', data, contentType);
    },

    put: function put(url, data) {
        var contentType = arguments.length <= 2 || arguments[2] === undefined ? 'application/json' : arguments[2];

        return makeRequest(url, 'PUT', data, contentType);
    },

    patch: function patch(url, data) {
        var contentType = arguments.length <= 2 || arguments[2] === undefined ? 'application/json' : arguments[2];

        return makeRequest(url, 'PATCH', data, contentType);
    },

    'delete': function _delete(url, data) {
        var contentType = arguments.length <= 2 || arguments[2] === undefined ? 'application/json' : arguments[2];

        return makeRequest(url, 'DELETE', data, contentType);
    },

    setAdditionalHeaders: function setAdditionalHeaders(key, value) {
        extraHeaders[key] = value;
    },

    removeHeader: function removeHeader(key) {
        if (key in extraHeaders) {
            delete extraHeaders[key];
        }
    },

    getHeaders: function getHeaders() {
        return extraHeaders;
    }
};

exports.rest = rest;

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/subscriptions/publisher.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var subscribers = {};

/**********************************
 * Get subscribers for an action
 * or an empty list
 **********************************/
function getSubscribers(action) {
    return subscribers[action] || [];
}

/**********************************
 * Subscribe a function to an action.
 * It's safe to subscribe multiple times
 * as the subscriber is only added once
 **********************************/
function subscribe(action, subscriber) {
    subscribers[action] = subscribers[action] || [];
    var subs = getSubscribers(action),
        i = undefined;

    for (i = 0; i < subs.length; i += 1) {
        if (subs[i] === subscriber) {
            return;
        }
    }

    subscribers[action].push(subscriber);
}

/**********************************
 * Unsubscribe a function from an action.
 **********************************/
function unsubscribe(action, subscriber) {
    var subs = _subscribers[action],
        i;
    if (subs === undefined) {
        return;
    }

    for (i = 0; i < subs.length; i += 1) {
        if (subs[i] === subscriber) {
            _subscribers[action].splice(i, 1);
        }
    }

    if (_subscribers[action].length === 0) {
        delete _subscribers[action];
    }
}

/**********************************
 * Publish an action to all subscribers
 **********************************/
function publish(action) {
    var args = [],
        i = undefined;

    for (i = 1; i < arguments.length; i += 1) {
        if (arguments[i]) {
            args.push(arguments[i]);
        } else {
            break;
        }
    }

    var subs = getSubscribers(action);
    for (i = 0; i < subs.length; i += 1) {
        subs[i].apply(this, args);
    }
}

exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
exports.publish = publish;

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/urls.js":[function(require,module,exports){
/*****************************
 * Format a url based on args
 *****************************/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUrl = formatUrl;

function formatUrl(url, args) {
    var result = url;

    if (args === undefined) {
        return result;
    }

    for (var k in args) {
        result = result.replace("<" + k + ">", args[k]);
    }

    return result;
}

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/wildjs.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rest = require("./rest");

var _urls = require("./urls");

var _subscriptionsPublisher = require("./subscriptions/publisher");

var _cookies = require("./cookies");

exports["default"] = {
    rest: _rest.rest,
    formatUrl: _urls.formatUrl,
    subscribe: _subscriptionsPublisher.subscribe,
    unsubscribe: _subscriptionsPublisher.unsubscribe,
    publish: _subscriptionsPublisher.publish,
    cookies: _cookies.cookies
};
module.exports = exports["default"];

},{"./cookies":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/cookies.js","./rest":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/rest.js","./subscriptions/publisher":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/subscriptions/publisher.js","./urls":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/urls.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js":[function(require,module,exports){
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
        this.state = { pathname: props.pathname || '/' };
    }

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
                window.history.pushState(null, null, e.target.pathname);
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
            var data = this.state.data.data || [];
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
                ),
                data.map(function (d, i) {
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
})(_react2["default"].Component);

exports["default"] = About;
module.exports = exports["default"];

},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/data.js":[function(require,module,exports){
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

var _wildjs = require('wildjs');

var _wildjs2 = _interopRequireDefault(_wildjs);

var Data = (function (_React$Component) {
    _inherits(Data, _React$Component);

    function Data(props) {
        _classCallCheck(this, Data);

        _get(Object.getPrototypeOf(Data.prototype), 'constructor', this).call(this, props);
        this.state = props;
    }

    _createClass(Data, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            if (this.state.data.data_list === "" || this.state.data.data_list === undefined) {
                _wildjs2['default'].rest.get('/api/list/').then(function (response) {
                    _this.setState({ data: { data_list: response } });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var dataList = this.state.data.data_list || [];
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h2',
                    null,
                    'List of data'
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                        'a',
                        { href: '/', onClick: this.state.handleClick },
                        'Home'
                    )
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                        'a',
                        { href: '/about/', onClick: this.state.handleClick },
                        'About'
                    )
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                        'a',
                        { href: '/form/', onClick: this.state.handleClick },
                        'Form'
                    )
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    _react2['default'].createElement(
                        'a',
                        { href: '/data/', onClick: this.state.handleClick },
                        'Data'
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    null,
                    dataList.results.map(function (data, i) {
                        return _react2['default'].createElement(
                            'li',
                            { key: "p-" + i },
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

},{"react":"react","wildjs":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/wildjs.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wildjs = require("wildjs");

var _wildjs2 = _interopRequireDefault(_wildjs);

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        _get(Object.getPrototypeOf(Form.prototype), "constructor", this).call(this, props);
        this.state = props;
        this.submitForm = this.submitForm.bind(this);
    }

    _createClass(Form, [{
        key: "submitForm",
        value: function submitForm(e) {
            var _this = this;

            e.preventDefault();
            var val = e.target.getElementsByTagName("input")[0].value;
            _wildjs2["default"].rest.post('/api/form/', { value: val }).then(function (response) {
                _this.setState({ message: response.value });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "form",
                { method: "post", onSubmit: this.submitForm },
                _react2["default"].createElement(
                    "h4",
                    null,
                    this.state.message
                ),
                _react2["default"].createElement("input", { type: "text", name: "foo", id: "foo" }),
                _react2["default"].createElement(
                    "button",
                    { type: "submit" },
                    "Save"
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/about/", onClick: this.state.handleClick },
                        "About"
                    )
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/form/", onClick: this.state.handleClick },
                        "Form"
                    )
                )
            );
        }
    }]);

    return Form;
})(_react2["default"].Component);

exports["default"] = Form;
module.exports = exports["default"];

},{"react":"react","wildjs":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/wildjs.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js":[function(require,module,exports){
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
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/form/", onClick: this.state.handleClick },
                        "Form"
                    )
                ),
                _react2["default"].createElement(
                    "p",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/data/", onClick: this.state.handleClick },
                        "Data"
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/routers.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsAbout = require('./components/about');

var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

var _componentsHome = require('./components/home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsForm = require('./components/form');

var _componentsForm2 = _interopRequireDefault(_componentsForm);

var _componentsData = require('./components/data');

var _componentsData2 = _interopRequireDefault(_componentsData);

var router = {
    getComponent: function getComponent(pathname) {
        switch (pathname) {
            case '/':
                return _componentsHome2['default'];
            case '/about/':
                return _componentsAbout2['default'];
            case '/form/':
                return _componentsForm2['default'];
            case '/data/':
                return _componentsData2['default'];
            default:
                return _componentsHome2['default'];
        }
    }
};

exports['default'] = router;
module.exports = exports['default'];

},{"./components/about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./components/data":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/data.js","./components/form":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js","./components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvcm91dGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7c0JBQ1QsV0FBVzs7OztBQUczQixJQUFNLFNBQVMsR0FBRyxtQkFBTSxhQUFhLHFCQUFLLENBQUM7O0FBRTNDLG1CQUFNLE1BQU0sQ0FDUixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUN2QixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUFDOzs7Ozs7Ozs7QUNIRixZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQ3pDLFNBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxjQUFjLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDM0MsUUFBSTtBQUNBLGVBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUMxQixDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ1QsZUFBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN6QjtDQUNKLENBQUM7O0FBRUYsSUFBSSxPQUFPLEdBQUc7QUFDVixXQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQzVCLFlBQUksQ0FBQyxJQUFJLEVBQUU7QUFDUCxtQkFBTyxJQUFJLENBQUM7U0FDZjtBQUNELGVBQU8sa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FB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O0FBQUEsQUFDaEIsaUJBQUssUUFBUTtBQUNULG1EQUFZO0FBQUEsQUFDaEI7QUFDSSxtREFBVztBQUFBLFNBQ2xCO0tBQ0o7Q0FDSixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vc3JjL2FwcFwiO1xuXG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQXBwKTtcblxuUmVhY3QucmVuZGVyKFxuICAgIENvbXBvbmVudCh3aW5kb3cucHJvcHMpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZyb206XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvY29va2llXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRGVhbCB3aXRoIE5vZGUsIGFzIHRoZXJlIGlzIG5vIGBkb2N1bWVudGAgaW4gTm9kZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXRDb29raWVTdG9yZSA9IGZ1bmN0aW9uIGdldENvb2tpZVN0b3JlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgY29va2llOiBcIlwiIH07XG4gICAgfVxufTtcblxudmFyIGNvb2tpZXMgPSB7XG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShzS2V5KSB7XG4gICAgICAgIGlmICghc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChnZXRDb29raWVTdG9yZSgpLmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzooPzpefC4qOylcXFxccypcIiArIGVuY29kZVVSSUNvbXBvbmVudChzS2V5KS5yZXBsYWNlKC9bXFwtXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiXFxcXHMqXFxcXD1cXFxccyooW147XSopLiokKXxeLiokXCIpLCBcIiQxXCIpKSB8fCBudWxsO1xuICAgIH0sXG5cbiAgICBzZXRJdGVtOiBmdW5jdGlvbiBzZXRJdGVtKHNLZXksIHNWYWx1ZSwgdkVuZCwgc1BhdGgsIHNEb21haW4sIGJTZWN1cmUpIHtcbiAgICAgICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXhcXC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNFeHBpcmVzID0gXCJcIjtcbiAgICAgICAgaWYgKHZFbmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodkVuZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IHZFbmQgPT09IEluZmluaXR5ID8gXCI7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRcIiA6IFwiOyBtYXgtYWdlPVwiICsgdkVuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGU6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldENvb2tpZVN0b3JlKCkuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc1ZhbHVlKSArIHNFeHBpcmVzICsgKHNEb21haW4gPyBcIjsgZG9tYWluPVwiICsgc0RvbWFpbiA6IFwiXCIpICsgKHNQYXRoID8gXCI7IHBhdGg9XCIgKyBzUGF0aCA6IFwiXCIpICsgKGJTZWN1cmUgPyBcIjsgc2VjdXJlXCIgOiBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0l0ZW0oc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDb29raWVTdG9yZSgpLmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiICsgKHNEb21haW4gPyBcIjsgZG9tYWluPVwiICsgc0RvbWFpbiA6IFwiXCIpICsgKHNQYXRoID8gXCI7IHBhdGg9XCIgKyBzUGF0aCA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaGFzSXRlbTogZnVuY3Rpb24gaGFzSXRlbShzS2V5KSB7XG4gICAgICAgIGlmICghc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86Xnw7XFxcXHMqKVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVwiKS50ZXN0KGdldENvb2tpZVN0b3JlKCkuY29va2llKTtcbiAgICB9LFxuXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgdmFyIGFLZXlzID0gZ2V0Q29va2llU3RvcmUoKS5jb29raWUucmVwbGFjZSgvKCg/Ol58XFxzKjspW15cXD1dKykoPz07fCQpfF5cXHMqfFxccyooPzpcXD1bXjtdKik/KD86XFwxfCQpL2csIFwiXCIpLnNwbGl0KC9cXHMqKD86XFw9W147XSopPztcXHMqLyk7XG4gICAgICAgIGZvciAodmFyIG5MZW4gPSBhS2V5cy5sZW5ndGgsIG5JZHggPSAwOyBuSWR4IDwgbkxlbjsgbklkeCsrKSB7XG4gICAgICAgICAgICBhS2V5c1tuSWR4XSA9IGRlY29kZVVSSUNvbXBvbmVudChhS2V5c1tuSWR4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFLZXlzO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuY29va2llcyA9IGNvb2tpZXM7IiwiLy9mdW5jdGlvbiBnZXRDb29raWUgKG5hbWUpIHtcbi8vICAgIC8vIEZyb20gaHR0cHM6Ly9kb2NzLmRqYW5nb3Byb2plY3QuY29tL2VuLzEuNy9yZWYvY29udHJpYi9jc3JmL1xuLy8gICAgdmFyIGNvb2tpZVZhbHVlID0gbnVsbCwgY29va2llcywgaSwgY29va2llO1xuLy8gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09IFwiXCIpIHtcbi8vICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbi8vICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkgKz0gMSkge1xuLy8gICAgICAgICAgICBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTsgLy8gRG9lc24ndCB3b3JrIGluIGFsbCBicm93c2Vyc1xuLy8gICAgICAgICAgICAvLyBEb2VzIHRoaXMgY29va2llIHN0cmluZyBiZWdpbiB3aXRoIHRoZSBuYW1lIHdlIHdhbnQ/XG4vLyAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgXCI9XCIpKSB7XG4vLyAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9XG4vLyAgICB9XG4vLyAgICByZXR1cm4gY29va2llVmFsdWU7XG4vL31cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGV4dHJhSGVhZGVycyA9IHt9O1xuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdCh1cmwsIG1ldGhvZCwgZGF0YSkge1xuICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/ICdhcHBsaWNhdGlvbi9qc29uJyA6IGFyZ3VtZW50c1szXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgdXJsICs9ICc/Zm9ybWF0PWpzb24nO1xuXG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAvLyBXZSBkb24ndCB3YW50IENTUkYgdG9rZW5zIGlmIHdlIGFyZSB1c2luZyB0aGlzIGFzXG4gICAgICAgIC8vIGEgcHVibGljIEFQSSBmb3Igbm93XG4gICAgICAgIC8vaWYgKG1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgICAgICAvLyAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIlgtQ1NSRlRva2VuXCIsIGdldENvb2tpZShcImNzcmZ0b2tlblwiKSk7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIHJlcS5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICAgICAgICAvLyBpZiB0aGUgY29udGVudCB0cHllIGlzIG11bHRpcGFydC9mb3JtLWRhdGEgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdFxuICAgICAgICBpZiAoY29udGVudFR5cGUgIT09ICdtdWx0aXBhcnQvZm9ybS1kYXRhJykge1xuICAgICAgICAgICAgaWYgKHJlcS5vdmVycmlkZU1pbWVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXEub3ZlcnJpZGVNaW1lVHlwZShjb250ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihrZXksIGV4dHJhSGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gZG9uZSBwcm9jZXNzaW5nIGRhdGFcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPD0gMjk5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbkRhdGEpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nKSB7XG4gICAgICAgICAgICByZXEuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXEuc2VuZChkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgcmVzdCA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsICdHRVQnLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBvc3Q6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdhcHBsaWNhdGlvbi9qc29uJyA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCAnUE9TVCcsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdhcHBsaWNhdGlvbi9qc29uJyA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCAnUFVUJywgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwYXRjaDogZnVuY3Rpb24gcGF0Y2godXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdhcHBsaWNhdGlvbi9qc29uJyA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCAnUEFUQ0gnLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgICdkZWxldGUnOiBmdW5jdGlvbiBfZGVsZXRlKHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAnYXBwbGljYXRpb24vanNvbicgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgJ0RFTEVURScsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgc2V0QWRkaXRpb25hbEhlYWRlcnM6IGZ1bmN0aW9uIHNldEFkZGl0aW9uYWxIZWFkZXJzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZXh0cmFIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSGVhZGVyOiBmdW5jdGlvbiByZW1vdmVIZWFkZXIoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgZXh0cmFIZWFkZXJzW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0SGVhZGVyczogZnVuY3Rpb24gZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIGV4dHJhSGVhZGVycztcbiAgICB9XG59O1xuXG5leHBvcnRzLnJlc3QgPSByZXN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3Vic2NyaWJlcnMgPSB7fTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdldCBzdWJzY3JpYmVycyBmb3IgYW4gYWN0aW9uXG4gKiBvciBhbiBlbXB0eSBsaXN0XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGdldFN1YnNjcmliZXJzKGFjdGlvbikge1xuICAgIHJldHVybiBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3Vic2NyaWJlIGEgZnVuY3Rpb24gdG8gYW4gYWN0aW9uLlxuICogSXQncyBzYWZlIHRvIHN1YnNjcmliZSBtdWx0aXBsZSB0aW1lc1xuICogYXMgdGhlIHN1YnNjcmliZXIgaXMgb25seSBhZGRlZCBvbmNlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHN1YnNjcmliZShhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dID0gc3Vic2NyaWJlcnNbYWN0aW9uXSB8fCBbXTtcbiAgICB2YXIgc3VicyA9IGdldFN1YnNjcmliZXJzKGFjdGlvbiksXG4gICAgICAgIGkgPSB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnNbYWN0aW9uXS5wdXNoKHN1YnNjcmliZXIpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVW5zdWJzY3JpYmUgYSBmdW5jdGlvbiBmcm9tIGFuIGFjdGlvbi5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gdW5zdWJzY3JpYmUoYWN0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIHN1YnMgPSBfc3Vic2NyaWJlcnNbYWN0aW9uXSxcbiAgICAgICAgaTtcbiAgICBpZiAoc3VicyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgX3N1YnNjcmliZXJzW2FjdGlvbl0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9zdWJzY3JpYmVyc1thY3Rpb25dLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgX3N1YnNjcmliZXJzW2FjdGlvbl07XG4gICAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVibGlzaCBhbiBhY3Rpb24gdG8gYWxsIHN1YnNjcmliZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHB1Ymxpc2goYWN0aW9uKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdWJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG5leHBvcnRzLnVuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG5leHBvcnRzLnB1Ymxpc2ggPSBwdWJsaXNoOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRm9ybWF0IGEgdXJsIGJhc2VkIG9uIGFyZ3NcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdFVybCA9IGZvcm1hdFVybDtcblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybCwgYXJncykge1xuICAgIHZhciByZXN1bHQgPSB1cmw7XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgayBpbiBhcmdzKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFwiPFwiICsgayArIFwiPlwiLCBhcmdzW2tdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVzdCA9IHJlcXVpcmUoXCIuL3Jlc3RcIik7XG5cbnZhciBfdXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbnZhciBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlciA9IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyXCIpO1xuXG52YXIgX2Nvb2tpZXMgPSByZXF1aXJlKFwiLi9jb29raWVzXCIpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgICByZXN0OiBfcmVzdC5yZXN0LFxuICAgIGZvcm1hdFVybDogX3VybHMuZm9ybWF0VXJsLFxuICAgIHN1YnNjcmliZTogX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIuc3Vic2NyaWJlLFxuICAgIHVuc3Vic2NyaWJlOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci51bnN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci5wdWJsaXNoLFxuICAgIGNvb2tpZXM6IF9jb29raWVzLmNvb2tpZXNcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcm91dGVycyBmcm9tIFwiLi9yb3V0ZXJzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lIHx8ICcvJ307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVybCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrIChlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVybCAocGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aG5hbWU6IHBhdGhuYW1lfSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRobmFtZTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZXJzLmdldENvbXBvbmVudCh0aGlzLmdldFBhdGhOYW1lKCkpLCB7ZGF0YTogdGhpcy5wcm9wcywgaGFuZGxlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGEgfHwgW107XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Ib21lPC9hPjwvcD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17XCJwLVwiICsgaX0+e2R9PC9wPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpbGRqcyBmcm9tICd3aWxkanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCA9PT0gXCJcIiB8fCB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbGRqcy5yZXN0LmdldCgnL2FwaS9saXN0LycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0IHx8IFtdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBkYXRhPC9oMj5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkhvbWU8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYWJvdXQvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+QWJvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZm9ybS9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Gb3JtPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL2RhdGEvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+RGF0YTwvYT48L3A+XG5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhTGlzdC5yZXN1bHRzLm1hcCggKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtcInAtXCIgKyBpfT57ZGF0YS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2lsZGpzIGZyb20gXCJ3aWxkanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgICAgIHdpbGRqcy5yZXN0LnBvc3QoJy9hcGkvZm9ybS8nLCB7dmFsdWU6IHZhbH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiByZXNwb25zZS52YWx1ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9vXCIgaWQ9XCJmb29cIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9hYm91dC9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5BYm91dDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9mb3JtL1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkZvcm08L2E+PC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWUgdmlldzwvcD5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kYXRhLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYWJvdXQvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+QWJvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZm9ybS9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Gb3JtPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL2RhdGEvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+RGF0YTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEnXG5cblxuY29uc3Qgcm91dGVyID0ge1xuICAgIGdldENvbXBvbmVudChwYXRobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZTtcbiAgICAgICAgICAgIGNhc2UgJy9hYm91dC8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBBYm91dDtcbiAgICAgICAgICAgIGNhc2UgJy9mb3JtLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgICAgICAgICBjYXNlICcvZGF0YS8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWVcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
