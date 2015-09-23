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