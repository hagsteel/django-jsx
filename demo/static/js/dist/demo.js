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
        return {
            cookieStore: {},
            cookie: {
                getItem: function getItem(sKey) {
                    return this.cookieStore[sKey];
                },

                setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    this.cookieStore[sKey] = sValue;
                },

                removeItem: function removeItem(sKey, sPath, sDomain) {
                    delete this.cookieStore[sKey];
                },

                hasItem: function hasItem(sKey) {
                    return this.cookieStore[sKey] !== undefined;
                },

                keys: function keys() {
                    var keyCollection = [];
                    for (var key in this.cookieStore) {
                        if (this.cookieStore.hasOwnProperty(key)) {
                            keyCollection.push(key);
                        }
                    }
                    return keyCollection;
                }
            }
        };
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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var extraHeaders = {};

function makeRequest(url, method, data) {
    var contentType = arguments[3] === undefined ? "application/json" : arguments[3];

    return new Promise(function (resolve, reject) {

        if (url.indexOf("?format=json") == -1 && url.indexOf("&format=json") == -1) {
            url += "?format=json";
        }

        var req = new XMLHttpRequest();

        // We don't want CSRF tokens if we are using this as
        // a public API for now
        //if (method !== "GET") {
        //    req.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
        //}

        req.open(method, url, true);

        // if the content tpye is multipart/form-data let the browser handle it
        if (contentType !== "multipart/form-data") {
            if (req.overrideMimeType !== undefined) {
                req.overrideMimeType(contentType);
            }

            req.setRequestHeader("Content-Type", contentType);
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

        if (contentType === "application/json") {
            req.send(JSON.stringify(data));
        } else {
            req.send(data);
        }
    });
}

var rest = {
    get: function get(url, data) {
        var contentType = arguments[2] === undefined ? "application/json" : arguments[2];

        return makeRequest(url, "GET", data, contentType);
    },

    post: function post(url, data) {
        var contentType = arguments[2] === undefined ? "application/json" : arguments[2];

        return makeRequest(url, "POST", data, contentType);
    },

    put: function put(url, data) {
        var contentType = arguments[2] === undefined ? "application/json" : arguments[2];

        return makeRequest(url, "PUT", data, contentType);
    },

    patch: function patch(url, data) {
        var contentType = arguments[2] === undefined ? "application/json" : arguments[2];

        return makeRequest(url, "PATCH", data, contentType);
    },

    "delete": function _delete(url, data) {
        var contentType = arguments[2] === undefined ? "application/json" : arguments[2];

        return makeRequest(url, "DELETE", data, contentType);
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
        key: 'fetchNext',
        value: function fetchNext() {
            var _this2 = this;

            var url = this.state.data.data_list.next;
            _wildjs2['default'].rest.get(url).then(function (response) {
                _this2.setState({ data: { data_list: response } });
            });
        }
    }, {
        key: 'fetchPrev',
        value: function fetchPrev() {
            var _this3 = this;

            var url = this.state.data.data_list.previous;
            _wildjs2['default'].rest.get(url).then(function (response) {
                _this3.setState({ data: { data_list: response } });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var dataList = this.state.data.data_list || { results: [] };

            var next = "";
            var prev = "";

            if (dataList.next) {
                next = _react2['default'].createElement(
                    'button',
                    { onClick: this.fetchNext.bind(this) },
                    'Next'
                );
            }

            if (dataList.previous) {
                prev = _react2['default'].createElement(
                    'button',
                    { onClick: this.fetchPrev.bind(this) },
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
                next,
                prev,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvcm91dGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7c0JBQ1QsV0FBVzs7OztBQUczQixJQUFNLFNBQVMsR0FBRyxtQkFBTSxhQUFhLHFCQUFLLENBQUM7O0FBRTNDLG1CQUFNLE1BQU0sQ0FDUixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUN2QixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUFDOzs7Ozs7Ozs7QUNIRixZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQ3pDLFNBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxjQUFjLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDM0MsUUFBSTtBQUNBLGVBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUMxQixDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ1QsZUFBTztBQUNILHVCQUFXLEVBQUUsRUFBRTtBQUNmLGtCQUFNLEVBQUU7QUFDSix1QkFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUM1QiwyQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQzs7QUFFRCx1QkFBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ25F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Ozs7O2lCQUE0QjtnQkFDNUI7OztvQkFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUFLO2dCQUM3Qjs7O29CQUFHOzswQkFBRyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQUFBQzs7cUJBQVU7aUJBQUk7Z0JBQ25FOzs7b0JBQUc7OzBCQUFHLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxBQUFDOztxQkFBUztpQkFBSTtnQkFDakU7OztvQkFBRzs7MEJBQUcsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUM7O3FCQUFTO2lCQUFJO2FBQy9ELENBQ1Q7U0FDSjs7O1dBckJnQixJQUFJO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTVCLElBQUk7Ozs7Ozs7Ozs7OzsrQkNIUCxvQkFBb0I7Ozs7OEJBQ3JCLG1CQUFtQjs7Ozs4QkFDbkIsbUJBQW1COzs7OzhCQUNuQixtQkFBbUI7Ozs7QUFHcEMsSUFBTSxNQUFNLEdBQUc7QUFDWCxnQkFBWSxFQUFBLHNCQUFDLFFBQVEsRUFBRTtBQUNuQixnQkFBUSxRQUFRO0FBQ1osaUJBQUssR0FBRztBQUNKLG1EQUFZO0FBQUEsQUFDaEIsaUJBQUssU0FBUztBQUNWLG9EQUFhO0FBQUEsQUFDakIsaUJBQUssUUFBUTtBQUNULG1EQUFZO0FBQUEsQUFDaEIsaUJBQUssUUFBUTtBQUNULG1EQUFZO0FBQUEsQUFDaEI7QUFDSSxtREFBVztBQUFBLFNBQ2xCO0tBQ0o7Q0FDSixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vc3JjL2FwcFwiO1xuXG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQXBwKTtcblxuUmVhY3QucmVuZGVyKFxuICAgIENvbXBvbmVudCh3aW5kb3cucHJvcHMpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZyb206XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvY29va2llXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRGVhbCB3aXRoIE5vZGUsIGFzIHRoZXJlIGlzIG5vIGBkb2N1bWVudGAgaW4gTm9kZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXRDb29raWVTdG9yZSA9IGZ1bmN0aW9uIGdldENvb2tpZVN0b3JlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvb2tpZVN0b3JlOiB7fSxcbiAgICAgICAgICAgIGNvb2tpZToge1xuICAgICAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oc0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTdG9yZVtzS2V5XTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbShzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29va2llU3RvcmVbc0tleV0gPSBzVmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29va2llU3RvcmVbc0tleV07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGhhc0l0ZW06IGZ1bmN0aW9uIGhhc0l0ZW0oc0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTdG9yZVtzS2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5Q29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb29raWVTdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29va2llU3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUNvbGxlY3Rpb24ucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlDb2xsZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG52YXIgY29va2llcyA9IHtcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGdldENvb2tpZVN0b3JlKCkuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Oig/Ol58Lio7KVxcXFxzKlwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRcIiksIFwiJDFcIikpIHx8IG51bGw7XG4gICAgfSxcblxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0oc0tleSwgc1ZhbHVlLCB2RW5kLCBzUGF0aCwgc0RvbWFpbiwgYlNlY3VyZSkge1xuICAgICAgICBpZiAoIXNLZXkgfHwgL14oPzpleHBpcmVzfG1heFxcLWFnZXxwYXRofGRvbWFpbnxzZWN1cmUpJC9pLnRlc3Qoc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc0V4cGlyZXMgPSBcIlwiO1xuICAgICAgICBpZiAodkVuZCkge1xuICAgICAgICAgICAgc3dpdGNoICh2RW5kLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyBcIjsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVFwiIDogXCI7IG1heC1hZ2U9XCIgKyB2RW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQudG9VVENTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q29va2llU3RvcmUoKS5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShzS2V5LCBzUGF0aCwgc0RvbWFpbikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzSXRlbShzS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGdldENvb2tpZVN0b3JlKCkuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBoYXNJdGVtOiBmdW5jdGlvbiBoYXNJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpefDtcXFxccyopXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XCIpLnRlc3QoZ2V0Q29va2llU3RvcmUoKS5jb29raWUpO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICB2YXIgYUtleXMgPSBnZXRDb29raWVTdG9yZSgpLmNvb2tpZS5yZXBsYWNlKC8oKD86XnxcXHMqOylbXlxcPV0rKSg/PTt8JCl8Xlxccyp8XFxzKig/OlxcPVteO10qKT8oPzpcXDF8JCkvZywgXCJcIikuc3BsaXQoL1xccyooPzpcXD1bXjtdKik/O1xccyovKTtcbiAgICAgICAgZm9yICh2YXIgbkxlbiA9IGFLZXlzLmxlbmd0aCwgbklkeCA9IDA7IG5JZHggPCBuTGVuOyBuSWR4KyspIHtcbiAgICAgICAgICAgIGFLZXlzW25JZHhdID0gZGVjb2RlVVJJQ29tcG9uZW50KGFLZXlzW25JZHhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUtleXM7XG4gICAgfVxufTtcblxuZXhwb3J0cy5jb29raWVzID0gY29va2llczsiLCIvL2Z1bmN0aW9uIGdldENvb2tpZSAobmFtZSkge1xuLy8gICAgLy8gRnJvbSBodHRwczovL2RvY3MuZGphbmdvcHJvamVjdC5jb20vZW4vMS43L3JlZi9jb250cmliL2NzcmYvXG4vLyAgICB2YXIgY29va2llVmFsdWUgPSBudWxsLCBjb29raWVzLCBpLCBjb29raWU7XG4vLyAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gXCJcIikge1xuLy8gICAgICAgIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuLy8gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpOyAvLyBEb2Vzbid0IHdvcmsgaW4gYWxsIGJyb3dzZXJzXG4vLyAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbi8vICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gKG5hbWUgKyBcIj1cIikpIHtcbi8vICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH1cbi8vICAgIH1cbi8vICAgIHJldHVybiBjb29raWVWYWx1ZTtcbi8vfVxuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGV4dHJhSGVhZGVycyA9IHt9O1xuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdCh1cmwsIG1ldGhvZCwgZGF0YSkge1xuICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbM107XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcIj9mb3JtYXQ9anNvblwiKSA9PSAtMSAmJiB1cmwuaW5kZXhPZihcIiZmb3JtYXQ9anNvblwiKSA9PSAtMSkge1xuICAgICAgICAgICAgdXJsICs9IFwiP2Zvcm1hdD1qc29uXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBDU1JGIHRva2VucyBpZiB3ZSBhcmUgdXNpbmcgdGhpcyBhc1xuICAgICAgICAvLyBhIHB1YmxpYyBBUEkgZm9yIG5vd1xuICAgICAgICAvL2lmIChtZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICAgICAgLy8gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJYLUNTUkZUb2tlblwiLCBnZXRDb29raWUoXCJjc3JmdG9rZW5cIikpO1xuICAgICAgICAvL31cblxuICAgICAgICByZXEub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gaWYgdGhlIGNvbnRlbnQgdHB5ZSBpcyBtdWx0aXBhcnQvZm9ybS1kYXRhIGxldCB0aGUgYnJvd3NlciBoYW5kbGUgaXRcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICE9PSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIikge1xuICAgICAgICAgICAgaWYgKHJlcS5vdmVycmlkZU1pbWVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXEub3ZlcnJpZGVNaW1lVHlwZShjb250ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIGNvbnRlbnRUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBleHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgZXh0cmFIZWFkZXJzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBkb25lIHByb2Nlc3NpbmcgZGF0YVxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uRGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgICAgICAgcmVxLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxLnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIHJlc3QgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJHRVRcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwb3N0OiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUE9TVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHB1dDogZnVuY3Rpb24gcHV0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUFVUXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcGF0Y2g6IGZ1bmN0aW9uIHBhdGNoKHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUEFUQ0hcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBcImRlbGV0ZVwiOiBmdW5jdGlvbiBfZGVsZXRlKHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiREVMRVRFXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgc2V0QWRkaXRpb25hbEhlYWRlcnM6IGZ1bmN0aW9uIHNldEFkZGl0aW9uYWxIZWFkZXJzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZXh0cmFIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSGVhZGVyOiBmdW5jdGlvbiByZW1vdmVIZWFkZXIoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgZXh0cmFIZWFkZXJzW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0SGVhZGVyczogZnVuY3Rpb24gZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIGV4dHJhSGVhZGVycztcbiAgICB9XG59O1xuXG5leHBvcnRzLnJlc3QgPSByZXN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3Vic2NyaWJlcnMgPSB7fTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdldCBzdWJzY3JpYmVycyBmb3IgYW4gYWN0aW9uXG4gKiBvciBhbiBlbXB0eSBsaXN0XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGdldFN1YnNjcmliZXJzKGFjdGlvbikge1xuICAgIHJldHVybiBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3Vic2NyaWJlIGEgZnVuY3Rpb24gdG8gYW4gYWN0aW9uLlxuICogSXQncyBzYWZlIHRvIHN1YnNjcmliZSBtdWx0aXBsZSB0aW1lc1xuICogYXMgdGhlIHN1YnNjcmliZXIgaXMgb25seSBhZGRlZCBvbmNlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHN1YnNjcmliZShhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dID0gc3Vic2NyaWJlcnNbYWN0aW9uXSB8fCBbXTtcbiAgICB2YXIgc3VicyA9IGdldFN1YnNjcmliZXJzKGFjdGlvbiksXG4gICAgICAgIGkgPSB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnNbYWN0aW9uXS5wdXNoKHN1YnNjcmliZXIpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVW5zdWJzY3JpYmUgYSBmdW5jdGlvbiBmcm9tIGFuIGFjdGlvbi5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gdW5zdWJzY3JpYmUoYWN0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIHN1YnMgPSBfc3Vic2NyaWJlcnNbYWN0aW9uXSxcbiAgICAgICAgaTtcbiAgICBpZiAoc3VicyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgX3N1YnNjcmliZXJzW2FjdGlvbl0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9zdWJzY3JpYmVyc1thY3Rpb25dLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgX3N1YnNjcmliZXJzW2FjdGlvbl07XG4gICAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVibGlzaCBhbiBhY3Rpb24gdG8gYWxsIHN1YnNjcmliZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHB1Ymxpc2goYWN0aW9uKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdWJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG5leHBvcnRzLnVuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG5leHBvcnRzLnB1Ymxpc2ggPSBwdWJsaXNoOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRm9ybWF0IGEgdXJsIGJhc2VkIG9uIGFyZ3NcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdFVybCA9IGZvcm1hdFVybDtcblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybCwgYXJncykge1xuICAgIHZhciByZXN1bHQgPSB1cmw7XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgayBpbiBhcmdzKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFwiPFwiICsgayArIFwiPlwiLCBhcmdzW2tdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVzdCA9IHJlcXVpcmUoXCIuL3Jlc3RcIik7XG5cbnZhciBfdXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbnZhciBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlciA9IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyXCIpO1xuXG52YXIgX2Nvb2tpZXMgPSByZXF1aXJlKFwiLi9jb29raWVzXCIpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgICByZXN0OiBfcmVzdC5yZXN0LFxuICAgIGZvcm1hdFVybDogX3VybHMuZm9ybWF0VXJsLFxuICAgIHN1YnNjcmliZTogX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIuc3Vic2NyaWJlLFxuICAgIHVuc3Vic2NyaWJlOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci51bnN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci5wdWJsaXNoLFxuICAgIGNvb2tpZXM6IF9jb29raWVzLmNvb2tpZXNcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcm91dGVycyBmcm9tIFwiLi9yb3V0ZXJzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lIHx8ICcvJ307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVybCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrIChlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVybCAocGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aG5hbWU6IHBhdGhuYW1lfSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRobmFtZTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZXJzLmdldENvbXBvbmVudCh0aGlzLmdldFBhdGhOYW1lKCkpLCB7ZGF0YTogdGhpcy5wcm9wcywgaGFuZGxlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGEgfHwgW107XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Ib21lPC9hPjwvcD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17XCJwLVwiICsgaX0+e2R9PC9wPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpbGRqcyBmcm9tICd3aWxkanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCA9PT0gXCJcIiB8fCB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbGRqcy5yZXN0LmdldCgnL2FwaS9saXN0LycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoTmV4dCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdC5uZXh0O1xuICAgICAgICB3aWxkanMucmVzdC5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZldGNoUHJldigpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdC5wcmV2aW91cztcbiAgICAgICAgd2lsZGpzLnJlc3QuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHtkYXRhX2xpc3Q6IHJlc3BvbnNlfX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCB8fCB7cmVzdWx0czogW119O1xuXG4gICAgICAgIGxldCBuZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IHByZXYgPSBcIlwiO1xuXG4gICAgICAgIGlmIChkYXRhTGlzdC5uZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZldGNoTmV4dC5iaW5kKHRoaXMpfT5OZXh0PC9idXR0b24+XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YUxpc3QucHJldmlvdXMpIHtcbiAgICAgICAgICAgIHByZXYgPSA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hQcmV2LmJpbmQodGhpcyl9PlByZXY8L2J1dHRvbj5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIGRhdGE8L2gyPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+SG9tZTwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9hYm91dC9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5BYm91dDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9mb3JtL1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkZvcm08L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZGF0YS9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5EYXRhPC9hPjwvcD5cbiAgICAgICAgICAgICAgICB7bmV4dH1cbiAgICAgICAgICAgICAgICB7cHJldn1cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhTGlzdC5yZXN1bHRzLm1hcCggKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtcInAtXCIgKyBpfT57ZGF0YS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2lsZGpzIGZyb20gXCJ3aWxkanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgICAgIHdpbGRqcy5yZXN0LnBvc3QoJy9hcGkvZm9ybS8nLCB7dmFsdWU6IHZhbH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiByZXNwb25zZS52YWx1ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9vXCIgaWQ9XCJmb29cIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9hYm91dC9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5BYm91dDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIi9mb3JtL1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkZvcm08L2E+PC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWUgdmlldzwvcD5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kYXRhLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYWJvdXQvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+QWJvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZm9ybS9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Gb3JtPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL2RhdGEvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+RGF0YTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEnXG5cblxuY29uc3Qgcm91dGVyID0ge1xuICAgIGdldENvbXBvbmVudChwYXRobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZTtcbiAgICAgICAgICAgIGNhc2UgJy9hYm91dC8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBBYm91dDtcbiAgICAgICAgICAgIGNhc2UgJy9mb3JtLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgICAgICAgICBjYXNlICcvZGF0YS8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWVcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
