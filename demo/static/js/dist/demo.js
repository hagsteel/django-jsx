(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcApp = require("./src/app");

var _srcApp2 = _interopRequireDefault(_srcApp);

var Component = _react2["default"].createFactory(_srcApp2["default"]);

_react2["default"].render(Component(window.props), document.getElementById("app"));

},{"./src/app":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false;
  var doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/History.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PropTypes = require('./PropTypes');

var History = {

  contextTypes: { history: _PropTypes.history },

  componentWillMount: function componentWillMount() {
    this.history = this.context.history;
  }

};

exports['default'] = History;
module.exports = exports['default'];
},{"./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/IndexRoute.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
var IndexRoute = _react2['default'].createClass({
  displayName: 'IndexRoute',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      if (parentRoute) {
        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
      } else {
        _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config');
      }
    }

  },

  propTypes: {
    path: _PropTypes.falsy,
    ignoreScrollBehavior: bool,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponents: func
  },

  render: function render() {
    _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered');
  }

});

exports['default'] = IndexRoute;
module.exports = exports['default'];
},{"./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","react":"react","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Lifecycle.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var object = _react2['default'].PropTypes.object;

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method
 * to a component that may be used to cancel a transition or prompt
 * the user for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * routerWillLeave does not receive a location object during the beforeunload
 * event in web browsers (assuming you're using the useBeforeUnload history
 * enhancer). In this case, it is not possible for us to know the location
 * we're transitioning to so routerWillLeave must return a prompt message to
 * prevent the user from closing the tab.
 */
var Lifecycle = {

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  _getRoute: function _getRoute() {
    var route = this.props.route || this.context.route;

    _invariant2['default'](route, 'The Lifecycle mixin needs to be used either on 1) a <Route component> or ' + '2) a descendant of a <Route component> that uses the RouteContext mixin');

    return route;
  },

  componentWillMount: function componentWillMount() {
    _invariant2['default'](this.routerWillLeave, 'The Lifecycle mixin requires you to define a routerWillLeave method');

    this.context.history.registerRouteHook(this._getRoute(), this.routerWillLeave);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.context.history.unregisterRouteHook(this._getRoute(), this.routerWillLeave);
  }

};

exports['default'] = Lifecycle;
module.exports = exports['default'];
},{"invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Link.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _React$PropTypes = _react2['default'].PropTypes;
var bool = _React$PropTypes.bool;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function isEmptyObject(object) {
  for (var p in object) if (object.hasOwnProperty(p)) return false;

  return true;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name
 * (or the value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
var Link = _react2['default'].createClass({
  displayName: 'Link',

  contextTypes: {
    history: object
  },

  propTypes: {
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    to: string.isRequired,
    query: object,
    state: object,
    onClick: func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      className: '',
      style: {}
    };
  },

  handleClick: function handleClick(event) {
    var allowTransition = true;
    var clickResult;

    if (this.props.onClick) clickResult = this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

    event.preventDefault();

    if (allowTransition) this.context.history.pushState(this.props.state, this.props.to, this.props.query);
  },

  componentWillMount: function componentWillMount() {
    _warning2['default'](this.context.history, 'A <Link> should not be rendered outside the context of history; ' + 'some features including real hrefs, active styling, and navigation ' + 'will not function correctly');
  },

  render: function render() {
    var history = this.context.history;
    var _props = this.props;
    var activeClassName = _props.activeClassName;
    var activeStyle = _props.activeStyle;
    var onlyActiveOnIndex = _props.onlyActiveOnIndex;
    var to = _props.to;
    var query = _props.query;
    var state = _props.state;
    var onClick = _props.onClick;

    var props = _objectWithoutProperties(_props, ['activeClassName', 'activeStyle', 'onlyActiveOnIndex', 'to', 'query', 'state', 'onClick']);

    props.onClick = this.handleClick;

    // Ignore if rendered outside the context
    // of history, simplifies unit testing.
    if (history) {
      props.href = history.createHref(to, query);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (history.isActive(to, query, onlyActiveOnIndex)) {
          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2['default'].createElement('a', props);
  }

});

exports['default'] = Link;
module.exports = exports['default'];
},{"react":"react","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeSource(string) {
  return escapeRegExp(string).replace(/\/+/g, '/+');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/?#]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '*') {
      regexpSource += '([\\s\\S]*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = {};

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 *
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */

function matchPattern(pattern, pathname) {
  var _compilePattern2 = compilePattern(pattern);

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;

  regexpSource += '/*'; // Ignore trailing slashes

  var captureRemaining = tokens[tokens.length - 1] !== '*';

  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

  var remainingPathname, paramValues;
  if (match != null) {
    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
    });

    if (captureRemaining) {
      remainingPathname = paramValues.pop();
    } else {
      remainingPathname = pathname.replace(match[0], '');
    }
  } else {
    remainingPathname = paramValues = null;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: paramValues
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var _matchPattern = matchPattern(pattern, pathname);

  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  if (paramValues != null) {
    return paramNames.reduce(function (memo, paramName, index) {
      memo[paramName] = paramValues[index];
      return memo;
    }, {});
  }

  return null;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */

function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token, paramName, paramValue;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      _invariant2['default'](paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      _invariant2['default'](paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
},{"invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.falsy = falsy;

var _react = require('react');

var func = _react.PropTypes.func;
var object = _react.PropTypes.object;
var arrayOf = _react.PropTypes.arrayOf;
var oneOfType = _react.PropTypes.oneOfType;
var element = _react.PropTypes.element;
var shape = _react.PropTypes.shape;
var string = _react.PropTypes.string;

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = shape({
  listen: func.isRequired,
  pushState: func.isRequired,
  replaceState: func.isRequired,
  go: func.isRequired
});

exports.history = history;
var location = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

exports.location = location;
var component = oneOfType([func, string]);
exports.component = component;
var components = oneOfType([component, object]);
exports.components = components;
var route = oneOfType([object, element]);
exports.route = route;
var routes = oneOfType([route, arrayOf(route)]);

exports.routes = routes;
exports['default'] = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route
};
},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PatternUtils = require('./PatternUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should be sent
 * to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration and are
 * traversed in the same manner.
 */
var Redirect = _react2['default'].createClass({
  displayName: 'Redirect',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = _RouteUtils.createRouteFromReactElement(element);

      if (route.from) route.path = route.from;

      // TODO: Handle relative pathnames, see #1658
      _invariant2['default'](route.to.charAt(0) === '/', '<Redirect to> must be an absolute path. This should be fixed in the future');

      route.onEnter = function (nextState, replaceState) {
        var location = nextState.location;
        var params = nextState.params;

        var pathname = route.to ? _PatternUtils.formatPattern(route.to, params) : location.pathname;

        replaceState(route.state || location.state, pathname, route.query || location.query);
      };

      return route;
    }

  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _PropTypes.falsy,
    children: _PropTypes.falsy
  },

  render: function render() {
    _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered');
  }

});

exports['default'] = Redirect;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js","./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Route.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the page when
 * the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 */
var Route = _react2['default'].createClass({
  displayName: 'Route',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = _RouteUtils.createRouteFromReactElement(element);

      if (route.handler) {
        _warning2['default'](false, '<Route handler> is deprecated, use <Route component> instead');

        route.component = route.handler;
        delete route.handler;
      }

      return route;
    }

  },

  propTypes: {
    path: string,
    ignoreScrollBehavior: bool,
    handler: // deprecated
    _PropTypes.component, component: _PropTypes.component,
    components: _PropTypes.components,
    getComponents: func
  },

  render: function render() {
    _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered');
  }

});

exports['default'] = Route;
module.exports = exports['default'];
},{"./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","react":"react","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteContext.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var object = _react2['default'].PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */
var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  }

};

exports['default'] = RouteContext;
module.exports = exports['default'];
},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function isValidChild(object) {
  return object == null || _react2['default'].isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) _warning2['default'](false, error.message);
    }
  }
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router';
 *   
 *   var routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   );
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */

function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2['default'].Children.forEach(children, function (element) {
    if (_react2['default'].isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */

function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (!Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
},{"react":"react","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Router.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _historyLibCreateHashHistory = require('history/lib/createHashHistory');

var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

var _RouteUtils = require('./RouteUtils');

var _RoutingContext = require('./RoutingContext');

var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

var _useRoutes = require('./useRoutes');

var _useRoutes2 = _interopRequireDefault(_useRoutes);

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <Router> is a high-level API for automatically setting up
 * a router that renders a <RoutingContext> with all the props
 * it needs each time the URL changes.
 */
var Router = _react2['default'].createClass({
  displayName: 'Router',

  propTypes: {
    history: object,
    children: _PropTypes.routes,
    routes: _PropTypes.routes, // alias for children
    createElement: func,
    onError: func,
    onUpdate: func,
    parseQueryString: func,
    stringifyQuery: func
  },

  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },

  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },

  componentWillMount: function componentWillMount() {
    var _this = this;

    var _props = this.props;
    var history = _props.history;
    var children = _props.children;
    var routes = _props.routes;
    var parseQueryString = _props.parseQueryString;
    var stringifyQuery = _props.stringifyQuery;

    var createHistory = history ? function () {
      return history;
    } : _historyLibCreateHashHistory2['default'];

    this.history = _useRoutes2['default'](createHistory)({
      routes: _RouteUtils.createRoutes(routes || children),
      parseQueryString: parseQueryString,
      stringifyQuery: stringifyQuery
    });

    this._unlisten = this.history.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    _warning2['default'](nextProps.history === this.props.history, "The `history` provided to <Router/> has changed, it will be ignored.");
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },

  render: function render() {
    var _state = this.state;
    var location = _state.location;
    var routes = _state.routes;
    var params = _state.params;
    var components = _state.components;
    var createElement = this.props.createElement;

    if (location == null) return null; // Async match

    return _react2['default'].createElement(_RoutingContext2['default'], {
      history: this.history,
      createElement: createElement,
      location: location,
      routes: routes,
      params: params,
      components: components
    });
  }

});

exports['default'] = Router;
module.exports = exports['default'];
},{"./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","./RoutingContext":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RoutingContext.js","./useRoutes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/useRoutes.js","history/lib/createHashHistory":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createHashHistory.js","react":"react","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RoutingContext.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _getRouteParams = require('./getRouteParams');

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _React$PropTypes = _react2['default'].PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

/**
 * A <RoutingContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */
var RoutingContext = _react2['default'].createClass({
  displayName: 'RoutingContext',

  propTypes: {
    history: object.isRequired,
    createElement: func.isRequired,
    location: object.isRequired,
    routes: array.isRequired,
    params: object.isRequired,
    components: array.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2['default'].createElement
    };
  },

  childContextTypes: {
    history: object.isRequired,
    location: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      history: this.props.history,
      location: this.props.location
    };
  },

  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },

  render: function render() {
    var _this = this;

    var _props = this.props;
    var history = _props.history;
    var location = _props.location;
    var routes = _props.routes;
    var params = _props.params;
    var components = _props.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = _getRouteParams2['default'](route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };

        if (element) props.children = element;

        if (typeof components === 'object') {
          var elements = {};

          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this.createElement(components[key], props);

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    _invariant2['default'](element === null || element === false || _react2['default'].isValidElement(element), 'The root route must render a single element');

    return element;
  }

});

exports['default'] = RoutingContext;
module.exports = exports['default'];
},{"./getRouteParams":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/getRouteParams.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/TransitionUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runLeaveHooks = runLeaveHooks;

var _AsyncUtils = require('./AsyncUtils');

function createEnterHook(hook, route) {
  return function (a, b, callback) {
    hook.apply(route, arguments);

    if (hook.length < 3) {
      // Assume hook executes synchronously and
      // automatically call the callback.
      callback();
    }
  };
}

function getEnterHooks(routes) {
  return routes.reduce(function (hooks, route) {
    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

    return hooks;
  }, []);
}

/**
 * Runs all onEnter hooks in the given array of routes in order
 * with onEnter(nextState, replaceState, callback) and calls
 * callback(error, redirectInfo) when finished. The first hook
 * to use replaceState short-circuits the loop.
 *
 * If a hook needs to run asynchronously, it may use the callback
 * function. However, doing so will cause the transition to pause,
 * which could lead to a non-responsive UI if the hook is slow.
 */

function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);

  if (!hooks.length) {
    callback();
    return;
  }

  var redirectInfo;
  function replaceState(state, pathname, query) {
    redirectInfo = { pathname: pathname, query: query, state: state };
  }

  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
    hooks[index](nextState, replaceState, function (error) {
      if (error || redirectInfo) {
        done(error, redirectInfo); // No need to continue.
      } else {
          next();
        }
    });
  }, callback);
}

/**
 * Runs all onLeave hooks in the given array of routes in order.
 */

function runLeaveHooks(routes) {
  for (var i = 0, len = routes.length; i < len; ++i) if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
}
},{"./AsyncUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/AsyncUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/computeChangedRoutes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = _PatternUtils.getParamNames(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes, enterRoutes;
  if (prevRoutes) {
    leaveRoutes = prevRoutes.filter(function (route) {
      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
    });

    // onLeave hooks start at the leaf route.
    leaveRoutes.reverse();

    enterRoutes = nextRoutes.filter(function (route) {
      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
    });
  } else {
    leaveRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    enterRoutes: enterRoutes
  };
}

exports['default'] = computeChangedRoutes;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/getComponents.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _AsyncUtils = require('./AsyncUtils');

function getComponentsForRoute(location, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
  } else if (route.getComponent) {
    route.getComponent(location, callback);
  } else if (route.getComponents) {
    route.getComponents(location, callback);
  } else {
    callback();
  }
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState.location, route, callback);
  }, callback);
}

exports['default'] = getComponents;
module.exports = exports['default'];
},{"./AsyncUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/AsyncUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/getRouteParams.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  var paramNames = _PatternUtils.getParamNames(route.path);

  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

  return routeParams;
}

exports['default'] = getRouteParams;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/index.js":[function(require,module,exports){
/* components */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

exports.Router = _Router3['default'];

var _Link2 = require('./Link');

var _Link3 = _interopRequireDefault(_Link2);

exports.Link = _Link3['default'];

/* components (configuration) */

var _IndexRoute2 = require('./IndexRoute');

var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

exports.IndexRoute = _IndexRoute3['default'];

var _Redirect2 = require('./Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

exports.Redirect = _Redirect3['default'];

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

exports.Route = _Route3['default'];

/* mixins */

var _History2 = require('./History');

var _History3 = _interopRequireDefault(_History2);

exports.History = _History3['default'];

var _Lifecycle2 = require('./Lifecycle');

var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

exports.Lifecycle = _Lifecycle3['default'];

var _RouteContext2 = require('./RouteContext');

var _RouteContext3 = _interopRequireDefault(_RouteContext2);

exports.RouteContext = _RouteContext3['default'];

/* utils */

var _useRoutes2 = require('./useRoutes');

var _useRoutes3 = _interopRequireDefault(_useRoutes2);

exports.useRoutes = _useRoutes3['default'];

var _RouteUtils = require('./RouteUtils');

exports.createRoutes = _RouteUtils.createRoutes;

var _RoutingContext2 = require('./RoutingContext');

var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

exports.RoutingContext = _RoutingContext3['default'];

var _PropTypes2 = require('./PropTypes');

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

exports.PropTypes = _PropTypes3['default'];

var _match2 = require('./match');

var _match3 = _interopRequireDefault(_match2);

exports.match = _match3['default'];

var _Router4 = _interopRequireDefault(_Router2);

exports['default'] = _Router4['default'];
},{"./History":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/History.js","./IndexRoute":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/IndexRoute.js","./Lifecycle":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Lifecycle.js","./Link":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Link.js","./PropTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Redirect.js","./Route":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Route.js","./RouteContext":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteContext.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","./Router":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/Router.js","./RoutingContext":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RoutingContext.js","./match":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/match.js","./useRoutes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/useRoutes.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/isActive.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _PatternUtils = require('./PatternUtils');

/**
 * Returns true if a route and params that match the given
 * pathname are currently active.
 */
function pathnameIsActive(pathname, activePathname, activeRoutes, activeParams) {
  if (pathname === activePathname || activePathname.indexOf(pathname + '/') === 0) return true;

  var route, pattern;
  var basename = '';
  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
    route = activeRoutes[i];
    if (!route.path) return false;
    pattern = route.path || '';

    if (pattern.indexOf('/') !== 0) pattern = basename.replace(/\/*$/, '/') + pattern; // Relative paths build on the parent's path.

    var _matchPattern = _PatternUtils.matchPattern(pattern, pathname);

    var remainingPathname = _matchPattern.remainingPathname;
    var paramNames = _matchPattern.paramNames;
    var paramValues = _matchPattern.paramValues;

    if (remainingPathname === '') {
      return paramNames.every(function (paramName, index) {
        return String(paramValues[index]) === String(activeParams[paramName]);
      });
    }

    basename = pattern;
  }

  return false;
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

  return true;
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */
function isActive(pathname, query, indexOnly, location, routes, params) {
  if (location == null) return false;

  if (indexOnly && (routes.length < 2 || routes[routes.length - 2].indexRoute !== routes[routes.length - 1])) return false;

  return pathnameIsActive(pathname, location.pathname, routes, params) && queryIsActive(query, location.query);
}

exports['default'] = isActive;
module.exports = exports['default'];
},{"./PatternUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/match.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = match;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _historyLibCreateMemoryHistory = require('history/lib/createMemoryHistory');

var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

var _useRoutes = require('./useRoutes');

var _useRoutes2 = _interopRequireDefault(_useRoutes);

var _RouteUtils = require('./RouteUtils');

function match(_ref, cb) {
  var routes = _ref.routes;
  var history = _ref.history;
  var location = _ref.location;
  var parseQueryString = _ref.parseQueryString;
  var stringifyQuery = _ref.stringifyQuery;

  var createHistory = history ? function () {
    return history;
  } : _historyLibCreateMemoryHistory2['default'];

  var staticHistory = _useRoutes2['default'](createHistory)({
    routes: _RouteUtils.createRoutes(routes),
    parseQueryString: parseQueryString,
    stringifyQuery: stringifyQuery
  });

  staticHistory.match(location, function (error, nextLocation, nextState) {
    var renderProps = nextState ? _extends({}, nextState, { history: staticHistory }) : null;
    cb(error, nextLocation, renderProps);
  });
}

module.exports = exports['default'];
},{"./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js","./useRoutes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/useRoutes.js","history/lib/createMemoryHistory":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createMemoryHistory.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/matchRoutes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _AsyncUtils = require('./AsyncUtils');

var _PatternUtils = require('./PatternUtils');

var _RouteUtils = require('./RouteUtils');

function getChildRoutes(route, location, callback) {
  if (route.childRoutes) {
    callback(null, route.childRoutes);
  } else if (route.getChildRoutes) {
    route.getChildRoutes(location, function (error, childRoutes) {
      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
    });
  } else {
    callback();
  }
}

function getIndexRoute(route, location, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    route.getIndexRoute(location, function (error, indexRoute) {
      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
    });
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduceRight(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].unshift(paramValue);
    } else if (paramName in params) {
      params[paramName] = [paramValue, params[paramName]];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(basename, route, location, callback) {
  var pattern = route.path || '';

  if (pattern.indexOf('/') !== 0) pattern = basename.replace(/\/*$/, '/') + pattern; // Relative paths build on the parent's path.

  var _matchPattern = _PatternUtils.matchPattern(pattern, location.pathname);

  var remainingPathname = _matchPattern.remainingPathname;
  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  var isExactMatch = remainingPathname === '';

  if (isExactMatch && route.path) {
    var match = {
      routes: [route],
      params: createParams(paramNames, paramValues)
    };

    getIndexRoute(route, location, function (error, indexRoute) {
      if (error) {
        callback(error);
      } else {
        if (indexRoute) match.routes.push(indexRoute);

        callback(null, match);
      }
    });
  } else if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    getChildRoutes(route, location, function (error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, pattern);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback) {
  var basename = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
    matchRouteDeep(basename, routes[index], location, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}

exports['default'] = matchRoutes;
module.exports = exports['default'];
},{"./AsyncUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/AsyncUtils.js","./PatternUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/PatternUtils.js","./RouteUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/RouteUtils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/useRoutes.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _historyLibActions = require('history/lib/Actions');

var _historyLibUseQueries = require('history/lib/useQueries');

var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

var _historyLibCreateLocation = require('history/lib/createLocation');

var _historyLibCreateLocation2 = _interopRequireDefault(_historyLibCreateLocation);

var _computeChangedRoutes2 = require('./computeChangedRoutes');

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = require('./TransitionUtils');

var _isActive2 = require('./isActive');

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = require('./getComponents');

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = require('./matchRoutes');

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function hasAnyProperties(object) {
  for (var p in object) if (object.hasOwnProperty(p)) return true;

  return false;
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know about routing.
 *
 * - isActive(pathname, query)
 * - registerRouteHook(route, (location) => {})
 * - unregisterRouteHook(route, (location) => {})
 * - match(location, (error, nextState, nextLocation) => {})
 * - listen((error, nextState) => {})
 */
function useRoutes(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var routes = options.routes;

    var historyOptions = _objectWithoutProperties(options, ['routes']);

    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
    var state = {};

    function isActive(pathname, query) {
      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
    }

    var partialNextState = undefined;

    function match(location, callback) {
      if (partialNextState && partialNextState.location === location) {
        // Continue from where we left off.
        finishMatch(partialNextState, callback);
      } else {
        _matchRoutes2['default'](routes, location, function (error, nextState) {
          if (error) {
            callback(error, null, null);
          } else if (nextState) {
            finishMatch(_extends({}, nextState, { location: location }), function (err, nextLocation, nextState) {
              if (nextState) state = nextState;
              callback(err, nextLocation, nextState);
            });
          } else {
            callback(null, null, null);
          }
        });
      }
    }

    function createLocationFromRedirectInfo(_ref) {
      var pathname = _ref.pathname;
      var query = _ref.query;
      var state = _ref.state;

      return _historyLibCreateLocation2['default'](history.createPath(pathname, query), state, _historyLibActions.REPLACE, history.createKey());
    }

    function finishMatch(nextState, callback) {
      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
      var enterRoutes = _computeChangedRoutes.enterRoutes;

      _TransitionUtils.runLeaveHooks(leaveRoutes);

      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
        if (error) {
          callback(error);
        } else if (redirectInfo) {
          callback(null, createLocationFromRedirectInfo(redirectInfo), null);
        } else {
          // TODO: Fetch components after state is updated.
          _getComponents2['default'](nextState, function (error, components) {
            if (error) {
              callback(error);
            } else {
              callback(null, null, _extends({}, nextState, { components: components }));
            }
          });
        }
      });
    }

    var RouteHooks = {};

    var RouteGuid = 1;

    function getRouteID(route) {
      return route.__id__ || (route.__id__ = RouteGuid++);
    }

    function getRouteHooksForRoutes(routes) {
      return routes.reduce(function (hooks, route) {
        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
        return hooks;
      }, []);
    }

    function transitionHook(location, callback) {
      _matchRoutes2['default'](routes, location, function (error, nextState) {
        if (nextState == null) {
          // TODO: We didn't actually match anything, but hang
          // onto error/nextState so we don't have to matchRoutes
          // again in the listen callback.
          callback();
          return;
        }

        // Cache some state here so we don't have to
        // matchRoutes() again in the listen callback.
        partialNextState = _extends({}, nextState, { location: location });

        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, nextState).leaveRoutes);

        var result = undefined;
        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
          // Passing the location arg here indicates to
          // the user that this is a transition hook.
          result = hooks[i](location);
        }

        callback(result);
      });
    }

    function beforeUnloadHook() {
      // Synchronously check to see if any route hooks want to
      // prevent the current window/tab from closing.
      if (state.routes) {
        var hooks = getRouteHooksForRoutes(state.routes);

        var message = undefined;
        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
          // Passing no args indicates to the user that this is a
          // beforeunload hook. We don't know the next location.
          message = hooks[i]();
        }

        return message;
      }
    }

    function registerRouteHook(route, hook) {
      // TODO: Warn if they register for a route that isn't currently
      // active. They're probably doing something wrong, like re-creating
      // route objects on every location change.
      var routeID = getRouteID(route);
      var hooks = RouteHooks[routeID];

      if (hooks == null) {
        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

        hooks = RouteHooks[routeID] = [hook];

        if (thereWereNoRouteHooks) {
          history.registerTransitionHook(transitionHook);

          if (history.registerBeforeUnloadHook) history.registerBeforeUnloadHook(beforeUnloadHook);
        }
      } else if (hooks.indexOf(hook) === -1) {
        hooks.push(hook);
      }
    }

    function unregisterRouteHook(route, hook) {
      var routeID = getRouteID(route);
      var hooks = RouteHooks[routeID];

      if (hooks != null) {
        var newHooks = hooks.filter(function (item) {
          return item !== hook;
        });

        if (newHooks.length === 0) {
          delete RouteHooks[routeID];

          if (!hasAnyProperties(RouteHooks)) {
            history.unregisterTransitionHook(transitionHook);

            if (history.unregisterBeforeUnloadHook) history.unregisterBeforeUnloadHook(beforeUnloadHook);
          }
        } else {
          RouteHooks[routeID] = newHooks;
        }
      }
    }

    /**
     * This is the API for stateful environments. As the location changes,
     * we update state and call the listener. Benefits of this API are:
     *
     * - We automatically manage state on the client
     * - We automatically handle redirects on the client
     * - We warn when the location doesn't match any routes
     */
    function listen(listener) {
      return history.listen(function (location) {
        if (state.location === location) {
          listener(null, state);
        } else {
          match(location, function (error, nextLocation, nextState) {
            if (error) {
              listener(error);
            } else if (nextState) {
              listener(null, state); // match mutates state to nextState
            } else if (nextLocation) {
                history.transitionTo(nextLocation);
              } else {
                _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search);
              }
          });
        }
      });
    }

    return _extends({}, history, {
      isActive: isActive,
      registerRouteHook: registerRouteHook,
      unregisterRouteHook: unregisterRouteHook,
      listen: listen,
      match: match
    });
  };
}

exports['default'] = useRoutes;
module.exports = exports['default'];
},{"./TransitionUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/TransitionUtils.js","./computeChangedRoutes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/computeChangedRoutes.js","./getComponents":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/getComponents.js","./isActive":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/isActive.js","./matchRoutes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/matchRoutes.js","history/lib/Actions":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js","history/lib/createLocation":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createLocation.js","history/lib/useQueries":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/useQueries.js","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js":[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/AsyncUtils.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/DOMStateStorage.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;
var KeyPrefix = '@@History/';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
}

function readState(key) {
  var json = window.sessionStorage.getItem(createKey(key));

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/DOMUtils.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createDOMHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
},{"./DOMUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./createHistory":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createHistory.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createHashHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _createLocation = require('./createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function ensureSlash() {
  var path = _DOMUtils.getHashPath();

  if (isAbsolutePath(path)) return true;

  _DOMUtils.replaceHashPath('/' + path);

  return false;
}

function addQueryStringValueToPath(path, key, value) {
  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
}

function stripQueryStringValueFromPath(path, key) {
  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
}

function getQueryStringValueFromPath(path, key) {
  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
  return match && match[1];
}

var DefaultQueryKey = '_k';

function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Hash history needs a DOM');

  var queryKey = options.queryKey;

  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

  function getCurrentLocation() {
    var path = _DOMUtils.getHashPath();

    var key = undefined,
        state = undefined;
    if (queryKey) {
      key = getQueryStringValueFromPath(path, queryKey);
      path = stripQueryStringValueFromPath(path, queryKey);

      if (key) {
        state = _DOMStateStorage.readState(key);
      } else {
        state = null;
        key = history.createKey();
        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
      }
    }

    return _createLocation2['default'](path, state, undefined, key);
  }

  function startHashChangeListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function hashChangeListener() {
      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

      transitionTo(getCurrentLocation());
    }

    ensureSlash();
    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
    };
  }

  function finishTransition(location) {
    var pathname = location.pathname;
    var search = location.search;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    var path = pathname + search;

    if (queryKey) path = addQueryStringValueToPath(path, queryKey, key);

    if (path === _DOMUtils.getHashPath()) {
      _warning2['default'](false, 'You cannot %s the same path using hash history', action);
    } else {
      if (queryKey) {
        _DOMStateStorage.saveState(key, state);
      } else {
        // Drop key and state.
        location.key = location.state = null;
      }

      if (action === _Actions.PUSH) {
        window.location.hash = path;
      } else {
        // REPLACE
        _DOMUtils.replaceHashPath(path);
      }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopHashChangeListener = undefined;

  function listen(listener) {
    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopHashChangeListener();
    };
  }

  function pushState(state, path) {
    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

    history.pushState(state, path);
  }

  function replaceState(state, path) {
    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

    history.replaceState(state, path);
  }

  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

  function go(n) {
    _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    history.go(n);
  }

  function createHref(path) {
    return '#' + history.createHref(path);
  }

  return _extends({}, history, {
    listen: listen,
    pushState: pushState,
    replaceState: replaceState,
    go: go,
    createHref: createHref
  });
}

exports['default'] = createHashHistory;
module.exports = exports['default'];
},{"./Actions":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js","./DOMStateStorage":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/DOMStateStorage.js","./DOMUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/DOMUtils.js","./ExecutionEnvironment":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/ExecutionEnvironment.js","./createDOMHistory":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createDOMHistory.js","./createLocation":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createLocation.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation = require('./createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];
  var changeListeners = [];
  var location = undefined;

  var allKeys = [];

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function addChangeListener(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    changeListeners = changeListeners.filter(function (item) {
      return item !== listener;
    });
  }

  function listen(listener) {
    addChangeListener(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      removeChangeListener(listener);
    };
  }

  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  function runTransitionHook(hook, location, callback) {
    var result = hook(location, callback);

    if (hook.length < 2) {
      // Assume the hook runs synchronously and automatically
      // call the callback with the return value.
      callback(result);
    } else {
      _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument call the callback instead');
    }
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      runTransitionHook(transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    _invariant2['default'](pendingLocation == null, 'transitionTo: Another transition is already in progress');

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      pendingLocation = null;

      if (ok) {
        finishTransition(nextLocation);
        updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(_createLocation2['default'](path, state, _Actions.PUSH, createKey()));
  }

  function replaceState(state, path) {
    transitionTo(_createLocation2['default'](path, state, _Actions.REPLACE, createKey()));
  }

  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    return path;
  }

  function createHref(path) {
    return createPath(path);
  }

  return {
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    setState: setState,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js","./AsyncUtils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/AsyncUtils.js","./createLocation":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createLocation.js","deep-equal":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/index.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createLocation.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Actions = require('./Actions');

function extractPath(string) {
  var match = string.match(/https?:\/\/[^\/]*/);

  if (match == null) return string;

  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

  return string.substring(match[0].length);
}

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  path = extractPath(path);

  var pathname = path;
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js","warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createMemoryHistory.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _createLocation = require('./createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
}

function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var history = _createHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: saveState,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    var key = history.createKey();

    if (typeof entry === 'string') return { pathname: entry, key: key };

    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

    _invariant2['default'](false, 'Unable to create history entry from %s', entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    _invariant2['default'](current >= 0 && current < entries.length, 'Current index must be >= 0 and < %s, was %s', entries.length, current);
  }

  var storage = createStorage(entries);

  function saveState(key, state) {
    storage[key] = state;
  }

  function readState(key) {
    return storage[key];
  }

  function getCurrentLocation() {
    var entry = entries[current];
    var key = entry.key;
    var pathname = entry.pathname;
    var search = entry.search;

    var path = pathname + (search || '');

    var state = undefined;
    if (key) {
      state = readState(key);
    } else {
      state = null;
      key = history.createKey();
      entry.key = key;
    }

    return _createLocation2['default'](path, state, undefined, key);
  }

  function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  }

  function go(n) {
    if (n) {
      _invariant2['default'](canGo(n), 'Cannot go(%s) there is not enough history', n);

      current += n;

      var currentLocation = getCurrentLocation();

      // change action to POP
      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
    }
  }

  function finishTransition(location) {
    switch (location.action) {
      case _Actions.PUSH:
        current += 1;

        // if we are not on the top of stack
        // remove rest and push new
        if (current < entries.length) {
          entries.splice(current);
        }

        entries.push(location);
        saveState(location.key, location.state);
        break;
      case _Actions.REPLACE:
        entries[current] = location;
        saveState(location.key, location.state);
        break;
    }
  }

  return history;
}

exports['default'] = createMemoryHistory;
module.exports = exports['default'];
},{"./Actions":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/Actions.js","./createHistory":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createHistory.js","./createLocation":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/createLocation.js","invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/lib/useQueries.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function defaultStringifyQuery(query) {
  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
}

function defaultParseQueryString(queryString) {
  return _qs2['default'].parse(queryString);
}

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;

    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

    var history = createHistory(historyOptions);

    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    function listen(listener) {
      return history.listen(function (location) {
        if (!location.query) location.query = parseQueryString(location.search.substring(1));

        listener(location);
      });
    }

    function pushState(state, pathname, query) {
      return history.pushState(state, createPath(pathname, query));
    }

    function replaceState(state, pathname, query) {
      return history.replaceState(state, createPath(pathname, query));
    }

    function createPath(pathname, query) {
      var queryString = undefined;
      if (query == null || (queryString = stringifyQuery(query)) === '') return pathname;

      return history.createPath(pathname + (pathname.indexOf('?') === -1 ? '?' : '&') + queryString);
    }

    function createHref(pathname, query) {
      return history.createHref(createPath(pathname, query));
    }

    return _extends({}, history, {
      listen: listen,
      pushState: pushState,
      replaceState: replaceState,
      createPath: createPath,
      createHref: createHref
    });
  };
}

exports['default'] = useQueries;
module.exports = exports['default'];
},{"qs":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/index.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/index.js":[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/is_arguments.js","./lib/keys.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/keys.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/is_arguments.js":[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/deep-equal/lib/keys.js":[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/index.js":[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/parse.js","./stringify":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/stringify.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/parse.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000,
    strictNullHandling: false,
    plainObjects: false,
    allowPrototypes: false
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';

            if (options.strictNullHandling) {
                obj[Utils.decode(part)] = null;
            }
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            (options.parseArrays &&
             index <= options.arrayLimit)) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // Transform dot notation to bracket notation

    if (options.allowDots) {
        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects &&
            Object.prototype.hasOwnProperty(segment[1])) {

            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!options.plainObjects &&
            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {

            if (!options.allowPrototypes) {
                continue;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.allowDots = options.allowDots !== false;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj, options);
    }

    return Utils.compact(obj);
};

},{"./utils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/utils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/stringify.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {

            return prefix + '[]';
        },
        indices: function (prefix, key) {

            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {

            return prefix;
        }
    },
    strictNullHandling: false
};


internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    }
    else if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        if (strictNullHandling) {
            return Utils.encode(prefix);
        }

        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];

        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    }
    else if (Array.isArray(options.filter)) {
        objKeys = filter = options.filter;
    }

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
    }

    return keys.join(delimiter);
};

},{"./utils":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/utils.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/history/node_modules/qs/lib/utils.js":[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};
internals.hexTable = new Array(256);
for (var h = 0; h < 256; ++h) {
    internals.hexTable[h] = '%' + ((h < 16 ? '0' : '') + h.toString(16)).toUpperCase();
}


exports.arrayToObject = function (source, options) {

    var obj = options.plainObjects ? Object.create(null) : {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source, options) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else if (typeof target === 'object') {
            target[source] = true;
        }
        else {
            target = [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target, options);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!Object.prototype.hasOwnProperty.call(target, key)) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value, options);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {

    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    if (typeof str !== 'string') {
        str = '' + str;
    }

    var out = '';
    for (var i = 0, il = str.length; i < il; ++i) {
        var c = str.charCodeAt(i);

        if (c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A)) { // A-Z

            out += str[i];
            continue;
        }

        if (c < 0x80) {
            out += internals.hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;
        }

        ++i;
        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {

    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
              obj.constructor.isBuffer &&
              obj.constructor.isBuffer(obj));
};

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/invariant/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/node_modules/warning/browser.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/app.js":[function(require,module,exports){
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

var _reactRouter = require('react-router');

//import routers from "./routers"

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
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'h1',
                    null,
                    'App'
                ),
                _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/form/' },
                            'Form'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/about/' },
                            'About'
                        )
                    )
                ),
                this.props.children
            )
            //React.createElement(routers.getComponent(this.getPathName()), {data: this.props, handleClick: this.handleClick})
            ;
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];
/* change the <a>s to <Links>s */ /*
                                  next we replace `<Child>` with `this.props.children`
                                  the router will figure out the children for us
                                  */

},{"react":"react","react-router":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-router/lib/index.js"}],"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},["/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0luZGV4Um91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9MaWZlY3ljbGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9MaW5rLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUGF0dGVyblV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlQ29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0aW5nQ29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb25VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXB1dGVDaGFuZ2VkUm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvZ2V0Q29tcG9uZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2dldFJvdXRlUGFyYW1zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pc0FjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL21hdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbWF0Y2hSb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi91c2VSb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlSGFzaEhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvdXNlUXVlcmllcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2hpc3Rvcnkvbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9hcHAuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztxQkNBa0IsT0FBTzs7OztzQkFDVCxXQUFXOzs7O0FBRzNCLElBQU0sU0FBUyxHQUFHLG1CQUFNLGFBQWEscUJBQUssQ0FBQzs7QUFFM0MsbUJBQU0sTUFBTSxDQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7OztBQ1RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQzVEa0IsT0FBTzs7OzsyQkFDVyxjQUFjOzs7O0lBSzdCLEdBQUc7Y0FBSCxHQUFHOztBQUNSLGFBREssR0FBRyxDQUNQLEtBQUssRUFBRTs4QkFESCxHQUFHOztBQUVoQixtQ0FGYSxHQUFHLDZDQUVWLEtBQUssRUFBRTtBQUNiLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFDLENBQUM7S0FDbEQ7O2lCQU5nQixHQUFHOztlQVFSLHFCQUFDLENBQUMsRUFBRTtBQUNaLGFBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixrQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7OztlQUVTLG1CQUFDLFFBQVEsRUFBRTtBQUNqQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQ3ZDOzs7ZUFFVyx1QkFBRztBQUNYLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQzlCOzs7ZUFFTSxrQkFBRztBQUNOLG1CQUNJOzs7Z0JBQ0k7Ozs7aUJBQVk7Z0JBRVo7OztvQkFDSTs7O3dCQUFJOzs4QkFBTSxFQUFFLEVBQUMsR0FBRzs7eUJBQVk7cUJBQUs7b0JBQ2pDOzs7d0JBQUk7OzhCQUFNLEVBQUUsRUFBQyxRQUFROzt5QkFBWTtxQkFBSztvQkFDdEM7Ozt3QkFBSTs7OEJBQU0sRUFBRSxFQUFDLFNBQVM7O3lCQUFhO3FCQUFLO2lCQUN2QztnQkFNSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDbEI7O2FBRVQ7U0FDSjs7O1dBekNnQixHQUFHO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTNCLEdBQUc7Ozs7Ozs7O0FDTnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL3NyYy9hcHBcIjtcblxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEFwcCk7XG5cblJlYWN0LnJlbmRlcihcbiAgICBDb21wb25lbnQod2luZG93LnByb3BzKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5leHBvcnRzLm1hcEFzeW5jID0gbWFwQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuXG5mdW5jdGlvbiBtYXBBc3luYyhhcnJheSwgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiBjYWxsYmFjayhudWxsLCB2YWx1ZXMpO1xuXG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcbiAgdmFyIGRvbmVDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gZG9uZShpbmRleCwgZXJyb3IsIHZhbHVlKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgIGlzRG9uZSA9ICsrZG9uZUNvdW50ID09PSBsZW5ndGg7XG5cbiAgICAgIGlmIChpc0RvbmUpIGNhbGxiYWNrKG51bGwsIHZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB3b3JrKGl0ZW0sIGluZGV4LCBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XG4gICAgICBkb25lKGluZGV4LCBlcnJvciwgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIEhpc3RvcnkgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7IGhpc3Rvcnk6IF9Qcm9wVHlwZXMuaGlzdG9yeSB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuaGlzdG9yeSA9IHRoaXMuY29udGV4dC5oaXN0b3J5O1xuICB9XG5cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIGJvb2wgPSBfUmVhY3QkUHJvcFR5cGVzLmJvb2w7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBbiA8SW5kZXhSb3V0ZT4gaXMgdXNlZCB0byBzcGVjaWZ5IGl0cyBwYXJlbnQncyA8Um91dGUgaW5kZXhSb3V0ZT4gaW5cbiAqIGEgSlNYIHJvdXRlIGNvbmZpZy5cbiAqL1xudmFyIEluZGV4Um91dGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0luZGV4Um91dGUnLFxuXG4gIHN0YXRpY3M6IHtcblxuICAgIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDogZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQsIHBhcmVudFJvdXRlKSB7XG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgcGFyZW50Um91dGUuaW5kZXhSb3V0ZSA9IF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnQW4gPEluZGV4Um91dGU+IGRvZXMgbm90IG1ha2Ugc2Vuc2UgYXQgdGhlIHJvb3Qgb2YgeW91ciByb3V0ZSBjb25maWcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXRoOiBfUHJvcFR5cGVzLmZhbHN5LFxuICAgIGlnbm9yZVNjcm9sbEJlaGF2aW9yOiBib29sLFxuICAgIGNvbXBvbmVudDogX1Byb3BUeXBlcy5jb21wb25lbnQsXG4gICAgY29tcG9uZW50czogX1Byb3BUeXBlcy5jb21wb25lbnRzLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnPEluZGV4Um91dGU+IGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbmRleFJvdXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIG9iamVjdCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIFRoZSBMaWZlY3ljbGUgbWl4aW4gYWRkcyB0aGUgcm91dGVyV2lsbExlYXZlIGxpZmVjeWNsZSBtZXRob2RcbiAqIHRvIGEgY29tcG9uZW50IHRoYXQgbWF5IGJlIHVzZWQgdG8gY2FuY2VsIGEgdHJhbnNpdGlvbiBvciBwcm9tcHRcbiAqIHRoZSB1c2VyIGZvciBjb25maXJtYXRpb24uXG4gKlxuICogT24gc3RhbmRhcmQgdHJhbnNpdGlvbnMsIHJvdXRlcldpbGxMZWF2ZSByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudDogdGhlXG4gKiBsb2NhdGlvbiB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLiBUbyBjYW5jZWwgdGhlIHRyYW5zaXRpb24sIHJldHVybiBmYWxzZS5cbiAqIFRvIHByb21wdCB0aGUgdXNlciBmb3IgY29uZmlybWF0aW9uLCByZXR1cm4gYSBwcm9tcHQgbWVzc2FnZSAoc3RyaW5nKS5cbiAqXG4gKiByb3V0ZXJXaWxsTGVhdmUgZG9lcyBub3QgcmVjZWl2ZSBhIGxvY2F0aW9uIG9iamVjdCBkdXJpbmcgdGhlIGJlZm9yZXVubG9hZFxuICogZXZlbnQgaW4gd2ViIGJyb3dzZXJzIChhc3N1bWluZyB5b3UncmUgdXNpbmcgdGhlIHVzZUJlZm9yZVVubG9hZCBoaXN0b3J5XG4gKiBlbmhhbmNlcikuIEluIHRoaXMgY2FzZSwgaXQgaXMgbm90IHBvc3NpYmxlIGZvciB1cyB0byBrbm93IHRoZSBsb2NhdGlvblxuICogd2UncmUgdHJhbnNpdGlvbmluZyB0byBzbyByb3V0ZXJXaWxsTGVhdmUgbXVzdCByZXR1cm4gYSBwcm9tcHQgbWVzc2FnZSB0b1xuICogcHJldmVudCB0aGUgdXNlciBmcm9tIGNsb3NpbmcgdGhlIHRhYi5cbiAqL1xudmFyIExpZmVjeWNsZSA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvLyBSb3V0ZSBjb21wb25lbnRzIHJlY2VpdmUgdGhlIHJvdXRlIG9iamVjdCBhcyBhIHByb3AuXG4gICAgcm91dGU6IG9iamVjdFxuICB9LFxuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIC8vIE5lc3RlZCBjaGlsZHJlbiByZWNlaXZlIHRoZSByb3V0ZSBhcyBjb250ZXh0LCBlaXRoZXJcbiAgICAvLyBzZXQgYnkgdGhlIHJvdXRlIGNvbXBvbmVudCB1c2luZyB0aGUgUm91dGVDb250ZXh0IG1peGluXG4gICAgLy8gb3IgYnkgc29tZSBvdGhlciBhbmNlc3Rvci5cbiAgICByb3V0ZTogb2JqZWN0XG4gIH0sXG5cbiAgX2dldFJvdXRlOiBmdW5jdGlvbiBfZ2V0Um91dGUoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcy5wcm9wcy5yb3V0ZSB8fCB0aGlzLmNvbnRleHQucm91dGU7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHJvdXRlLCAnVGhlIExpZmVjeWNsZSBtaXhpbiBuZWVkcyB0byBiZSB1c2VkIGVpdGhlciBvbiAxKSBhIDxSb3V0ZSBjb21wb25lbnQ+IG9yICcgKyAnMikgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlIGNvbXBvbmVudD4gdGhhdCB1c2VzIHRoZSBSb3V0ZUNvbnRleHQgbWl4aW4nKTtcblxuICAgIHJldHVybiByb3V0ZTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMucm91dGVyV2lsbExlYXZlLCAnVGhlIExpZmVjeWNsZSBtaXhpbiByZXF1aXJlcyB5b3UgdG8gZGVmaW5lIGEgcm91dGVyV2lsbExlYXZlIG1ldGhvZCcpO1xuXG4gICAgdGhpcy5jb250ZXh0Lmhpc3RvcnkucmVnaXN0ZXJSb3V0ZUhvb2sodGhpcy5fZ2V0Um91dGUoKSwgdGhpcy5yb3V0ZXJXaWxsTGVhdmUpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuaGlzdG9yeS51bnJlZ2lzdGVyUm91dGVIb29rKHRoaXMuX2dldFJvdXRlKCksIHRoaXMucm91dGVyV2lsbExlYXZlKTtcbiAgfVxuXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMaWZlY3ljbGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXM7XG52YXIgYm9vbCA9IF9SZWFjdCRQcm9wVHlwZXMuYm9vbDtcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcbnZhciBzdHJpbmcgPSBfUmVhY3QkUHJvcFR5cGVzLnN0cmluZztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xuXG5mdW5jdGlvbiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqZWN0KSB7XG4gIGZvciAodmFyIHAgaW4gb2JqZWN0KSBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQSA8TGluaz4gaXMgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyBhbiBcImFjdGl2ZVwiIGNsYXNzIG5hbWVcbiAqIChvciB0aGUgdmFsdWUgb2YgaXRzIGBhY3RpdmVDbGFzc05hbWVgIHByb3ApLlxuICpcbiAqIEZvciBleGFtcGxlLCBhc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIHJvdXRlOlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvcG9zdHMvOnBvc3RJRFwiIGNvbXBvbmVudD17UG9zdH0gLz5cbiAqXG4gKiBZb3UgY291bGQgdXNlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHRvIGxpbmsgdG8gdGhhdCByb3V0ZTpcbiAqXG4gKiAgIDxMaW5rIHRvPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSAvPlxuICpcbiAqIExpbmtzIG1heSBwYXNzIGFsb25nIGxvY2F0aW9uIHN0YXRlIGFuZC9vciBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICogaW4gdGhlIHN0YXRlL3F1ZXJ5IHByb3BzLCByZXNwZWN0aXZlbHkuXG4gKlxuICogICA8TGluayAuLi4gcXVlcnk9e3sgc2hvdzogdHJ1ZSB9fSBzdGF0ZT17eyB0aGU6ICdzdGF0ZScgfX0gLz5cbiAqL1xudmFyIExpbmsgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xpbmsnLFxuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZVN0eWxlOiBvYmplY3QsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgb25seUFjdGl2ZU9uSW5kZXg6IGJvb2wuaXNSZXF1aXJlZCxcbiAgICB0bzogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcXVlcnk6IG9iamVjdCxcbiAgICBzdGF0ZTogb2JqZWN0LFxuICAgIG9uQ2xpY2s6IGZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25seUFjdGl2ZU9uSW5kZXg6IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIGFsbG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgdmFyIGNsaWNrUmVzdWx0O1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgY2xpY2tSZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChhbGxvd1RyYW5zaXRpb24pIHRoaXMuY29udGV4dC5oaXN0b3J5LnB1c2hTdGF0ZSh0aGlzLnByb3BzLnN0YXRlLCB0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXSh0aGlzLmNvbnRleHQuaGlzdG9yeSwgJ0EgPExpbms+IHNob3VsZCBub3QgYmUgcmVuZGVyZWQgb3V0c2lkZSB0aGUgY29udGV4dCBvZiBoaXN0b3J5OyAnICsgJ3NvbWUgZmVhdHVyZXMgaW5jbHVkaW5nIHJlYWwgaHJlZnMsIGFjdGl2ZSBzdHlsaW5nLCBhbmQgbmF2aWdhdGlvbiAnICsgJ3dpbGwgbm90IGZ1bmN0aW9uIGNvcnJlY3RseScpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5jb250ZXh0Lmhpc3Rvcnk7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG4gICAgdmFyIGFjdGl2ZVN0eWxlID0gX3Byb3BzLmFjdGl2ZVN0eWxlO1xuICAgIHZhciBvbmx5QWN0aXZlT25JbmRleCA9IF9wcm9wcy5vbmx5QWN0aXZlT25JbmRleDtcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG4gICAgdmFyIHF1ZXJ5ID0gX3Byb3BzLnF1ZXJ5O1xuICAgIHZhciBzdGF0ZSA9IF9wcm9wcy5zdGF0ZTtcbiAgICB2YXIgb25DbGljayA9IF9wcm9wcy5vbkNsaWNrO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY3RpdmVDbGFzc05hbWUnLCAnYWN0aXZlU3R5bGUnLCAnb25seUFjdGl2ZU9uSW5kZXgnLCAndG8nLCAncXVlcnknLCAnc3RhdGUnLCAnb25DbGljayddKTtcblxuICAgIHByb3BzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrO1xuXG4gICAgLy8gSWdub3JlIGlmIHJlbmRlcmVkIG91dHNpZGUgdGhlIGNvbnRleHRcbiAgICAvLyBvZiBoaXN0b3J5LCBzaW1wbGlmaWVzIHVuaXQgdGVzdGluZy5cbiAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgcHJvcHMuaHJlZiA9IGhpc3RvcnkuY3JlYXRlSHJlZih0bywgcXVlcnkpO1xuXG4gICAgICBpZiAoYWN0aXZlQ2xhc3NOYW1lIHx8IGFjdGl2ZVN0eWxlICE9IG51bGwgJiYgIWlzRW1wdHlPYmplY3QoYWN0aXZlU3R5bGUpKSB7XG4gICAgICAgIGlmIChoaXN0b3J5LmlzQWN0aXZlKHRvLCBxdWVyeSwgb25seUFjdGl2ZU9uSW5kZXgpKSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzTmFtZSkgcHJvcHMuY2xhc3NOYW1lICs9IHByb3BzLmNsYXNzTmFtZSA9PT0gJycgPyBhY3RpdmVDbGFzc05hbWUgOiAnICcgKyBhY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlU3R5bGUpIHByb3BzLnN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBhY3RpdmVTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2EnLCBwcm9wcyk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpbms7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBpbGVQYXR0ZXJuID0gY29tcGlsZVBhdHRlcm47XG5leHBvcnRzLm1hdGNoUGF0dGVybiA9IG1hdGNoUGF0dGVybjtcbmV4cG9ydHMuZ2V0UGFyYW1OYW1lcyA9IGdldFBhcmFtTmFtZXM7XG5leHBvcnRzLmdldFBhcmFtcyA9IGdldFBhcmFtcztcbmV4cG9ydHMuZm9ybWF0UGF0dGVybiA9IGZvcm1hdFBhdHRlcm47XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlU291cmNlKHN0cmluZykge1xuICByZXR1cm4gZXNjYXBlUmVnRXhwKHN0cmluZykucmVwbGFjZSgvXFwvKy9nLCAnLysnKTtcbn1cblxuZnVuY3Rpb24gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgdmFyIHJlZ2V4cFNvdXJjZSA9ICcnO1xuICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICB2YXIgdG9rZW5zID0gW107XG5cbiAgdmFyIG1hdGNoLFxuICAgICAgbGFzdEluZGV4ID0gMCxcbiAgICAgIG1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFxcKnxcXCh8XFwpL2c7XG4gIHdoaWxlIChtYXRjaCA9IG1hdGNoZXIuZXhlYyhwYXR0ZXJuKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVTb3VyY2UocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoWzFdKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyhbXi8/I10rKSc7XG4gICAgICBwYXJhbU5hbWVzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcqJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoW1xcXFxzXFxcXFNdKj8pJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKCcpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKD86JztcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKScpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKT8nO1xuICAgIH1cblxuICAgIHRva2Vucy5wdXNoKG1hdGNoWzBdKTtcblxuICAgIGxhc3RJbmRleCA9IG1hdGNoZXIubGFzdEluZGV4O1xuICB9XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gcGF0dGVybi5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgcGF0dGVybi5sZW5ndGgpKTtcbiAgICByZWdleHBTb3VyY2UgKz0gZXNjYXBlU291cmNlKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBwYXR0ZXJuLmxlbmd0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgIHJlZ2V4cFNvdXJjZTogcmVnZXhwU291cmNlLFxuICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgdG9rZW5zOiB0b2tlbnNcbiAgfTtcbn1cblxudmFyIENvbXBpbGVkUGF0dGVybnNDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBjb21waWxlUGF0dGVybihwYXR0ZXJuKSB7XG4gIGlmICghKHBhdHRlcm4gaW4gQ29tcGlsZWRQYXR0ZXJuc0NhY2hlKSkgQ29tcGlsZWRQYXR0ZXJuc0NhY2hlW3BhdHRlcm5dID0gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gIHJldHVybiBDb21waWxlZFBhdHRlcm5zQ2FjaGVbcGF0dGVybl07XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXR0ZXJuIG9uIHRoZSBnaXZlbiBwYXRobmFtZS4gUGF0dGVybnMgbWF5IHVzZVxuICogdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnM6XG4gKlxuICogLSA6cGFyYW1OYW1lICAgICBNYXRjaGVzIGEgVVJMIHNlZ21lbnQgdXAgdG8gdGhlIG5leHQgLywgPywgb3IgIy4gVGhlXG4gKiAgICAgICAgICAgICAgICAgIGNhcHR1cmVkIHN0cmluZyBpcyBjb25zaWRlcmVkIGEgXCJwYXJhbVwiXG4gKiAtICgpICAgICAgICAgICAgIFdyYXBzIGEgc2VnbWVudCBvZiB0aGUgVVJMIHRoYXQgaXMgb3B0aW9uYWxcbiAqIC0gKiAgICAgICAgICAgICAgQ29uc3VtZXMgKG5vbi1ncmVlZHkpIGFsbCBjaGFyYWN0ZXJzIHVwIHRvIHRoZSBuZXh0XG4gKiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlciBpbiB0aGUgcGF0dGVybiwgb3IgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGlmXG4gKiAgICAgICAgICAgICAgICAgIHRoZXJlIGlzIG5vbmVcbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAtIHJlbWFpbmluZ1BhdGhuYW1lXG4gKiAtIHBhcmFtTmFtZXNcbiAqIC0gcGFyYW1WYWx1ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgdmFyIF9jb21waWxlUGF0dGVybjIgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgcmVnZXhwU291cmNlID0gX2NvbXBpbGVQYXR0ZXJuMi5yZWdleHBTb3VyY2U7XG4gIHZhciBwYXJhbU5hbWVzID0gX2NvbXBpbGVQYXR0ZXJuMi5wYXJhbU5hbWVzO1xuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMi50b2tlbnM7XG5cbiAgcmVnZXhwU291cmNlICs9ICcvKic7IC8vIElnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG5cbiAgdmFyIGNhcHR1cmVSZW1haW5pbmcgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdICE9PSAnKic7XG5cbiAgaWYgKGNhcHR1cmVSZW1haW5pbmcpIHJlZ2V4cFNvdXJjZSArPSAnKFtcXFxcc1xcXFxTXSo/KSc7XG5cbiAgdmFyIG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByZWdleHBTb3VyY2UgKyAnJCcsICdpJykpO1xuXG4gIHZhciByZW1haW5pbmdQYXRobmFtZSwgcGFyYW1WYWx1ZXM7XG4gIGlmIChtYXRjaCAhPSBudWxsKSB7XG4gICAgcGFyYW1WYWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtYXRjaCwgMSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdiAhPSBudWxsID8gZGVjb2RlVVJJQ29tcG9uZW50KHYucmVwbGFjZSgvXFwrL2csICclMjAnKSkgOiB2O1xuICAgIH0pO1xuXG4gICAgaWYgKGNhcHR1cmVSZW1haW5pbmcpIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyYW1WYWx1ZXMucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZShtYXRjaFswXSwgJycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZW1haW5pbmdQYXRobmFtZSA9IHBhcmFtVmFsdWVzID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtYWluaW5nUGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lLFxuICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgcGFyYW1WYWx1ZXM6IHBhcmFtVmFsdWVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMocGF0dGVybikge1xuICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHZhciBfbWF0Y2hQYXR0ZXJuID0gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHBhdGhuYW1lKTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1OYW1lcztcbiAgdmFyIHBhcmFtVmFsdWVzID0gX21hdGNoUGF0dGVybi5wYXJhbVZhbHVlcztcblxuICBpZiAocGFyYW1WYWx1ZXMgIT0gbnVsbCkge1xuICAgIHJldHVybiBwYXJhbU5hbWVzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgcGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgbWVtb1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdHRlcm4gd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAqIGlmIHRoZXJlIGlzIGEgZHluYW1pYyBzZWdtZW50IG9mIHRoZSBwYXR0ZXJuIGZvciB3aGljaCB0aGVyZSBpcyBubyBwYXJhbS5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRQYXR0ZXJuKHBhdHRlcm4sIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIF9jb21waWxlUGF0dGVybjMgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMy50b2tlbnM7XG5cbiAgdmFyIHBhcmVuQ291bnQgPSAwLFxuICAgICAgcGF0aG5hbWUgPSAnJyxcbiAgICAgIHNwbGF0SW5kZXggPSAwO1xuXG4gIHZhciB0b2tlbiwgcGFyYW1OYW1lLCBwYXJhbVZhbHVlO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICBpZiAodG9rZW4gPT09ICcqJykge1xuICAgICAgcGFyYW1WYWx1ZSA9IEFycmF5LmlzQXJyYXkocGFyYW1zLnNwbGF0KSA/IHBhcmFtcy5zcGxhdFtzcGxhdEluZGV4KytdIDogcGFyYW1zLnNwbGF0O1xuXG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHBhcmFtVmFsdWUgIT0gbnVsbCB8fCBwYXJlbkNvdW50ID4gMCwgJ01pc3Npbmcgc3BsYXQgIyVzIGZvciBwYXRoIFwiJXNcIicsIHNwbGF0SW5kZXgsIHBhdHRlcm4pO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZSAhPSBudWxsKSBwYXRobmFtZSArPSBlbmNvZGVVUkkocGFyYW1WYWx1ZSkucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJygnKSB7XG4gICAgICBwYXJlbkNvdW50ICs9IDE7XG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJyknKSB7XG4gICAgICBwYXJlbkNvdW50IC09IDE7XG4gICAgfSBlbHNlIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICc6Jykge1xuICAgICAgcGFyYW1OYW1lID0gdG9rZW4uc3Vic3RyaW5nKDEpO1xuICAgICAgcGFyYW1WYWx1ZSA9IHBhcmFtc1twYXJhbU5hbWVdO1xuXG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHBhcmFtVmFsdWUgIT0gbnVsbCB8fCBwYXJlbkNvdW50ID4gMCwgJ01pc3NpbmcgXCIlc1wiIHBhcmFtZXRlciBmb3IgcGF0aCBcIiVzXCInLCBwYXJhbU5hbWUsIHBhdHRlcm4pO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZSAhPSBudWxsKSBwYXRobmFtZSArPSBlbmNvZGVVUklDb21wb25lbnQocGFyYW1WYWx1ZSkucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhuYW1lICs9IHRva2VuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rL2csICcvJyk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5mYWxzeSA9IGZhbHN5O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIGZ1bmMgPSBfcmVhY3QuUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gX3JlYWN0LlByb3BUeXBlcy5vYmplY3Q7XG52YXIgYXJyYXlPZiA9IF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZjtcbnZhciBvbmVPZlR5cGUgPSBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZTtcbnZhciBlbGVtZW50ID0gX3JlYWN0LlByb3BUeXBlcy5lbGVtZW50O1xudmFyIHNoYXBlID0gX3JlYWN0LlByb3BUeXBlcy5zaGFwZTtcbnZhciBzdHJpbmcgPSBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZztcblxuZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHJldHVybiBuZXcgRXJyb3IoJzwnICsgY29tcG9uZW50TmFtZSArICc+IHNob3VsZCBub3QgaGF2ZSBhIFwiJyArIHByb3BOYW1lICsgJ1wiIHByb3AnKTtcbn1cblxudmFyIGhpc3RvcnkgPSBzaGFwZSh7XG4gIGxpc3RlbjogZnVuYy5pc1JlcXVpcmVkLFxuICBwdXNoU3RhdGU6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVwbGFjZVN0YXRlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvOiBmdW5jLmlzUmVxdWlyZWRcbn0pO1xuXG5leHBvcnRzLmhpc3RvcnkgPSBoaXN0b3J5O1xudmFyIGxvY2F0aW9uID0gc2hhcGUoe1xuICBwYXRobmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlYXJjaDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0YXRlOiBvYmplY3QsXG4gIGFjdGlvbjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGtleTogc3RyaW5nXG59KTtcblxuZXhwb3J0cy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xudmFyIGNvbXBvbmVudCA9IG9uZU9mVHlwZShbZnVuYywgc3RyaW5nXSk7XG5leHBvcnRzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbnZhciBjb21wb25lbnRzID0gb25lT2ZUeXBlKFtjb21wb25lbnQsIG9iamVjdF0pO1xuZXhwb3J0cy5jb21wb25lbnRzID0gY29tcG9uZW50cztcbnZhciByb3V0ZSA9IG9uZU9mVHlwZShbb2JqZWN0LCBlbGVtZW50XSk7XG5leHBvcnRzLnJvdXRlID0gcm91dGU7XG52YXIgcm91dGVzID0gb25lT2ZUeXBlKFtyb3V0ZSwgYXJyYXlPZihyb3V0ZSldKTtcblxuZXhwb3J0cy5yb3V0ZXMgPSByb3V0ZXM7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGZhbHN5OiBmYWxzeSxcbiAgaGlzdG9yeTogaGlzdG9yeSxcbiAgbG9jYXRpb246IGxvY2F0aW9uLFxuICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgcm91dGU6IHJvdXRlXG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJlZGlyZWN0PiBpcyB1c2VkIHRvIGRlY2xhcmUgYW5vdGhlciBVUkwgcGF0aCBhIGNsaWVudCBzaG91bGQgYmUgc2VudFxuICogdG8gd2hlbiB0aGV5IHJlcXVlc3QgYSBnaXZlbiBVUkwuXG4gKlxuICogUmVkaXJlY3RzIGFyZSBwbGFjZWQgYWxvbmdzaWRlIHJvdXRlcyBpbiB0aGUgcm91dGUgY29uZmlndXJhdGlvbiBhbmQgYXJlXG4gKiB0cmF2ZXJzZWQgaW4gdGhlIHNhbWUgbWFubmVyLlxuICovXG52YXIgUmVkaXJlY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JlZGlyZWN0JyxcblxuICBzdGF0aWNzOiB7XG5cbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcm91dGUgPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChyb3V0ZS5mcm9tKSByb3V0ZS5wYXRoID0gcm91dGUuZnJvbTtcblxuICAgICAgLy8gVE9ETzogSGFuZGxlIHJlbGF0aXZlIHBhdGhuYW1lcywgc2VlICMxNjU4XG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHJvdXRlLnRvLmNoYXJBdCgwKSA9PT0gJy8nLCAnPFJlZGlyZWN0IHRvPiBtdXN0IGJlIGFuIGFic29sdXRlIHBhdGguIFRoaXMgc2hvdWxkIGJlIGZpeGVkIGluIHRoZSBmdXR1cmUnKTtcblxuICAgICAgcm91dGUub25FbnRlciA9IGZ1bmN0aW9uIChuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXh0U3RhdGUubG9jYXRpb247XG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXh0U3RhdGUucGFyYW1zO1xuXG4gICAgICAgIHZhciBwYXRobmFtZSA9IHJvdXRlLnRvID8gX1BhdHRlcm5VdGlscy5mb3JtYXRQYXR0ZXJuKHJvdXRlLnRvLCBwYXJhbXMpIDogbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgcmVwbGFjZVN0YXRlKHJvdXRlLnN0YXRlIHx8IGxvY2F0aW9uLnN0YXRlLCBwYXRobmFtZSwgcm91dGUucXVlcnkgfHwgbG9jYXRpb24ucXVlcnkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmcm9tOiBzdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoXG4gICAgdG86IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBvYmplY3QsXG4gICAgc3RhdGU6IG9iamVjdCxcbiAgICBvbkVudGVyOiBfUHJvcFR5cGVzLmZhbHN5LFxuICAgIGNoaWxkcmVuOiBfUHJvcFR5cGVzLmZhbHN5XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJzxSZWRpcmVjdD4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJyk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJlZGlyZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBzdHJpbmcgPSBfUmVhY3QkUHJvcFR5cGVzLnN0cmluZztcbnZhciBib29sID0gX1JlYWN0JFByb3BUeXBlcy5ib29sO1xudmFyIGZ1bmMgPSBfUmVhY3QkUHJvcFR5cGVzLmZ1bmM7XG5cbi8qKlxuICogQSA8Um91dGU+IGlzIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBjb21wb25lbnRzIGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZSB3aGVuXG4gKiB0aGUgVVJMIG1hdGNoZXMgYSBnaXZlbiBwYXR0ZXJuLlxuICpcbiAqIFJvdXRlcyBhcmUgYXJyYW5nZWQgaW4gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUuIFdoZW4gYSBuZXcgVVJMIGlzIHJlcXVlc3RlZCxcbiAqIHRoZSB0cmVlIGlzIHNlYXJjaGVkIGRlcHRoLWZpcnN0IHRvIGZpbmQgYSByb3V0ZSB3aG9zZSBwYXRoIG1hdGNoZXMgdGhlIFVSTC5cbiAqIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlIHRoYXQgbGVhZCB0byBpdCBhcmUgY29uc2lkZXJlZFxuICogXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgaW50byB0aGUgRE9NLCBuZXN0ZWQgaW4gdGhlIHNhbWVcbiAqIG9yZGVyIGFzIHRoZXkgYXJlIGluIHRoZSB0cmVlLlxuICovXG52YXIgUm91dGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRlJyxcblxuICBzdGF0aWNzOiB7XG5cbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcm91dGUgPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgIGlmIChyb3V0ZS5oYW5kbGVyKSB7XG4gICAgICAgIF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnPFJvdXRlIGhhbmRsZXI+IGlzIGRlcHJlY2F0ZWQsIHVzZSA8Um91dGUgY29tcG9uZW50PiBpbnN0ZWFkJyk7XG5cbiAgICAgICAgcm91dGUuY29tcG9uZW50ID0gcm91dGUuaGFuZGxlcjtcbiAgICAgICAgZGVsZXRlIHJvdXRlLmhhbmRsZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgaWdub3JlU2Nyb2xsQmVoYXZpb3I6IGJvb2wsXG4gICAgaGFuZGxlcjogLy8gZGVwcmVjYXRlZFxuICAgIF9Qcm9wVHlwZXMuY29tcG9uZW50LCBjb21wb25lbnQ6IF9Qcm9wVHlwZXMuY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHM6IF9Qcm9wVHlwZXMuY29tcG9uZW50cyxcbiAgICBnZXRDb21wb25lbnRzOiBmdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJzxSb3V0ZT4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJyk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIG9iamVjdCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIFRoZSBSb3V0ZUNvbnRleHQgbWl4aW4gcHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSBmb3Igcm91dGVcbiAqIGNvbXBvbmVudHMgdG8gc2V0IHRoZSByb3V0ZSBpbiBjb250ZXh0LiBUaGlzIGlzIG5lZWRlZCBmb3JcbiAqIHJvdXRlcyB0aGF0IHJlbmRlciBlbGVtZW50cyB0aGF0IHdhbnQgdG8gdXNlIHRoZSBMaWZlY3ljbGVcbiAqIG1peGluIHRvIHByZXZlbnQgdHJhbnNpdGlvbnMuXG4gKi9cbnZhciBSb3V0ZUNvbnRleHQgPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcm91dGU6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZTogb2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGU6IHRoaXMucHJvcHMucm91dGVcbiAgICB9O1xuICB9XG5cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5pc1JlYWN0Q2hpbGRyZW4gPSBpc1JlYWN0Q2hpbGRyZW47XG5leHBvcnRzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDtcbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjtcbmV4cG9ydHMuY3JlYXRlUm91dGVzID0gY3JlYXRlUm91dGVzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIGlzVmFsaWRDaGlsZChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKGNvbXBvbmVudE5hbWUsIHByb3BUeXBlcywgcHJvcHMpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgJ1Vua25vd25Db21wb25lbnQnO1xuXG4gIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BUeXBlcykge1xuICAgIGlmIChwcm9wVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICB2YXIgZXJyb3IgPSBwcm9wVHlwZXNbcHJvcE5hbWVdKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlKGRlZmF1bHRQcm9wcywgcHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciByb3V0ZSA9IGNyZWF0ZVJvdXRlKHR5cGUuZGVmYXVsdFByb3BzLCBlbGVtZW50LnByb3BzKTtcblxuICBpZiAodHlwZS5wcm9wVHlwZXMpIGNoZWNrUHJvcFR5cGVzKHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lLCB0eXBlLnByb3BUeXBlcywgcm91dGUpO1xuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIHZhciBjaGlsZFJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHJvdXRlLmNoaWxkcmVuLCByb3V0ZSk7XG5cbiAgICBpZiAoY2hpbGRSb3V0ZXMubGVuZ3RoKSByb3V0ZS5jaGlsZFJvdXRlcyA9IGNoaWxkUm91dGVzO1xuXG4gICAgZGVsZXRlIHJvdXRlLmNoaWxkcmVuO1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZXMgb2JqZWN0IGZyb20gdGhlIGdpdmVuIFJlYWN0Q2hpbGRyZW4uIEpTWFxuICogcHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byB2aXN1YWxpemUgaG93IHJvdXRlcyBpbiB0aGUgaGllcmFyY2h5IGFyZVxuICogbmVzdGVkLlxuICpcbiAqICAgaW1wb3J0IHsgUm91dGUsIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbiAqICAgXG4gKiAgIHZhciByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgY29tcG9uZW50PXtBcHB9PlxuICogICAgICAgPFJvdXRlIHBhdGg9XCJob21lXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9Lz5cbiAqICAgICAgIDxSb3V0ZSBwYXRoPVwibmV3c1wiIGNvbXBvbmVudD17TmV3c0ZlZWR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICApO1xuICpcbiAqIE5vdGU6IFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgdXNlZCB3aGVuIHlvdSBwcm92aWRlIDxSb3V0ZT4gY2hpbGRyZW5cbiAqIHRvIGEgPFJvdXRlcj4gY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRSb3V0ZSkge1xuICB2YXIgcm91dGVzID0gW107XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gQ29tcG9uZW50IGNsYXNzZXMgbWF5IGhhdmUgYSBzdGF0aWMgY3JlYXRlKiBtZXRob2QuXG4gICAgICBpZiAoZWxlbWVudC50eXBlLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCkge1xuICAgICAgICB2YXIgcm91dGUgPSBlbGVtZW50LnR5cGUuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICBpZiAocm91dGUpIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGZyb20gdGhlIGdpdmVuIG9iamVjdCB3aGljaFxuICogbWF5IGJlIGEgSlNYIHJvdXRlLCBhIHBsYWluIG9iamVjdCByb3V0ZSwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcyhyb3V0ZXMpIHtcbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gW3JvdXRlc107XG4gIH1cblxuICByZXR1cm4gcm91dGVzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZUhhc2hIaXN0b3J5Jyk7XG5cbnZhciBfaGlzdG9yeUxpYkNyZWF0ZUhhc2hIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeSk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1JvdXRpbmdDb250ZXh0ID0gcmVxdWlyZSgnLi9Sb3V0aW5nQ29udGV4dCcpO1xuXG52YXIgX1JvdXRpbmdDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRpbmdDb250ZXh0KTtcblxudmFyIF91c2VSb3V0ZXMgPSByZXF1aXJlKCcuL3VzZVJvdXRlcycpO1xuXG52YXIgX3VzZVJvdXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VSb3V0ZXMpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJvdXRlcj4gaXMgYSBoaWdoLWxldmVsIEFQSSBmb3IgYXV0b21hdGljYWxseSBzZXR0aW5nIHVwXG4gKiBhIHJvdXRlciB0aGF0IHJlbmRlcnMgYSA8Um91dGluZ0NvbnRleHQ+IHdpdGggYWxsIHRoZSBwcm9wc1xuICogaXQgbmVlZHMgZWFjaCB0aW1lIHRoZSBVUkwgY2hhbmdlcy5cbiAqL1xudmFyIFJvdXRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUm91dGVyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBoaXN0b3J5OiBvYmplY3QsXG4gICAgY2hpbGRyZW46IF9Qcm9wVHlwZXMucm91dGVzLFxuICAgIHJvdXRlczogX1Byb3BUeXBlcy5yb3V0ZXMsIC8vIGFsaWFzIGZvciBjaGlsZHJlblxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMsXG4gICAgb25FcnJvcjogZnVuYyxcbiAgICBvblVwZGF0ZTogZnVuYyxcbiAgICBwYXJzZVF1ZXJ5U3RyaW5nOiBmdW5jLFxuICAgIHN0cmluZ2lmeVF1ZXJ5OiBmdW5jXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgcm91dGVzOiBudWxsLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgY29tcG9uZW50czogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlRXJyb3I6IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVycm9yLmNhbGwodGhpcywgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBlcnJvcnMgYnkgZGVmYXVsdCBzbyB3ZSBkb24ndCBzaWxlbnRseSBzd2FsbG93IHRoZW0hXG4gICAgICB0aHJvdyBlcnJvcjsgLy8gVGhpcyBlcnJvciBwcm9iYWJseSBvY2N1cnJlZCBpbiBnZXRDaGlsZFJvdXRlcyBvciBnZXRDb21wb25lbnRzLlxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhpc3RvcnkgPSBfcHJvcHMuaGlzdG9yeTtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wcy5yb3V0ZXM7XG4gICAgdmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBfcHJvcHMucGFyc2VRdWVyeVN0cmluZztcbiAgICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBfcHJvcHMuc3RyaW5naWZ5UXVlcnk7XG5cbiAgICB2YXIgY3JlYXRlSGlzdG9yeSA9IGhpc3RvcnkgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeTtcbiAgICB9IDogX2hpc3RvcnlMaWJDcmVhdGVIYXNoSGlzdG9yeTJbJ2RlZmF1bHQnXTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IF91c2VSb3V0ZXMyWydkZWZhdWx0J10oY3JlYXRlSGlzdG9yeSkoe1xuICAgICAgcm91dGVzOiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMocm91dGVzIHx8IGNoaWxkcmVuKSxcbiAgICAgIHBhcnNlUXVlcnlTdHJpbmc6IHBhcnNlUXVlcnlTdHJpbmcsXG4gICAgICBzdHJpbmdpZnlRdWVyeTogc3RyaW5naWZ5UXVlcnlcbiAgICB9KTtcblxuICAgIHRoaXMuX3VubGlzdGVuID0gdGhpcy5oaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAoZXJyb3IsIHN0YXRlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIF90aGlzLnByb3BzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIF93YXJuaW5nMlsnZGVmYXVsdCddKG5leHRQcm9wcy5oaXN0b3J5ID09PSB0aGlzLnByb3BzLmhpc3RvcnksIFwiVGhlIGBoaXN0b3J5YCBwcm92aWRlZCB0byA8Um91dGVyLz4gaGFzIGNoYW5nZWQsIGl0IHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl91bmxpc3RlbikgdGhpcy5fdW5saXN0ZW4oKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbG9jYXRpb24gPSBfc3RhdGUubG9jYXRpb247XG4gICAgdmFyIHJvdXRlcyA9IF9zdGF0ZS5yb3V0ZXM7XG4gICAgdmFyIHBhcmFtcyA9IF9zdGF0ZS5wYXJhbXM7XG4gICAgdmFyIGNvbXBvbmVudHMgPSBfc3RhdGUuY29tcG9uZW50cztcbiAgICB2YXIgY3JlYXRlRWxlbWVudCA9IHRoaXMucHJvcHMuY3JlYXRlRWxlbWVudDtcblxuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSByZXR1cm4gbnVsbDsgLy8gQXN5bmMgbWF0Y2hcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfUm91dGluZ0NvbnRleHQyWydkZWZhdWx0J10sIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50c1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2dldFJvdXRlUGFyYW1zID0gcmVxdWlyZSgnLi9nZXRSb3V0ZVBhcmFtcycpO1xuXG52YXIgX2dldFJvdXRlUGFyYW1zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJvdXRlUGFyYW1zKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIGFycmF5ID0gX1JlYWN0JFByb3BUeXBlcy5hcnJheTtcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgPFJvdXRpbmdDb250ZXh0PiByZW5kZXJzIHRoZSBjb21wb25lbnQgdHJlZSBmb3IgYSBnaXZlbiByb3V0ZXIgc3RhdGVcbiAqIGFuZCBzZXRzIHRoZSBoaXN0b3J5IG9iamVjdCBhbmQgdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gY29udGV4dC5cbiAqL1xudmFyIFJvdXRpbmdDb250ZXh0ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0aW5nQ29udGV4dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGlzdG9yeTogb2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlRWxlbWVudDogZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZXM6IGFycmF5LmlzUmVxdWlyZWQsXG4gICAgcGFyYW1zOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb21wb25lbnRzOiBhcnJheS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50XG4gICAgfTtcbiAgfSxcblxuICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvblxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudCA9PSBudWxsID8gbnVsbCA6IHRoaXMucHJvcHMuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhpc3RvcnkgPSBfcHJvcHMuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBfcHJvcHMubG9jYXRpb247XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wcy5yb3V0ZXM7XG4gICAgdmFyIHBhcmFtcyA9IF9wcm9wcy5wYXJhbXM7XG4gICAgdmFyIGNvbXBvbmVudHMgPSBfcHJvcHMuY29tcG9uZW50cztcblxuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICBlbGVtZW50ID0gY29tcG9uZW50cy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoZWxlbWVudCwgY29tcG9uZW50cywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgPT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7IC8vIERvbid0IGNyZWF0ZSBuZXcgY2hpbGRyZW47IHVzZSB0aGUgZ3JhbmRjaGlsZHJlbi5cblxuICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXNbaW5kZXhdO1xuICAgICAgICB2YXIgcm91dGVQYXJhbXMgPSBfZ2V0Um91dGVQYXJhbXMyWydkZWZhdWx0J10ocm91dGUsIHBhcmFtcyk7XG4gICAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgICBoaXN0b3J5OiBoaXN0b3J5LFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgICAgcm91dGVQYXJhbXM6IHJvdXRlUGFyYW1zLFxuICAgICAgICAgIHJvdXRlczogcm91dGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHByb3BzLmNoaWxkcmVuID0gZWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnRzID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50cykgaWYgKGNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkgZWxlbWVudHNba2V5XSA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50c1trZXldLCBwcm9wcyk7XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlRWxlbWVudChjb21wb25lbnRzLCBwcm9wcyk7XG4gICAgICB9LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZmFsc2UgfHwgX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpLCAnVGhlIHJvb3Qgcm91dGUgbXVzdCByZW5kZXIgYSBzaW5nbGUgZWxlbWVudCcpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRpbmdDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ydW5FbnRlckhvb2tzID0gcnVuRW50ZXJIb29rcztcbmV4cG9ydHMucnVuTGVhdmVIb29rcyA9IHJ1bkxlYXZlSG9va3M7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG5mdW5jdGlvbiBjcmVhdGVFbnRlckhvb2soaG9vaywgcm91dGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjYWxsYmFjaykge1xuICAgIGhvb2suYXBwbHkocm91dGUsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoaG9vay5sZW5ndGggPCAzKSB7XG4gICAgICAvLyBBc3N1bWUgaG9vayBleGVjdXRlcyBzeW5jaHJvbm91c2x5IGFuZFxuICAgICAgLy8gYXV0b21hdGljYWxseSBjYWxsIHRoZSBjYWxsYmFjay5cbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlckhvb2tzKHJvdXRlcykge1xuICByZXR1cm4gcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoaG9va3MsIHJvdXRlKSB7XG4gICAgaWYgKHJvdXRlLm9uRW50ZXIpIGhvb2tzLnB1c2goY3JlYXRlRW50ZXJIb29rKHJvdXRlLm9uRW50ZXIsIHJvdXRlKSk7XG5cbiAgICByZXR1cm4gaG9va3M7XG4gIH0sIFtdKTtcbn1cblxuLyoqXG4gKiBSdW5zIGFsbCBvbkVudGVyIGhvb2tzIGluIHRoZSBnaXZlbiBhcnJheSBvZiByb3V0ZXMgaW4gb3JkZXJcbiAqIHdpdGggb25FbnRlcihuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSwgY2FsbGJhY2spIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHJlZGlyZWN0SW5mbykgd2hlbiBmaW5pc2hlZC4gVGhlIGZpcnN0IGhvb2tcbiAqIHRvIHVzZSByZXBsYWNlU3RhdGUgc2hvcnQtY2lyY3VpdHMgdGhlIGxvb3AuXG4gKlxuICogSWYgYSBob29rIG5lZWRzIHRvIHJ1biBhc3luY2hyb25vdXNseSwgaXQgbWF5IHVzZSB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLiBIb3dldmVyLCBkb2luZyBzbyB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHBhdXNlLFxuICogd2hpY2ggY291bGQgbGVhZCB0byBhIG5vbi1yZXNwb25zaXZlIFVJIGlmIHRoZSBob29rIGlzIHNsb3cuXG4gKi9cblxuZnVuY3Rpb24gcnVuRW50ZXJIb29rcyhyb3V0ZXMsIG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIGhvb2tzID0gZ2V0RW50ZXJIb29rcyhyb3V0ZXMpO1xuXG4gIGlmICghaG9va3MubGVuZ3RoKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVkaXJlY3RJbmZvO1xuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGhuYW1lLCBxdWVyeSkge1xuICAgIHJlZGlyZWN0SW5mbyA9IHsgcGF0aG5hbWU6IHBhdGhuYW1lLCBxdWVyeTogcXVlcnksIHN0YXRlOiBzdGF0ZSB9O1xuICB9XG5cbiAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKGhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgaG9va3NbaW5kZXhdKG5leHRTdGF0ZSwgcmVwbGFjZVN0YXRlLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCByZWRpcmVjdEluZm8pIHtcbiAgICAgICAgZG9uZShlcnJvciwgcmVkaXJlY3RJbmZvKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSdW5zIGFsbCBvbkxlYXZlIGhvb2tzIGluIHRoZSBnaXZlbiBhcnJheSBvZiByb3V0ZXMgaW4gb3JkZXIuXG4gKi9cblxuZnVuY3Rpb24gcnVuTGVhdmVIb29rcyhyb3V0ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkgaWYgKHJvdXRlc1tpXS5vbkxlYXZlKSByb3V0ZXNbaV0ub25MZWF2ZS5jYWxsKHJvdXRlc1tpXSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbmZ1bmN0aW9uIHJvdXRlUGFyYW1zQ2hhbmdlZChyb3V0ZSwgcHJldlN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgaWYgKCFyb3V0ZS5wYXRoKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSBfUGF0dGVyblV0aWxzLmdldFBhcmFtTmFtZXMocm91dGUucGF0aCk7XG5cbiAgcmV0dXJuIHBhcmFtTmFtZXMuc29tZShmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIHByZXZTdGF0ZS5wYXJhbXNbcGFyYW1OYW1lXSAhPT0gbmV4dFN0YXRlLnBhcmFtc1twYXJhbU5hbWVdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB7IGxlYXZlUm91dGVzLCBlbnRlclJvdXRlcyB9IGRldGVybWluZWQgYnlcbiAqIHRoZSBjaGFuZ2UgZnJvbSBwcmV2U3RhdGUgdG8gbmV4dFN0YXRlLiBXZSBsZWF2ZSByb3V0ZXMgaWYgZWl0aGVyXG4gKiAxKSB0aGV5IGFyZSBub3QgaW4gdGhlIG5leHQgc3RhdGUgb3IgMikgdGhleSBhcmUgaW4gdGhlIG5leHQgc3RhdGVcbiAqIGJ1dCB0aGVpciBwYXJhbXMgaGF2ZSBjaGFuZ2VkIChpLmUuIC91c2Vycy8xMjMgPT4gL3VzZXJzLzQ1NikuXG4gKlxuICogbGVhdmVSb3V0ZXMgYXJlIG9yZGVyZWQgc3RhcnRpbmcgYXQgdGhlIGxlYWYgcm91dGUgb2YgdGhlIHRyZWVcbiAqIHdlJ3JlIGxlYXZpbmcgdXAgdG8gdGhlIGNvbW1vbiBwYXJlbnQgcm91dGUuIGVudGVyUm91dGVzIGFyZSBvcmRlcmVkXG4gKiBmcm9tIHRoZSB0b3Agb2YgdGhlIHRyZWUgd2UncmUgZW50ZXJpbmcgZG93biB0byB0aGUgbGVhZiByb3V0ZS5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUNoYW5nZWRSb3V0ZXMocHJldlN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgdmFyIHByZXZSb3V0ZXMgPSBwcmV2U3RhdGUgJiYgcHJldlN0YXRlLnJvdXRlcztcbiAgdmFyIG5leHRSb3V0ZXMgPSBuZXh0U3RhdGUucm91dGVzO1xuXG4gIHZhciBsZWF2ZVJvdXRlcywgZW50ZXJSb3V0ZXM7XG4gIGlmIChwcmV2Um91dGVzKSB7XG4gICAgbGVhdmVSb3V0ZXMgPSBwcmV2Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJldHVybiBuZXh0Um91dGVzLmluZGV4T2Yocm91dGUpID09PSAtMSB8fCByb3V0ZVBhcmFtc0NoYW5nZWQocm91dGUsIHByZXZTdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICB9KTtcblxuICAgIC8vIG9uTGVhdmUgaG9va3Mgc3RhcnQgYXQgdGhlIGxlYWYgcm91dGUuXG4gICAgbGVhdmVSb3V0ZXMucmV2ZXJzZSgpO1xuXG4gICAgZW50ZXJSb3V0ZXMgPSBuZXh0Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJldHVybiBwcmV2Um91dGVzLmluZGV4T2Yocm91dGUpID09PSAtMSB8fCBsZWF2ZVJvdXRlcy5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbGVhdmVSb3V0ZXMgPSBbXTtcbiAgICBlbnRlclJvdXRlcyA9IG5leHRSb3V0ZXM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlYXZlUm91dGVzOiBsZWF2ZVJvdXRlcyxcbiAgICBlbnRlclJvdXRlczogZW50ZXJSb3V0ZXNcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29tcHV0ZUNoYW5nZWRSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRzRm9yUm91dGUobG9jYXRpb24sIHJvdXRlLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuY29tcG9uZW50IHx8IHJvdXRlLmNvbXBvbmVudHMpIHtcbiAgICBjYWxsYmFjayhudWxsLCByb3V0ZS5jb21wb25lbnQgfHwgcm91dGUuY29tcG9uZW50cyk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0Q29tcG9uZW50KSB7XG4gICAgcm91dGUuZ2V0Q29tcG9uZW50KGxvY2F0aW9uLCBjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0Q29tcG9uZW50cykge1xuICAgIHJvdXRlLmdldENvbXBvbmVudHMobG9jYXRpb24sIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgZmV0Y2hlcyBhbGwgY29tcG9uZW50cyBuZWVkZWQgZm9yIHRoZSBnaXZlbiByb3V0ZXJcbiAqIHN0YXRlIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgY29tcG9uZW50cykgd2hlbiBmaW5pc2hlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIG9wZXJhdGlvbiBtYXkgZmluaXNoIHN5bmNocm9ub3VzbHkgaWYgbm8gcm91dGVzIGhhdmUgYW5cbiAqIGFzeW5jaHJvbm91cyBnZXRDb21wb25lbnRzIG1ldGhvZC5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50cyhuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gIF9Bc3luY1V0aWxzLm1hcEFzeW5jKG5leHRTdGF0ZS5yb3V0ZXMsIGZ1bmN0aW9uIChyb3V0ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgZ2V0Q29tcG9uZW50c0ZvclJvdXRlKG5leHRTdGF0ZS5sb2NhdGlvbiwgcm91dGUsIGNhbGxiYWNrKTtcbiAgfSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRDb21wb25lbnRzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbi8qKlxuICogRXh0cmFjdHMgYW4gb2JqZWN0IG9mIHBhcmFtcyB0aGUgZ2l2ZW4gcm91dGUgY2FyZXMgYWJvdXQgZnJvbVxuICogdGhlIGdpdmVuIHBhcmFtcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdXRlUGFyYW1zKHJvdXRlLCBwYXJhbXMpIHtcbiAgdmFyIHJvdXRlUGFyYW1zID0ge307XG5cbiAgaWYgKCFyb3V0ZS5wYXRoKSByZXR1cm4gcm91dGVQYXJhbXM7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSBfUGF0dGVyblV0aWxzLmdldFBhcmFtTmFtZXMocm91dGUucGF0aCk7XG5cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocCkgJiYgcGFyYW1OYW1lcy5pbmRleE9mKHApICE9PSAtMSkgcm91dGVQYXJhbXNbcF0gPSBwYXJhbXNbcF07XG5cbiAgcmV0dXJuIHJvdXRlUGFyYW1zO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRSb3V0ZVBhcmFtcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGNvbXBvbmVudHMgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX1JvdXRlcjIgPSByZXF1aXJlKCcuL1JvdXRlcicpO1xuXG52YXIgX1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxuZXhwb3J0cy5Sb3V0ZXIgPSBfUm91dGVyM1snZGVmYXVsdCddO1xuXG52YXIgX0xpbmsyID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rMik7XG5cbmV4cG9ydHMuTGluayA9IF9MaW5rM1snZGVmYXVsdCddO1xuXG4vKiBjb21wb25lbnRzIChjb25maWd1cmF0aW9uKSAqL1xuXG52YXIgX0luZGV4Um91dGUyID0gcmVxdWlyZSgnLi9JbmRleFJvdXRlJyk7XG5cbnZhciBfSW5kZXhSb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmRleFJvdXRlMik7XG5cbmV4cG9ydHMuSW5kZXhSb3V0ZSA9IF9JbmRleFJvdXRlM1snZGVmYXVsdCddO1xuXG52YXIgX1JlZGlyZWN0MiA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxudmFyIF9SZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdDIpO1xuXG5leHBvcnRzLlJlZGlyZWN0ID0gX1JlZGlyZWN0M1snZGVmYXVsdCddO1xuXG52YXIgX1JvdXRlMiA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIF9Sb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZTIpO1xuXG5leHBvcnRzLlJvdXRlID0gX1JvdXRlM1snZGVmYXVsdCddO1xuXG4vKiBtaXhpbnMgKi9cblxudmFyIF9IaXN0b3J5MiA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuXG52YXIgX0hpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGlzdG9yeTIpO1xuXG5leHBvcnRzLkhpc3RvcnkgPSBfSGlzdG9yeTNbJ2RlZmF1bHQnXTtcblxudmFyIF9MaWZlY3ljbGUyID0gcmVxdWlyZSgnLi9MaWZlY3ljbGUnKTtcblxudmFyIF9MaWZlY3ljbGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlmZWN5Y2xlMik7XG5cbmV4cG9ydHMuTGlmZWN5Y2xlID0gX0xpZmVjeWNsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9Sb3V0ZUNvbnRleHQyID0gcmVxdWlyZSgnLi9Sb3V0ZUNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZUNvbnRleHQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVDb250ZXh0Mik7XG5cbmV4cG9ydHMuUm91dGVDb250ZXh0ID0gX1JvdXRlQ29udGV4dDNbJ2RlZmF1bHQnXTtcblxuLyogdXRpbHMgKi9cblxudmFyIF91c2VSb3V0ZXMyID0gcmVxdWlyZSgnLi91c2VSb3V0ZXMnKTtcblxudmFyIF91c2VSb3V0ZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUm91dGVzMik7XG5cbmV4cG9ydHMudXNlUm91dGVzID0gX3VzZVJvdXRlczNbJ2RlZmF1bHQnXTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbmV4cG9ydHMuY3JlYXRlUm91dGVzID0gX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzO1xuXG52YXIgX1JvdXRpbmdDb250ZXh0MiA9IHJlcXVpcmUoJy4vUm91dGluZ0NvbnRleHQnKTtcblxudmFyIF9Sb3V0aW5nQ29udGV4dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0aW5nQ29udGV4dDIpO1xuXG5leHBvcnRzLlJvdXRpbmdDb250ZXh0ID0gX1JvdXRpbmdDb250ZXh0M1snZGVmYXVsdCddO1xuXG52YXIgX1Byb3BUeXBlczIgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX1Byb3BUeXBlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9wVHlwZXMyKTtcblxuZXhwb3J0cy5Qcm9wVHlwZXMgPSBfUHJvcFR5cGVzM1snZGVmYXVsdCddO1xuXG52YXIgX21hdGNoMiA9IHJlcXVpcmUoJy4vbWF0Y2gnKTtcblxudmFyIF9tYXRjaDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaDIpO1xuXG5leHBvcnRzLm1hdGNoID0gX21hdGNoM1snZGVmYXVsdCddO1xuXG52YXIgX1JvdXRlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX1JvdXRlcjRbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSByb3V0ZSBhbmQgcGFyYW1zIHRoYXQgbWF0Y2ggdGhlIGdpdmVuXG4gKiBwYXRobmFtZSBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gcGF0aG5hbWVJc0FjdGl2ZShwYXRobmFtZSwgYWN0aXZlUGF0aG5hbWUsIGFjdGl2ZVJvdXRlcywgYWN0aXZlUGFyYW1zKSB7XG4gIGlmIChwYXRobmFtZSA9PT0gYWN0aXZlUGF0aG5hbWUgfHwgYWN0aXZlUGF0aG5hbWUuaW5kZXhPZihwYXRobmFtZSArICcvJykgPT09IDApIHJldHVybiB0cnVlO1xuXG4gIHZhciByb3V0ZSwgcGF0dGVybjtcbiAgdmFyIGJhc2VuYW1lID0gJyc7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhY3RpdmVSb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICByb3V0ZSA9IGFjdGl2ZVJvdXRlc1tpXTtcbiAgICBpZiAoIXJvdXRlLnBhdGgpIHJldHVybiBmYWxzZTtcbiAgICBwYXR0ZXJuID0gcm91dGUucGF0aCB8fCAnJztcblxuICAgIGlmIChwYXR0ZXJuLmluZGV4T2YoJy8nKSAhPT0gMCkgcGF0dGVybiA9IGJhc2VuYW1lLnJlcGxhY2UoL1xcLyokLywgJy8nKSArIHBhdHRlcm47IC8vIFJlbGF0aXZlIHBhdGhzIGJ1aWxkIG9uIHRoZSBwYXJlbnQncyBwYXRoLlxuXG4gICAgdmFyIF9tYXRjaFBhdHRlcm4gPSBfUGF0dGVyblV0aWxzLm1hdGNoUGF0dGVybihwYXR0ZXJuLCBwYXRobmFtZSk7XG5cbiAgICB2YXIgcmVtYWluaW5nUGF0aG5hbWUgPSBfbWF0Y2hQYXR0ZXJuLnJlbWFpbmluZ1BhdGhuYW1lO1xuICAgIHZhciBwYXJhbU5hbWVzID0gX21hdGNoUGF0dGVybi5wYXJhbU5hbWVzO1xuICAgIHZhciBwYXJhbVZhbHVlcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1WYWx1ZXM7XG5cbiAgICBpZiAocmVtYWluaW5nUGF0aG5hbWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyYW1OYW1lcy5ldmVyeShmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHBhcmFtVmFsdWVzW2luZGV4XSkgPT09IFN0cmluZyhhY3RpdmVQYXJhbXNbcGFyYW1OYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBiYXNlbmFtZSA9IHBhdHRlcm47XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIGdpdmVuIHF1ZXJ5IGFyZVxuICogY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gcXVlcnlJc0FjdGl2ZShxdWVyeSwgYWN0aXZlUXVlcnkpIHtcbiAgaWYgKGFjdGl2ZVF1ZXJ5ID09IG51bGwpIHJldHVybiBxdWVyeSA9PSBudWxsO1xuXG4gIGlmIChxdWVyeSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICBmb3IgKHZhciBwIGluIHF1ZXJ5KSBpZiAocXVlcnkuaGFzT3duUHJvcGVydHkocCkgJiYgU3RyaW5nKHF1ZXJ5W3BdKSAhPT0gU3RyaW5nKGFjdGl2ZVF1ZXJ5W3BdKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIDxMaW5rPiB0byB0aGUgZ2l2ZW4gcGF0aG5hbWUvcXVlcnkgY29tYmluYXRpb24gaXNcbiAqIGN1cnJlbnRseSBhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzQWN0aXZlKHBhdGhuYW1lLCBxdWVyeSwgaW5kZXhPbmx5LCBsb2NhdGlvbiwgcm91dGVzLCBwYXJhbXMpIHtcbiAgaWYgKGxvY2F0aW9uID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoaW5kZXhPbmx5ICYmIChyb3V0ZXMubGVuZ3RoIDwgMiB8fCByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDJdLmluZGV4Um91dGUgIT09IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHBhdGhuYW1lSXNBY3RpdmUocGF0aG5hbWUsIGxvY2F0aW9uLnBhdGhuYW1lLCByb3V0ZXMsIHBhcmFtcykgJiYgcXVlcnlJc0FjdGl2ZShxdWVyeSwgbG9jYXRpb24ucXVlcnkpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpc0FjdGl2ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gbWF0Y2g7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknKTtcblxudmFyIF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeSk7XG5cbnZhciBfdXNlUm91dGVzID0gcmVxdWlyZSgnLi91c2VSb3V0ZXMnKTtcblxudmFyIF91c2VSb3V0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUm91dGVzKTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbmZ1bmN0aW9uIG1hdGNoKF9yZWYsIGNiKSB7XG4gIHZhciByb3V0ZXMgPSBfcmVmLnJvdXRlcztcbiAgdmFyIGhpc3RvcnkgPSBfcmVmLmhpc3Rvcnk7XG4gIHZhciBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb247XG4gIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gX3JlZi5wYXJzZVF1ZXJ5U3RyaW5nO1xuICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBfcmVmLnN0cmluZ2lmeVF1ZXJ5O1xuXG4gIHZhciBjcmVhdGVIaXN0b3J5ID0gaGlzdG9yeSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGlzdG9yeTtcbiAgfSA6IF9oaXN0b3J5TGliQ3JlYXRlTWVtb3J5SGlzdG9yeTJbJ2RlZmF1bHQnXTtcblxuICB2YXIgc3RhdGljSGlzdG9yeSA9IF91c2VSb3V0ZXMyWydkZWZhdWx0J10oY3JlYXRlSGlzdG9yeSkoe1xuICAgIHJvdXRlczogX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzKHJvdXRlcyksXG4gICAgcGFyc2VRdWVyeVN0cmluZzogcGFyc2VRdWVyeVN0cmluZyxcbiAgICBzdHJpbmdpZnlRdWVyeTogc3RyaW5naWZ5UXVlcnlcbiAgfSk7XG5cbiAgc3RhdGljSGlzdG9yeS5tYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBuZXh0TG9jYXRpb24sIG5leHRTdGF0ZSkge1xuICAgIHZhciByZW5kZXJQcm9wcyA9IG5leHRTdGF0ZSA/IF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgaGlzdG9yeTogc3RhdGljSGlzdG9yeSB9KSA6IG51bGw7XG4gICAgY2IoZXJyb3IsIG5leHRMb2NhdGlvbiwgcmVuZGVyUHJvcHMpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRSb3V0ZXMocm91dGUsIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIHtcbiAgICBjYWxsYmFjayhudWxsLCByb3V0ZS5jaGlsZFJvdXRlcyk7XG4gIH0gZWxzZSBpZiAocm91dGUuZ2V0Q2hpbGRSb3V0ZXMpIHtcbiAgICByb3V0ZS5nZXRDaGlsZFJvdXRlcyhsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBjaGlsZFJvdXRlcykge1xuICAgICAgY2FsbGJhY2soZXJyb3IsICFlcnJvciAmJiBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMoY2hpbGRSb3V0ZXMpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4Um91dGUocm91dGUsIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuaW5kZXhSb3V0ZSkge1xuICAgIGNhbGxiYWNrKG51bGwsIHJvdXRlLmluZGV4Um91dGUpO1xuICB9IGVsc2UgaWYgKHJvdXRlLmdldEluZGV4Um91dGUpIHtcbiAgICByb3V0ZS5nZXRJbmRleFJvdXRlKGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGluZGV4Um91dGUpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yLCAhZXJyb3IgJiYgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzKGluZGV4Um91dGUpWzBdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnblBhcmFtcyhwYXJhbXMsIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKSB7XG4gIHJldHVybiBwYXJhbU5hbWVzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChwYXJhbXMsIHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgcGFyYW1WYWx1ZSA9IHBhcmFtVmFsdWVzICYmIHBhcmFtVmFsdWVzW2luZGV4XTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1twYXJhbU5hbWVdKSkge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0udW5zaGlmdChwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtTmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gW3BhcmFtVmFsdWUsIHBhcmFtc1twYXJhbU5hbWVdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBwYXJhbVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH0sIHBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcykge1xuICByZXR1cm4gYXNzaWduUGFyYW1zKHt9LCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVEZWVwKGJhc2VuYW1lLCByb3V0ZSwgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciBwYXR0ZXJuID0gcm91dGUucGF0aCB8fCAnJztcblxuICBpZiAocGF0dGVybi5pbmRleE9mKCcvJykgIT09IDApIHBhdHRlcm4gPSBiYXNlbmFtZS5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyBwYXR0ZXJuOyAvLyBSZWxhdGl2ZSBwYXRocyBidWlsZCBvbiB0aGUgcGFyZW50J3MgcGF0aC5cblxuICB2YXIgX21hdGNoUGF0dGVybiA9IF9QYXR0ZXJuVXRpbHMubWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIGxvY2F0aW9uLnBhdGhuYW1lKTtcblxuICB2YXIgcmVtYWluaW5nUGF0aG5hbWUgPSBfbWF0Y2hQYXR0ZXJuLnJlbWFpbmluZ1BhdGhuYW1lO1xuICB2YXIgcGFyYW1OYW1lcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1OYW1lcztcbiAgdmFyIHBhcmFtVmFsdWVzID0gX21hdGNoUGF0dGVybi5wYXJhbVZhbHVlcztcblxuICB2YXIgaXNFeGFjdE1hdGNoID0gcmVtYWluaW5nUGF0aG5hbWUgPT09ICcnO1xuXG4gIGlmIChpc0V4YWN0TWF0Y2ggJiYgcm91dGUucGF0aCkge1xuICAgIHZhciBtYXRjaCA9IHtcbiAgICAgIHJvdXRlczogW3JvdXRlXSxcbiAgICAgIHBhcmFtczogY3JlYXRlUGFyYW1zKHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKVxuICAgIH07XG5cbiAgICBnZXRJbmRleFJvdXRlKHJvdXRlLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBpbmRleFJvdXRlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4Um91dGUpIG1hdGNoLnJvdXRlcy5wdXNoKGluZGV4Um91dGUpO1xuXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdGNoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChyZW1haW5pbmdQYXRobmFtZSAhPSBudWxsIHx8IHJvdXRlLmNoaWxkUm91dGVzKSB7XG4gICAgLy8gRWl0aGVyIGEpIHRoaXMgcm91dGUgbWF0Y2hlZCBhdCBsZWFzdCBzb21lIG9mIHRoZSBwYXRoIG9yIGIpXG4gICAgLy8gd2UgZG9uJ3QgaGF2ZSB0byBsb2FkIHRoaXMgcm91dGUncyBjaGlsZHJlbiBhc3luY2hyb25vdXNseS4gSW5cbiAgICAvLyBlaXRoZXIgY2FzZSBjb250aW51ZSBjaGVja2luZyBmb3IgbWF0Y2hlcyBpbiB0aGUgc3VidHJlZS5cbiAgICBnZXRDaGlsZFJvdXRlcyhyb3V0ZSwgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgY2hpbGRSb3V0ZXMpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgICAgIC8vIENoZWNrIHRoZSBjaGlsZCByb3V0ZXMgdG8gc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoLlxuICAgICAgICBtYXRjaFJvdXRlcyhjaGlsZFJvdXRlcywgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgbWF0Y2gpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBBIGNoaWxkIHJvdXRlIG1hdGNoZWQhIEF1Z21lbnQgdGhlIG1hdGNoIGFuZCBwYXNzIGl0IHVwIHRoZSBzdGFjay5cbiAgICAgICAgICAgIG1hdGNoLnJvdXRlcy51bnNoaWZ0KHJvdXRlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG1hdGNoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHBhdHRlcm4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgbWF0Y2hlcyB0aGUgZ2l2ZW4gbG9jYXRpb24gdG8gYSBzZXQgb2Ygcm91dGVzIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHN0YXRlKSB3aGVuIGZpbmlzaGVkLiBUaGUgc3RhdGUgb2JqZWN0IHdpbGwgaGF2ZSB0aGVcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcm91dGVzICAgICAgIEFuIGFycmF5IG9mIHJvdXRlcyB0aGF0IG1hdGNoZWQsIGluIGhpZXJhcmNoaWNhbCBvcmRlclxuICogLSBwYXJhbXMgICAgICAgQW4gb2JqZWN0IG9mIFVSTCBwYXJhbWV0ZXJzXG4gKlxuICogTm90ZTogVGhpcyBvcGVyYXRpb24gbWF5IGZpbmlzaCBzeW5jaHJvbm91c2x5IGlmIG5vIHJvdXRlcyBoYXZlIGFuXG4gKiBhc3luY2hyb25vdXMgZ2V0Q2hpbGRSb3V0ZXMgbWV0aG9kLlxuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgYmFzZW5hbWUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAnJyA6IGFyZ3VtZW50c1szXTtcblxuICBfQXN5bmNVdGlscy5sb29wQXN5bmMocm91dGVzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgbWF0Y2hSb3V0ZURlZXAoYmFzZW5hbWUsIHJvdXRlc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG1hdGNoKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgbWF0Y2gpIHtcbiAgICAgICAgZG9uZShlcnJvciwgbWF0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1hdGNoUm91dGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaGlzdG9yeUxpYkFjdGlvbnMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9BY3Rpb25zJyk7XG5cbnZhciBfaGlzdG9yeUxpYlVzZVF1ZXJpZXMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VRdWVyaWVzJyk7XG5cbnZhciBfaGlzdG9yeUxpYlVzZVF1ZXJpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUxpYlVzZVF1ZXJpZXMpO1xuXG52YXIgX2hpc3RvcnlMaWJDcmVhdGVMb2NhdGlvbiA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfaGlzdG9yeUxpYkNyZWF0ZUxvY2F0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlMaWJDcmVhdGVMb2NhdGlvbik7XG5cbnZhciBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMyID0gcmVxdWlyZSgnLi9jb21wdXRlQ2hhbmdlZFJvdXRlcycpO1xuXG52YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXB1dGVDaGFuZ2VkUm91dGVzMik7XG5cbnZhciBfVHJhbnNpdGlvblV0aWxzID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uVXRpbHMnKTtcblxudmFyIF9pc0FjdGl2ZTIgPSByZXF1aXJlKCcuL2lzQWN0aXZlJyk7XG5cbnZhciBfaXNBY3RpdmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBY3RpdmUyKTtcblxudmFyIF9nZXRDb21wb25lbnRzID0gcmVxdWlyZSgnLi9nZXRDb21wb25lbnRzJyk7XG5cbnZhciBfZ2V0Q29tcG9uZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wb25lbnRzKTtcblxudmFyIF9tYXRjaFJvdXRlcyA9IHJlcXVpcmUoJy4vbWF0Y2hSb3V0ZXMnKTtcblxudmFyIF9tYXRjaFJvdXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFJvdXRlcyk7XG5cbmZ1bmN0aW9uIGhhc0FueVByb3BlcnRpZXMob2JqZWN0KSB7XG4gIGZvciAodmFyIHAgaW4gb2JqZWN0KSBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHApKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGFib3V0IHJvdXRpbmcuXG4gKlxuICogLSBpc0FjdGl2ZShwYXRobmFtZSwgcXVlcnkpXG4gKiAtIHJlZ2lzdGVyUm91dGVIb29rKHJvdXRlLCAobG9jYXRpb24pID0+IHt9KVxuICogLSB1bnJlZ2lzdGVyUm91dGVIb29rKHJvdXRlLCAobG9jYXRpb24pID0+IHt9KVxuICogLSBtYXRjaChsb2NhdGlvbiwgKGVycm9yLCBuZXh0U3RhdGUsIG5leHRMb2NhdGlvbikgPT4ge30pXG4gKiAtIGxpc3RlbigoZXJyb3IsIG5leHRTdGF0ZSkgPT4ge30pXG4gKi9cbmZ1bmN0aW9uIHVzZVJvdXRlcyhjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgcm91dGVzID0gb3B0aW9ucy5yb3V0ZXM7XG5cbiAgICB2YXIgaGlzdG9yeU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydyb3V0ZXMnXSk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IF9oaXN0b3J5TGliVXNlUXVlcmllczJbJ2RlZmF1bHQnXShjcmVhdGVIaXN0b3J5KShoaXN0b3J5T3B0aW9ucyk7XG4gICAgdmFyIHN0YXRlID0ge307XG5cbiAgICBmdW5jdGlvbiBpc0FjdGl2ZShwYXRobmFtZSwgcXVlcnkpIHtcbiAgICAgIHZhciBpbmRleE9ubHkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1syXTtcblxuICAgICAgcmV0dXJuIF9pc0FjdGl2ZTNbJ2RlZmF1bHQnXShwYXRobmFtZSwgcXVlcnksIGluZGV4T25seSwgc3RhdGUubG9jYXRpb24sIHN0YXRlLnJvdXRlcywgc3RhdGUucGFyYW1zKTtcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbE5leHRTdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIGZ1bmN0aW9uIG1hdGNoKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHBhcnRpYWxOZXh0U3RhdGUgJiYgcGFydGlhbE5leHRTdGF0ZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcbiAgICAgICAgLy8gQ29udGludWUgZnJvbSB3aGVyZSB3ZSBsZWZ0IG9mZi5cbiAgICAgICAgZmluaXNoTWF0Y2gocGFydGlhbE5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX21hdGNoUm91dGVzMlsnZGVmYXVsdCddKHJvdXRlcywgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIGZpbmlzaE1hdGNoKF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgbG9jYXRpb246IGxvY2F0aW9uIH0pLCBmdW5jdGlvbiAoZXJyLCBuZXh0TG9jYXRpb24sIG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgICBpZiAobmV4dFN0YXRlKSBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBuZXh0TG9jYXRpb24sIG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkZyb21SZWRpcmVjdEluZm8oX3JlZikge1xuICAgICAgdmFyIHBhdGhuYW1lID0gX3JlZi5wYXRobmFtZTtcbiAgICAgIHZhciBxdWVyeSA9IF9yZWYucXVlcnk7XG4gICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgICByZXR1cm4gX2hpc3RvcnlMaWJDcmVhdGVMb2NhdGlvbjJbJ2RlZmF1bHQnXShoaXN0b3J5LmNyZWF0ZVBhdGgocGF0aG5hbWUsIHF1ZXJ5KSwgc3RhdGUsIF9oaXN0b3J5TGliQWN0aW9ucy5SRVBMQUNFLCBoaXN0b3J5LmNyZWF0ZUtleSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5pc2hNYXRjaChuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzID0gX2NvbXB1dGVDaGFuZ2VkUm91dGVzM1snZGVmYXVsdCddKHN0YXRlLCBuZXh0U3RhdGUpO1xuXG4gICAgICB2YXIgbGVhdmVSb3V0ZXMgPSBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMubGVhdmVSb3V0ZXM7XG4gICAgICB2YXIgZW50ZXJSb3V0ZXMgPSBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMuZW50ZXJSb3V0ZXM7XG5cbiAgICAgIF9UcmFuc2l0aW9uVXRpbHMucnVuTGVhdmVIb29rcyhsZWF2ZVJvdXRlcyk7XG5cbiAgICAgIF9UcmFuc2l0aW9uVXRpbHMucnVuRW50ZXJIb29rcyhlbnRlclJvdXRlcywgbmV4dFN0YXRlLCBmdW5jdGlvbiAoZXJyb3IsIHJlZGlyZWN0SW5mbykge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVkaXJlY3RJbmZvKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgY3JlYXRlTG9jYXRpb25Gcm9tUmVkaXJlY3RJbmZvKHJlZGlyZWN0SW5mbyksIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRPRE86IEZldGNoIGNvbXBvbmVudHMgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgICAgICBfZ2V0Q29tcG9uZW50czJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIGZ1bmN0aW9uIChlcnJvciwgY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG51bGwsIF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgY29tcG9uZW50czogY29tcG9uZW50cyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBSb3V0ZUhvb2tzID0ge307XG5cbiAgICB2YXIgUm91dGVHdWlkID0gMTtcblxuICAgIGZ1bmN0aW9uIGdldFJvdXRlSUQocm91dGUpIHtcbiAgICAgIHJldHVybiByb3V0ZS5fX2lkX18gfHwgKHJvdXRlLl9faWRfXyA9IFJvdXRlR3VpZCsrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKHJvdXRlcykge1xuICAgICAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGhvb2tzLCByb3V0ZSkge1xuICAgICAgICBob29rcy5wdXNoLmFwcGx5KGhvb2tzLCBSb3V0ZUhvb2tzW2dldFJvdXRlSUQocm91dGUpXSk7XG4gICAgICAgIHJldHVybiBob29rcztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uSG9vayhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgIF9tYXRjaFJvdXRlczJbJ2RlZmF1bHQnXShyb3V0ZXMsIGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpIHtcbiAgICAgICAgICAvLyBUT0RPOiBXZSBkaWRuJ3QgYWN0dWFsbHkgbWF0Y2ggYW55dGhpbmcsIGJ1dCBoYW5nXG4gICAgICAgICAgLy8gb250byBlcnJvci9uZXh0U3RhdGUgc28gd2UgZG9uJ3QgaGF2ZSB0byBtYXRjaFJvdXRlc1xuICAgICAgICAgIC8vIGFnYWluIGluIHRoZSBsaXN0ZW4gY2FsbGJhY2suXG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWNoZSBzb21lIHN0YXRlIGhlcmUgc28gd2UgZG9uJ3QgaGF2ZSB0b1xuICAgICAgICAvLyBtYXRjaFJvdXRlcygpIGFnYWluIGluIHRoZSBsaXN0ZW4gY2FsbGJhY2suXG4gICAgICAgIHBhcnRpYWxOZXh0U3RhdGUgPSBfZXh0ZW5kcyh7fSwgbmV4dFN0YXRlLCB7IGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcblxuICAgICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKF9jb21wdXRlQ2hhbmdlZFJvdXRlczNbJ2RlZmF1bHQnXShzdGF0ZSwgbmV4dFN0YXRlKS5sZWF2ZVJvdXRlcyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhvb2tzLmxlbmd0aDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgLy8gUGFzc2luZyB0aGUgbG9jYXRpb24gYXJnIGhlcmUgaW5kaWNhdGVzIHRvXG4gICAgICAgICAgLy8gdGhlIHVzZXIgdGhhdCB0aGlzIGlzIGEgdHJhbnNpdGlvbiBob29rLlxuICAgICAgICAgIHJlc3VsdCA9IGhvb2tzW2ldKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWZvcmVVbmxvYWRIb29rKCkge1xuICAgICAgLy8gU3luY2hyb25vdXNseSBjaGVjayB0byBzZWUgaWYgYW55IHJvdXRlIGhvb2tzIHdhbnQgdG9cbiAgICAgIC8vIHByZXZlbnQgdGhlIGN1cnJlbnQgd2luZG93L3RhYiBmcm9tIGNsb3NpbmcuXG4gICAgICBpZiAoc3RhdGUucm91dGVzKSB7XG4gICAgICAgIHZhciBob29rcyA9IGdldFJvdXRlSG9va3NGb3JSb3V0ZXMoc3RhdGUucm91dGVzKTtcblxuICAgICAgICB2YXIgbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhvb2tzLmxlbmd0aDsgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnICYmIGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIC8vIFBhc3Npbmcgbm8gYXJncyBpbmRpY2F0ZXMgdG8gdGhlIHVzZXIgdGhhdCB0aGlzIGlzIGFcbiAgICAgICAgICAvLyBiZWZvcmV1bmxvYWQgaG9vay4gV2UgZG9uJ3Qga25vdyB0aGUgbmV4dCBsb2NhdGlvbi5cbiAgICAgICAgICBtZXNzYWdlID0gaG9va3NbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyUm91dGVIb29rKHJvdXRlLCBob29rKSB7XG4gICAgICAvLyBUT0RPOiBXYXJuIGlmIHRoZXkgcmVnaXN0ZXIgZm9yIGEgcm91dGUgdGhhdCBpc24ndCBjdXJyZW50bHlcbiAgICAgIC8vIGFjdGl2ZS4gVGhleSdyZSBwcm9iYWJseSBkb2luZyBzb21ldGhpbmcgd3JvbmcsIGxpa2UgcmUtY3JlYXRpbmdcbiAgICAgIC8vIHJvdXRlIG9iamVjdHMgb24gZXZlcnkgbG9jYXRpb24gY2hhbmdlLlxuICAgICAgdmFyIHJvdXRlSUQgPSBnZXRSb3V0ZUlEKHJvdXRlKTtcbiAgICAgIHZhciBob29rcyA9IFJvdXRlSG9va3Nbcm91dGVJRF07XG5cbiAgICAgIGlmIChob29rcyA9PSBudWxsKSB7XG4gICAgICAgIHZhciB0aGVyZVdlcmVOb1JvdXRlSG9va3MgPSAhaGFzQW55UHJvcGVydGllcyhSb3V0ZUhvb2tzKTtcblxuICAgICAgICBob29rcyA9IFJvdXRlSG9va3Nbcm91dGVJRF0gPSBbaG9va107XG5cbiAgICAgICAgaWYgKHRoZXJlV2VyZU5vUm91dGVIb29rcykge1xuICAgICAgICAgIGhpc3RvcnkucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayh0cmFuc2l0aW9uSG9vayk7XG5cbiAgICAgICAgICBpZiAoaGlzdG9yeS5yZWdpc3RlckJlZm9yZVVubG9hZEhvb2spIGhpc3RvcnkucmVnaXN0ZXJCZWZvcmVVbmxvYWRIb29rKGJlZm9yZVVubG9hZEhvb2spO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB7XG4gICAgICAgIGhvb2tzLnB1c2goaG9vayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlclJvdXRlSG9vayhyb3V0ZSwgaG9vaykge1xuICAgICAgdmFyIHJvdXRlSUQgPSBnZXRSb3V0ZUlEKHJvdXRlKTtcbiAgICAgIHZhciBob29rcyA9IFJvdXRlSG9va3Nbcm91dGVJRF07XG5cbiAgICAgIGlmIChob29rcyAhPSBudWxsKSB7XG4gICAgICAgIHZhciBuZXdIb29rcyA9IGhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmV3SG9va3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIFJvdXRlSG9va3Nbcm91dGVJRF07XG5cbiAgICAgICAgICBpZiAoIWhhc0FueVByb3BlcnRpZXMoUm91dGVIb29rcykpIHtcbiAgICAgICAgICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKHRyYW5zaXRpb25Ib29rKTtcblxuICAgICAgICAgICAgaWYgKGhpc3RvcnkudW5yZWdpc3RlckJlZm9yZVVubG9hZEhvb2spIGhpc3RvcnkudW5yZWdpc3RlckJlZm9yZVVubG9hZEhvb2soYmVmb3JlVW5sb2FkSG9vayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJvdXRlSG9va3Nbcm91dGVJRF0gPSBuZXdIb29rcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIEFQSSBmb3Igc3RhdGVmdWwgZW52aXJvbm1lbnRzLiBBcyB0aGUgbG9jYXRpb24gY2hhbmdlcyxcbiAgICAgKiB3ZSB1cGRhdGUgc3RhdGUgYW5kIGNhbGwgdGhlIGxpc3RlbmVyLiBCZW5lZml0cyBvZiB0aGlzIEFQSSBhcmU6XG4gICAgICpcbiAgICAgKiAtIFdlIGF1dG9tYXRpY2FsbHkgbWFuYWdlIHN0YXRlIG9uIHRoZSBjbGllbnRcbiAgICAgKiAtIFdlIGF1dG9tYXRpY2FsbHkgaGFuZGxlIHJlZGlyZWN0cyBvbiB0aGUgY2xpZW50XG4gICAgICogLSBXZSB3YXJuIHdoZW4gdGhlIGxvY2F0aW9uIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgICBpZiAoc3RhdGUubG9jYXRpb24gPT09IGxvY2F0aW9uKSB7XG4gICAgICAgICAgbGlzdGVuZXIobnVsbCwgc3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoKGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG5leHRMb2NhdGlvbiwgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIobnVsbCwgc3RhdGUpOyAvLyBtYXRjaCBtdXRhdGVzIHN0YXRlIHRvIG5leHRTdGF0ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0TG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnTG9jYXRpb24gXCIlc1wiIGRpZCBub3QgbWF0Y2ggYW55IHJvdXRlcycsIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgIGlzQWN0aXZlOiBpc0FjdGl2ZSxcbiAgICAgIHJlZ2lzdGVyUm91dGVIb29rOiByZWdpc3RlclJvdXRlSG9vayxcbiAgICAgIHVucmVnaXN0ZXJSb3V0ZUhvb2s6IHVucmVnaXN0ZXJSb3V0ZUhvb2ssXG4gICAgICBsaXN0ZW46IGxpc3RlbixcbiAgICAgIG1hdGNoOiBtYXRjaFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB1c2VSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9vcEFzeW5jID0gbG9vcEFzeW5jO1xuXG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDA7XG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRUdXJuIDwgdHVybnMpIHtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbmV4cG9ydHMucmVhZFN0YXRlID0gcmVhZFN0YXRlO1xudmFyIEtleVByZWZpeCA9ICdAQEhpc3RvcnkvJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVhdGVLZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICB2YXIganNvbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWF0ZUtleShrZXkpKTtcblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIG1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlRE9NSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRE9NSGlzdG9yeSk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24gPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24pO1xuXG5mdW5jdGlvbiBpc0Fic29sdXRlUGF0aChwYXRoKSB7XG4gIHJldHVybiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgJiYgcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldEhhc2hQYXRoKCk7XG5cbiAgaWYgKGlzQWJzb2x1dGVQYXRoKHBhdGgpKSByZXR1cm4gdHJ1ZTtcblxuICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKCcvJyArIHBhdGgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBwYXRoICsgKHBhdGguaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAoa2V5ICsgJz0nICsgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKCdbPyZdPycgKyBrZXkgKyAnPVthLXpBLVowLTldKycpLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBrZXkpIHtcbiAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChuZXcgUmVnRXhwKCdcXFxcPy4qP1xcXFxiJyArIGtleSArICc9KC4rPylcXFxcYicpKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuXG52YXIgRGVmYXVsdFF1ZXJ5S2V5ID0gJ19rJztcblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIHF1ZXJ5S2V5ID0gb3B0aW9ucy5xdWVyeUtleTtcblxuICBpZiAocXVlcnlLZXkgPT09IHVuZGVmaW5lZCB8fCAhIXF1ZXJ5S2V5KSBxdWVyeUtleSA9IHR5cGVvZiBxdWVyeUtleSA9PT0gJ3N0cmluZycgPyBxdWVyeUtleSA6IERlZmF1bHRRdWVyeUtleTtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0SGFzaFBhdGgoKTtcblxuICAgIHZhciBrZXkgPSB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChxdWVyeUtleSkge1xuICAgICAga2V5ID0gZ2V0UXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIHF1ZXJ5S2V5KTtcbiAgICAgIHBhdGggPSBzdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aChwYXRoLCBxdWVyeUtleSk7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuICAgICAgICBfRE9NVXRpbHMucmVwbGFjZUhhc2hQYXRoKGFkZFF1ZXJ5U3RyaW5nVmFsdWVUb1BhdGgocGF0aCwgcXVlcnlLZXksIGtleSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfY3JlYXRlTG9jYXRpb24yWydkZWZhdWx0J10ocGF0aCwgc3RhdGUsIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0SGFzaENoYW5nZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHJldHVybjsgLy8gQWx3YXlzIG1ha2Ugc3VyZSBoYXNoZXMgYXJlIHByZWNlZWRlZCB3aXRoIGEgLy5cblxuICAgICAgdHJhbnNpdGlvblRvKGdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgICB9XG5cbiAgICBlbnN1cmVTbGFzaCgpO1xuICAgIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2g7XG5cbiAgICBpZiAocXVlcnlLZXkpIHBhdGggPSBhZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoKHBhdGgsIHF1ZXJ5S2V5LCBrZXkpO1xuXG4gICAgaWYgKHBhdGggPT09IF9ET01VdGlscy5nZXRIYXNoUGF0aCgpKSB7XG4gICAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1lvdSBjYW5ub3QgJXMgdGhlIHNhbWUgcGF0aCB1c2luZyBoYXNoIGhpc3RvcnknLCBhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVlcnlLZXkpIHtcbiAgICAgICAgX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGUoa2V5LCBzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEcm9wIGtleSBhbmQgc3RhdGUuXG4gICAgICAgIGxvY2F0aW9uLmtleSA9IGxvY2F0aW9uLnN0YXRlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSRVBMQUNFXG4gICAgICAgIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gc3RhcnRIYXNoQ2hhbmdlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcEhhc2hDaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBzdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpO1xuXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHBhdGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgX3dhcm5pbmcyWydkZWZhdWx0J10ocXVlcnlLZXkgfHwgc3RhdGUgPT0gbnVsbCwgJ1lvdSBjYW5ub3QgdXNlIHN0YXRlIHdpdGhvdXQgYSBxdWVyeUtleSBpdCB3aWxsIGJlIGRyb3BwZWQnKTtcblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKTtcbiAgfVxuXG4gIHZhciBnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCA9IF9ET01VdGlscy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpO1xuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBfd2FybmluZzJbJ2RlZmF1bHQnXShnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpO1xuXG4gICAgaGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYocGF0aCkge1xuICAgIHJldHVybiAnIycgKyBoaXN0b3J5LmNyZWF0ZUhyZWYocGF0aCk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICBwdXNoU3RhdGU6IHB1c2hTdGF0ZSxcbiAgICByZXBsYWNlU3RhdGU6IHJlcGxhY2VTdGF0ZSxcbiAgICBnbzogZ28sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZlxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGFzaEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24gPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24pO1xuXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21LZXkobGVuZ3RoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiZcbiAgLy9hLmFjdGlvbiA9PT0gYi5hY3Rpb24gJiYgLy8gRGlmZmVyZW50IGFjdGlvbiAhPT0gbG9jYXRpb24gY2hhbmdlLlxuICBhLmtleSA9PT0gYi5rZXkgJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxudmFyIERlZmF1bHRLZXlMZW5ndGggPSA2O1xuXG5mdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgZ2V0Q3VycmVudExvY2F0aW9uID0gb3B0aW9ucy5nZXRDdXJyZW50TG9jYXRpb247XG4gIHZhciBmaW5pc2hUcmFuc2l0aW9uID0gb3B0aW9ucy5maW5pc2hUcmFuc2l0aW9uO1xuICB2YXIgc2F2ZVN0YXRlID0gb3B0aW9ucy5zYXZlU3RhdGU7XG4gIHZhciBnbyA9IG9wdGlvbnMuZ287XG4gIHZhciBrZXlMZW5ndGggPSBvcHRpb25zLmtleUxlbmd0aDtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBvcHRpb25zLmdldFVzZXJDb25maXJtYXRpb247XG5cbiAgaWYgKHR5cGVvZiBrZXlMZW5ndGggIT09ICdudW1iZXInKSBrZXlMZW5ndGggPSBEZWZhdWx0S2V5TGVuZ3RoO1xuXG4gIHZhciB0cmFuc2l0aW9uSG9va3MgPSBbXTtcbiAgdmFyIGNoYW5nZUxpc3RlbmVycyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGFsbEtleXMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2xvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICBhbGxLZXlzID0gW19sb2NhdGlvbi5rZXldO1xuICAgICAgdXBkYXRlTG9jYXRpb24oX2xvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBydW5UcmFuc2l0aW9uSG9vayhob29rLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gICAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgICAgLy8gQXNzdW1lIHRoZSBob29rIHJ1bnMgc3luY2hyb25vdXNseSBhbmQgYXV0b21hdGljYWxseVxuICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudCBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBfQXN5bmNVdGlscy5sb29wQXN5bmModHJhbnNpdGlvbkhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICBydW5UcmFuc2l0aW9uSG9vayh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10ocGVuZGluZ0xvY2F0aW9uID09IG51bGwsICd0cmFuc2l0aW9uVG86IEFub3RoZXIgdHJhbnNpdGlvbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzJyk7XG5cbiAgICBwZW5kaW5nTG9jYXRpb24gPSBuZXh0TG9jYXRpb247XG5cbiAgICBjb25maXJtVHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBwZW5kaW5nTG9jYXRpb24gPSBudWxsO1xuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgICB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIHRyYW5zaXRpb25UbyhfY3JlYXRlTG9jYXRpb24yWydkZWZhdWx0J10ocGF0aCwgc3RhdGUsIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICB0cmFuc2l0aW9uVG8oX2NyZWF0ZUxvY2F0aW9uMlsnZGVmYXVsdCddKHBhdGgsIHN0YXRlLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShnZXRDdXJyZW50TG9jYXRpb24oKSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKSB7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24uc3RhdGUsIHN0YXRlKTtcbiAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBjcmVhdGVSYW5kb21LZXkoa2V5TGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaFN0YXRlOiBwdXNoU3RhdGUsXG4gICAgcmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUsXG4gICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWZcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdMb2NhdGlvbiBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBxdWVyeSBzdHJpbmcgb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzJdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBwYXRoID0gZXh0cmFjdFBhdGgocGF0aCk7XG5cbiAgdmFyIHBhdGhuYW1lID0gcGF0aDtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uID0gcmVxdWlyZSgnLi9jcmVhdGVMb2NhdGlvbicpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxvY2F0aW9uKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5KTtcblxuZnVuY3Rpb24gY3JlYXRlU3RvcmFnZShlbnRyaWVzKSB7XG4gIHJldHVybiBlbnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoZW50cnkpIHtcbiAgICByZXR1cm4gZW50cnkuc3RhdGU7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAobWVtbywgZW50cnkpIHtcbiAgICBtZW1vW2VudHJ5LmtleV0gPSBlbnRyeS5zdGF0ZTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHsgZW50cmllczogb3B0aW9ucyB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7IGVudHJpZXM6IFtvcHRpb25zXSB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBzYXZlU3RhdGUsXG4gICAgZ286IGdvXG4gIH0pKTtcblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zO1xuICB2YXIgZW50cmllcyA9IF9vcHRpb25zLmVudHJpZXM7XG4gIHZhciBjdXJyZW50ID0gX29wdGlvbnMuY3VycmVudDtcblxuICBpZiAodHlwZW9mIGVudHJpZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZW50cmllcyA9IFtlbnRyaWVzXTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xuICAgIGVudHJpZXMgPSBbJy8nXTtcbiAgfVxuXG4gIGVudHJpZXMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICB2YXIga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSByZXR1cm4geyBwYXRobmFtZTogZW50cnksIGtleToga2V5IH07XG5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnb2JqZWN0JyAmJiBlbnRyeSkgcmV0dXJuIF9leHRlbmRzKHt9LCBlbnRyeSwgeyBrZXk6IGtleSB9KTtcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdVbmFibGUgdG8gY3JlYXRlIGhpc3RvcnkgZW50cnkgZnJvbSAlcycsIGVudHJ5KTtcbiAgfSk7XG5cbiAgaWYgKGN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGN1cnJlbnQgPSBlbnRyaWVzLmxlbmd0aCAtIDE7XG4gIH0gZWxzZSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShjdXJyZW50ID49IDAgJiYgY3VycmVudCA8IGVudHJpZXMubGVuZ3RoLCAnQ3VycmVudCBpbmRleCBtdXN0IGJlID49IDAgYW5kIDwgJXMsIHdhcyAlcycsIGVudHJpZXMubGVuZ3RoLCBjdXJyZW50KTtcbiAgfVxuXG4gIHZhciBzdG9yYWdlID0gY3JlYXRlU3RvcmFnZShlbnRyaWVzKTtcblxuICBmdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICAgIHN0b3JhZ2Vba2V5XSA9IHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICAgIHJldHVybiBzdG9yYWdlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tjdXJyZW50XTtcbiAgICB2YXIga2V5ID0gZW50cnkua2V5O1xuICAgIHZhciBwYXRobmFtZSA9IGVudHJ5LnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBlbnRyeS5zZWFyY2g7XG5cbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgKHNlYXJjaCB8fCAnJyk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSByZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcbiAgICAgIGVudHJ5LmtleSA9IGtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uMlsnZGVmYXVsdCddKHBhdGgsIHN0YXRlLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5HbyhuKSB7XG4gICAgdmFyIGluZGV4ID0gY3VycmVudCArIG47XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBlbnRyaWVzLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBpZiAobikge1xuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShjYW5HbyhuKSwgJ0Nhbm5vdCBnbyglcykgdGhlcmUgaXMgbm90IGVub3VnaCBoaXN0b3J5Jywgbik7XG5cbiAgICAgIGN1cnJlbnQgKz0gbjtcblxuICAgICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuXG4gICAgICAvLyBjaGFuZ2UgYWN0aW9uIHRvIFBPUFxuICAgICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oX2V4dGVuZHMoe30sIGN1cnJlbnRMb2NhdGlvbiwgeyBhY3Rpb246IF9BY3Rpb25zLlBPUCB9KSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHN3aXRjaCAobG9jYXRpb24uYWN0aW9uKSB7XG4gICAgICBjYXNlIF9BY3Rpb25zLlBVU0g6XG4gICAgICAgIGN1cnJlbnQgKz0gMTtcblxuICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IG9uIHRoZSB0b3Agb2Ygc3RhY2tcbiAgICAgICAgLy8gcmVtb3ZlIHJlc3QgYW5kIHB1c2ggbmV3XG4gICAgICAgIGlmIChjdXJyZW50IDwgZW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgICBlbnRyaWVzLnNwbGljZShjdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJpZXMucHVzaChsb2NhdGlvbik7XG4gICAgICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIF9BY3Rpb25zLlJFUExBQ0U6XG4gICAgICAgIGVudHJpZXNbY3VycmVudF0gPSBsb2NhdGlvbjtcbiAgICAgICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTWVtb3J5SGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcXMgPSByZXF1aXJlKCdxcycpO1xuXG52YXIgX3FzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3FzKTtcblxuZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiBfcXMyWydkZWZhdWx0J10uc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICByZXR1cm4gX3FzMlsnZGVmYXVsdCddLnBhcnNlKHF1ZXJ5U3RyaW5nKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGNyZWF0ZUhpc3RvcnkgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGVcbiAqIGhpc3Rvcnkgb2JqZWN0cyB0aGF0IGtub3cgaG93IHRvIGhhbmRsZSBVUkwgcXVlcmllcy5cbiAqL1xuZnVuY3Rpb24gdXNlUXVlcmllcyhjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBvcHRpb25zLnN0cmluZ2lmeVF1ZXJ5O1xuICAgIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJzZVF1ZXJ5U3RyaW5nO1xuXG4gICAgdmFyIGhpc3RvcnlPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFsnc3RyaW5naWZ5UXVlcnknLCAncGFyc2VRdWVyeVN0cmluZyddKTtcblxuICAgIHZhciBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShoaXN0b3J5T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ2lmeVF1ZXJ5ICE9PSAnZnVuY3Rpb24nKSBzdHJpbmdpZnlRdWVyeSA9IGRlZmF1bHRTdHJpbmdpZnlRdWVyeTtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VRdWVyeVN0cmluZyAhPT0gJ2Z1bmN0aW9uJykgcGFyc2VRdWVyeVN0cmluZyA9IGRlZmF1bHRQYXJzZVF1ZXJ5U3RyaW5nO1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIGlmICghbG9jYXRpb24ucXVlcnkpIGxvY2F0aW9uLnF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGhuYW1lLCBxdWVyeSkge1xuICAgICAgcmV0dXJuIGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCBjcmVhdGVQYXRoKHBhdGhuYW1lLCBxdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsIGNyZWF0ZVBhdGgocGF0aG5hbWUsIHF1ZXJ5KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGF0aChwYXRobmFtZSwgcXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChxdWVyeSA9PSBudWxsIHx8IChxdWVyeVN0cmluZyA9IHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSkgPT09ICcnKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZVBhdGgocGF0aG5hbWUgKyAocGF0aG5hbWUuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBxdWVyeVN0cmluZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRobmFtZSwgcXVlcnkpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWYoY3JlYXRlUGF0aChwYXRobmFtZSwgcXVlcnkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgIGxpc3RlbjogbGlzdGVuLFxuICAgICAgcHVzaFN0YXRlOiBwdXNoU3RhdGUsXG4gICAgICByZXBsYWNlU3RhdGU6IHJlcGxhY2VTdGF0ZSxcbiAgICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHVzZVF1ZXJpZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgUGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN0cmluZ2lmeTogU3RyaW5naWZ5LFxuICAgIHBhcnNlOiBQYXJzZVxufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZVxufTtcblxuXG5pbnRlcm5hbHMucGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcGFydHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSAnJztcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleSA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKDAsIHBvcykpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKHBvcyArIDEpKTtcblxuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IFtdLmNvbmNhdChvYmpba2V5XSkuY29uY2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuXG4gICAgaWYgKCFjaGFpbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICB2YXIgcm9vdCA9IGNoYWluLnNoaWZ0KCk7XG5cbiAgICB2YXIgb2JqO1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3RbMF0gPT09ICdbJyAmJiByb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgcm9vdC5sZW5ndGggLSAxKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJyArIGluZGV4O1xuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleFN0cmluZyA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICAob3B0aW9ucy5wYXJzZUFycmF5cyAmJlxuICAgICAgICAgICAgIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdCkpIHtcblxuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VLZXlzID0gZnVuY3Rpb24gKGtleSwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRvdCBub3RhdGlvbiB0byBicmFja2V0IG5vdGF0aW9uXG5cbiAgICBpZiAob3B0aW9ucy5hbGxvd0RvdHMpIHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xcLihbXlxcLlxcW10rKS9nLCAnWyQxXScpO1xuICAgIH1cblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBwYXJlbnQgPSAvXihbXlxcW1xcXV0qKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXlxcW1xcXV0qXFxdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gcGFyZW50LmV4ZWMoa2V5KTtcblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChzZWdtZW50WzFdKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzXG4gICAgICAgIC8vIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0pKSB7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuXG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJlxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpKSkge1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcm5hbHMucGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgVXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBpbnRlcm5hbHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogaW50ZXJuYWxzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogaW50ZXJuYWxzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJzZUFycmF5cyA9IG9wdGlvbnMucGFyc2VBcnJheXMgIT09IGZhbHNlO1xuICAgIG9wdGlvbnMuYWxsb3dEb3RzID0gb3B0aW9ucy5hbGxvd0RvdHMgIT09IGZhbHNlO1xuICAgIG9wdGlvbnMucGxhaW5PYmplY3RzID0gdHlwZW9mIG9wdGlvbnMucGxhaW5PYmplY3RzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnBsYWluT2JqZWN0cyA6IGludGVybmFscy5wbGFpbk9iamVjdHM7XG4gICAgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgPSB0eXBlb2Ygb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzIDogaW50ZXJuYWxzLmFsbG93UHJvdG90eXBlcztcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGludGVybmFscy5wYXJhbWV0ZXJMaW1pdDtcbiAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9IHR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBpbnRlcm5hbHMuc3RyaWN0TnVsbEhhbmRsaW5nO1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHxcbiAgICAgICAgc3RyID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBpbnRlcm5hbHMucGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IGludGVybmFscy5wYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSBVdGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgYXJyYXlQcmVmaXhHZW5lcmF0b3JzOiB7XG4gICAgICAgIGJyYWNrZXRzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgICAgIH0sXG4gICAgICAgIGluZGljZXM6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgICAgICB9LFxuICAgICAgICByZXBlYXQ6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG5cbmludGVybmFscy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBwcmVmaXgsIGdlbmVyYXRlQXJyYXlQcmVmaXgsIHN0cmljdE51bGxIYW5kbGluZywgZmlsdGVyKSB7XG5cbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH1cbiAgICBlbHNlIGlmIChVdGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IG9iai50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmVuY29kZShwcmVmaXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuXG4gICAgICAgIHJldHVybiBbVXRpbHMuZW5jb2RlKHByZWZpeCkgKyAnPScgKyBVdGlscy5lbmNvZGUob2JqKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXMgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBmaWx0ZXIgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLCBnZW5lcmF0ZUFycmF5UHJlZml4LCBzdHJpY3ROdWxsSGFuZGxpbmcsIGZpbHRlcikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBwcmVmaXggKyAnWycgKyBrZXkgKyAnXScsIGdlbmVyYXRlQXJyYXlQcmVmaXgsIHN0cmljdE51bGxIYW5kbGluZywgZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gaW50ZXJuYWxzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuICAgIHZhciBzdHJpY3ROdWxsSGFuZGxpbmcgPSB0eXBlb2Ygb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nIDogaW50ZXJuYWxzLnN0cmljdE51bGxIYW5kbGluZztcbiAgICB2YXIgb2JqS2V5cztcbiAgICB2YXIgZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGtleSwgZ2VuZXJhdGVBcnJheVByZWZpeCwgc3RyaWN0TnVsbEhhbmRsaW5nLCBmaWx0ZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuaW50ZXJuYWxzLmhleFRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5mb3IgKHZhciBoID0gMDsgaCA8IDI1NjsgKytoKSB7XG4gICAgaW50ZXJuYWxzLmhleFRhYmxlW2hdID0gJyUnICsgKChoIDwgMTYgPyAnMCcgOiAnJykgKyBoLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKTtcbn1cblxuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc291cmNlLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblxuICAgICAgICB0YXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgZm9yICh2YXIgayA9IDAsIGtsID0ga2V5cy5sZW5ndGg7IGsgPCBrbDsgKytrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcblxuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyID0gJycgKyBzdHI7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHN0ci5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKGMgPT09IDB4MkQgfHwgLy8gLVxuICAgICAgICAgICAgYyA9PT0gMHgyRSB8fCAvLyAuXG4gICAgICAgICAgICBjID09PSAweDVGIHx8IC8vIF9cbiAgICAgICAgICAgIGMgPT09IDB4N0UgfHwgLy8gflxuICAgICAgICAgICAgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIHx8IC8vIDAtOVxuICAgICAgICAgICAgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIHx8IC8vIGEtelxuICAgICAgICAgICAgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpKSB7IC8vIEEtWlxuXG4gICAgICAgICAgICBvdXQgKz0gc3RyW2ldO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCArPSBpbnRlcm5hbHMuaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCArPSBpbnRlcm5hbHMuaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGludGVybmFscy5oZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgKz0gaW50ZXJuYWxzLmhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaW50ZXJuYWxzLmhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBpbnRlcm5hbHMuaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICArK2k7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaW50ZXJuYWxzLmhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldICsgaW50ZXJuYWxzLmhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildICsgaW50ZXJuYWxzLmhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBpbnRlcm5hbHMuaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZzKSB7XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZWZzID0gcmVmcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iai5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIGlmIChvYmogPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiZcbiAgICAgICAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbi8vaW1wb3J0IHJvdXRlcnMgZnJvbSBcIi4vcm91dGVyc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybCA9IHRoaXMudXBkYXRlVXJsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lIHx8ICcvJ307XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZS50YXJnZXQucGF0aG5hbWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVybChlLnRhcmdldC5wYXRobmFtZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXJsIChwYXRobmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRobmFtZTogcGF0aG5hbWV9KTtcbiAgICB9XG5cbiAgICBnZXRQYXRoTmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5BcHA8L2gxPlxuICAgICAgICAgICAgICAgIHsvKiBjaGFuZ2UgdGhlIDxhPnMgdG8gPExpbmtzPnMgKi99XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvZm9ybS9cIj5Gb3JtPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9hYm91dC9cIj5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgbmV4dCB3ZSByZXBsYWNlIGA8Q2hpbGQ+YCB3aXRoIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICAgICAgICAgICAgICAgICB0aGUgcm91dGVyIHdpbGwgZmlndXJlIG91dCB0aGUgY2hpbGRyZW4gZm9yIHVzXG4gICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvL1JlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGVycy5nZXRDb21wb25lbnQodGhpcy5nZXRQYXRoTmFtZSgpKSwge2RhdGE6IHRoaXMucHJvcHMsIGhhbmRsZUNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrfSlcbiAgICAgICAgKVxuICAgIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
