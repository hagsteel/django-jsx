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