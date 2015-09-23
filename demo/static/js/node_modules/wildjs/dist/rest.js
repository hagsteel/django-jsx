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