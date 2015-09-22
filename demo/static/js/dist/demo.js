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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getCookie(name) {
    // From https://docs.djangoproject.com/en/1.7/ref/contrib/csrf/
    var cookieValue = null,
        cookies,
        i,
        cookie;
    if (document.cookie && document.cookie !== "") {
        cookies = document.cookie.split(";");
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i].trim(); // Doesn't work in all browsers
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var extraHeaders = {};

function makeRequest(url, method, data) {
    var contentType = arguments[3] === undefined ? "application/json" : arguments[3];

    return new Promise(function (resolve, reject) {

        //if (url.indexOf("?format=json") == -1 && url.indexOf("&format=json") == -1) {
        //    url += "?format=json";
        //}

        var req = new XMLHttpRequest();
        req.open(method, url, true);

        // We don't want CSRF tokens if we are using this as
        // a public API for now
        if (method !== "GET") {
            try {
                req.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
            } catch (ex) {}
        }

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

// This is a bit of a hack

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

},{"./routers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/routers.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/data.js":[function(require,module,exports){
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
        this.click = this.click.bind(this);
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
        key: 'click',
        value: function click(page, e) {
            var _this2 = this;

            e.preventDefault();
            var url = this.state.data.data_list.api_url;
            if (page !== null) {
                url = this.state.data.data_list.api_url + page;
            }

            console.log(url);

            _wildjs2['default'].rest.get(url).then(function (response) {
                console.log('got it');
                _this2.setState({ data: { data_list: response } });
            });

            this.state.handleClick(e);
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
                    { href: dataList.next, onClick: this.click.bind(this, dataList.next) },
                    'Next'
                );
            }

            if (dataList.previous) {
                prev = _react2['default'].createElement(
                    'a',
                    { href: dataList.previous, onClick: this.click.bind(this, dataList.next) },
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
                    'h1',
                    null,
                    'Form'
                ),
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

},{"./components/data":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/data.js","./components/form":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js","./components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9uYXYuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL3JvdXRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O3NCQUNULFdBQVc7Ozs7QUFHM0IsSUFBTSxTQUFTLEdBQUcsbUJBQU0sYUFBYSxxQkFBSyxDQUFDOztBQUUzQyxtQkFBTSxNQUFNLENBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7O0FDSEYsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILElBQUksY0FBYyxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzNDLFFBQUk7QUFDQSxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDMUIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNULGVBQU87QUFDSCx1QkFBVyxFQUFFLEVBQUU7QUFDZixrQkFBTSxFQUFFO0FBQ0osdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDNUIsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7O0FBRUQsdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUNuRSx3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Q29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vc3JjL2FwcFwiO1xuXG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoQXBwKTtcblxuUmVhY3QucmVuZGVyKFxuICAgIENvbXBvbmVudCh3aW5kb3cucHJvcHMpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZyb206XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvY29va2llXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRGVhbCB3aXRoIE5vZGUsIGFzIHRoZXJlIGlzIG5vIGBkb2N1bWVudGAgaW4gTm9kZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXRDb29raWVTdG9yZSA9IGZ1bmN0aW9uIGdldENvb2tpZVN0b3JlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvb2tpZVN0b3JlOiB7fSxcbiAgICAgICAgICAgIGNvb2tpZToge1xuICAgICAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oc0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTdG9yZVtzS2V5XTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbShzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29va2llU3RvcmVbc0tleV0gPSBzVmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29va2llU3RvcmVbc0tleV07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGhhc0l0ZW06IGZ1bmN0aW9uIGhhc0l0ZW0oc0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTdG9yZVtzS2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5Q29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb29raWVTdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29va2llU3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleUNvbGxlY3Rpb24ucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlDb2xsZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG52YXIgY29va2llcyA9IHtcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGdldENvb2tpZVN0b3JlKCkuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Oig/Ol58Lio7KVxcXFxzKlwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRcIiksIFwiJDFcIikpIHx8IG51bGw7XG4gICAgfSxcblxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0oc0tleSwgc1ZhbHVlLCB2RW5kLCBzUGF0aCwgc0RvbWFpbiwgYlNlY3VyZSkge1xuICAgICAgICBpZiAoIXNLZXkgfHwgL14oPzpleHBpcmVzfG1heFxcLWFnZXxwYXRofGRvbWFpbnxzZWN1cmUpJC9pLnRlc3Qoc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc0V4cGlyZXMgPSBcIlwiO1xuICAgICAgICBpZiAodkVuZCkge1xuICAgICAgICAgICAgc3dpdGNoICh2RW5kLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyBcIjsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVFwiIDogXCI7IG1heC1hZ2U9XCIgKyB2RW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQudG9VVENTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q29va2llU3RvcmUoKS5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShzS2V5LCBzUGF0aCwgc0RvbWFpbikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzSXRlbShzS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGdldENvb2tpZVN0b3JlKCkuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBoYXNJdGVtOiBmdW5jdGlvbiBoYXNJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpefDtcXFxccyopXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XCIpLnRlc3QoZ2V0Q29va2llU3RvcmUoKS5jb29raWUpO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICB2YXIgYUtleXMgPSBnZXRDb29raWVTdG9yZSgpLmNvb2tpZS5yZXBsYWNlKC8oKD86XnxcXHMqOylbXlxcPV0rKSg/PTt8JCl8Xlxccyp8XFxzKig/OlxcPVteO10qKT8oPzpcXDF8JCkvZywgXCJcIikuc3BsaXQoL1xccyooPzpcXD1bXjtdKik/O1xccyovKTtcbiAgICAgICAgZm9yICh2YXIgbkxlbiA9IGFLZXlzLmxlbmd0aCwgbklkeCA9IDA7IG5JZHggPCBuTGVuOyBuSWR4KyspIHtcbiAgICAgICAgICAgIGFLZXlzW25JZHhdID0gZGVjb2RlVVJJQ29tcG9uZW50KGFLZXlzW25JZHhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUtleXM7XG4gICAgfVxufTtcblxuZXhwb3J0cy5jb29raWVzID0gY29va2llczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgICAvLyBGcm9tIGh0dHBzOi8vZG9jcy5kamFuZ29wcm9qZWN0LmNvbS9lbi8xLjcvcmVmL2NvbnRyaWIvY3NyZi9cbiAgICB2YXIgY29va2llVmFsdWUgPSBudWxsLFxuICAgICAgICBjb29raWVzLFxuICAgICAgICBpLFxuICAgICAgICBjb29raWU7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTsgLy8gRG9lc24ndCB3b3JrIGluIGFsbCBicm93c2Vyc1xuICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xuICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gbmFtZSArIFwiPVwiKSB7XG4gICAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29va2llVmFsdWU7XG59XG5cbnZhciBleHRyYUhlYWRlcnMgPSB7fTtcblxuZnVuY3Rpb24gbWFrZVJlcXVlc3QodXJsLCBtZXRob2QsIGRhdGEpIHtcbiAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzNdO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAvL2lmICh1cmwuaW5kZXhPZihcIj9mb3JtYXQ9anNvblwiKSA9PSAtMSAmJiB1cmwuaW5kZXhPZihcIiZmb3JtYXQ9anNvblwiKSA9PSAtMSkge1xuICAgICAgICAvLyAgICB1cmwgKz0gXCI/Zm9ybWF0PWpzb25cIjtcbiAgICAgICAgLy99XG5cbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBDU1JGIHRva2VucyBpZiB3ZSBhcmUgdXNpbmcgdGhpcyBhc1xuICAgICAgICAvLyBhIHB1YmxpYyBBUEkgZm9yIG5vd1xuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgZ2V0Q29va2llKFwiY3NyZnRva2VuXCIpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlIGNvbnRlbnQgdHB5ZSBpcyBtdWx0aXBhcnQvZm9ybS1kYXRhIGxldCB0aGUgYnJvd3NlciBoYW5kbGUgaXRcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICE9PSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIikge1xuICAgICAgICAgICAgaWYgKHJlcS5vdmVycmlkZU1pbWVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXEub3ZlcnJpZGVNaW1lVHlwZShjb250ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIGNvbnRlbnRUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBleHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgZXh0cmFIZWFkZXJzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBkb25lIHByb2Nlc3NpbmcgZGF0YVxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uRGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgICAgICAgcmVxLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxLnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIHJlc3QgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJHRVRcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwb3N0OiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUE9TVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHB1dDogZnVuY3Rpb24gcHV0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUFVUXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcGF0Y2g6IGZ1bmN0aW9uIHBhdGNoKHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiUEFUQ0hcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBcImRlbGV0ZVwiOiBmdW5jdGlvbiBfZGVsZXRlKHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiREVMRVRFXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgc2V0QWRkaXRpb25hbEhlYWRlcnM6IGZ1bmN0aW9uIHNldEFkZGl0aW9uYWxIZWFkZXJzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZXh0cmFIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSGVhZGVyOiBmdW5jdGlvbiByZW1vdmVIZWFkZXIoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgZXh0cmFIZWFkZXJzW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0SGVhZGVyczogZnVuY3Rpb24gZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIGV4dHJhSGVhZGVycztcbiAgICB9XG59O1xuXG5leHBvcnRzLnJlc3QgPSByZXN0O1xuXG4vLyBUaGlzIGlzIGEgYml0IG9mIGEgaGFjayIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3Vic2NyaWJlcnMgPSB7fTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdldCBzdWJzY3JpYmVycyBmb3IgYW4gYWN0aW9uXG4gKiBvciBhbiBlbXB0eSBsaXN0XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGdldFN1YnNjcmliZXJzKGFjdGlvbikge1xuICAgIHJldHVybiBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3Vic2NyaWJlIGEgZnVuY3Rpb24gdG8gYW4gYWN0aW9uLlxuICogSXQncyBzYWZlIHRvIHN1YnNjcmliZSBtdWx0aXBsZSB0aW1lc1xuICogYXMgdGhlIHN1YnNjcmliZXIgaXMgb25seSBhZGRlZCBvbmNlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHN1YnNjcmliZShhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dID0gc3Vic2NyaWJlcnNbYWN0aW9uXSB8fCBbXTtcbiAgICB2YXIgc3VicyA9IGdldFN1YnNjcmliZXJzKGFjdGlvbiksXG4gICAgICAgIGkgPSB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnNbYWN0aW9uXS5wdXNoKHN1YnNjcmliZXIpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVW5zdWJzY3JpYmUgYSBmdW5jdGlvbiBmcm9tIGFuIGFjdGlvbi5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gdW5zdWJzY3JpYmUoYWN0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIHN1YnMgPSBfc3Vic2NyaWJlcnNbYWN0aW9uXSxcbiAgICAgICAgaTtcbiAgICBpZiAoc3VicyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3Vic1tpXSA9PT0gc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgX3N1YnNjcmliZXJzW2FjdGlvbl0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9zdWJzY3JpYmVyc1thY3Rpb25dLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgX3N1YnNjcmliZXJzW2FjdGlvbl07XG4gICAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVibGlzaCBhbiBhY3Rpb24gdG8gYWxsIHN1YnNjcmliZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHB1Ymxpc2goYWN0aW9uKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdWJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG5leHBvcnRzLnVuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG5leHBvcnRzLnB1Ymxpc2ggPSBwdWJsaXNoOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRm9ybWF0IGEgdXJsIGJhc2VkIG9uIGFyZ3NcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcm1hdFVybCA9IGZvcm1hdFVybDtcblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybCwgYXJncykge1xuICAgIHZhciByZXN1bHQgPSB1cmw7XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgayBpbiBhcmdzKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFwiPFwiICsgayArIFwiPlwiLCBhcmdzW2tdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVzdCA9IHJlcXVpcmUoXCIuL3Jlc3RcIik7XG5cbnZhciBfdXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbnZhciBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlciA9IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyXCIpO1xuXG52YXIgX2Nvb2tpZXMgPSByZXF1aXJlKFwiLi9jb29raWVzXCIpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgICByZXN0OiBfcmVzdC5yZXN0LFxuICAgIGZvcm1hdFVybDogX3VybHMuZm9ybWF0VXJsLFxuICAgIHN1YnNjcmliZTogX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIuc3Vic2NyaWJlLFxuICAgIHVuc3Vic2NyaWJlOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci51bnN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci5wdWJsaXNoLFxuICAgIGNvb2tpZXM6IF9jb29raWVzLmNvb2tpZXNcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcm91dGVycyBmcm9tIFwiLi9yb3V0ZXJzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbml0aWFsIHBhdGggbmFtZSBmcm9tIHRoZSBzZXJ2ZXIgc2lkZSByZXF1ZXN0XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGF0aG5hbWU6IHByb3BzLl9yZXF1ZXN0LnBhdGggfHwgJy8nfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgKGUpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZS50YXJnZXQucGF0aG5hbWUgKyBlLnRhcmdldC5zZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVcmwoZS50YXJnZXQucGF0aG5hbWUsIGUudGFyZ2V0LnNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVVcmwgKHBhdGhuYW1lLCBzZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aG5hbWUsIHNlYXJjaH0pO1xuICAgIH1cblxuICAgIGdldFBhdGhOYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGF0aG5hbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGVycy5nZXRDb21wb25lbnQodGhpcy5nZXRQYXRoTmFtZSgpKSwge2RhdGE6IHRoaXMucHJvcHMsIGhhbmRsZUNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSlcbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2lsZGpzIGZyb20gJ3dpbGRqcydcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgICAgICB0aGlzLmNsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCA9PT0gXCJcIiB8fCB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbGRqcy5yZXN0LmdldCgnL2FwaS9saXN0LycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrKHBhZ2UsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdC5hcGlfdXJsO1xuICAgICAgICBpZiAocGFnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdXJsID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdC5hcGlfdXJsICsgcGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgICAgICAgd2lsZGpzLnJlc3QuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgaXQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHtkYXRhX2xpc3Q6IHJlc3BvbnNlfX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmhhbmRsZUNsaWNrKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YV9saXN0IHx8IHtyZXN1bHRzOiBbXX07XG5cbiAgICAgICAgbGV0IG5leHQgPSBcIlwiO1xuICAgICAgICBsZXQgcHJldiA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGRhdGFMaXN0Lm5leHQpIHtcbiAgICAgICAgICAgIG5leHQgPSA8YSBocmVmPXtkYXRhTGlzdC5uZXh0fSBvbkNsaWNrPXt0aGlzLmNsaWNrLmJpbmQodGhpcywgZGF0YUxpc3QubmV4dCl9Pk5leHQ8L2E+XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YUxpc3QucHJldmlvdXMpIHtcbiAgICAgICAgICAgIHByZXYgPSA8YSBocmVmPXtkYXRhTGlzdC5wcmV2aW91c30gb25DbGljaz17dGhpcy5jbGljay5iaW5kKHRoaXMsIGRhdGFMaXN0Lm5leHQpfT5QcmV2PC9hPlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgZGF0YTwvaDI+XG4gICAgICAgICAgICAgICAgPE5hdiBoYW5kbGVDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgICAgICB7cHJldn1cbiAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDt8Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtuZXh0fVxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGFMaXN0LnJlc3VsdHMubWFwKCAoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e1wicC1cIiArIGl9PntkYXRhLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aWxkanMgZnJvbSBcIndpbGRqc1wiO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgICAgIHdpbGRqcy5yZXN0LnBvc3QoJy9hcGkvZm9ybS8nLCB7dmFsdWU6IHZhbH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiByZXNwb25zZS52YWx1ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGgxPkZvcm08L2gxPlxuICAgICAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvb1wiIGlkPVwiZm9vXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxOYXYgaGFuZGxlQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgICAgICAgICAgPE5hdiBoYW5kbGVDbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZm9ybS9cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5Gb3JtPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZGF0YS9cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5EYXRhPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5pbXBvcnQgRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhJ1xuXG5cbmNvbnN0IHJvdXRlciA9IHtcbiAgICBnZXRDb21wb25lbnQocGF0aG5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChwYXRobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWU7XG4gICAgICAgICAgICBjYXNlICcvZm9ybS8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtO1xuICAgICAgICAgICAgY2FzZSAnL2RhdGEvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YTtcbiAgICAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgICAgIHJldHVybiBIb21lXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
