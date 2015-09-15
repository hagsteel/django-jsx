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

},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js":[function(require,module,exports){
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
            _wildjs2["default"].rest.post('/api/', { value: val }).then(function (response) {
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
                )
            );
        }
    }]);

    return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/routers.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _componentsAbout = require("./components/about");

var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

var _componentsHome = require("./components/home");

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsForm = require("./components/form");

var _componentsForm2 = _interopRequireDefault(_componentsForm);

var router = {
    getComponent: function getComponent(pathname) {
        switch (pathname) {
            case "/":
                return _componentsHome2["default"];
            case "/about/":
                return _componentsAbout2["default"];
            case "/form/":
                return _componentsForm2["default"];
            default:
                return _componentsHome2["default"];
        }
    }
};

exports["default"] = router;
module.exports = exports["default"];

},{"./components/about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./components/form":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/form.js","./components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js"}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvbm9kZV9tb2R1bGVzL3dpbGRqcy9kaXN0L3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL25vZGVfbW9kdWxlcy93aWxkanMvZGlzdC93aWxkanMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9mb3JtLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvc3JjL3JvdXRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O3NCQUNULFdBQVc7Ozs7QUFHM0IsSUFBTSxTQUFTLEdBQUcsbUJBQU0sYUFBYSxxQkFBSyxDQUFDOztBQUUzQyxtQkFBTSxNQUFNLENBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7O0FDSEYsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUMsQ0FBQztBQUNILElBQUksY0FBYyxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzNDLFFBQUk7QUFDQSxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDMUIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNULGVBQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDekI7Q0FDSixDQUFDOztBQUVGLElBQUksT0FBTyxHQUFHO0FBQ1YsV0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUM1QixZQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1AsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7QUFDRCxlQUFPLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsR0FBRyw2QkFB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Ozs7OzhCQUNyQixtQkFBbUI7Ozs7OEJBQ25CLG1CQUFtQjs7OztBQUdwQyxJQUFNLE1BQU0sR0FBRztBQUNYLGdCQUFZLEVBQUEsc0JBQUMsUUFBUSxFQUFFO0FBQ25CLGdCQUFRLFFBQVE7QUFDWixpQkFBSyxHQUFHO0FBQ0osbURBQVk7QUFBQSxBQUNoQixpQkFBSyxTQUFTO0FBQ1Ysb0RBQWE7QUFBQSxBQUNqQixpQkFBSyxRQUFRO0FBQ1QsbURBQVk7QUFBQSxBQUNoQjtBQUNJLG1EQUFXO0FBQUEsU0FDbEI7S0FDSjtDQUNKLENBQUM7O3FCQUVhLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9zcmMvYXBwXCI7XG5cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShBcHApO1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgQ29tcG9uZW50KHdpbmRvdy5wcm9wcyksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRnJvbTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9jb29raWVcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBEZWFsIHdpdGggTm9kZSwgYXMgdGhlcmUgaXMgbm8gYGRvY3VtZW50YCBpbiBOb2RlXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldENvb2tpZVN0b3JlID0gZnVuY3Rpb24gZ2V0Q29va2llU3RvcmUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgICByZXR1cm4geyBjb29raWU6IFwiXCIgfTtcbiAgICB9XG59O1xuXG52YXIgY29va2llcyA9IHtcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGdldENvb2tpZVN0b3JlKCkuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Oig/Ol58Lio7KVxcXFxzKlwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRcIiksIFwiJDFcIikpIHx8IG51bGw7XG4gICAgfSxcblxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0oc0tleSwgc1ZhbHVlLCB2RW5kLCBzUGF0aCwgc0RvbWFpbiwgYlNlY3VyZSkge1xuICAgICAgICBpZiAoIXNLZXkgfHwgL14oPzpleHBpcmVzfG1heFxcLWFnZXxwYXRofGRvbWFpbnxzZWN1cmUpJC9pLnRlc3Qoc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc0V4cGlyZXMgPSBcIlwiO1xuICAgICAgICBpZiAodkVuZCkge1xuICAgICAgICAgICAgc3dpdGNoICh2RW5kLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyBcIjsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVFwiIDogXCI7IG1heC1hZ2U9XCIgKyB2RW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQudG9VVENTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q29va2llU3RvcmUoKS5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShzS2V5LCBzUGF0aCwgc0RvbWFpbikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzSXRlbShzS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGdldENvb2tpZVN0b3JlKCkuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBoYXNJdGVtOiBmdW5jdGlvbiBoYXNJdGVtKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpefDtcXFxccyopXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XCIpLnRlc3QoZ2V0Q29va2llU3RvcmUoKS5jb29raWUpO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICB2YXIgYUtleXMgPSBnZXRDb29raWVTdG9yZSgpLmNvb2tpZS5yZXBsYWNlKC8oKD86XnxcXHMqOylbXlxcPV0rKSg/PTt8JCl8Xlxccyp8XFxzKig/OlxcPVteO10qKT8oPzpcXDF8JCkvZywgXCJcIikuc3BsaXQoL1xccyooPzpcXD1bXjtdKik/O1xccyovKTtcbiAgICAgICAgZm9yICh2YXIgbkxlbiA9IGFLZXlzLmxlbmd0aCwgbklkeCA9IDA7IG5JZHggPCBuTGVuOyBuSWR4KyspIHtcbiAgICAgICAgICAgIGFLZXlzW25JZHhdID0gZGVjb2RlVVJJQ29tcG9uZW50KGFLZXlzW25JZHhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUtleXM7XG4gICAgfVxufTtcblxuZXhwb3J0cy5jb29raWVzID0gY29va2llczsiLCIvL2Z1bmN0aW9uIGdldENvb2tpZSAobmFtZSkge1xuLy8gICAgLy8gRnJvbSBodHRwczovL2RvY3MuZGphbmdvcHJvamVjdC5jb20vZW4vMS43L3JlZi9jb250cmliL2NzcmYvXG4vLyAgICB2YXIgY29va2llVmFsdWUgPSBudWxsLCBjb29raWVzLCBpLCBjb29raWU7XG4vLyAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gXCJcIikge1xuLy8gICAgICAgIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuLy8gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpOyAvLyBEb2Vzbid0IHdvcmsgaW4gYWxsIGJyb3dzZXJzXG4vLyAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbi8vICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gKG5hbWUgKyBcIj1cIikpIHtcbi8vICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4vLyAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH1cbi8vICAgIH1cbi8vICAgIHJldHVybiBjb29raWVWYWx1ZTtcbi8vfVxuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZXh0cmFIZWFkZXJzID0ge307XG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XG4gICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogYXJndW1lbnRzWzNdO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICB1cmwgKz0gJz9mb3JtYXQ9anNvbic7XG5cbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgQ1NSRiB0b2tlbnMgaWYgd2UgYXJlIHVzaW5nIHRoaXMgYXNcbiAgICAgICAgLy8gYSBwdWJsaWMgQVBJIGZvciBub3dcbiAgICAgICAgLy9pZiAobWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICAgIC8vICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgZ2V0Q29va2llKFwiY3NyZnRva2VuXCIpKTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgcmVxLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gICAgICAgIC8vIGlmIHRoZSBjb250ZW50IHRweWUgaXMgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0XG4gICAgICAgIGlmIChjb250ZW50VHlwZSAhPT0gJ211bHRpcGFydC9mb3JtLWRhdGEnKSB7XG4gICAgICAgICAgICBpZiAocmVxLm92ZXJyaWRlTWltZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcS5vdmVycmlkZU1pbWVUeXBlKGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBleHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgZXh0cmFIZWFkZXJzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBkb25lIHByb2Nlc3NpbmcgZGF0YVxuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uRGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgICAgICAgIHJlcS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcS5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciByZXN0ID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KHVybCwgZGF0YSkge1xuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAnYXBwbGljYXRpb24vanNvbicgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsICdQT1NUJywgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsICdQVVQnLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBhdGNoOiBmdW5jdGlvbiBwYXRjaCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogYXJndW1lbnRzWzJdO1xuXG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsICdQQVRDSCcsIGRhdGEsIGNvbnRlbnRUeXBlKTtcbiAgICB9LFxuXG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIF9kZWxldGUodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICdhcHBsaWNhdGlvbi9qc29uJyA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCAnREVMRVRFJywgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBzZXRBZGRpdGlvbmFsSGVhZGVyczogZnVuY3Rpb24gc2V0QWRkaXRpb25hbEhlYWRlcnMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBleHRyYUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0sXG5cbiAgICByZW1vdmVIZWFkZXI6IGZ1bmN0aW9uIHJlbW92ZUhlYWRlcihrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiBleHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBleHRyYUhlYWRlcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRIZWFkZXJzOiBmdW5jdGlvbiBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gZXh0cmFIZWFkZXJzO1xuICAgIH1cbn07XG5cbmV4cG9ydHMucmVzdCA9IHJlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdWJzY3JpYmVycyA9IHt9O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogR2V0IHN1YnNjcmliZXJzIGZvciBhbiBhY3Rpb25cbiAqIG9yIGFuIGVtcHR5IGxpc3RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZXJzW2FjdGlvbl0gfHwgW107XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBTdWJzY3JpYmUgYSBmdW5jdGlvbiB0byBhbiBhY3Rpb24uXG4gKiBJdCdzIHNhZmUgdG8gc3Vic2NyaWJlIG11bHRpcGxlIHRpbWVzXG4gKiBhcyB0aGUgc3Vic2NyaWJlciBpcyBvbmx5IGFkZGVkIG9uY2VcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gc3Vic2NyaWJlKGFjdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXJzW2FjdGlvbl0gPSBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xuICAgIHZhciBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSxcbiAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dLnB1c2goc3Vic2NyaWJlcik7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBVbnN1YnNjcmliZSBhIGZ1bmN0aW9uIGZyb20gYW4gYWN0aW9uLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiB1bnN1YnNjcmliZShhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgc3VicyA9IF9zdWJzY3JpYmVyc1thY3Rpb25dLFxuICAgICAgICBpO1xuICAgIGlmIChzdWJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBfc3Vic2NyaWJlcnNbYWN0aW9uXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3N1YnNjcmliZXJzW2FjdGlvbl0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBfc3Vic2NyaWJlcnNbYWN0aW9uXTtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBQdWJsaXNoIGFuIGFjdGlvbiB0byBhbGwgc3Vic2NyaWJlcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gcHVibGlzaChhY3Rpb24pIHtcbiAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICBpID0gdW5kZWZpbmVkO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN1YnMgPSBnZXRTdWJzY3JpYmVycyhhY3Rpb24pO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN1YnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxufVxuXG5leHBvcnRzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbmV4cG9ydHMudW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbmV4cG9ydHMucHVibGlzaCA9IHB1Ymxpc2g7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGb3JtYXQgYSB1cmwgYmFzZWQgb24gYXJnc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0VXJsID0gZm9ybWF0VXJsO1xuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsLCBhcmdzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHVybDtcblxuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrIGluIGFyZ3MpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXCI8XCIgKyBrICsgXCI+XCIsIGFyZ3Nba10pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZXN0ID0gcmVxdWlyZShcIi4vcmVzdFwiKTtcblxudmFyIF91cmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxudmFyIF9zdWJzY3JpcHRpb25zUHVibGlzaGVyID0gcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9wdWJsaXNoZXJcIik7XG5cbnZhciBfY29va2llcyA9IHJlcXVpcmUoXCIuL2Nvb2tpZXNcIik7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICAgIHJlc3Q6IF9yZXN0LnJlc3QsXG4gICAgZm9ybWF0VXJsOiBfdXJscy5mb3JtYXRVcmwsXG4gICAgc3Vic2NyaWJlOiBfc3Vic2NyaXB0aW9uc1B1Ymxpc2hlci5zdWJzY3JpYmUsXG4gICAgdW5zdWJzY3JpYmU6IF9zdWJzY3JpcHRpb25zUHVibGlzaGVyLnVuc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2g6IF9zdWJzY3JpcHRpb25zUHVibGlzaGVyLnB1Ymxpc2gsXG4gICAgY29va2llczogX2Nvb2tpZXMuY29va2llc1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByb3V0ZXJzIGZyb20gXCIuL3JvdXRlcnNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lIHx8ICcvJ307XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZS50YXJnZXQucGF0aG5hbWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybChlLnRhcmdldC5wYXRobmFtZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXJsKHBhdGhuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGhuYW1lOiBwYXRobmFtZX0pO1xuICAgIH1cblxuICAgIGdldFBhdGhOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRobmFtZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlcnMuZ2V0Q29tcG9uZW50KHRoaXMuZ2V0UGF0aE5hbWUoKSksIHtkYXRhOiB0aGlzLnByb3BzLCBoYW5kbGVDbGljazogdGhpcy5oYW5kbGVDbGlja30pXG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuZGF0YSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkFib3V0PC9oMj5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkhvbWU8L2E+PC9wPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtcInAtXCIgKyBpfT57ZH08L3A+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2lsZGpzIGZyb20gXCJ3aWxkanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG4gICAgICAgIHdpbGRqcy5yZXN0LnBvc3QoJy9hcGkvJywge3ZhbHVlOiB2YWx9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogcmVzcG9uc2UudmFsdWV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvb1wiIGlkPVwiZm9vXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvYWJvdXQvXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+QWJvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIvZm9ybS9cIiBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfT5Gb3JtPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBob21lIHZpZXc8L3A+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGF0YS5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL2Fib3V0L1wiIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9PkFib3V0PC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL2Zvcm0vXCIgb25DbGljaz17dGhpcy5zdGF0ZS5oYW5kbGVDbGlja30+Rm9ybTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0XCJcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZVwiXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1cIlxuXG5cbmNvbnN0IHJvdXRlciA9IHtcbiAgICBnZXRDb21wb25lbnQocGF0aG5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChwYXRobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSG9tZTtcbiAgICAgICAgICAgIGNhc2UgXCIvYWJvdXQvXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFib3V0O1xuICAgICAgICAgICAgY2FzZSBcIi9mb3JtL1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEhvbWVcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
