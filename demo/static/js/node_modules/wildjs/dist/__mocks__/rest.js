"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requests = [];

var FakeRequest = (function () {
    function FakeRequest(onSuccess, onFail) {
        _classCallCheck(this, FakeRequest);

        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.id = requests.length + 1;
    }

    _createClass(FakeRequest, [{
        key: "success",
        value: function success(data) {
            this.onSuccess(data);
        }
    }, {
        key: "fail",
        value: function fail(errors) {
            this.onFail(errors);
        }
    }]);

    return FakeRequest;
})();

function makeFakeRequest(url, data) {
    return new Promise(function (resolve, reject) {
        var request = new FakeRequest(function (response) {
            resolve(response);
        }, reject);
        request.data = data;
        requests.push(request);
    });
}

var mockRest = {
    get: function get(url, data) {
        return makeFakeRequest(url, data);
    },

    post: function post(url, data) {
        return makeFakeRequest(url, data);
    },

    put: function put(url, data) {
        return makeFakeRequest(url, data);
    },

    patch: function patch(url, data) {
        return makeFakeRequest(url, data);
    },

    "delete": function _delete(url, data) {
        return makeFakeRequest(url, data);
    },

    success: function success(data) {
        console.log("SUCCESSING");
        console.log(requests[0].id);
        requests[0].success(data);
    },

    fail: function fail(errors) {
        requests[0].fail(errors);
    },

    getstuff: function getstuff() {
        return requests;
    }
};

exports.mockRest = mockRest;