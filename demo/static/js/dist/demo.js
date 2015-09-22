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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9uYXYuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL3JvdXRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O3NCQUNULFdBQVc7Ozs7QUFHM0IsSUFBTSxTQUFTLEdBQUcsbUJBQU0sYUFBYSxxQkFBSyxDQUFDOztBQUUzQyxtQkFBTSxNQUFNLENBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7O0FDSEYsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILElBQUksY0FBYyxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzNDLFFBQUk7QUFDQSxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDMUIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNULGVBQU87QUFDSCx1QkFBVyxFQUFFLEVBQUU7QUFDZixrQkFBTSxFQUFFO0FBQ0osdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDNUIsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7O0FBRUQsdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUNuRSx3QkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7aUJBQ25DOztBQUVELDBCQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDbEQsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7O0FBRUQsdUJBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDNUIsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7aUJBQy9DOztBQUVELG9CQUFJLEVBQUUsU0FBUyxJQUFJLEdBQUc7QUFDbEIsd0JBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN2Qix5QkFBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzlCLDRCQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLHlDQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUMzQjtxQkFDSjtBQUNELDJCQUFPLGFBQWEsQ0FBQztpQkFDeEI7YUFDSjtTQUNKLENBQUM7S0FDTDtDQUNKLENBQUM7O0FBRUYsSUFBSSxPQUFPLEdBQUc7QUFDVixXQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQzVCLFlBQUksQ0FBQyxJQUFJLEVBQUU7QUFDUCxtQkFBTyxJQUFJLENBQUM7U0FDZjtBQUNELGVBQU8sa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxHQUFHLDZCQUE2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDdE07O0FBRUQsV0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ25FLFlBQUksQ0FBQyxJQUFJLElBQUksNENBQTRDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xFLG1CQUFPLEtBQUssQ0FBQztTQUNoQjtBQUNELFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixZQUFJLElBQUksRUFBRTtBQUNOLG9CQUFRLElBQUksQ0FBQyxXQUFXO0FBQ3BCLHFCQUFLLE1BQU07QUFDUCw0QkFBUSxHQUFHLElBQUksS0FBSyxRQUFRLEdBQUcseUNBQXlDLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztBQUMvRiwwQkFBTTtBQUFBLEFBQ1YscUJBQUssTUFBTTtBQUNQLDRCQUFRLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztBQUMvQiwwQkFBTTtBQUFBLEFBQ1YscUJBQUssSUFBSTtBQUNMLDRCQUFRLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QywwQkFBTTtBQUFBLGFBQ2I7U0FDSjtBQUNELHNCQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsSUFBSSxPQUFPLEdBQUcsV0FBVyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUEsQUFBQyxJQUFJLEtBQUssR0FBRyxTQUFTLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQSxBQUFDLElBQUksT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDO0FBQzNNLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsY0FBVSxFQUFFLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ2xELFlBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JCLG1CQUFPLEtBQUssQ0FBQztTQUNoQjtBQUNELHNCQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsMENBQTBDLElBQUksT0FBTyxHQUFHLFdBQVcsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFBLEFBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDO0FBQzVLLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsV0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUM1QixZQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1AsbUJBQU8sS0FBSyxDQUFDO1NBQ2hCO0FBQ0QsZUFBTyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEk7O0FBRUQsUUFBSSxFQUFFLFNBQVMsSUFBSSxHQUFHO0FBQ2xCLFlBQUksS0FBSyxHQUFHLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMseURBQXlELEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDeEksYUFBSyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN6RCxpQkFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0FBQ0QsZUFBTyxLQUFLLENBQUM7S0FDaEI7Q0FDSixDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7QUN0RzFCLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDekMsU0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUM7QUFDSCxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7O0FBRXJCLFFBQUksV0FBVyxHQUFHLElBQUk7UUFDbEIsT0FBTztRQUNQLENBQUM7UUFDRCxNQUFNLENBQUM7QUFDWCxRQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7QUFDM0MsZUFBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGFBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLGtCQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUUzQixnQkFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxHQUFHLEVBQUU7QUFDckQsMkJBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxzQkFBTTthQUNUO1NBQ0o7S0FDSjtBQUNELFdBQU8sV0FBVyxDQUFDO0NBQ3RCOztBQUVELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDcEMsUUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWpGLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFOzs7Ozs7QUFNMUMsWUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUMvQixXQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7QUFJNUIsWUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO0FBQ2xCLGdCQUFJO0FBQ0EsbUJBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDL0QsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFO1NBQ2xCOzs7QUFHRCxZQUFJLFdBQVcsS0FBSyxxQkFBcUIsRUFBRTtBQUN2QyxnQkFBSSxHQUFHLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO0FBQ3BDLG1CQUFHLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckM7O0FBRUQsZUFBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNyRDs7QUFFRCxhQUFLLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtBQUMxQixlQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEOzs7QUFHRCxXQUFHLENBQUMsa0JBQWtCLEdBQUcsWUFBWTtBQUNqQyxnQkFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtBQUN0Qix1QkFBTzthQUNWOztBQUVELGdCQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO0FBQ3hDLG9CQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUU7QUFDbEIsMkJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUN6QyxNQUFNO0FBQ0gsMkJBQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0osTUFBTTtBQUNILG9CQUFJO0FBQ0Esd0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLDBCQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BCLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDViwwQkFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtTQUNKLENBQUM7O0FBRUYsWUFBSSxXQUFXLEtBQUssa0JBQWtCLEVBQUU7QUFDcEMsZUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbEMsTUFBTTtBQUNILGVBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7S0FDSixDQUFDLENBQUM7Q0FDTjs7QUFFRCxJQUFJLElBQUksR0FBRztBQUNQLE9BQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3pCLFlBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVqRixlQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNyRDs7QUFFRCxRQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMzQixZQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFakYsZUFBTyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdEQ7O0FBRUQsT0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDekIsWUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWpGLGVBQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3JEOztBQUVELFNBQUssRUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzdCLFlBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVqRixlQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN2RDs7QUFFRCxZQUFRLEVBQUUsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNsQyxZQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFakYsZUFBTyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDeEQ7O0FBRUQsd0JBQW9CLEVBQUUsU0FBUyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQzVELG9CQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzdCOztBQUVELGdCQUFZLEVBQUUsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ3JDLFlBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtBQUNyQixtQkFBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7S0FDSjs7QUFFRCxjQUFVLEVBQUUsU0FBUyxVQUFVLEdBQUc7QUFDOUIsZUFBTyxZQUFZLENBQUM7S0FDdkI7Q0FDSixDQUFDOztBQUVGLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7OztBQ3hJcEIsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBTXJCLFNBQVMsY0FBYyxDQUFDLE1BQU0sRUFBRTtBQUM1QixXQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDcEM7Ozs7Ozs7QUFPRCxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQ25DLGVBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hELFFBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7QUFFbEIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDakMsWUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3hCLG1CQUFPO1NBQ1Y7S0FDSjs7QUFFRCxlQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ3hDOzs7OztBQUtELFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDckMsUUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUM7QUFDTixRQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDcEIsZUFBTztLQUNWOztBQUVELFNBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2pDLFlBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN4Qix3QkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7S0FDSjs7QUFFRCxRQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ25DLGVBQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0NBQ0o7Ozs7O0FBS0QsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3JCLFFBQUksSUFBSSxHQUFHLEVBQUU7UUFDVCxDQUFDLEdBQUcsU0FBUyxDQUFDOztBQUVsQixTQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0QyxZQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNkLGdCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCLE1BQU07QUFDSCxrQkFBTTtTQUNUO0tBQ0o7O0FBRUQsUUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLFNBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCO0NBQ0o7O0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDOUIsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7OztBQzNFMUIsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztBQUU5QixTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzFCLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQzs7QUFFakIsUUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3BCLGVBQU8sTUFBTSxDQUFDO0tBQ2pCOztBQUVELFNBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ2hCLGNBQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25EOztBQUVELFdBQU8sTUFBTSxDQUFDO0NBQ2pCOzs7QUN0QkQsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQzs7QUFFSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTlCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSx1QkFBdUIsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7QUFFbkUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVwQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDakIsUUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQ2hCLGFBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztBQUMxQixhQUFTLEVBQUUsdUJBQXVCLENBQUMsU0FBUztBQUM1QyxlQUFXLEVBQUUsdUJBQXVCLENBQUMsV0FBVztBQUNoRCxXQUFPLEVBQUUsdUJBQXVCLENBQUMsT0FBTztBQUN4QyxXQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87Q0FDNUIsQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3RCbEIsT0FBTzs7Ozt1QkFDTCxXQUFXOzs7O0lBRVYsR0FBRztjQUFILEdBQUc7O0FBQ1IsYUFESyxHQUFHLENBQ1AsS0FBSyxFQUFFOzhCQURILEdBQUc7O0FBRWhCLG1DQUZhLEdBQUcsNkNBRVYsS0FBSyxFQUFFO0FBQ2IsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxZQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7QUFHL0MsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUMsQ0FBQztLQUN2RDs7aUJBUmdCLEdBQUc7O2VBVUYsNkJBQUc7OztBQUNqQixrQkFBTSxDQUFDLFVBQVUsR0FBRyxVQUFDLENBQUMsRUFBSztBQUN2QixzQkFBSyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QyxDQUFDO1NBQ0w7OztlQUVXLHFCQUFDLENBQUMsRUFBRTtBQUNaLGdCQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtBQUN4QyxpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHNCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUUsb0JBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyQztTQUNKOzs7ZUFFUyxtQkFBQyxRQUFRLEVBQUU7QUFDakIsZ0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxRQUFRLEVBQVIsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUM3Qjs7O2VBRVcsdUJBQUc7QUFDWCxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUM5Qjs7O2VBRU0sa0JBQUc7QUFDTixtQkFDSSxtQkFBTSxhQUFhLENBQUMscUJBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUNuSDtTQUNKOzs7V0FwQ2dCLEdBQUc7R0FBUyxtQkFBTSxTQUFTOztxQkFBM0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDSE4sT0FBTzs7OztzQkFDTixRQUFROzs7O21CQUNYLE9BQU87Ozs7SUFHRixJQUFJO2NBQUosSUFBSTs7QUFDVCxhQURLLElBQUksQ0FDUixLQUFLLEVBQUU7OEJBREgsSUFBSTs7QUFFakIsbUNBRmEsSUFBSSw2Q0FFWCxLQUFLLEVBQUU7QUFDYixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOztpQkFMZ0IsSUFBSTs7ZUFPSiw2QkFBRzs7O0FBQ2hCLGdCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtBQUM3RSxvQ0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUM3QywwQkFBSyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUNoRCxDQUFDLENBQUM7YUFDTjtTQUNKOzs7ZUFFSSxlQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7OztBQUNYLGFBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxnQkFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQ2YsbUJBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNsRDs7QUFFRCxnQ0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUNwQyx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0Qix1QkFBSyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ2hELENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztTQUU3RTs7O2VBRUssa0JBQUc7QUFDTCxnQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDOztBQUU1RCxnQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsZ0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZCxnQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ2Ysb0JBQUksR0FBRzs7c0JBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEFBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQUFBQzs7aUJBQVMsQ0FBQTthQUN6Rjs7QUFFRCxnQkFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO0FBQ25CLG9CQUFJLEdBQUc7O3NCQUFHLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxBQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEFBQUM7O2lCQUFTLENBQUE7YUFDakc7O0FBRUQsbUJBQ0k7OztnQkFDSTs7OztpQkFBcUI7Z0JBQ3JCLHFEQUFLLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQUFBQyxHQUFHO2dCQUMzQyxJQUFJO2dCQUNMOzs7O2lCQUEwQjtnQkFDekIsSUFBSTtnQkFDTDs7O29CQUNLLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQUMsSUFBSSxFQUFFLENBQUMsRUFBSztBQUNoQywrQkFBTzs7OEJBQUksR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLEFBQUM7NEJBQUUsSUFBSSxDQUFDLElBQUk7eUJBQU0sQ0FBQTtxQkFDN0MsQ0FBQztpQkFDRDthQUNILENBQ1Q7U0FDSjs7O1dBM0RnQixJQUFJO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTVCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0xQLE9BQU87Ozs7c0JBQ04sUUFBUTs7OzttQkFDWCxPQUFPOzs7O0lBR0YsSUFBSTtjQUFKLElBQUk7O0FBQ1QsYUFESyxJQUFJLENBQ1IsS0FBSyxFQUFFOzhCQURILElBQUk7O0FBRWpCLG1DQUZhLElBQUksNkNBRVgsS0FBSyxFQUFFO0FBQ2IsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoRDs7aUJBTGdCLElBQUk7O2VBT1gsb0JBQUMsQ0FBQyxFQUFFOzs7QUFDVixhQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsZ0JBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzVELGdDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQzVELHNCQUFLLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQzthQUM1QyxDQUFDLENBQUM7U0FDTjs7O2VBRUssa0JBQUc7QUFDTCxtQkFDSTs7a0JBQU0sTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQUFBQztnQkFDMUM7Ozs7aUJBQWE7Z0JBQ2I7OztvQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87aUJBQU07Z0JBQzdCLDRDQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsS0FBSyxHQUFHO2dCQUN6Qzs7c0JBQVEsSUFBSSxFQUFDLFFBQVE7O2lCQUFjO2dCQUNuQyxxREFBSyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUMsR0FBRzthQUN6QyxDQUNWO1NBQ0o7OztXQXpCZ0IsSUFBSTtHQUFTLG1CQUFNLFNBQVM7O3FCQUE1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNMUCxPQUFPOzs7O21CQUNULE9BQU87Ozs7SUFHRixJQUFJO2NBQUosSUFBSTs7QUFDVCxhQURLLElBQUksQ0FDUixLQUFLLEVBQUU7OEJBREgsSUFBSTs7QUFFakIsbUNBRmEsSUFBSSw2Q0FFWCxLQUFLLEVBQUU7QUFDYixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7aUJBSmdCLElBQUk7O2VBTWQsa0JBQUc7QUFDTixtQkFDSTs7O2dCQUNJOzs7O2lCQUFhO2dCQUNiOzs7O2lCQUE0QjtnQkFDNUIscURBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxBQUFDLEdBQUc7YUFDMUMsQ0FDVDtTQUNKOzs7V0FkZ0IsSUFBSTtHQUFTLG1CQUFNLFNBQVM7O3FCQUE1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNKUCxPQUFPOzs7O0lBR0osR0FBRztjQUFILEdBQUc7O0FBQ1QsYUFETSxHQUFHLENBQ1IsS0FBSyxFQUFFOzhCQURGLEdBQUc7O0FBRWhCLG1DQUZhLEdBQUcsNkNBRVYsS0FBSyxFQUFFO0tBQ2hCOztpQkFIZ0IsR0FBRzs7ZUFLZCxrQkFBRztBQUNMLG1CQUNJOzs7Z0JBQ0k7OztvQkFBSTs7MEJBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUM7O3FCQUFTO2lCQUFLO2dCQUM5RDs7O29CQUFJOzswQkFBRyxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQUFBQzs7cUJBQVM7aUJBQUs7Z0JBQ25FOzs7b0JBQUk7OzBCQUFHLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxBQUFDOztxQkFBUztpQkFBSzthQUNsRSxDQUNSO1NBQ0o7OztXQWJnQixHQUFHO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTNCLEdBQUc7Ozs7Ozs7Ozs7Ozs4QkNIUCxtQkFBbUI7Ozs7OEJBQ25CLG1CQUFtQjs7Ozs4QkFDbkIsbUJBQW1COzs7O0FBR3BDLElBQU0sTUFBTSxHQUFHO0FBQ1gsZ0JBQVksRUFBQSxzQkFBQyxRQUFRLEVBQUU7QUFDbkIsZ0JBQVEsUUFBUTtBQUNaLGlCQUFLLEdBQUc7QUFDSixtREFBWTtBQUFBLEFBQ2hCLGlCQUFLLFFBQVE7QUFDVCxtREFBWTtBQUFBLEFBQ2hCLGlCQUFLLFFBQVE7QUFDVCxtREFBWTtBQUFBLEFBQ2hCO0FBQ0ksbURBQVc7QUFBQSxTQUNsQjtLQUNKO0NBQ0osQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL3NyYy9hcHBcIjtcblxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEFwcCk7XG5cblJlYWN0LnJlbmRlcihcbiAgICBDb21wb25lbnQod2luZG93LnByb3BzKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGcm9tOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2Nvb2tpZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIERlYWwgd2l0aCBOb2RlLCBhcyB0aGVyZSBpcyBubyBgZG9jdW1lbnRgIGluIE5vZGVcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0Q29va2llU3RvcmUgPSBmdW5jdGlvbiBnZXRDb29raWVTdG9yZSgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xuICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29raWVTdG9yZToge30sXG4gICAgICAgICAgICBjb29raWU6IHtcbiAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKHNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU3RvcmVbc0tleV07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0oc0tleSwgc1ZhbHVlLCB2RW5kLCBzUGF0aCwgc0RvbWFpbiwgYlNlY3VyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVN0b3JlW3NLZXldID0gc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKHNLZXksIHNQYXRoLCBzRG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvb2tpZVN0b3JlW3NLZXldO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBoYXNJdGVtOiBmdW5jdGlvbiBoYXNJdGVtKHNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU3RvcmVbc0tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY29va2llU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb2tpZVN0b3JlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlDb2xsZWN0aW9uLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5Q29sbGVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcblxudmFyIGNvb2tpZXMgPSB7XG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShzS2V5KSB7XG4gICAgICAgIGlmICghc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChnZXRDb29raWVTdG9yZSgpLmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzooPzpefC4qOylcXFxccypcIiArIGVuY29kZVVSSUNvbXBvbmVudChzS2V5KS5yZXBsYWNlKC9bXFwtXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiXFxcXHMqXFxcXD1cXFxccyooW147XSopLiokKXxeLiokXCIpLCBcIiQxXCIpKSB8fCBudWxsO1xuICAgIH0sXG5cbiAgICBzZXRJdGVtOiBmdW5jdGlvbiBzZXRJdGVtKHNLZXksIHNWYWx1ZSwgdkVuZCwgc1BhdGgsIHNEb21haW4sIGJTZWN1cmUpIHtcbiAgICAgICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXhcXC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNFeHBpcmVzID0gXCJcIjtcbiAgICAgICAgaWYgKHZFbmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodkVuZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IHZFbmQgPT09IEluZmluaXR5ID8gXCI7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRcIiA6IFwiOyBtYXgtYWdlPVwiICsgdkVuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGU6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldENvb2tpZVN0b3JlKCkuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc1ZhbHVlKSArIHNFeHBpcmVzICsgKHNEb21haW4gPyBcIjsgZG9tYWluPVwiICsgc0RvbWFpbiA6IFwiXCIpICsgKHNQYXRoID8gXCI7IHBhdGg9XCIgKyBzUGF0aCA6IFwiXCIpICsgKGJTZWN1cmUgPyBcIjsgc2VjdXJlXCIgOiBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0l0ZW0oc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDb29raWVTdG9yZSgpLmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiICsgKHNEb21haW4gPyBcIjsgZG9tYWluPVwiICsgc0RvbWFpbiA6IFwiXCIpICsgKHNQYXRoID8gXCI7IHBhdGg9XCIgKyBzUGF0aCA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaGFzSXRlbTogZnVuY3Rpb24gaGFzSXRlbShzS2V5KSB7XG4gICAgICAgIGlmICghc0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86Xnw7XFxcXHMqKVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVwiKS50ZXN0KGdldENvb2tpZVN0b3JlKCkuY29va2llKTtcbiAgICB9LFxuXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgdmFyIGFLZXlzID0gZ2V0Q29va2llU3RvcmUoKS5jb29raWUucmVwbGFjZSgvKCg/Ol58XFxzKjspW15cXD1dKykoPz07fCQpfF5cXHMqfFxccyooPzpcXD1bXjtdKik/KD86XFwxfCQpL2csIFwiXCIpLnNwbGl0KC9cXHMqKD86XFw9W147XSopPztcXHMqLyk7XG4gICAgICAgIGZvciAodmFyIG5MZW4gPSBhS2V5cy5sZW5ndGgsIG5JZHggPSAwOyBuSWR4IDwgbkxlbjsgbklkeCsrKSB7XG4gICAgICAgICAgICBhS2V5c1tuSWR4XSA9IGRlY29kZVVSSUNvbXBvbmVudChhS2V5c1tuSWR4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFLZXlzO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuY29va2llcyA9IGNvb2tpZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gICAgLy8gRnJvbSBodHRwczovL2RvY3MuZGphbmdvcHJvamVjdC5jb20vZW4vMS43L3JlZi9jb250cmliL2NzcmYvXG4gICAgdmFyIGNvb2tpZVZhbHVlID0gbnVsbCxcbiAgICAgICAgY29va2llcyxcbiAgICAgICAgaSxcbiAgICAgICAgY29va2llO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSBcIlwiKSB7XG4gICAgICAgIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29va2llID0gY29va2llc1tpXS50cmltKCk7IC8vIERvZXNuJ3Qgd29yayBpbiBhbGwgYnJvd3NlcnNcbiAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IG5hbWUgKyBcIj1cIikge1xuICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xufVxuXG52YXIgZXh0cmFIZWFkZXJzID0ge307XG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XG4gICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1szXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgLy9pZiAodXJsLmluZGV4T2YoXCI/Zm9ybWF0PWpzb25cIikgPT0gLTEgJiYgdXJsLmluZGV4T2YoXCImZm9ybWF0PWpzb25cIikgPT0gLTEpIHtcbiAgICAgICAgLy8gICAgdXJsICs9IFwiP2Zvcm1hdD1qc29uXCI7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgQ1NSRiB0b2tlbnMgaWYgd2UgYXJlIHVzaW5nIHRoaXMgYXNcbiAgICAgICAgLy8gYSBwdWJsaWMgQVBJIGZvciBub3dcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIlgtQ1NSRlRva2VuXCIsIGdldENvb2tpZShcImNzcmZ0b2tlblwiKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge31cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZSBjb250ZW50IHRweWUgaXMgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0XG4gICAgICAgIGlmIChjb250ZW50VHlwZSAhPT0gXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpIHtcbiAgICAgICAgICAgIGlmIChyZXEub3ZlcnJpZGVNaW1lVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVxLm92ZXJyaWRlTWltZVR5cGUoY29udGVudFR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBjb250ZW50VHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihrZXksIGV4dHJhSGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gZG9uZSBwcm9jZXNzaW5nIGRhdGFcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPD0gMjk5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIganNvbkRhdGEgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbkRhdGEpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgICAgIHJlcS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcS5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciByZXN0ID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvblwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIFwiR0VUXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIlBPU1RcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIlBVVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBhdGNoOiBmdW5jdGlvbiBwYXRjaCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIlBBVENIXCIsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgXCJkZWxldGVcIjogZnVuY3Rpb24gX2RlbGV0ZSh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIkRFTEVURVwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHNldEFkZGl0aW9uYWxIZWFkZXJzOiBmdW5jdGlvbiBzZXRBZGRpdGlvbmFsSGVhZGVycyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGV4dHJhSGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSxcblxuICAgIHJlbW92ZUhlYWRlcjogZnVuY3Rpb24gcmVtb3ZlSGVhZGVyKGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIGV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgZGVsZXRlIGV4dHJhSGVhZGVyc1trZXldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldEhlYWRlcnM6IGZ1bmN0aW9uIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiBleHRyYUhlYWRlcnM7XG4gICAgfVxufTtcblxuZXhwb3J0cy5yZXN0ID0gcmVzdDtcblxuLy8gVGhpcyBpcyBhIGJpdCBvZiBhIGhhY2siLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHN1YnNjcmliZXJzID0ge307XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBHZXQgc3Vic2NyaWJlcnMgZm9yIGFuIGFjdGlvblxuICogb3IgYW4gZW1wdHkgbGlzdFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBnZXRTdWJzY3JpYmVycyhhY3Rpb24pIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlcnNbYWN0aW9uXSB8fCBbXTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN1YnNjcmliZSBhIGZ1bmN0aW9uIHRvIGFuIGFjdGlvbi5cbiAqIEl0J3Mgc2FmZSB0byBzdWJzY3JpYmUgbXVsdGlwbGUgdGltZXNcbiAqIGFzIHRoZSBzdWJzY3JpYmVyIGlzIG9ubHkgYWRkZWQgb25jZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBzdWJzY3JpYmUoYWN0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlcnNbYWN0aW9uXSA9IHN1YnNjcmliZXJzW2FjdGlvbl0gfHwgW107XG4gICAgdmFyIHN1YnMgPSBnZXRTdWJzY3JpYmVycyhhY3Rpb24pLFxuICAgICAgICBpID0gdW5kZWZpbmVkO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHN1YnNbaV0gPT09IHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YnNjcmliZXJzW2FjdGlvbl0ucHVzaChzdWJzY3JpYmVyKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFVuc3Vic2NyaWJlIGEgZnVuY3Rpb24gZnJvbSBhbiBhY3Rpb24uXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlKGFjdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHZhciBzdWJzID0gX3N1YnNjcmliZXJzW2FjdGlvbl0sXG4gICAgICAgIGk7XG4gICAgaWYgKHN1YnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHN1YnNbaV0gPT09IHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIF9zdWJzY3JpYmVyc1thY3Rpb25dLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfc3Vic2NyaWJlcnNbYWN0aW9uXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIF9zdWJzY3JpYmVyc1thY3Rpb25dO1xuICAgIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1Ymxpc2ggYW4gYWN0aW9uIHRvIGFsbCBzdWJzY3JpYmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBwdWJsaXNoKGFjdGlvbikge1xuICAgIHZhciBhcmdzID0gW10sXG4gICAgICAgIGkgPSB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3VicyA9IGdldFN1YnNjcmliZXJzKGFjdGlvbik7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3Vic1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydHMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuZXhwb3J0cy51bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuZXhwb3J0cy5wdWJsaXNoID0gcHVibGlzaDsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZvcm1hdCBhIHVybCBiYXNlZCBvbiBhcmdzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXRVcmwgPSBmb3JtYXRVcmw7XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmwsIGFyZ3MpIHtcbiAgICB2YXIgcmVzdWx0ID0gdXJsO1xuXG4gICAgaWYgKGFyZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZvciAodmFyIGsgaW4gYXJncykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcIjxcIiArIGsgKyBcIj5cIiwgYXJnc1trXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Jlc3QgPSByZXF1aXJlKFwiLi9yZXN0XCIpO1xuXG52YXIgX3VybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG52YXIgX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIgPSByZXF1aXJlKFwiLi9zdWJzY3JpcHRpb25zL3B1Ymxpc2hlclwiKTtcblxudmFyIF9jb29raWVzID0gcmVxdWlyZShcIi4vY29va2llc1wiKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gICAgcmVzdDogX3Jlc3QucmVzdCxcbiAgICBmb3JtYXRVcmw6IF91cmxzLmZvcm1hdFVybCxcbiAgICBzdWJzY3JpYmU6IF9zdWJzY3JpcHRpb25zUHVibGlzaGVyLnN1YnNjcmliZSxcbiAgICB1bnN1YnNjcmliZTogX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIudW5zdWJzY3JpYmUsXG4gICAgcHVibGlzaDogX3N1YnNjcmlwdGlvbnNQdWJsaXNoZXIucHVibGlzaCxcbiAgICBjb29raWVzOiBfY29va2llcy5jb29raWVzXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJvdXRlcnMgZnJvbSBcIi4vcm91dGVyc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51cGRhdGVVcmwgPSB0aGlzLnVwZGF0ZVVybC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5pdGlhbCBwYXRoIG5hbWUgZnJvbSB0aGUgc2VydmVyIHNpZGUgcmVxdWVzdFxuICAgICAgICB0aGlzLnN0YXRlID0ge3BhdGhuYW1lOiBwcm9wcy5fcmVxdWVzdC5wYXRoIHx8ICcvJ307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVybCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrIChlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGUudGFyZ2V0LnBhdGhuYW1lICsgZS50YXJnZXQuc2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKGUudGFyZ2V0LnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVybCAocGF0aG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aG5hbWV9KTtcbiAgICB9XG5cbiAgICBnZXRQYXRoTmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlcnMuZ2V0Q29tcG9uZW50KHRoaXMuZ2V0UGF0aE5hbWUoKSksIHtkYXRhOiB0aGlzLnByb3BzLCBoYW5kbGVDbGljazogdGhpcy5oYW5kbGVDbGlja30pXG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpbGRqcyBmcm9tICd3aWxkanMnXG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcztcbiAgICAgICAgdGhpcy5jbGljayA9IHRoaXMuY2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5kYXRhX2xpc3QgPT09IFwiXCIgfHwgdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aWxkanMucmVzdC5nZXQoJy9hcGkvbGlzdC8nKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHtkYXRhX2xpc3Q6IHJlc3BvbnNlfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGljayhwYWdlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuc3RhdGUuZGF0YS5kYXRhX2xpc3QuYXBpX3VybDtcbiAgICAgICAgaWYgKHBhZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuc3RhdGUuZGF0YS5kYXRhX2xpc3QuYXBpX3VybCArIHBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB3aWxkanMucmVzdC5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge2RhdGFfbGlzdDogcmVzcG9uc2V9fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBlLnRhcmdldC5wYXRobmFtZSArIGUudGFyZ2V0LnNlYXJjaCk7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5oYW5kbGVDbGljayhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gdGhpcy5zdGF0ZS5kYXRhLmRhdGFfbGlzdCB8fCB7cmVzdWx0czogW119O1xuXG4gICAgICAgIGxldCBuZXh0ID0gXCJcIjtcbiAgICAgICAgbGV0IHByZXYgPSBcIlwiO1xuXG4gICAgICAgIGlmIChkYXRhTGlzdC5uZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gPGEgaHJlZj17ZGF0YUxpc3QubmV4dH0gb25DbGljaz17dGhpcy5jbGljay5iaW5kKHRoaXMsIGRhdGFMaXN0Lm5leHQpfT5OZXh0PC9hPlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFMaXN0LnByZXZpb3VzKSB7XG4gICAgICAgICAgICBwcmV2ID0gPGEgaHJlZj17ZGF0YUxpc3QucHJldmlvdXN9IG9uQ2xpY2s9e3RoaXMuY2xpY2suYmluZCh0aGlzLCBkYXRhTGlzdC5wcmV2aW91cyl9PlByZXY8L2E+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBkYXRhPC9oMj5cbiAgICAgICAgICAgICAgICA8TmF2IGhhbmRsZUNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgICAgIHtwcmV2fVxuICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3wmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAge25leHR9XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YUxpc3QucmVzdWx0cy5tYXAoIChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17XCJwLVwiICsgaX0+e2RhdGEubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpbGRqcyBmcm9tIFwid2lsZGpzXCI7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS52YWx1ZTtcbiAgICAgICAgd2lsZGpzLnJlc3QucG9zdCgnL2FwaS9mb3JtLycsIHt2YWx1ZTogdmFsfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IHJlc3BvbnNlLnZhbHVlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgICA8aDE+Rm9ybTwvaDE+XG4gICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9vXCIgaWQ9XCJmb29cIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPE5hdiBoYW5kbGVDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGhvbWUgdmlldzwvcD5cbiAgICAgICAgICAgICAgICA8TmF2IGhhbmRsZUNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9mb3JtL1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PkZvcm08L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kYXRhL1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PkRhdGE8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEnXG5cblxuY29uc3Qgcm91dGVyID0ge1xuICAgIGdldENvbXBvbmVudChwYXRobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZTtcbiAgICAgICAgICAgIGNhc2UgJy9mb3JtLyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgICAgICAgICBjYXNlICcvZGF0YS8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWVcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
