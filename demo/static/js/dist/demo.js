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

        // Get the initial path name from the server side request
        this.state = { pathname: props._request.path || '/' };
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
                window.history.pushState(null, null, e.target.pathname + e.target.search);
                this.updateUrl(e.target.pathname, e.target.search);
            }
        }
    }, {
        key: 'updateUrl',
        value: function updateUrl(pathname, search) {
            this.setState({ pathname: pathname, search: search });
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

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var About = (function (_React$Component) {
    _inherits(About, _React$Component);

    function About(props) {
        _classCallCheck(this, About);

        _get(Object.getPrototypeOf(About.prototype), 'constructor', this).call(this, props);
        this.state = props;
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            var data = this.state.data.data || [];
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h2',
                    null,
                    'About'
                ),
                _react2['default'].createElement(_nav2['default'], { handleClick: this.props.handleClick }),
                data.map(function (d, i) {
                    return _react2['default'].createElement(
                        'p',
                        { key: "p-" + i },
                        d
                    );
                })
            );
        }
    }]);

    return About;
})(_react2['default'].Component);

exports['default'] = About;
module.exports = exports['default'];

},{"./nav":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/nav.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/data.js":[function(require,module,exports){
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

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var Data = (function (_React$Component) {
    _inherits(Data, _React$Component);

    function Data(props) {
        _classCallCheck(this, Data);

        _get(Object.getPrototypeOf(Data.prototype), 'constructor', this).call(this, props);
        this.state = props;
        this.fetchNext = this.fetchNext.bind(this);
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
        value: function fetchNext(e) {
            e.preventDefault();
            //console.log('getting next');
            var url = this.state.data.data_list.next;
            console.log(url);
            //wildjs.rest.get(url).then((response) => {
            //    this.setState({data: {data_list: response}});
            //});
        }
    }, {
        key: 'fetchPrev',
        value: function fetchPrev() {
            var _this2 = this;

            var url = this.state.data.data_list.previous;
            _wildjs2['default'].rest.get(url).then(function (response) {
                _this2.setState({ data: { data_list: response } });
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
                    'a',
                    { href: dataList.next, onClick: this.fetchNext },
                    'Next'
                );
            }

            if (dataList.previous) {
                prev = _react2['default'].createElement(
                    'a',
                    { href: dataList.previous, onClick: this.state.handleClick },
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

},{"./nav":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/nav.js","react":"react","wildjs":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/wildjs.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js":[function(require,module,exports){
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

var _wildjs = require("wildjs");

var _wildjs2 = _interopRequireDefault(_wildjs);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this, props);
        this.state = props;
        this.submitForm = this.submitForm.bind(this);
    }

    _createClass(Form, [{
        key: 'submitForm',
        value: function submitForm(e) {
            var _this = this;

            e.preventDefault();
            var val = e.target.getElementsByTagName("input")[0].value;
            _wildjs2['default'].rest.post('/api/form/', { value: val }).then(function (response) {
                _this.setState({ message: response.value });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'form',
                { method: 'post', onSubmit: this.submitForm },
                _react2['default'].createElement(
                    'h4',
                    null,
                    this.state.message
                ),
                _react2['default'].createElement('input', { type: 'text', name: 'foo', id: 'foo' }),
                _react2['default'].createElement(
                    'button',
                    { type: 'submit' },
                    'Save'
                ),
                _react2['default'].createElement(_nav2['default'], { handleClick: this.props.handleClick })
            );
        }
    }]);

    return Form;
})(_react2['default'].Component);

exports['default'] = Form;
module.exports = exports['default'];

},{"./nav":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/nav.js","react":"react","wildjs":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/wildjs/dist/wildjs.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js":[function(require,module,exports){
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

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
        this.state = props;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h1',
                    null,
                    'Home'
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    'This is the home view'
                ),
                _react2['default'].createElement(
                    'p',
                    null,
                    'Date: ',
                    this.state.data.date
                ),
                _react2['default'].createElement(_nav2['default'], { handleClick: this.state.handleClick })
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"./nav":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/nav.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/nav.js":[function(require,module,exports){
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

var Nav = (function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props);
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "ul",
                null,
                _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/", onClick: this.props.handleClick },
                        "Home"
                    )
                ),
                _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/about/", onClick: this.props.handleClick },
                        "About"
                    )
                ),
                _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/form/", onClick: this.props.handleClick },
                        "Form"
                    )
                ),
                _react2["default"].createElement(
                    "li",
                    null,
                    _react2["default"].createElement(
                        "a",
                        { href: "/data/", onClick: this.props.handleClick },
                        "Data"
                    )
                )
            );
        }
    }]);

    return Nav;
})(_react2["default"].Component);

exports["default"] = Nav;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9uYXYuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL3JvdXRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O3NCQUNULFdBQVc7Ozs7QUFHM0IsSUFBTSxTQUFTLEdBQUcsbUJBQU0sYUFBYSxxQkFBSyxDQUFDOztBQUUzQyxtQkFBTSxNQUFNLENBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7O0FDSEYsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILElBQUksY0FBYyxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzNDLFFBQUk7QUFDQSxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDMUIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNULGVBQU87QUFDSCx1QkFBVyxFQUFFLEVBQUU7QUFDZixrQkFBTSxFQUFFO0FBQ0osdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDNUIsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7O0FBRUQsdUJBQU8sRUFBRSxT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aWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9zcmMvYXBwXCI7XG5cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShBcHApO1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgQ29tcG9uZW50KHdpbmRvdy5wcm9wcyksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRnJvbTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9jb29raWVcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBEZWFsIHdpdGggTm9kZSwgYXMgdGhlcmUgaXMgbm8gYGRvY3VtZW50YCBpbiBOb2RlXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldENvb2tpZVN0b3JlID0gZnVuY3Rpb24gZ2V0Q29va2llU3RvcmUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29va2llU3RvcmU6IHt9LFxuICAgICAgICAgICAgY29va2llOiB7XG4gICAgICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVN0b3JlW3NLZXldO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXRJdGVtOiBmdW5jdGlvbiBzZXRJdGVtKHNLZXksIHNWYWx1ZSwgdkVuZCwgc1BhdGgsIHNEb21haW4sIGJTZWN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29raWVTdG9yZVtzS2V5XSA9IHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShzS2V5LCBzUGF0aCwgc0RvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb29raWVTdG9yZVtzS2V5XTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaGFzSXRlbTogZnVuY3Rpb24gaGFzSXRlbShzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVN0b3JlW3NLZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlDb2xsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvb2tpZVN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29raWVTdG9yZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Q29sbGVjdGlvbi5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleUNvbGxlY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbnZhciBjb29raWVzID0ge1xuICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oc0tleSkge1xuICAgICAgICBpZiAoIXNLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZ2V0Q29va2llU3RvcmUoKS5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86KD86XnwuKjspXFxcXHMqXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XFxcXHMqKFteO10qKS4qJCl8Xi4qJFwiKSwgXCIkMVwiKSkgfHwgbnVsbDtcbiAgICB9LFxuXG4gICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbShzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgICAgIGlmICghc0tleSB8fCAvXig/OmV4cGlyZXN8bWF4XFwtYWdlfHBhdGh8ZG9tYWlufHNlY3VyZSkkL2kudGVzdChzS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzRXhwaXJlcyA9IFwiXCI7XG4gICAgICAgIGlmICh2RW5kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZFbmQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSB2RW5kID09PSBJbmZpbml0eSA/IFwiOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UXCIgOiBcIjsgbWF4LWFnZT1cIiArIHZFbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgdkVuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgdkVuZC50b1VUQ1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRDb29raWVTdG9yZSgpLmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNWYWx1ZSkgKyBzRXhwaXJlcyArIChzRG9tYWluID8gXCI7IGRvbWFpbj1cIiArIHNEb21haW4gOiBcIlwiKSArIChzUGF0aCA/IFwiOyBwYXRoPVwiICsgc1BhdGggOiBcIlwiKSArIChiU2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKHNLZXksIHNQYXRoLCBzRG9tYWluKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNJdGVtKHNLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q29va2llU3RvcmUoKS5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIiArIChzRG9tYWluID8gXCI7IGRvbWFpbj1cIiArIHNEb21haW4gOiBcIlwiKSArIChzUGF0aCA/IFwiOyBwYXRoPVwiICsgc1BhdGggOiBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGhhc0l0ZW06IGZ1bmN0aW9uIGhhc0l0ZW0oc0tleSkge1xuICAgICAgICBpZiAoIXNLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/Ol58O1xcXFxzKilcIiArIGVuY29kZVVSSUNvbXBvbmVudChzS2V5KS5yZXBsYWNlKC9bXFwtXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiXFxcXHMqXFxcXD1cIikudGVzdChnZXRDb29raWVTdG9yZSgpLmNvb2tpZSk7XG4gICAgfSxcblxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICAgIHZhciBhS2V5cyA9IGdldENvb2tpZVN0b3JlKCkuY29va2llLnJlcGxhY2UoLygoPzpefFxccyo7KVteXFw9XSspKD89O3wkKXxeXFxzKnxcXHMqKD86XFw9W147XSopPyg/OlxcMXwkKS9nLCBcIlwiKS5zcGxpdCgvXFxzKig/OlxcPVteO10qKT87XFxzKi8pO1xuICAgICAgICBmb3IgKHZhciBuTGVuID0gYUtleXMubGVuZ3RoLCBuSWR4ID0gMDsgbklkeCA8IG5MZW47IG5JZHgrKykge1xuICAgICAgICAgICAgYUtleXNbbklkeF0gPSBkZWNvZGVVUklDb21wb25lbnQoYUtleXNbbklkeF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhS2V5cztcbiAgICB9XG59O1xuXG5leHBvcnRzLmNvb2tpZXMgPSBjb29raWVzOyIsIi8vZnVuY3Rpb24gZ2V0Q29va2llIChuYW1lKSB7XG4vLyAgICAvLyBGcm9tIGh0dHBzOi8vZG9jcy5kamFuZ29wcm9qZWN0LmNvbS9lbi8xLjcvcmVmL2NvbnRyaWIvY3NyZi9cbi8vICAgIHZhciBjb29raWVWYWx1ZSA9IG51bGwsIGNvb2tpZXMsIGksIGNvb2tpZTtcbi8vICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSBcIlwiKSB7XG4vLyAgICAgICAgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4vLyAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICAgICAgICAgY29va2llID0gY29va2llc1tpXS50cmltKCk7IC8vIERvZXNuJ3Qgd29yayBpbiBhbGwgYnJvd3NlcnNcbi8vICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xuLy8gICAgICAgICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09PSAobmFtZSArIFwiPVwiKSkge1xuLy8gICAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbi8vICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy8gICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuLy99XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZXh0cmFIZWFkZXJzID0ge307XG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XG4gICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1szXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiP2Zvcm1hdD1qc29uXCIpID09IC0xICYmIHVybC5pbmRleE9mKFwiJmZvcm1hdD1qc29uXCIpID09IC0xKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCI/Zm9ybWF0PWpzb25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAvLyBXZSBkb24ndCB3YW50IENTUkYgdG9rZW5zIGlmIHdlIGFyZSB1c2luZyB0aGlzIGFzXG4gICAgICAgIC8vIGEgcHVibGljIEFQSSBmb3Igbm93XG4gICAgICAgIC8vaWYgKG1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgICAgICAvLyAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIlgtQ1NSRlRva2VuXCIsIGdldENvb2tpZShcImNzcmZ0b2tlblwiKSk7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIHJlcS5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICAgICAgICAvLyBpZiB0aGUgY29udGVudCB0cHllIGlzIG11bHRpcGFydC9mb3JtLWRhdGEgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdFxuICAgICAgICBpZiAoY29udGVudFR5cGUgIT09IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKSB7XG4gICAgICAgICAgICBpZiAocmVxLm92ZXJyaWRlTWltZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcS5vdmVycmlkZU1pbWVUeXBlKGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgY29udGVudFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBleHRyYUhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIGRvbmUgcHJvY2Vzc2luZyBkYXRhXG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDw9IDI5OSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpzb25EYXRhID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGpzb25EYXRhKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY29udGVudFR5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICAgICAgICByZXEuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXEuc2VuZChkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgcmVzdCA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIkdFVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBvc3Q6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJQT1NUXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJQVVRcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwYXRjaDogZnVuY3Rpb24gcGF0Y2godXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJQQVRDSFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIFwiZGVsZXRlXCI6IGZ1bmN0aW9uIF9kZWxldGUodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJERUxFVEVcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBzZXRBZGRpdGlvbmFsSGVhZGVyczogZnVuY3Rpb24gc2V0QWRkaXRpb25hbEhlYWRlcnMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBleHRyYUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0sXG5cbiAgICByZW1vdmVIZWFkZXI6IGZ1bmN0aW9uIHJlbW92ZUhlYWRlcihrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiBleHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBleHRyYUhlYWRlcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRIZWFkZXJzOiBmdW5jdGlvbiBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gZXh0cmFIZWFkZXJzO1xuICAgIH1cbn07XG5cbmV4cG9ydHMucmVzdCA9IHJlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdWJzY3JpYmVycyA9IHt9O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogR2V0IHN1YnNjcmliZXJzIGZvciBhbiBhY3Rpb25cbiAqIG9yIGFuIGVtcHR5IGxpc3RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZXJzW2FjdGlvbl0gfHwgW107XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBTdWJzY3JpYmUgYSBmdW5jdGlvbiB0byBhbiBhY3Rpb24uXG4gKiBJdCdzIHNhZmUgdG8gc3Vic2NyaWJlIG11bHRpcGxlIHRpbWVzXG4gKiBhcyB0aGUgc3Vic2NyaWJlciBpcyBvbmx5IGFkZGVkIG9uY2VcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gc3Vic2NyaWJlKGFjdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXJzW2FjdGlvbl0gPSBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xuICAgIHZhciBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSxcbiAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dLnB1c2goc3Vic2NyaWJlcik7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBVbnN1YnNjcmliZSBhIGZ1bmN0aW9uIGZyb20gYW4gYWN0aW9uLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiB1bnN1YnNjcmliZShhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgc3VicyA9IF9zdWJzY3JpYmVyc1thY3Rpb25dLFxuICAgICAgICBpO1xuICAgIGlmIChzdWJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBfc3Vic2NyaWJlcnNbYWN0aW9uXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3N1YnNjcmliZXJzW2FjdGlvbl0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBfc3Vic2NyaWJlcnNbYWN0aW9uXTtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBQdWJsaXNoIGFuIGFjdGlvbiB0byBhbGwgc3Vic2NyaWJlcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gcHVibGlzaChhY3Rpb24pIHtcbiAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICBpID0gdW5kZWZpbmVkO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN1YnMgPSBnZXRTdWJzY3JpYmVycyhhY3Rpb24pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN1YnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxufVxuXG5leHBvcnRzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbmV4cG9ydHMudW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbmV4cG9ydHMucHVibGlzaCA9IHB1Ymxpc2g7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGb3JtYXQgYSB1cmwgYmFzZWQgb24gYXJnc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0VXJsID0gZm9ybWF0VXJsO1xuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsLCBhcmdzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHVybDtcblxuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrIGluIGFyZ3MpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXCI8XCIgKyBrICsgXCI+XCIsIGFyZ3Nba10pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZXN0ID0gcmVxdWlyZShcIi4vcmVzdFwiKTtcblxudmFyIF91cmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxudmFyIF9zdWJzY3JpcHRpb25zUHVibGlzaGVyID0gcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9wdWJsaXNoZXJcIik7XG5cbnZhciBfY29va2llcyA9IHJlcXVpcmUoXCIuL2Nvb2tpZXNcIik7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICAgIHJlc3Q6IF9yZXN0LnJlc3QsXG4gICAgZm9ybWF0VXJsOiBfdXJscy5mb3JtYXRVcmwsXG4gICAgc3Vic2NyaWJlOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci5zdWJzY3JpYmUsXG4gICAgdW5zdWJzY3JpYmU6IF9zdWJzY3JpcHRpb25zUHVibGlzaGVyLnVuc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2g6IF9zdWJzY3JpcHRpb25zUHVibGlzaGVyLnB1Ymxpc2gsXG4gICAgY29va2llczogX2Nvb2tpZXMuY29va2llc1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByb3V0ZXJzIGZyb20gXCIuL3JvdXRlcnNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVXJsID0gdGhpcy51cGRhdGVVcmwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGluaXRpYWwgcGF0aCBuYW1lIGZyb20gdGhlIHNlcnZlciBzaWRlIHJlcXVlc3RcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtwYXRobmFtZTogcHJvcHMuX3JlcXVlc3QucGF0aCB8fCAnLyd9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVcmwod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayAoZSkge1xuICAgICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBlLnRhcmdldC5wYXRobmFtZSArIGUudGFyZ2V0LnNlYXJjaCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVybChlLnRhcmdldC5wYXRobmFtZSwgZS50YXJnZXQuc2VhcmNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVybCAocGF0aG5hbWUsIHNlYXJjaCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRobmFtZSwgc2VhcmNofSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRobmFtZTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZXJzLmdldENvbXBvbmVudCh0aGlzLmdldFBhdGhOYW1lKCkpLCB7ZGF0YTogdGhpcy5wcm9wcywgaGFuZGxlQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9KVxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5kYXRhIHx8IFtdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgICAgIDxOYXYgaGFuZGxlQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e1wicC1cIiArIGl9PntkfTwvcD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aWxkanMgZnJvbSAnd2lsZGpzJ1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZmV0Y2hOZXh0ID0gdGhpcy5mZXRjaE5leHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5kYXRhX2xpc3QgPT09IFwiXCIgfHwgdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aWxkanMucmVzdC5nZXQoJy9hcGkvbGlzdC8nKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHtkYXRhX2xpc3Q6IHJlc3BvbnNlfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaE5leHQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldHRpbmcgbmV4dCcpO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0Lm5leHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgIC8vd2lsZGpzLnJlc3QuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgIC8vfSk7XG4gICAgfVxuXG4gICAgZmV0Y2hQcmV2KCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0LnByZXZpb3VzO1xuICAgICAgICB3aWxkanMucmVzdC5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0IHx8IHtyZXN1bHRzOiBbXX07XG5cbiAgICAgICAgbGV0IG5leHQgPSBcIlwiO1xuICAgICAgICBsZXQgcHJldiA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGRhdGFMaXN0Lm5leHQpIHtcbiAgICAgICAgICAgIG5leHQgPSA8YSBocmVmPXtkYXRhTGlzdC5uZXh0fSBvbkNsaWNrPXt0aGlzLmZldGNoTmV4dH0+TmV4dDwvYT5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhTGlzdC5wcmV2aW91cykge1xuICAgICAgICAgICAgcHJldiA9IDxhIGhyZWY9e2RhdGFMaXN0LnByZXZpb3VzfSBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5QcmV2PC9hPlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgZGF0YTwvaDI+XG4gICAgICAgICAgICAgICAgPE5hdiBoYW5kbGVDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgICAgICB7bmV4dH1cbiAgICAgICAgICAgICAgICB7cHJldn1cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhTGlzdC5yZXN1bHRzLm1hcCggKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtcInAtXCIgKyBpfT57ZGF0YS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2lsZGpzIGZyb20gXCJ3aWxkanNcIjtcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xuICAgICAgICB3aWxkanMucmVzdC5wb3N0KCcvYXBpL2Zvcm0vJywge3ZhbHVlOiB2YWx9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogcmVzcG9uc2UudmFsdWV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvb1wiIGlkPVwiZm9vXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxOYXYgaGFuZGxlQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgICAgICAgICAgPHA+RGF0ZToge3RoaXMuc3RhdGUuZGF0YS5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8TmF2IGhhbmRsZUNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dC9cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Zvcm0vXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30+Rm9ybTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RhdGEvXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30+RGF0YTwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEnXG5cblxuY29uc3Qgcm91dGVyID0ge1xuICAgIGdldENvbXBvbmVudChwYXRobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZTtcbiAgICAgICAgICAgIGNhc2UgJy9hYm91dC8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBBYm91dDtcbiAgICAgICAgICAgIGNhc2UgJy9mb3JtLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgICAgICAgICBjYXNlICcvZGF0YS8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWVcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
