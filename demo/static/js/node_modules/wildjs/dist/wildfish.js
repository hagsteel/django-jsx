(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.wildfish = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _srcWildjs = require("./src/wildjs");

var _srcWildjs2 = _interopRequireDefault(_srcWildjs);

exports["default"] = _srcWildjs2["default"];
module.exports = exports["default"];

},{"./src/wildjs":6}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"./cookies":2,"./rest":3,"./subscriptions/publisher":4,"./urls":5}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvTm9kZS93aWxkanMvaW5kZXguanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvTm9kZS93aWxkanMvc3JjL2Nvb2tpZXMuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvTm9kZS93aWxkanMvc3JjL3Jlc3QuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvTm9kZS93aWxkanMvc3JjL3N1YnNjcmlwdGlvbnMvcHVibGlzaGVyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL05vZGUvd2lsZGpzL3NyYy91cmxzLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL05vZGUvd2lsZGpzL3NyYy93aWxkanMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozt5QkNBbUIsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09qQyxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFjLEdBQVM7QUFDekIsUUFBSTtBQUNBLGVBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUMxQixDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ1QsZUFBTztBQUNILHVCQUFXLEVBQUUsRUFBRTtBQUNmLGtCQUFNLEVBQUU7QUFDSix1QkFBTyxFQUFBLGlCQUFDLElBQUksRUFBRTtBQUNWLDJCQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pDOztBQUVELHVCQUFPLEVBQUEsaUJBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDakQsd0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUNuQzs7QUFFRCwwQkFBVSxFQUFBLG9CQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQzdC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QUksQ0FBQyxDQUFDO0tBQzdCO0NBQ0o7O1FBSUcsU0FBUyxHQUFULFNBQVM7UUFDVCxXQUFXLEdBQVgsV0FBVztRQUNYLE9BQU8sR0FBUCxPQUFPOzs7Ozs7Ozs7OztRQzNFSyxTQUFTLEdBQVQsU0FBUzs7QUFBbEIsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNqQyxRQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRWpCLFFBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUNwQixlQUFPLE1BQU0sQ0FBQztLQUNqQjs7QUFFRCxTQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtBQUNoQixjQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRDs7QUFFRCxXQUFPLE1BQU0sQ0FBQztDQUNqQjs7Ozs7Ozs7O29CQ2ZrQixRQUFROztvQkFDSCxRQUFROztzQ0FDYywyQkFBMkI7O3VCQUNuRCxXQUFXOztxQkFHbEI7QUFDWCxRQUFJLFFBUEEsSUFBSSxBQU9KO0FBQ0osYUFBUyxRQVBMLFNBQVMsQUFPSjtBQUNULGFBQVMsMEJBUEwsU0FBUyxBQU9KO0FBQ1QsZUFBVywwQkFSSSxXQUFXLEFBUWY7QUFDWCxXQUFPLDBCQVRxQixPQUFPLEFBUzVCO0FBQ1AsV0FBTyxXQVRILE9BQU8sQUFTSjtDQUNWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB3aWxkanMgZnJvbSBcIi4vc3JjL3dpbGRqc1wiO1xuZXhwb3J0IGRlZmF1bHQgd2lsZGpzO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZyb206XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvY29va2llXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBEZWFsIHdpdGggTm9kZSwgYXMgdGhlcmUgaXMgbm8gYGRvY3VtZW50YCBpbiBOb2RlXG5jb25zdCBnZXRDb29raWVTdG9yZSA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xuICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29raWVTdG9yZToge30sXG4gICAgICAgICAgICBjb29raWU6IHtcbiAgICAgICAgICAgICAgICBnZXRJdGVtKHNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU3RvcmVbc0tleV07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldEl0ZW0oc0tleSwgc1ZhbHVlLCB2RW5kLCBzUGF0aCwgc0RvbWFpbiwgYlNlY3VyZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVN0b3JlW3NLZXldID0gc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKHNLZXksIHNQYXRoLCBzRG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvb2tpZVN0b3JlW3NLZXldO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBoYXNJdGVtKHNLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU3RvcmVbc0tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAga2V5cygpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleUNvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29va2llU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb2tpZVN0b3JlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlDb2xsZWN0aW9uLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5Q29sbGVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuXG5jb25zdCBjb29raWVzID0ge1xuICAgIGdldEl0ZW0oc0tleSkge1xuICAgICAgICBpZiAoIXNLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZ2V0Q29va2llU3RvcmUoKS5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86KD86XnwuKjspXFxcXHMqXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XFxcXHMqKFteO10qKS4qJCl8Xi4qJFwiKSwgXCIkMVwiKSkgfHwgbnVsbDtcbiAgICB9LFxuXG4gICAgc2V0SXRlbShzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgICAgIGlmICghc0tleSB8fCAvXig/OmV4cGlyZXN8bWF4XFwtYWdlfHBhdGh8ZG9tYWlufHNlY3VyZSkkL2kudGVzdChzS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzRXhwaXJlcyA9IFwiXCI7XG4gICAgICAgIGlmICh2RW5kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZFbmQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgc0V4cGlyZXMgPSB2RW5kID09PSBJbmZpbml0eSA/IFwiOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UXCIgOiBcIjsgbWF4LWFnZT1cIiArIHZFbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgdkVuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgdkVuZC50b1VUQ1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRDb29raWVTdG9yZSgpLmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNWYWx1ZSkgKyBzRXhwaXJlcyArIChzRG9tYWluID8gXCI7IGRvbWFpbj1cIiArIHNEb21haW4gOiBcIlwiKSArIChzUGF0aCA/IFwiOyBwYXRoPVwiICsgc1BhdGggOiBcIlwiKSArIChiU2VjdXJlID8gXCI7IHNlY3VyZVwiIDogXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiAoc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0l0ZW0oc0tleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDb29raWVTdG9yZSgpLmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiICsgKHNEb21haW4gPyBcIjsgZG9tYWluPVwiICsgc0RvbWFpbiA6IFwiXCIpICsgKHNQYXRoID8gXCI7IHBhdGg9XCIgKyBzUGF0aCA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaGFzSXRlbTogZnVuY3Rpb24gKHNLZXkpIHtcbiAgICAgICAgaWYgKCFzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKFwiKD86Xnw7XFxcXHMqKVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVwiKSkudGVzdChnZXRDb29raWVTdG9yZSgpLmNvb2tpZSk7XG4gICAgfSxcblxuICAgIGtleXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGFLZXlzID0gZ2V0Q29va2llU3RvcmUoKS5jb29raWUucmVwbGFjZSgvKCg/Ol58XFxzKjspW15cXD1dKykoPz07fCQpfF5cXHMqfFxccyooPzpcXD1bXjtdKik/KD86XFwxfCQpL2csIFwiXCIpLnNwbGl0KC9cXHMqKD86XFw9W147XSopPztcXHMqLyk7XG4gICAgICAgIGZvciAodmFyIG5MZW4gPSBhS2V5cy5sZW5ndGgsIG5JZHggPSAwOyBuSWR4IDwgbkxlbjsgbklkeCsrKSB7XG4gICAgICAgICAgICBhS2V5c1tuSWR4XSA9IGRlY29kZVVSSUNvbXBvbmVudChhS2V5c1tuSWR4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFLZXlzO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IHtjb29raWVzfVxuIiwiLy9mdW5jdGlvbiBnZXRDb29raWUgKG5hbWUpIHtcbi8vICAgIC8vIEZyb20gaHR0cHM6Ly9kb2NzLmRqYW5nb3Byb2plY3QuY29tL2VuLzEuNy9yZWYvY29udHJpYi9jc3JmL1xuLy8gICAgdmFyIGNvb2tpZVZhbHVlID0gbnVsbCwgY29va2llcywgaSwgY29va2llO1xuLy8gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09IFwiXCIpIHtcbi8vICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbi8vICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkgKz0gMSkge1xuLy8gICAgICAgICAgICBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTsgLy8gRG9lc24ndCB3b3JrIGluIGFsbCBicm93c2Vyc1xuLy8gICAgICAgICAgICAvLyBEb2VzIHRoaXMgY29va2llIHN0cmluZyBiZWdpbiB3aXRoIHRoZSBuYW1lIHdlIHdhbnQ/XG4vLyAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgXCI9XCIpKSB7XG4vLyAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuLy8gICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9XG4vLyAgICB9XG4vLyAgICByZXR1cm4gY29va2llVmFsdWU7XG4vL31cblxuY29uc3QgZXh0cmFIZWFkZXJzID0ge307XG5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3QgKHVybCwgbWV0aG9kLCBkYXRhLCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiP2Zvcm1hdD1qc29uXCIpID09IC0xICYmIHVybC5pbmRleE9mKFwiJmZvcm1hdD1qc29uXCIpID09IC0xKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCI/Zm9ybWF0PWpzb25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgQ1NSRiB0b2tlbnMgaWYgd2UgYXJlIHVzaW5nIHRoaXMgYXNcbiAgICAgICAgLy8gYSBwdWJsaWMgQVBJIGZvciBub3dcbiAgICAgICAgLy9pZiAobWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgICAgIC8vICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgZ2V0Q29va2llKFwiY3NyZnRva2VuXCIpKTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgcmVxLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gICAgICAgIC8vIGlmIHRoZSBjb250ZW50IHRweWUgaXMgbXVsdGlwYXJ0L2Zvcm0tZGF0YSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0XG4gICAgICAgIGlmIChjb250ZW50VHlwZSAhPT0gJ211bHRpcGFydC9mb3JtLWRhdGEnKSB7XG4gICAgICAgICAgICBpZiAocmVxLm92ZXJyaWRlTWltZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcS5vdmVycmlkZU1pbWVUeXBlKGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgY29udGVudFR5cGUpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihrZXksIGV4dHJhSGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gZG9uZSBwcm9jZXNzaW5nIGRhdGFcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPD0gMjk5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uRGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZihjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nKXtcbiAgICAgICAgICAgIHJlcS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcS5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuY29uc3QgcmVzdCA9IHtcbiAgICBnZXQodXJsLCBkYXRhLCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIkdFVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBvc3QodXJsLCBkYXRhLCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIlBPU1RcIiwgZGF0YSwgY29udGVudFR5cGUpO1xuICAgIH0sXG5cbiAgICBwdXQodXJsLCBkYXRhLCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIlBVVFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHBhdGNoKHVybCwgZGF0YSwgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgXCJQQVRDSFwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIFwiZGVsZXRlXCIodXJsLCBkYXRhLCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBcIkRFTEVURVwiLCBkYXRhLCBjb250ZW50VHlwZSk7XG4gICAgfSxcblxuICAgIHNldEFkZGl0aW9uYWxIZWFkZXJzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZXh0cmFIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSGVhZGVyKGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIGV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgZGVsZXRlIGV4dHJhSGVhZGVyc1trZXldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiBleHRyYUhlYWRlcnM7XG4gICAgfVxufTtcblxuXG5leHBvcnQge3Jlc3R9O1xuIiwiY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogR2V0IHN1YnNjcmliZXJzIGZvciBhbiBhY3Rpb25cbiAqIG9yIGFuIGVtcHR5IGxpc3RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZXJzW2FjdGlvbl0gfHwgW107XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN1YnNjcmliZSBhIGZ1bmN0aW9uIHRvIGFuIGFjdGlvbi5cbiAqIEl0J3Mgc2FmZSB0byBzdWJzY3JpYmUgbXVsdGlwbGUgdGltZXNcbiAqIGFzIHRoZSBzdWJzY3JpYmVyIGlzIG9ubHkgYWRkZWQgb25jZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBzdWJzY3JpYmUgKGFjdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXJzW2FjdGlvbl0gPSBzdWJzY3JpYmVyc1thY3Rpb25dIHx8IFtdO1xuICAgIGxldCBzdWJzID0gZ2V0U3Vic2NyaWJlcnMoYWN0aW9uKSxcbiAgICAgICAgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1thY3Rpb25dLnB1c2goc3Vic2NyaWJlcik7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFVuc3Vic2NyaWJlIGEgZnVuY3Rpb24gZnJvbSBhbiBhY3Rpb24uXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlIChhY3Rpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgc3VicyA9IF9zdWJzY3JpYmVyc1thY3Rpb25dLCBpO1xuICAgIGlmIChzdWJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdWJzW2ldID09PSBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBfc3Vic2NyaWJlcnNbYWN0aW9uXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3N1YnNjcmliZXJzW2FjdGlvbl0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBfc3Vic2NyaWJlcnNbYWN0aW9uXTtcbiAgICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1Ymxpc2ggYW4gYWN0aW9uIHRvIGFsbCBzdWJzY3JpYmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBwdWJsaXNoIChhY3Rpb24pIHtcbiAgICBsZXQgYXJncyA9IFtdLFxuICAgICAgICBpO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3VicyA9IGdldFN1YnNjcmliZXJzKGFjdGlvbik7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3Vic1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG59XG5cblxuZXhwb3J0ICB7XG4gICAgc3Vic2NyaWJlLFxuICAgIHVuc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2hcbn07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZvcm1hdCBhIHVybCBiYXNlZCBvbiBhcmdzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybCwgYXJncykge1xuICAgIGxldCByZXN1bHQgPSB1cmw7XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBhcmdzKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFwiPFwiICsgayArIFwiPlwiLCBhcmdzW2tdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHtyZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge2Zvcm1hdFVybH0gZnJvbSBcIi4vdXJsc1wiO1xuaW1wb3J0IHtzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNofSBmcm9tIFwiLi9zdWJzY3JpcHRpb25zL3B1Ymxpc2hlclwiXG5pbXBvcnQge2Nvb2tpZXN9IGZyb20gXCIuL2Nvb2tpZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVzdCxcbiAgICBmb3JtYXRVcmwsXG4gICAgc3Vic2NyaWJlLFxuICAgIHVuc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2gsXG4gICAgY29va2llc1xufTtcbiJdfQ==
