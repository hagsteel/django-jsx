(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jonas/Projects/Django/django-jsx/demo/static/js/index.js":[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _srcComponentsHome = require("./src/components/home");

var _srcComponentsHome2 = _interopRequireDefault(_srcComponentsHome);

var _srcComponentsAbout = require("./src/components/about");

var _srcComponentsAbout2 = _interopRequireDefault(_srcComponentsAbout);

_react2["default"].render(_react2["default"].createElement(_srcComponentsHome2["default"], null), document);

},{"./src/components/about":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js","./src/components/home":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Calendar.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _VIEW, _OPPOSITE_DIRECTION, _MULTIPLIER;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _Header = require('./Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = babelHelpers.interopRequireDefault(_Footer);

var _Month = require('./Month');

var _Month2 = babelHelpers.interopRequireDefault(_Month);

var _Year = require('./Year');

var _Year2 = babelHelpers.interopRequireDefault(_Year);

var _Decade = require('./Decade');

var _Decade2 = babelHelpers.interopRequireDefault(_Decade);

var _Century = require('./Century');

var _Century2 = babelHelpers.interopRequireDefault(_Century);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = babelHelpers.interopRequireDefault(_uncontrollable);

var _SlideTransition = require('./SlideTransition');

var _SlideTransition2 = babelHelpers.interopRequireDefault(_SlideTransition);

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConstants = require('./util/constants');

var _utilConstants2 = babelHelpers.interopRequireDefault(_utilConstants);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

//values, omit

var dir = _utilConstants2['default'].directions,
    values = function values(obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
},
    invert = function invert(obj) {
  return _util_2['default'].transform(obj, function (o, val, key) {
    o[val] = key;
  }, {});
};

var localizers = _utilConfiguration2['default'].locale,
    views = _utilConstants2['default'].calendarViews,
    VIEW_OPTIONS = values(views),
    ALT_VIEW = invert(_utilConstants2['default'].calendarViewHierarchy),
    NEXT_VIEW = _utilConstants2['default'].calendarViewHierarchy,
    VIEW_UNIT = _utilConstants2['default'].calendarViewUnits,
    VIEW = (_VIEW = {}, _VIEW[views.MONTH] = _Month2['default'], _VIEW[views.YEAR] = _Year2['default'], _VIEW[views.DECADE] = _Decade2['default'], _VIEW[views.CENTURY] = _Century2['default'], _VIEW);

var ARROWS_TO_DIRECTION = {
  ArrowDown: dir.DOWN,
  ArrowUp: dir.UP,
  ArrowRight: dir.RIGHT,
  ArrowLeft: dir.LEFT
};

var OPPOSITE_DIRECTION = (_OPPOSITE_DIRECTION = {}, _OPPOSITE_DIRECTION[dir.LEFT] = dir.RIGHT, _OPPOSITE_DIRECTION[dir.RIGHT] = dir.LEFT, _OPPOSITE_DIRECTION);

var MULTIPLIER = (_MULTIPLIER = {}, _MULTIPLIER[views.YEAR] = 1, _MULTIPLIER[views.DECADE] = 10, _MULTIPLIER[views.CENTURY] = 100, _MULTIPLIER);

var format = function format(props, f) {
  return props[f + 'Format'] || localizers.date.formats[f];
};

var propTypes = {

  onChange: _react2['default'].PropTypes.func,
  value: _react2['default'].PropTypes.instanceOf(Date),

  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),

  initialView: _react2['default'].PropTypes.oneOf(VIEW_OPTIONS),

  finalView: function finalView(props, propname, componentName) {
    var err = _react2['default'].PropTypes.oneOf(VIEW_OPTIONS)(props, propname, componentName);

    if (err) return err;
    if (VIEW_OPTIONS.indexOf(props[propname]) < VIEW_OPTIONS.indexOf(props.initialView)) return new Error(('The `' + propname + '` prop: `' + props[propname] + '` cannot be \'lower\' than the `initialView`\n        prop. This creates a range that cannot be rendered.').replace(/\n\t/g, ''));
  },

  disabled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['disabled'])]),

  readOnly: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['readOnly'])]),

  culture: _react2['default'].PropTypes.string,

  footer: _react2['default'].PropTypes.bool,

  dayComponent: _utilPropTypes2['default'].elementType,
  headerFormat: _utilPropTypes2['default'].dateFormat,
  footerFormat: _utilPropTypes2['default'].dateFormat,

  dayFormat: _utilPropTypes2['default'].dateFormat,
  dateFormat: _utilPropTypes2['default'].dateFormat,
  monthFormat: _utilPropTypes2['default'].dateFormat,
  yearFormat: _utilPropTypes2['default'].dateFormat,
  decadeFormat: _utilPropTypes2['default'].dateFormat,
  centuryFormat: _utilPropTypes2['default'].dateFormat,

  messages: _react2['default'].PropTypes.shape({
    moveBack: _react2['default'].PropTypes.string,
    moveForward: _react2['default'].PropTypes.string
  })
};

var Calendar = _react2['default'].createClass({

  displayName: 'Calendar',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/PureRenderMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  getInitialState: function getInitialState() {
    var value = this.inRangeValue(this.props.value);

    return {
      selectedIndex: 0,
      view: this.props.initialView || 'month',
      currentDate: value ? new Date(value) : this.inRangeValue(new Date())
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {

      value: null,
      min: new Date(1900, 0, 1),
      max: new Date(2099, 11, 31),

      initialView: 'month',
      finalView: 'century',

      tabIndex: '0',
      footer: false,

      ariaActiveDescendantKey: 'calendar',
      messages: msgs({})
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var bottom = VIEW_OPTIONS.indexOf(nextProps.initialView),
        top = VIEW_OPTIONS.indexOf(nextProps.finalView),
        current = VIEW_OPTIONS.indexOf(this.state.view),
        view = this.state.view,
        val = this.inRangeValue(nextProps.value);

    if (current < bottom) this.setState({ view: view = nextProps.initialView });else if (current > top) this.setState({ view: view = nextProps.finalView });

    //if the value changes reset views to the new one
    if (!_utilDates2['default'].eq(val, dateOrNull(this.props.value), VIEW_UNIT[view])) this.setState({
      currentDate: val ? new Date(val) : new Date()
    });
  },

  render: function render() {
    var _this = this;

    var _props = this.props;
    var className = _props.className;
    var value = _props.value;
    var footerFormat = _props.footerFormat;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var finalView = _props.finalView;
    var footer = _props.footer;
    var messages = _props.messages;
    var min = _props.min;
    var max = _props.max;
    var culture = _props.culture;
    var duration = _props.duration;
    var _state = this.state;
    var view = _state.view;
    var currentDate = _state.currentDate;
    var slideDirection = _state.slideDirection;
    var focused = _state.focused;

    var View = VIEW[view],
        unit = VIEW_UNIT[view],
        todaysDate = new Date(),
        todayNotInRange = !_utilDates2['default'].inRange(todaysDate, min, max, view);

    unit = unit === 'day' ? 'date' : unit;

    var viewID = this._id('_calendar'),
        labelID = this._id('_calendar_label'),
        key = view + '_' + _utilDates2['default'][view](currentDate);

    var elementProps = _util_2['default'].omit(this.props, Object.keys(propTypes)),
        viewProps = _util_2['default'].pick(this.props, Object.keys(_utilCompat2['default'].type(View).propTypes));

    var isDisabled = disabled || readOnly;

    messages = msgs(this.props.messages);

    return _react2['default'].createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        role: 'group',
        onKeyDown: this._keyDown,
        onFocus: this._focus.bind(null, true),
        onBlur: this._focus.bind(null, false),
        className: (0, _classnames2['default'])(className, 'rw-calendar', 'rw-widget', {
          'rw-state-focus': focused,
          'rw-state-disabled': disabled,
          'rw-state-readonly': readOnly,
          'rw-rtl': this.isRtl()
        })
      }),
      _react2['default'].createElement(_Header2['default'], {
        label: this._label(),
        labelId: labelID,
        messages: messages,
        upDisabled: isDisabled || view === finalView,
        prevDisabled: isDisabled || !_utilDates2['default'].inRange(this.nextDate(dir.LEFT), min, max, view),
        nextDisabled: isDisabled || !_utilDates2['default'].inRange(this.nextDate(dir.RIGHT), min, max, view),
        onViewChange: this.navigate.bind(null, dir.UP, null),
        onMoveLeft: this.navigate.bind(null, dir.LEFT, null),
        onMoveRight: this.navigate.bind(null, dir.RIGHT, null)
      }),
      _react2['default'].createElement(
        _SlideTransition2['default'],
        {
          ref: 'animation',
          duration: duration,
          direction: slideDirection,
          onAnimate: function () {
            return _this.focus(true);
          }
        },
        _react2['default'].createElement(View, babelHelpers._extends({}, viewProps, {
          tabIndex: '-1',
          key: key,
          id: viewID,
          className: 'rw-calendar-grid',
          'aria-labelledby': labelID,
          today: todaysDate,
          value: value,
          focused: currentDate,
          onChange: this._maybeHandle(this.change),
          onKeyDown: this._keyDown,
          ariaActiveDescendantKey: 'calendarView'
        }))
      ),
      footer && _react2['default'].createElement(_Footer2['default'], {
        value: todaysDate,
        format: footerFormat,
        culture: culture,
        disabled: disabled || todayNotInRange,
        readOnly: readOnly,
        onClick: this._maybeHandle(this.select)
      })
    );
  },

  navigate: _util_2['default'].ifNotDisabled(function (direction, date) {
    var view = this.state.view,
        slideDir = direction === dir.LEFT || direction === dir.UP ? 'right' : 'left';

    if (!date) date = [dir.LEFT, dir.RIGHT].indexOf(direction) !== -1 ? this.nextDate(direction) : this.state.currentDate;

    if (direction === dir.DOWN) view = ALT_VIEW[view] || view;

    if (direction === dir.UP) view = NEXT_VIEW[view] || view;

    if (this.isValidView(view) && _utilDates2['default'].inRange(date, this.props.min, this.props.max, view)) {
      this.notify('onNavigate', [date, slideDir, view]);
      this.focus(true);

      this.setState({
        currentDate: date,
        slideDirection: slideDir,
        view: view
      });
    }
  }),

  focus: function focus() {
    if (+this.props.tabIndex > -1) _utilCompat2['default'].findDOMNode(this).focus();
  },

  _focus: _util_2['default'].ifNotDisabled(true, function (focused, e) {
    var _this2 = this;

    if (+this.props.tabIndex === -1) return;

    this.setTimeout('focus', function () {
      if (focused !== _this2.state.focused) {
        _this2.notify(focused ? 'onFocus' : 'onBlur', e);
        _this2.setState({ focused: focused });
      }
    });
  }),

  change: function change(date) {
    if (this.state.view === this.props.initialView) {
      this.notify('onChange', date);
      this.focus();
      return;
    }

    this.navigate(dir.DOWN, date);
  },

  select: function select(date) {
    var view = this.props.initialView,
        slideDir = view !== this.state.view || _utilDates2['default'].gt(date, this.state.currentDate) ? 'left' // move down to a the view
    : 'right';

    this.notify('onChange', date);

    if (this.isValidView(view) && _utilDates2['default'].inRange(date, this.props.min, this.props.max, view)) {
      this.focus();

      this.setState({
        currentDate: date,
        slideDirection: slideDir,
        view: view
      });
    }
  },

  nextDate: function nextDate(direction) {
    var method = direction === dir.LEFT ? 'subtract' : 'add',
        view = this.state.view,
        unit = view === views.MONTH ? view : views.YEAR,
        multi = MULTIPLIER[view] || 1;

    return _utilDates2['default'][method](this.state.currentDate, 1 * multi, unit);
  },

  _keyDown: _util_2['default'].ifNotDisabled(function (e) {
    var ctrl = e.ctrlKey,
        key = e.key,
        direction = ARROWS_TO_DIRECTION[key],
        current = this.state.currentDate,
        view = this.state.view,
        unit = VIEW_UNIT[view],
        currentDate = current;

    if (key === 'Enter') {
      e.preventDefault();
      return this.change(current);
    }

    if (direction) {
      if (ctrl) {
        e.preventDefault();
        this.navigate(direction);
      } else {
        if (this.isRtl() && OPPOSITE_DIRECTION[direction]) direction = OPPOSITE_DIRECTION[direction];

        currentDate = _utilDates2['default'].move(currentDate, this.props.min, this.props.max, view, direction);

        if (!_utilDates2['default'].eq(current, currentDate, unit)) {
          e.preventDefault();

          if (_utilDates2['default'].gt(currentDate, current, view)) this.navigate(dir.RIGHT, currentDate);else if (_utilDates2['default'].lt(currentDate, current, view)) this.navigate(dir.LEFT, currentDate);else this.setState({ currentDate: currentDate });
        }
      }
    }

    this.notify('onKeyDown', [e]);
  }),

  _label: function _label() {
    var _props2 = this.props;
    var culture = _props2.culture;
    var props = babelHelpers.objectWithoutProperties(_props2, ['culture']);
    var view = this.state.view;
    var dt = this.state.currentDate;

    if (view === 'month') return localizers.date.format(dt, format(props, 'header'), culture);else if (view === 'year') return localizers.date.format(dt, format(props, 'year'), culture);else if (view === 'decade') return localizers.date.format(_utilDates2['default'].startOf(dt, 'decade'), format(props, 'decade'), culture);else if (view === 'century') return localizers.date.format(_utilDates2['default'].startOf(dt, 'century'), format(props, 'century'), culture);
  },

  inRangeValue: function inRangeValue(_value) {
    var value = dateOrNull(_value);

    if (value === null) return value;

    return _utilDates2['default'].max(_utilDates2['default'].min(value, this.props.max), this.props.min);
  },

  isValidView: function isValidView(next) {
    var bottom = VIEW_OPTIONS.indexOf(this.props.initialView),
        top = VIEW_OPTIONS.indexOf(this.props.finalView),
        current = VIEW_OPTIONS.indexOf(next);

    return current >= bottom && current <= top;
  }
});

function dateOrNull(dt) {
  if (dt && !isNaN(dt.getTime())) return dt;
  return null;
}

function msgs(msgs) {
  return babelHelpers._extends({
    moveBack: 'navigate back',
    moveForward: 'navigate forward' }, msgs);
}

var UncontrolledCalendar = (0, _uncontrollable2['default'])(Calendar, { value: 'onChange' });

UncontrolledCalendar.BaseCalendar = Calendar;

exports['default'] = UncontrolledCalendar;
module.exports = exports['default'];
//console.log(document.activeElement)
},{"./Century":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Century.js","./Decade":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Decade.js","./Footer":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Footer.js","./Header":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Header.js","./Month":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Month.js","./SlideTransition":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/SlideTransition.js","./Year":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Year.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/constants":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/constants.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Century.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var localizers = _utilConfiguration2['default'].locale;
var format = function format(props) {
  return props.decadeFormat || localizers.date.formats.decade;
};

var isEqual = function isEqual(dateA, dateB) {
  return _utilDates2['default'].eq(dateA, dateB, 'decade');
};
var optionId = function optionId(id, date) {
  return '' + id + '__century_' + _utilDates2['default'].year(date);
};

var propTypes = {
  optionID: _react2['default'].PropTypes.func,
  culture: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.instanceOf(Date),
  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),

  onChange: _react2['default'].PropTypes.func.isRequired,
  decadeFormat: _utilPropTypes2['default'].dateFormat
};

exports['default'] = _react2['default'].createClass({

  displayName: 'CenturyView',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/PureRenderMixin'), require('./mixins/RtlChildContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  componentDidUpdate: function componentDidUpdate() {
    var activeId = optionId(this._id(), this.props.focused);
    this.ariaActiveDescendant(activeId);
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var focused = _props.focused;
    var years = getCenturyDecades(focused);
    var rows = _util_2['default'].chunk(years, 4);

    var elementProps = _util_2['default'].omit(this.props, Object.keys(propTypes));

    return _react2['default'].createElement(
      'table',
      babelHelpers._extends({}, elementProps, {
        role: 'grid',
        className: (0, _classnames2['default'])(className, 'rw-nav-view')
      }),
      _react2['default'].createElement(
        'tbody',
        null,
        rows.map(this._row)
      )
    );
  },

  _row: function _row(row, rowIdx) {
    var _this = this;

    var _props2 = this.props;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var disabled = _props2.disabled;
    var onChange = _props2.onChange;
    var value = _props2.value;
    var today = _props2.today;
    var culture = _props2.culture;
    var min = _props2.min;
    var max = _props2.max;
    var id = this._id('_century');

    return _react2['default'].createElement(
      'tr',
      { key: 'row_' + rowIdx, role: 'row' },
      row.map(function (date, colIdx) {
        var isFocused = isEqual(date, focused),
            isSelected = isEqual(date, value),
            currentDecade = isEqual(date, today),
            label = localizers.date.format(_utilDates2['default'].startOf(date, 'decade'), format(_this.props), culture);

        var currentID = optionId(id, date);

        return !inRange(date, min, max) ? _react2['default'].createElement(
          'td',
          { key: colIdx, role: 'gridcell', className: 'rw-empty-cell' },
          ' '
        ) : _react2['default'].createElement(
          'td',
          {
            key: colIdx,
            role: 'gridcell',
            id: currentID,
            title: label,
            'aria-selected': isSelected,
            'aria-label': label,
            'aria-readonly': disabled
          },
          _react2['default'].createElement(
            'span',
            {
              'aria-labelledby': currentID,
              onClick: onChange.bind(null, inRangeDate(date, min, max)),
              className: (0, _classnames2['default'])('rw-btn', {
                'rw-off-range': !inCentury(date, focused),
                'rw-state-focus': isFocused,
                'rw-state-selected': isSelected,
                'rw-now': currentDecade
              })
            },
            label
          )
        );
      })
    );
  }

});

function inRangeDate(decade, min, max) {
  return _utilDates2['default'].max(_utilDates2['default'].min(decade, max), min);
}

function inRange(decade, min, max) {
  return _utilDates2['default'].gte(decade, _utilDates2['default'].startOf(min, 'decade'), 'year') && _utilDates2['default'].lte(decade, _utilDates2['default'].endOf(max, 'decade'), 'year');
}

function inCentury(date, start) {
  return _utilDates2['default'].gte(date, _utilDates2['default'].startOf(start, 'century'), 'year') && _utilDates2['default'].lte(date, _utilDates2['default'].endOf(start, 'century'), 'year');
}

function getCenturyDecades(_date) {
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date = _utilDates2['default'].add(_utilDates2['default'].startOf(_date, 'century'), -20, 'year');

  return days.map(function () {
    return date = _utilDates2['default'].add(date, 10, 'year');
  });
}
module.exports = exports['default'];
},{"./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlChildContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Combobox.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _utilFilter = require('./util/filter');

var _utilFilter2 = babelHelpers.interopRequireDefault(_utilFilter);

var _Popup = require('./Popup');

var _Popup2 = babelHelpers.interopRequireDefault(_Popup);

var _WidgetButton = require('./WidgetButton');

var _WidgetButton2 = babelHelpers.interopRequireDefault(_WidgetButton);

var _ComboboxInput = require('./ComboboxInput');

var _ComboboxInput2 = babelHelpers.interopRequireDefault(_ComboboxInput);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _List = require('./List');

var _List2 = babelHelpers.interopRequireDefault(_List);

var _ListGroupable = require('./ListGroupable');

var _ListGroupable2 = babelHelpers.interopRequireDefault(_ListGroupable);

var _utilValidateListInterface = require('./util/validateListInterface');

var _utilValidateListInterface2 = babelHelpers.interopRequireDefault(_utilValidateListInterface);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = babelHelpers.interopRequireDefault(_uncontrollable);

var defaultSuggest = function defaultSuggest(f) {
  return f === true ? 'startsWith' : f ? f : 'eq';
};

var omit = _util_2['default'].omit;
var pick = _util_2['default'].pick;
var result = _util_2['default'].result;

var propTypes = {
  //-- controlled props -----------
  value: _react2['default'].PropTypes.any,
  onChange: _react2['default'].PropTypes.func,
  open: _react2['default'].PropTypes.bool,
  onToggle: _react2['default'].PropTypes.func,
  //------------------------------------

  itemComponent: _utilPropTypes2['default'].elementType,
  listComponent: _utilPropTypes2['default'].elementType,

  groupComponent: _utilPropTypes2['default'].elementType,
  groupBy: _utilPropTypes2['default'].accessor,

  data: _react2['default'].PropTypes.array,
  valueField: _react2['default'].PropTypes.string,
  textField: _utilPropTypes2['default'].accessor,
  name: _react2['default'].PropTypes.string,

  onSelect: _react2['default'].PropTypes.func,

  disabled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['disabled'])]),

  readOnly: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['readOnly'])]),

  suggest: _utilPropTypes2['default'].filter,
  filter: _utilPropTypes2['default'].filter,

  busy: _react2['default'].PropTypes.bool,

  dropUp: _react2['default'].PropTypes.bool,
  duration: _react2['default'].PropTypes.number, //popup

  placeholder: _react2['default'].PropTypes.string,

  messages: _react2['default'].PropTypes.shape({
    open: _utilPropTypes2['default'].message,
    emptyList: _utilPropTypes2['default'].message,
    emptyFilter: _utilPropTypes2['default'].message
  })
};

var ComboBox = _react2['default'].createClass({

  displayName: 'ComboBox',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/DataFilterMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/PopupScrollToMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')('input')],

  propTypes: propTypes,

  getInitialState: function getInitialState() {
    var items = this.process(this.props.data, this.props.value),
        idx = this._dataIndexOf(items, this.props.value);

    return {
      selectedItem: items[idx],
      focusedItem: items[! ~idx ? 0 : idx],
      processedData: items,
      open: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      value: '',
      open: false,
      suggest: false,
      filter: false,
      delay: 500,

      messages: msgs(),
      ariaActiveDescendantKey: 'combobox'
    };
  },

  componentDidUpdate: function componentDidUpdate() {
    this.refs.list && (0, _utilValidateListInterface2['default'])(this.refs.list);
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var isSuggesting = this.refs.input && this.refs.input.isSuggesting(),
        stateChanged = !_util_2['default'].isShallowEqual(nextState, this.state),
        valueChanged = !_util_2['default'].isShallowEqual(nextProps, this.props);

    return isSuggesting || stateChanged || valueChanged;
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var rawIdx = this._dataIndexOf(nextProps.data, nextProps.value),
        valueItem = rawIdx === -1 ? nextProps.value : nextProps.data[rawIdx],
        isSuggesting = this.refs.input.isSuggesting(),
        items = this.process(nextProps.data, nextProps.value, (rawIdx === -1 || isSuggesting) && this._dataText(valueItem)),
        idx = this._dataIndexOf(items, nextProps.value),
        focused = this.filterIndexOf(items, this._dataText(valueItem));

    this._searchTerm = '';

    this.setState({
      processedData: items,
      selectedItem: items[idx],
      focusedItem: items[idx === -1 ? focused !== -1 ? focused : 0 // focus the closest match
      : idx]
    });
  },

  render: function render() {
    var _cx,
        _this = this;

    var _props = this.props;
    var className = _props.className;
    var tabIndex = _props.tabIndex;
    var filter = _props.filter;
    var suggest = _props.suggest;
    var groupBy = _props.groupBy;
    var messages = _props.messages;
    var data = _props.data;
    var busy = _props.busy;
    var dropUp = _props.dropUp;
    var name = _props.name;
    var placeholder = _props.placeholder;
    var value = _props.value;
    var open = _props.open;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var List = _props.listComponent;

    List = List || groupBy && _ListGroupable2['default'] || _List2['default'];

    var elementProps = omit(this.props, Object.keys(propTypes));
    var listProps = pick(this.props, Object.keys(_utilCompat2['default'].type(List).propTypes));
    var popupProps = pick(this.props, Object.keys(_utilCompat2['default'].type(_Popup2['default']).propTypes));

    var _state = this.state;
    var focusedItem = _state.focusedItem;
    var selectedItem = _state.selectedItem;
    var focused = _state.focused;

    var items = this._data(),
        valueItem = this._dataItem(data, value) // take value from the raw data
    ,
        inputID = this._id('_input'),
        listID = this._id('_listbox'),
        completeType = this.props.suggest ? this.props.filter ? 'both' : 'inline' : this.props.filter ? 'list' : '';

    var shouldRenderList = _util_2['default'].isFirstFocusedRender(this) || open;

    messages = msgs(messages);

    return _react2['default'].createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        ref: 'element',
        onKeyDown: this._keyDown,
        onFocus: this._focus.bind(null, true),
        onBlur: this._focus.bind(null, false),
        tabIndex: '-1',
        className: (0, _classnames2['default'])(className, 'rw-combobox', 'rw-widget', (_cx = {}, _cx['rw-state-focus'] = focused, _cx['rw-state-disabled'] = disabled, _cx['rw-state-readonly'] = readOnly, _cx['rw-rtl'] = this.isRtl(), _cx['rw-open' + (dropUp ? '-up' : '')] = open, _cx))
      }),
      _react2['default'].createElement(
        _WidgetButton2['default'],
        {
          tabIndex: '-1',
          className: 'rw-select',
          onClick: this.toggle,
          disabled: !!(this.props.disabled || this.props.readOnly)
        },
        _react2['default'].createElement(
          'i',
          { className: (0, _classnames2['default'])('rw-i rw-i-caret-down', { 'rw-loading': busy }) },
          _react2['default'].createElement(
            'span',
            { className: 'rw-sr' },
            _util_2['default'].result(messages.open, this.props)
          )
        )
      ),
      _react2['default'].createElement(_ComboboxInput2['default'], {
        ref: 'input',
        id: inputID,
        tabIndex: tabIndex,
        suggest: suggest,
        name: name,
        role: 'combobox',
        'aria-owns': listID,
        'aria-busy': !!busy,
        'aria-autocomplete': completeType,
        'aria-expanded': open,
        'aria-haspopup': true,
        placeholder: placeholder,
        disabled: disabled,
        readOnly: readOnly,
        className: 'rw-input',
        value: this._dataText(valueItem),
        onChange: this._inputTyping,
        onKeyDown: this._inputKeyDown
      }),
      _react2['default'].createElement(
        _Popup2['default'],
        babelHelpers._extends({}, popupProps, {
          onOpening: function () {
            return _this.refs.list.forceUpdate();
          },
          onRequestClose: this.close
        }),
        _react2['default'].createElement(
          'div',
          null,
          shouldRenderList && _react2['default'].createElement(List, babelHelpers._extends({ ref: 'list'
          }, listProps, {
            id: listID,
            data: items,
            selected: selectedItem,
            focused: focusedItem,
            'aria-hidden': !open,
            'aria-labelledby': inputID,
            'aria-live': open && 'polite',
            onSelect: this._onSelect,
            onMove: this._scrollTo,
            messages: {
              emptyList: data.length ? messages.emptyFilter : messages.emptyList
            } }))
        )
      )
    );
  },

  _onSelect: _util_2['default'].ifNotDisabled(function (data) {
    this.close();
    this.notify('onSelect', data);
    this.change(data);
    this.focus();
  }),

  _inputKeyDown: function _inputKeyDown(e) {
    this._deleting = e.key === 'Backspace' || e.key === 'Delete';
    this._isTyping = true;
  },

  _inputTyping: function _inputTyping(e) {
    var _this2 = this;

    var self = this,
        shouldSuggest = !!this.props.suggest,
        strVal = e.target.value,
        suggestion,
        data;

    suggestion = this._deleting || !shouldSuggest ? strVal : this.suggest(this._data(), strVal);

    suggestion = suggestion || strVal;

    data = _util_2['default'].find(self.props.data, function (item) {
      return _this2._dataText(item).toLowerCase() === suggestion.toLowerCase();
    });

    this.change(!this._deleting && data ? data : strVal, true);

    this.open();
  },

  focus: function focus() {
    this.refs.input.focus();
  },

  _focus: _util_2['default'].ifNotDisabled(true, function (focused, e) {
    var _this3 = this;

    !focused && this.refs.input.accept(); //not suggesting anymore

    this.setTimeout('focus', function () {

      if (!focused) _this3.close();

      if (focused !== _this3.state.focused) {
        _this3.notify(focused ? 'onFocus' : 'onBlur', e);
        _this3.setState({ focused: focused });
      }
    });
  }),

  _keyDown: _util_2['default'].ifNotDisabled(function (e) {
    var self = this,
        key = e.key,
        alt = e.altKey,
        list = this.refs.list,
        focusedItem = this.state.focusedItem,
        selectedItem = this.state.selectedItem,
        isOpen = this.props.open;

    if (key === 'End') if (isOpen) this.setState({ focusedItem: list.last() });else select(list.last(), true);else if (key === 'Home') if (isOpen) this.setState({ focusedItem: list.first() });else select(list.first(), true);else if (key === 'Escape' && isOpen) this.close();else if (key === 'Enter' && isOpen) {
      select(this.state.focusedItem, true);
    } else if (key === 'ArrowDown') {
      if (alt) this.open();else {
        if (isOpen) this.setState({ focusedItem: list.next(focusedItem) });else select(list.next(selectedItem), true);
      }
    } else if (key === 'ArrowUp') {
      if (alt) this.close();else {
        if (isOpen) this.setState({ focusedItem: list.prev(focusedItem) });else select(list.prev(selectedItem), true);
      }
    }

    this.notify('onKeyDown', [e]);

    function select(item, fromList) {
      if (!item) return self.change(_utilCompat2['default'].findDOMNode(self.refs.input).value, false);

      self.refs.input.accept(true); //removes caret

      if (fromList) return self._onSelect(item);

      self.change(item, false);
    }
  }),

  change: function change(data, typing) {
    this._typedChange = !!typing;
    this.notify('onChange', data);
  },

  open: function open() {
    if (!this.props.open) this.notify('onToggle', true);
  },

  close: function close() {
    if (this.props.open) this.notify('onToggle', false);
  },

  toggle: _util_2['default'].ifNotDisabled(function () {
    this.focus();

    this.props.open ? this.close() : this.open();
  }),

  suggest: function suggest(data, value) {
    var word = this._dataText(value),
        suggest = defaultSuggest(this.props.suggest),
        suggestion;

    if (!(word || '').trim() || word.length < (this.props.minLength || 1)) return '';

    suggestion = typeof value === 'string' ? _util_2['default'].find(data, getFilter(suggest, word, this)) : value;

    if (suggestion && (!this.state || !this.state.deleting)) return this._dataText(suggestion);

    return '';
  },

  _data: function _data() {
    return this.state.processedData;
  },

  process: function process(data, values, searchTerm) {
    if (this.props.filter && searchTerm) data = this.filter(data, searchTerm);

    return data;
  }
});

function msgs(msgs) {
  return babelHelpers._extends({
    open: 'open combobox',
    emptyList: 'There are no items in this list',
    emptyFilter: 'The filter returned no results' }, msgs);
}

function getFilter(suggest, word, ctx) {
  return typeof suggest === 'string' ? function (item) {
    return _utilFilter2['default'][suggest](ctx._dataText(item).toLowerCase(), word.toLowerCase());
  } : function (item) {
    return suggest(item, word);
  };
}

var UncontrolledComboBox = (0, _uncontrollable2['default'])(ComboBox, { open: 'onToggle', value: 'onChange' });

UncontrolledComboBox.BaseComboBox = ComboBox;

exports['default'] = UncontrolledComboBox;
module.exports = exports['default'];
},{"./ComboboxInput":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ComboboxInput.js","./List":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js","./ListGroupable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListGroupable.js","./Popup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Popup.js","./WidgetButton":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataFilterMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataFilterMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/PopupScrollToMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PopupScrollToMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/filter":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/filter.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./util/validateListInterface":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/validateListInterface.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ComboboxInput.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _utilCaret = require('./util/caret');

var _utilCaret2 = babelHelpers.interopRequireDefault(_utilCaret);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

exports['default'] = _react2['default'].createClass({

  displayName: 'ComboboxInput',

  propTypes: {
    value: _react2['default'].PropTypes.string,
    onChange: _react2['default'].PropTypes.func.isRequired
  },

  componentDidUpdate: function componentDidUpdate() {
    var input = _utilCompat2['default'].findDOMNode(this),
        val = this.props.value;

    if (this.isSuggesting()) {
      var start = val.toLowerCase().indexOf(this._last.toLowerCase()) + this._last.length,
          end = val.length - start;

      if (start >= 0) {
        (0, _utilCaret2['default'])(input, start, start + end);
      }
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: ''
    };
  },

  render: function render() {
    return _react2['default'].createElement('input', babelHelpers._extends({}, this.props, {
      type: 'text',
      'aria-disabled': this.props.disabled,
      'aria-readonly': this.props.readOnly,
      className: this.props.className + ' rw-input',
      onKeyDown: this.props.onKeyDown,
      onChange: this._change,
      value: this.props.value == null ? '' : this.props.value
    }));
  },

  isSuggesting: function isSuggesting() {
    var val = this.props.value,
        isSuggestion = this._last != null && val.toLowerCase().indexOf(this._last.toLowerCase()) !== -1;

    return this.props.suggest && isSuggestion;
  },

  accept: function accept(removeCaret) {
    var val = _utilCompat2['default'].findDOMNode(this).value || '',
        end = val.length;

    this._last = null;
    removeCaret && (0, _utilCaret2['default'])(_utilCompat2['default'].findDOMNode(this), end, end);
  },

  _change: function _change(e) {
    var val = e.target.value,
        pl = !!this.props.placeholder;

    // IE fires input events when setting/unsetting placeholders.
    // issue #112
    if (pl && !val && val === (this.props.value || '')) return;

    this._last = val;
    this.props.onChange(e, val);
  },

  focus: function focus() {
    _utilCompat2['default'].findDOMNode(this).focus();
  }
});
module.exports = exports['default'];
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/caret":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/caret.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DateInput.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    cx = require('classnames'),
    compat = require('./util/compat'),
    localizers = require('./util/configuration').locale,
    CustomPropTypes = require('./util/propTypes');

module.exports = React.createClass({

  displayName: 'DatePickerInput',

  propTypes: {
    format: CustomPropTypes.dateFormat.isRequired,
    editFormat: CustomPropTypes.dateFormat,
    parse: React.PropTypes.func.isRequired,

    value: React.PropTypes.instanceOf(Date),
    onChange: React.PropTypes.func.isRequired,
    culture: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      textValue: ''
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var text = formatDate(nextProps.value, nextProps.editing && nextProps.editFormat ? nextProps.editFormat : nextProps.format, nextProps.culture);

    this.startValue = text;

    this.setState({
      textValue: text
    });
  },

  getInitialState: function getInitialState() {
    var text = formatDate(this.props.value, this.props.editing && this.props.editFormat ? this.props.editFormat : this.props.format, this.props.culture);

    this.startValue = text;

    return {
      textValue: text
    };
  },

  render: function render() {
    var value = this.state.textValue;

    return React.createElement('input', babelHelpers._extends({}, this.props, {
      type: 'text',
      className: cx({ 'rw-input': true }),
      value: value,
      'aria-disabled': this.props.disabled,
      'aria-readonly': this.props.readOnly,
      disabled: this.props.disabled,
      readOnly: this.props.readOnly,
      onChange: this._change,
      onBlur: chain(this.props.blur, this._blur, this) }));
  },

  _change: function _change(e) {
    this.setState({ textValue: e.target.value });
    this._needsFlush = true;
  },

  _blur: function _blur(e) {
    var val = e.target.value,
        date;

    if (this._needsFlush) {
      this._needsFlush = false;
      date = this.props.parse(val);

      this.props.onChange(date, formatDate(date, this.props.format, this.props.culture));
    }
  },

  focus: function focus() {
    compat.findDOMNode(this).focus();
  }

});

function isValid(d) {
  return !isNaN(d.getTime());
}

function formatDate(date, format, culture) {
  var val = '';

  if (date instanceof Date && isValid(date)) val = localizers.date.format(date, format, culture);

  return val;
}

function chain(a, b, thisArg) {
  return function () {
    a && a.apply(thisArg, arguments);
    b && b.apply(thisArg, arguments);
  };
}
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DateTimePicker.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactLibInvariant = require('react/lib/invariant');

var _reactLibInvariant2 = babelHelpers.interopRequireDefault(_reactLibInvariant);

var _reactLibGetActiveElement = require('react/lib/getActiveElement');

var _reactLibGetActiveElement2 = babelHelpers.interopRequireDefault(_reactLibGetActiveElement);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

//pick, omit, has

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _utilConstants = require('./util/constants');

var _utilConstants2 = babelHelpers.interopRequireDefault(_utilConstants);

var _Popup = require('./Popup');

var _Popup2 = babelHelpers.interopRequireDefault(_Popup);

var _Calendar2 = require('./Calendar');

var _Calendar3 = babelHelpers.interopRequireDefault(_Calendar2);

var _TimeList = require('./TimeList');

var _TimeList2 = babelHelpers.interopRequireDefault(_TimeList);

var _DateInput = require('./DateInput');

var _DateInput2 = babelHelpers.interopRequireDefault(_DateInput);

var _WidgetButton = require('./WidgetButton');

var _WidgetButton2 = babelHelpers.interopRequireDefault(_WidgetButton);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = babelHelpers.interopRequireDefault(_uncontrollable);

var views = _utilConstants2['default'].calendarViews;
var popups = _utilConstants2['default'].datePopups;

var Calendar = _Calendar3['default'].BaseCalendar;
var localizers = _utilConfiguration2['default'].locale;
var viewEnum = Object.keys(views).map(function (k) {
  return views[k];
});

var omit = _util_2['default'].omit;
var pick = _util_2['default'].pick;
var result = _util_2['default'].result;

var propTypes = babelHelpers._extends({}, _utilCompat2['default'].type(Calendar).propTypes, {

  //-- controlled props -----------
  value: _react2['default'].PropTypes.instanceOf(Date),
  onChange: _react2['default'].PropTypes.func,
  open: _react2['default'].PropTypes.oneOf([false, popups.TIME, popups.CALENDAR]),
  onToggle: _react2['default'].PropTypes.func,
  //------------------------------------

  onSelect: _react2['default'].PropTypes.func,

  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),

  culture: _react2['default'].PropTypes.string,

  format: _utilPropTypes2['default'].dateFormat,
  timeFormat: _utilPropTypes2['default'].dateFormat,
  editFormat: _utilPropTypes2['default'].dateFormat,

  calendar: _react2['default'].PropTypes.bool,
  time: _react2['default'].PropTypes.bool,

  timeComponent: _utilPropTypes2['default'].elementType,

  //popup
  dropUp: _react2['default'].PropTypes.bool,
  duration: _react2['default'].PropTypes.number,

  placeholder: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string,

  initialView: _react2['default'].PropTypes.oneOf(viewEnum),
  finalView: _react2['default'].PropTypes.oneOf(viewEnum),

  disabled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['disabled'])]),

  readOnly: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['readOnly'])]),

  parse: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string), _react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),

  'aria-labelledby': _react2['default'].PropTypes.string,

  messages: _react2['default'].PropTypes.shape({
    calendarButton: _react2['default'].PropTypes.string,
    timeButton: _react2['default'].PropTypes.string
  })
});

var DateTimePicker = _react2['default'].createClass({

  displayName: 'DateTimePicker',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/PureRenderMixin'), require('./mixins/PopupScrollToMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')('valueInput', function (key, id) {
    var open = this.props.open;
    var current = this.ariaActiveDescendant();
    var calIsActive = open === popups.CALENDAR && key === 'calendar';
    var timeIsActive = open === popups.TIME && key === 'timelist';

    if (!current || (timeIsActive || calIsActive)) return id;
  })],

  propTypes: propTypes,

  getInitialState: function getInitialState() {
    return {
      focused: false
    };
  },

  getDefaultProps: function getDefaultProps() {

    return {
      value: null,

      min: new Date(1900, 0, 1),
      max: new Date(2099, 11, 31),
      calendar: true,
      time: true,
      open: false,

      //calendar override
      footer: true,

      messages: {
        calendarButton: 'Select Date',
        timeButton: 'Select Time'
      },

      ariaActiveDescendantKey: 'dropdownlist'
    };
  },

  render: function render() {
    var _cx,
        _this = this;

    var _props = this.props;
    var className = _props.className;
    var calendar = _props.calendar;
    var time = _props.time;
    var open = _props.open;
    var tabIndex = _props.tabIndex;
    var value = _props.value;
    var format = _props.format;
    var editFormat = _props.editFormat;
    var timeFormat = _props.timeFormat;
    var culture = _props.culture;
    var duration = _props.duration;
    var step = _props.step;
    var messages = _props.messages;
    var min = _props.min;
    var max = _props.max;
    var busy = _props.busy;
    var placeholder = _props.placeholder;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var name = _props.name;
    var dropUp = _props.dropUp;
    var timeComponent = _props.timeComponent;
    var ariaLabelledby = _props['aria-labelledby'];
    var focused = this.state.focused;

    var inputID = this._id('_input'),
        timeListID = this._id('_time_listbox'),
        dateListID = this._id('_cal'),
        owns = '';

    var elementProps = omit(this.props, Object.keys(propTypes)),
        calProps = pick(this.props, Object.keys(_utilCompat2['default'].type(Calendar).propTypes));

    var shouldRenderList = _util_2['default'].isFirstFocusedRender(this) || open,
        disabledOrReadonly = this.isDisabled() || this.isReadOnly(),
        calendarIsOpen = open === popups.CALENDAR,
        timeIsOpen = open === popups.TIME;

    if (calendar) owns += dateListID;
    if (time) owns += ' ' + timeListID;

    value = dateOrNull(value);

    return _react2['default'].createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        ref: 'element',
        tabIndex: '-1',
        onKeyDown: this._maybeHandle(this._keyDown),
        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
        onBlur: this._focus.bind(null, false),
        className: (0, _classnames2['default'])(className, 'rw-datetimepicker', 'rw-widget', (_cx = {}, _cx['rw-state-focus'] = focused, _cx['rw-state-disabled'] = this.isDisabled(), _cx['rw-state-readonly'] = this.isReadOnly(), _cx['rw-has-both'] = calendar && time, _cx['rw-has-neither'] = !calendar && !time, _cx['rw-rtl'] = this.isRtl(), _cx['rw-open' + (dropUp ? '-up' : '')] = open, _cx))
      }),
      _react2['default'].createElement(_DateInput2['default'], {
        ref: 'valueInput',
        id: inputID,
        tabIndex: tabIndex || 0,
        role: 'combobox',
        'aria-expanded': !!open,
        'aria-busy': !!busy,
        'aria-owns': owns.trim(),
        'aria-haspopup': true,
        placeholder: placeholder,
        name: name,
        disabled: this.isDisabled(),
        readOnly: this.isReadOnly(),
        value: value,
        format: getFormat(this.props),
        editFormat: editFormat,
        editing: focused,
        culture: culture,
        parse: this._parse,
        onChange: this._change
      }),
      (calendar || time) && _react2['default'].createElement(
        'span',
        { className: 'rw-select' },
        calendar && _react2['default'].createElement(
          _WidgetButton2['default'],
          {
            tabIndex: '-1',
            className: 'rw-btn-calendar',
            disabled: disabledOrReadonly,
            'aria-disabled': disabledOrReadonly,
            'aria-label': messages.calendarButton,
            onClick: this._maybeHandle(this._click.bind(null, popups.CALENDAR))
          },
          _react2['default'].createElement('i', { className: 'rw-i rw-i-calendar',
            'aria-hidden': 'true'
          })
        ),
        time && _react2['default'].createElement(
          _WidgetButton2['default'],
          {
            tabIndex: '-1',
            className: 'rw-btn-time',
            disabled: disabledOrReadonly,
            'aria-disabled': disabledOrReadonly,
            'aria-label': messages.timeButton,
            onClick: this._maybeHandle(this._click.bind(null, popups.TIME))
          },
          _react2['default'].createElement('i', { className: 'rw-i rw-i-clock-o',
            'aria-hidden': 'true'
          })
        )
      ),
      _react2['default'].createElement(
        _Popup2['default'],
        {
          dropUp: dropUp,
          open: timeIsOpen,
          onRequestClose: this.close,
          duration: duration,
          onOpening: function () {
            return _this.refs.timePopup.forceUpdate();
          }
        },
        _react2['default'].createElement(
          'div',
          null,
          shouldRenderList && _react2['default'].createElement(_TimeList2['default'], { ref: 'timePopup',
            id: timeListID,
            ariaActiveDescendantKey: 'timelist',
            'aria-labelledby': inputID,
            'aria-live': open && 'polite',
            'aria-hidden': !open,
            value: value,
            format: timeFormat,
            step: step,
            min: min,
            max: max,
            culture: culture,
            onMove: this._scrollTo,
            preserveDate: !!calendar,
            itemComponent: timeComponent,
            onSelect: this._maybeHandle(this._selectTime)
          })
        )
      ),
      _react2['default'].createElement(
        _Popup2['default'],
        {
          className: 'rw-calendar-popup',
          dropUp: dropUp,
          open: calendarIsOpen,
          duration: duration,
          onRequestClose: this.close
        },
        shouldRenderList && _react2['default'].createElement(Calendar, babelHelpers._extends({}, calProps, {
          ref: 'calPopup',
          tabIndex: '-1',
          id: dateListID,
          value: value,
          'aria-hidden': !open,
          'aria-live': 'polite',
          ariaActiveDescendantKey: 'calendar',
          onChange: this._maybeHandle(this._selectDate),

          onNavigate: function () {
            return _this.focus();
          }
        }))
      )
    );
  },

  _change: function _change(date, str, constrain) {
    var _props2 = this.props;
    var onChange = _props2.onChange;
    var value = _props2.value;

    if (constrain) date = this.inRangeValue(date);

    if (onChange) {
      if (date == null || value == null) {
        if (date != value) //eslint-disable-line eqeqeq
          onChange(date, str);
      } else if (!_utilDates2['default'].eq(date, value)) onChange(date, str);
    }
  },

  _keyDown: function _keyDown(e) {
    var _props3 = this.props;
    var open = _props3.open;
    var calendar = _props3.calendar;
    var time = _props3.time;

    if (e.key === 'Escape' && open) this.close();else if (e.altKey) {
      e.preventDefault();

      if (e.key === 'ArrowDown') {
        if (calendar && time) this.open(open === popups.CALENDAR ? popups.TIME : popups.CALENDAR);else if (time) this.open(popups.TIME);else if (calendar) this.open(popups.CALENDAR);
      } else if (e.key === 'ArrowUp') this.close();
    } else if (open) {
      if (open === popups.CALENDAR) this.refs.calPopup._keyDown(e);
      if (open === popups.TIME) this.refs.timePopup._keyDown(e);
    }

    this.notify('onKeyDown', [e]);
  },

  _focus: function _focus(focused, e) {
    var _this2 = this;

    this.setTimeout('focus', function () {
      if (!focused) _this2.close();

      if (focused !== _this2.state.focused) {
        _this2.notify(focused ? 'onFocus' : 'onBlur', e);
        _this2.setState({ focused: focused });
      }
    });
  },

  focus: function focus() {
    if ((0, _reactLibGetActiveElement2['default'])() !== _utilCompat2['default'].findDOMNode(this.refs.valueInput)) this.refs.valueInput.focus();
  },

  _selectDate: function _selectDate(date) {
    var format = getFormat(this.props),
        dateTime = _utilDates2['default'].merge(date, this.props.value),
        dateStr = formatDate(date, format, this.props.culture);

    this.close();
    this.notify('onSelect', [dateTime, dateStr]);
    this._change(dateTime, dateStr, true);
    this.focus();
  },

  _selectTime: function _selectTime(datum) {
    var format = getFormat(this.props),
        dateTime = _utilDates2['default'].merge(this.props.value, datum.date),
        dateStr = formatDate(datum.date, format, this.props.culture);

    this.close();
    this.notify('onSelect', [dateTime, dateStr]);
    this._change(dateTime, dateStr, true);
    this.focus();
  },

  _click: function _click(view, e) {
    this.focus();
    this.toggle(view, e);
  },

  _parse: function _parse(string) {
    var format = getFormat(this.props, true),
        editFormat = this.props.editFormat,
        parse = this.props.parse,
        formats = [];

    if (typeof parse === 'function') return parse(string, this.props.culture);

    if (typeof format === 'string') formats.push(format);

    if (typeof editFormat === 'string') formats.push(editFormat);

    if (parse) formats = formats.concat(this.props.parse);

    (0, _reactLibInvariant2['default'])(formats.length, 'React Widgets: there are no specified `parse` formats provided and the `format` prop is a function. ' + 'the DateTimePicker is unable to parse `%s` into a dateTime, ' + 'please provide either a parse function or Globalize.js compatible string for `format`', string);

    return formatsParser(formats, this.props.culture, string);
  },

  toggle: function toggle(view) {
    this.props.open ? this.props.open !== view ? this.open(view) : this.close(view) : this.open(view);
  },

  open: function open(view) {
    if (this.props.open !== view && this.props[view] === true) this.notify('onToggle', view);
  },

  close: function close() {
    if (this.props.open) this.notify('onToggle', false);
  },

  inRangeValue: function inRangeValue(value) {
    if (value == null) return value;

    return _utilDates2['default'].max(_utilDates2['default'].min(value, this.props.max), this.props.min);
  }

});

var UncontrolledDateTimePicker = (0, _uncontrollable2['default'])(DateTimePicker, { open: 'onToggle', value: 'onChange' });

UncontrolledDateTimePicker.BaseDateTimePicker = DateTimePicker;

exports['default'] = UncontrolledDateTimePicker;

function getFormat(props) {
  var cal = props[popups.CALENDAR] != null ? props.calendar : true,
      time = props[popups.TIME] != null ? props.time : true;

  return props.format ? props.format : cal && time || !cal && !time ? localizers.date.formats['default'] : localizers.date.formats[cal ? 'date' : 'time'];
}

function formatDate(date, format, culture) {
  var val = '';

  if (date instanceof Date && !isNaN(date.getTime())) val = localizers.date.format(date, format, culture);

  return val;
}

function formatsParser(formats, culture, str) {
  var date;

  for (var i = 0; i < formats.length; i++) {
    date = localizers.date.parse(str, formats[i], culture);
    if (date) return date;
  }
  return null;
}

function dateOrNull(dt) {
  if (dt && !isNaN(dt.getTime())) return dt;
  return null;
}
module.exports = exports['default'];
// #75: need to aggressively reclaim focus from the calendar otherwise
// disabled header/footer buttons will drop focus completely from the widget
},{"./Calendar":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Calendar.js","./DateInput":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DateInput.js","./Popup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Popup.js","./TimeList":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/TimeList.js","./WidgetButton":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/PopupScrollToMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PopupScrollToMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/constants":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/constants.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","react/lib/getActiveElement":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/getActiveElement.js","react/lib/invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/invariant.js","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Decade.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var localizers = _utilConfiguration2['default'].locale;

var format = function format(props) {
  return props.yearFormat || localizers.date.formats.year;
};

var propTypes = {
  optionID: _react2['default'].PropTypes.func,
  culture: _react2['default'].PropTypes.string,

  value: _react2['default'].PropTypes.instanceOf(Date),
  focused: _react2['default'].PropTypes.instanceOf(Date),
  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),
  onChange: _react2['default'].PropTypes.func.isRequired,

  yearFormat: _utilPropTypes2['default'].dateFormat
};

var isEqual = function isEqual(dataA, dateB) {
  return _utilDates2['default'].eq(dataA, dateB, 'year');
};
var optionId = function optionId(id, date) {
  return '' + id + '__decade_' + _utilDates2['default'].year(date);
};

exports['default'] = _react2['default'].createClass({

  displayName: 'DecadeView',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/PureRenderMixin'), require('./mixins/RtlChildContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  componentDidUpdate: function componentDidUpdate() {
    var activeId = optionId(this._id(), this.props.focused);
    this.ariaActiveDescendant(activeId);
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var focused = _props.focused;
    var years = getDecadeYears(focused);
    var rows = _util_2['default'].chunk(years, 4);

    var elementProps = _util_2['default'].omit(this.props, Object.keys(propTypes));

    return _react2['default'].createElement(
      'table',
      babelHelpers._extends({}, elementProps, {
        role: 'grid',
        className: (0, _classnames2['default'])(className, 'rw-nav-view')
      }),
      _react2['default'].createElement(
        'tbody',
        null,
        rows.map(this._row)
      )
    );
  },

  _row: function _row(row, rowIdx) {
    var _this = this;

    var _props2 = this.props;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var disabled = _props2.disabled;
    var onChange = _props2.onChange;
    var value = _props2.value;
    var today = _props2.today;
    var culture = _props2.culture;
    var min = _props2.min;
    var max = _props2.max;
    var Day = _props2.dayComponent;
    var id = this._id();

    return _react2['default'].createElement(
      'tr',
      { key: 'row_' + rowIdx, role: 'row' },
      row.map(function (date, colIdx) {
        var isFocused = isEqual(date, focused),
            isSelected = isEqual(date, value),
            currentYear = isEqual(date, today),
            label = localizers.date.format(date, format(_this.props), culture);

        var currentID = optionId(id, date);

        return !_utilDates2['default'].inRange(date, min, max, 'year') ? _react2['default'].createElement(
          'td',
          { key: colIdx, role: 'presentation', className: 'rw-empty-cell' },
          ' '
        ) : _react2['default'].createElement(
          'td',
          {
            key: colIdx,
            role: 'gridcell',
            id: currentID,
            title: label,
            'aria-selected': isSelected,
            'aria-label': label,
            'aria-readonly': disabled
          },
          _react2['default'].createElement(
            'span',
            {
              'aria-labelledby': currentID,
              onClick: onChange.bind(null, date),
              className: (0, _classnames2['default'])('rw-btn', {
                'rw-off-range': !inDecade(date, focused),
                'rw-state-focus': isFocused,
                'rw-state-selected': isSelected,
                'rw-now': currentYear
              })
            },
            label
          )
        );
      })
    );
  }
});

function inDecade(date, start) {
  return _utilDates2['default'].gte(date, _utilDates2['default'].startOf(start, 'decade'), 'year') && _utilDates2['default'].lte(date, _utilDates2['default'].endOf(start, 'decade'), 'year');
}

function getDecadeYears(_date) {
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      date = _utilDates2['default'].add(_utilDates2['default'].startOf(_date, 'decade'), -2, 'year');

  return days.map(function () {
    return date = _utilDates2['default'].add(date, 1, 'year');
  });
}
module.exports = exports['default'];
},{"./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlChildContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DropdownList.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    activeElement = require('react/lib/getActiveElement'),
    _ = require('./util/_'),
    contains = require('dom-helpers/query/contains'),
    cx = require('classnames'),
    compat = require('./util/compat'),
    CustomPropTypes = require('./util/propTypes'),
    Popup = require('./Popup'),
    PlainList = require('./List'),
    GroupableList = require('./ListGroupable'),
    validateList = require('./util/validateListInterface'),
    createUncontrolledWidget = require('uncontrollable');

var omit = _.omit;
var pick = _.pick;
var result = _.result;

var propTypes = {
  //-- controlled props -----------
  value: React.PropTypes.any,
  onChange: React.PropTypes.func,
  open: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
  //------------------------------------

  data: React.PropTypes.array,
  valueField: React.PropTypes.string,
  textField: CustomPropTypes.accessor,

  valueComponent: CustomPropTypes.elementType,
  itemComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,

  groupComponent: CustomPropTypes.elementType,
  groupBy: CustomPropTypes.accessor,

  onSelect: React.PropTypes.func,

  searchTerm: React.PropTypes.string,
  onSearch: React.PropTypes.func,

  busy: React.PropTypes.bool,

  delay: React.PropTypes.number,

  dropUp: React.PropTypes.bool,
  duration: React.PropTypes.number, //popup

  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['disabled'])]),

  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['readOnly'])]),

  messages: React.PropTypes.shape({
    open: CustomPropTypes.message,
    emptyList: CustomPropTypes.message,
    emptyFilter: CustomPropTypes.message,
    filterPlaceholder: CustomPropTypes.message
  })
};

var DropdownList = React.createClass({

  displayName: 'DropdownList',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/PureRenderMixin'), require('./mixins/DataFilterMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/PopupScrollToMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  getDefaultProps: function getDefaultProps() {
    return {
      delay: 500,
      value: '',
      open: false,
      data: [],
      searchTerm: '',
      messages: msgs(),
      ariaActiveDescendantKey: 'dropdownlist'
    };
  },

  getInitialState: function getInitialState() {
    var filter = this.props.open && this.props.filter,
        data = filter ? this.filter(this.props.data, this.props.searchTerm) : this.props.data,
        initialIdx = this._dataIndexOf(this.props.data, this.props.value);

    return {
      filteredData: filter && data,
      selectedItem: data[initialIdx],
      focusedItem: data[initialIdx] || data[0]
    };
  },

  componentDidUpdate: function componentDidUpdate() {
    this.refs.list && validateList(this.refs.list);
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var filter = props.open && props.filter,
        data = filter ? this.filter(props.data, props.searchTerm) : props.data,
        idx = this._dataIndexOf(data, props.value);

    this.setState({
      filteredData: filter && data,
      selectedItem: data[idx],
      focusedItem: data[! ~idx ? 0 : idx]
    });
  },

  render: function render() {
    var _cx,
        _this = this;

    var _props = this.props;
    var className = _props.className;
    var tabIndex = _props.tabIndex;
    var filter = _props.filter;
    var groupBy = _props.groupBy;
    var messages = _props.messages;
    var data = _props.data;
    var busy = _props.busy;
    var dropUp = _props.dropUp;
    var placeholder = _props.placeholder;
    var value = _props.value;
    var open = _props.open;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var ValueComponent = _props.valueComponent;
    var List = _props.listComponent;

    List = List || groupBy && GroupableList || PlainList;

    var elementProps = omit(this.props, Object.keys(propTypes));
    var listProps = pick(this.props, Object.keys(compat.type(List).propTypes));
    var popupProps = pick(this.props, Object.keys(compat.type(Popup).propTypes));

    var _state = this.state;
    var focusedItem = _state.focusedItem;
    var selectedItem = _state.selectedItem;
    var focused = _state.focused;

    var items = this._data(),
        valueItem = this._dataItem(data, value) // take value from the raw data
    ,
        listID = this._id('__listbox');

    var shouldRenderList = _.isFirstFocusedRender(this) || open;

    messages = msgs(messages);

    return React.createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        ref: 'input',
        role: 'combobox',
        tabIndex: tabIndex || '0',
        'aria-expanded': open,
        'aria-haspopup': true,
        'aria-owns': listID,
        'aria-busy': !!busy,
        'aria-live': !open && 'polite',
        //aria-activedescendant={activeID}
        'aria-autocomplete': 'list',
        'aria-disabled': disabled,
        'aria-readonly': readOnly,
        onKeyDown: this._keyDown,
        onClick: this._click,
        onFocus: this._focus.bind(null, true),
        onBlur: this._focus.bind(null, false),
        className: cx(className, 'rw-dropdownlist', 'rw-widget', (_cx = {}, _cx['rw-state-disabled'] = disabled, _cx['rw-state-readonly'] = readOnly, _cx['rw-state-focus'] = focused, _cx['rw-rtl'] = this.isRtl(), _cx['rw-open' + (dropUp ? '-up' : '')] = open, _cx)) }),
      React.createElement(
        'span',
        { className: 'rw-dropdownlist-picker rw-select rw-btn' },
        React.createElement(
          'i',
          { className: 'rw-i rw-i-caret-down' + (busy ? ' rw-loading' : '') },
          React.createElement(
            'span',
            { className: 'rw-sr' },
            result(messages.open, this.props)
          )
        )
      ),
      React.createElement(
        'div',
        {
          className: 'rw-input'
        },
        !valueItem && placeholder ? React.createElement(
          'span',
          { className: 'rw-placeholder' },
          placeholder
        ) : this.props.valueComponent ? React.createElement(ValueComponent, { item: valueItem }) : this._dataText(valueItem)
      ),
      React.createElement(
        Popup,
        babelHelpers._extends({}, popupProps, {
          onOpen: function () {
            return _this.focus();
          },
          onOpening: function () {
            return _this.refs.list.forceUpdate();
          },
          onRequestClose: this.close
        }),
        React.createElement(
          'div',
          null,
          filter && this._renderFilter(messages),
          shouldRenderList && React.createElement(List, babelHelpers._extends({ ref: 'list'
          }, listProps, {
            data: items,
            id: listID,
            'aria-live': open && 'polite',
            'aria-labelledby': this._id(),
            'aria-hidden': !this.props.open,
            selected: selectedItem,
            focused: open ? focusedItem : null,
            onSelect: this._onSelect,
            onMove: this._scrollTo,
            messages: {
              emptyList: data.length ? messages.emptyFilter : messages.emptyList
            } }))
        )
      )
    );
  },

  _renderFilter: function _renderFilter(messages) {
    var _this2 = this;

    return React.createElement(
      'div',
      { ref: 'filterWrapper', className: 'rw-filter-input' },
      React.createElement(
        'span',
        { className: 'rw-select rw-btn' },
        React.createElement('i', { className: 'rw-i rw-i-search' })
      ),
      React.createElement('input', { ref: 'filter', className: 'rw-input',
        placeholder: _.result(messages.filterPlaceholder, this.props),
        value: this.props.searchTerm,
        onChange: function (e) {
          return _this2.notify('onSearch', e.target.value);
        } })
    );
  },

  _focus: _.ifNotDisabled(true, function (focused, e) {
    var _this3 = this;

    this.setTimeout('focus', function () {
      if (!focused) _this3.close();

      if (focused !== _this3.state.focused) {
        _this3.notify(focused ? 'onFocus' : 'onBlur', e);
        _this3.setState({ focused: focused });
      }
    });
  }),

  _onSelect: _.ifNotDisabled(function (data) {
    this.close();
    this.notify('onSelect', data);
    this.change(data);
    this.focus(this);
  }),

  _click: _.ifNotDisabled(function (e) {
    var wrapper = this.refs.filterWrapper;

    if (!this.props.filter || !this.props.open) this.toggle();else if (!contains(compat.findDOMNode(wrapper), e.target)) this.close();

    this.notify('onClick', e);
  }),

  _keyDown: _.ifNotDisabled(function (e) {
    var _this4 = this;

    var self = this,
        key = e.key,
        alt = e.altKey,
        list = this.refs.list,
        filtering = this.props.filter,
        focusedItem = this.state.focusedItem,
        selectedItem = this.state.selectedItem,
        isOpen = this.props.open,
        closeWithFocus = function closeWithFocus() {
      _this4.close(), compat.findDOMNode(_this4).focus();
    };

    if (key === 'End') {
      if (isOpen) this.setState({ focusedItem: list.last() });else change(list.last());
      e.preventDefault();
    } else if (key === 'Home') {
      if (isOpen) this.setState({ focusedItem: list.first() });else change(list.first());
      e.preventDefault();
    } else if (key === 'Escape' && isOpen) {
      closeWithFocus();
    } else if ((key === 'Enter' || key === ' ' && !filtering) && isOpen) {
      change(this.state.focusedItem, true);
    } else if (key === 'ArrowDown') {
      if (alt) this.open();else if (isOpen) this.setState({ focusedItem: list.next(focusedItem) });else change(list.next(selectedItem));
      e.preventDefault();
    } else if (key === 'ArrowUp') {
      if (alt) closeWithFocus();else if (isOpen) this.setState({ focusedItem: list.prev(focusedItem) });else change(list.prev(selectedItem));
      e.preventDefault();
    } else if (!(this.props.filter && isOpen)) this.search(String.fromCharCode(e.keyCode), function (item) {
      isOpen ? _this4.setState({ focusedItem: item }) : change(item);
    });

    this.notify('onKeyDown', [e]);

    function change(item, fromList) {
      if (!item) return;
      fromList ? self._onSelect(item) : self.change(item);
    }
  }),

  change: function change(data) {
    if (!_.isShallowEqual(data, this.props.value)) {
      this.notify('onChange', data);
      this.notify('onSearch', '');
      this.close();
    }
  },

  focus: function focus(target) {
    var inst = target || (this.props.filter && this.props.open ? this.refs.filter : this.refs.input);

    if (activeElement() !== compat.findDOMNode(inst)) compat.findDOMNode(inst).focus();
  },

  _data: function _data() {
    return this.state.filteredData || this.props.data.concat();
  },

  search: function search(character, cb) {
    var _this5 = this;

    var word = ((this._searchTerm || '') + character).toLowerCase();

    this._searchTerm = word;

    this.setTimeout('search', function () {
      var list = _this5.refs.list,
          key = _this5.props.open ? 'focusedItem' : 'selectedItem',
          item = list.next(_this5.state[key], word);

      _this5._searchTerm = '';
      if (item) cb(item);
    }, this.props.delay);
  },

  open: function open() {
    this.notify('onToggle', true);
  },

  close: function close() {
    this.notify('onToggle', false);
  },

  toggle: function toggle() {
    this.props.open ? this.close() : this.open();
  }

});

function msgs(msgs) {
  return babelHelpers._extends({
    open: 'open dropdown',
    filterPlaceholder: '',
    emptyList: 'There are no items in this list',
    emptyFilter: 'The filter returned no results' }, msgs);
}

module.exports = createUncontrolledWidget(DropdownList, { open: 'onToggle', value: 'onChange', searchTerm: 'onSearch' });

module.exports.BaseDropdownList = DropdownList;
},{"./List":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js","./ListGroupable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListGroupable.js","./Popup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Popup.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataFilterMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataFilterMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/PopupScrollToMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PopupScrollToMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./util/validateListInterface":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/validateListInterface.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","dom-helpers/query/contains":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/contains.js","react":"react","react/lib/getActiveElement":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/getActiveElement.js","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Footer.js":[function(require,module,exports){
'use strict';

var React = require('react'),
    Btn = require('./WidgetButton'),
    localizers = require('./util/configuration').locale;

var format = function format(props) {
  return props.format || localizers.date.formats.footer;
};

module.exports = React.createClass({

  displayName: 'Footer',

  render: function render() {
    var now = this.props.value,
        formatted = localizers.date.format(now, format(this.props), this.props.culture);

    return React.createElement(
      'div',
      { className: 'rw-footer' },
      React.createElement(
        Btn,
        { tabIndex: '-1',
          'aria-disabled': !!this.props.disabled,
          'aria-readonly': !!this.props.readOnly,
          disabled: this.props.disabled,
          readOnly: this.props.readOnly,
          onClick: this.props.onClick.bind(null, now)
        },
        formatted
      )
    );
  }

});
},{"./WidgetButton":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Header.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    Btn = require('./WidgetButton');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    labelId: React.PropTypes.string,

    upDisabled: React.PropTypes.bool.isRequired,
    prevDisabled: React.PropTypes.bool.isRequired,
    nextDisabled: React.PropTypes.bool.isRequired,
    onViewChange: React.PropTypes.func.isRequired,
    onMoveLeft: React.PropTypes.func.isRequired,
    onMoveRight: React.PropTypes.func.isRequired,

    messages: React.PropTypes.shape({
      moveBack: React.PropTypes.string,
      moveForward: React.PropTypes.string
    })
  },

  mixins: [require('./mixins/PureRenderMixin'), require('./mixins/RtlChildContextMixin')],

  getDefaultProps: function getDefaultProps() {
    return {
      messages: {
        moveBack: 'navigate back',
        moveForward: 'navigate forward'
      }
    };
  },

  render: function render() {
    var _props = this.props;
    var messages = _props.messages;
    var label = _props.label;
    var labelId = _props.labelId;
    var onMoveRight = _props.onMoveRight;
    var onMoveLeft = _props.onMoveLeft;
    var onViewChange = _props.onViewChange;
    var prevDisabled = _props.prevDisabled;
    var upDisabled = _props.upDisabled;
    var nextDisabled = _props.nextDisabled;

    var rtl = this.isRtl();

    return React.createElement(
      'div',
      { className: 'rw-header' },
      React.createElement(
        Btn,
        { className: 'rw-btn-left',
          tabIndex: '-1',
          onClick: onMoveLeft,
          disabled: prevDisabled,
          'aria-disabled': prevDisabled,
          'aria-label': messages.moveBack,
          title: messages.moveBack
        },
        React.createElement('i', { 'aria-hidden': 'false',
          className: 'rw-i rw-i-caret-' + (rtl ? 'right' : 'left')
        })
      ),
      React.createElement(
        Btn,
        {
          id: labelId,
          tabIndex: '-1',
          className: 'rw-btn-view',
          disabled: upDisabled,
          'aria-disabled': upDisabled,
          'aria-live': 'polite',
          'aria-atomic': 'true',
          onClick: onViewChange
        },
        label
      ),
      React.createElement(
        Btn,
        { className: 'rw-btn-right',
          tabIndex: '-1',
          onClick: onMoveRight,
          disabled: nextDisabled,
          title: messages.moveForward,
          'aria-label': messages.moveForward,
          'aria-disabled': nextDisabled
        },
        React.createElement('i', { 'aria-hidden': 'false',
          className: 'rw-i rw-i-caret-' + (rtl ? 'left' : 'right')
        })
      )
    );
  }
});
},{"./WidgetButton":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlChildContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _ListOption = require('./ListOption');

var _ListOption2 = babelHelpers.interopRequireDefault(_ListOption);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var optionId = function optionId(id, idx) {
  return '' + id + '__option__' + idx;
};

exports['default'] = _react2['default'].createClass({

  displayName: 'List',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/ListMovementMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: {
    data: _react2['default'].PropTypes.array,
    onSelect: _react2['default'].PropTypes.func,
    onMove: _react2['default'].PropTypes.func,

    optionComponent: _utilPropTypes2['default'].elementType,
    itemComponent: _utilPropTypes2['default'].elementType,

    selectedIndex: _react2['default'].PropTypes.number,
    focusedIndex: _react2['default'].PropTypes.number,
    valueField: _react2['default'].PropTypes.string,
    textField: _utilPropTypes2['default'].accessor,

    optionID: _react2['default'].PropTypes.func,

    messages: _react2['default'].PropTypes.shape({
      emptyList: _utilPropTypes2['default'].message
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {
      optID: '',
      onSelect: function onSelect() {},
      optionComponent: _ListOption2['default'],
      ariaActiveDescendantKey: 'list',
      data: [],
      messages: {
        emptyList: 'There are no items in this list'
      }
    };
  },

  componentDidMount: function componentDidMount() {
    this.move();
  },

  componentDidUpdate: function componentDidUpdate() {
    var _props = this.props;
    var data = _props.data;
    var focused = _props.focused;
    var idx = data.indexOf(focused);
    var activeId = optionId(this._id(), idx);

    this.ariaActiveDescendant(idx !== -1 ? activeId : null);

    this.move();
  },

  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var className = _props2.className;
    var role = _props2.role;
    var data = _props2.data;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var messages = _props2.messages;
    var onSelect = _props2.onSelect;
    var ItemComponent = _props2.itemComponent;
    var Option = _props2.optionComponent;
    var optionID = _props2.optionID;
    var props = babelHelpers.objectWithoutProperties(_props2, ['className', 'role', 'data', 'focused', 'selected', 'messages', 'onSelect', 'itemComponent', 'optionComponent', 'optionID']);
    var id = this._id();
    var items;

    items = !data.length ? _react2['default'].createElement(
      'li',
      { className: 'rw-list-empty' },
      _util_2['default'].result(messages.emptyList, this.props)
    ) : data.map(function (item, idx) {
      var currentId = optionId(id, idx);

      // if (focused === item)
      //   this._activeID = currentId;

      return _react2['default'].createElement(
        Option,
        {
          key: 'item_' + idx,
          id: currentId,
          dataItem: item,
          focused: focused === item,
          selected: selected === item,
          onClick: onSelect.bind(null, item)
        },
        ItemComponent ? _react2['default'].createElement(ItemComponent, { item: item, value: _this._dataValue(item), text: _this._dataText(item) }) : _this._dataText(item)
      );
    });

    return _react2['default'].createElement(
      'ul',
      babelHelpers._extends({
        id: id,
        tabIndex: '-1',
        className: (0, _classnames2['default'])(className, 'rw-list'),
        role: role === undefined ? 'listbox' : role
      }, props),
      items
    );
  },

  _data: function _data() {
    return this.props.data;
  },

  move: function move() {
    var list = _utilCompat2['default'].findDOMNode(this),
        idx = this._data().indexOf(this.props.focused),
        selected = list.children[idx];

    if (!selected) return;

    this.notify('onMove', [selected, list, this.props.focused]);
  }

});
module.exports = exports['default'];
},{"./ListOption":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListOption.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/ListMovementMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/ListMovementMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListGroupable.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _ListOption = require('./ListOption');

var _ListOption2 = babelHelpers.interopRequireDefault(_ListOption);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _reactLibWarning = require('react/lib/warning');

var _reactLibWarning2 = babelHelpers.interopRequireDefault(_reactLibWarning);

var optionId = function optionId(id, idx) {
  return '' + id + '__option__' + idx;
};

exports['default'] = _react2['default'].createClass({

  displayName: 'List',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/ListMovementMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: {
    data: _react2['default'].PropTypes.array,
    onSelect: _react2['default'].PropTypes.func,
    onMove: _react2['default'].PropTypes.func,

    optionComponent: _utilPropTypes2['default'].elementType,
    itemComponent: _utilPropTypes2['default'].elementType,
    groupComponent: _utilPropTypes2['default'].elementType,

    selected: _react2['default'].PropTypes.any,
    focused: _react2['default'].PropTypes.any,

    valueField: _react2['default'].PropTypes.string,
    textField: _utilPropTypes2['default'].accessor,

    optID: _react2['default'].PropTypes.string,

    groupBy: _utilPropTypes2['default'].accessor,

    messages: _react2['default'].PropTypes.shape({
      emptyList: _utilPropTypes2['default'].message
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {
      optID: '',
      onSelect: function onSelect() {},
      data: [],
      optionComponent: _ListOption2['default'],
      ariaActiveDescendantKey: 'groupedList',
      messages: {
        emptyList: 'There are no items in this list'
      }
    };
  },

  getInitialState: function getInitialState() {
    var keys = [];

    return {
      groups: this._group(this.props.groupBy, this.props.data, keys),

      sortedKeys: keys
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var keys = [];

    if (nextProps.data !== this.props.data || nextProps.groupBy !== this.props.groupBy) this.setState({
      groups: this._group(nextProps.groupBy, nextProps.data, keys),
      sortedKeys: keys
    });
  },

  componentDidMount: function componentDidMount() {
    this.move();
  },

  componentDidUpdate: function componentDidUpdate() {
    this.ariaActiveDescendant(this._currentActiveID);
    this.move();
  },

  render: function render() {
    var _this = this;

    var _props = this.props;
    var className = _props.className;
    var role = _props.role;
    var data = _props.data;
    var messages = _props.messages;
    var onSelect = _props.onSelect;
    var selectedIndex = _props.selectedIndex;
    var props = babelHelpers.objectWithoutProperties(_props, ['className', 'role', 'data', 'messages', 'onSelect', 'selectedIndex']);
    var id = this._id();var _state = this.state;
    var sortedKeys = _state.sortedKeys;
    var groups = _state.groups;

    var items = [],
        idx = -1,
        group = undefined;

    this._currentActiveID = null;

    if (data.length) {
      items = sortedKeys.reduce(function (items, key) {
        group = groups[key];
        items.push(_this._renderGroupHeader(key));

        for (var itemIdx = 0; itemIdx < group.length; itemIdx++) items.push(_this._renderItem(key, group[itemIdx], ++idx));

        return items;
      }, []);
    } else items = _react2['default'].createElement(
      'li',
      { className: 'rw-list-empty' },
      _util_2['default'].result(messages.emptyList, this.props)
    );

    return _react2['default'].createElement(
      'ul',
      babelHelpers._extends({
        ref: 'scrollable',
        id: id,
        tabIndex: '-1',
        className: (0, _classnames2['default'])(className, 'rw-list', 'rw-list-grouped'),
        role: role === undefined ? 'listbox' : role
      }, props),
      items
    );
  },

  _renderGroupHeader: function _renderGroupHeader(group) {
    var GroupComponent = this.props.groupComponent,
        id = this._id();

    return _react2['default'].createElement(
      'li',
      {
        key: 'item_' + group,
        tabIndex: '-1',
        role: 'separator',
        id: id + '_group_' + group,
        className: 'rw-list-optgroup'
      },
      GroupComponent ? _react2['default'].createElement(GroupComponent, { item: group }) : group
    );
  },

  _renderItem: function _renderItem(group, item, idx) {
    var _props2 = this.props;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var onSelect = _props2.onSelect;
    var ItemComponent = _props2.itemComponent;
    var Option = _props2.optionComponent;

    var currentID = optionId(this._id(), idx);

    if (focused === item) this._currentActiveID = currentID;

    return _react2['default'].createElement(
      Option,
      {
        key: 'item_' + group + '_' + idx,
        id: currentID,
        dataItem: item,
        focused: focused === item,
        selected: selected === item,
        onClick: onSelect.bind(null, item)
      },
      ItemComponent ? _react2['default'].createElement(ItemComponent, {
        item: item,
        value: this._dataValue(item),
        text: this._dataText(item)
      }) : this._dataText(item)
    );
  },

  _isIndexOf: function _isIndexOf(idx, item) {
    return this.props.data[idx] === item;
  },

  _group: function _group(groupBy, data, keys) {
    var iter = typeof groupBy === 'function' ? groupBy : function (item) {
      return item[groupBy];
    };

    // the keys array ensures that groups are rendered in the order they came in
    // which means that if you sort the data array it will render sorted,
    // so long as you also sorted by group
    keys = keys || [];

    (0, _reactLibWarning2['default'])(typeof groupBy !== 'string' || !data.length || _util_2['default'].has(data[0], groupBy), '[React Widgets] You are seem to be trying to group this list by a ' + ('property `' + groupBy + '` that doesn\'t exist in the dataset items, this may be a typo'));

    return data.reduce(function (grps, item) {
      var group = iter(item);

      _util_2['default'].has(grps, group) ? grps[group].push(item) : (keys.push(group), grps[group] = [item]);

      return grps;
    }, {});
  },

  _data: function _data() {
    var groups = this.state.groups;

    return this.state.sortedKeys.reduce(function (flat, grp) {
      return flat.concat(groups[grp]);
    }, []);
  },

  move: function move() {
    var selected = this.getItemDOMNode(this.props.focused);

    if (!selected) return;

    this.notify('onMove', [selected, _utilCompat2['default'].findDOMNode(this), this.props.focused]);
  },

  getItemDOMNode: function getItemDOMNode(item) {
    var list = _utilCompat2['default'].findDOMNode(this),
        groups = this.state.groups,
        idx = -1,
        itemIdx,
        child;

    this.state.sortedKeys.some(function (group) {
      itemIdx = groups[group].indexOf(item);
      idx++;

      if (itemIdx !== -1) return !!(child = list.children[idx + itemIdx + 1]);

      idx += groups[group].length;
    });

    return child;
  }

});
module.exports = exports['default'];
},{"./ListOption":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListOption.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/ListMovementMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/ListMovementMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","react/lib/warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/warning.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListOption.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var ListOption = _react2['default'].createClass({
  displayName: 'ListOption',

  propTypes: {
    dataItem: _react2['default'].PropTypes.any,
    focused: _react2['default'].PropTypes.bool,
    selected: _react2['default'].PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var focused = _props.focused;
    var selected = _props.selected;
    var props = babelHelpers.objectWithoutProperties(_props, ['className', 'children', 'focused', 'selected']);

    var classes = {
      'rw-state-focus': focused,
      'rw-state-selected': selected
    };

    return _react2['default'].createElement(
      'li',
      babelHelpers._extends({
        role: 'option',
        tabIndex: '-1',
        'aria-selected': !!selected,
        className: (0, _classnames2['default'])('rw-list-option', className, classes)
      }, props),
      children
    );
  }
});

exports['default'] = ListOption;
module.exports = exports['default'];
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Month.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var localizers = _utilConfiguration2['default'].locale,
    dayFormat = function dayFormat(props) {
  return props.dayFormat || localizers.date.formats.weekday;
},
    dateFormat = function dateFormat(props) {
  return props.dateFormat || localizers.date.formats.dayOfMonth;
};

var optionId = function optionId(id, date) {
  return '' + id + '__month_' + _utilDates2['default'].month(date) + '-' + _utilDates2['default'].date(date);
};

var propTypes = {
  optionID: _react2['default'].PropTypes.func,

  culture: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.instanceOf(Date),
  focused: _react2['default'].PropTypes.instanceOf(Date),
  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),

  dayComponent: _utilPropTypes2['default'].elementType,

  dayFormat: _utilPropTypes2['default'].dateFormat,
  dateFormat: _utilPropTypes2['default'].dateFormat,
  footerFormat: _utilPropTypes2['default'].dateFormat,

  onChange: _react2['default'].PropTypes.func.isRequired
};

var isEqual = function isEqual(dateA, dateB) {
  return _utilDates2['default'].eq(dateA, dateB, 'day');
};

var MonthView = _react2['default'].createClass({

  displayName: 'MonthView',

  statics: {
    isEqual: isEqual
  },

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/RtlChildContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  componentDidUpdate: function componentDidUpdate() {
    var activeId = optionId(this._id(), this.props.focused);
    this.ariaActiveDescendant(activeId, null);
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var focused = _props.focused;
    var focusID = _props.focusID;
    var culture = _props.culture;
    var month = _utilDates2['default'].visibleDays(focused, culture);
    var rows = _util_2['default'].chunk(month, 7);

    var elementProps = _util_2['default'].omit(this.props, Object.keys(propTypes));

    return _react2['default'].createElement(
      'table',
      babelHelpers._extends({}, elementProps, {
        role: 'grid'
      }),
      _react2['default'].createElement(
        'thead',
        null,
        _react2['default'].createElement(
          'tr',
          null,
          this._headers(dayFormat(this.props), culture)
        )
      ),
      _react2['default'].createElement(
        'tbody',
        null,
        rows.map(this._row)
      )
    );
  },

  _row: function _row(row, rowIdx) {
    var _this = this;

    var _props2 = this.props;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var disabled = _props2.disabled;
    var onChange = _props2.onChange;
    var value = _props2.value;
    var today = _props2.today;
    var culture = _props2.culture;
    var min = _props2.min;
    var max = _props2.max;
    var Day = _props2.dayComponent;
    var id = this._id();
    var labelFormat = localizers.date.formats.footer;

    return _react2['default'].createElement(
      'tr',
      { key: 'week_' + rowIdx, role: 'row' },
      row.map(function (day, colIdx) {

        var isFocused = isEqual(day, focused),
            isSelected = isEqual(day, value),
            today = isEqual(day, today),
            date = localizers.date.format(day, dateFormat(_this.props), culture),
            label = localizers.date.format(day, labelFormat, culture);

        var currentID = optionId(id, day);

        return !_utilDates2['default'].inRange(day, min, max) ? _react2['default'].createElement(
          'td',
          { key: 'day_' + colIdx, role: 'presentation', className: 'rw-empty-cell' },
          ' '
        ) : _react2['default'].createElement(
          'td',
          {
            key: 'day_' + colIdx,
            role: 'gridcell',
            id: currentID,
            title: label,
            'aria-selected': isSelected,
            'aria-label': label,
            'aria-readonly': disabled
          },
          _react2['default'].createElement(
            'span',
            {
              'aria-labelledby': currentID,
              onClick: onChange.bind(null, day),
              className: (0, _classnames2['default'])('rw-btn', {
                'rw-off-range': _utilDates2['default'].month(day) !== _utilDates2['default'].month(focused),
                'rw-state-focus': isFocused,
                'rw-state-selected': isSelected,
                'rw-now': today
              })
            },
            Day ? _react2['default'].createElement(Day, { date: day, label: date }) : date
          )
        );
      })
    );
  },

  _headers: function _headers(format, culture) {
    return [0, 1, 2, 3, 4, 5, 6].map(function (day) {
      return _react2['default'].createElement(
        'th',
        { key: 'header_' + day },
        localizers.date.format(day, format, culture)
      );
    });
  }

});

exports['default'] = MonthView;
module.exports = exports['default'];
},{"./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/RtlChildContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Multiselect.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    cx = require('classnames'),
    _ = require('./util/_'),
    support = require('./util/dom/support'),
    compat = require('./util/compat'),
    SelectInput = require('./MultiselectInput'),
    TagList = require('./MultiselectTagList'),
    Popup = require('./Popup'),
    PlainList = require('./List'),
    GroupableList = require('./ListGroupable'),
    validateList = require('./util/validateListInterface'),
    createUncontrolledWidget = require('uncontrollable'),
    CustomPropTypes = require('./util/propTypes');

var compatCreate = function compatCreate(props, msgs) {
  return typeof msgs.createNew === 'function' ? msgs.createNew(props) : [React.createElement(
    'strong',
    null,
    '"' + props.searchTerm + '"'
  ), ' ' + msgs.createNew];
};

var omit = _.omit;
var pick = _.pick;
var result = _.result;
var splat = _.splat;

var propTypes = {
  data: React.PropTypes.array,
  //-- controlled props --
  value: React.PropTypes.array,
  onChange: React.PropTypes.func,

  searchTerm: React.PropTypes.string,
  onSearch: React.PropTypes.func,

  open: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
  //-------------------------------------------

  valueField: React.PropTypes.string,
  textField: CustomPropTypes.accessor,

  tagComponent: CustomPropTypes.elementType,
  itemComponent: CustomPropTypes.elementType,
  listComponent: CustomPropTypes.elementType,

  groupComponent: CustomPropTypes.elementType,
  groupBy: CustomPropTypes.accessor,

  createComponent: CustomPropTypes.elementType,

  onSelect: React.PropTypes.func,
  onCreate: React.PropTypes.oneOfType([React.PropTypes.oneOf([false]), React.PropTypes.func]),

  dropUp: React.PropTypes.bool,
  duration: React.PropTypes.number, //popup

  placeholder: React.PropTypes.string,

  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(['disabled'])]),

  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(['readonly'])]),

  messages: React.PropTypes.shape({
    open: CustomPropTypes.message,
    emptyList: CustomPropTypes.message,
    emptyFilter: CustomPropTypes.message,
    createNew: CustomPropTypes.message
  })
};

var Multiselect = React.createClass({

  displayName: 'Multiselect',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/DataFilterMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/PopupScrollToMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')('input', function (key, id) {
    var myKey = this.props.ariaActiveDescendantKey;

    var createIsActive = (!this._data().length || this.state.focusedItem === null) && key === myKey;

    var tagIsActive = this.state.focusedTag != null && key === 'taglist';
    var listIsActive = this.state.focusedTag == null && key === 'list';

    if (createIsActive || tagIsActive || listIsActive) return id;
  })],

  propTypes: propTypes,

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      filter: 'startsWith',
      value: [],
      open: false,
      searchTerm: '',
      ariaActiveDescendantKey: 'multiselect',
      messages: {
        createNew: '(create new tag)',
        emptyList: 'There are no items in this list',
        emptyFilter: 'The filter returned no results',
        tagsLabel: 'selected items',
        selectedItems: 'selected items',
        noneSelected: 'no selected items',
        removeLabel: 'remove selected item'
      }
    };
  },

  getInitialState: function getInitialState() {
    var _this = this;

    var dataItems = splat(this.props.value).map(function (item) {
      return _this._dataItem(_this.props.data, item);
    }),
        data = this.process(this.props.data, dataItems, this.props.searchTerm);

    return {
      focusedTag: null,
      focusedItem: data[0],
      processedData: data,
      dataItems: dataItems
    };
  },

  componentDidUpdate: function componentDidUpdate() {
    this.ariaActiveDescendant(this._id('__createlist_option'));

    this.refs.list && validateList(this.refs.list);
  },

  componentDidMount: function componentDidMount() {
    // https://github.com/facebook/react/issues/1169
    if (support.ios) compat.findDOMNode(this.refs.wrapper).onClick = function () {};
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var values = _.splat(nextProps.value),
        current = this.state.focusedItem,
        items = this.process(nextProps.data, values, nextProps.searchTerm);

    this.setState({
      processedData: items,
      focusedItem: items.indexOf(current) === -1 ? items[0] : current,
      dataItems: values.map(function (item) {
        return _this2._dataItem(nextProps.data, item);
      })
    });
  },

  render: function render() {
    var _cx,
        _this3 = this;

    var _props = this.props;
    var searchTerm = _props.searchTerm;
    var maxLength = _props.maxLength;
    var className = _props.className;
    var children = _props.children;
    var tabIndex = _props.tabIndex;
    var groupBy = _props.groupBy;
    var messages = _props.messages;
    var data = _props.data;
    var busy = _props.busy;
    var dropUp = _props.dropUp;
    var placeholder = _props.placeholder;
    var value = _props.value;
    var open = _props.open;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var TagComponent = _props.tagComponent;
    var List = _props.listComponent;

    List = List || groupBy && GroupableList || PlainList;

    messages = msgs(messages);

    var elementProps = omit(this.props, Object.keys(propTypes));
    var tagsProps = pick(this.props, ['valueField', 'textField']);
    var inputProps = pick(this.props, ['maxLength', 'searchTerm']);
    var listProps = pick(this.props, Object.keys(compat.type(List).propTypes));
    var popupProps = pick(this.props, Object.keys(compat.type(Popup).propTypes));

    var _state = this.state;
    var focusedTag = _state.focusedTag;
    var focusedItem = _state.focusedItem;
    var selectedItem = _state.selectedItem;
    var focused = _state.focused;
    var dataItems = _state.dataItems;

    var items = this._data(),
        tagsID = this._id('_taglist'),
        listID = this._id('__listbox'),
        createID = this._id('__createlist'),
        createOptionID = this._id('__createlist_option');

    var shouldRenderTags = !!dataItems.length,
        shouldRenderPopup = _.isFirstFocusedRender(this) || open,
        shouldShowCreate = this._shouldShowCreate(),
        createIsFocused = !items.length || focusedItem === null;

    if (focused) {
      var notify = dataItems.length ? messages.selectedItems + ': ' + dataItems.map(this._dataText).join(', ') : messages.noneSelected;
    }

    return React.createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        ref: 'element',
        id: this._id(),
        onKeyDown: this._maybeHandle(this._keyDown),
        onFocus: this._maybeHandle(this._focus.bind(null, true), true),
        onBlur: this._focus.bind(null, false),
        tabIndex: '-1',
        className: cx(className, 'rw-widget', 'rw-multiselect', (_cx = {}, _cx['rw-state-focus'] = focused, _cx['rw-state-disabled'] = disabled === true, _cx['rw-state-readonly'] = readOnly === true, _cx['rw-rtl'] = this.isRtl(), _cx['rw-open' + (dropUp ? '-up' : '')] = open, _cx)) }),
      React.createElement(
        'span',
        {
          ref: 'status',
          id: this._id('__notify'),
          role: 'status',
          className: 'sr-only',
          'aria-live': 'assertive',
          'aria-atomic': 'true',
          'aria-relevant': 'additions removals text'
        },
        notify
      ),
      React.createElement(
        'div',
        { className: 'rw-multiselect-wrapper', ref: 'wrapper' },
        busy && React.createElement('i', { className: 'rw-i rw-loading' }),
        shouldRenderTags && React.createElement(TagList, babelHelpers._extends({}, tagsProps, {
          ref: 'tagList',
          id: tagsID,
          'aria-label': messages.tagsLabel,
          value: dataItems,
          focused: focusedTag,
          disabled: disabled,
          readOnly: readOnly,
          onDelete: this._delete,
          valueComponent: TagComponent,
          ariaActiveDescendantKey: 'taglist'
        })),
        React.createElement(SelectInput, babelHelpers._extends({}, inputProps, {
          ref: 'input',
          tabIndex: tabIndex || 0,
          role: 'listbox',
          'aria-expanded': open,
          'aria-busy': !!busy,
          'aria-owns': listID + ' ' + this._id('__notify') + (shouldRenderTags ? ' ' + tagsID : '') + (shouldShowCreate ? ' ' + createID : ''),
          'aria-haspopup': true,
          value: searchTerm,
          maxLength: maxLength,
          disabled: disabled === true,
          readOnly: readOnly === true,
          placeholder: this._placeholder(),
          onKeyDown: this._searchKeyDown,
          onKeyUp: this._searchgKeyUp,
          onChange: this._typing,
          onFocus: this._inputFocus,
          onClick: this._inputFocus
        }))
      ),
      React.createElement(
        Popup,
        babelHelpers._extends({}, popupProps, {
          onOpening: function () {
            return _this3.refs.list.forceUpdate();
          },
          onRequestClose: this.close
        }),
        React.createElement(
          'div',
          null,
          shouldRenderPopup && [React.createElement(List, babelHelpers._extends({ ref: 'list',
            key: '0'
          }, listProps, {
            readOnly: !!readOnly,
            disabled: !!disabled,
            id: listID,
            'aria-live': 'polite',
            'aria-labelledby': this._id(),
            'aria-hidden': !open,
            ariaActiveDescendantKey: 'list',
            data: items,
            focused: focusedItem,
            onSelect: this._maybeHandle(this._onSelect),
            onMove: this._scrollTo,
            messages: {
              emptyList: data.length ? messages.emptyFilter : messages.emptyList
            }
          })), shouldShowCreate && React.createElement(
            'ul',
            { role: 'listbox', id: createID, className: 'rw-list rw-multiselect-create-tag', key: '1' },
            React.createElement(
              'li',
              { onClick: this._onCreate.bind(null, searchTerm),
                role: 'option',
                id: createOptionID,
                className: cx({
                  'rw-list-option': true,
                  'rw-state-focus': createIsFocused
                }) },
              compatCreate(this.props, messages)
            )
          )]
        )
      )
    );
  },

  _data: function _data() {
    return this.state.processedData;
  },

  _delete: function _delete(value) {
    this._focus(true);
    this.change(this.state.dataItems.filter(function (d) {
      return d !== value;
    }));
  },

  _inputFocus: function _inputFocus() {
    this._focus(true);
    !this.props.open && this.open();
  },

  _focus: function _focus(focused, e) {
    var _this4 = this;

    if (this.props.disabled === true) return;

    if (focused) this.refs.input.focus();

    this.setTimeout('focus', function () {
      if (!focused) _this4.refs.tagList && _this4.setState({ focusedTag: null });

      if (focused !== _this4.state.focused) {
        focused ? _this4.open() : _this4.close();

        _this4.notify(focused ? 'onFocus' : 'onBlur', e);
        _this4.setState({ focused: focused });
      }
    });
  },

  _searchKeyDown: function _searchKeyDown(e) {
    if (e.key === 'Backspace' && e.target.value && !this._deletingText) this._deletingText = true;
  },

  _searchgKeyUp: function _searchgKeyUp(e) {
    if (e.key === 'Backspace' && this._deletingText) this._deletingText = false;
  },

  _typing: function _typing(e) {
    this.notify('onSearch', [e.target.value]);
    this.open();
  },

  _onSelect: function _onSelect(data) {

    if (data === undefined) {
      if (this.props.onCreate) this._onCreate(this.props.searchTerm);

      return;
    }

    this.notify('onSelect', data);
    this.change(this.state.dataItems.concat(data));

    this.close();
    this._focus(true);
  },

  _onCreate: function _onCreate(tag) {
    if (tag.trim() === '') return;

    this.notify('onCreate', tag);
    this.props.searchTerm && this.notify('onSearch', ['']);

    this.close();
    this._focus(true);
  },

  _keyDown: function _keyDown(e) {
    var key = e.key;
    var altKey = e.altKey;
    var ctrlKey = e.ctrlKey;
    var noSearch = !this.props.searchTerm && !this._deletingText;
    var isOpen = this.props.open;var _state2 = this.state;
    var focusedTag = _state2.focusedTag;
    var focusedItem = _state2.focusedItem;
    var _refs = this.refs;
    var list = _refs.list;
    var tagList = _refs.tagList;

    var nullTag = { focusedTag: null };

    if (key === 'ArrowDown') {
      var next = list.next(focusedItem),
          creating = this._shouldShowCreate() && focusedItem === next || focusedItem === null;

      next = creating ? null : next;

      e.preventDefault();
      if (isOpen) this.setState(babelHelpers._extends({ focusedItem: next }, nullTag));else this.open();
    } else if (key === 'ArrowUp') {
      var prev = focusedItem === null ? list.last() : list.prev(focusedItem);

      e.preventDefault();

      if (altKey) this.close();else if (isOpen) this.setState(babelHelpers._extends({ focusedItem: prev }, nullTag));
    } else if (key === 'End') {
      if (isOpen) this.setState(babelHelpers._extends({ focusedItem: list.last() }, nullTag));else tagList && this.setState({ focusedTag: tagList.last() });
    } else if (key === 'Home') {
      if (isOpen) this.setState(babelHelpers._extends({ focusedItem: list.first() }, nullTag));else tagList && this.setState({ focusedTag: tagList.first() });
    } else if (isOpen && key === 'Enter') ctrlKey && this.props.onCreate || focusedItem === null ? this._onCreate(this.props.searchTerm) : this._onSelect(this.state.focusedItem);else if (key === 'Escape') isOpen ? this.close() : tagList && this.setState(nullTag);else if (noSearch && key === 'ArrowLeft') tagList && this.setState({ focusedTag: tagList.prev(focusedTag) });else if (noSearch && key === 'ArrowRight') tagList && this.setState({ focusedTag: tagList.next(focusedTag) });else if (noSearch && key === 'Delete') tagList && tagList.remove(focusedTag);else if (noSearch && key === 'Backspace') tagList && tagList.removeNext();

    this.notify('onKeyDown', [e]);
  },

  // _firstFocus(){
  //   this.open()
  // }

  change: function change(data) {
    this.notify('onChange', [data]);
    this.props.searchTerm && this.notify('onSearch', ['']);
  },

  open: function open() {
    if (!(this.props.disabled === true || this.props.readOnly === true)) this.notify('onToggle', true);
  },

  close: function close() {
    this.notify('onToggle', false);
  },

  toggle: function toggle() {
    this.props.open ? this.close() : this.open();
  },

  process: function process(data, values, searchTerm) {
    var _this5 = this;

    var items = data.filter(function (i) {
      return !values.some(_this5._valueMatcher.bind(null, i), _this5);
    }, this);

    if (searchTerm) items = this.filter(items, searchTerm);

    return items;
  },

  _shouldShowCreate: function _shouldShowCreate() {
    var _this6 = this;

    var text = this.props.searchTerm;

    if (!this.props.onCreate || !text) return false;

    // if there is an exact match on textFields: "john" => { name: "john" }, don't show
    return !this._data().some(function (v) {
      return _this6._dataText(v) === text;
    }) && !this.state.dataItems.some(function (v) {
      return _this6._dataText(v) === text;
    });
  },

  _placeholder: function _placeholder() {
    return (this.props.value || []).length ? '' : this.props.placeholder || '';
  }

});

function msgs(msgs) {
  return babelHelpers._extends({
    createNew: '(create new tag)',
    emptyList: 'There are no items in this list',
    emptyFilter: 'The filter returned no results',
    tagsLabel: 'selected items',
    selectedItems: 'selected items',
    removeLabel: 'remove selected item' }, msgs);
}

module.exports = createUncontrolledWidget(Multiselect, { open: 'onToggle', value: 'onChange', searchTerm: 'onSearch' });

// function defaultChange(){
//   if ( this.props.searchTerm === undefined )
//     this.setState({ searchTerm: '' })
// }

module.exports.BaseMultiselect = Multiselect;
},{"./List":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js","./ListGroupable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListGroupable.js","./MultiselectInput":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/MultiselectInput.js","./MultiselectTagList":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/MultiselectTagList.js","./Popup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Popup.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataFilterMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataFilterMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/PopupScrollToMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PopupScrollToMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/dom/support":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dom/support.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./util/validateListInterface":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/validateListInterface.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/MultiselectInput.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    compat = require('./util/compat');

module.exports = React.createClass({

  displayName: 'MultiselectInput',

  propTypes: {
    value: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func,

    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool
  },

  componentDidUpdate: function componentDidUpdate() {
    this.props.focused && this.focus();
  },

  render: function render() {
    var value = this.props.value,
        placeholder = this.props.placeholder,
        size = Math.max((value || placeholder).length, 1) + 1;

    return React.createElement('input', babelHelpers._extends({}, this.props, {
      className: 'rw-input',
      autoComplete: 'off',
      'aria-disabled': this.props.disabled,
      'aria-readonly': this.props.readOnly,
      disabled: this.props.disabled,
      readOnly: this.props.readOnly,
      size: size
    }));
  },

  focus: function focus() {
    compat.findDOMNode(this).focus();
  }

});
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/MultiselectTagList.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var _mixinsWidgetMixin = require('./mixins/WidgetMixin');

var _mixinsWidgetMixin2 = babelHelpers.interopRequireDefault(_mixinsWidgetMixin);

var React = require('react'),
    _ = require('./util/_'),
    cx = require('classnames'),
    CustomPropTypes = require('./util/propTypes');

var optionId = function optionId(id, idx) {
  return '' + id + '__option__' + idx;
};

module.exports = React.createClass({

  displayName: 'MultiselectTagList',

  mixins: [require('./mixins/DataHelpersMixin'), require('./mixins/PureRenderMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: {
    value: React.PropTypes.array,
    focused: React.PropTypes.number,

    valueField: React.PropTypes.string,
    textField: CustomPropTypes.accessor,

    valueComponent: React.PropTypes.func,

    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(['disabled'])]),

    readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array, React.PropTypes.oneOf(['readonly'])])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      ariaActiveDescendantKey: 'taglist'
    };
  },

  componentDidUpdate: function componentDidUpdate() {
    var _props = this.props;
    var value = _props.value;
    var focused = _props.focused;
    var activeId = optionId(_mixinsWidgetMixin2['default']._id.call(this), focused);

    this.ariaActiveDescendant(focused == null || this.isDisabled(focused) ? null : activeId);
  },

  render: function render() {
    var _this = this;

    var ValueComponent = this.props.valueComponent;
    var props = _.omit(this.props, ['value', 'disabled', 'readOnly']);
    var _props2 = this.props;
    var focused = _props2.focused;
    var optionID = _props2.optionID;
    var value = _props2.value;

    var id = _mixinsWidgetMixin2['default']._id.call(this);

    return React.createElement(
      'ul',
      babelHelpers._extends({}, props, {
        role: 'listbox',
        tabIndex: '-1',
        className: 'rw-multiselect-taglist'
      }),
      value.map(function (item, i) {
        var isDisabled = _this.isDisabled(item),
            isReadonly = _this.isReadOnly(item),
            isFocused = !isDisabled && focused === i,
            currentID = optionId(id, i);

        return React.createElement(
          'li',
          {
            key: i,
            id: currentID,
            tabIndex: '-1',
            role: 'option',
            className: cx({
              'rw-state-focus': isFocused,
              'rw-state-disabled': isDisabled,
              'rw-state-readonly': isReadonly
            })
          },
          ValueComponent ? React.createElement(ValueComponent, { item: item }) : _this._dataText(item),
          React.createElement(
            'span',
            {
              tabIndex: '-1',
              onClick: !(isDisabled || isReadonly) && _this._delete.bind(null, item),
              'aria-disabled': isDisabled,
              'aria-label': 'Unselect',
              disabled: isDisabled
            },
            React.createElement(
              'span',
              { className: 'rw-tag-btn', 'aria-hidden': 'true' },
              '×'
            )
          )
        );
      })
    );
  },

  _delete: function _delete(val) {
    this.props.onDelete(val);
  },

  remove: function remove(idx) {
    var val = this.props.value[idx];

    if (val && !(this.isDisabled(val) || this.isReadOnly(val))) this.props.onDelete(val);
  },

  removeNext: function removeNext() {
    var val = this.props.value[this.props.value.length - 1];

    if (val && !(this.isDisabled(val) || this.isReadOnly(val))) this.props.onDelete(val);
  },

  isDisabled: function isDisabled(val, isIdx) {
    if (isIdx) val = this.props.value[val];

    return this.props.disabled === true || this._dataIndexOf(this.props.disabled || [], val) !== -1;
  },

  isReadOnly: function isReadOnly(val, isIdx) {
    if (isIdx) val = this.props.value[val];

    return this.props.readOnly === true || this._dataIndexOf(this.props.readOnly || [], val) !== -1;
  },

  clear: function clear() {
    this.setState({ focused: null });
  },

  first: function first() {
    var idx = 0,
        l = this.props.value.length;

    while (idx < l && this.isDisabled(idx, true)) idx++;

    return idx !== l ? idx : null;
  },

  last: function last() {
    var idx = this.props.value.length - 1;

    while (idx > -1 && this.isDisabled(idx, true)) idx--;

    return idx >= 0 ? idx : null;
  },

  next: function next(current) {
    var nextIdx = current + 1,
        l = this.props.value.length;

    while (nextIdx < l && this.isDisabled(nextIdx, true)) nextIdx++;

    if (current === null || nextIdx >= l) return null;

    return nextIdx;
  },

  prev: function prev(current) {
    var nextIdx = current;

    if (nextIdx === null || nextIdx === 0) nextIdx = this.props.value.length;

    nextIdx--;

    while (nextIdx > -1 && this.isDisabled(nextIdx, true)) nextIdx--;

    return nextIdx >= 0 ? nextIdx : null;
  }
});
},{"./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/NumberInput.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    CustomPropTypes = require('./util/propTypes'),
    localizers = require('./util/configuration').locale;

var format = function format(props) {
  return props.format || localizers.number.formats['default'];
};

module.exports = React.createClass({

  displayName: 'NumberPickerInput',

  propTypes: {
    value: React.PropTypes.number,

    format: CustomPropTypes.numberFormat,
    parse: React.PropTypes.func.isRequired,
    culture: React.PropTypes.string,

    min: React.PropTypes.number,

    onChange: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: null,
      editing: false,
      parse: function parse(number, culture) {
        return localizers.number.parse(number, culture);
      }
    };
  },

  getDefaultState: function getDefaultState(props) {
    var value = props.editing ? props.value : formatNumber(props.value, format(props), props.culture);

    if (value == null || isNaN(props.value)) value = '';

    return {
      stringValue: '' + value
    };
  },

  getInitialState: function getInitialState() {
    return this.getDefaultState(this.props);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(this.getDefaultState(nextProps));
  },

  render: function render() {
    var value = this.state.stringValue;

    return React.createElement('input', babelHelpers._extends({}, this.props, {
      type: 'text',
      className: 'rw-input',
      onChange: this._change,
      onBlur: this._finish,
      'aria-disabled': this.props.disabled,
      'aria-readonly': this.props.readOnly,
      disabled: this.props.disabled,
      readOnly: this.props.readOnly,
      value: value }));
  },

  _change: function _change(e) {
    var val = e.target.value,
        number = this.props.parse(e.target.value, this.props.culture),
        valid = this.isValid(number);

    if (val == null || val.trim() === '') return this.props.onChange(null);

    if (valid && number !== this.props.value && !this.isAtDelimiter(number, val)) return this.props.onChange(number);

    //console.log(val !== 0 && !val)
    if (!isNaN(number) || this.isAtDelimiter(number, val)) this.current(e.target.value);
  },

  _finish: function _finish() {
    var str = this.state.stringValue,
        number = this.props.parse(str, this.props.culture);

    // if number is below the min
    // we need to flush low values and decimal stops, onBlur means i'm done inputing
    if (!isNaN(number) && (number < this.props.min || this.isAtDelimiter(number, str))) {
      this.props.onChange(number);
    }
  },

  isAtDelimiter: function isAtDelimiter(num, str) {
    var next;

    if (str.length <= 1) return false;

    next = this.props.parse(str.substr(0, str.length - 1), this.props.culture);

    return typeof next === 'number' && !isNaN(next) && next === num;
  },

  isValid: function isValid(num) {
    if (typeof num !== 'number' || isNaN(num)) return false;
    return num >= this.props.min;
  },

  //this intermediate state is for when one runs into the decimal or are typing the number
  current: function current(val) {
    this.setState({ stringValue: val });
  }

});

// function parseLocaleFloat(number, parser, culture) {
//   if ( typeof format === 'function')
//     return format(number, culture)

//   return config.globalize.parseFloat(number, 10, culture)
// }

function formatNumber(number, format, culture) {
  return localizers.number.format(number, format, culture);
}
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/NumberPicker.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    cx = require('classnames'),
    _ = require('./util/_') //omit
,
    compat = require('./util/compat'),
    CustomPropTypes = require('./util/propTypes'),
    createUncontrolledWidget = require('uncontrollable'),
    directions = require('./util/constants').directions,
    repeater = require('./util/repeater'),
    localizers = require('./util/configuration').locale,
    Input = require('./NumberInput');

var Btn = require('./WidgetButton');

var format = function format(props) {
  return props.format || localizers.number.formats['default'];
};

var propTypes = {

  // -- controlled props -----------
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
  //------------------------------------

  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,

  precision: React.PropTypes.number,

  culture: React.PropTypes.string,

  format: CustomPropTypes.numberFormat,

  name: React.PropTypes.string,

  parse: React.PropTypes.func,

  disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['disabled'])]),

  readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['readOnly'])]),

  messages: React.PropTypes.shape({
    increment: React.PropTypes.string,
    decrement: React.PropTypes.string
  })
};

var NumberPicker = React.createClass({

  displayName: 'NumberPicker',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/PureRenderMixin'), require('./mixins/RtlParentContextMixin')],

  propTypes: propTypes,

  getDefaultProps: function getDefaultProps() {
    return {
      value: null,
      open: false,

      min: -Infinity,
      max: Infinity,
      step: 1,

      messages: {
        increment: 'increment value',
        decrement: 'decrement value'
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      focused: false,
      active: false
    };
  },

  render: function render() {
    var _$omit = _.omit(this.props, Object.keys(propTypes));

    var className = _$omit.className;
    var onKeyDown = _$omit.onKeyDown;
    var onKeyPress = _$omit.onKeyPress;
    var onKeyUp = _$omit.onKeyUp;
    var props = babelHelpers.objectWithoutProperties(_$omit, ['className', 'onKeyDown', 'onKeyPress', 'onKeyUp']);
    var val = this.constrainValue(this.props.value);

    return React.createElement(
      'div',
      babelHelpers._extends({}, props, {
        ref: 'element',
        onKeyDown: this._keyDown,
        onFocus: this._focus.bind(null, true),
        onBlur: this._focus.bind(null, false),
        tabIndex: '-1',
        className: cx(className, 'rw-numberpicker', 'rw-widget', {
          'rw-state-focus': this.state.focused,
          'rw-state-disabled': this.props.disabled,
          'rw-state-readonly': this.props.readOnly,
          'rw-rtl': this.isRtl()
        }) }),
      React.createElement(
        'span',
        { className: 'rw-select' },
        React.createElement(
          Btn,
          {
            tabIndex: '-1',
            className: cx({ 'rw-state-active': this.state.active === directions.UP }),
            onMouseDown: this._mouseDown.bind(null, directions.UP),
            onMouseUp: this._mouseUp.bind(null, directions.UP),
            onClick: this._focus.bind(null, true),
            disabled: val === this.props.max || this.props.disabled,
            'aria-disabled': val === this.props.max || this.props.disabled },
          React.createElement(
            'i',
            { className: 'rw-i rw-i-caret-up' },
            React.createElement(
              'span',
              { className: 'rw-sr' },
              this.props.messages.increment
            )
          )
        ),
        React.createElement(
          Btn,
          {
            tabIndex: '-1',
            className: cx({ 'rw-state-active': this.state.active === directions.DOWN }),
            onMouseDown: this._mouseDown.bind(null, directions.DOWN),
            onMouseUp: this._mouseUp.bind(null, directions.DOWN),
            onClick: this._focus.bind(null, true),
            disabled: val === this.props.min || this.props.disabled,
            'aria-disabled': val === this.props.min || this.props.disabled },
          React.createElement(
            'i',
            { className: 'rw-i rw-i-caret-down' },
            React.createElement(
              'span',
              { className: 'rw-sr' },
              this.props.messages.decrement
            )
          )
        )
      ),
      React.createElement(Input, {
        ref: 'input',
        tabIndex: props.tabIndex,
        value: val,
        editing: this.state.focused,
        format: this.props.format,
        parse: this.props.parse,
        name: this.props.name,
        role: 'spinbutton',
        min: this.props.min,
        'aria-valuenow': val,
        'aria-valuemin': isFinite(this.props.min) ? this.props.min : null,
        'aria-valuemax': isFinite(this.props.max) ? this.props.max : null,
        'aria-disabled': this.props.disabled,
        'aria-readonly': this.props.readonly,
        disabled: this.props.disabled,
        readOnly: this.props.readOnly,
        onChange: this.change,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onKeyUp: onKeyUp })
    );
  },

  //allow for styling, focus stealing keeping me from the normal what have you
  _mouseDown: _.ifNotDisabled(function (dir) {
    var method = dir === directions.UP ? this.increment : this.decrement;

    this.setState({ active: dir });

    var val = method.call(this);

    if (!(dir === directions.UP && val === this.props.max || dir === directions.DOWN && val === this.props.min)) {
      if (!this._cancelRepeater) this._cancelRepeater = repeater(this._mouseDown.bind(null, dir));
    } else this._mouseUp();
  }),

  _mouseUp: _.ifNotDisabled(function () {
    this.setState({ active: false });
    this._cancelRepeater && this._cancelRepeater();
    this._cancelRepeater = null;
  }),

  _focus: _.ifNotDisabled(true, function (focused, e) {
    var _this = this;

    focused && compat.findDOMNode(this.refs.input).focus();

    this.setTimeout('focus', function () {
      if (focused !== _this.state.focused) {
        _this.notify(focused ? 'onFocus' : 'onBlur', e);
        _this.setState({ focused: focused });
      }
    }, 0);
  }),

  _keyDown: _.ifNotDisabled(function (e) {
    var key = e.key;

    if (key === 'End' && isFinite(this.props.max)) this.change(this.props.max);else if (key === 'Home' && isFinite(this.props.min)) this.change(this.props.min);else if (key === 'ArrowDown') {
      e.preventDefault();
      this.decrement();
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      this.increment();
    }
  }),

  increment: function increment() {
    return this.step(this.props.step);
  },

  decrement: function decrement() {
    return this.step(-this.props.step);
  },

  step: function step(amount) {
    var value = (this.props.value || 0) + amount;

    var decimals = this.props.precision != null ? this.props.precision : localizers.number.precision(format(this.props));

    this.change(decimals != null ? round(value, decimals) : value);

    return value;
  },

  change: function change(val) {
    val = this.constrainValue(val);

    if (this.props.value !== val) this.notify('onChange', val);
  },

  constrainValue: function constrainValue(value) {
    var max = this.props.max == null ? Infinity : this.props.max,
        min = this.props.min == null ? -Infinity : this.props.min;

    if (value == null || value === '') return null;

    return Math.max(Math.min(value, max), min);
  }

});

// thank you kendo ui core
// https://github.com/telerik/kendo-ui-core/blob/master/src/kendo.core.js#L1036
function round(value, precision) {
  precision = precision || 0;

  value = ('' + value).split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + precision : precision)));

  value = ('' + value).split('e');
  value = +(value[0] + 'e' + (value[1] ? +value[1] - precision : -precision));

  return value.toFixed(precision);
}

module.exports = createUncontrolledWidget(NumberPicker, { value: 'onChange' });

module.exports.BaseNumberPicker = NumberPicker;
},{"./NumberInput":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/NumberInput.js","./WidgetButton":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js","./mixins/PureRenderMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/constants":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/constants.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./util/repeater":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/repeater.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Popup.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    css = require('dom-helpers/style'),
    getHeight = require('dom-helpers/query/height'),
    config = require('./util/configuration'),
    cn = require('classnames'),
    compat = require('./util/compat');

var transform = config.animate.transform;

function properties(prop, value) {
  var _ref, _ref2;

  var TRANSLATION_MAP = config.animate.TRANSLATION_MAP;

  if (TRANSLATION_MAP && TRANSLATION_MAP[prop]) return (_ref = {}, _ref[transform] = '' + TRANSLATION_MAP[prop] + '(' + value + ')', _ref);

  return (_ref2 = {}, _ref2[prop] = value, _ref2);
}

var PopupContent = React.createClass({
  displayName: 'PopupContent',

  render: function render() {
    var child = this.props.children;

    if (!child) return React.createElement('span', { className: 'rw-popup rw-widget' });

    child = React.Children.only(this.props.children);

    return compat.cloneElement(child, {
      className: cn(child.props.className, 'rw-popup rw-widget')
    });
  }
});

module.exports = React.createClass({

  displayName: 'Popup',

  propTypes: {
    open: React.PropTypes.bool,
    dropUp: React.PropTypes.bool,
    duration: React.PropTypes.number,

    onRequestClose: React.PropTypes.func.isRequired,
    onClosing: React.PropTypes.func,
    onOpening: React.PropTypes.func,
    onClose: React.PropTypes.func,
    onOpen: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {};
  },

  getDefaultProps: function getDefaultProps() {
    return {
      duration: 200,
      open: false,
      onClosing: function onClosing() {},
      onOpening: function onOpening() {},
      onClose: function onClose() {},
      onOpen: function onOpen() {}
    };
  },

  // componentDidMount(){
  //   !this.props.open && this.close(0)
  // },
  componentWillMount: function componentWillMount() {
    !this.props.open && (this._initialPosition = true);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      contentChanged: childKey(nextProps.children) !== childKey(this.props.children)
    });
  },

  componentDidUpdate: function componentDidUpdate(pvProps) {
    var closing = pvProps.open && !this.props.open,
        opening = !pvProps.open && this.props.open,
        open = this.props.open;

    if (opening) this.open();else if (closing) this.close();else if (open) this.height();
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var open = _props.open;
    var dropUp = _props.dropUp;
    var props = babelHelpers.objectWithoutProperties(_props, ['className', 'open', 'dropUp']);
    var display = open ? 'block' : void 0;

    if (this._initialPosition) {
      display = 'none';
    }

    return React.createElement(
      'div',
      babelHelpers._extends({}, props, {
        style: babelHelpers._extends({
          display: display,
          height: this.state.height }, props.style),
        className: cn(className, 'rw-popup-container', { 'rw-dropup': dropUp })
      }),
      React.createElement(
        PopupContent,
        { ref: 'content' },
        this.props.children
      )
    );
  },

  reset: function reset() {
    var container = compat.findDOMNode(this),
        content = compat.findDOMNode(this.refs.content),
        style = { display: 'block', overflow: 'hidden' };

    css(container, style);
    this.height();
    css(content, properties('top', this.props.dropUp ? '100%' : '-100%'));
  },

  height: function height() {
    var el = compat.findDOMNode(this),
        content = compat.findDOMNode(this.refs.content),
        margin = parseInt(css(content, 'margin-top'), 10) + parseInt(css(content, 'margin-bottom'), 10);

    var height = getHeight(content) + (isNaN(margin) ? 0 : margin);

    if (this.state.height !== height) {
      el.style.height = height + 'px';
      this.setState({ height: height });
    }
  },

  open: function open() {
    var self = this,
        anim = compat.findDOMNode(this),
        el = compat.findDOMNode(this.refs.content);

    this.ORGINAL_POSITION = css(el, 'position');
    this._isOpening = true;

    if (this._initialPosition) {
      this._initialPosition = false;
      this.reset();
    } else this.height();

    this.props.onOpening();

    anim.className += ' rw-popup-animating';
    el.style.position = 'absolute';

    config.animate(el, { top: 0 }, self.props.duration, 'ease', function () {
      if (!self._isOpening) return;

      anim.className = anim.className.replace(/ ?rw-popup-animating/g, '');

      el.style.position = self.ORGINAL_POSITION;
      anim.style.overflow = 'visible';
      self.ORGINAL_POSITION = null;

      self.props.onOpen();
    });
  },

  close: function close(dur) {
    var self = this,
        el = compat.findDOMNode(this.refs.content),
        anim = compat.findDOMNode(this);

    this.ORGINAL_POSITION = css(el, 'position');

    this._isOpening = false;
    this.height();
    this.props.onClosing();

    anim.style.overflow = 'hidden';
    anim.className += ' rw-popup-animating';
    el.style.position = 'absolute';

    config.animate(el, { top: this.props.dropUp ? '100%' : '-100%' }, dur === undefined ? this.props.duration : dur, 'ease', function () {
      if (self._isOpening) return;

      el.style.position = self.ORGINAL_POSITION;
      anim.className = anim.className.replace(/ ?rw-popup-animating/g, '');

      anim.style.display = 'none';
      self.ORGINAL_POSITION = null;
      self.props.onClose();
    });
  }

});

function childKey(children) {
  var nextChildMapping = React.Children.map(children, function (c) {
    return c;
  });
  for (var key in nextChildMapping) return key;
}
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","dom-helpers/query/height":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/height.js","dom-helpers/style":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ReplaceTransitionGroup.js":[function(require,module,exports){
/**
 * A streamlined version of TransitionGroup built for managing at most two active children
 * also provides additional hooks for animation start/end
 * https://github.com/facebook/react/blob/master/src/addons/transitions/ReactTransitionGroup.js
 * relevent code is licensed accordingly
 */
'use strict';

var React = require('react'),
    css = require('dom-helpers/style'),
    height = require('dom-helpers/query/height'),
    width = require('dom-helpers/query/width'),
    compat = require('./util/compat'),
    _ = require('./util/_');

module.exports = React.createClass({

  displayName: 'ReplaceTransitionGroup',

  propTypes: {
    component: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string]),
    childFactory: React.PropTypes.func,

    onAnimating: React.PropTypes.func,
    onAnimate: React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'span',
      childFactory: function childFactory(a) {
        return a;
      },

      onAnimating: _.noop,
      onAnimate: _.noop
    };
  },

  getInitialState: function getInitialState() {
    return {
      children: _.splat(this.props.children)
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var nextChild = getChild(nextProps.children),
        stack = this.state.children.slice(),
        next = stack[1],
        last = stack[0];

    var isLastChild = last && key(last) === key(nextChild),
        isNextChild = next && key(next) === key(nextChild);

    //no children
    if (!last) {
      stack.push(nextChild);
      this.entering = nextChild;
    } else if (last && !next && !isLastChild) {
      //new child
      stack.push(nextChild);
      this.leaving = last;
      this.entering = nextChild;
    } else if (last && next && !isLastChild && !isNextChild) {
      // the child is not the current one, exit the current one, add the new one
      //  - shift the stack down
      stack.shift();
      stack.push(nextChild);
      this.leaving = next;
      this.entering = nextChild;
    }
    //new child that just needs to be re-rendered
    else if (isLastChild) stack.splice(0, 1, nextChild);else if (isNextChild) stack.splice(1, 1, nextChild);

    if (this.state.children[0] !== stack[0] || this.state.children[1] !== stack[1]) this.setState({ children: stack });
  },

  componentWillMount: function componentWillMount() {
    this.animatingKeys = {};
    this.leaving = null;
    this.entering = null;
  },

  componentDidUpdate: function componentDidUpdate() {
    var entering = this.entering,
        leaving = this.leaving,
        first = this.refs[key(entering) || key(leaving)],
        node = compat.findDOMNode(this),
        el = first && compat.findDOMNode(first);

    if (el) css(node, {
      overflow: 'hidden',
      height: height(el) + 'px',
      width: width(el) + 'px'
    });

    this.props.onAnimating();

    this.entering = null;
    this.leaving = null;

    if (entering) this.performEnter(key(entering));
    if (leaving) this.performLeave(key(leaving));
  },

  performEnter: function performEnter(key) {
    var component = this.refs[key];

    if (!component) return;

    this.animatingKeys[key] = true;

    if (component.componentWillEnter) component.componentWillEnter(this._handleDoneEntering.bind(this, key));else this._handleDoneEntering(key);
  },

  _tryFinish: function _tryFinish() {

    if (this.isTransitioning()) return;

    if (this.isMounted()) css(compat.findDOMNode(this), { overflow: 'visible', height: '', width: '' });

    this.props.onAnimate();
  },

  _handleDoneEntering: function _handleDoneEntering(enterkey) {
    var component = this.refs[enterkey];

    if (component && component.componentDidEnter) component.componentDidEnter();

    delete this.animatingKeys[enterkey];

    if (key(this.props.children) !== enterkey) this.performLeave(enterkey); // This was removed before it had fully entered. Remove it.

    this._tryFinish();
  },

  isTransitioning: function isTransitioning() {
    return Object.keys(this.animatingKeys).length !== 0;
  },

  performLeave: function performLeave(key) {
    var component = this.refs[key];

    if (!component) return;

    this.animatingKeys[key] = true;

    if (component.componentWillLeave) component.componentWillLeave(this._handleDoneLeaving.bind(this, key));else this._handleDoneLeaving(key);
  },

  _handleDoneLeaving: function _handleDoneLeaving(leavekey) {
    var component = this.refs[leavekey];

    if (component && component.componentDidLeave) component.componentDidLeave();

    delete this.animatingKeys[leavekey];

    if (key(this.props.children) === leavekey) this.performEnter(leavekey);else if (this.isMounted()) this.setState({
      children: this.state.children.filter(function (c) {
        return key(c) !== leavekey;
      })
    });

    this._tryFinish();
  },

  render: function render() {
    var _this = this;

    var Component = this.props.component;
    return React.createElement(
      Component,
      this.props,
      this.state.children.map(function (c) {
        return _this.props.childFactory(c, key(c));
      })
    );
  }
});

function getChild(children) {
  return React.Children.only(children);
}

function key(child) {
  return child && child.key;
}
// This entered again before it fully left. Add it again.
},{"./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","dom-helpers/query/height":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/height.js","dom-helpers/query/width":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/width.js","dom-helpers/style":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/SelectList.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = babelHelpers.interopRequireDefault(_uncontrollable);

var _utilCompat = require('./util/compat');

var _utilCompat2 = babelHelpers.interopRequireDefault(_utilCompat);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var _List = require('./List');

var _List2 = babelHelpers.interopRequireDefault(_List);

var _ListGroupable = require('./ListGroupable');

var _ListGroupable2 = babelHelpers.interopRequireDefault(_ListGroupable);

var _utilValidateListInterface = require('./util/validateListInterface');

var _utilValidateListInterface2 = babelHelpers.interopRequireDefault(_utilValidateListInterface);

var _domHelpersUtilScrollTo = require('dom-helpers/util/scrollTo');

var _domHelpersUtilScrollTo2 = babelHelpers.interopRequireDefault(_domHelpersUtilScrollTo);

var omit = _util_2['default'].omit;
var pick = _util_2['default'].pick;
var result = _util_2['default'].result;

var propTypes = {

  data: _react2['default'].PropTypes.array,
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.any, _react2['default'].PropTypes.array]),
  onChange: _react2['default'].PropTypes.func,
  onMove: _react2['default'].PropTypes.func,

  multiple: _react2['default'].PropTypes.bool,

  itemComponent: _utilPropTypes2['default'].elementType,
  listComponent: _utilPropTypes2['default'].elementType,

  valueField: _react2['default'].PropTypes.string,
  textField: _utilPropTypes2['default'].accessor,

  busy: _react2['default'].PropTypes.bool,

  filter: _react2['default'].PropTypes.string,
  delay: _react2['default'].PropTypes.number,

  disabled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['disabled'])]),

  readOnly: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.array, _react2['default'].PropTypes.oneOf(['readonly'])]),

  messages: _react2['default'].PropTypes.shape({
    emptyList: _react2['default'].PropTypes.string
  })
};

var SelectList = _react2['default'].createClass({
  displayName: 'SelectList',

  propTypes: propTypes,

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/TimeoutMixin'), require('./mixins/DataHelpersMixin'), require('./mixins/RtlParentContextMixin'), require('./mixins/AriaDescendantMixin')()],

  getDefaultProps: function getDefaultProps() {
    return {
      delay: 250,
      value: [],
      data: [],
      ariaActiveDescendantKey: 'selectlist',
      messages: {
        emptyList: 'There are no items in this list'
      }
    };
  },

  getDefaultState: function getDefaultState(props) {
    var _this = this;

    var isRadio = !props.multiple,
        values = _util_2['default'].splat(props.value),
        first = isRadio && this._dataItem(props.data, values[0]);

    first = isRadio && first ? first : (this.state || {}).focusedItem || null;

    return {
      focusedItem: first,
      dataItems: !isRadio && values.map(function (item) {
        return _this._dataItem(props.data, item);
      })
    };
  },

  getInitialState: function getInitialState() {
    var state = this.getDefaultState(this.props);

    state.ListItem = getListItem(this);

    return state;
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    return this.setState(this.getDefaultState(nextProps));
  },

  componentDidMount: function componentDidMount() {
    (0, _utilValidateListInterface2['default'])(this.refs.list);
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var tabIndex = _props.tabIndex;
    var filter = _props.filter;
    var suggest = _props.suggest;
    var groupBy = _props.groupBy;
    var messages = _props.messages;
    var data = _props.data;
    var busy = _props.busy;
    var dropUp = _props.dropUp;
    var name = _props.name;
    var placeholder = _props.placeholder;
    var value = _props.value;
    var open = _props.open;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;
    var List = _props.listComponent;

    List = List || groupBy && _ListGroupable2['default'] || _List2['default'];

    var elementProps = omit(this.props, Object.keys(propTypes));
    var listProps = pick(this.props, Object.keys(_utilCompat2['default'].type(List).propTypes));

    var _state = this.state;
    var ListItem = _state.ListItem;
    var focusedItem = _state.focusedItem;
    var selectedItem = _state.selectedItem;
    var focused = _state.focused;

    var items = this._data(),
        listID = this._id('_listbox');

    focusedItem = focused && !this.isDisabled() && !this.isReadOnly() && focusedItem;

    return _react2['default'].createElement(
      'div',
      babelHelpers._extends({}, elementProps, {
        onKeyDown: this._maybeHandle(this._keyDown),
        onFocus: this._focus.bind(null, true),
        onBlur: this._focus.bind(null, false),
        role: 'radiogroup',
        'aria-busy': !!busy,
        'aria-disabled': this.isDisabled(),
        'aria-readonly': this.isReadOnly(),
        tabIndex: '-1',
        className: (0, _classnames2['default'])(className, 'rw-widget', 'rw-selectlist', {
          'rw-state-focus': focused,
          'rw-state-disabled': this.isDisabled(),
          'rw-state-readonly': this.isReadOnly(),
          'rw-rtl': this.isRtl(),
          'rw-loading-mask': busy
        })
      }),
      _react2['default'].createElement(List, babelHelpers._extends({}, listProps, {
        ref: 'list',
        id: listID,
        role: 'radiogroup',
        tabIndex: tabIndex || '0',
        data: items,
        focused: focusedItem,
        optionComponent: ListItem,
        itemComponent: this.props.itemComponent,
        onMove: this._scrollTo
      }))
    );
  },

  _scrollTo: function _scrollTo(selected, list) {
    var handler = this.props.onMove;

    if (handler) handler(selected, list);else {
      this._scrollCancel && this._scrollCancel();
      // default behavior is to scroll the whole page not just the widget
      this._scrollCancel = (0, _domHelpersUtilScrollTo2['default'])(selected);
    }
  },

  _keyDown: function _keyDown(e) {
    var self = this,
        key = e.key,
        multiple = !!this.props.multiple,
        list = this.refs.list,
        focusedItem = this.state.focusedItem;

    if (key === 'End') {
      e.preventDefault();

      if (multiple) this.setState({ focusedItem: move('prev', null) });else change(move('prev', null));
    } else if (key === 'Home') {
      e.preventDefault();

      if (multiple) this.setState({ focusedItem: move('next', null) });else change(move('next', null));
    } else if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      change(focusedItem);
    } else if (key === 'ArrowDown' || key === 'ArrowRight') {
      e.preventDefault();

      if (multiple) this.setState({ focusedItem: move('next', focusedItem) });else change(move('next', focusedItem));
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      e.preventDefault();

      if (multiple) this.setState({ focusedItem: move('prev', focusedItem) });else change(move('prev', focusedItem));
    } else if (this.props.multiple && e.keyCode === 65 && e.ctrlKey) {
      e.preventDefault();
      this._selectAll();
    } else this.search(String.fromCharCode(e.keyCode));

    function change(item) {
      if (item) {
        self._change(item, multiple ? !self._contains(item, self._values()) // toggle value
        : true);
      }
    }

    function move(dir, item) {
      var isDisabled = function isDisabled(item) {
        return self.isDisabledItem(item) || self.isReadOnlyItem(item);
      },
          stop = dir === 'next' ? list.last() : list.first(),
          next = list[dir](item);

      while (next !== stop && isDisabled(next)) next = list[dir](next);

      return isDisabled(next) ? item : next;
    }
  },

  _selectAll: function _selectAll() {
    var _this2 = this;

    var values = this.state.dataItems,
        disabled = this.props.disabled || this.props.readOnly,
        data = this._data(),
        blacklist;

    disabled = Array.isArray(disabled) ? disabled : [];
    //disabled values that are not selected
    blacklist = disabled.filter(function (v) {
      return !_this2._contains(v, values);
    });
    data = data.filter(function (v) {
      return !_this2._contains(v, blacklist);
    });

    if (data.length === values.length) {
      data = disabled.filter(function (v) {
        return _this2._contains(v, values);
      });
      data = data.map(function (v) {
        return _this2._dataItem(_this2._data(), v);
      });
    }

    this.notify('onChange', [data]);
  },

  _change: function _change(item, checked) {
    var multiple = !!this.props.multiple,
        blacklist = this.props.disabled || this.props.readOnly,
        values = this.state.dataItems;

    blacklist = Array.isArray(blacklist) ? blacklist : [];

    if (!multiple) return this.notify('onChange', checked ? item : null);

    values = checked ? values.concat(item) : values.filter(function (v) {
      return v !== item;
    });

    this.notify('onChange', [values || []]);
  },

  _focus: _util_2['default'].ifNotDisabled(true, function (focused, e) {
    var _this3 = this;

    if (focused) _utilCompat2['default'].findDOMNode(this.refs.list).focus();

    this.setTimeout('focus', function () {
      if (focused !== _this3.state.focused) {
        _this3.notify(focused ? 'onFocus' : 'onBlur', e);
        _this3.setState({ focused: focused });
      }
    });
  }),

  isDisabledItem: function isDisabledItem(item) {
    return this.isDisabled() || this._contains(item, this.props.disabled);
  },

  isReadOnlyItem: function isReadOnlyItem(item) {
    return this.isReadOnly() || this._contains(item, this.props.readOnly);
  },

  search: function search(character) {
    var _this4 = this;

    var word = ((this._searchTerm || '') + character).toLowerCase(),
        list = this.refs.list;

    this._searchTerm = word;

    this.setTimeout('search', function () {
      var focusedItem = list.next(_this4.state.focusedItem, word);

      _this4._searchTerm = '';

      if (focusedItem) _this4.setState({ focusedItem: focusedItem });
    }, this.props.delay);
  },

  _data: function _data() {
    return this.props.data;
  },

  _contains: function _contains(item, values) {
    return Array.isArray(values) ? values.some(this._valueMatcher.bind(null, item)) : this._valueMatcher(item, values);
  },

  _values: function _values() {
    return this.props.multiple ? this.state.dataItems : this.props.value;
  }

});

function getListItem(parent) {

  return _react2['default'].createClass({

    displayName: 'SelectItem',

    render: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var focused = _props2.focused;
      var selected = _props2.selected;
      var item = _props2.dataItem;
      var props = babelHelpers.objectWithoutProperties(_props2, ['children', 'focused', 'selected', 'dataItem']);
      var _parent$props = parent.props;
      var multiple = _parent$props.multiple;
      var _parent$props$name = _parent$props.name;
      var name = _parent$props$name === undefined ? parent._id('_name') : _parent$props$name;

      var checked = parent._contains(item, parent._values()),
          change = parent._change.bind(null, item),
          disabled = parent.isDisabledItem(item),
          readonly = parent.isReadOnlyItem(item),
          type = multiple ? 'checkbox' : 'radio';

      return _react2['default'].createElement(
        'li',
        babelHelpers._extends({}, props, {
          tabIndex: '-1',
          role: type,
          'aria-checked': !!checked,
          'aria-disabled': disabled || readonly,
          className: (0, _classnames2['default'])('rw-list-option', {
            'rw-state-focus': focused,
            'rw-state-selected': selected,
            'rw-state-disabled': disabled,
            'rw-state-readonly': readonly
          })
        }),
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            name: name,
            tabIndex: '-1',
            role: 'presentation',
            type: type,
            onChange: onChange,
            checked: checked,
            disabled: disabled || readonly
          }),
          children
        )
      );

      function onChange(e) {
        if (!disabled && !readonly) change(e.target.checked);
      }
    }
  });
}

var UncontrolledSelectList = (0, _uncontrollable2['default'])(SelectList, { value: 'onChange' });

UncontrolledSelectList.BaseSelectList = SelectList;

exports['default'] = UncontrolledSelectList;
module.exports = exports['default'];
},{"./List":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js","./ListGroupable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ListGroupable.js","./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","./mixins/RtlParentContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./util/validateListInterface":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/validateListInterface.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","dom-helpers/util/scrollTo":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/scrollTo.js","react":"react","uncontrollable":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/SlideTransition.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    ReplaceTransitionGroup = require('./ReplaceTransitionGroup'),
    compat = require('./util/compat'),
    css = require('dom-helpers/style'),
    getWidth = require('dom-helpers/query/width'),
    config = require('./util/configuration');

var SlideChildGroup = React.createClass({
  displayName: 'SlideChildGroup',

  propTypes: {
    direction: React.PropTypes.oneOf(['left', 'right']),
    duration: React.PropTypes.number
  },

  componentWillEnter: function componentWillEnter(done) {
    var _this = this;

    var node = compat.findDOMNode(this),
        width = getWidth(node),
        direction = this.props.direction;

    width = direction === 'left' ? width : -width;

    this.ORGINAL_POSITION = node.style.position;

    css(node, { position: 'absolute', left: width + 'px', top: 0 });

    config.animate(node, { left: 0 }, this.props.duration, function () {

      css(node, {
        position: _this.ORGINAL_POSITION,
        overflow: 'hidden'
      });

      _this.ORGINAL_POSITION = null;
      done && done();
    });
  },

  componentWillLeave: function componentWillLeave(done) {
    var _this2 = this;

    var node = compat.findDOMNode(this),
        width = getWidth(node),
        direction = this.props.direction;

    width = direction === 'left' ? -width : width;

    this.ORGINAL_POSITION = node.style.position;

    css(node, { position: 'absolute', top: 0, left: 0 });

    config.animate(node, { left: width + 'px' }, this.props.duration, function () {
      css(node, {
        position: _this2.ORGINAL_POSITION,
        overflow: 'hidden'
      });

      _this2.ORGINAL_POSITION = null;
      done && done();
    });
  },

  render: function render() {
    return React.Children.only(this.props.children);
  }

});

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    direction: React.PropTypes.oneOf(['left', 'right']),
    duration: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      direction: 'left',
      duration: 250
    };
  },

  _wrapChild: function _wrapChild(child, ref) {
    return React.createElement(
      SlideChildGroup,
      { key: child.key, ref: ref,
        direction: this.props.direction,
        duration: this.props.duration },
      child
    );
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var children = _props.children;
    var props = babelHelpers.objectWithoutProperties(_props, ['style', 'children']);

    style = babelHelpers._extends({}, style, { position: 'relative', overflow: 'hidden' });

    return React.createElement(
      ReplaceTransitionGroup,
      babelHelpers._extends({}, props, {
        ref: 'container',
        childFactory: this._wrapChild,
        style: style,
        component: 'div' }),
      children
    );
  },

  isTransitioning: function isTransitioning() {
    return this.isMounted() && this.refs.container.isTransitioning();
  }
});
},{"./ReplaceTransitionGroup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ReplaceTransitionGroup.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/compat":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","dom-helpers/query/width":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/width.js","dom-helpers/style":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/TimeList.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react'),
    dates = require('./util/dates'),
    List = require('./List'),
    localizers = require('./util/configuration').locale,
    CustomPropTypes = require('./util/propTypes');

var format = function format(props) {
  return props.format || localizers.date.formats.time;
};

module.exports = React.createClass({

  displayName: 'TimeList',

  propTypes: {
    value: React.PropTypes.instanceOf(Date),
    min: React.PropTypes.instanceOf(Date),
    max: React.PropTypes.instanceOf(Date),
    step: React.PropTypes.number,
    itemComponent: CustomPropTypes.elementType,
    format: CustomPropTypes.dateFormat,
    onSelect: React.PropTypes.func,
    preserveDate: React.PropTypes.bool,
    culture: React.PropTypes.string
  },

  mixins: [require('./mixins/TimeoutMixin')],

  getDefaultProps: function getDefaultProps() {
    return {
      step: 30,
      onSelect: function onSelect() {},
      min: new Date(1900, 0, 1),
      max: new Date(2099, 11, 31),
      preserveDate: true,
      delay: 300
    };
  },

  getInitialState: function getInitialState() {
    var data = this._dates(this.props),
        focusedItem = this._closestDate(data, this.props.value);

    return {
      focusedItem: focusedItem || data[0],
      dates: data
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var data = this._dates(nextProps),
        focusedItem = this._closestDate(data, nextProps.value),
        valChanged = !dates.eq(nextProps.value, this.props.value, 'minutes'),
        minChanged = !dates.eq(nextProps.min, this.props.min, 'minutes'),
        maxChanged = !dates.eq(nextProps.max, this.props.max, 'minutes');

    if (valChanged || minChanged || maxChanged) {
      this.setState({
        focusedItem: focusedItem || data[0],
        dates: data
      });
    }
  },

  render: function render() {
    var _props = this.props;
    var min = _props.min;
    var max = _props.max;
    var value = _props.value;
    var step = _props.step;
    var props = babelHelpers.objectWithoutProperties(_props, ['min', 'max', 'value', 'step']);

    var times = this.state.dates,
        date = this._closestDate(times, value);

    return React.createElement(List, babelHelpers._extends({}, props, {
      ref: 'list',
      data: times,
      textField: 'label',
      valueField: 'date',
      selected: date,
      focused: this.state.focusedItem
    }));
  },

  _closestDate: function _closestDate(times, date) {
    var roundTo = 1000 * 60 * this.props.step,
        inst = null,
        label;

    if (!date) return null;

    date = new Date(Math.floor(date.getTime() / roundTo) * roundTo);
    label = dates.format(date, this.props.format, this.props.culture);

    times.some(function (time) {
      if (time.label === label) return inst = time;
    });

    return inst;
  },

  _data: function _data() {
    return this.state.dates;
  },

  _dates: function _dates(props) {
    var times = [],
        i = 0,
        values = this._dateValues(props),
        start = values.min,
        startDay = dates.date(start);

    while (dates.date(start) === startDay && dates.lte(start, values.max)) {
      i++;
      times.push({ date: start, label: localizers.date.format(start, format(props), props.culture) });
      start = dates.add(start, props.step || 30, 'minutes');
    }
    return times;
  },

  _dateValues: function _dateValues(props) {
    var value = props.value || dates.today(),
        useDate = props.preserveDate,
        min = props.min,
        max = props.max,
        start,
        end;

    //compare just the time regradless of whether they fall on the same day
    if (!useDate) {
      start = dates.startOf(dates.merge(new Date(), min), 'minutes');
      end = dates.startOf(dates.merge(new Date(), max), 'minutes');

      if (dates.lte(end, start) && dates.gt(max, min, 'day')) end = dates.tomorrow();

      return {
        min: start,
        max: end
      };
    }

    start = dates.today();
    end = dates.tomorrow();
    //date parts are equal
    return {
      min: dates.eq(value, min, 'day') ? dates.merge(start, min) : start,
      max: dates.eq(value, max, 'day') ? dates.merge(start, max) : end
    };
  },

  _keyDown: function _keyDown(e) {
    var _this = this;

    var key = e.key,
        character = String.fromCharCode(e.keyCode),
        focusedItem = this.state.focusedItem,
        list = this.refs.list;

    if (key === 'End') this.setState({ focusedItem: list.last() });else if (key === 'Home') this.setState({ focusedItem: list.first() });else if (key === 'Enter') this.props.onSelect(focusedItem);else if (key === 'ArrowDown') {
      e.preventDefault();
      this.setState({ focusedItem: list.next(focusedItem) });
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      this.setState({ focusedItem: list.prev(focusedItem) });
    } else {
      e.preventDefault();

      this.search(character, function (item) {
        _this.setState({ focusedItem: item });
      });
    }
  },

  scrollTo: function scrollTo() {
    this.refs.list.move && this.refs.list.move();
  },

  search: function search(character, cb) {
    var _this2 = this;

    var word = ((this._searchTerm || '') + character).toLowerCase();

    this._searchTerm = word;

    this.setTimeout('search', function () {
      var list = _this2.refs.list,
          item = list.next(_this2.state.focusedItem, word);

      _this2._searchTerm = '';
      if (item) cb(item);
    }, this.props.delay);
  }

});
},{"./List":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/List.js","./mixins/TimeoutMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/WidgetButton.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

var React = require('react');
var cn = require('classnames');
module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var props = babelHelpers.objectWithoutProperties(_props, ['className', 'children']);

    return React.createElement(
      'button',
      babelHelpers._extends({}, props, { type: 'button', className: cn(className, 'rw-btn') }),
      children
    );
  }
});
},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Year.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utilDates = require('./util/dates');

var _utilDates2 = babelHelpers.interopRequireDefault(_utilDates);

var _utilConfiguration = require('./util/configuration');

var _utilConfiguration2 = babelHelpers.interopRequireDefault(_utilConfiguration);

var _util_ = require('./util/_');

var _util_2 = babelHelpers.interopRequireDefault(_util_);

var _utilPropTypes = require('./util/propTypes');

var _utilPropTypes2 = babelHelpers.interopRequireDefault(_utilPropTypes);

var localizers = _utilConfiguration2['default'].locale;
var format = function format(props) {
  return props.monthFormat || localizers.date.formats.month;
};

var propTypes = {
  optionID: _react2['default'].PropTypes.func,
  culture: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.instanceOf(Date),
  focused: _react2['default'].PropTypes.instanceOf(Date),
  min: _react2['default'].PropTypes.instanceOf(Date),
  max: _react2['default'].PropTypes.instanceOf(Date),
  onChange: _react2['default'].PropTypes.func.isRequired,

  monthFormat: _utilPropTypes2['default'].dateFormat
};

var isEqual = function isEqual(dateA, dateB) {
  return _utilDates2['default'].eq(dateA, dateB, 'month');
};
var optionId = function optionId(id, date) {
  return '' + id + '__year_' + _utilDates2['default'].year(date) + '-' + _utilDates2['default'].month(date);
};

var YearView = _react2['default'].createClass({

  displayName: 'YearView',

  mixins: [require('./mixins/WidgetMixin'), require('./mixins/RtlChildContextMixin'), require('./mixins/AriaDescendantMixin')()],

  propTypes: propTypes,

  componentDidUpdate: function componentDidUpdate() {
    var activeId = optionId(this._id(), this.props.focused);
    this.ariaActiveDescendant(activeId);
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var focused = _props.focused;
    var months = _utilDates2['default'].monthsInYear(_utilDates2['default'].year(focused));
    var rows = _util_2['default'].chunk(months, 4);

    var elementProps = _util_2['default'].omit(this.props, Object.keys(propTypes));

    return _react2['default'].createElement(
      'table',
      babelHelpers._extends({}, elementProps, {
        role: 'grid',
        className: (0, _classnames2['default'])(className, 'rw-nav-view')
      }),
      _react2['default'].createElement(
        'tbody',
        null,
        rows.map(this._row)
      )
    );
  },

  _row: function _row(row, rowIdx) {
    var _this = this;

    var _props2 = this.props;
    var focused = _props2.focused;
    var selected = _props2.selected;
    var disabled = _props2.disabled;
    var onChange = _props2.onChange;
    var value = _props2.value;
    var today = _props2.today;
    var culture = _props2.culture;
    var min = _props2.min;
    var max = _props2.max;
    var Day = _props2.dayComponent;
    var id = this._id();
    var labelFormat = localizers.date.formats.header;

    return _react2['default'].createElement(
      'tr',
      { key: rowIdx, role: 'row' },
      row.map(function (date, colIdx) {
        var isFocused = isEqual(date, focused),
            isSelected = isEqual(date, value),
            currentMonth = isEqual(date, today),
            label = localizers.date.format(date, labelFormat, culture);

        var currentID = optionId(id, date);

        return _utilDates2['default'].inRange(date, min, max, 'month') ? _react2['default'].createElement(
          'td',
          {
            key: colIdx,
            role: 'gridcell',
            id: currentID,
            title: label,
            'aria-selected': isSelected,
            'aria-readonly': disabled,
            'aria-label': label
          },
          _react2['default'].createElement(
            'span',
            {
              'aria-labelledby': currentID,
              onClick: onChange.bind(null, date),
              className: (0, _classnames2['default'])('rw-btn', {
                'rw-state-focus': isFocused,
                'rw-state-selected': isSelected,
                'rw-now': currentMonth
              })
            },
            localizers.date.format(date, format(_this.props), culture)
          )
        ) : _react2['default'].createElement(
          'td',
          { key: colIdx, className: 'rw-empty-cell', role: 'presentation' },
          ' '
        );
      })
    );
  }

});

exports['default'] = YearView;
module.exports = exports['default'];
},{"./mixins/AriaDescendantMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js","./mixins/RtlChildContextMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js","./mixins/WidgetMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js","./util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/dates":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js","./util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","classnames":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/configure.js":[function(require,module,exports){
'use strict';

var warning = require('react/lib/warning');
var configuration = require('./util/configuration');

var _require = require('./util/localizers');

var NumberLocalizer = _require.NumberLocalizer;
var DateLocalizer = _require.DateLocalizer;

var _require2 = require('./globalize-localizers');

var globalizeNumberLocalizer = _require2.globalizeNumberLocalizer;
var globalizeDateLocalizer = _require2.globalizeDateLocalizer;

module.exports = {

  setGlobalizeInstance: depreciateMethod(function (globalize) {
    configuration.locale.date = globalizeDateLocalizer(globalize);
    configuration.locale.number = globalizeNumberLocalizer(globalize);
  }),

  setAnimate: function setAnimate(animatefn) {
    configuration.animate = animatefn;
  },

  setDateLocalizer: function setDateLocalizer(spec) {
    configuration.locale.date = new DateLocalizer(spec);
  },

  setNumberLocalizer: function setNumberLocalizer(spec) {
    configuration.locale.number = new NumberLocalizer(spec);
  }
};

function depreciateMethod(fn) {
  return function () {
    warning(false, 'setGlobalizeInstance() is depreciated. use setDateLocalizer() and setNumberLocalizer() with the Globalize localizers. ' + ' TODO DOC LINK');

    return fn.apply(this, arguments);
  };
}
},{"./globalize-localizers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/globalize-localizers.js","./util/configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./util/localizers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/localizers.js","react/lib/warning":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/warning.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/globalize-localizers.js":[function(require,module,exports){
'use strict';

var _require = require('./util/localizers');

var NumberLocalizer = _require.NumberLocalizer;
var DateLocalizer = _require.DateLocalizer;

var dates = require('date-arithmetic');

function globalizeDateLocalizer(globalize) {
  var shortNames = Object.create(null);

  function getCulture(culture) {
    return culture ? (localizer.globalize || globalize).findClosestCulture(culture) : (localizer.globalize || globalize).culture();
  }

  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }

  function shortDay(dayOfTheWeek) {
    var culture = getCulture(arguments[1]),
        name = culture.name,
        start = firstOfWeek(culture),
        days = function days() {
      var days = culture.calendar.days.namesShort.slice();
      return start === 0 ? days : days.concat(days.splice(0, start));
    };

    var names = shortNames[name] || (shortNames[name] = days());

    return names[dayOfTheWeek];
  }

  var localizer = new DateLocalizer({

    formats: {
      date: 'd',
      time: 't',
      'default': 'f',
      header: 'MMMM yyyy',
      footer: 'D',
      weekday: shortDay,
      dayOfMonth: 'dd',
      month: 'MMM',
      year: 'yyyy',

      decade: function decade(dt, culture, l) {
        return '' + l.format(dt, l.formats.year, culture) + ' - ' + l.format(dates.endOf(dt, 'decade'), l.formats.year, culture);
      },

      century: function century(dt, culture, l) {
        return '' + l.format(dt, l.formats.year, culture) + ' - ' + l.format(dates.endOf(dt, 'century'), l.formats.year, culture);
      }
    },

    firstOfWeek: firstOfWeek,

    parse: function parse(value, format, culture) {
      return (this.globalize || globalize).parseDate(value, format, culture);
    },

    format: function format(value, _format, culture) {
      return (this.globalize || globalize).format(value, _format, culture);
    }
  });

  // Back-compat cruft, expose the globalize instance so setGlobalizeInstance can mutate it after initialization
  // this works b/c there is no need to change the default prop values
  localizer.globalize = globalize;
  return localizer;
}

function globalizeNumberLocalizer(globalize) {

  function getCulture(culture) {
    return culture ? (localizer.globalize || globalize).findClosestCulture(culture) : (localizer.globalize || globalize).culture();
  }

  var localizer = new NumberLocalizer({

    formats: {
      'default': 'D'
    },

    parse: function parse(value, culture) {
      return (this.globalize || globalize).parseFloat(value, 10, culture);
    },

    format: function format(value, _format2, culture) {
      return (this.globalize || globalize).format(value, _format2, culture);
    },

    precision: function precision(format, _culture) {
      var culture = getCulture(_culture),
          numFormat = culture.numberFormat;

      if (typeof format === 'string') {
        if (format.length > 1) return parseFloat(format.substr(1));

        if (format.indexOf('p') !== -1) numFormat = numFormat.percent;
        if (format.indexOf('c') !== -1) numFormat = numFormat.curency;

        return numFormat.decimals || null;
      }

      return null;
    }
  });

  // see point above
  localizer.globalize = globalize;
  return localizer;
}

module.exports = {
  globalizeNumberLocalizer: globalizeNumberLocalizer, globalizeDateLocalizer: globalizeDateLocalizer
};
},{"./util/localizers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/localizers.js","date-arithmetic":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/date-arithmetic/index.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/index.js":[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV !== 'production') {
  [Array.prototype.some, Array.prototype.filter, Array.prototype.reduce].forEach(function (method) {
    if (!method) throw new Error('One or more ES5 features is not available to ReactWidgets: http://jquense.github.io/react-widgets/docs/#/getting-started/browser');
  });
}

module.exports = {

  DropdownList: require('./DropdownList'),
  Combobox: require('./Combobox'),

  Calendar: require('./Calendar'),
  DateTimePicker: require('./DateTimePicker'),

  NumberPicker: require('./NumberPicker'),

  Multiselect: require('./Multiselect'),
  SelectList: require('./SelectList'),

  configure: require('./configure'),

  utils: {
    ReplaceTransitionGroup: require('./ReplaceTransitionGroup'),
    SlideTransition: require('./SlideTransition')
  }
};
}).call(this,require('_process'))

},{"./Calendar":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Calendar.js","./Combobox":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Combobox.js","./DateTimePicker":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DateTimePicker.js","./DropdownList":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/DropdownList.js","./Multiselect":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/Multiselect.js","./NumberPicker":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/NumberPicker.js","./ReplaceTransitionGroup":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/ReplaceTransitionGroup.js","./SelectList":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/SelectList.js","./SlideTransition":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/SlideTransition.js","./configure":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/configure.js","_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/AriaDescendantMixin.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('../util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var shape = _react2['default'].PropTypes.shape({
  //setActive: React.PropTypes.func,
  reconcile: _react2['default'].PropTypes.func
});

function defaultReconcile(key, id) {
  return id;
}

function flushAriaToNode(id, nodeOrComponent, ctx) {
  var node = typeof nodeOrComponent === 'function' ? nodeOrComponent(ctx) : typeof nodeOrComponent === 'string' ? ctx.refs[nodeOrComponent] : ctx;

  if (node) {
    //console.log('flushing!', node.constructor.displayName)
    if (id) _react2['default'].findDOMNode(node).setAttribute('aria-activedescendant', id);else _react2['default'].findDOMNode(node).removeAttribute('aria-activedescendant');
  }
}

exports['default'] = function (nodeOrComponent) {
  var reconcileChildren = arguments[1] === undefined ? defaultReconcile : arguments[1];

  return {
    propTypes: {
      ariaActiveDescendantKey: _react2['default'].PropTypes.string.isRequired
    },

    contextTypes: {
      activeDescendants: shape
    },

    childContextTypes: {
      activeDescendants: shape
    },

    ariaActiveDescendant: function ariaActiveDescendant(id) {
      var key = arguments[1] === undefined ? this.props.ariaActiveDescendantKey : arguments[1];
      var activeDescendants = this.context.activeDescendants;

      var current = this.__ariaActiveDescendantId;

      if (id === undefined) return current;

      id = reconcileChildren.call(this, key, id);

      if (id === undefined) id = current;else {
        this.__ariaActiveDescendantId = id;
        flushAriaToNode(id, nodeOrComponent, this);
      }

      activeDescendants && activeDescendants.reconcile(key, id);
    },

    getChildContext: function getChildContext() {
      var _this = this;

      return this._context || (this._context = {
        activeDescendants: {
          reconcile: function reconcile(key, id) {
            return _this.ariaActiveDescendant(id, key);
          }
        }
      });
    }
  };
};

module.exports = exports['default'];
},{"../util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataFilterMixin.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    filters = require('../util/filter'),
    CustomPropTypes = require('../util/propTypes'),
    helper = require('./DataHelpersMixin');

var dflt = function dflt(f) {
  return f === true ? 'startsWith' : f ? f : 'eq';
};

module.exports = {

  propTypes: {
    data: React.PropTypes.array,
    value: React.PropTypes.any,
    filter: CustomPropTypes.filter,
    caseSensitive: React.PropTypes.bool,
    minLength: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      caseSensitive: false,
      minLength: 1
    };
  },

  filterIndexOf: function filterIndexOf(items, searchTerm) {
    var idx = -1,
        matches = typeof this.props.filter === 'function' ? this.props.filter : getFilter(filters[dflt(this.props.filter)], searchTerm, this);

    if (!searchTerm || !searchTerm.trim() || this.props.filter && searchTerm.length < (this.props.minLength || 1)) return -1;

    items.every(function (item, i) {
      if (matches(item, searchTerm, i)) return (idx = i, false);

      return true;
    });

    return idx;
  },

  filter: function filter(items, searchTerm) {
    var matches = typeof this.props.filter === 'string' ? getFilter(filters[this.props.filter], searchTerm, this) : this.props.filter;

    if (!matches || !searchTerm || !searchTerm.trim() || searchTerm.length < (this.props.minLength || 1)) return items;

    return items.filter(function (item, idx) {
      return matches(item, searchTerm, idx);
    });
  }
};

function getFilter(matcher, searchTerm, ctx) {
  searchTerm = !ctx.props.caseSensitive ? searchTerm.toLowerCase() : searchTerm;

  return function (item) {
    var val = helper._dataText.call(ctx, item);

    if (!ctx.props.caseSensitive) val = val.toLowerCase();

    return matcher(val, searchTerm);
  };
}
},{"../util/filter":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/filter.js","../util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","./DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js":[function(require,module,exports){
'use strict';
var React = require('react');
var propTypes = require('../util/propTypes');

var _require = require('../util/_');

var has = _require.has;
var isShallowEqual = _require.isShallowEqual;

function accessor(data, field) {
  var value = data;

  if (typeof field === 'function') value = field(data);else if (data == null) value = data;else if (typeof field === 'string' && typeof data === 'object' && field in data) value = data[field];

  return value;
}

module.exports = {

  propTypes: {
    valueField: React.PropTypes.string,
    textField: propTypes.accessor
  },

  _dataValue: function _dataValue(item) {
    var field = this.props.valueField;

    return field && item && has(item, field) ? item[field] : item;
  },

  _dataText: function _dataText(item) {
    var field = this.props.textField,
        value = accessor(item, field);

    return value == null ? '' : value + '';
  },

  _dataIndexOf: function _dataIndexOf(data, item) {
    var _this = this;

    var idx = -1,
        len = data.length,
        finder = function finder(datum) {
      return _this._valueMatcher(item, datum);
    };

    while (++idx < len) if (finder(data[idx])) return idx;

    return -1;
  },

  _valueMatcher: function _valueMatcher(a, b) {
    return isShallowEqual(this._dataValue(a), this._dataValue(b));
  },

  _dataItem: function _dataItem(data, item) {
    var first = data[0],
        field = this.props.valueField,
        idx;

    // make an attempt to see if we were passed in dataItem vs just a valueField value
    // either an object with the right prop, or a primitive
    // { valueField: 5 } || "hello" [ "hello" ]
    if (has(item, field) || typeof first === typeof val) return item;

    idx = this._dataIndexOf(data, this._dataValue(item));

    if (idx !== -1) return data[idx];

    return item;
  }
};
},{"../util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","../util/propTypes":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/ListMovementMixin.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    filter = require('../util/filter'),
    helper = require('./DataHelpersMixin');

module.exports = {

  propTypes: {
    textField: React.PropTypes.string
  },

  first: function first() {
    return this._data()[0];
  },

  last: function last() {
    var data = this._data();
    return data[data.length - 1];
  },

  prev: function prev(item, word) {
    var data = this._data(),
        idx = data.indexOf(item);

    if (idx === -1) idx = data.length;

    return word ? findPrevInstance(this, data, word, idx) : --idx < 0 ? data[0] : data[idx];
  },

  next: function next(item, word) {
    var data = this._data(),
        idx = data.indexOf(item);

    return word ? findNextInstance(this, data, word, idx) : ++idx === data.length ? data[data.length - 1] : data[idx];
  }

};

function findNextInstance(ctx, data, word, startIndex) {
  var matches = filter.startsWith,
      idx = -1,
      len = data.length,
      foundStart,
      itemText;

  word = word.toLowerCase();

  while (++idx < len) {
    foundStart = foundStart || idx > startIndex;
    itemText = foundStart && helper._dataText.call(ctx, data[idx]).toLowerCase();

    if (foundStart && matches(itemText, word)) return data[idx];
  }
}

function findPrevInstance(ctx, data, word, startIndex) {
  var matches = filter.startsWith,
      idx = data.length,
      foundStart,
      itemText;

  word = word.toLowerCase();

  while (--idx >= 0) {
    foundStart = foundStart || idx < startIndex;
    itemText = foundStart && helper._dataText.call(ctx, data[idx]).toLowerCase();

    if (foundStart && matches(itemText, word)) return data[idx];
  }
}
},{"../util/filter":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/filter.js","./DataHelpersMixin":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/DataHelpersMixin.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PopupScrollToMixin.js":[function(require,module,exports){
'use strict';
var scrollTo = require('dom-helpers/util/scrollTo');

module.exports = {

  _scrollTo: function _scrollTo(selected, list, focused) {
    var state = this._scrollState || (this._scrollState = {}),
        handler = this.props.onMove,
        lastVisible = state.visible,
        lastItem = state.focused,
        shown,
        changed;

    state.visible = !(!list.offsetWidth || !list.offsetHeight);
    state.focused = focused;

    changed = lastItem !== focused;
    shown = state.visible && !lastVisible;

    if (shown || state.visible && changed) {
      if (handler) handler(selected, list, focused);else {
        state.scrollCancel && state.scrollCancel();
        state.scrollCancel = scrollTo(selected, list);
      }
    }
  }
};
},{"dom-helpers/util/scrollTo":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/scrollTo.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/PureRenderMixin.js":[function(require,module,exports){
'use strict';
var _ = require('../util/_');

//backport PureRenderEqual
module.exports = {

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !_.isShallowEqual(this.props, nextProps) || !_.isShallowEqual(this.state, nextState);
  }
};
},{"../util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlChildContextMixin.js":[function(require,module,exports){
'use strict';
var React = require('react');

module.exports = {

  contextTypes: {
    isRtl: React.PropTypes.bool
  },

  isRtl: function isRtl() {
    return !!this.context.isRtl;
  }

};
},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/RtlParentContextMixin.js":[function(require,module,exports){
'use strict';
var React = require('react');

module.exports = {

  propTypes: {
    isRtl: React.PropTypes.bool
  },

  contextTypes: {
    isRtl: React.PropTypes.bool
  },

  childContextTypes: {
    isRtl: React.PropTypes.bool
  },

  getChildContext: function getChildContext() {
    return {
      isRtl: this.props.isRtl || this.context && this.context.isRtl
    };
  },

  isRtl: function isRtl() {
    return !!(this.props.isRtl || this.context && this.context.isRtl);
  }

};
},{"react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/TimeoutMixin.js":[function(require,module,exports){
'use strict';

var _require = require('../util/_');

var has = _require.has;

module.exports = {

  componentWillUnmount: function componentWillUnmount() {
    var timers = this._timers || {};

    this._unmounted = true;

    for (var k in timers) if (has(timers, k)) clearTimeout(timers[k]);
  },

  setTimeout: function setTimeout(key, cb, duration) {
    var timers = this._timers || (this._timers = Object.create(null));

    if (this._unmounted) return;

    clearTimeout(timers[key]);
    timers[key] = window.setTimeout(cb, duration);
  }

};
},{"../util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/mixins/WidgetMixin.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    _ = require('../util/_'); //uniqueID

module.exports = {

  propTypes: {

    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['disabled'])]),

    readOnly: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['readOnly'])])
  },

  isDisabled: function isDisabled() {
    return this.props.disabled === true || this.props.disabled === 'disabled';
  },

  isReadOnly: function isReadOnly() {
    return this.props.readOnly === true || this.props.readOnly === 'readonly';
  },

  notify: function notify(handler, args) {
    this.props[handler] && this.props[handler].apply(null, [].concat(args));
  },

  _id: function _id() {
    var suffix = arguments[0] === undefined ? '' : arguments[0];

    this._id_ || (this._id_ = _.uniqueId('rw_'));
    return (this.props.id || this._id_) + suffix;
  },

  _maybeHandle: function _maybeHandle(handler, disabledOnly) {
    if (!(this.isDisabled() || !disabledOnly && this.isReadOnly())) return handler;
    return function () {};
  }
};
},{"../util/_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js":[function(require,module,exports){
'use strict';
var idCount = 0;

var _ = module.exports = {

  has: has,

  result: function result(value) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof value === 'function' ? value.apply(undefined, args) : value;
  },

  isShallowEqual: function isShallowEqual(a, b) {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();

    if (typeof a !== 'object' && typeof b !== 'object') return a === b;

    if (typeof a !== typeof b) return false;

    return shallowEqual(a, b);
  },

  transform: function transform(obj, cb, seed) {
    _.each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
    return seed;
  },

  each: function each(obj, cb, thisArg) {
    if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

    for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
  },

  pick: function pick(obj, keys) {
    keys = [].concat(keys);
    return _.transform(obj, function (mapped, val, key) {
      if (keys.indexOf(key) !== -1) mapped[key] = val;
    }, {});
  },

  omit: function omit(obj, keys) {
    keys = [].concat(keys);
    return _.transform(obj, function (mapped, val, key) {
      if (keys.indexOf(key) === -1) mapped[key] = val;
    }, {});
  },

  find: function find(arr, cb, thisArg) {
    var result;
    if (Array.isArray(arr)) {
      arr.every(function (val, idx) {
        if (cb.call(thisArg, val, idx, arr)) return (result = val, false);
        return true;
      });
      return result;
    } else for (var key in arr) if (has(arr, key)) if (cb.call(thisArg, arr[key], key, arr)) return arr[key];
  },

  chunk: function chunk(array, chunkSize) {
    var index = 0,
        length = array ? array.length : 0,
        result = [];

    chunkSize = Math.max(+chunkSize || 1, 1);

    while (index < length) result.push(array.slice(index, index += chunkSize));

    return result;
  },

  splat: function splat(obj) {
    return obj == null ? [] : [].concat(obj);
  },

  noop: function noop() {},

  uniqueId: function uniqueId(prefix) {
    return '' + ((prefix == null ? '' : prefix) + ++idCount);
  },

  //-- Really specific Component Utilities --

  isFirstFocusedRender: function isFirstFocusedRender(component) {
    return component._firstFocus || component.state.focused && (component._firstFocus = true);
  },

  ifNotDisabled: function ifNotDisabled(disabledOnly, fn) {
    if (arguments.length === 1) fn = disabledOnly, disabledOnly = false;

    //console.log('create method')
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      //console.log('called', disabledOnly)
      if (!(this.isDisabled() || !disabledOnly && this.isReadOnly())) return fn.apply(this, args);
    };
  }
};

function has(o, k) {
  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
}

function eql(a, b) {
  return a === b;
}

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 */
function shallowEqual(objA, objB) {

  if (objA == null || objB == null) return false;

  var keysA = Object.keys(objA),
      keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) if (!has(objB, keysA[i]) || !eql(objA[keysA[i]], objB[keysA[i]])) return false;

  return true;
}
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js":[function(require,module,exports){
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports === "object") {
    factory(exports);
  } else {
    factory(root.babelHelpers = {});
  }
})(this, function (global) {
  var babelHelpers = global;

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
})
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/caret.js":[function(require,module,exports){
/*eslint-disable no-empty */
'use strict';

module.exports = function caret(el, start, end) {
  if (start === undefined) return get(el);

  set(el, start, end);
};

function get(el) {
  var start, end, rangeEl, clone;

  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    try {
      el.focus();
      rangeEl = el.createTextRange();
      clone = rangeEl.duplicate();

      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);

      start = clone.text.length;
      end = start + rangeEl.text.length;
    } catch (e) {}
  }

  return { start: start, end: end };
}

function set(el, start, end) {
  var rangeEl;

  try {
    if (el.selectionStart !== undefined) {
      el.focus();
      el.setSelectionRange(start, end);
    } else {
      el.focus();
      rangeEl = el.createTextRange();
      rangeEl.collapse(true);
      rangeEl.moveStart('character', start);
      rangeEl.moveEnd('character', end - start);
      rangeEl.select();
    }
  } catch (e) {}
}
/* not focused or not visible */ /* not focused or not visible */
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/compat.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    _ = require('./_');

var _version = React.version.split('.').map(parseFloat);

module.exports = {

  version: function version() {
    return _version;
  },

  type: function type(component) {
    if (_version[0] === 0 && _version[1] >= 13) return component;

    return component.type;
  },

  findDOMNode: function findDOMNode(component) {
    if (React.findDOMNode) return React.findDOMNode(component);

    return component.getDOMNode();
  },

  cloneElement: function cloneElement(child, props) {
    if (React.cloneElement) return React.cloneElement(child, props);

    //just mutate if pre 0.13
    _.each(props, function (value, prop) {
      return child.props[prop] = value;
    });

    return child;
  }
};
},{"./_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js":[function(require,module,exports){
(function (process){
'use strict';

var _require = require('../globalize-localizers');

var globalizeNumberLocalizer = _require.globalizeNumberLocalizer;
var globalizeDateLocalizer = _require.globalizeDateLocalizer;

var globalize;

try {
  globalize = require('globalize');
} catch (err) {
  globalize = {};
  if (process.env.NODE_ENV !== 'production') {
    var desc = { get: function get() {
        throw new Error('Globalize.js is available but is still set as the localization strategy. ' + 'Please include Globalize.js or provide an alternative localization strategy.');
      } };
    Object.defineProperties(globalize, { format: desc, parseDate: desc, parseFloat: desc, findClosestCulture: desc, culture: desc });
  }
}

module.exports = {

  animate: require('./dom/animate'),

  locale: {
    date: globalizeDateLocalizer(globalize),
    number: globalizeNumberLocalizer(globalize)
  }
};
}).call(this,require('_process'))

},{"../globalize-localizers":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/globalize-localizers.js","./dom/animate":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dom/animate.js","_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js","globalize":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/globalize/lib/globalize.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/constants.js":[function(require,module,exports){
'use strict';

var _calendarViewHierarchy, _calendarViewUnits;

var views = {
  MONTH: 'month',
  YEAR: 'year',
  DECADE: 'decade',
  CENTURY: 'century'
};

module.exports = {

  directions: {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP: 'UP',
    DOWN: 'DOWN'
  },

  datePopups: {
    TIME: 'time',
    CALENDAR: 'calendar'
  },

  calendarViews: views,

  calendarViewHierarchy: (_calendarViewHierarchy = {}, _calendarViewHierarchy[views.MONTH] = views.YEAR, _calendarViewHierarchy[views.YEAR] = views.DECADE, _calendarViewHierarchy[views.DECADE] = views.CENTURY, _calendarViewHierarchy),

  calendarViewUnits: (_calendarViewUnits = {}, _calendarViewUnits[views.MONTH] = 'day', _calendarViewUnits[views.YEAR] = views.MONTH, _calendarViewUnits[views.DECADE] = views.YEAR, _calendarViewUnits[views.CENTURY] = views.DECADE, _calendarViewUnits)
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dates.js":[function(require,module,exports){
'use strict';

var babelHelpers = require('./babelHelpers.js');

var dateMath = require('date-arithmetic');

var _require = require('./constants');

var directions = _require.directions;
var calendarViewUnits = _require.calendarViewUnits;
var locale = require('./configuration').locale;

var dates = module.exports = babelHelpers._extends(dateMath, {

  parse: function parse(date, format, culture) {
    return locale.date.parse(date, format, culture);
  },

  format: function format(date, _format, culture) {
    return locale.date.format(date, _format, culture);
  },

  monthsInYear: function monthsInYear(year) {
    var months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        date = new Date(year, 0, 1);

    return months.map(function (i) {
      return dates.month(date, i);
    });
  },

  firstVisibleDay: function firstVisibleDay(date, culture) {
    var firstOfMonth = dates.startOf(date, 'month');

    return dates.startOf(firstOfMonth, 'week', locale.date.startOfWeek(culture));
  },

  lastVisibleDay: function lastVisibleDay(date, culture) {
    var endOfMonth = dates.endOf(date, 'month');

    return dates.endOf(endOfMonth, 'week', locale.date.startOfWeek(culture));
  },

  visibleDays: function visibleDays(date, culture) {
    var current = dates.firstVisibleDay(date, culture),
        last = dates.lastVisibleDay(date, culture),
        days = [];

    while (dates.lte(current, last, 'day')) {
      days.push(current);
      current = dates.add(current, 1, 'day');
    }

    return days;
  },

  move: function move(date, min, max, unit, direction) {
    var isMonth = unit === 'month',
        isUpOrDown = direction === directions.UP || direction === directions.DOWN,
        rangeUnit = calendarViewUnits[unit],
        addUnit = isMonth && isUpOrDown ? 'week' : calendarViewUnits[unit],
        amount = isMonth || !isUpOrDown ? 1 : 4,
        newDate;

    if (direction === directions.UP || direction === directions.LEFT) amount *= -1;

    newDate = dates.add(date, amount, addUnit);

    return dates.inRange(newDate, min, max, rangeUnit) ? newDate : date;
  },

  merge: function merge(date, time) {
    if (time == null && date == null) return null;

    if (time == null) time = new Date();
    if (date == null) date = new Date();

    date = dates.startOf(date, 'day');
    date = dates.hours(date, dates.hours(time));
    date = dates.minutes(date, dates.minutes(time));
    date = dates.seconds(date, dates.seconds(time));
    return dates.milliseconds(date, dates.milliseconds(time));
  },

  sameMonth: function sameMonth(dateA, dateB) {
    return dates.eq(dateA, dateB, 'month');
  },

  today: function today() {
    return this.startOf(new Date(), 'day');
  },

  yesterday: function yesterday() {
    return this.add(this.startOf(new Date(), 'day'), -1, 'day');
  },

  tomorrow: function tomorrow() {
    return this.add(this.startOf(new Date(), 'day'), 1, 'day');
  }
});
},{"./babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","./configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./constants":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/constants.js","date-arithmetic":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/date-arithmetic/index.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dom/animate.js":[function(require,module,exports){
'use strict';
var hyphenate = require('dom-helpers/util/hyphenate'),
    css = require('dom-helpers/style'),
    on = require('dom-helpers/events/on'),
    off = require('dom-helpers/events/off'),
    transitionProps = require('dom-helpers/transition/properties');

var has = Object.prototype.hasOwnProperty,
    reset = {},
    TRANSLATION_MAP = {
  left: 'translateX',
  right: 'translateX',
  top: 'translateY',
  bottom: 'translateY'
};

reset[transitionProps.property] = reset[transitionProps.duration] = reset[transitionProps.delay] = reset[transitionProps.timing] = '';

animate.endEvent = transitionProps.end;
animate.transform = transitionProps.transform;
animate.TRANSLATION_MAP = TRANSLATION_MAP;

module.exports = animate;

// super lean animate function for transitions
// doesn't support all translations to keep it matching the jquery API
/**
 * code in part from: Zepto 1.1.4 | zeptojs.com/license
 */
function animate(node, properties, duration, easing, callback) {
  var cssProperties = [],
      fakeEvent = { target: node, currentTarget: node },
      cssValues = {},
      transforms = '',
      fired;

  if (typeof easing === 'function') callback = easing, easing = null;

  if (!transitionProps.end) duration = 0;
  if (duration === undefined) duration = 200;

  for (var key in properties) if (has.call(properties, key)) {
    if (/(top|bottom)/.test(key)) transforms += TRANSLATION_MAP[key] + '(' + properties[key] + ') ';else {
      cssValues[key] = properties[key];
      cssProperties.push(hyphenate(key));
    }
  }

  if (transforms) {
    cssValues[transitionProps.transform] = transforms;
    cssProperties.push(transitionProps.transform);
  }

  if (duration > 0) {
    cssValues[transitionProps.property] = cssProperties.join(', ');
    cssValues[transitionProps.duration] = duration / 1000 + 's';
    cssValues[transitionProps.delay] = 0 + 's';
    cssValues[transitionProps.timing] = easing || 'linear';

    on(node, transitionProps.end, done);

    setTimeout(function () {
      if (!fired) done(fakeEvent);
    }, duration + 500);
  }

  node.clientLeft; // trigger page reflow
  css(node, cssValues);

  if (duration <= 0) setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;

    fired = true;
    off(event.target, transitionProps.end, done);
    css(node, reset);
    callback && callback.call(this);
  }
}
},{"dom-helpers/events/off":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/events/off.js","dom-helpers/events/on":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/events/on.js","dom-helpers/style":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js","dom-helpers/transition/properties":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/transition/properties.js","dom-helpers/util/hyphenate":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/hyphenate.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/dom/support.js":[function(require,module,exports){
'use strict';

module.exports = {
  ios: typeof navigator !== 'undefined' && navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/filter.js":[function(require,module,exports){
'use strict';
var common = {
  eq: function eq(a, b) {
    return a === b;
  },
  neq: function neq(a, b) {
    return a !== b;
  },
  gt: function gt(a, b) {
    return a > b;
  },
  gte: function gte(a, b) {
    return a >= b;
  },
  lt: function lt(a, b) {
    return a < b;
  },
  lte: function lte(a, b) {
    return a <= b;
  },

  contains: function contains(a, b) {
    return a.indexOf(b) !== -1;
  },

  startsWith: function startsWith(a, b) {
    return a.lastIndexOf(b, 0) === 0;
  },

  endsWith: function endsWith(a, b) {
    var pos = a.length - b.length,
        lastIndex = a.indexOf(b, pos);

    return lastIndex !== -1 && lastIndex === pos;
  }
};

module.exports = common;
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/localizers.js":[function(require,module,exports){
(function (process){
'use strict';

var babelHelpers = require('./babelHelpers.js');

var invariant = require('react/lib/invariant');

var _require = require('./_');

var has = _require.has;

var React = require('react');

var REQUIRED_NUMBER_FORMATS = ['default'];

var localePropType = React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]);

var REQUIRED_DATE_FORMATS = ['default', 'date', 'time', 'header', 'footer', 'dayOfMonth', 'month', 'year', 'decade', 'century'];

function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);

  invariant(result == null || typeof result === 'string', '`localizer format(..)` must return a string, null, or undefined');

  return result;
}

function checkFormats(requiredFormats, formats) {
  if (process.env.NODE_ENV !== 'production') requiredFormats.forEach(function (f) {
    return invariant(has(formats, f), 'localizer missing required format: `%s`', f);
  });
}

var NumberLocalizer = function NumberLocalizer(_ref) {
  var _this = this;

  var format = _ref.format;
  var parse = _ref.parse;
  var precision = _ref.precision;
  var formats = _ref.formats;
  var propType = _ref.propType;
  babelHelpers.classCallCheck(this, NumberLocalizer);

  invariant(typeof format === 'function', 'number localizer `format(..)` must be a function');
  invariant(typeof parse === 'function', 'number localizer `parse(..)` must be a function');

  // invariant(typeof precision === 'function'
  //   , 'number localizer `precision(..)` must be a function')

  checkFormats(REQUIRED_NUMBER_FORMATS, formats);

  this.propType = propType || localePropType;
  this.formats = formats;
  this.precision = precision || function () {
    return null;
  };

  this.format = function (value, str, culture) {
    return _format(_this, format, value, str, culture);
  };

  this.parse = function (value, culture) {
    var result = parse.call(_this, value, culture);

    invariant(result == null || typeof result === 'number', 'number localizer `parse(..)` must return a number, null, or undefined');

    return result;
  };
};

var DateLocalizer = function DateLocalizer(spec) {
  var _this2 = this;

  babelHelpers.classCallCheck(this, DateLocalizer);

  invariant(typeof spec.format === 'function', 'date localizer `format(..)` must be a function');
  invariant(typeof spec.parse === 'function', 'date localizer `parse(..)` must be a function');
  invariant(typeof spec.firstOfWeek === 'function', 'date localizer `firstOfWeek(..)` must be a function');
  checkFormats(REQUIRED_DATE_FORMATS, spec.formats);

  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.startOfWeek = spec.firstOfWeek;

  this.format = function (value, format, culture) {
    return _format(_this2, spec.format, value, format, culture);
  };

  this.parse = function (value, format, culture) {
    var result = spec.parse.call(_this2, value, format, culture);

    invariant(result == null || result instanceof Date && !isNaN(result.getTime()), 'date localizer `parse(..)` must return a valid Date, null, or undefined');

    return result;
  };
};

module.exports = {
  NumberLocalizer: NumberLocalizer, DateLocalizer: DateLocalizer
};
}).call(this,require('_process'))

},{"./_":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/_.js","./babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/babelHelpers.js","_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js","react":"react","react/lib/invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/invariant.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/propTypes.js":[function(require,module,exports){
'use strict';
var React = require('react'),
    localizers = require('./configuration').locale,
    filters = require('./filter');

var filterTypes = Object.keys(filters).filter(function (i) {
  return i !== 'filter';
});

module.exports = {

  elementType: createChainableTypeChecker(function (props, propName, componentName) {

    if (typeof props[propName] !== 'function') {
      if (React.isValidElement(props[propName])) return new Error('Invalid prop `' + propName + '` specified in  `' + componentName + '`.' + ' Expected an Element `type`, not an actual Element');

      if (typeof props[propName] !== 'string') return new Error('Invalid prop `' + propName + '` specified in  `' + componentName + '`.' + ' Expected an Element `type` such as a tag name or return value of React.createClass(...)');
    }
    return true;
  }),

  numberFormat: createChainableTypeChecker(function () {
    var _localizers$number;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_localizers$number = localizers.number).propType.apply(_localizers$number, args);
  }),

  dateFormat: createChainableTypeChecker(function () {
    var _localizers$date;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (_localizers$date = localizers.date).propType.apply(_localizers$date, args);
  }),

  accessor: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),

  message: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),

  filter: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.bool, React.PropTypes.oneOf(filterTypes)])
};

function createChainableTypeChecker(validate) {

  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || '<<anonymous>>';
    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required prop `' + propName + '` was not specified in  `' + componentName + '`.');
      }
    } else return validate(props, propName, componentName, location);
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
},{"./configuration":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/configuration.js","./filter":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/filter.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/repeater.js":[function(require,module,exports){
// my tests in ie11/chrome/FF indicate that keyDown repeats
// at about 35ms+/- 5ms after an initial 500ms delay. callback fires on the leading edge
"use strict";

function Repeater(callback) {
  var id,
      cancel = function cancel() {
    return clearInterval(id);
  };

  id = setInterval(function () {
    cancel();
    id = setInterval(callback, 35);
    callback();
  }, 500);

  return cancel;
}

module.exports = Repeater;
//fire after everything in case the user cancels on the first call
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/util/validateListInterface.js":[function(require,module,exports){
(function (process){
'use strict';
var METHODS = ['next', 'prev', 'first', 'last'];

module.exports = function validateListComponent(list) {

  if (process.env.NODE_ENV !== 'production') {
    METHODS.forEach(function (method) {
      return assert(typeof list[method] === 'function', 'List components must implement a `' + method + '()` method');
    });
  }
};

function assert(condition, msg) {
  var error;

  if (!condition) {
    error = new Error(msg);
    error.framesToPop = 1;
    throw error;
  }
}
}).call(this,require('_process'))

},{"_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/classnames/index.js":[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/date-arithmetic/index.js":[function(require,module,exports){
var MILI    = 'milliseconds'
  , SECONDS = 'seconds'
  , MINUTES = 'minutes'
  , HOURS   = 'hours'
  , DAY     = 'day'
  , WEEK    = 'week'
  , MONTH   = 'month'
  , YEAR    = 'year'
  , DECADE  = 'decade'
  , CENTURY = 'century';

var dates = module.exports = {

  add: function(date, num, unit) {
    date = new Date(date)

    switch (unit){
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case YEAR:
        return dates[unit](date, dates[unit](date) + num)
      case DAY:
        return dates.date(date, dates.date(date) + num)
      case WEEK:
        return dates.date(date, dates.date(date) + (7 * num))
      case MONTH:
        return monthMath(date, num)
      case DECADE:
        return dates.year(date, dates.year(date) + (num * 10))
      case CENTURY:
        return dates.year(date, dates.year(date) + (num * 100))
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  },

  subtract: function(date, num, unit) {
    return dates.add(date, -num, unit)
  },

  startOf: function(date, unit, firstOfWeek) {
    date = new Date(date)

    switch (unit) {
      case 'century':
      case 'decade':
      case 'year':
          date = dates.month(date, 0);
      case 'month':
          date = dates.date(date, 1);
      case 'week':
      case 'day':
          date = dates.hours(date, 0);
      case 'hours':
          date = dates.minutes(date, 0);
      case 'minutes':
          date = dates.seconds(date, 0);
      case 'seconds':
          date = dates.milliseconds(date, 0);
    }

    if (unit === DECADE)
      date = dates.subtract(date, dates.year(date) % 10, 'year')

    if (unit === CENTURY)
      date = dates.subtract(date, dates.year(date) % 100, 'year')

    if (unit === WEEK)
      date = dates.weekday(date, 0, firstOfWeek);

    return date
  },

  endOf: function(date, unit, firstOfWeek){
    date = new Date(date)
    date = dates.startOf(date, unit, firstOfWeek)
    date = dates.add(date, 1, unit)
    date = dates.subtract(date, 1, MILI)
    return date
  },

  eq:  createComparer(function(a, b){ return a === b }),
  neq: createComparer(function(a, b){ return a !== b }),
  gt:  createComparer(function(a, b){ return a > b }),
  gte: createComparer(function(a, b){ return a >= b }),
  lt:  createComparer(function(a, b){ return a < b }),
  lte: createComparer(function(a, b){ return a <= b }),

  min: function(){
    return new Date(Math.min.apply(Math, arguments))
  },

  max: function(){
    return new Date(Math.max.apply(Math, arguments))
  },

  inRange: function(day, min, max, unit){
    unit = unit || 'day'

    return (!min || dates.gte(day, min, unit))
        && (!max || dates.lte(day, max, unit))
  },

  milliseconds:   createAccessor('Milliseconds'),
  seconds:        createAccessor('Seconds'),
  minutes:        createAccessor('Minutes'),
  hours:          createAccessor('Hours'),
  day:            createAccessor('Day'),
  date:           createAccessor('Date'),
  month:          createAccessor('Month'),
  year:           createAccessor('FullYear'),

  decade: function (date, val) {
    return val === undefined
      ? dates.year(dates.startOf(date, DECADE))
      : dates.add(date, val + 10, YEAR);
  },

  century: function (date, val) {
    return val === undefined
      ? dates.year(dates.startOf(date, CENTURY))
      : dates.add(date, val + 100, YEAR);
  },

  weekday: function (date, val, firstDay) {
      var weekday = (dates.day(date) + 7 - (firstDay || 0) ) % 7;

      return val === undefined
        ? weekday
        : dates.add(date, val - weekday, DAY);
  }
}


function monthMath(date, val){
  var current = dates.month(date)
    , newMonth  = (current + val);

    date = dates.month(date, newMonth)

    if (newMonth < 0 ) newMonth = 12 + val

    //month rollover
    if ( dates.month(date) !== ( newMonth % 12))
      date = dates.date(date, 0) //move to last of month

    return date
}

function createAccessor(method){
  return function(date, val){
    if (val === undefined)
      return date['get' + method]()

    date = new Date(date)
    date['set' + method](val)
    return date
  }
}

function createComparer(operator) {
  return function (a, b, unit, maybeFoW) {
    return operator(+dates.startOf(a, unit, maybeFoW), +dates.startOf(b, unit, maybeFoW))
  };
}

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/events/off.js":[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var off = function off() {};

if (canUseDOM) {

  off = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = off;
},{"../util/inDOM":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/events/on.js":[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');
var on = function on() {};

if (canUseDOM) {
  on = (function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, handler);
    };
  })();
}

module.exports = on;
},{"../util/inDOM":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/contains.js":[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var contains = (function () {
  var root = canUseDOM && document.documentElement;

  return root && root.contains ? function (context, node) {
    return context.contains(node);
  } : root && root.compareDocumentPosition ? function (context, node) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  } : function (context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);

    return false;
  };
})();

module.exports = contains;
},{"../util/inDOM":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/height.js":[function(require,module,exports){
'use strict';

var offset = require('./offset'),
    getWindow = require('./isWindow');

module.exports = function height(node, client) {
  var win = getWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
};
},{"./isWindow":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js","./offset":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/offset.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js":[function(require,module,exports){
'use strict';

module.exports = function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/offset.js":[function(require,module,exports){
'use strict';
var contains = require('./contains'),
    getWindow = require('./isWindow');

module.exports = function offset(node) {
  var doc = node.ownerDocument,
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

  if (!doc) return;

  if (!contains(docElem, node)) return box;

  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

  var win = getWindow(doc);

  return {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: box.width || node.offsetWidth,
    height: box.height || node.offsetHeight
  };
};
},{"./contains":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/contains.js","./isWindow":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/scrollParent.js":[function(require,module,exports){
'use strict';

var css = require('../style'),
    height = require('./height');

module.exports = function scrollPrarent(node) {
  var position = css(node, 'position'),
      excludeStatic = position === 'absolute',
      ownerDoc = node.ownerDocument;

  if (position === 'fixed') return ownerDoc || document;

  while ((node = node.parentNode) && node.nodeType !== 9) {

    var isStatic = excludeStatic && css(node, 'position') === 'static',
        style = css(node, 'overflow') + css(node, 'overflow-y') + css(node, 'overflow-x');

    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && height(node) < node.scrollHeight) return node;
  }

  return document;
};
},{"../style":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js","./height":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/height.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/scrollTop.js":[function(require,module,exports){
'use strict';
var getWindow = require('./isWindow');

module.exports = function scrollTop(node, val) {
  var win = getWindow(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
};
},{"./isWindow":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/width.js":[function(require,module,exports){
'use strict';

var offset = require('./offset'),
    getWindow = require('./isWindow');

module.exports = function width(node, client) {
  var win = getWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
};
},{"./isWindow":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js","./offset":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/offset.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/getComputedStyle.js":[function(require,module,exports){
"use strict";

module.exports = function _getComputedStyle(node) {
  if (!node) throw new TypeError("No Element passed to `getComputedStyle()`");
  var doc = node.ownerDocument;

  return "defaultView" in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic"
    getPropertyValue: function getPropertyValue(prop) {
      var re = /(\-([a-z]){1})/g;
      if (prop == "float") prop = "styleFloat";
      if (re.test(prop)) prop = prop.replace(re, function () {
        return arguments[2].toUpperCase();
      });

      return node.currentStyle[prop] || null;
    }
  };
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/index.js":[function(require,module,exports){
'use strict';

var camelize = require('../util/camelizeStyle'),
    hyphenate = require('../util/hyphenateStyle'),
    _getComputedStyle = require('./getComputedStyle'),
    removeStyle = require('./removeStyle');

var has = Object.prototype.hasOwnProperty;

module.exports = function style(node, property, value) {
  var css = '',
      props = property;

  if (typeof property === 'string') {
    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(property);else (props = {})[property] = value;
  }

  for (var key in props) if (has.call(props, key)) {
    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
  }

  node.style.cssText += ';' + css;
};
},{"../util/camelizeStyle":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/camelizeStyle.js","../util/hyphenateStyle":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/hyphenateStyle.js","./getComputedStyle":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/getComputedStyle.js","./removeStyle":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/removeStyle.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/style/removeStyle.js":[function(require,module,exports){
'use strict';

module.exports = function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/transition/properties.js":[function(require,module,exports){
'use strict';
var canUseDOM = require('../util/inDOM');

var has = Object.prototype.hasOwnProperty,
    transform = 'transform',
    transition = {},
    transitionTiming,
    transitionDuration,
    transitionProperty,
    transitionDelay;

if (canUseDOM) {
  transition = getTransitionProperties();

  transform = transition.prefix + transform;

  transitionProperty = transition.prefix + 'transition-property';
  transitionDuration = transition.prefix + 'transition-duration';
  transitionDelay = transition.prefix + 'transition-delay';
  transitionTiming = transition.prefix + 'transition-timing-function';
}

module.exports = {
  transform: transform,
  end: transition.end,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};

function getTransitionProperties() {
  var endEvent,
      prefix = '',
      transitions = {
    O: 'otransitionend',
    Moz: 'transitionend',
    Webkit: 'webkitTransitionEnd',
    ms: 'MSTransitionEnd'
  };

  var element = document.createElement('div');

  for (var vendor in transitions) if (has.call(transitions, vendor)) {
    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      endEvent = transitions[vendor];
      break;
    }
  }

  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';

  return { end: endEvent, prefix: prefix };
}
},{"../util/inDOM":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/camelize.js":[function(require,module,exports){
"use strict";

var rHyphen = /-(.)/g;

module.exports = function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/camelizeStyle.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */

'use strict';
var camelize = require('./camelize');
var msPattern = /^-ms-/;

module.exports = function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
};
},{"./camelize":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/camelize.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/hyphenate.js":[function(require,module,exports){
'use strict';

var rUpper = /([A-Z])/g;

module.exports = function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
};
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/hyphenateStyle.js":[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

"use strict";

var hyphenate = require("./hyphenate");
var msPattern = /^ms-/;

module.exports = function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
};
},{"./hyphenate":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/hyphenate.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js":[function(require,module,exports){
'use strict';
module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/requestAnimationFrame.js":[function(require,module,exports){
'use strict';

var canUseDOM = require('./inDOM');

var vendors = ['', 'webkit', 'moz', 'o', 'ms'],
    cancel = 'clearTimeout',
    raf = fallback,
    compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (canUseDOM) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function (cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function (cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  return window[cancel](id);
};

module.exports = compatRaf;
},{"./inDOM":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/inDOM.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/scrollTo.js":[function(require,module,exports){
'use strict';
var getOffset = require('../query/offset'),
    height = require('../query/height'),
    getScrollParent = require('../query/scrollParent'),
    scrollTop = require('../query/scrollTop'),
    raf = require('./requestAnimationFrame'),
    getWindow = require('../query/isWindow');

module.exports = function scrollTo(selected, scrollParent) {
    var offset = getOffset(selected),
        poff = { top: 0, left: 0 },
        list,
        listScrollTop,
        selectedTop,
        isWin,
        selectedHeight,
        listHeight,
        bottom;

    if (!selected) return;

    list = scrollParent || getScrollParent(selected);
    isWin = getWindow(list);
    listScrollTop = scrollTop(list);

    listHeight = height(list, true);
    isWin = getWindow(list);

    if (!isWin) poff = getOffset(list);

    offset = {
        top: offset.top - poff.top,
        left: offset.left - poff.left,
        height: offset.height,
        width: offset.width
    };

    selectedHeight = offset.height;
    selectedTop = offset.top + (isWin ? 0 : listScrollTop);
    bottom = selectedTop + selectedHeight;

    listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;

    var id = raf(function () {
        return scrollTop(list, listScrollTop);
    });

    return function () {
        return raf.cancel(id);
    };
};
},{"../query/height":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/height.js","../query/isWindow":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/isWindow.js","../query/offset":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/offset.js","../query/scrollParent":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/scrollParent.js","../query/scrollTop":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/query/scrollTop.js","./requestAnimationFrame":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/dom-helpers/util/requestAnimationFrame.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/globalize/lib/globalize.js":[function(require,module,exports){
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( window, undefined ) {

var Globalize,
	// private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
	// private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	truncate,
	zeroPad,
	// private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

// Global variable (Globalize) or CommonJS module (globalize)
Globalize = function( cultureSelector ) {
	return new Globalize.prototype.init( cultureSelector );
};

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	module.exports = Globalize;
} else {
	// Export as global variable
	window.Globalize = Globalize;
}

Globalize.cultures = {};

Globalize.prototype = {
	constructor: Globalize,
	init: function( cultureSelector ) {
		this.cultures = Globalize.cultures;
		this.cultureSelector = cultureSelector;

		return this;
	}
};
Globalize.prototype.init.prototype = Globalize.prototype;

// 1. When defining a culture, all fields are required except the ones stated as optional.
// 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
//    which serves as the default calendar in use by that culture.
// 3. Each culture should have a ".calendar" object which is the current calendar being used,
//    it may be dynamically changed at any time to one of the calendars in ".calendars".
Globalize.cultures[ "default" ] = {
	// A unique name for the culture in the form <language code>-<country/region code>
	name: "en",
	// the name of the culture in the english language
	englishName: "English",
	// the name of the culture in its own language
	nativeName: "English",
	// whether the culture uses right-to-left text
	isRTL: false,
	// "language" is used for so-called "specific" cultures.
	// For example, the culture "es-CL" means "Spanish, in Chili".
	// It represents the Spanish-speaking culture as it is in Chili,
	// which might have different formatting rules or even translations
	// than Spanish in Spain. A "neutral" culture is one that is not
	// specific to a region. For example, the culture "es" is the generic
	// Spanish culture, which may be a more generalized version of the language
	// that may or may not be what a specific culture expects.
	// For a specific culture like "es-CL", the "language" field refers to the
	// neutral, generic culture information for the language it is using.
	// This is not always a simple matter of the string before the dash.
	// For example, the "zh-Hans" culture is netural (Simplified Chinese).
	// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
	// field is "zh-CHS", not "zh".
	// This field should be used to navigate from a specific culture to it's
	// more general, neutral culture. If a culture is already as general as it
	// can get, the language may refer to itself.
	language: "en",
	// numberFormat defines general number formatting rules, like the digits in
	// each grouping, the group separator, and how negative numbers are displayed.
	numberFormat: {
		// [negativePattern]
		// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
		// but is still defined as an array for consistency with them.
		//   negativePattern: one of "(n)|-n|- n|n-|n -"
		pattern: [ "-n" ],
		// number of decimal places normally shown
		decimals: 2,
		// string that separates number groups, as in 1,000,000
		",": ",",
		// string that separates a number from the fractional portion, as in 1.99
		".": ".",
		// array of numbers indicating the size of each number group.
		// TODO: more detailed description and example
		groupSizes: [ 3 ],
		// symbol used for positive numbers
		"+": "+",
		// symbol used for negative numbers
		"-": "-",
		// symbol used for NaN (Not-A-Number)
		"NaN": "NaN",
		// symbol used for Negative Infinity
		negativeInfinity: "-Infinity",
		// symbol used for Positive Infinity
		positiveInfinity: "Infinity",
		percent: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
			//   positivePattern: one of "n %|n%|%n|% n"
			pattern: [ "-n %", "n %" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent a percentage
			symbol: "%"
		},
		currency: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
			//   positivePattern: one of "$n|n$|$ n|n $"
			pattern: [ "($n)", "$n" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent currency
			symbol: "$"
		}
	},
	// calendars defines all the possible calendars used by this culture.
	// There should be at least one defined with name "standard", and is the default
	// calendar used by the culture.
	// A calendar contains information about how dates are formatted, information about
	// the calendar's eras, a standard set of the date formats,
	// translations for day and month names, and if the calendar is not based on the Gregorian
	// calendar, conversion functions to and from the Gregorian calendar.
	calendars: {
		standard: {
			// name that identifies the type of calendar this is
			name: "Gregorian_USEnglish",
			// separator of parts of a date (e.g. "/" in 11/05/1955)
			"/": "/",
			// separator of parts of a time (e.g. ":" in 05:44 PM)
			":": ":",
			// the first day of the week (0 = Sunday, 1 = Monday, etc)
			firstDay: 0,
			days: {
				// full day names
				names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
				// abbreviated day names
				namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				// shortest day names
				namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
			},
			months: {
				// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
				names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
				// abbreviated month names
				namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
			},
			// AM and PM designators in one of these forms:
			// The usual view, and the upper and lower case versions
			//   [ standard, lowercase, uppercase ]
			// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
			//   null
			AM: [ "AM", "am", "AM" ],
			PM: [ "PM", "pm", "PM" ],
			eras: [
				// eras in reverse chronological order.
				// name: the name of the era in this culture (e.g. A.D., C.E.)
				// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
				// offset: offset in years from gregorian calendar
				{
					"name": "A.D.",
					"start": null,
					"offset": 0
				}
			],
			// when a two digit year is given, it will never be parsed as a four digit
			// year greater than this year (in the appropriate era for the culture)
			// Set it as a full year (e.g. 2029) or use an offset format starting from
			// the current year: "+19" would correspond to 2029 if the current year 2010.
			twoDigitYearMax: 2029,
			// set of predefined date and time patterns used by the culture
			// these represent the format someone in this culture would expect
			// to see given the portions of the date that are shown.
			patterns: {
				// short date pattern
				d: "M/d/yyyy",
				// long date pattern
				D: "dddd, MMMM dd, yyyy",
				// short time pattern
				t: "h:mm tt",
				// long time pattern
				T: "h:mm:ss tt",
				// long date, short time pattern
				f: "dddd, MMMM dd, yyyy h:mm tt",
				// long date, long time pattern
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				// month/day pattern
				M: "MMMM dd",
				// month/year pattern
				Y: "yyyy MMMM",
				// S is a sortable format that does not vary by culture
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
			// optional fields for each calendar:
			/*
			monthsGenitive:
				Same as months but used when the day preceeds the month.
				Omit if the culture has no genitive distinction in month names.
				For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
			convert:
				Allows for the support of non-gregorian based calendars. This convert object is used to
				to convert a date to and from a gregorian calendar date to handle parsing and formatting.
				The two functions:
					fromGregorian( date )
						Given the date as a parameter, return an array with parts [ year, month, day ]
						corresponding to the non-gregorian based year, month, and day for the calendar.
					toGregorian( year, month, day )
						Given the non-gregorian year, month, and day, return a new Date() object
						set to the corresponding date in the gregorian calendar.
			*/
		}
	},
	// For localized strings
	messages: {}
};

Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

Globalize.cultures.en = Globalize.cultures[ "default" ];

Globalize.cultureSelector = "en";

//
// private variables
//

regexHex = /^0x[a-f0-9]+$/i;
regexInfinity = /^[+\-]?infinity$/i;
regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
regexTrim = /^\s+|\s+$/g;

//
// private JavaScript utility functions
//

arrayIndexOf = function( array, item ) {
	if ( array.indexOf ) {
		return array.indexOf( item );
	}
	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[i] === item ) {
			return i;
		}
	}
	return -1;
};

endsWith = function( value, pattern ) {
	return value.substr( value.length - pattern.length ) === pattern;
};

extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Array]";
};

isFunction = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Function]";
};

isObject = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Object]";
};

startsWith = function( value, pattern ) {
	return value.indexOf( pattern ) === 0;
};

trim = function( value ) {
	return ( value + "" ).replace( regexTrim, "" );
};

truncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};

zeroPad = function( str, count, left ) {
	var l;
	for ( l = str.length; l < count; l += 1 ) {
		str = ( left ? ("0" + str) : (str + "0") );
	}
	return str;
};

//
// private Globalization utility functions
//

appendPreOrPostMatch = function( preMatch, strings ) {
	// appends pre- and post- token match strings while removing escaped characters.
	// Returns a single quote count which is used to determine if the token occurs
	// in a string literal.
	var quoteCount = 0,
		escaped = false;
	for ( var i = 0, il = preMatch.length; i < il; i++ ) {
		var c = preMatch.charAt( i );
		switch ( c ) {
			case "\'":
				if ( escaped ) {
					strings.push( "\'" );
				}
				else {
					quoteCount++;
				}
				escaped = false;
				break;
			case "\\":
				if ( escaped ) {
					strings.push( "\\" );
				}
				escaped = !escaped;
				break;
			default:
				strings.push( c );
				escaped = false;
				break;
		}
	}
	return quoteCount;
};

expandFormat = function( cal, format ) {
	// expands unspecified or single character date formats into the full pattern.
	format = format || "F";
	var pattern,
		patterns = cal.patterns,
		len = format.length;
	if ( len === 1 ) {
		pattern = patterns[ format ];
		if ( !pattern ) {
			throw "Invalid date format string \'" + format + "\'.";
		}
		format = pattern;
	}
	else if ( len === 2 && format.charAt(0) === "%" ) {
		// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
		format = format.charAt( 1 );
	}
	return format;
};

formatDate = function( value, format, culture ) {
	var cal = culture.calendar,
		convert = cal.convert,
		ret;

	if ( !format || !format.length || format === "i" ) {
		if ( culture && culture.name.length ) {
			if ( convert ) {
				// non-gregorian calendar, so we cannot use built-in toLocaleString()
				ret = formatDate( value, cal.patterns.F, culture );
			}
			else {
				var eraDate = new Date( value.getTime() ),
					era = getEra( value, cal.eras );
				eraDate.setFullYear( getEraYear(value, cal, era) );
				ret = eraDate.toLocaleString();
			}
		}
		else {
			ret = value.toString();
		}
		return ret;
	}

	var eras = cal.eras,
		sortable = format === "s";
	format = expandFormat( cal, format );

	// Start with an empty string
	ret = [];
	var hour,
		zeros = [ "0", "00", "000" ],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

	function padZeros( num, c ) {
		var r, s = num + "";
		if ( c > 1 && s.length < c ) {
			r = ( zeros[c - 2] + s);
			return r.substr( r.length - c, c );
		}
		else {
			r = s;
		}
		return r;
	}

	function hasDay() {
		if ( foundDay || checkedDay ) {
			return foundDay;
		}
		foundDay = dayPartRegExp.test( format );
		checkedDay = true;
		return foundDay;
	}

	function getPart( date, part ) {
		if ( converted ) {
			return converted[ part ];
		}
		switch ( part ) {
			case 0:
				return date.getFullYear();
			case 1:
				return date.getMonth();
			case 2:
				return date.getDate();
			default:
				throw "Invalid part value " + part;
		}
	}

	if ( !sortable && convert ) {
		converted = convert.fromGregorian( value );
	}

	for ( ; ; ) {
		// Save the current index
		var index = tokenRegExp.lastIndex,
			// Look for the next pattern
			ar = tokenRegExp.exec( format );

		// Append the text before the pattern (or the end of the string if not found)
		var preMatch = format.slice( index, ar ? ar.index : format.length );
		quoteCount += appendPreOrPostMatch( preMatch, ret );

		if ( !ar ) {
			break;
		}

		// do not replace any matches that occur inside a string literal.
		if ( quoteCount % 2 ) {
			ret.push( ar[0] );
			continue;
		}

		var current = ar[ 0 ],
			clength = current.length;

		switch ( current ) {
			case "ddd":
				//Day of the week, as a three-letter abbreviation
			case "dddd":
				// Day of the week, using the full name
				var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
				ret.push( names[value.getDay()] );
				break;
			case "d":
				// Day of month, without leading zero for single-digit days
			case "dd":
				// Day of month, with leading zero for single-digit days
				foundDay = true;
				ret.push(
					padZeros( getPart(value, 2), clength )
				);
				break;
			case "MMM":
				// Month, as a three-letter abbreviation
			case "MMMM":
				// Month, using the full name
				var part = getPart( value, 1 );
				ret.push(
					( cal.monthsGenitive && hasDay() ) ?
					( cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ] ) :
					( cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ] )
				);
				break;
			case "M":
				// Month, as digits, with no leading zero for single-digit months
			case "MM":
				// Month, as digits, with leading zero for single-digit months
				ret.push(
					padZeros( getPart(value, 1) + 1, clength )
				);
				break;
			case "y":
				// Year, as two digits, but with no leading zero for years less than 10
			case "yy":
				// Year, as two digits, with leading zero for years less than 10
			case "yyyy":
				// Year represented by four full digits
				part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
				if ( clength < 4 ) {
					part = part % 100;
				}
				ret.push(
					padZeros( part, clength )
				);
				break;
			case "h":
				// Hours with no leading zero for single-digit hours, using 12-hour clock
			case "hh":
				// Hours with leading zero for single-digit hours, using 12-hour clock
				hour = value.getHours() % 12;
				if ( hour === 0 ) hour = 12;
				ret.push(
					padZeros( hour, clength )
				);
				break;
			case "H":
				// Hours with no leading zero for single-digit hours, using 24-hour clock
			case "HH":
				// Hours with leading zero for single-digit hours, using 24-hour clock
				ret.push(
					padZeros( value.getHours(), clength )
				);
				break;
			case "m":
				// Minutes with no leading zero for single-digit minutes
			case "mm":
				// Minutes with leading zero for single-digit minutes
				ret.push(
					padZeros( value.getMinutes(), clength )
				);
				break;
			case "s":
				// Seconds with no leading zero for single-digit seconds
			case "ss":
				// Seconds with leading zero for single-digit seconds
				ret.push(
					padZeros( value.getSeconds(), clength )
				);
				break;
			case "t":
				// One character am/pm indicator ("a" or "p")
			case "tt":
				// Multicharacter am/pm indicator
				part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
				ret.push( clength === 1 ? part.charAt(0) : part );
				break;
			case "f":
				// Deciseconds
			case "ff":
				// Centiseconds
			case "fff":
				// Milliseconds
				ret.push(
					padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
				);
				break;
			case "z":
				// Time zone offset, no leading zero
			case "zz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
				);
				break;
			case "zzz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 ) +
					// Hard coded ":" separator, rather than using cal.TimeSeparator
					// Repeated here for consistency, plus ":" was already assumed in date parsing.
					":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
				);
				break;
			case "g":
			case "gg":
				if ( cal.eras ) {
					ret.push(
						cal.eras[ getEra(value, eras) ].name
					);
				}
				break;
		case "/":
			ret.push( cal["/"] );
			break;
		default:
			throw "Invalid date format pattern \'" + current + "\'.";
		}
	}
	return ret.join( "" );
};

// formatNumber
(function() {
	var expandNumber;

	expandNumber = function( number, precision, formatInfo ) {
		var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[ 0 ],
			curGroupIndex = 1,
			factor = Math.pow( 10, precision ),
			rounded = Math.round( number * factor ) / factor;

		if ( !isFinite(rounded) ) {
			rounded = number;
		}
		number = rounded;

		var numberString = number+"",
			right = "",
			split = numberString.split( /e/i ),
			exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
		numberString = split[ 0 ];
		split = numberString.split( "." );
		numberString = split[ 0 ];
		right = split.length > 1 ? split[ 1 ] : "";

		var l;
		if ( exponent > 0 ) {
			right = zeroPad( right, exponent, false );
			numberString += right.slice( 0, exponent );
			right = right.substr( exponent );
		}
		else if ( exponent < 0 ) {
			exponent = -exponent;
			numberString = zeroPad( numberString, exponent + 1, true );
			right = numberString.slice( -exponent, numberString.length ) + right;
			numberString = numberString.slice( 0, -exponent );
		}

		if ( precision > 0 ) {
			right = formatInfo[ "." ] +
				( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
		}
		else {
			right = "";
		}

		var stringIndex = numberString.length - 1,
			sep = formatInfo[ "," ],
			ret = "";

		while ( stringIndex >= 0 ) {
			if ( curSize === 0 || curSize > stringIndex ) {
				return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
			}
			ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

			stringIndex -= curSize;

			if ( curGroupIndex < groupSizes.length ) {
				curSize = groupSizes[ curGroupIndex ];
				curGroupIndex++;
			}
		}

		return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
	};

	formatNumber = function( value, format, culture ) {
		if ( !isFinite(value) ) {
			if ( value === Infinity ) {
				return culture.numberFormat.positiveInfinity;
			}
			if ( value === -Infinity ) {
				return culture.numberFormat.negativeInfinity;
			}
			return culture.numberFormat[ "NaN" ];
		}
		if ( !format || format === "i" ) {
			return culture.name.length ? value.toLocaleString() : value.toString();
		}
		format = format || "D";

		var nf = culture.numberFormat,
			number = Math.abs( value ),
			precision = -1,
			pattern;
		if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

		var current = format.charAt( 0 ).toUpperCase(),
			formatInfo;

		switch ( current ) {
			case "D":
				pattern = "n";
				number = truncate( number );
				if ( precision !== -1 ) {
					number = zeroPad( "" + number, precision, true );
				}
				if ( value < 0 ) number = "-" + number;
				break;
			case "N":
				formatInfo = nf;
				/* falls through */
			case "C":
				formatInfo = formatInfo || nf.currency;
				/* falls through */
			case "P":
				formatInfo = formatInfo || nf.percent;
				pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
				if ( precision === -1 ) precision = formatInfo.decimals;
				number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
				break;
			default:
				throw "Bad number format specifier: " + current;
		}

		var patternParts = /n|\$|-|%/g,
			ret = "";
		for ( ; ; ) {
			var index = patternParts.lastIndex,
				ar = patternParts.exec( pattern );

			ret += pattern.slice( index, ar ? ar.index : pattern.length );

			if ( !ar ) {
				break;
			}

			switch ( ar[0] ) {
				case "n":
					ret += number;
					break;
				case "$":
					ret += nf.currency.symbol;
					break;
				case "-":
					// don't make 0 negative
					if ( /[1-9]/.test(number) ) {
						ret += nf[ "-" ];
					}
					break;
				case "%":
					ret += nf.percent.symbol;
					break;
			}
		}

		return ret;
	};

}());

getTokenRegExp = function() {
	// regular expression for matching date and time tokens in format strings.
	return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
};

getEra = function( date, eras ) {
	if ( !eras ) return 0;
	var start, ticks = date.getTime();
	for ( var i = 0, l = eras.length; i < l; i++ ) {
		start = eras[ i ].start;
		if ( start === null || ticks >= start ) {
			return i;
		}
	}
	return 0;
};

getEraYear = function( date, cal, era, sortable ) {
	var year = date.getFullYear();
	if ( !sortable && cal.eras ) {
		// convert normal gregorian year to era-shifted gregorian
		// year by subtracting the era offset
		year -= cal.eras[ era ].offset;
	}
	return year;
};

// parseExact
(function() {
	var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

	expandYear = function( cal, year ) {
		// expands 2-digit year into 4 digits.
		if ( year < 100 ) {
			var now = new Date(),
				era = getEra( now ),
				curr = getEraYear( now, cal, era ),
				twoDigitYearMax = cal.twoDigitYearMax;
			twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
			year += curr - ( curr % 100 );
			if ( year > twoDigitYearMax ) {
				year -= 100;
			}
		}
		return year;
	};

	getDayIndex = function	( cal, value, abbr ) {
		var ret,
			days = cal.days,
			upperDays = cal._upperDays;
		if ( !upperDays ) {
			cal._upperDays = upperDays = [
				toUpperArray( days.names ),
				toUpperArray( days.namesAbbr ),
				toUpperArray( days.namesShort )
			];
		}
		value = toUpper( value );
		if ( abbr ) {
			ret = arrayIndexOf( upperDays[1], value );
			if ( ret === -1 ) {
				ret = arrayIndexOf( upperDays[2], value );
			}
		}
		else {
			ret = arrayIndexOf( upperDays[0], value );
		}
		return ret;
	};

	getMonthIndex = function( cal, value, abbr ) {
		var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
		if ( !upperMonths ) {
			cal._upperMonths = upperMonths = [
				toUpperArray( months.names ),
				toUpperArray( months.namesAbbr )
			];
			cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray( monthsGen.names ),
				toUpperArray( monthsGen.namesAbbr )
			];
		}
		value = toUpper( value );
		var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
		if ( i < 0 ) {
			i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
		}
		return i;
	};

	getParseRegExp = function( cal, format ) {
		// converts a format string into a regular expression with groups that
		// can be used to extract date fields from a date string.
		// check for a cached parse regex.
		var re = cal._parseRegExp;
		if ( !re ) {
			cal._parseRegExp = re = {};
		}
		else {
			var reFormat = re[ format ];
			if ( reFormat ) {
				return reFormat;
			}
		}

		// expand single digit formats, then escape regular expression characters.
		var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
			regexp = [ "^" ],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

		// iterate through each date token found.
		while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
			var preMatch = expFormat.slice( index, match.index );
			index = tokenRegExp.lastIndex;

			// don't replace any matches that occur inside a string literal.
			quoteCount += appendPreOrPostMatch( preMatch, regexp );
			if ( quoteCount % 2 ) {
				regexp.push( match[0] );
				continue;
			}

			// add a regex group for the token.
			var m = match[ 0 ],
				len = m.length,
				add;
			switch ( m ) {
				case "dddd": case "ddd":
				case "MMMM": case "MMM":
				case "gg": case "g":
					add = "(\\D+)";
					break;
				case "tt": case "t":
					add = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					add = "(\\d{" + len + "})";
					break;
				case "dd": case "d":
				case "MM": case "M":
				case "yy": case "y":
				case "HH": case "H":
				case "hh": case "h":
				case "mm": case "m":
				case "ss": case "s":
					add = "(\\d\\d?)";
					break;
				case "zzz":
					add = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz": case "z":
					add = "([+-]?\\d\\d?)";
					break;
				case "/":
					add = "(\\/)";
					break;
				default:
					throw "Invalid date format pattern \'" + m + "\'.";
			}
			if ( add ) {
				regexp.push( add );
			}
			groups.push( match[0] );
		}
		appendPreOrPostMatch( expFormat.slice(index), regexp );
		regexp.push( "$" );

		// allow whitespace to differ when matching formats.
		var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

		// cache the regex for this format.
		return re[ format ] = parseRegExp;
	};

	outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};

	toUpper = function( value ) {
		// "he-IL" has non-breaking space in weekday names.
		return value.split( "\u00A0" ).join( " " ).toUpperCase();
	};

	toUpperArray = function( arr ) {
		var results = [];
		for ( var i = 0, l = arr.length; i < l; i++ ) {
			results[ i ] = toUpper( arr[i] );
		}
		return results;
	};

	parseExact = function( value, format, culture ) {
		// try to parse the date string by matching against the format string
		// while using the specified culture for date field names.
		value = trim( value );
		var cal = culture.calendar,
			// convert date formats into regular expressions with groupings.
			// use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp( cal, format ),
			match = new RegExp( parseInfo.regExp ).exec( value );
		if ( match === null ) {
			return null;
		}
		// found a date format that matches the input.
		var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
		// iterate the format groups to extract and set the date fields.
		for ( var j = 0, jl = groups.length; j < jl; j++ ) {
			var matchGroup = match[ j + 1 ];
			if ( matchGroup ) {
				var current = groups[ j ],
					clength = current.length,
					matchInt = parseInt( matchGroup, 10 );
				switch ( current ) {
					case "dd": case "d":
						// Day of month.
						date = matchInt;
						// check that date is generally in valid range, also checking overflow below.
						if ( outOfRange(date, 1, 31) ) return null;
						break;
					case "MMM": case "MMMM":
						month = getMonthIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "M": case "MM":
						// Month.
						month = matchInt - 1;
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "y": case "yy":
					case "yyyy":
						year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
						if ( outOfRange(year, 0, 9999) ) return null;
						break;
					case "h": case "hh":
						// Hours (12-hour clock).
						hour = matchInt;
						if ( hour === 12 ) hour = 0;
						if ( outOfRange(hour, 0, 11) ) return null;
						break;
					case "H": case "HH":
						// Hours (24-hour clock).
						hour = matchInt;
						if ( outOfRange(hour, 0, 23) ) return null;
						break;
					case "m": case "mm":
						// Minutes.
						min = matchInt;
						if ( outOfRange(min, 0, 59) ) return null;
						break;
					case "s": case "ss":
						// Seconds.
						sec = matchInt;
						if ( outOfRange(sec, 0, 59) ) return null;
						break;
					case "tt": case "t":
						// AM/PM designator.
						// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
						// the AM tokens. If not, fail the parse for this format.
						pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
						if (
							!pmHour && (
								!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
							)
						) return null;
						break;
					case "f":
						// Deciseconds.
					case "ff":
						// Centiseconds.
					case "fff":
						// Milliseconds.
						msec = matchInt * Math.pow( 10, 3 - clength );
						if ( outOfRange(msec, 0, 999) ) return null;
						break;
					case "ddd":
						// Day of week.
					case "dddd":
						// Day of week.
						weekDay = getDayIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(weekDay, 0, 6) ) return null;
						break;
					case "zzz":
						// Time zone offset in +/- hours:min.
						var offsets = matchGroup.split( /:/ );
						if ( offsets.length !== 2 ) return null;
						hourOffset = parseInt( offsets[0], 10 );
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						var minOffset = parseInt( offsets[1], 10 );
						if ( outOfRange(minOffset, 0, 59) ) return null;
						tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
						break;
					case "z": case "zz":
						// Time zone offset in +/- hours.
						hourOffset = matchInt;
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						tzMinOffset = hourOffset * 60;
						break;
					case "g": case "gg":
						var eraName = matchGroup;
						if ( !eraName || !cal.eras ) return null;
						eraName = trim( eraName.toLowerCase() );
						for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
							if ( eraName === cal.eras[i].name.toLowerCase() ) {
								era = i;
								break;
							}
						}
						// could not find an era with that name
						if ( era === null ) return null;
						break;
				}
			}
		}
		var result = new Date(), defaultYear, convert = cal.convert;
		defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
		if ( year === null ) {
			year = defaultYear;
		}
		else if ( cal.eras ) {
			// year must be shifted to normal gregorian year
			// but not if year was not specified, its already normal gregorian
			// per the main if clause above.
			year += cal.eras[( era || 0 )].offset;
		}
		// set default day and month to 1 and January, so if unspecified, these are the defaults
		// instead of the current day/month.
		if ( month === null ) {
			month = 0;
		}
		if ( date === null ) {
			date = 1;
		}
		// now have year, month, and date, but in the culture's calendar.
		// convert to gregorian if necessary
		if ( convert ) {
			result = convert.toGregorian( year, month, date );
			// conversion failed, must be an invalid match
			if ( result === null ) return null;
		}
		else {
			// have to set year, month and date together to avoid overflow based on current date.
			result.setFullYear( year, month, date );
			// check to see if date overflowed for specified month (only checked 1-31 above).
			if ( result.getDate() !== date ) return null;
			// invalid day of week.
			if ( weekDay !== null && result.getDay() !== weekDay ) {
				return null;
			}
		}
		// if pm designator token was found make sure the hours fit the 24-hour clock.
		if ( pmHour && hour < 12 ) {
			hour += 12;
		}
		result.setHours( hour, min, sec, msec );
		if ( tzMinOffset !== null ) {
			// adjust timezone to utc before applying local offset.
			var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
			// Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
			// to ensure both these fields will not exceed this range.	adjustedMin will range
			// somewhere between -1440 and 1500, so we only need to split this into hours.
			result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
		}
		return result;
	};
}());

parseNegativePattern = function( value, nf, negativePattern ) {
	var neg = nf[ "-" ],
		pos = nf[ "+" ],
		ret;
	switch ( negativePattern ) {
		case "n -":
			neg = " " + neg;
			pos = " " + pos;
			/* falls through */
		case "n-":
			if ( endsWith(value, neg) ) {
				ret = [ "-", value.substr(0, value.length - neg.length) ];
			}
			else if ( endsWith(value, pos) ) {
				ret = [ "+", value.substr(0, value.length - pos.length) ];
			}
			break;
		case "- n":
			neg += " ";
			pos += " ";
			/* falls through */
		case "-n":
			if ( startsWith(value, neg) ) {
				ret = [ "-", value.substr(neg.length) ];
			}
			else if ( startsWith(value, pos) ) {
				ret = [ "+", value.substr(pos.length) ];
			}
			break;
		case "(n)":
			if ( startsWith(value, "(") && endsWith(value, ")") ) {
				ret = [ "-", value.substr(1, value.length - 2) ];
			}
			break;
	}
	return ret || [ "", value ];
};

//
// public instance functions
//

Globalize.prototype.findClosestCulture = function( cultureSelector ) {
	return Globalize.findClosestCulture.call( this, cultureSelector );
};

Globalize.prototype.format = function( value, format, cultureSelector ) {
	return Globalize.format.call( this, value, format, cultureSelector );
};

Globalize.prototype.localize = function( key, cultureSelector ) {
	return Globalize.localize.call( this, key, cultureSelector );
};

Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
	return Globalize.parseInt.call( this, value, radix, cultureSelector );
};

Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
	return Globalize.parseFloat.call( this, value, radix, cultureSelector );
};

Globalize.prototype.culture = function( cultureSelector ) {
	return Globalize.culture.call( this, cultureSelector );
};

//
// public singleton functions
//

Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

	var base = {},
		isNew = false;

	if ( typeof cultureName !== "string" ) {
		// cultureName argument is optional string. If not specified, assume info is first
		// and only argument. Specified info deep-extends current culture.
		info = cultureName;
		cultureName = this.culture().name;
		base = this.cultures[ cultureName ];
	} else if ( typeof baseCultureName !== "string" ) {
		// baseCultureName argument is optional string. If not specified, assume info is second
		// argument. Specified info deep-extends specified culture.
		// If specified culture does not exist, create by deep-extending default
		info = baseCultureName;
		isNew = ( this.cultures[ cultureName ] == null );
		base = this.cultures[ cultureName ] || this.cultures[ "default" ];
	} else {
		// cultureName and baseCultureName specified. Assume a new culture is being created
		// by deep-extending an specified base culture
		isNew = true;
		base = this.cultures[ baseCultureName ];
	}

	this.cultures[ cultureName ] = extend(true, {},
		base,
		info
	);
	// Make the standard calendar the current culture if it's a new culture
	if ( isNew ) {
		this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
	}
};

Globalize.findClosestCulture = function( name ) {
	var match;
	if ( !name ) {
		return this.findClosestCulture( this.cultureSelector ) || this.cultures[ "default" ];
	}
	if ( typeof name === "string" ) {
		name = name.split( "," );
	}
	if ( isArray(name) ) {
		var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
		for ( i = 0; i < l; i++ ) {
			name = trim( list[i] );
			var pri, parts = name.split( ";" );
			lang = trim( parts[0] );
			if ( parts.length === 1 ) {
				pri = 1;
			}
			else {
				name = trim( parts[1] );
				if ( name.indexOf("q=") === 0 ) {
					name = name.substr( 2 );
					pri = parseFloat( name );
					pri = isNaN( pri ) ? 0 : pri;
				}
				else {
					pri = 1;
				}
			}
			prioritized.push({ lang: lang, pri: pri });
		}
		prioritized.sort(function( a, b ) {
			if ( a.pri < b.pri ) {
				return 1;
			} else if ( a.pri > b.pri ) {
				return -1;
			}
			return 0;
		});
		// exact match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			match = cultures[ lang ];
			if ( match ) {
				return match;
			}
		}

		// neutral language match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			do {
				var index = lang.lastIndexOf( "-" );
				if ( index === -1 ) {
					break;
				}
				// strip off the last part. e.g. en-US => en
				lang = lang.substr( 0, index );
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}
			while ( 1 );
		}

		// last resort: match first culture using that language
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			for ( var cultureKey in cultures ) {
				var culture = cultures[ cultureKey ];
				if ( culture.language == lang ) {
					return culture;
				}
			}
		}
	}
	else if ( typeof name === "object" ) {
		return name;
	}
	return match || null;
};

Globalize.format = function( value, format, cultureSelector ) {
	var culture = this.findClosestCulture( cultureSelector );
	if ( value instanceof Date ) {
		value = formatDate( value, format, culture );
	}
	else if ( typeof value === "number" ) {
		value = formatNumber( value, format, culture );
	}
	return value;
};

Globalize.localize = function( key, cultureSelector ) {
	return this.findClosestCulture( cultureSelector ).messages[ key ] ||
		this.cultures[ "default" ].messages[ key ];
};

Globalize.parseDate = function( value, formats, culture ) {
	culture = this.findClosestCulture( culture );

	var date, prop, patterns;
	if ( formats ) {
		if ( typeof formats === "string" ) {
			formats = [ formats ];
		}
		if ( formats.length ) {
			for ( var i = 0, l = formats.length; i < l; i++ ) {
				var format = formats[ i ];
				if ( format ) {
					date = parseExact( value, format, culture );
					if ( date ) {
						break;
					}
				}
			}
		}
	} else {
		patterns = culture.calendar.patterns;
		for ( prop in patterns ) {
			date = parseExact( value, patterns[prop], culture );
			if ( date ) {
				break;
			}
		}
	}

	return date || null;
};

Globalize.parseInt = function( value, radix, cultureSelector ) {
	return truncate( Globalize.parseFloat(value, radix, cultureSelector) );
};

Globalize.parseFloat = function( value, radix, cultureSelector ) {
	// radix argument is optional
	if ( typeof radix !== "number" ) {
		cultureSelector = radix;
		radix = 10;
	}

	var culture = this.findClosestCulture( cultureSelector );
	var ret = NaN,
		nf = culture.numberFormat;

	if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
		// remove currency symbol
		value = value.replace( culture.numberFormat.currency.symbol, "" );
		// replace decimal seperator
		value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
	}

	//Remove percentage character from number string before parsing
	if ( value.indexOf(culture.numberFormat.percent.symbol) > -1){
		value = value.replace( culture.numberFormat.percent.symbol, "" );
	}

	// remove spaces: leading, trailing and between - and number. Used for negative currency pt-BR
	value = value.replace( / /g, "" );

	// allow infinity or hexidecimal
	if ( regexInfinity.test(value) ) {
		ret = parseFloat( value );
	}
	else if ( !radix && regexHex.test(value) ) {
		ret = parseInt( value, 16 );
	}
	else {

		// determine sign and number
		var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
			sign = signInfo[ 0 ],
			num = signInfo[ 1 ];

		// #44 - try parsing as "(n)"
		if ( sign === "" && nf.pattern[0] !== "(n)" ) {
			signInfo = parseNegativePattern( value, nf, "(n)" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		// try parsing as "-n"
		if ( sign === "" && nf.pattern[0] !== "-n" ) {
			signInfo = parseNegativePattern( value, nf, "-n" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		sign = sign || "+";

		// determine exponent and number
		var exponent,
			intAndFraction,
			exponentPos = num.indexOf( "e" );
		if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
		if ( exponentPos < 0 ) {
			intAndFraction = num;
			exponent = null;
		}
		else {
			intAndFraction = num.substr( 0, exponentPos );
			exponent = num.substr( exponentPos + 1 );
		}
		// determine decimal position
		var integer,
			fraction,
			decSep = nf[ "." ],
			decimalPos = intAndFraction.indexOf( decSep );
		if ( decimalPos < 0 ) {
			integer = intAndFraction;
			fraction = null;
		}
		else {
			integer = intAndFraction.substr( 0, decimalPos );
			fraction = intAndFraction.substr( decimalPos + decSep.length );
		}
		// handle groups (e.g. 1,000,000)
		var groupSep = nf[ "," ];
		integer = integer.split( groupSep ).join( "" );
		var altGroupSep = groupSep.replace( /\u00A0/g, " " );
		if ( groupSep !== altGroupSep ) {
			integer = integer.split( altGroupSep ).join( "" );
		}
		// build a natively parsable number string
		var p = sign + integer;
		if ( fraction !== null ) {
			p += "." + fraction;
		}
		if ( exponent !== null ) {
			// exponent itself may have a number patternd
			var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
			p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
		}
		if ( regexParseFloat.test(p) ) {
			ret = parseFloat( p );
		}
	}
	return ret;
};

Globalize.culture = function( cultureSelector ) {
	// setter
	if ( typeof cultureSelector !== "undefined" ) {
		this.cultureSelector = cultureSelector;
	}
	// getter
	return this.findClosestCulture( cultureSelector ) || this.cultures[ "default" ];
};

}( this ));

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/uncontrollable.js":[function(require,module,exports){
(function (process){
"use strict";
var babelHelpers = require("./util/babelHelpers.js");
var React = require("react");
var invariant = require("react/lib/invariant");

function customPropType(handler, propType, name) {

  return function (props, propName, componentName, location) {

    if (props[propName] !== undefined) {
      if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to " + "`" + name + "` without an `" + handler + "` handler. This will render a read-only field. " + "If the field should be mutable use `" + defaultKey(propName) + "`. Otherwise, set `" + handler + "`");

      return propType && propType(props, propName, name, location);
    }
  };
}

var version = React.version.split(".").map(parseFloat);

function getType(component) {
  if (version[0] === 0 && version[1] >= 13) return component;

  return component.type;
}

function getLinkName(name) {
  return name === "value" ? "valueLink" : name === "checked" ? "checkedLink" : null;
}

module.exports = function (Component, controlledValues, taps) {
  var name = Component.displayName || Component.name || "Component",
      types = {};

  if (process.env.NODE_ENV !== "production" && getType(Component).propTypes) {
    types = transform(controlledValues, function (obj, handler, prop) {
      var type = getType(Component).propTypes[prop];

      invariant(typeof handler === "string" && handler.trim().length, "Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable", Component.displayName, prop);

      obj[prop] = customPropType(handler, type, Component.displayName);
      if (type !== undefined) {
        obj[defaultKey(prop)] = type;
      }
    }, {});
  }

  name = name[0].toUpperCase() + name.substr(1);

  taps = taps || {};

  return React.createClass({

    displayName: "Uncontrolled" + name,

    propTypes: types,

    getInitialState: function () {
      var props = this.props,
          keys = Object.keys(controlledValues);

      return transform(keys, function (state, key) {
        state[key] = props[defaultKey(key)];
      }, {});
    },

    shouldComponentUpdate: function () {
      //let the setState trigger the update
      return !this._notifying;
    },

    render: function () {
      var _this = this;

      var newProps = {};
      var _props = this.props;
      var valueLink = _props.valueLink;
      var checkedLink = _props.checkedLink;
      var props = babelHelpers.objectWithoutProperties(_props, ["valueLink", "checkedLink"]);

      each(controlledValues, function (handle, propName) {
        var linkPropName = getLinkName(propName),
            prop = _this.props[propName];

        if (linkPropName && !isProp(_this.props, propName) && isProp(_this.props, linkPropName)) {
          prop = _this.props[linkPropName].value;
        }

        newProps[propName] = prop !== undefined ? prop : _this.state[propName];

        newProps[handle] = setAndNotify.bind(_this, propName);
      });

      newProps = babelHelpers._extends({}, props, newProps);

      //console.log('props: ', newProps)
      each(taps, function (val, key) {
        return newProps[key] = chain(_this, val, newProps[key]);
      });

      return React.createElement(Component, newProps);
    }
  });

  function setAndNotify(propName, value) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var linkName = getLinkName(propName),
        handler = this.props[controlledValues[propName]];
    //, controlled = handler && isProp(this.props, propName);

    if (linkName && isProp(this.props, linkName) && !handler) {
      handler = this.props[linkName].requestChange
      //propName = propName === 'valueLink' ? 'value' : 'checked'
      ;
    }

    if (handler) {
      this._notifying = true;
      handler.call.apply(handler, [this, value].concat(args));
      this._notifying = false;
    }

    this.setState((function () {
      var _setState = {};
      _setState[propName] = value;
      return _setState;
    })());
  }

  function isProp(props, prop) {
    return props[prop] !== undefined;
  }
};

function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

function chain(thisArg, a, b) {
  return function chainedFunction() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    a && a.call.apply(a, [thisArg].concat(args));
    b && b.call.apply(b, [thisArg].concat(args));
  };
}

function transform(obj, cb, seed) {
  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
  return seed;
}

function each(obj, cb, thisArg) {
  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

  for (var key in obj) if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
}

function has(o, k) {
  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
}
//return !controlled
}).call(this,require('_process'))

},{"./util/babelHelpers.js":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/util/babelHelpers.js","_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js","react":"react","react/lib/invariant":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/invariant.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/node_modules/uncontrollable/lib/util/babelHelpers.js":[function(require,module,exports){
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports === "object") {
    factory(exports);
  } else {
    factory(root.babelHelpers = {});
  }
})(this, function (global) {
  var babelHelpers = global;

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
})
},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/emptyFunction.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/getActiveElement.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document body is not yet defined.
 */
function getActiveElement() /*?DOMElement*/ {
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

module.exports = getActiveElement;

},{}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/invariant.js":[function(require,module,exports){
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

"use strict";

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
  if ("production" !== process.env.NODE_ENV) {
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

},{"_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/warning.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"./emptyFunction":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react/lib/emptyFunction.js","_process":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/about.js":[function(require,module,exports){
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

var _master = require("./master");

var _master2 = _interopRequireDefault(_master);

var About = (function (_Master) {
    _inherits(About, _Master);

    function About(props) {
        _classCallCheck(this, About);

        _get(Object.getPrototypeOf(About.prototype), "constructor", this).call(this, props);
    }

    _createClass(About, [{
        key: "content",
        value: function content() {
            return _react2["default"].createElement(
                "h1",
                null,
                "About"
            );
        }
    }]);

    return About;
})(_master2["default"]);

exports["default"] = About;
module.exports = exports["default"];

},{"./master":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js","react":"react"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/home.js":[function(require,module,exports){
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

var _master = require("./master");

var _master2 = _interopRequireDefault(_master);

var colors = ['orange', 'red', 'blue', 'purple'];
var Calendar = require('react-widgets').Calendar;

var Home = (function (_Master) {
    _inherits(Home, _Master);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
        this.state = { colors: [] };
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //this.setState({colors: ['orange', 'red', 'blue', 'purple']});
        }
    }, {
        key: "onChange",
        value: function onChange(val) {
            console.log(val);
        }
    }, {
        key: "content",
        value: function content() {
            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    "h1",
                    null,
                    "Home"
                ),
                _react2["default"].createElement(Calendar, null)
            );
        }
    }]);

    return Home;
})(_master2["default"]);

exports["default"] = Home;
module.exports = exports["default"];

},{"./master":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js","react":"react","react-widgets":"/Users/jonas/Projects/Django/django-jsx/demo/static/js/node_modules/react-widgets/lib/index.js"}],"/Users/jonas/Projects/Django/django-jsx/demo/static/js/src/components/master.js":[function(require,module,exports){
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

var Master = (function (_React$Component) {
    _inherits(Master, _React$Component);

    function Master(props) {
        _classCallCheck(this, Master);

        _get(Object.getPrototypeOf(Master.prototype), "constructor", this).call(this, props);
    }

    _createClass(Master, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "html",
                null,
                _react2["default"].createElement(
                    "head",
                    null,
                    _react2["default"].createElement("meta", { charSet: "UTF-8" }),
                    _react2["default"].createElement("link", { href: "/static/css/core.css", media: "all", rel: "stylesheet" }),
                    _react2["default"].createElement("link", { href: "/static/css/react-widgets.css", media: "all", rel: "stylesheet" }),
                    _react2["default"].createElement("link", { href: "/static/css/variables.css", media: "all", rel: "stylesheet" }),
                    _react2["default"].createElement(
                        "title",
                        null,
                        "Foo"
                    )
                ),
                _react2["default"].createElement("html", { lang: this.props.language }),
                _react2["default"].createElement(
                    "body",
                    null,
                    _react2["default"].createElement(
                        "div",
                        null,
                        _react2["default"].createElement(
                            "h1",
                            null,
                            "Master page"
                        ),
                        _react2["default"].createElement(
                            "div",
                            { id: "app" },
                            this.content()
                        )
                    ),
                    _react2["default"].createElement("script", { type: "text/javascript", src: "/static/js/dist/vendor.js" }),
                    _react2["default"].createElement("script", { type: "text/javascript", src: "/static/js/dist/demo.js" })
                )
            );
        }
    }]);

    return Master;
})(_react2["default"].Component);

exports["default"] = Master;
module.exports = exports["default"];

},{"react":"react"}],"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvQ2FsZW5kYXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvQ2VudHVyeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9Db21ib2JveC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9Db21ib2JveElucHV0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0RhdGVJbnB1dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9EYXRlVGltZVBpY2tlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9EZWNhZGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvRHJvcGRvd25MaXN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0Zvb3Rlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9IZWFkZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9MaXN0R3JvdXBhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0xpc3RPcHRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTW9udGguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTXVsdGlzZWxlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTXVsdGlzZWxlY3RJbnB1dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9NdWx0aXNlbGVjdFRhZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTnVtYmVySW5wdXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTnVtYmVyUGlja2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1BvcHVwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1JlcGxhY2VUcmFuc2l0aW9uR3JvdXAuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvU2VsZWN0TGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9TbGlkZVRyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvVGltZUxpc3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvV2lkZ2V0QnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1llYXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvY29uZmlndXJlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL2dsb2JhbGl6ZS1sb2NhbGl6ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9EYXRhRmlsdGVyTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL0xpc3RNb3ZlbWVudE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9Qb3B1cFNjcm9sbFRvTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL1B1cmVSZW5kZXJNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9taXhpbnMvVGltZW91dE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9XaWRnZXRNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL18uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9iYWJlbEhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9jYXJldC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2NvbXBhdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2NvbmZpZ3VyYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9kYXRlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2RvbS9hbmltYXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvZG9tL3N1cHBvcnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9maWx0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9sb2NhbGl6ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvcHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvcmVwZWF0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC92YWxpZGF0ZUxpc3RJbnRlcmZhY2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kYXRlLWFyaXRobWV0aWMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXZlbnRzL29mZi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvaGVpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L2lzV2luZG93LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9xdWVyeS9zY3JvbGxQYXJlbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvc2Nyb2xsVG9wLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L3dpZHRoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvc3R5bGUvcmVtb3ZlU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3Njcm9sbFRvLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2dsb2JhbGl6ZS9saWIvZ2xvYmFsaXplLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi91bmNvbnRyb2xsYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvdXRpbC9iYWJlbEhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2dldEFjdGl2ZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL21hc3Rlci5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLG1CQUFNLE1BQU0sQ0FDUixzRUFBUSxFQUNSLFFBQVEsQ0FDWCxDQUFDOzs7QUNSRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbGpEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkMzRGtCLE9BQU87Ozs7c0JBQ04sVUFBVTs7OztJQUdSLEtBQUs7Y0FBTCxLQUFLOztBQUNYLGFBRE0sS0FBSyxDQUNWLEtBQUssRUFBRTs4QkFERixLQUFLOztBQUVsQixtQ0FGYSxLQUFLLDZDQUVaLEtBQUssRUFBRTtLQUNoQjs7aUJBSGdCLEtBQUs7O2VBS2YsbUJBQUc7QUFDTixtQkFDSTs7OzthQUFjLENBQ2pCO1NBQ0o7OztXQVRnQixLQUFLOzs7cUJBQUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDSlIsT0FBTzs7OztzQkFDTixVQUFVOzs7O0FBRzdCLElBQUksTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQTs7SUFFN0IsSUFBSTtjQUFKLElBQUk7O0FBQ1QsYUFESyxJQUFJLENBQ1IsS0FBSyxFQUFFOzhCQURILElBQUk7O0FBRWpCLG1DQUZhLElBQUksNkNBRVgsS0FBSyxFQUFFO0FBQ2IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQTtLQUM1Qjs7aUJBSmdCLElBQUk7O2VBTUgsNkJBQUc7O1NBRXBCOzs7ZUFFTyxrQkFBQyxHQUFHLEVBQUU7QUFDVixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjs7O2VBRU8sbUJBQUc7QUFDUCxtQkFDSTs7O2dCQUNJOzs7O2lCQUFhO2dCQUNiLGlDQUFDLFFBQVEsT0FBRzthQUNWLENBQ1Q7U0FDSjs7O1dBckJnQixJQUFJOzs7cUJBQUosSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDUFAsT0FBTzs7OztJQUdKLE1BQU07Y0FBTixNQUFNOztBQUNaLGFBRE0sTUFBTSxDQUNYLEtBQUssRUFBRTs4QkFERixNQUFNOztBQUVuQixtQ0FGYSxNQUFNLDZDQUViLEtBQUssRUFBRTtLQUNoQjs7aUJBSGdCLE1BQU07O2VBS2pCLGtCQUFHO0FBQ0wsbUJBQ0k7OztnQkFDSTs7O29CQUNJLDJDQUFNLE9BQU8sRUFBQyxPQUFPLEdBQUc7b0JBQ3hCLDJDQUFNLElBQUksRUFBQyxzQkFBc0IsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxZQUFZLEdBQUc7b0JBQ2pFLDJDQUFNLElBQUksRUFBQywrQkFBK0IsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxZQUFZLEdBQUc7b0JBQzFFLDJDQUFNLElBQUksRUFBQywyQkFBMkIsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxZQUFZLEdBQUc7b0JBQ3RFOzs7O3FCQUFrQjtpQkFDZjtnQkFFUCwyQ0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQUMsR0FBRztnQkFDbkM7OztvQkFDSTs7O3dCQUNJOzs7O3lCQUFvQjt3QkFDcEI7OzhCQUFLLEVBQUUsRUFBQyxLQUFLOzRCQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7eUJBQU87cUJBQ2xDO29CQUVOLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMsMkJBQTJCLEdBQVU7b0JBQ3hFLDZDQUFRLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLEVBQUMseUJBQXlCLEdBQVU7aUJBQ25FO2FBQ0osQ0FDVjtTQUNKOzs7V0E1QmdCLE1BQU07R0FBUyxtQkFBTSxTQUFTOztxQkFBOUIsTUFBTTs7OztBQ0gzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvaG9tZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3NyYy9jb21wb25lbnRzL2Fib3V0XCI7XG5cblxuUmVhY3QucmVuZGVyKFxuICAgIDxIb21lIC8+LFxuICAgIGRvY3VtZW50XG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1ZJRVcsIF9PUFBPU0lURV9ESVJFQ1RJT04sIF9NVUxUSVBMSUVSO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF9IZWFkZXIgPSByZXF1aXJlKCcuL0hlYWRlcicpO1xuXG52YXIgX0hlYWRlcjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IZWFkZXIpO1xuXG52YXIgX0Zvb3RlciA9IHJlcXVpcmUoJy4vRm9vdGVyJyk7XG5cbnZhciBfRm9vdGVyMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvb3Rlcik7XG5cbnZhciBfTW9udGggPSByZXF1aXJlKCcuL01vbnRoJyk7XG5cbnZhciBfTW9udGgyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9udGgpO1xuXG52YXIgX1llYXIgPSByZXF1aXJlKCcuL1llYXInKTtcblxudmFyIF9ZZWFyMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1llYXIpO1xuXG52YXIgX0RlY2FkZSA9IHJlcXVpcmUoJy4vRGVjYWRlJyk7XG5cbnZhciBfRGVjYWRlMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RlY2FkZSk7XG5cbnZhciBfQ2VudHVyeSA9IHJlcXVpcmUoJy4vQ2VudHVyeScpO1xuXG52YXIgX0NlbnR1cnkyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2VudHVyeSk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb25maWd1cmF0aW9uKTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBfdW5jb250cm9sbGFibGUgPSByZXF1aXJlKCd1bmNvbnRyb2xsYWJsZScpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuY29udHJvbGxhYmxlKTtcblxudmFyIF9TbGlkZVRyYW5zaXRpb24gPSByZXF1aXJlKCcuL1NsaWRlVHJhbnNpdGlvbicpO1xuXG52YXIgX1NsaWRlVHJhbnNpdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbGlkZVRyYW5zaXRpb24pO1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25zdGFudHMgPSByZXF1aXJlKCcuL3V0aWwvY29uc3RhbnRzJyk7XG5cbnZhciBfdXRpbENvbnN0YW50czIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uc3RhbnRzKTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG4vL3ZhbHVlcywgb21pdFxuXG52YXIgZGlyID0gX3V0aWxDb25zdGFudHMyWydkZWZhdWx0J10uZGlyZWN0aW9ucyxcbiAgICB2YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBvYmpba107XG4gIH0pO1xufSxcbiAgICBpbnZlcnQgPSBmdW5jdGlvbiBpbnZlcnQob2JqKSB7XG4gIHJldHVybiBfdXRpbF8yWydkZWZhdWx0J10udHJhbnNmb3JtKG9iaiwgZnVuY3Rpb24gKG8sIHZhbCwga2V5KSB7XG4gICAgb1t2YWxdID0ga2V5O1xuICB9LCB7fSk7XG59O1xuXG52YXIgbG9jYWxpemVycyA9IF91dGlsQ29uZmlndXJhdGlvbjJbJ2RlZmF1bHQnXS5sb2NhbGUsXG4gICAgdmlld3MgPSBfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5jYWxlbmRhclZpZXdzLFxuICAgIFZJRVdfT1BUSU9OUyA9IHZhbHVlcyh2aWV3cyksXG4gICAgQUxUX1ZJRVcgPSBpbnZlcnQoX3V0aWxDb25zdGFudHMyWydkZWZhdWx0J10uY2FsZW5kYXJWaWV3SGllcmFyY2h5KSxcbiAgICBORVhUX1ZJRVcgPSBfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5jYWxlbmRhclZpZXdIaWVyYXJjaHksXG4gICAgVklFV19VTklUID0gX3V0aWxDb25zdGFudHMyWydkZWZhdWx0J10uY2FsZW5kYXJWaWV3VW5pdHMsXG4gICAgVklFVyA9IChfVklFVyA9IHt9LCBfVklFV1t2aWV3cy5NT05USF0gPSBfTW9udGgyWydkZWZhdWx0J10sIF9WSUVXW3ZpZXdzLllFQVJdID0gX1llYXIyWydkZWZhdWx0J10sIF9WSUVXW3ZpZXdzLkRFQ0FERV0gPSBfRGVjYWRlMlsnZGVmYXVsdCddLCBfVklFV1t2aWV3cy5DRU5UVVJZXSA9IF9DZW50dXJ5MlsnZGVmYXVsdCddLCBfVklFVyk7XG5cbnZhciBBUlJPV1NfVE9fRElSRUNUSU9OID0ge1xuICBBcnJvd0Rvd246IGRpci5ET1dOLFxuICBBcnJvd1VwOiBkaXIuVVAsXG4gIEFycm93UmlnaHQ6IGRpci5SSUdIVCxcbiAgQXJyb3dMZWZ0OiBkaXIuTEVGVFxufTtcblxudmFyIE9QUE9TSVRFX0RJUkVDVElPTiA9IChfT1BQT1NJVEVfRElSRUNUSU9OID0ge30sIF9PUFBPU0lURV9ESVJFQ1RJT05bZGlyLkxFRlRdID0gZGlyLlJJR0hULCBfT1BQT1NJVEVfRElSRUNUSU9OW2Rpci5SSUdIVF0gPSBkaXIuTEVGVCwgX09QUE9TSVRFX0RJUkVDVElPTik7XG5cbnZhciBNVUxUSVBMSUVSID0gKF9NVUxUSVBMSUVSID0ge30sIF9NVUxUSVBMSUVSW3ZpZXdzLllFQVJdID0gMSwgX01VTFRJUExJRVJbdmlld3MuREVDQURFXSA9IDEwLCBfTVVMVElQTElFUlt2aWV3cy5DRU5UVVJZXSA9IDEwMCwgX01VTFRJUExJRVIpO1xuXG52YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KHByb3BzLCBmKSB7XG4gIHJldHVybiBwcm9wc1tmICsgJ0Zvcm1hdCddIHx8IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzW2ZdO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcblxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuXG4gIG1pbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtYXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcblxuICBpbml0aWFsVmlldzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihWSUVXX09QVElPTlMpLFxuXG4gIGZpbmFsVmlldzogZnVuY3Rpb24gZmluYWxWaWV3KHByb3BzLCBwcm9wbmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBlcnIgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFZJRVdfT1BUSU9OUykocHJvcHMsIHByb3BuYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGlmIChlcnIpIHJldHVybiBlcnI7XG4gICAgaWYgKFZJRVdfT1BUSU9OUy5pbmRleE9mKHByb3BzW3Byb3BuYW1lXSkgPCBWSUVXX09QVElPTlMuaW5kZXhPZihwcm9wcy5pbml0aWFsVmlldykpIHJldHVybiBuZXcgRXJyb3IoKCdUaGUgYCcgKyBwcm9wbmFtZSArICdgIHByb3A6IGAnICsgcHJvcHNbcHJvcG5hbWVdICsgJ2AgY2Fubm90IGJlIFxcJ2xvd2VyXFwnIHRoYW4gdGhlIGBpbml0aWFsVmlld2BcXG4gICAgICAgIHByb3AuIFRoaXMgY3JlYXRlcyBhIHJhbmdlIHRoYXQgY2Fubm90IGJlIHJlbmRlcmVkLicpLnJlcGxhY2UoL1xcblxcdC9nLCAnJykpO1xuICB9LFxuXG4gIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnZGlzYWJsZWQnXSldKSxcblxuICByZWFkT25seTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3JlYWRPbmx5J10pXSksXG5cbiAgY3VsdHVyZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgZm9vdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgZGF5Q29tcG9uZW50OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcbiAgaGVhZGVyRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBmb290ZXJGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG5cbiAgZGF5Rm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBkYXRlRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBtb250aEZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgeWVhckZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgZGVjYWRlRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBjZW50dXJ5Rm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuXG4gIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb3ZlQmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92ZUZvcndhcmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG52YXIgQ2FsZW5kYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnQ2FsZW5kYXInLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmluUmFuZ2VWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgdmlldzogdGhpcy5wcm9wcy5pbml0aWFsVmlldyB8fCAnbW9udGgnLFxuICAgICAgY3VycmVudERhdGU6IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogdGhpcy5pblJhbmdlVmFsdWUobmV3IERhdGUoKSlcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgbWluOiBuZXcgRGF0ZSgxOTAwLCAwLCAxKSxcbiAgICAgIG1heDogbmV3IERhdGUoMjA5OSwgMTEsIDMxKSxcblxuICAgICAgaW5pdGlhbFZpZXc6ICdtb250aCcsXG4gICAgICBmaW5hbFZpZXc6ICdjZW50dXJ5JyxcblxuICAgICAgdGFiSW5kZXg6ICcwJyxcbiAgICAgIGZvb3RlcjogZmFsc2UsXG5cbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnY2FsZW5kYXInLFxuICAgICAgbWVzc2FnZXM6IG1zZ3Moe30pXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBib3R0b20gPSBWSUVXX09QVElPTlMuaW5kZXhPZihuZXh0UHJvcHMuaW5pdGlhbFZpZXcpLFxuICAgICAgICB0b3AgPSBWSUVXX09QVElPTlMuaW5kZXhPZihuZXh0UHJvcHMuZmluYWxWaWV3KSxcbiAgICAgICAgY3VycmVudCA9IFZJRVdfT1BUSU9OUy5pbmRleE9mKHRoaXMuc3RhdGUudmlldyksXG4gICAgICAgIHZpZXcgPSB0aGlzLnN0YXRlLnZpZXcsXG4gICAgICAgIHZhbCA9IHRoaXMuaW5SYW5nZVZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG5cbiAgICBpZiAoY3VycmVudCA8IGJvdHRvbSkgdGhpcy5zZXRTdGF0ZSh7IHZpZXc6IHZpZXcgPSBuZXh0UHJvcHMuaW5pdGlhbFZpZXcgfSk7ZWxzZSBpZiAoY3VycmVudCA+IHRvcCkgdGhpcy5zZXRTdGF0ZSh7IHZpZXc6IHZpZXcgPSBuZXh0UHJvcHMuZmluYWxWaWV3IH0pO1xuXG4gICAgLy9pZiB0aGUgdmFsdWUgY2hhbmdlcyByZXNldCB2aWV3cyB0byB0aGUgbmV3IG9uZVxuICAgIGlmICghX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcSh2YWwsIGRhdGVPck51bGwodGhpcy5wcm9wcy52YWx1ZSksIFZJRVdfVU5JVFt2aWV3XSkpIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudERhdGU6IHZhbCA/IG5ldyBEYXRlKHZhbCkgOiBuZXcgRGF0ZSgpXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgZm9vdGVyRm9ybWF0ID0gX3Byb3BzLmZvb3RlckZvcm1hdDtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgdmFyIHJlYWRPbmx5ID0gX3Byb3BzLnJlYWRPbmx5O1xuICAgIHZhciBmaW5hbFZpZXcgPSBfcHJvcHMuZmluYWxWaWV3O1xuICAgIHZhciBmb290ZXIgPSBfcHJvcHMuZm9vdGVyO1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgbWluID0gX3Byb3BzLm1pbjtcbiAgICB2YXIgbWF4ID0gX3Byb3BzLm1heDtcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wcy5jdWx0dXJlO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgdmlldyA9IF9zdGF0ZS52aWV3O1xuICAgIHZhciBjdXJyZW50RGF0ZSA9IF9zdGF0ZS5jdXJyZW50RGF0ZTtcbiAgICB2YXIgc2xpZGVEaXJlY3Rpb24gPSBfc3RhdGUuc2xpZGVEaXJlY3Rpb247XG4gICAgdmFyIGZvY3VzZWQgPSBfc3RhdGUuZm9jdXNlZDtcblxuICAgIHZhciBWaWV3ID0gVklFV1t2aWV3XSxcbiAgICAgICAgdW5pdCA9IFZJRVdfVU5JVFt2aWV3XSxcbiAgICAgICAgdG9kYXlzRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIHRvZGF5Tm90SW5SYW5nZSA9ICFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UodG9kYXlzRGF0ZSwgbWluLCBtYXgsIHZpZXcpO1xuXG4gICAgdW5pdCA9IHVuaXQgPT09ICdkYXknID8gJ2RhdGUnIDogdW5pdDtcblxuICAgIHZhciB2aWV3SUQgPSB0aGlzLl9pZCgnX2NhbGVuZGFyJyksXG4gICAgICAgIGxhYmVsSUQgPSB0aGlzLl9pZCgnX2NhbGVuZGFyX2xhYmVsJyksXG4gICAgICAgIGtleSA9IHZpZXcgKyAnXycgKyBfdXRpbERhdGVzMlsnZGVmYXVsdCddW3ZpZXddKGN1cnJlbnREYXRlKTtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBfdXRpbF8yWydkZWZhdWx0J10ub21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKSxcbiAgICAgICAgdmlld1Byb3BzID0gX3V0aWxfMlsnZGVmYXVsdCddLnBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoX3V0aWxDb21wYXQyWydkZWZhdWx0J10udHlwZShWaWV3KS5wcm9wVHlwZXMpKTtcblxuICAgIHZhciBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgcmVhZE9ubHk7XG5cbiAgICBtZXNzYWdlcyA9IG1zZ3ModGhpcy5wcm9wcy5tZXNzYWdlcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJvbGU6ICdncm91cCcsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fa2V5RG93bixcbiAgICAgICAgb25Gb2N1czogdGhpcy5fZm9jdXMuYmluZChudWxsLCB0cnVlKSxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LWNhbGVuZGFyJywgJ3J3LXdpZGdldCcsIHtcbiAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBmb2N1c2VkLFxuICAgICAgICAgICdydy1zdGF0ZS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICdydy1zdGF0ZS1yZWFkb25seSc6IHJlYWRPbmx5LFxuICAgICAgICAgICdydy1ydGwnOiB0aGlzLmlzUnRsKClcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0hlYWRlcjJbJ2RlZmF1bHQnXSwge1xuICAgICAgICBsYWJlbDogdGhpcy5fbGFiZWwoKSxcbiAgICAgICAgbGFiZWxJZDogbGFiZWxJRCxcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICB1cERpc2FibGVkOiBpc0Rpc2FibGVkIHx8IHZpZXcgPT09IGZpbmFsVmlldyxcbiAgICAgICAgcHJldkRpc2FibGVkOiBpc0Rpc2FibGVkIHx8ICFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UodGhpcy5uZXh0RGF0ZShkaXIuTEVGVCksIG1pbiwgbWF4LCB2aWV3KSxcbiAgICAgICAgbmV4dERpc2FibGVkOiBpc0Rpc2FibGVkIHx8ICFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UodGhpcy5uZXh0RGF0ZShkaXIuUklHSFQpLCBtaW4sIG1heCwgdmlldyksXG4gICAgICAgIG9uVmlld0NoYW5nZTogdGhpcy5uYXZpZ2F0ZS5iaW5kKG51bGwsIGRpci5VUCwgbnVsbCksXG4gICAgICAgIG9uTW92ZUxlZnQ6IHRoaXMubmF2aWdhdGUuYmluZChudWxsLCBkaXIuTEVGVCwgbnVsbCksXG4gICAgICAgIG9uTW92ZVJpZ2h0OiB0aGlzLm5hdmlnYXRlLmJpbmQobnVsbCwgZGlyLlJJR0hULCBudWxsKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1NsaWRlVHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogJ2FuaW1hdGlvbicsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24sXG4gICAgICAgICAgb25BbmltYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZm9jdXModHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChWaWV3LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHZpZXdQcm9wcywge1xuICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGlkOiB2aWV3SUQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAncnctY2FsZW5kYXItZ3JpZCcsXG4gICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSUQsXG4gICAgICAgICAgdG9kYXk6IHRvZGF5c0RhdGUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGZvY3VzZWQ6IGN1cnJlbnREYXRlLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLmNoYW5nZSksXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLl9rZXlEb3duLFxuICAgICAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnY2FsZW5kYXJWaWV3J1xuICAgICAgICB9KSlcbiAgICAgICksXG4gICAgICBmb290ZXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0Zvb3RlcjJbJ2RlZmF1bHQnXSwge1xuICAgICAgICB2YWx1ZTogdG9kYXlzRGF0ZSxcbiAgICAgICAgZm9ybWF0OiBmb290ZXJGb3JtYXQsXG4gICAgICAgIGN1bHR1cmU6IGN1bHR1cmUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCB0b2RheU5vdEluUmFuZ2UsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICAgICAgb25DbGljazogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5zZWxlY3QpXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgbmF2aWdhdGU6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChkaXJlY3Rpb24sIGRhdGUpIHtcbiAgICB2YXIgdmlldyA9IHRoaXMuc3RhdGUudmlldyxcbiAgICAgICAgc2xpZGVEaXIgPSBkaXJlY3Rpb24gPT09IGRpci5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gZGlyLlVQID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICAgIGlmICghZGF0ZSkgZGF0ZSA9IFtkaXIuTEVGVCwgZGlyLlJJR0hUXS5pbmRleE9mKGRpcmVjdGlvbikgIT09IC0xID8gdGhpcy5uZXh0RGF0ZShkaXJlY3Rpb24pIDogdGhpcy5zdGF0ZS5jdXJyZW50RGF0ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IGRpci5ET1dOKSB2aWV3ID0gQUxUX1ZJRVdbdmlld10gfHwgdmlldztcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IGRpci5VUCkgdmlldyA9IE5FWFRfVklFV1t2aWV3XSB8fCB2aWV3O1xuXG4gICAgaWYgKHRoaXMuaXNWYWxpZFZpZXcodmlldykgJiYgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5pblJhbmdlKGRhdGUsIHRoaXMucHJvcHMubWluLCB0aGlzLnByb3BzLm1heCwgdmlldykpIHtcbiAgICAgIHRoaXMubm90aWZ5KCdvbk5hdmlnYXRlJywgW2RhdGUsIHNsaWRlRGlyLCB2aWV3XSk7XG4gICAgICB0aGlzLmZvY3VzKHRydWUpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudERhdGU6IGRhdGUsXG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcixcbiAgICAgICAgdmlldzogdmlld1xuICAgICAgfSk7XG4gICAgfVxuICB9KSxcblxuICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCt0aGlzLnByb3BzLnRhYkluZGV4ID4gLTEpIF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLmZvY3VzKCk7XG4gIH0sXG5cbiAgX2ZvY3VzOiBfdXRpbF8yWydkZWZhdWx0J10uaWZOb3REaXNhYmxlZCh0cnVlLCBmdW5jdGlvbiAoZm9jdXNlZCwgZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCt0aGlzLnByb3BzLnRhYkluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c2VkICE9PSBfdGhpczIuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICBfdGhpczIubm90aWZ5KGZvY3VzZWQgPyAnb25Gb2N1cycgOiAnb25CbHVyJywgZSk7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLFxuXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52aWV3ID09PSB0aGlzLnByb3BzLmluaXRpYWxWaWV3KSB7XG4gICAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBkYXRlKTtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5hdmlnYXRlKGRpci5ET1dOLCBkYXRlKTtcbiAgfSxcblxuICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChkYXRlKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLnByb3BzLmluaXRpYWxWaWV3LFxuICAgICAgICBzbGlkZURpciA9IHZpZXcgIT09IHRoaXMuc3RhdGUudmlldyB8fCBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmd0KGRhdGUsIHRoaXMuc3RhdGUuY3VycmVudERhdGUpID8gJ2xlZnQnIC8vIG1vdmUgZG93biB0byBhIHRoZSB2aWV3XG4gICAgOiAncmlnaHQnO1xuXG4gICAgdGhpcy5ub3RpZnkoJ29uQ2hhbmdlJywgZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5pc1ZhbGlkVmlldyh2aWV3KSAmJiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UoZGF0ZSwgdGhpcy5wcm9wcy5taW4sIHRoaXMucHJvcHMubWF4LCB2aWV3KSkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudERhdGU6IGRhdGUsXG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcixcbiAgICAgICAgdmlldzogdmlld1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIG5leHREYXRlOiBmdW5jdGlvbiBuZXh0RGF0ZShkaXJlY3Rpb24pIHtcbiAgICB2YXIgbWV0aG9kID0gZGlyZWN0aW9uID09PSBkaXIuTEVGVCA/ICdzdWJ0cmFjdCcgOiAnYWRkJyxcbiAgICAgICAgdmlldyA9IHRoaXMuc3RhdGUudmlldyxcbiAgICAgICAgdW5pdCA9IHZpZXcgPT09IHZpZXdzLk1PTlRIID8gdmlldyA6IHZpZXdzLllFQVIsXG4gICAgICAgIG11bHRpID0gTVVMVElQTElFUlt2aWV3XSB8fCAxO1xuXG4gICAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J11bbWV0aG9kXSh0aGlzLnN0YXRlLmN1cnJlbnREYXRlLCAxICogbXVsdGksIHVuaXQpO1xuICB9LFxuXG4gIF9rZXlEb3duOiBfdXRpbF8yWydkZWZhdWx0J10uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjdHJsID0gZS5jdHJsS2V5LFxuICAgICAgICBrZXkgPSBlLmtleSxcbiAgICAgICAgZGlyZWN0aW9uID0gQVJST1dTX1RPX0RJUkVDVElPTltrZXldLFxuICAgICAgICBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50RGF0ZSxcbiAgICAgICAgdmlldyA9IHRoaXMuc3RhdGUudmlldyxcbiAgICAgICAgdW5pdCA9IFZJRVdfVU5JVFt2aWV3XSxcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50O1xuXG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKGN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShkaXJlY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdGwoKSAmJiBPUFBPU0lURV9ESVJFQ1RJT05bZGlyZWN0aW9uXSkgZGlyZWN0aW9uID0gT1BQT1NJVEVfRElSRUNUSU9OW2RpcmVjdGlvbl07XG5cbiAgICAgICAgY3VycmVudERhdGUgPSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLm1vdmUoY3VycmVudERhdGUsIHRoaXMucHJvcHMubWluLCB0aGlzLnByb3BzLm1heCwgdmlldywgZGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uZXEoY3VycmVudCwgY3VycmVudERhdGUsIHVuaXQpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZ3QoY3VycmVudERhdGUsIGN1cnJlbnQsIHZpZXcpKSB0aGlzLm5hdmlnYXRlKGRpci5SSUdIVCwgY3VycmVudERhdGUpO2Vsc2UgaWYgKF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubHQoY3VycmVudERhdGUsIGN1cnJlbnQsIHZpZXcpKSB0aGlzLm5hdmlnYXRlKGRpci5MRUZULCBjdXJyZW50RGF0ZSk7ZWxzZSB0aGlzLnNldFN0YXRlKHsgY3VycmVudERhdGU6IGN1cnJlbnREYXRlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkoJ29uS2V5RG93bicsIFtlXSk7XG4gIH0pLFxuXG4gIF9sYWJlbDogZnVuY3Rpb24gX2xhYmVsKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wczIuY3VsdHVyZTtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjdWx0dXJlJ10pO1xuICAgIHZhciB2aWV3ID0gdGhpcy5zdGF0ZS52aWV3O1xuICAgIHZhciBkdCA9IHRoaXMuc3RhdGUuY3VycmVudERhdGU7XG5cbiAgICBpZiAodmlldyA9PT0gJ21vbnRoJykgcmV0dXJuIGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZHQsIGZvcm1hdChwcm9wcywgJ2hlYWRlcicpLCBjdWx0dXJlKTtlbHNlIGlmICh2aWV3ID09PSAneWVhcicpIHJldHVybiBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KGR0LCBmb3JtYXQocHJvcHMsICd5ZWFyJyksIGN1bHR1cmUpO2Vsc2UgaWYgKHZpZXcgPT09ICdkZWNhZGUnKSByZXR1cm4gbG9jYWxpemVycy5kYXRlLmZvcm1hdChfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YoZHQsICdkZWNhZGUnKSwgZm9ybWF0KHByb3BzLCAnZGVjYWRlJyksIGN1bHR1cmUpO2Vsc2UgaWYgKHZpZXcgPT09ICdjZW50dXJ5JykgcmV0dXJuIGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5zdGFydE9mKGR0LCAnY2VudHVyeScpLCBmb3JtYXQocHJvcHMsICdjZW50dXJ5JyksIGN1bHR1cmUpO1xuICB9LFxuXG4gIGluUmFuZ2VWYWx1ZTogZnVuY3Rpb24gaW5SYW5nZVZhbHVlKF92YWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IGRhdGVPck51bGwoX3ZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWF4KF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWluKHZhbHVlLCB0aGlzLnByb3BzLm1heCksIHRoaXMucHJvcHMubWluKTtcbiAgfSxcblxuICBpc1ZhbGlkVmlldzogZnVuY3Rpb24gaXNWYWxpZFZpZXcobmV4dCkge1xuICAgIHZhciBib3R0b20gPSBWSUVXX09QVElPTlMuaW5kZXhPZih0aGlzLnByb3BzLmluaXRpYWxWaWV3KSxcbiAgICAgICAgdG9wID0gVklFV19PUFRJT05TLmluZGV4T2YodGhpcy5wcm9wcy5maW5hbFZpZXcpLFxuICAgICAgICBjdXJyZW50ID0gVklFV19PUFRJT05TLmluZGV4T2YobmV4dCk7XG5cbiAgICByZXR1cm4gY3VycmVudCA+PSBib3R0b20gJiYgY3VycmVudCA8PSB0b3A7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkYXRlT3JOdWxsKGR0KSB7XG4gIGlmIChkdCAmJiAhaXNOYU4oZHQuZ2V0VGltZSgpKSkgcmV0dXJuIGR0O1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbXNncyhtc2dzKSB7XG4gIHJldHVybiBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe1xuICAgIG1vdmVCYWNrOiAnbmF2aWdhdGUgYmFjaycsXG4gICAgbW92ZUZvcndhcmQ6ICduYXZpZ2F0ZSBmb3J3YXJkJyB9LCBtc2dzKTtcbn1cblxudmFyIFVuY29udHJvbGxlZENhbGVuZGFyID0gKDAsIF91bmNvbnRyb2xsYWJsZTJbJ2RlZmF1bHQnXSkoQ2FsZW5kYXIsIHsgdmFsdWU6ICdvbkNoYW5nZScgfSk7XG5cblVuY29udHJvbGxlZENhbGVuZGFyLkJhc2VDYWxlbmRhciA9IENhbGVuZGFyO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVbmNvbnRyb2xsZWRDYWxlbmRhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy9jb25zb2xlLmxvZyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsRGF0ZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0ZXMnKTtcblxudmFyIF91dGlsRGF0ZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbERhdGVzKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbmZpZ3VyYXRpb24pO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgbG9jYWxpemVycyA9IF91dGlsQ29uZmlndXJhdGlvbjJbJ2RlZmF1bHQnXS5sb2NhbGU7XG52YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5kZWNhZGVGb3JtYXQgfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHMuZGVjYWRlO1xufTtcblxudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiBpc0VxdWFsKGRhdGVBLCBkYXRlQikge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcShkYXRlQSwgZGF0ZUIsICdkZWNhZGUnKTtcbn07XG52YXIgb3B0aW9uSWQgPSBmdW5jdGlvbiBvcHRpb25JZChpZCwgZGF0ZSkge1xuICByZXR1cm4gJycgKyBpZCArICdfX2NlbnR1cnlfJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ueWVhcihkYXRlKTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIG9wdGlvbklEOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIGN1bHR1cmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtaW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWF4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG5cbiAgb25DaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWNhZGVGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXRcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdDZW50dXJ5VmlldycsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUHVyZVJlbmRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bENoaWxkQ29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgYWN0aXZlSWQgPSBvcHRpb25JZCh0aGlzLl9pZCgpLCB0aGlzLnByb3BzLmZvY3VzZWQpO1xuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoYWN0aXZlSWQpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIHllYXJzID0gZ2V0Q2VudHVyeURlY2FkZXMoZm9jdXNlZCk7XG4gICAgdmFyIHJvd3MgPSBfdXRpbF8yWydkZWZhdWx0J10uY2h1bmsoeWVhcnMsIDQpO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RhYmxlJyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJvbGU6ICdncmlkJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LW5hdi12aWV3JylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHJvd3MubWFwKHRoaXMuX3JvdylcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9yb3c6IGZ1bmN0aW9uIF9yb3cocm93LCByb3dJZHgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZDtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG4gICAgdmFyIHRvZGF5ID0gX3Byb3BzMi50b2RheTtcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wczIuY3VsdHVyZTtcbiAgICB2YXIgbWluID0gX3Byb3BzMi5taW47XG4gICAgdmFyIG1heCA9IF9wcm9wczIubWF4O1xuICAgIHZhciBpZCA9IHRoaXMuX2lkKCdfY2VudHVyeScpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RyJyxcbiAgICAgIHsga2V5OiAncm93XycgKyByb3dJZHgsIHJvbGU6ICdyb3cnIH0sXG4gICAgICByb3cubWFwKGZ1bmN0aW9uIChkYXRlLCBjb2xJZHgpIHtcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGlzRXF1YWwoZGF0ZSwgZm9jdXNlZCksXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gaXNFcXVhbChkYXRlLCB2YWx1ZSksXG4gICAgICAgICAgICBjdXJyZW50RGVjYWRlID0gaXNFcXVhbChkYXRlLCB0b2RheSksXG4gICAgICAgICAgICBsYWJlbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5zdGFydE9mKGRhdGUsICdkZWNhZGUnKSwgZm9ybWF0KF90aGlzLnByb3BzKSwgY3VsdHVyZSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJRCA9IG9wdGlvbklkKGlkLCBkYXRlKTtcblxuICAgICAgICByZXR1cm4gIWluUmFuZ2UoZGF0ZSwgbWluLCBtYXgpID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7IGtleTogY29sSWR4LCByb2xlOiAnZ3JpZGNlbGwnLCBjbGFzc05hbWU6ICdydy1lbXB0eS1jZWxsJyB9LFxuICAgICAgICAgICfCoCdcbiAgICAgICAgKSA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICd0ZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBjb2xJZHgsXG4gICAgICAgICAgICByb2xlOiAnZ3JpZGNlbGwnLFxuICAgICAgICAgICAgaWQ6IGN1cnJlbnRJRCxcbiAgICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IGRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGN1cnJlbnRJRCxcbiAgICAgICAgICAgICAgb25DbGljazogb25DaGFuZ2UuYmluZChudWxsLCBpblJhbmdlRGF0ZShkYXRlLCBtaW4sIG1heCkpLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWJ0bicsIHtcbiAgICAgICAgICAgICAgICAncnctb2ZmLXJhbmdlJzogIWluQ2VudHVyeShkYXRlLCBmb2N1c2VkKSxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgICAgICAgJ3J3LXN0YXRlLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAncnctbm93JzogY3VycmVudERlY2FkZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBpblJhbmdlRGF0ZShkZWNhZGUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLm1heChfdXRpbERhdGVzMlsnZGVmYXVsdCddLm1pbihkZWNhZGUsIG1heCksIG1pbik7XG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UoZGVjYWRlLCBtaW4sIG1heCkge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5ndGUoZGVjYWRlLCBfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YobWluLCAnZGVjYWRlJyksICd5ZWFyJykgJiYgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5sdGUoZGVjYWRlLCBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVuZE9mKG1heCwgJ2RlY2FkZScpLCAneWVhcicpO1xufVxuXG5mdW5jdGlvbiBpbkNlbnR1cnkoZGF0ZSwgc3RhcnQpIHtcbiAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZ3RlKGRhdGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uc3RhcnRPZihzdGFydCwgJ2NlbnR1cnknKSwgJ3llYXInKSAmJiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmx0ZShkYXRlLCBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVuZE9mKHN0YXJ0LCAnY2VudHVyeScpLCAneWVhcicpO1xufVxuXG5mdW5jdGlvbiBnZXRDZW50dXJ5RGVjYWRlcyhfZGF0ZSkge1xuICB2YXIgZGF5cyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSxcbiAgICAgIGRhdGUgPSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmFkZChfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YoX2RhdGUsICdjZW50dXJ5JyksIC0yMCwgJ3llYXInKTtcblxuICByZXR1cm4gZGF5cy5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkYXRlID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5hZGQoZGF0ZSwgMTAsICd5ZWFyJyk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBfdXRpbEZpbHRlciA9IHJlcXVpcmUoJy4vdXRpbC9maWx0ZXInKTtcblxudmFyIF91dGlsRmlsdGVyMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxGaWx0ZXIpO1xuXG52YXIgX1BvcHVwID0gcmVxdWlyZSgnLi9Qb3B1cCcpO1xuXG52YXIgX1BvcHVwMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcHVwKTtcblxudmFyIF9XaWRnZXRCdXR0b24gPSByZXF1aXJlKCcuL1dpZGdldEJ1dHRvbicpO1xuXG52YXIgX1dpZGdldEJ1dHRvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9XaWRnZXRCdXR0b24pO1xuXG52YXIgX0NvbWJvYm94SW5wdXQgPSByZXF1aXJlKCcuL0NvbWJvYm94SW5wdXQnKTtcblxudmFyIF9Db21ib2JveElucHV0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbWJvYm94SW5wdXQpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBfTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG52YXIgX0xpc3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdCk7XG5cbnZhciBfTGlzdEdyb3VwYWJsZSA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwYWJsZScpO1xuXG52YXIgX0xpc3RHcm91cGFibGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwYWJsZSk7XG5cbnZhciBfdXRpbFZhbGlkYXRlTGlzdEludGVyZmFjZSA9IHJlcXVpcmUoJy4vdXRpbC92YWxpZGF0ZUxpc3RJbnRlcmZhY2UnKTtcblxudmFyIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxWYWxpZGF0ZUxpc3RJbnRlcmZhY2UpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZSgndW5jb250cm9sbGFibGUnKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmNvbnRyb2xsYWJsZSk7XG5cbnZhciBkZWZhdWx0U3VnZ2VzdCA9IGZ1bmN0aW9uIGRlZmF1bHRTdWdnZXN0KGYpIHtcbiAgcmV0dXJuIGYgPT09IHRydWUgPyAnc3RhcnRzV2l0aCcgOiBmID8gZiA6ICdlcSc7XG59O1xuXG52YXIgb21pdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0O1xudmFyIHBpY2sgPSBfdXRpbF8yWydkZWZhdWx0J10ucGljaztcbnZhciByZXN1bHQgPSBfdXRpbF8yWydkZWZhdWx0J10ucmVzdWx0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvLy0tIGNvbnRyb2xsZWQgcHJvcHMgLS0tLS0tLS0tLS1cbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICBvcGVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIG9uVG9nZ2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXRlbUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gIGxpc3RDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gIGdyb3VwQ29tcG9uZW50OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcbiAgZ3JvdXBCeTogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uYWNjZXNzb3IsXG5cbiAgZGF0YTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hcnJheSxcbiAgdmFsdWVGaWVsZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRGaWVsZDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uYWNjZXNzb3IsXG4gIG5hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gIHJlYWRPbmx5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncmVhZE9ubHknXSldKSxcblxuICBzdWdnZXN0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5maWx0ZXIsXG4gIGZpbHRlcjogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZmlsdGVyLFxuXG4gIGJ1c3k6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICBkcm9wVXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgZHVyYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCAvL3BvcHVwXG5cbiAgcGxhY2Vob2xkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcGVuOiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5tZXNzYWdlLFxuICAgIGVtcHR5TGlzdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10ubWVzc2FnZSxcbiAgICBlbXB0eUZpbHRlcjogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10ubWVzc2FnZVxuICB9KVxufTtcblxudmFyIENvbWJvQm94ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0NvbWJvQm94JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvRGF0YUZpbHRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUG9wdXBTY3JvbGxUb01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoJ2lucHV0JyldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMucHJvY2Vzcyh0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMudmFsdWUpLFxuICAgICAgICBpZHggPSB0aGlzLl9kYXRhSW5kZXhPZihpdGVtcywgdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtc1tpZHhdLFxuICAgICAgZm9jdXNlZEl0ZW06IGl0ZW1zWyEgfmlkeCA/IDAgOiBpZHhdLFxuICAgICAgcHJvY2Vzc2VkRGF0YTogaXRlbXMsXG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzdWdnZXN0OiBmYWxzZSxcbiAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICBkZWxheTogNTAwLFxuXG4gICAgICBtZXNzYWdlczogbXNncygpLFxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdjb21ib2JveCdcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVmcy5saXN0ICYmICgwLCBfdXRpbFZhbGlkYXRlTGlzdEludGVyZmFjZTJbJ2RlZmF1bHQnXSkodGhpcy5yZWZzLmxpc3QpO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgdmFyIGlzU3VnZ2VzdGluZyA9IHRoaXMucmVmcy5pbnB1dCAmJiB0aGlzLnJlZnMuaW5wdXQuaXNTdWdnZXN0aW5nKCksXG4gICAgICAgIHN0YXRlQ2hhbmdlZCA9ICFfdXRpbF8yWydkZWZhdWx0J10uaXNTaGFsbG93RXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSxcbiAgICAgICAgdmFsdWVDaGFuZ2VkID0gIV91dGlsXzJbJ2RlZmF1bHQnXS5pc1NoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIGlzU3VnZ2VzdGluZyB8fCBzdGF0ZUNoYW5nZWQgfHwgdmFsdWVDaGFuZ2VkO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHJhd0lkeCA9IHRoaXMuX2RhdGFJbmRleE9mKG5leHRQcm9wcy5kYXRhLCBuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgICB2YWx1ZUl0ZW0gPSByYXdJZHggPT09IC0xID8gbmV4dFByb3BzLnZhbHVlIDogbmV4dFByb3BzLmRhdGFbcmF3SWR4XSxcbiAgICAgICAgaXNTdWdnZXN0aW5nID0gdGhpcy5yZWZzLmlucHV0LmlzU3VnZ2VzdGluZygpLFxuICAgICAgICBpdGVtcyA9IHRoaXMucHJvY2VzcyhuZXh0UHJvcHMuZGF0YSwgbmV4dFByb3BzLnZhbHVlLCAocmF3SWR4ID09PSAtMSB8fCBpc1N1Z2dlc3RpbmcpICYmIHRoaXMuX2RhdGFUZXh0KHZhbHVlSXRlbSkpLFxuICAgICAgICBpZHggPSB0aGlzLl9kYXRhSW5kZXhPZihpdGVtcywgbmV4dFByb3BzLnZhbHVlKSxcbiAgICAgICAgZm9jdXNlZCA9IHRoaXMuZmlsdGVySW5kZXhPZihpdGVtcywgdGhpcy5fZGF0YVRleHQodmFsdWVJdGVtKSk7XG5cbiAgICB0aGlzLl9zZWFyY2hUZXJtID0gJyc7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2Nlc3NlZERhdGE6IGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtc1tpZHhdLFxuICAgICAgZm9jdXNlZEl0ZW06IGl0ZW1zW2lkeCA9PT0gLTEgPyBmb2N1c2VkICE9PSAtMSA/IGZvY3VzZWQgOiAwIC8vIGZvY3VzIHRoZSBjbG9zZXN0IG1hdGNoXG4gICAgICA6IGlkeF1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2N4LFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdGFiSW5kZXggPSBfcHJvcHMudGFiSW5kZXg7XG4gICAgdmFyIGZpbHRlciA9IF9wcm9wcy5maWx0ZXI7XG4gICAgdmFyIHN1Z2dlc3QgPSBfcHJvcHMuc3VnZ2VzdDtcbiAgICB2YXIgZ3JvdXBCeSA9IF9wcm9wcy5ncm91cEJ5O1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBidXN5ID0gX3Byb3BzLmJ1c3k7XG4gICAgdmFyIGRyb3BVcCA9IF9wcm9wcy5kcm9wVXA7XG4gICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBvcGVuID0gX3Byb3BzLm9wZW47XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciByZWFkT25seSA9IF9wcm9wcy5yZWFkT25seTtcbiAgICB2YXIgTGlzdCA9IF9wcm9wcy5saXN0Q29tcG9uZW50O1xuXG4gICAgTGlzdCA9IExpc3QgfHwgZ3JvdXBCeSAmJiBfTGlzdEdyb3VwYWJsZTJbJ2RlZmF1bHQnXSB8fCBfTGlzdDJbJ2RlZmF1bHQnXTtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuICAgIHZhciBsaXN0UHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLnR5cGUoTGlzdCkucHJvcFR5cGVzKSk7XG4gICAgdmFyIHBvcHVwUHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLnR5cGUoX1BvcHVwMlsnZGVmYXVsdCddKS5wcm9wVHlwZXMpKTtcblxuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IF9zdGF0ZS5mb2N1c2VkSXRlbTtcbiAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3N0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB2YXIgZm9jdXNlZCA9IF9zdGF0ZS5mb2N1c2VkO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICB2YWx1ZUl0ZW0gPSB0aGlzLl9kYXRhSXRlbShkYXRhLCB2YWx1ZSkgLy8gdGFrZSB2YWx1ZSBmcm9tIHRoZSByYXcgZGF0YVxuICAgICxcbiAgICAgICAgaW5wdXRJRCA9IHRoaXMuX2lkKCdfaW5wdXQnKSxcbiAgICAgICAgbGlzdElEID0gdGhpcy5faWQoJ19saXN0Ym94JyksXG4gICAgICAgIGNvbXBsZXRlVHlwZSA9IHRoaXMucHJvcHMuc3VnZ2VzdCA/IHRoaXMucHJvcHMuZmlsdGVyID8gJ2JvdGgnIDogJ2lubGluZScgOiB0aGlzLnByb3BzLmZpbHRlciA/ICdsaXN0JyA6ICcnO1xuXG4gICAgdmFyIHNob3VsZFJlbmRlckxpc3QgPSBfdXRpbF8yWydkZWZhdWx0J10uaXNGaXJzdEZvY3VzZWRSZW5kZXIodGhpcykgfHwgb3BlbjtcblxuICAgIG1lc3NhZ2VzID0gbXNncyhtZXNzYWdlcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJlZjogJ2VsZW1lbnQnLFxuICAgICAgICBvbktleURvd246IHRoaXMuX2tleURvd24sXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksXG4gICAgICAgIG9uQmx1cjogdGhpcy5fZm9jdXMuYmluZChudWxsLCBmYWxzZSksXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctY29tYm9ib3gnLCAncnctd2lkZ2V0JywgKF9jeCA9IHt9LCBfY3hbJ3J3LXN0YXRlLWZvY3VzJ10gPSBmb2N1c2VkLCBfY3hbJ3J3LXN0YXRlLWRpc2FibGVkJ10gPSBkaXNhYmxlZCwgX2N4Wydydy1zdGF0ZS1yZWFkb25seSddID0gcmVhZE9ubHksIF9jeFsncnctcnRsJ10gPSB0aGlzLmlzUnRsKCksIF9jeFsncnctb3BlbicgKyAoZHJvcFVwID8gJy11cCcgOiAnJyldID0gb3BlbiwgX2N4KSlcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9XaWRnZXRCdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdydy1zZWxlY3QnLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMudG9nZ2xlLFxuICAgICAgICAgIGRpc2FibGVkOiAhISh0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMucHJvcHMucmVhZE9ubHkpXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdpJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgncnctaSBydy1pLWNhcmV0LWRvd24nLCB7ICdydy1sb2FkaW5nJzogYnVzeSB9KSB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zcicgfSxcbiAgICAgICAgICAgIF91dGlsXzJbJ2RlZmF1bHQnXS5yZXN1bHQobWVzc2FnZXMub3BlbiwgdGhpcy5wcm9wcylcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQ29tYm9ib3hJbnB1dDJbJ2RlZmF1bHQnXSwge1xuICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgIGlkOiBpbnB1dElELFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIHN1Z2dlc3Q6IHN1Z2dlc3QsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLW93bnMnOiBsaXN0SUQsXG4gICAgICAgICdhcmlhLWJ1c3knOiAhIWJ1c3ksXG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6IGNvbXBsZXRlVHlwZSxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBvcGVuLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIGNsYXNzTmFtZTogJ3J3LWlucHV0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuX2RhdGFUZXh0KHZhbHVlSXRlbSksXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLl9pbnB1dFR5cGluZyxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLl9pbnB1dEtleURvd25cbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3B1cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwb3B1cFByb3BzLCB7XG4gICAgICAgICAgb25PcGVuaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVmcy5saXN0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzaG91bGRSZW5kZXJMaXN0ICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KExpc3QsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7IHJlZjogJ2xpc3QnXG4gICAgICAgICAgfSwgbGlzdFByb3BzLCB7XG4gICAgICAgICAgICBpZDogbGlzdElELFxuICAgICAgICAgICAgZGF0YTogaXRlbXMsXG4gICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgZm9jdXNlZDogZm9jdXNlZEl0ZW0sXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhb3BlbixcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBpbnB1dElELFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IG9wZW4gJiYgJ3BvbGl0ZScsXG4gICAgICAgICAgICBvblNlbGVjdDogdGhpcy5fb25TZWxlY3QsXG4gICAgICAgICAgICBvbk1vdmU6IHRoaXMuX3Njcm9sbFRvLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgZW1wdHlMaXN0OiBkYXRhLmxlbmd0aCA/IG1lc3NhZ2VzLmVtcHR5RmlsdGVyIDogbWVzc2FnZXMuZW1wdHlMaXN0XG4gICAgICAgICAgICB9IH0pKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBfb25TZWxlY3Q6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMubm90aWZ5KCdvblNlbGVjdCcsIGRhdGEpO1xuICAgIHRoaXMuY2hhbmdlKGRhdGEpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfSksXG5cbiAgX2lucHV0S2V5RG93bjogZnVuY3Rpb24gX2lucHV0S2V5RG93bihlKSB7XG4gICAgdGhpcy5fZGVsZXRpbmcgPSBlLmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZS5rZXkgPT09ICdEZWxldGUnO1xuICAgIHRoaXMuX2lzVHlwaW5nID0gdHJ1ZTtcbiAgfSxcblxuICBfaW5wdXRUeXBpbmc6IGZ1bmN0aW9uIF9pbnB1dFR5cGluZyhlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHNob3VsZFN1Z2dlc3QgPSAhIXRoaXMucHJvcHMuc3VnZ2VzdCxcbiAgICAgICAgc3RyVmFsID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgIHN1Z2dlc3Rpb24sXG4gICAgICAgIGRhdGE7XG5cbiAgICBzdWdnZXN0aW9uID0gdGhpcy5fZGVsZXRpbmcgfHwgIXNob3VsZFN1Z2dlc3QgPyBzdHJWYWwgOiB0aGlzLnN1Z2dlc3QodGhpcy5fZGF0YSgpLCBzdHJWYWwpO1xuXG4gICAgc3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb24gfHwgc3RyVmFsO1xuXG4gICAgZGF0YSA9IF91dGlsXzJbJ2RlZmF1bHQnXS5maW5kKHNlbGYucHJvcHMuZGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczIuX2RhdGFUZXh0KGl0ZW0pLnRvTG93ZXJDYXNlKCkgPT09IHN1Z2dlc3Rpb24udG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hhbmdlKCF0aGlzLl9kZWxldGluZyAmJiBkYXRhID8gZGF0YSA6IHN0clZhbCwgdHJ1ZSk7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfSxcblxuICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gIH0sXG5cbiAgX2ZvY3VzOiBfdXRpbF8yWydkZWZhdWx0J10uaWZOb3REaXNhYmxlZCh0cnVlLCBmdW5jdGlvbiAoZm9jdXNlZCwgZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgIWZvY3VzZWQgJiYgdGhpcy5yZWZzLmlucHV0LmFjY2VwdCgpOyAvL25vdCBzdWdnZXN0aW5nIGFueW1vcmVcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGlmICghZm9jdXNlZCkgX3RoaXMzLmNsb3NlKCk7XG5cbiAgICAgIGlmIChmb2N1c2VkICE9PSBfdGhpczMuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICBfdGhpczMubm90aWZ5KGZvY3VzZWQgPyAnb25Gb2N1cycgOiAnb25CbHVyJywgZSk7XG4gICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLFxuXG4gIF9rZXlEb3duOiBfdXRpbF8yWydkZWZhdWx0J10uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAga2V5ID0gZS5rZXksXG4gICAgICAgIGFsdCA9IGUuYWx0S2V5LFxuICAgICAgICBsaXN0ID0gdGhpcy5yZWZzLmxpc3QsXG4gICAgICAgIGZvY3VzZWRJdGVtID0gdGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIGlzT3BlbiA9IHRoaXMucHJvcHMub3BlbjtcblxuICAgIGlmIChrZXkgPT09ICdFbmQnKSBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QubGFzdCgpIH0pO2Vsc2Ugc2VsZWN0KGxpc3QubGFzdCgpLCB0cnVlKTtlbHNlIGlmIChrZXkgPT09ICdIb21lJykgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LmZpcnN0KCkgfSk7ZWxzZSBzZWxlY3QobGlzdC5maXJzdCgpLCB0cnVlKTtlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnICYmIGlzT3BlbikgdGhpcy5jbG9zZSgpO2Vsc2UgaWYgKGtleSA9PT0gJ0VudGVyJyAmJiBpc09wZW4pIHtcbiAgICAgIHNlbGVjdCh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGlmIChhbHQpIHRoaXMub3BlbigpO2Vsc2Uge1xuICAgICAgICBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QubmV4dChmb2N1c2VkSXRlbSkgfSk7ZWxzZSBzZWxlY3QobGlzdC5uZXh0KHNlbGVjdGVkSXRlbSksIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGlmIChhbHQpIHRoaXMuY2xvc2UoKTtlbHNlIHtcbiAgICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LnByZXYoZm9jdXNlZEl0ZW0pIH0pO2Vsc2Ugc2VsZWN0KGxpc3QucHJldihzZWxlY3RlZEl0ZW0pLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeSgnb25LZXlEb3duJywgW2VdKTtcblxuICAgIGZ1bmN0aW9uIHNlbGVjdChpdGVtLCBmcm9tTGlzdCkge1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm4gc2VsZi5jaGFuZ2UoX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUoc2VsZi5yZWZzLmlucHV0KS52YWx1ZSwgZmFsc2UpO1xuXG4gICAgICBzZWxmLnJlZnMuaW5wdXQuYWNjZXB0KHRydWUpOyAvL3JlbW92ZXMgY2FyZXRcblxuICAgICAgaWYgKGZyb21MaXN0KSByZXR1cm4gc2VsZi5fb25TZWxlY3QoaXRlbSk7XG5cbiAgICAgIHNlbGYuY2hhbmdlKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pLFxuXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGRhdGEsIHR5cGluZykge1xuICAgIHRoaXMuX3R5cGVkQ2hhbmdlID0gISF0eXBpbmc7XG4gICAgdGhpcy5ub3RpZnkoJ29uQ2hhbmdlJywgZGF0YSk7XG4gIH0sXG5cbiAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMub3BlbikgdGhpcy5ub3RpZnkoJ29uVG9nZ2xlJywgdHJ1ZSk7XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIGZhbHNlKTtcbiAgfSxcblxuICB0b2dnbGU6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICB0aGlzLnByb3BzLm9wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfSksXG5cbiAgc3VnZ2VzdDogZnVuY3Rpb24gc3VnZ2VzdChkYXRhLCB2YWx1ZSkge1xuICAgIHZhciB3b3JkID0gdGhpcy5fZGF0YVRleHQodmFsdWUpLFxuICAgICAgICBzdWdnZXN0ID0gZGVmYXVsdFN1Z2dlc3QodGhpcy5wcm9wcy5zdWdnZXN0KSxcbiAgICAgICAgc3VnZ2VzdGlvbjtcblxuICAgIGlmICghKHdvcmQgfHwgJycpLnRyaW0oKSB8fCB3b3JkLmxlbmd0aCA8ICh0aGlzLnByb3BzLm1pbkxlbmd0aCB8fCAxKSkgcmV0dXJuICcnO1xuXG4gICAgc3VnZ2VzdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBfdXRpbF8yWydkZWZhdWx0J10uZmluZChkYXRhLCBnZXRGaWx0ZXIoc3VnZ2VzdCwgd29yZCwgdGhpcykpIDogdmFsdWU7XG5cbiAgICBpZiAoc3VnZ2VzdGlvbiAmJiAoIXRoaXMuc3RhdGUgfHwgIXRoaXMuc3RhdGUuZGVsZXRpbmcpKSByZXR1cm4gdGhpcy5fZGF0YVRleHQoc3VnZ2VzdGlvbik7XG5cbiAgICByZXR1cm4gJyc7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnByb2Nlc3NlZERhdGE7XG4gIH0sXG5cbiAgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcyhkYXRhLCB2YWx1ZXMsIHNlYXJjaFRlcm0pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgc2VhcmNoVGVybSkgZGF0YSA9IHRoaXMuZmlsdGVyKGRhdGEsIHNlYXJjaFRlcm0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtc2dzKG1zZ3MpIHtcbiAgcmV0dXJuIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7XG4gICAgb3BlbjogJ29wZW4gY29tYm9ib3gnLFxuICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnLFxuICAgIGVtcHR5RmlsdGVyOiAnVGhlIGZpbHRlciByZXR1cm5lZCBubyByZXN1bHRzJyB9LCBtc2dzKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVyKHN1Z2dlc3QsIHdvcmQsIGN0eCkge1xuICByZXR1cm4gdHlwZW9mIHN1Z2dlc3QgPT09ICdzdHJpbmcnID8gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gX3V0aWxGaWx0ZXIyWydkZWZhdWx0J11bc3VnZ2VzdF0oY3R4Ll9kYXRhVGV4dChpdGVtKS50b0xvd2VyQ2FzZSgpLCB3b3JkLnRvTG93ZXJDYXNlKCkpO1xuICB9IDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gc3VnZ2VzdChpdGVtLCB3b3JkKTtcbiAgfTtcbn1cblxudmFyIFVuY29udHJvbGxlZENvbWJvQm94ID0gKDAsIF91bmNvbnRyb2xsYWJsZTJbJ2RlZmF1bHQnXSkoQ29tYm9Cb3gsIHsgb3BlbjogJ29uVG9nZ2xlJywgdmFsdWU6ICdvbkNoYW5nZScgfSk7XG5cblVuY29udHJvbGxlZENvbWJvQm94LkJhc2VDb21ib0JveCA9IENvbWJvQm94O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVbmNvbnRyb2xsZWRDb21ib0JveDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxDYXJldCA9IHJlcXVpcmUoJy4vdXRpbC9jYXJldCcpO1xuXG52YXIgX3V0aWxDYXJldDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ2FyZXQpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0NvbWJvYm94SW5wdXQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgaW5wdXQgPSBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgdmFsID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuICAgIGlmICh0aGlzLmlzU3VnZ2VzdGluZygpKSB7XG4gICAgICB2YXIgc3RhcnQgPSB2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuX2xhc3QudG9Mb3dlckNhc2UoKSkgKyB0aGlzLl9sYXN0Lmxlbmd0aCxcbiAgICAgICAgICBlbmQgPSB2YWwubGVuZ3RoIC0gc3RhcnQ7XG5cbiAgICAgIGlmIChzdGFydCA+PSAwKSB7XG4gICAgICAgICgwLCBfdXRpbENhcmV0MlsnZGVmYXVsdCddKShpbnB1dCwgc3RhcnQsIHN0YXJ0ICsgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSArICcgcnctaW5wdXQnLFxuICAgICAgb25LZXlEb3duOiB0aGlzLnByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLl9jaGFuZ2UsXG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSA9PSBudWxsID8gJycgOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfSkpO1xuICB9LFxuXG4gIGlzU3VnZ2VzdGluZzogZnVuY3Rpb24gaXNTdWdnZXN0aW5nKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgICBpc1N1Z2dlc3Rpb24gPSB0aGlzLl9sYXN0ICE9IG51bGwgJiYgdmFsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLl9sYXN0LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLnN1Z2dlc3QgJiYgaXNTdWdnZXN0aW9uO1xuICB9LFxuXG4gIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KHJlbW92ZUNhcmV0KSB7XG4gICAgdmFyIHZhbCA9IF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlIHx8ICcnLFxuICAgICAgICBlbmQgPSB2YWwubGVuZ3RoO1xuXG4gICAgdGhpcy5fbGFzdCA9IG51bGw7XG4gICAgcmVtb3ZlQ2FyZXQgJiYgKDAsIF91dGlsQ2FyZXQyWydkZWZhdWx0J10pKF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBlbmQsIGVuZCk7XG4gIH0sXG5cbiAgX2NoYW5nZTogZnVuY3Rpb24gX2NoYW5nZShlKSB7XG4gICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICBwbCA9ICEhdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcblxuICAgIC8vIElFIGZpcmVzIGlucHV0IGV2ZW50cyB3aGVuIHNldHRpbmcvdW5zZXR0aW5nIHBsYWNlaG9sZGVycy5cbiAgICAvLyBpc3N1ZSAjMTEyXG4gICAgaWYgKHBsICYmICF2YWwgJiYgdmFsID09PSAodGhpcy5wcm9wcy52YWx1ZSB8fCAnJykpIHJldHVybjtcblxuICAgIHRoaXMuX2xhc3QgPSB2YWw7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWwpO1xuICB9LFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKS5mb2N1cygpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0JyksXG4gICAgbG9jYWxpemVycyA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJykubG9jYWxlLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdEYXRlUGlja2VySW5wdXQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZvcm1hdDogQ3VzdG9tUHJvcFR5cGVzLmRhdGVGb3JtYXQuaXNSZXF1aXJlZCxcbiAgICBlZGl0Rm9ybWF0OiBDdXN0b21Qcm9wVHlwZXMuZGF0ZUZvcm1hdCxcbiAgICBwYXJzZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdWx0dXJlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRWYWx1ZTogJydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHRleHQgPSBmb3JtYXREYXRlKG5leHRQcm9wcy52YWx1ZSwgbmV4dFByb3BzLmVkaXRpbmcgJiYgbmV4dFByb3BzLmVkaXRGb3JtYXQgPyBuZXh0UHJvcHMuZWRpdEZvcm1hdCA6IG5leHRQcm9wcy5mb3JtYXQsIG5leHRQcm9wcy5jdWx0dXJlKTtcblxuICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRleHQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHRWYWx1ZTogdGV4dFxuICAgIH0pO1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciB0ZXh0ID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLnZhbHVlLCB0aGlzLnByb3BzLmVkaXRpbmcgJiYgdGhpcy5wcm9wcy5lZGl0Rm9ybWF0ID8gdGhpcy5wcm9wcy5lZGl0Rm9ybWF0IDogdGhpcy5wcm9wcy5mb3JtYXQsIHRoaXMucHJvcHMuY3VsdHVyZSk7XG5cbiAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRWYWx1ZTogdGV4dFxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS50ZXh0VmFsdWU7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGNsYXNzTmFtZTogY3goeyAncnctaW5wdXQnOiB0cnVlIH0pLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLl9jaGFuZ2UsXG4gICAgICBvbkJsdXI6IGNoYWluKHRoaXMucHJvcHMuYmx1ciwgdGhpcy5fYmx1ciwgdGhpcykgfSkpO1xuICB9LFxuXG4gIF9jaGFuZ2U6IGZ1bmN0aW9uIF9jaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIHRoaXMuX25lZWRzRmx1c2ggPSB0cnVlO1xuICB9LFxuXG4gIF9ibHVyOiBmdW5jdGlvbiBfYmx1cihlKSB7XG4gICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICBkYXRlO1xuXG4gICAgaWYgKHRoaXMuX25lZWRzRmx1c2gpIHtcbiAgICAgIHRoaXMuX25lZWRzRmx1c2ggPSBmYWxzZTtcbiAgICAgIGRhdGUgPSB0aGlzLnByb3BzLnBhcnNlKHZhbCk7XG5cbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGF0ZSwgZm9ybWF0RGF0ZShkYXRlLCB0aGlzLnByb3BzLmZvcm1hdCwgdGhpcy5wcm9wcy5jdWx0dXJlKSk7XG4gICAgfVxuICB9LFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBjb21wYXQuZmluZERPTU5vZGUodGhpcykuZm9jdXMoKTtcbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gaXNWYWxpZChkKSB7XG4gIHJldHVybiAhaXNOYU4oZC5nZXRUaW1lKCkpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgY3VsdHVyZSkge1xuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlICYmIGlzVmFsaWQoZGF0ZSkpIHZhbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF0ZSwgZm9ybWF0LCBjdWx0dXJlKTtcblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjaGFpbihhLCBiLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYSAmJiBhLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgYiAmJiBiLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RMaWJJbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG5cbnZhciBfcmVhY3RMaWJJbnZhcmlhbnQyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RMaWJJbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0TGliR2V0QWN0aXZlRWxlbWVudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9nZXRBY3RpdmVFbGVtZW50Jyk7XG5cbnZhciBfcmVhY3RMaWJHZXRBY3RpdmVFbGVtZW50MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TGliR2V0QWN0aXZlRWxlbWVudCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG4vL3BpY2ssIG9taXQsIGhhc1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uZmlndXJhdGlvbik7XG5cbnZhciBfdXRpbENvbnN0YW50cyA9IHJlcXVpcmUoJy4vdXRpbC9jb25zdGFudHMnKTtcblxudmFyIF91dGlsQ29uc3RhbnRzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb25zdGFudHMpO1xuXG52YXIgX1BvcHVwID0gcmVxdWlyZSgnLi9Qb3B1cCcpO1xuXG52YXIgX1BvcHVwMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcHVwKTtcblxudmFyIF9DYWxlbmRhcjIgPSByZXF1aXJlKCcuL0NhbGVuZGFyJyk7XG5cbnZhciBfQ2FsZW5kYXIzID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FsZW5kYXIyKTtcblxudmFyIF9UaW1lTGlzdCA9IHJlcXVpcmUoJy4vVGltZUxpc3QnKTtcblxudmFyIF9UaW1lTGlzdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaW1lTGlzdCk7XG5cbnZhciBfRGF0ZUlucHV0ID0gcmVxdWlyZSgnLi9EYXRlSW5wdXQnKTtcblxudmFyIF9EYXRlSW5wdXQyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfRGF0ZUlucHV0KTtcblxudmFyIF9XaWRnZXRCdXR0b24gPSByZXF1aXJlKCcuL1dpZGdldEJ1dHRvbicpO1xuXG52YXIgX1dpZGdldEJ1dHRvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9XaWRnZXRCdXR0b24pO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyk7XG5cbnZhciBfdW5jb250cm9sbGFibGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5jb250cm9sbGFibGUpO1xuXG52YXIgdmlld3MgPSBfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5jYWxlbmRhclZpZXdzO1xudmFyIHBvcHVwcyA9IF91dGlsQ29uc3RhbnRzMlsnZGVmYXVsdCddLmRhdGVQb3B1cHM7XG5cbnZhciBDYWxlbmRhciA9IF9DYWxlbmRhcjNbJ2RlZmF1bHQnXS5CYXNlQ2FsZW5kYXI7XG52YXIgbG9jYWxpemVycyA9IF91dGlsQ29uZmlndXJhdGlvbjJbJ2RlZmF1bHQnXS5sb2NhbGU7XG52YXIgdmlld0VudW0gPSBPYmplY3Qua2V5cyh2aWV3cykubWFwKGZ1bmN0aW9uIChrKSB7XG4gIHJldHVybiB2aWV3c1trXTtcbn0pO1xuXG52YXIgb21pdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0O1xudmFyIHBpY2sgPSBfdXRpbF8yWydkZWZhdWx0J10ucGljaztcbnZhciByZXN1bHQgPSBfdXRpbF8yWydkZWZhdWx0J10ucmVzdWx0O1xuXG52YXIgcHJvcFR5cGVzID0gYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS50eXBlKENhbGVuZGFyKS5wcm9wVHlwZXMsIHtcblxuICAvLy0tIGNvbnRyb2xsZWQgcHJvcHMgLS0tLS0tLS0tLS1cbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgb25DaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb3BlbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbZmFsc2UsIHBvcHVwcy5USU1FLCBwb3B1cHMuQ0FMRU5EQVJdKSxcbiAgb25Ub2dnbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gIG1pbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtYXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcblxuICBjdWx0dXJlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICBmb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIHRpbWVGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIGVkaXRGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG5cbiAgY2FsZW5kYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgdGltZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gIHRpbWVDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gIC8vcG9wdXBcbiAgZHJvcFVwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGR1cmF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblxuICBwbGFjZWhvbGRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGluaXRpYWxWaWV3OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKHZpZXdFbnVtKSxcbiAgZmluYWxWaWV3OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKHZpZXdFbnVtKSxcblxuICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydyZWFkT25seSddKV0pLFxuXG4gIHBhcnNlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nKSwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY10pLFxuXG4gICdhcmlhLWxhYmVsbGVkYnknOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICBtZXNzYWdlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zaGFwZSh7XG4gICAgY2FsZW5kYXJCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWVCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59KTtcblxudmFyIERhdGVUaW1lUGlja2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0RhdGVUaW1lUGlja2VyJyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUHVyZVJlbmRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1BvcHVwU2Nyb2xsVG9NaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9SdGxQYXJlbnRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCd2YWx1ZUlucHV0JywgZnVuY3Rpb24gKGtleSwgaWQpIHtcbiAgICB2YXIgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoKTtcbiAgICB2YXIgY2FsSXNBY3RpdmUgPSBvcGVuID09PSBwb3B1cHMuQ0FMRU5EQVIgJiYga2V5ID09PSAnY2FsZW5kYXInO1xuICAgIHZhciB0aW1lSXNBY3RpdmUgPSBvcGVuID09PSBwb3B1cHMuVElNRSAmJiBrZXkgPT09ICd0aW1lbGlzdCc7XG5cbiAgICBpZiAoIWN1cnJlbnQgfHwgKHRpbWVJc0FjdGl2ZSB8fCBjYWxJc0FjdGl2ZSkpIHJldHVybiBpZDtcbiAgfSldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb2N1c2VkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG51bGwsXG5cbiAgICAgIG1pbjogbmV3IERhdGUoMTkwMCwgMCwgMSksXG4gICAgICBtYXg6IG5ldyBEYXRlKDIwOTksIDExLCAzMSksXG4gICAgICBjYWxlbmRhcjogdHJ1ZSxcbiAgICAgIHRpbWU6IHRydWUsXG4gICAgICBvcGVuOiBmYWxzZSxcblxuICAgICAgLy9jYWxlbmRhciBvdmVycmlkZVxuICAgICAgZm9vdGVyOiB0cnVlLFxuXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBjYWxlbmRhckJ1dHRvbjogJ1NlbGVjdCBEYXRlJyxcbiAgICAgICAgdGltZUJ1dHRvbjogJ1NlbGVjdCBUaW1lJ1xuICAgICAgfSxcblxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdkcm9wZG93bmxpc3QnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2N4LFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY2FsZW5kYXIgPSBfcHJvcHMuY2FsZW5kYXI7XG4gICAgdmFyIHRpbWUgPSBfcHJvcHMudGltZTtcbiAgICB2YXIgb3BlbiA9IF9wcm9wcy5vcGVuO1xuICAgIHZhciB0YWJJbmRleCA9IF9wcm9wcy50YWJJbmRleDtcbiAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgdmFyIGZvcm1hdCA9IF9wcm9wcy5mb3JtYXQ7XG4gICAgdmFyIGVkaXRGb3JtYXQgPSBfcHJvcHMuZWRpdEZvcm1hdDtcbiAgICB2YXIgdGltZUZvcm1hdCA9IF9wcm9wcy50aW1lRm9ybWF0O1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzLmN1bHR1cmU7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBzdGVwID0gX3Byb3BzLnN0ZXA7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBtaW4gPSBfcHJvcHMubWluO1xuICAgIHZhciBtYXggPSBfcHJvcHMubWF4O1xuICAgIHZhciBidXN5ID0gX3Byb3BzLmJ1c3k7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gX3Byb3BzLnBsYWNlaG9sZGVyO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHk7XG4gICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICB2YXIgZHJvcFVwID0gX3Byb3BzLmRyb3BVcDtcbiAgICB2YXIgdGltZUNvbXBvbmVudCA9IF9wcm9wcy50aW1lQ29tcG9uZW50O1xuICAgIHZhciBhcmlhTGFiZWxsZWRieSA9IF9wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J107XG4gICAgdmFyIGZvY3VzZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQ7XG5cbiAgICB2YXIgaW5wdXRJRCA9IHRoaXMuX2lkKCdfaW5wdXQnKSxcbiAgICAgICAgdGltZUxpc3RJRCA9IHRoaXMuX2lkKCdfdGltZV9saXN0Ym94JyksXG4gICAgICAgIGRhdGVMaXN0SUQgPSB0aGlzLl9pZCgnX2NhbCcpLFxuICAgICAgICBvd25zID0gJyc7XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gb21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKSxcbiAgICAgICAgY2FsUHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLnR5cGUoQ2FsZW5kYXIpLnByb3BUeXBlcykpO1xuXG4gICAgdmFyIHNob3VsZFJlbmRlckxpc3QgPSBfdXRpbF8yWydkZWZhdWx0J10uaXNGaXJzdEZvY3VzZWRSZW5kZXIodGhpcykgfHwgb3BlbixcbiAgICAgICAgZGlzYWJsZWRPclJlYWRvbmx5ID0gdGhpcy5pc0Rpc2FibGVkKCkgfHwgdGhpcy5pc1JlYWRPbmx5KCksXG4gICAgICAgIGNhbGVuZGFySXNPcGVuID0gb3BlbiA9PT0gcG9wdXBzLkNBTEVOREFSLFxuICAgICAgICB0aW1lSXNPcGVuID0gb3BlbiA9PT0gcG9wdXBzLlRJTUU7XG5cbiAgICBpZiAoY2FsZW5kYXIpIG93bnMgKz0gZGF0ZUxpc3RJRDtcbiAgICBpZiAodGltZSkgb3ducyArPSAnICcgKyB0aW1lTGlzdElEO1xuXG4gICAgdmFsdWUgPSBkYXRlT3JOdWxsKHZhbHVlKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZWxlbWVudCcsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICBvbktleURvd246IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2tleURvd24pLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLCB0cnVlKSxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LWRhdGV0aW1lcGlja2VyJywgJ3J3LXdpZGdldCcsIChfY3ggPSB7fSwgX2N4Wydydy1zdGF0ZS1mb2N1cyddID0gZm9jdXNlZCwgX2N4Wydydy1zdGF0ZS1kaXNhYmxlZCddID0gdGhpcy5pc0Rpc2FibGVkKCksIF9jeFsncnctc3RhdGUtcmVhZG9ubHknXSA9IHRoaXMuaXNSZWFkT25seSgpLCBfY3hbJ3J3LWhhcy1ib3RoJ10gPSBjYWxlbmRhciAmJiB0aW1lLCBfY3hbJ3J3LWhhcy1uZWl0aGVyJ10gPSAhY2FsZW5kYXIgJiYgIXRpbWUsIF9jeFsncnctcnRsJ10gPSB0aGlzLmlzUnRsKCksIF9jeFsncnctb3BlbicgKyAoZHJvcFVwID8gJy11cCcgOiAnJyldID0gb3BlbiwgX2N4KSlcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0RhdGVJbnB1dDJbJ2RlZmF1bHQnXSwge1xuICAgICAgICByZWY6ICd2YWx1ZUlucHV0JyxcbiAgICAgICAgaWQ6IGlucHV0SUQsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwLFxuICAgICAgICByb2xlOiAnY29tYm9ib3gnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6ICEhb3BlbixcbiAgICAgICAgJ2FyaWEtYnVzeSc6ICEhYnVzeSxcbiAgICAgICAgJ2FyaWEtb3ducyc6IG93bnMudHJpbSgpLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICByZWFkT25seTogdGhpcy5pc1JlYWRPbmx5KCksXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZm9ybWF0OiBnZXRGb3JtYXQodGhpcy5wcm9wcyksXG4gICAgICAgIGVkaXRGb3JtYXQ6IGVkaXRGb3JtYXQsXG4gICAgICAgIGVkaXRpbmc6IGZvY3VzZWQsXG4gICAgICAgIGN1bHR1cmU6IGN1bHR1cmUsXG4gICAgICAgIHBhcnNlOiB0aGlzLl9wYXJzZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuX2NoYW5nZVxuICAgICAgfSksXG4gICAgICAoY2FsZW5kYXIgfHwgdGltZSkgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zZWxlY3QnIH0sXG4gICAgICAgIGNhbGVuZGFyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9XaWRnZXRCdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdydy1idG4tY2FsZW5kYXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkT3JSZWFkb25seSxcbiAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWRPclJlYWRvbmx5LFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBtZXNzYWdlcy5jYWxlbmRhckJ1dHRvbixcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2NsaWNrLmJpbmQobnVsbCwgcG9wdXBzLkNBTEVOREFSKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2FsZW5kYXInLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgdGltZSAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfV2lkZ2V0QnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncnctYnRuLXRpbWUnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkT3JSZWFkb25seSxcbiAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWRPclJlYWRvbmx5LFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBtZXNzYWdlcy50aW1lQnV0dG9uLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fY2xpY2suYmluZChudWxsLCBwb3B1cHMuVElNRSkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAncnctaSBydy1pLWNsb2NrLW8nLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUG9wdXAyWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBkcm9wVXA6IGRyb3BVcCxcbiAgICAgICAgICBvcGVuOiB0aW1lSXNPcGVuLFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmNsb3NlLFxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICBvbk9wZW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZWZzLnRpbWVQb3B1cC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzaG91bGRSZW5kZXJMaXN0ICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9UaW1lTGlzdDJbJ2RlZmF1bHQnXSwgeyByZWY6ICd0aW1lUG9wdXAnLFxuICAgICAgICAgICAgaWQ6IHRpbWVMaXN0SUQsXG4gICAgICAgICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ3RpbWVsaXN0JyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBpbnB1dElELFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IG9wZW4gJiYgJ3BvbGl0ZScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhb3BlbixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGZvcm1hdDogdGltZUZvcm1hdCxcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgY3VsdHVyZTogY3VsdHVyZSxcbiAgICAgICAgICAgIG9uTW92ZTogdGhpcy5fc2Nyb2xsVG8sXG4gICAgICAgICAgICBwcmVzZXJ2ZURhdGU6ICEhY2FsZW5kYXIsXG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50OiB0aW1lQ29tcG9uZW50LFxuICAgICAgICAgICAgb25TZWxlY3Q6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX3NlbGVjdFRpbWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUG9wdXAyWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdydy1jYWxlbmRhci1wb3B1cCcsXG4gICAgICAgICAgZHJvcFVwOiBkcm9wVXAsXG4gICAgICAgICAgb3BlbjogY2FsZW5kYXJJc09wZW4sXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmNsb3NlXG4gICAgICAgIH0sXG4gICAgICAgIHNob3VsZFJlbmRlckxpc3QgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXIsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgY2FsUHJvcHMsIHtcbiAgICAgICAgICByZWY6ICdjYWxQb3B1cCcsXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgaWQ6IGRhdGVMaXN0SUQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICFvcGVuLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2NhbGVuZGFyJyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fc2VsZWN0RGF0ZSksXG5cbiAgICAgICAgICBvbk5hdmlnYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX2NoYW5nZTogZnVuY3Rpb24gX2NoYW5nZShkYXRlLCBzdHIsIGNvbnN0cmFpbikge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG5cbiAgICBpZiAoY29uc3RyYWluKSBkYXRlID0gdGhpcy5pblJhbmdlVmFsdWUoZGF0ZSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIGlmIChkYXRlID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAoZGF0ZSAhPSB2YWx1ZSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgICAgICAgIG9uQ2hhbmdlKGRhdGUsIHN0cik7XG4gICAgICB9IGVsc2UgaWYgKCFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVxKGRhdGUsIHZhbHVlKSkgb25DaGFuZ2UoZGF0ZSwgc3RyKTtcbiAgICB9XG4gIH0sXG5cbiAgX2tleURvd246IGZ1bmN0aW9uIF9rZXlEb3duKGUpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9wZW4gPSBfcHJvcHMzLm9wZW47XG4gICAgdmFyIGNhbGVuZGFyID0gX3Byb3BzMy5jYWxlbmRhcjtcbiAgICB2YXIgdGltZSA9IF9wcm9wczMudGltZTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgb3BlbikgdGhpcy5jbG9zZSgpO2Vsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgaWYgKGNhbGVuZGFyICYmIHRpbWUpIHRoaXMub3BlbihvcGVuID09PSBwb3B1cHMuQ0FMRU5EQVIgPyBwb3B1cHMuVElNRSA6IHBvcHVwcy5DQUxFTkRBUik7ZWxzZSBpZiAodGltZSkgdGhpcy5vcGVuKHBvcHVwcy5USU1FKTtlbHNlIGlmIChjYWxlbmRhcikgdGhpcy5vcGVuKHBvcHVwcy5DQUxFTkRBUik7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKG9wZW4pIHtcbiAgICAgIGlmIChvcGVuID09PSBwb3B1cHMuQ0FMRU5EQVIpIHRoaXMucmVmcy5jYWxQb3B1cC5fa2V5RG93bihlKTtcbiAgICAgIGlmIChvcGVuID09PSBwb3B1cHMuVElNRSkgdGhpcy5yZWZzLnRpbWVQb3B1cC5fa2V5RG93bihlKTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeSgnb25LZXlEb3duJywgW2VdKTtcbiAgfSxcblxuICBfZm9jdXM6IGZ1bmN0aW9uIF9mb2N1cyhmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmb2N1c2VkKSBfdGhpczIuY2xvc2UoKTtcblxuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzMi5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzMi5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCgwLCBfcmVhY3RMaWJHZXRBY3RpdmVFbGVtZW50MlsnZGVmYXVsdCddKSgpICE9PSBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMudmFsdWVJbnB1dCkpIHRoaXMucmVmcy52YWx1ZUlucHV0LmZvY3VzKCk7XG4gIH0sXG5cbiAgX3NlbGVjdERhdGU6IGZ1bmN0aW9uIF9zZWxlY3REYXRlKGRhdGUpIHtcbiAgICB2YXIgZm9ybWF0ID0gZ2V0Rm9ybWF0KHRoaXMucHJvcHMpLFxuICAgICAgICBkYXRlVGltZSA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWVyZ2UoZGF0ZSwgdGhpcy5wcm9wcy52YWx1ZSksXG4gICAgICAgIGRhdGVTdHIgPSBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLm5vdGlmeSgnb25TZWxlY3QnLCBbZGF0ZVRpbWUsIGRhdGVTdHJdKTtcbiAgICB0aGlzLl9jaGFuZ2UoZGF0ZVRpbWUsIGRhdGVTdHIsIHRydWUpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfSxcblxuICBfc2VsZWN0VGltZTogZnVuY3Rpb24gX3NlbGVjdFRpbWUoZGF0dW0pIHtcbiAgICB2YXIgZm9ybWF0ID0gZ2V0Rm9ybWF0KHRoaXMucHJvcHMpLFxuICAgICAgICBkYXRlVGltZSA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWVyZ2UodGhpcy5wcm9wcy52YWx1ZSwgZGF0dW0uZGF0ZSksXG4gICAgICAgIGRhdGVTdHIgPSBmb3JtYXREYXRlKGRhdHVtLmRhdGUsIGZvcm1hdCwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLm5vdGlmeSgnb25TZWxlY3QnLCBbZGF0ZVRpbWUsIGRhdGVTdHJdKTtcbiAgICB0aGlzLl9jaGFuZ2UoZGF0ZVRpbWUsIGRhdGVTdHIsIHRydWUpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfSxcblxuICBfY2xpY2s6IGZ1bmN0aW9uIF9jbGljayh2aWV3LCBlKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuICAgIHRoaXMudG9nZ2xlKHZpZXcsIGUpO1xuICB9LFxuXG4gIF9wYXJzZTogZnVuY3Rpb24gX3BhcnNlKHN0cmluZykge1xuICAgIHZhciBmb3JtYXQgPSBnZXRGb3JtYXQodGhpcy5wcm9wcywgdHJ1ZSksXG4gICAgICAgIGVkaXRGb3JtYXQgPSB0aGlzLnByb3BzLmVkaXRGb3JtYXQsXG4gICAgICAgIHBhcnNlID0gdGhpcy5wcm9wcy5wYXJzZSxcbiAgICAgICAgZm9ybWF0cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHBhcnNlKHN0cmluZywgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykgZm9ybWF0cy5wdXNoKGZvcm1hdCk7XG5cbiAgICBpZiAodHlwZW9mIGVkaXRGb3JtYXQgPT09ICdzdHJpbmcnKSBmb3JtYXRzLnB1c2goZWRpdEZvcm1hdCk7XG5cbiAgICBpZiAocGFyc2UpIGZvcm1hdHMgPSBmb3JtYXRzLmNvbmNhdCh0aGlzLnByb3BzLnBhcnNlKTtcblxuICAgICgwLCBfcmVhY3RMaWJJbnZhcmlhbnQyWydkZWZhdWx0J10pKGZvcm1hdHMubGVuZ3RoLCAnUmVhY3QgV2lkZ2V0czogdGhlcmUgYXJlIG5vIHNwZWNpZmllZCBgcGFyc2VgIGZvcm1hdHMgcHJvdmlkZWQgYW5kIHRoZSBgZm9ybWF0YCBwcm9wIGlzIGEgZnVuY3Rpb24uICcgKyAndGhlIERhdGVUaW1lUGlja2VyIGlzIHVuYWJsZSB0byBwYXJzZSBgJXNgIGludG8gYSBkYXRlVGltZSwgJyArICdwbGVhc2UgcHJvdmlkZSBlaXRoZXIgYSBwYXJzZSBmdW5jdGlvbiBvciBHbG9iYWxpemUuanMgY29tcGF0aWJsZSBzdHJpbmcgZm9yIGBmb3JtYXRgJywgc3RyaW5nKTtcblxuICAgIHJldHVybiBmb3JtYXRzUGFyc2VyKGZvcm1hdHMsIHRoaXMucHJvcHMuY3VsdHVyZSwgc3RyaW5nKTtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSh2aWV3KSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuID8gdGhpcy5wcm9wcy5vcGVuICE9PSB2aWV3ID8gdGhpcy5vcGVuKHZpZXcpIDogdGhpcy5jbG9zZSh2aWV3KSA6IHRoaXMub3Blbih2aWV3KTtcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKHZpZXcpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuICE9PSB2aWV3ICYmIHRoaXMucHJvcHNbdmlld10gPT09IHRydWUpIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIHZpZXcpO1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB0aGlzLm5vdGlmeSgnb25Ub2dnbGUnLCBmYWxzZSk7XG4gIH0sXG5cbiAgaW5SYW5nZVZhbHVlOiBmdW5jdGlvbiBpblJhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWF4KF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWluKHZhbHVlLCB0aGlzLnByb3BzLm1heCksIHRoaXMucHJvcHMubWluKTtcbiAgfVxuXG59KTtcblxudmFyIFVuY29udHJvbGxlZERhdGVUaW1lUGlja2VyID0gKDAsIF91bmNvbnRyb2xsYWJsZTJbJ2RlZmF1bHQnXSkoRGF0ZVRpbWVQaWNrZXIsIHsgb3BlbjogJ29uVG9nZ2xlJywgdmFsdWU6ICdvbkNoYW5nZScgfSk7XG5cblVuY29udHJvbGxlZERhdGVUaW1lUGlja2VyLkJhc2VEYXRlVGltZVBpY2tlciA9IERhdGVUaW1lUGlja2VyO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVbmNvbnRyb2xsZWREYXRlVGltZVBpY2tlcjtcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0KHByb3BzKSB7XG4gIHZhciBjYWwgPSBwcm9wc1twb3B1cHMuQ0FMRU5EQVJdICE9IG51bGwgPyBwcm9wcy5jYWxlbmRhciA6IHRydWUsXG4gICAgICB0aW1lID0gcHJvcHNbcG9wdXBzLlRJTUVdICE9IG51bGwgPyBwcm9wcy50aW1lIDogdHJ1ZTtcblxuICByZXR1cm4gcHJvcHMuZm9ybWF0ID8gcHJvcHMuZm9ybWF0IDogY2FsICYmIHRpbWUgfHwgIWNhbCAmJiAhdGltZSA/IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzWydkZWZhdWx0J10gOiBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0c1tjYWwgPyAnZGF0ZScgOiAndGltZSddO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgY3VsdHVyZSkge1xuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkYXRlLmdldFRpbWUoKSkpIHZhbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF0ZSwgZm9ybWF0LCBjdWx0dXJlKTtcblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRzUGFyc2VyKGZvcm1hdHMsIGN1bHR1cmUsIHN0cikge1xuICB2YXIgZGF0ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRlID0gbG9jYWxpemVycy5kYXRlLnBhcnNlKHN0ciwgZm9ybWF0c1tpXSwgY3VsdHVyZSk7XG4gICAgaWYgKGRhdGUpIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBkYXRlT3JOdWxsKGR0KSB7XG4gIGlmIChkdCAmJiAhaXNOYU4oZHQuZ2V0VGltZSgpKSkgcmV0dXJuIGR0O1xuICByZXR1cm4gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8gIzc1OiBuZWVkIHRvIGFnZ3Jlc3NpdmVseSByZWNsYWltIGZvY3VzIGZyb20gdGhlIGNhbGVuZGFyIG90aGVyd2lzZVxuLy8gZGlzYWJsZWQgaGVhZGVyL2Zvb3RlciBidXR0b25zIHdpbGwgZHJvcCBmb2N1cyBjb21wbGV0ZWx5IGZyb20gdGhlIHdpZGdldCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsRGF0ZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0ZXMnKTtcblxudmFyIF91dGlsRGF0ZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbERhdGVzKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbmZpZ3VyYXRpb24pO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgbG9jYWxpemVycyA9IF91dGlsQ29uZmlndXJhdGlvbjJbJ2RlZmF1bHQnXS5sb2NhbGU7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLnllYXJGb3JtYXQgfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHMueWVhcjtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIG9wdGlvbklEOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIGN1bHR1cmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIGZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1heDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgeWVhckZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdFxufTtcblxudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiBpc0VxdWFsKGRhdGFBLCBkYXRlQikge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcShkYXRhQSwgZGF0ZUIsICd5ZWFyJyk7XG59O1xudmFyIG9wdGlvbklkID0gZnVuY3Rpb24gb3B0aW9uSWQoaWQsIGRhdGUpIHtcbiAgcmV0dXJuICcnICsgaWQgKyAnX19kZWNhZGVfJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ueWVhcihkYXRlKTtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdEZWNhZGVWaWV3JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBhY3RpdmVJZCA9IG9wdGlvbklkKHRoaXMuX2lkKCksIHRoaXMucHJvcHMuZm9jdXNlZCk7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChhY3RpdmVJZCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMuZm9jdXNlZDtcbiAgICB2YXIgeWVhcnMgPSBnZXREZWNhZGVZZWFycyhmb2N1c2VkKTtcbiAgICB2YXIgcm93cyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5jaHVuayh5ZWFycywgNCk7XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gX3V0aWxfMlsnZGVmYXVsdCddLm9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ2dyaWQnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctbmF2LXZpZXcnKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcm93cy5tYXAodGhpcy5fcm93KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX3JvdzogZnVuY3Rpb24gX3Jvdyhyb3csIHJvd0lkeCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMyLmZvY3VzZWQ7XG4gICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzMi5zZWxlY3RlZDtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkO1xuICAgIHZhciBvbkNoYW5nZSA9IF9wcm9wczIub25DaGFuZ2U7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcbiAgICB2YXIgdG9kYXkgPSBfcHJvcHMyLnRvZGF5O1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzMi5jdWx0dXJlO1xuICAgIHZhciBtaW4gPSBfcHJvcHMyLm1pbjtcbiAgICB2YXIgbWF4ID0gX3Byb3BzMi5tYXg7XG4gICAgdmFyIERheSA9IF9wcm9wczIuZGF5Q29tcG9uZW50O1xuICAgIHZhciBpZCA9IHRoaXMuX2lkKCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndHInLFxuICAgICAgeyBrZXk6ICdyb3dfJyArIHJvd0lkeCwgcm9sZTogJ3JvdycgfSxcbiAgICAgIHJvdy5tYXAoZnVuY3Rpb24gKGRhdGUsIGNvbElkeCkge1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gaXNFcXVhbChkYXRlLCBmb2N1c2VkKSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGRhdGUsIHZhbHVlKSxcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyID0gaXNFcXVhbChkYXRlLCB0b2RheSksXG4gICAgICAgICAgICBsYWJlbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF0ZSwgZm9ybWF0KF90aGlzLnByb3BzKSwgY3VsdHVyZSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJRCA9IG9wdGlvbklkKGlkLCBkYXRlKTtcblxuICAgICAgICByZXR1cm4gIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZShkYXRlLCBtaW4sIG1heCwgJ3llYXInKSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgeyBrZXk6IGNvbElkeCwgcm9sZTogJ3ByZXNlbnRhdGlvbicsIGNsYXNzTmFtZTogJ3J3LWVtcHR5LWNlbGwnIH0sXG4gICAgICAgICAgJ8KgJ1xuICAgICAgICApIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGNvbElkeCxcbiAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICBpZDogY3VycmVudElELFxuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAgICAgICAgICdhcmlhLXJlYWRvbmx5JzogZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogY3VycmVudElELFxuICAgICAgICAgICAgICBvbkNsaWNrOiBvbkNoYW5nZS5iaW5kKG51bGwsIGRhdGUpLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWJ0bicsIHtcbiAgICAgICAgICAgICAgICAncnctb2ZmLXJhbmdlJzogIWluRGVjYWRlKGRhdGUsIGZvY3VzZWQpLFxuICAgICAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICdydy1ub3cnOiBjdXJyZW50WWVhclxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaW5EZWNhZGUoZGF0ZSwgc3RhcnQpIHtcbiAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZ3RlKGRhdGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uc3RhcnRPZihzdGFydCwgJ2RlY2FkZScpLCAneWVhcicpICYmIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubHRlKGRhdGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZW5kT2Yoc3RhcnQsICdkZWNhZGUnKSwgJ3llYXInKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjYWRlWWVhcnMoX2RhdGUpIHtcbiAgdmFyIGRheXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0sXG4gICAgICBkYXRlID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5hZGQoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5zdGFydE9mKF9kYXRlLCAnZGVjYWRlJyksIC0yLCAneWVhcicpO1xuXG4gIHJldHVybiBkYXlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRhdGUgPSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmFkZChkYXRlLCAxLCAneWVhcicpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBhY3RpdmVFbGVtZW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2dldEFjdGl2ZUVsZW1lbnQnKSxcbiAgICBfID0gcmVxdWlyZSgnLi91dGlsL18nKSxcbiAgICBjb250YWlucyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3F1ZXJ5L2NvbnRhaW5zJyksXG4gICAgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgY29tcGF0ID0gcmVxdWlyZSgnLi91dGlsL2NvbXBhdCcpLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKSxcbiAgICBQb3B1cCA9IHJlcXVpcmUoJy4vUG9wdXAnKSxcbiAgICBQbGFpbkxpc3QgPSByZXF1aXJlKCcuL0xpc3QnKSxcbiAgICBHcm91cGFibGVMaXN0ID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBhYmxlJyksXG4gICAgdmFsaWRhdGVMaXN0ID0gcmVxdWlyZSgnLi91dGlsL3ZhbGlkYXRlTGlzdEludGVyZmFjZScpLFxuICAgIGNyZWF0ZVVuY29udHJvbGxlZFdpZGdldCA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyk7XG5cbnZhciBvbWl0ID0gXy5vbWl0O1xudmFyIHBpY2sgPSBfLnBpY2s7XG52YXIgcmVzdWx0ID0gXy5yZXN1bHQ7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8vLS0gY29udHJvbGxlZCBwcm9wcyAtLS0tLS0tLS0tLVxuICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25Ub2dnbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgdmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dEZpZWxkOiBDdXN0b21Qcm9wVHlwZXMuYWNjZXNzb3IsXG5cbiAgdmFsdWVDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgaXRlbUNvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBsaXN0Q29tcG9uZW50OiBDdXN0b21Qcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgZ3JvdXBDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgZ3JvdXBCeTogQ3VzdG9tUHJvcFR5cGVzLmFjY2Vzc29yLFxuXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICBzZWFyY2hUZXJtOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cbiAgYnVzeTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgZHJvcFVwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZHVyYXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsIC8vcG9wdXBcblxuICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydyZWFkT25seSddKV0pLFxuXG4gIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wZW46IEN1c3RvbVByb3BUeXBlcy5tZXNzYWdlLFxuICAgIGVtcHR5TGlzdDogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgZW1wdHlGaWx0ZXI6IEN1c3RvbVByb3BUeXBlcy5tZXNzYWdlLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBDdXN0b21Qcm9wVHlwZXMubWVzc2FnZVxuICB9KVxufTtcblxudmFyIERyb3Bkb3duTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duTGlzdCcsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvVGltZW91dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1B1cmVSZW5kZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhRmlsdGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvRGF0YUhlbHBlcnNNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9Qb3B1cFNjcm9sbFRvTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgZGF0YTogW10sXG4gICAgICBzZWFyY2hUZXJtOiAnJyxcbiAgICAgIG1lc3NhZ2VzOiBtc2dzKCksXG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2Ryb3Bkb3dubGlzdCdcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLnByb3BzLm9wZW4gJiYgdGhpcy5wcm9wcy5maWx0ZXIsXG4gICAgICAgIGRhdGEgPSBmaWx0ZXIgPyB0aGlzLmZpbHRlcih0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuc2VhcmNoVGVybSkgOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICAgIGluaXRpYWxJZHggPSB0aGlzLl9kYXRhSW5kZXhPZih0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlcmVkRGF0YTogZmlsdGVyICYmIGRhdGEsXG4gICAgICBzZWxlY3RlZEl0ZW06IGRhdGFbaW5pdGlhbElkeF0sXG4gICAgICBmb2N1c2VkSXRlbTogZGF0YVtpbml0aWFsSWR4XSB8fCBkYXRhWzBdXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlZnMubGlzdCAmJiB2YWxpZGF0ZUxpc3QodGhpcy5yZWZzLmxpc3QpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICB2YXIgZmlsdGVyID0gcHJvcHMub3BlbiAmJiBwcm9wcy5maWx0ZXIsXG4gICAgICAgIGRhdGEgPSBmaWx0ZXIgPyB0aGlzLmZpbHRlcihwcm9wcy5kYXRhLCBwcm9wcy5zZWFyY2hUZXJtKSA6IHByb3BzLmRhdGEsXG4gICAgICAgIGlkeCA9IHRoaXMuX2RhdGFJbmRleE9mKGRhdGEsIHByb3BzLnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyZWREYXRhOiBmaWx0ZXIgJiYgZGF0YSxcbiAgICAgIHNlbGVjdGVkSXRlbTogZGF0YVtpZHhdLFxuICAgICAgZm9jdXNlZEl0ZW06IGRhdGFbISB+aWR4ID8gMCA6IGlkeF1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2N4LFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdGFiSW5kZXggPSBfcHJvcHMudGFiSW5kZXg7XG4gICAgdmFyIGZpbHRlciA9IF9wcm9wcy5maWx0ZXI7XG4gICAgdmFyIGdyb3VwQnkgPSBfcHJvcHMuZ3JvdXBCeTtcbiAgICB2YXIgbWVzc2FnZXMgPSBfcHJvcHMubWVzc2FnZXM7XG4gICAgdmFyIGRhdGEgPSBfcHJvcHMuZGF0YTtcbiAgICB2YXIgYnVzeSA9IF9wcm9wcy5idXN5O1xuICAgIHZhciBkcm9wVXAgPSBfcHJvcHMuZHJvcFVwO1xuICAgIHZhciBwbGFjZWhvbGRlciA9IF9wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgdmFyIG9wZW4gPSBfcHJvcHMub3BlbjtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgdmFyIHJlYWRPbmx5ID0gX3Byb3BzLnJlYWRPbmx5O1xuICAgIHZhciBWYWx1ZUNvbXBvbmVudCA9IF9wcm9wcy52YWx1ZUNvbXBvbmVudDtcbiAgICB2YXIgTGlzdCA9IF9wcm9wcy5saXN0Q29tcG9uZW50O1xuXG4gICAgTGlzdCA9IExpc3QgfHwgZ3JvdXBCeSAmJiBHcm91cGFibGVMaXN0IHx8IFBsYWluTGlzdDtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuICAgIHZhciBsaXN0UHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKGNvbXBhdC50eXBlKExpc3QpLnByb3BUeXBlcykpO1xuICAgIHZhciBwb3B1cFByb3BzID0gcGljayh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhjb21wYXQudHlwZShQb3B1cCkucHJvcFR5cGVzKSk7XG5cbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSBfc3RhdGUuZm9jdXNlZEl0ZW07XG4gICAgdmFyIHNlbGVjdGVkSXRlbSA9IF9zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgdmFyIGZvY3VzZWQgPSBfc3RhdGUuZm9jdXNlZDtcblxuICAgIHZhciBpdGVtcyA9IHRoaXMuX2RhdGEoKSxcbiAgICAgICAgdmFsdWVJdGVtID0gdGhpcy5fZGF0YUl0ZW0oZGF0YSwgdmFsdWUpIC8vIHRha2UgdmFsdWUgZnJvbSB0aGUgcmF3IGRhdGFcbiAgICAsXG4gICAgICAgIGxpc3RJRCA9IHRoaXMuX2lkKCdfX2xpc3Rib3gnKTtcblxuICAgIHZhciBzaG91bGRSZW5kZXJMaXN0ID0gXy5pc0ZpcnN0Rm9jdXNlZFJlbmRlcih0aGlzKSB8fCBvcGVuO1xuXG4gICAgbWVzc2FnZXMgPSBtc2dzKG1lc3NhZ2VzKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCB8fCAnMCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogb3BlbixcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAnYXJpYS1vd25zJzogbGlzdElELFxuICAgICAgICAnYXJpYS1idXN5JzogISFidXN5LFxuICAgICAgICAnYXJpYS1saXZlJzogIW9wZW4gJiYgJ3BvbGl0ZScsXG4gICAgICAgIC8vYXJpYS1hY3RpdmVkZXNjZW5kYW50PXthY3RpdmVJRH1cbiAgICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAnYXJpYS1yZWFkb25seSc6IHJlYWRPbmx5LFxuICAgICAgICBvbktleURvd246IHRoaXMuX2tleURvd24sXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuX2NsaWNrLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICBjbGFzc05hbWU6IGN4KGNsYXNzTmFtZSwgJ3J3LWRyb3Bkb3dubGlzdCcsICdydy13aWRnZXQnLCAoX2N4ID0ge30sIF9jeFsncnctc3RhdGUtZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfY3hbJ3J3LXN0YXRlLXJlYWRvbmx5J10gPSByZWFkT25seSwgX2N4Wydydy1zdGF0ZS1mb2N1cyddID0gZm9jdXNlZCwgX2N4Wydydy1ydGwnXSA9IHRoaXMuaXNSdGwoKSwgX2N4Wydydy1vcGVuJyArIChkcm9wVXAgPyAnLXVwJyA6ICcnKV0gPSBvcGVuLCBfY3gpKSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1kcm9wZG93bmxpc3QtcGlja2VyIHJ3LXNlbGVjdCBydy1idG4nIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2knLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncnctaSBydy1pLWNhcmV0LWRvd24nICsgKGJ1c3kgPyAnIHJ3LWxvYWRpbmcnIDogJycpIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncnctc3InIH0sXG4gICAgICAgICAgICByZXN1bHQobWVzc2FnZXMub3BlbiwgdGhpcy5wcm9wcylcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LWlucHV0J1xuICAgICAgICB9LFxuICAgICAgICAhdmFsdWVJdGVtICYmIHBsYWNlaG9sZGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1wbGFjZWhvbGRlcicgfSxcbiAgICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgICApIDogdGhpcy5wcm9wcy52YWx1ZUNvbXBvbmVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb21wb25lbnQsIHsgaXRlbTogdmFsdWVJdGVtIH0pIDogdGhpcy5fZGF0YVRleHQodmFsdWVJdGVtKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFBvcHVwLFxuICAgICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHBvcHVwUHJvcHMsIHtcbiAgICAgICAgICBvbk9wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1cygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25PcGVuaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVmcy5saXN0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZpbHRlciAmJiB0aGlzLl9yZW5kZXJGaWx0ZXIobWVzc2FnZXMpLFxuICAgICAgICAgIHNob3VsZFJlbmRlckxpc3QgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoeyByZWY6ICdsaXN0J1xuICAgICAgICAgIH0sIGxpc3RQcm9wcywge1xuICAgICAgICAgICAgZGF0YTogaXRlbXMsXG4gICAgICAgICAgICBpZDogbGlzdElELFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IG9wZW4gJiYgJ3BvbGl0ZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5faWQoKSxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICF0aGlzLnByb3BzLm9wZW4sXG4gICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgZm9jdXNlZDogb3BlbiA/IGZvY3VzZWRJdGVtIDogbnVsbCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLl9vblNlbGVjdCxcbiAgICAgICAgICAgIG9uTW92ZTogdGhpcy5fc2Nyb2xsVG8sXG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICBlbXB0eUxpc3Q6IGRhdGEubGVuZ3RoID8gbWVzc2FnZXMuZW1wdHlGaWx0ZXIgOiBtZXNzYWdlcy5lbXB0eUxpc3RcbiAgICAgICAgICAgIH0gfSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9yZW5kZXJGaWx0ZXI6IGZ1bmN0aW9uIF9yZW5kZXJGaWx0ZXIobWVzc2FnZXMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IHJlZjogJ2ZpbHRlcldyYXBwZXInLCBjbGFzc05hbWU6ICdydy1maWx0ZXItaW5wdXQnIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncnctc2VsZWN0IHJ3LWJ0bicgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAncnctaSBydy1pLXNlYXJjaCcgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgcmVmOiAnZmlsdGVyJywgY2xhc3NOYW1lOiAncnctaW5wdXQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogXy5yZXN1bHQobWVzc2FnZXMuZmlsdGVyUGxhY2Vob2xkZXIsIHRoaXMucHJvcHMpLFxuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5zZWFyY2hUZXJtLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm5vdGlmeSgnb25TZWFyY2gnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gfSlcbiAgICApO1xuICB9LFxuXG4gIF9mb2N1czogXy5pZk5vdERpc2FibGVkKHRydWUsIGZ1bmN0aW9uIChmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmb2N1c2VkKSBfdGhpczMuY2xvc2UoKTtcblxuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzMy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzMy5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSksXG5cbiAgX29uU2VsZWN0OiBfLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5ub3RpZnkoJ29uU2VsZWN0JywgZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2UoZGF0YSk7XG4gICAgdGhpcy5mb2N1cyh0aGlzKTtcbiAgfSksXG5cbiAgX2NsaWNrOiBfLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgd3JhcHBlciA9IHRoaXMucmVmcy5maWx0ZXJXcmFwcGVyO1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmZpbHRlciB8fCAhdGhpcy5wcm9wcy5vcGVuKSB0aGlzLnRvZ2dsZSgpO2Vsc2UgaWYgKCFjb250YWlucyhjb21wYXQuZmluZERPTU5vZGUod3JhcHBlciksIGUudGFyZ2V0KSkgdGhpcy5jbG9zZSgpO1xuXG4gICAgdGhpcy5ub3RpZnkoJ29uQ2xpY2snLCBlKTtcbiAgfSksXG5cbiAgX2tleURvd246IF8uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBrZXkgPSBlLmtleSxcbiAgICAgICAgYWx0ID0gZS5hbHRLZXksXG4gICAgICAgIGxpc3QgPSB0aGlzLnJlZnMubGlzdCxcbiAgICAgICAgZmlsdGVyaW5nID0gdGhpcy5wcm9wcy5maWx0ZXIsXG4gICAgICAgIGZvY3VzZWRJdGVtID0gdGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIGlzT3BlbiA9IHRoaXMucHJvcHMub3BlbixcbiAgICAgICAgY2xvc2VXaXRoRm9jdXMgPSBmdW5jdGlvbiBjbG9zZVdpdGhGb2N1cygpIHtcbiAgICAgIF90aGlzNC5jbG9zZSgpLCBjb21wYXQuZmluZERPTU5vZGUoX3RoaXM0KS5mb2N1cygpO1xuICAgIH07XG5cbiAgICBpZiAoa2V5ID09PSAnRW5kJykge1xuICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0Lmxhc3QoKSB9KTtlbHNlIGNoYW5nZShsaXN0Lmxhc3QoKSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdIb21lJykge1xuICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LmZpcnN0KCkgfSk7ZWxzZSBjaGFuZ2UobGlzdC5maXJzdCgpKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScgJiYgaXNPcGVuKSB7XG4gICAgICBjbG9zZVdpdGhGb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJyAmJiAhZmlsdGVyaW5nKSAmJiBpc09wZW4pIHtcbiAgICAgIGNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGlmIChhbHQpIHRoaXMub3BlbigpO2Vsc2UgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0Lm5leHQoZm9jdXNlZEl0ZW0pIH0pO2Vsc2UgY2hhbmdlKGxpc3QubmV4dChzZWxlY3RlZEl0ZW0pKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBpZiAoYWx0KSBjbG9zZVdpdGhGb2N1cygpO2Vsc2UgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LnByZXYoZm9jdXNlZEl0ZW0pIH0pO2Vsc2UgY2hhbmdlKGxpc3QucHJldihzZWxlY3RlZEl0ZW0pKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKCEodGhpcy5wcm9wcy5maWx0ZXIgJiYgaXNPcGVuKSkgdGhpcy5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXNPcGVuID8gX3RoaXM0LnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGl0ZW0gfSkgOiBjaGFuZ2UoaXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vdGlmeSgnb25LZXlEb3duJywgW2VdKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZShpdGVtLCBmcm9tTGlzdCkge1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICBmcm9tTGlzdCA/IHNlbGYuX29uU2VsZWN0KGl0ZW0pIDogc2VsZi5jaGFuZ2UoaXRlbSk7XG4gICAgfVxuICB9KSxcblxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShkYXRhKSB7XG4gICAgaWYgKCFfLmlzU2hhbGxvd0VxdWFsKGRhdGEsIHRoaXMucHJvcHMudmFsdWUpKSB7XG4gICAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBkYXRhKTtcbiAgICAgIHRoaXMubm90aWZ5KCdvblNlYXJjaCcsICcnKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKHRhcmdldCkge1xuICAgIHZhciBpbnN0ID0gdGFyZ2V0IHx8ICh0aGlzLnByb3BzLmZpbHRlciAmJiB0aGlzLnByb3BzLm9wZW4gPyB0aGlzLnJlZnMuZmlsdGVyIDogdGhpcy5yZWZzLmlucHV0KTtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50KCkgIT09IGNvbXBhdC5maW5kRE9NTm9kZShpbnN0KSkgY29tcGF0LmZpbmRET01Ob2RlKGluc3QpLmZvY3VzKCk7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmZpbHRlcmVkRGF0YSB8fCB0aGlzLnByb3BzLmRhdGEuY29uY2F0KCk7XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbiBzZWFyY2goY2hhcmFjdGVyLCBjYikge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHdvcmQgPSAoKHRoaXMuX3NlYXJjaFRlcm0gfHwgJycpICsgY2hhcmFjdGVyKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fc2VhcmNoVGVybSA9IHdvcmQ7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ3NlYXJjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gX3RoaXM1LnJlZnMubGlzdCxcbiAgICAgICAgICBrZXkgPSBfdGhpczUucHJvcHMub3BlbiA/ICdmb2N1c2VkSXRlbScgOiAnc2VsZWN0ZWRJdGVtJyxcbiAgICAgICAgICBpdGVtID0gbGlzdC5uZXh0KF90aGlzNS5zdGF0ZVtrZXldLCB3b3JkKTtcblxuICAgICAgX3RoaXM1Ll9zZWFyY2hUZXJtID0gJyc7XG4gICAgICBpZiAoaXRlbSkgY2IoaXRlbSk7XG4gICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gIH0sXG5cbiAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICB0aGlzLm5vdGlmeSgnb25Ub2dnbGUnLCB0cnVlKTtcbiAgfSxcblxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5ub3RpZnkoJ29uVG9nZ2xlJywgZmFsc2UpO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMucHJvcHMub3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBtc2dzKG1zZ3MpIHtcbiAgcmV0dXJuIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7XG4gICAgb3BlbjogJ29wZW4gZHJvcGRvd24nLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnJyxcbiAgICBlbXB0eUxpc3Q6ICdUaGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhpcyBsaXN0JyxcbiAgICBlbXB0eUZpbHRlcjogJ1RoZSBmaWx0ZXIgcmV0dXJuZWQgbm8gcmVzdWx0cycgfSwgbXNncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVW5jb250cm9sbGVkV2lkZ2V0KERyb3Bkb3duTGlzdCwgeyBvcGVuOiAnb25Ub2dnbGUnLCB2YWx1ZTogJ29uQ2hhbmdlJywgc2VhcmNoVGVybTogJ29uU2VhcmNoJyB9KTtcblxubW9kdWxlLmV4cG9ydHMuQmFzZURyb3Bkb3duTGlzdCA9IERyb3Bkb3duTGlzdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgQnRuID0gcmVxdWlyZSgnLi9XaWRnZXRCdXR0b24nKSxcbiAgICBsb2NhbGl6ZXJzID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKS5sb2NhbGU7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy5mb290ZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0Zvb3RlcicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIG5vdyA9IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgIGZvcm1hdHRlZCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQobm93LCBmb3JtYXQodGhpcy5wcm9wcyksIHRoaXMucHJvcHMuY3VsdHVyZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdydy1mb290ZXInIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBCdG4sXG4gICAgICAgIHsgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAhIXRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiAhIXRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgcmVhZE9ubHk6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQobnVsbCwgbm93KVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXR0ZWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgQnRuID0gcmVxdWlyZSgnLi9XaWRnZXRCdXR0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbElkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgdXBEaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBwcmV2RGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbmV4dERpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uVmlld0NoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk1vdmVMZWZ0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTW92ZVJpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgbWVzc2FnZXM6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtb3ZlQmFjazogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG1vdmVGb3J3YXJkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfSxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4nKV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG1vdmVCYWNrOiAnbmF2aWdhdGUgYmFjaycsXG4gICAgICAgIG1vdmVGb3J3YXJkOiAnbmF2aWdhdGUgZm9yd2FyZCdcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgbGFiZWwgPSBfcHJvcHMubGFiZWw7XG4gICAgdmFyIGxhYmVsSWQgPSBfcHJvcHMubGFiZWxJZDtcbiAgICB2YXIgb25Nb3ZlUmlnaHQgPSBfcHJvcHMub25Nb3ZlUmlnaHQ7XG4gICAgdmFyIG9uTW92ZUxlZnQgPSBfcHJvcHMub25Nb3ZlTGVmdDtcbiAgICB2YXIgb25WaWV3Q2hhbmdlID0gX3Byb3BzLm9uVmlld0NoYW5nZTtcbiAgICB2YXIgcHJldkRpc2FibGVkID0gX3Byb3BzLnByZXZEaXNhYmxlZDtcbiAgICB2YXIgdXBEaXNhYmxlZCA9IF9wcm9wcy51cERpc2FibGVkO1xuICAgIHZhciBuZXh0RGlzYWJsZWQgPSBfcHJvcHMubmV4dERpc2FibGVkO1xuXG4gICAgdmFyIHJ0bCA9IHRoaXMuaXNSdGwoKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3J3LWhlYWRlcicgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEJ0bixcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1idG4tbGVmdCcsXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgb25DbGljazogb25Nb3ZlTGVmdCxcbiAgICAgICAgICBkaXNhYmxlZDogcHJldkRpc2FibGVkLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogcHJldkRpc2FibGVkLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbWVzc2FnZXMubW92ZUJhY2ssXG4gICAgICAgICAgdGl0bGU6IG1lc3NhZ2VzLm1vdmVCYWNrXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdhcmlhLWhpZGRlbic6ICdmYWxzZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAncnctaSBydy1pLWNhcmV0LScgKyAocnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JylcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBCdG4sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogbGFiZWxJZCxcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdydy1idG4tdmlldycsXG4gICAgICAgICAgZGlzYWJsZWQ6IHVwRGlzYWJsZWQsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB1cERpc2FibGVkLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgICAnYXJpYS1hdG9taWMnOiAndHJ1ZScsXG4gICAgICAgICAgb25DbGljazogb25WaWV3Q2hhbmdlXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQnRuLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LWJ0bi1yaWdodCcsXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgb25DbGljazogb25Nb3ZlUmlnaHQsXG4gICAgICAgICAgZGlzYWJsZWQ6IG5leHREaXNhYmxlZCxcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZXMubW92ZUZvcndhcmQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBtZXNzYWdlcy5tb3ZlRm9yd2FyZCxcbiAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IG5leHREaXNhYmxlZFxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgeyAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LWkgcnctaS1jYXJldC0nICsgKHJ0bCA/ICdsZWZ0JyA6ICdyaWdodCcpXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfTGlzdE9wdGlvbiA9IHJlcXVpcmUoJy4vTGlzdE9wdGlvbicpO1xuXG52YXIgX0xpc3RPcHRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdE9wdGlvbik7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIG9wdGlvbklkID0gZnVuY3Rpb24gb3B0aW9uSWQoaWQsIGlkeCkge1xuICByZXR1cm4gJycgKyBpZCArICdfX29wdGlvbl9fJyArIGlkeDtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdMaXN0JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhSGVscGVyc01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0xpc3RNb3ZlbWVudE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkYXRhOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3ZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBvcHRpb25Db21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGl0ZW1Db21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gICAgc2VsZWN0ZWRJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9jdXNlZEluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZUZpZWxkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0RmllbGQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmFjY2Vzc29yLFxuXG4gICAgb3B0aW9uSUQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVtcHR5TGlzdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10ubWVzc2FnZVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdElEOiAnJyxcbiAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCgpIHt9LFxuICAgICAgb3B0aW9uQ29tcG9uZW50OiBfTGlzdE9wdGlvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnbGlzdCcsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRhdGEgPSBfcHJvcHMuZGF0YTtcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wcy5mb2N1c2VkO1xuICAgIHZhciBpZHggPSBkYXRhLmluZGV4T2YoZm9jdXNlZCk7XG4gICAgdmFyIGFjdGl2ZUlkID0gb3B0aW9uSWQodGhpcy5faWQoKSwgaWR4KTtcblxuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoaWR4ICE9PSAtMSA/IGFjdGl2ZUlkIDogbnVsbCk7XG5cbiAgICB0aGlzLm1vdmUoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZTtcbiAgICB2YXIgcm9sZSA9IF9wcm9wczIucm9sZTtcbiAgICB2YXIgZGF0YSA9IF9wcm9wczIuZGF0YTtcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wczIuZm9jdXNlZDtcbiAgICB2YXIgc2VsZWN0ZWQgPSBfcHJvcHMyLnNlbGVjdGVkO1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wczIubWVzc2FnZXM7XG4gICAgdmFyIG9uU2VsZWN0ID0gX3Byb3BzMi5vblNlbGVjdDtcbiAgICB2YXIgSXRlbUNvbXBvbmVudCA9IF9wcm9wczIuaXRlbUNvbXBvbmVudDtcbiAgICB2YXIgT3B0aW9uID0gX3Byb3BzMi5vcHRpb25Db21wb25lbnQ7XG4gICAgdmFyIG9wdGlvbklEID0gX3Byb3BzMi5vcHRpb25JRDtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjbGFzc05hbWUnLCAncm9sZScsICdkYXRhJywgJ2ZvY3VzZWQnLCAnc2VsZWN0ZWQnLCAnbWVzc2FnZXMnLCAnb25TZWxlY3QnLCAnaXRlbUNvbXBvbmVudCcsICdvcHRpb25Db21wb25lbnQnLCAnb3B0aW9uSUQnXSk7XG4gICAgdmFyIGlkID0gdGhpcy5faWQoKTtcbiAgICB2YXIgaXRlbXM7XG5cbiAgICBpdGVtcyA9ICFkYXRhLmxlbmd0aCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncnctbGlzdC1lbXB0eScgfSxcbiAgICAgIF91dGlsXzJbJ2RlZmF1bHQnXS5yZXN1bHQobWVzc2FnZXMuZW1wdHlMaXN0LCB0aGlzLnByb3BzKVxuICAgICkgOiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgY3VycmVudElkID0gb3B0aW9uSWQoaWQsIGlkeCk7XG5cbiAgICAgIC8vIGlmIChmb2N1c2VkID09PSBpdGVtKVxuICAgICAgLy8gICB0aGlzLl9hY3RpdmVJRCA9IGN1cnJlbnRJZDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBPcHRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdpdGVtXycgKyBpZHgsXG4gICAgICAgICAgaWQ6IGN1cnJlbnRJZCxcbiAgICAgICAgICBkYXRhSXRlbTogaXRlbSxcbiAgICAgICAgICBmb2N1c2VkOiBmb2N1c2VkID09PSBpdGVtLFxuICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCA9PT0gaXRlbSxcbiAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdC5iaW5kKG51bGwsIGl0ZW0pXG4gICAgICAgIH0sXG4gICAgICAgIEl0ZW1Db21wb25lbnQgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChJdGVtQ29tcG9uZW50LCB7IGl0ZW06IGl0ZW0sIHZhbHVlOiBfdGhpcy5fZGF0YVZhbHVlKGl0ZW0pLCB0ZXh0OiBfdGhpcy5fZGF0YVRleHQoaXRlbSkgfSkgOiBfdGhpcy5fZGF0YVRleHQoaXRlbSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LWxpc3QnKSxcbiAgICAgICAgcm9sZTogcm9sZSA9PT0gdW5kZWZpbmVkID8gJ2xpc3Rib3gnIDogcm9sZVxuICAgICAgfSwgcHJvcHMpLFxuICAgICAgaXRlbXNcbiAgICApO1xuICB9LFxuXG4gIF9kYXRhOiBmdW5jdGlvbiBfZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICB9LFxuXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgdmFyIGxpc3QgPSBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgaWR4ID0gdGhpcy5fZGF0YSgpLmluZGV4T2YodGhpcy5wcm9wcy5mb2N1c2VkKSxcbiAgICAgICAgc2VsZWN0ZWQgPSBsaXN0LmNoaWxkcmVuW2lkeF07XG5cbiAgICBpZiAoIXNlbGVjdGVkKSByZXR1cm47XG5cbiAgICB0aGlzLm5vdGlmeSgnb25Nb3ZlJywgW3NlbGVjdGVkLCBsaXN0LCB0aGlzLnByb3BzLmZvY3VzZWRdKTtcbiAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0xpc3RPcHRpb24gPSByZXF1aXJlKCcuL0xpc3RPcHRpb24nKTtcblxudmFyIF9MaXN0T3B0aW9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RPcHRpb24pO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF91dGlsQ29tcGF0ID0gcmVxdWlyZSgnLi91dGlsL2NvbXBhdCcpO1xuXG52YXIgX3V0aWxDb21wYXQyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbXBhdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBfcmVhY3RMaWJXYXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcblxudmFyIF9yZWFjdExpYldhcm5pbmcyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RMaWJXYXJuaW5nKTtcblxudmFyIG9wdGlvbklkID0gZnVuY3Rpb24gb3B0aW9uSWQoaWQsIGlkeCkge1xuICByZXR1cm4gJycgKyBpZCArICdfX29wdGlvbl9fJyArIGlkeDtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdMaXN0JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhSGVscGVyc01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0xpc3RNb3ZlbWVudE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkYXRhOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3ZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBvcHRpb25Db21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGl0ZW1Db21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGdyb3VwQ29tcG9uZW50OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcblxuICAgIHNlbGVjdGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBmb2N1c2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcblxuICAgIHZhbHVlRmllbGQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRGaWVsZDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uYWNjZXNzb3IsXG5cbiAgICBvcHRJRDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBncm91cEJ5OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5hY2Nlc3NvcixcblxuICAgIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVtcHR5TGlzdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10ubWVzc2FnZVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdElEOiAnJyxcbiAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCgpIHt9LFxuICAgICAgZGF0YTogW10sXG4gICAgICBvcHRpb25Db21wb25lbnQ6IF9MaXN0T3B0aW9uMlsnZGVmYXVsdCddLFxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdncm91cGVkTGlzdCcsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBlbXB0eUxpc3Q6ICdUaGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhpcyBsaXN0J1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cHM6IHRoaXMuX2dyb3VwKHRoaXMucHJvcHMuZ3JvdXBCeSwgdGhpcy5wcm9wcy5kYXRhLCBrZXlzKSxcblxuICAgICAgc29ydGVkS2V5czoga2V5c1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKG5leHRQcm9wcy5kYXRhICE9PSB0aGlzLnByb3BzLmRhdGEgfHwgbmV4dFByb3BzLmdyb3VwQnkgIT09IHRoaXMucHJvcHMuZ3JvdXBCeSkgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBncm91cHM6IHRoaXMuX2dyb3VwKG5leHRQcm9wcy5ncm91cEJ5LCBuZXh0UHJvcHMuZGF0YSwga2V5cyksXG4gICAgICBzb3J0ZWRLZXlzOiBrZXlzXG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW92ZSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQodGhpcy5fY3VycmVudEFjdGl2ZUlEKTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHJvbGUgPSBfcHJvcHMucm9sZTtcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3Q7XG4gICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfcHJvcHMuc2VsZWN0ZWRJbmRleDtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdyb2xlJywgJ2RhdGEnLCAnbWVzc2FnZXMnLCAnb25TZWxlY3QnLCAnc2VsZWN0ZWRJbmRleCddKTtcbiAgICB2YXIgaWQgPSB0aGlzLl9pZCgpO3ZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBzb3J0ZWRLZXlzID0gX3N0YXRlLnNvcnRlZEtleXM7XG4gICAgdmFyIGdyb3VwcyA9IF9zdGF0ZS5ncm91cHM7XG5cbiAgICB2YXIgaXRlbXMgPSBbXSxcbiAgICAgICAgaWR4ID0gLTEsXG4gICAgICAgIGdyb3VwID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fY3VycmVudEFjdGl2ZUlEID0gbnVsbDtcblxuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgaXRlbXMgPSBzb3J0ZWRLZXlzLnJlZHVjZShmdW5jdGlvbiAoaXRlbXMsIGtleSkge1xuICAgICAgICBncm91cCA9IGdyb3Vwc1trZXldO1xuICAgICAgICBpdGVtcy5wdXNoKF90aGlzLl9yZW5kZXJHcm91cEhlYWRlcihrZXkpKTtcblxuICAgICAgICBmb3IgKHZhciBpdGVtSWR4ID0gMDsgaXRlbUlkeCA8IGdyb3VwLmxlbmd0aDsgaXRlbUlkeCsrKSBpdGVtcy5wdXNoKF90aGlzLl9yZW5kZXJJdGVtKGtleSwgZ3JvdXBbaXRlbUlkeF0sICsraWR4KSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgfSwgW10pO1xuICAgIH0gZWxzZSBpdGVtcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncnctbGlzdC1lbXB0eScgfSxcbiAgICAgIF91dGlsXzJbJ2RlZmF1bHQnXS5yZXN1bHQobWVzc2FnZXMuZW1wdHlMaXN0LCB0aGlzLnByb3BzKVxuICAgICk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICAgICAgcmVmOiAnc2Nyb2xsYWJsZScsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsICdydy1saXN0JywgJ3J3LWxpc3QtZ3JvdXBlZCcpLFxuICAgICAgICByb2xlOiByb2xlID09PSB1bmRlZmluZWQgPyAnbGlzdGJveCcgOiByb2xlXG4gICAgICB9LCBwcm9wcyksXG4gICAgICBpdGVtc1xuICAgICk7XG4gIH0sXG5cbiAgX3JlbmRlckdyb3VwSGVhZGVyOiBmdW5jdGlvbiBfcmVuZGVyR3JvdXBIZWFkZXIoZ3JvdXApIHtcbiAgICB2YXIgR3JvdXBDb21wb25lbnQgPSB0aGlzLnByb3BzLmdyb3VwQ29tcG9uZW50LFxuICAgICAgICBpZCA9IHRoaXMuX2lkKCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAge1xuICAgICAgICBrZXk6ICdpdGVtXycgKyBncm91cCxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIHJvbGU6ICdzZXBhcmF0b3InLFxuICAgICAgICBpZDogaWQgKyAnX2dyb3VwXycgKyBncm91cCxcbiAgICAgICAgY2xhc3NOYW1lOiAncnctbGlzdC1vcHRncm91cCdcbiAgICAgIH0sXG4gICAgICBHcm91cENvbXBvbmVudCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEdyb3VwQ29tcG9uZW50LCB7IGl0ZW06IGdyb3VwIH0pIDogZ3JvdXBcbiAgICApO1xuICB9LFxuXG4gIF9yZW5kZXJJdGVtOiBmdW5jdGlvbiBfcmVuZGVySXRlbShncm91cCwgaXRlbSwgaWR4KSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgdmFyIG9uU2VsZWN0ID0gX3Byb3BzMi5vblNlbGVjdDtcbiAgICB2YXIgSXRlbUNvbXBvbmVudCA9IF9wcm9wczIuaXRlbUNvbXBvbmVudDtcbiAgICB2YXIgT3B0aW9uID0gX3Byb3BzMi5vcHRpb25Db21wb25lbnQ7XG5cbiAgICB2YXIgY3VycmVudElEID0gb3B0aW9uSWQodGhpcy5faWQoKSwgaWR4KTtcblxuICAgIGlmIChmb2N1c2VkID09PSBpdGVtKSB0aGlzLl9jdXJyZW50QWN0aXZlSUQgPSBjdXJyZW50SUQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBPcHRpb24sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2l0ZW1fJyArIGdyb3VwICsgJ18nICsgaWR4LFxuICAgICAgICBpZDogY3VycmVudElELFxuICAgICAgICBkYXRhSXRlbTogaXRlbSxcbiAgICAgICAgZm9jdXNlZDogZm9jdXNlZCA9PT0gaXRlbSxcbiAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkID09PSBpdGVtLFxuICAgICAgICBvbkNsaWNrOiBvblNlbGVjdC5iaW5kKG51bGwsIGl0ZW0pXG4gICAgICB9LFxuICAgICAgSXRlbUNvbXBvbmVudCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEl0ZW1Db21wb25lbnQsIHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgdmFsdWU6IHRoaXMuX2RhdGFWYWx1ZShpdGVtKSxcbiAgICAgICAgdGV4dDogdGhpcy5fZGF0YVRleHQoaXRlbSlcbiAgICAgIH0pIDogdGhpcy5fZGF0YVRleHQoaXRlbSlcbiAgICApO1xuICB9LFxuXG4gIF9pc0luZGV4T2Y6IGZ1bmN0aW9uIF9pc0luZGV4T2YoaWR4LCBpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVtpZHhdID09PSBpdGVtO1xuICB9LFxuXG4gIF9ncm91cDogZnVuY3Rpb24gX2dyb3VwKGdyb3VwQnksIGRhdGEsIGtleXMpIHtcbiAgICB2YXIgaXRlciA9IHR5cGVvZiBncm91cEJ5ID09PSAnZnVuY3Rpb24nID8gZ3JvdXBCeSA6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbVtncm91cEJ5XTtcbiAgICB9O1xuXG4gICAgLy8gdGhlIGtleXMgYXJyYXkgZW5zdXJlcyB0aGF0IGdyb3VwcyBhcmUgcmVuZGVyZWQgaW4gdGhlIG9yZGVyIHRoZXkgY2FtZSBpblxuICAgIC8vIHdoaWNoIG1lYW5zIHRoYXQgaWYgeW91IHNvcnQgdGhlIGRhdGEgYXJyYXkgaXQgd2lsbCByZW5kZXIgc29ydGVkLFxuICAgIC8vIHNvIGxvbmcgYXMgeW91IGFsc28gc29ydGVkIGJ5IGdyb3VwXG4gICAga2V5cyA9IGtleXMgfHwgW107XG5cbiAgICAoMCwgX3JlYWN0TGliV2FybmluZzJbJ2RlZmF1bHQnXSkodHlwZW9mIGdyb3VwQnkgIT09ICdzdHJpbmcnIHx8ICFkYXRhLmxlbmd0aCB8fCBfdXRpbF8yWydkZWZhdWx0J10uaGFzKGRhdGFbMF0sIGdyb3VwQnkpLCAnW1JlYWN0IFdpZGdldHNdIFlvdSBhcmUgc2VlbSB0byBiZSB0cnlpbmcgdG8gZ3JvdXAgdGhpcyBsaXN0IGJ5IGEgJyArICgncHJvcGVydHkgYCcgKyBncm91cEJ5ICsgJ2AgdGhhdCBkb2VzblxcJ3QgZXhpc3QgaW4gdGhlIGRhdGFzZXQgaXRlbXMsIHRoaXMgbWF5IGJlIGEgdHlwbycpKTtcblxuICAgIHJldHVybiBkYXRhLnJlZHVjZShmdW5jdGlvbiAoZ3JwcywgaXRlbSkge1xuICAgICAgdmFyIGdyb3VwID0gaXRlcihpdGVtKTtcblxuICAgICAgX3V0aWxfMlsnZGVmYXVsdCddLmhhcyhncnBzLCBncm91cCkgPyBncnBzW2dyb3VwXS5wdXNoKGl0ZW0pIDogKGtleXMucHVzaChncm91cCksIGdycHNbZ3JvdXBdID0gW2l0ZW1dKTtcblxuICAgICAgcmV0dXJuIGdycHM7XG4gICAgfSwge30pO1xuICB9LFxuXG4gIF9kYXRhOiBmdW5jdGlvbiBfZGF0YSgpIHtcbiAgICB2YXIgZ3JvdXBzID0gdGhpcy5zdGF0ZS5ncm91cHM7XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0ZWRLZXlzLnJlZHVjZShmdW5jdGlvbiAoZmxhdCwgZ3JwKSB7XG4gICAgICByZXR1cm4gZmxhdC5jb25jYXQoZ3JvdXBzW2dycF0pO1xuICAgIH0sIFtdKTtcbiAgfSxcblxuICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKCkge1xuICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuZ2V0SXRlbURPTU5vZGUodGhpcy5wcm9wcy5mb2N1c2VkKTtcblxuICAgIGlmICghc2VsZWN0ZWQpIHJldHVybjtcblxuICAgIHRoaXMubm90aWZ5KCdvbk1vdmUnLCBbc2VsZWN0ZWQsIF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLnByb3BzLmZvY3VzZWRdKTtcbiAgfSxcblxuICBnZXRJdGVtRE9NTm9kZTogZnVuY3Rpb24gZ2V0SXRlbURPTU5vZGUoaXRlbSkge1xuICAgIHZhciBsaXN0ID0gX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgIGdyb3VwcyA9IHRoaXMuc3RhdGUuZ3JvdXBzLFxuICAgICAgICBpZHggPSAtMSxcbiAgICAgICAgaXRlbUlkeCxcbiAgICAgICAgY2hpbGQ7XG5cbiAgICB0aGlzLnN0YXRlLnNvcnRlZEtleXMuc29tZShmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGl0ZW1JZHggPSBncm91cHNbZ3JvdXBdLmluZGV4T2YoaXRlbSk7XG4gICAgICBpZHgrKztcblxuICAgICAgaWYgKGl0ZW1JZHggIT09IC0xKSByZXR1cm4gISEoY2hpbGQgPSBsaXN0LmNoaWxkcmVuW2lkeCArIGl0ZW1JZHggKyAxXSk7XG5cbiAgICAgIGlkeCArPSBncm91cHNbZ3JvdXBdLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIExpc3RPcHRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xpc3RPcHRpb24nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRhdGFJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBmb2N1c2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wcy5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wcy5zZWxlY3RlZDtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdmb2N1c2VkJywgJ3NlbGVjdGVkJ10pO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAncnctc3RhdGUtZm9jdXMnOiBmb2N1c2VkLFxuICAgICAgJ3J3LXN0YXRlLXNlbGVjdGVkJzogc2VsZWN0ZWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7XG4gICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAhIXNlbGVjdGVkLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWxpc3Qtb3B0aW9uJywgY2xhc3NOYW1lLCBjbGFzc2VzKVxuICAgICAgfSwgcHJvcHMpLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGlzdE9wdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsRGF0ZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0ZXMnKTtcblxudmFyIF91dGlsRGF0ZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbERhdGVzKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbmZpZ3VyYXRpb24pO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG52YXIgbG9jYWxpemVycyA9IF91dGlsQ29uZmlndXJhdGlvbjJbJ2RlZmF1bHQnXS5sb2NhbGUsXG4gICAgZGF5Rm9ybWF0ID0gZnVuY3Rpb24gZGF5Rm9ybWF0KHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5kYXlGb3JtYXQgfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHMud2Vla2RheTtcbn0sXG4gICAgZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIGRhdGVGb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmRhdGVGb3JtYXQgfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHMuZGF5T2ZNb250aDtcbn07XG5cbnZhciBvcHRpb25JZCA9IGZ1bmN0aW9uIG9wdGlvbklkKGlkLCBkYXRlKSB7XG4gIHJldHVybiAnJyArIGlkICsgJ19fbW9udGhfJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubW9udGgoZGF0ZSkgKyAnLScgKyBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmRhdGUoZGF0ZSk7XG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICBvcHRpb25JRDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gIGN1bHR1cmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBmb2N1c2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1pbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtYXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcblxuICBkYXlDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gIGRheUZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgZGF0ZUZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgZm9vdGVyRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiBpc0VxdWFsKGRhdGVBLCBkYXRlQikge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcShkYXRlQSwgZGF0ZUIsICdkYXknKTtcbn07XG5cbnZhciBNb250aFZpZXcgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTW9udGhWaWV3JyxcblxuICBzdGF0aWNzOiB7XG4gICAgaXNFcXVhbDogaXNFcXVhbFxuICB9LFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bENoaWxkQ29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgYWN0aXZlSWQgPSBvcHRpb25JZCh0aGlzLl9pZCgpLCB0aGlzLnByb3BzLmZvY3VzZWQpO1xuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoYWN0aXZlSWQsIG51bGwpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIGZvY3VzSUQgPSBfcHJvcHMuZm9jdXNJRDtcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wcy5jdWx0dXJlO1xuICAgIHZhciBtb250aCA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10udmlzaWJsZURheXMoZm9jdXNlZCwgY3VsdHVyZSk7XG4gICAgdmFyIHJvd3MgPSBfdXRpbF8yWydkZWZhdWx0J10uY2h1bmsobW9udGgsIDcpO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RhYmxlJyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJvbGU6ICdncmlkJ1xuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RoZWFkJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RyJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuX2hlYWRlcnMoZGF5Rm9ybWF0KHRoaXMucHJvcHMpLCBjdWx0dXJlKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHJvd3MubWFwKHRoaXMuX3JvdylcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9yb3c6IGZ1bmN0aW9uIF9yb3cocm93LCByb3dJZHgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZDtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG4gICAgdmFyIHRvZGF5ID0gX3Byb3BzMi50b2RheTtcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wczIuY3VsdHVyZTtcbiAgICB2YXIgbWluID0gX3Byb3BzMi5taW47XG4gICAgdmFyIG1heCA9IF9wcm9wczIubWF4O1xuICAgIHZhciBEYXkgPSBfcHJvcHMyLmRheUNvbXBvbmVudDtcbiAgICB2YXIgaWQgPSB0aGlzLl9pZCgpO1xuICAgIHZhciBsYWJlbEZvcm1hdCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzLmZvb3RlcjtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0cicsXG4gICAgICB7IGtleTogJ3dlZWtfJyArIHJvd0lkeCwgcm9sZTogJ3JvdycgfSxcbiAgICAgIHJvdy5tYXAoZnVuY3Rpb24gKGRheSwgY29sSWR4KSB7XG5cbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGlzRXF1YWwoZGF5LCBmb2N1c2VkKSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGRheSwgdmFsdWUpLFxuICAgICAgICAgICAgdG9kYXkgPSBpc0VxdWFsKGRheSwgdG9kYXkpLFxuICAgICAgICAgICAgZGF0ZSA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF5LCBkYXRlRm9ybWF0KF90aGlzLnByb3BzKSwgY3VsdHVyZSksXG4gICAgICAgICAgICBsYWJlbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF5LCBsYWJlbEZvcm1hdCwgY3VsdHVyZSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJRCA9IG9wdGlvbklkKGlkLCBkYXkpO1xuXG4gICAgICAgIHJldHVybiAhX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5pblJhbmdlKGRheSwgbWluLCBtYXgpID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7IGtleTogJ2RheV8nICsgY29sSWR4LCByb2xlOiAncHJlc2VudGF0aW9uJywgY2xhc3NOYW1lOiAncnctZW1wdHktY2VsbCcgfSxcbiAgICAgICAgICAnwqAnXG4gICAgICAgICkgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2RheV8nICsgY29sSWR4LFxuICAgICAgICAgICAgcm9sZTogJ2dyaWRjZWxsJyxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SUQsXG4gICAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IGxhYmVsLFxuICAgICAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBkaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBjdXJyZW50SUQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2hhbmdlLmJpbmQobnVsbCwgZGF5KSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdydy1idG4nLCB7XG4gICAgICAgICAgICAgICAgJ3J3LW9mZi1yYW5nZSc6IF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubW9udGgoZGF5KSAhPT0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tb250aChmb2N1c2VkKSxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgICAgICAgJ3J3LXN0YXRlLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAncnctbm93JzogdG9kYXlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBEYXkgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEYXksIHsgZGF0ZTogZGF5LCBsYWJlbDogZGF0ZSB9KSA6IGRhdGVcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgX2hlYWRlcnM6IGZ1bmN0aW9uIF9oZWFkZXJzKGZvcm1hdCwgY3VsdHVyZSkge1xuICAgIHJldHVybiBbMCwgMSwgMiwgMywgNCwgNSwgNl0ubWFwKGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RoJyxcbiAgICAgICAgeyBrZXk6ICdoZWFkZXJfJyArIGRheSB9LFxuICAgICAgICBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KGRheSwgZm9ybWF0LCBjdWx0dXJlKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9udGhWaWV3O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIF8gPSByZXF1aXJlKCcuL3V0aWwvXycpLFxuICAgIHN1cHBvcnQgPSByZXF1aXJlKCcuL3V0aWwvZG9tL3N1cHBvcnQnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0JyksXG4gICAgU2VsZWN0SW5wdXQgPSByZXF1aXJlKCcuL011bHRpc2VsZWN0SW5wdXQnKSxcbiAgICBUYWdMaXN0ID0gcmVxdWlyZSgnLi9NdWx0aXNlbGVjdFRhZ0xpc3QnKSxcbiAgICBQb3B1cCA9IHJlcXVpcmUoJy4vUG9wdXAnKSxcbiAgICBQbGFpbkxpc3QgPSByZXF1aXJlKCcuL0xpc3QnKSxcbiAgICBHcm91cGFibGVMaXN0ID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBhYmxlJyksXG4gICAgdmFsaWRhdGVMaXN0ID0gcmVxdWlyZSgnLi91dGlsL3ZhbGlkYXRlTGlzdEludGVyZmFjZScpLFxuICAgIGNyZWF0ZVVuY29udHJvbGxlZFdpZGdldCA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyksXG4gICAgQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgY29tcGF0Q3JlYXRlID0gZnVuY3Rpb24gY29tcGF0Q3JlYXRlKHByb3BzLCBtc2dzKSB7XG4gIHJldHVybiB0eXBlb2YgbXNncy5jcmVhdGVOZXcgPT09ICdmdW5jdGlvbicgPyBtc2dzLmNyZWF0ZU5ldyhwcm9wcykgOiBbUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnc3Ryb25nJyxcbiAgICBudWxsLFxuICAgICdcIicgKyBwcm9wcy5zZWFyY2hUZXJtICsgJ1wiJ1xuICApLCAnICcgKyBtc2dzLmNyZWF0ZU5ld107XG59O1xuXG52YXIgb21pdCA9IF8ub21pdDtcbnZhciBwaWNrID0gXy5waWNrO1xudmFyIHJlc3VsdCA9IF8ucmVzdWx0O1xudmFyIHNwbGF0ID0gXy5zcGxhdDtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAvLy0tIGNvbnRyb2xsZWQgcHJvcHMgLS1cbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXG4gIHNlYXJjaFRlcm06IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICBvcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25Ub2dnbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YWx1ZUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0RmllbGQ6IEN1c3RvbVByb3BUeXBlcy5hY2Nlc3NvcixcblxuICB0YWdDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgaXRlbUNvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBsaXN0Q29tcG9uZW50OiBDdXN0b21Qcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgZ3JvdXBDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgZ3JvdXBCeTogQ3VzdG9tUHJvcFR5cGVzLmFjY2Vzc29yLFxuXG4gIGNyZWF0ZUNvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25DcmVhdGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5vbmVPZihbZmFsc2VdKSwgUmVhY3QuUHJvcFR5cGVzLmZ1bmNdKSxcblxuICBkcm9wVXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlciwgLy9wb3B1cFxuXG4gIHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLmFycmF5LCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLmFycmF5LCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydyZWFkb25seSddKV0pLFxuXG4gIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wZW46IEN1c3RvbVByb3BUeXBlcy5tZXNzYWdlLFxuICAgIGVtcHR5TGlzdDogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgZW1wdHlGaWx0ZXI6IEN1c3RvbVByb3BUeXBlcy5tZXNzYWdlLFxuICAgIGNyZWF0ZU5ldzogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2VcbiAgfSlcbn07XG5cbnZhciBNdWx0aXNlbGVjdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ011bHRpc2VsZWN0JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvRGF0YUZpbHRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUG9wdXBTY3JvbGxUb01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoJ2lucHV0JywgZnVuY3Rpb24gKGtleSwgaWQpIHtcbiAgICB2YXIgbXlLZXkgPSB0aGlzLnByb3BzLmFyaWFBY3RpdmVEZXNjZW5kYW50S2V5O1xuXG4gICAgdmFyIGNyZWF0ZUlzQWN0aXZlID0gKCF0aGlzLl9kYXRhKCkubGVuZ3RoIHx8IHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0gPT09IG51bGwpICYmIGtleSA9PT0gbXlLZXk7XG5cbiAgICB2YXIgdGFnSXNBY3RpdmUgPSB0aGlzLnN0YXRlLmZvY3VzZWRUYWcgIT0gbnVsbCAmJiBrZXkgPT09ICd0YWdsaXN0JztcbiAgICB2YXIgbGlzdElzQWN0aXZlID0gdGhpcy5zdGF0ZS5mb2N1c2VkVGFnID09IG51bGwgJiYga2V5ID09PSAnbGlzdCc7XG5cbiAgICBpZiAoY3JlYXRlSXNBY3RpdmUgfHwgdGFnSXNBY3RpdmUgfHwgbGlzdElzQWN0aXZlKSByZXR1cm4gaWQ7XG4gIH0pXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBmaWx0ZXI6ICdzdGFydHNXaXRoJyxcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgc2VhcmNoVGVybTogJycsXG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ211bHRpc2VsZWN0JyxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGNyZWF0ZU5ldzogJyhjcmVhdGUgbmV3IHRhZyknLFxuICAgICAgICBlbXB0eUxpc3Q6ICdUaGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhpcyBsaXN0JyxcbiAgICAgICAgZW1wdHlGaWx0ZXI6ICdUaGUgZmlsdGVyIHJldHVybmVkIG5vIHJlc3VsdHMnLFxuICAgICAgICB0YWdzTGFiZWw6ICdzZWxlY3RlZCBpdGVtcycsXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6ICdzZWxlY3RlZCBpdGVtcycsXG4gICAgICAgIG5vbmVTZWxlY3RlZDogJ25vIHNlbGVjdGVkIGl0ZW1zJyxcbiAgICAgICAgcmVtb3ZlTGFiZWw6ICdyZW1vdmUgc2VsZWN0ZWQgaXRlbSdcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZGF0YUl0ZW1zID0gc3BsYXQodGhpcy5wcm9wcy52YWx1ZSkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2RhdGFJdGVtKF90aGlzLnByb3BzLmRhdGEsIGl0ZW0pO1xuICAgIH0pLFxuICAgICAgICBkYXRhID0gdGhpcy5wcm9jZXNzKHRoaXMucHJvcHMuZGF0YSwgZGF0YUl0ZW1zLCB0aGlzLnByb3BzLnNlYXJjaFRlcm0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzZWRUYWc6IG51bGwsXG4gICAgICBmb2N1c2VkSXRlbTogZGF0YVswXSxcbiAgICAgIHByb2Nlc3NlZERhdGE6IGRhdGEsXG4gICAgICBkYXRhSXRlbXM6IGRhdGFJdGVtc1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLl9pZCgnX19jcmVhdGVsaXN0X29wdGlvbicpKTtcblxuICAgIHRoaXMucmVmcy5saXN0ICYmIHZhbGlkYXRlTGlzdCh0aGlzLnJlZnMubGlzdCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE2OVxuICAgIGlmIChzdXBwb3J0LmlvcykgY29tcGF0LmZpbmRET01Ob2RlKHRoaXMucmVmcy53cmFwcGVyKS5vbkNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB2YWx1ZXMgPSBfLnNwbGF0KG5leHRQcm9wcy52YWx1ZSksXG4gICAgICAgIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLFxuICAgICAgICBpdGVtcyA9IHRoaXMucHJvY2VzcyhuZXh0UHJvcHMuZGF0YSwgdmFsdWVzLCBuZXh0UHJvcHMuc2VhcmNoVGVybSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2Nlc3NlZERhdGE6IGl0ZW1zLFxuICAgICAgZm9jdXNlZEl0ZW06IGl0ZW1zLmluZGV4T2YoY3VycmVudCkgPT09IC0xID8gaXRlbXNbMF0gOiBjdXJyZW50LFxuICAgICAgZGF0YUl0ZW1zOiB2YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX2RhdGFJdGVtKG5leHRQcm9wcy5kYXRhLCBpdGVtKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jeCxcbiAgICAgICAgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzZWFyY2hUZXJtID0gX3Byb3BzLnNlYXJjaFRlcm07XG4gICAgdmFyIG1heExlbmd0aCA9IF9wcm9wcy5tYXhMZW5ndGg7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciB0YWJJbmRleCA9IF9wcm9wcy50YWJJbmRleDtcbiAgICB2YXIgZ3JvdXBCeSA9IF9wcm9wcy5ncm91cEJ5O1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBidXN5ID0gX3Byb3BzLmJ1c3k7XG4gICAgdmFyIGRyb3BVcCA9IF9wcm9wcy5kcm9wVXA7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gX3Byb3BzLnBsYWNlaG9sZGVyO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3BlbiA9IF9wcm9wcy5vcGVuO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHk7XG4gICAgdmFyIFRhZ0NvbXBvbmVudCA9IF9wcm9wcy50YWdDb21wb25lbnQ7XG4gICAgdmFyIExpc3QgPSBfcHJvcHMubGlzdENvbXBvbmVudDtcblxuICAgIExpc3QgPSBMaXN0IHx8IGdyb3VwQnkgJiYgR3JvdXBhYmxlTGlzdCB8fCBQbGFpbkxpc3Q7XG5cbiAgICBtZXNzYWdlcyA9IG1zZ3MobWVzc2FnZXMpO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG4gICAgdmFyIHRhZ3NQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgWyd2YWx1ZUZpZWxkJywgJ3RleHRGaWVsZCddKTtcbiAgICB2YXIgaW5wdXRQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgWydtYXhMZW5ndGgnLCAnc2VhcmNoVGVybSddKTtcbiAgICB2YXIgbGlzdFByb3BzID0gcGljayh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhjb21wYXQudHlwZShMaXN0KS5wcm9wVHlwZXMpKTtcbiAgICB2YXIgcG9wdXBQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoY29tcGF0LnR5cGUoUG9wdXApLnByb3BUeXBlcykpO1xuXG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGZvY3VzZWRUYWcgPSBfc3RhdGUuZm9jdXNlZFRhZztcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSBfc3RhdGUuZm9jdXNlZEl0ZW07XG4gICAgdmFyIHNlbGVjdGVkSXRlbSA9IF9zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgdmFyIGZvY3VzZWQgPSBfc3RhdGUuZm9jdXNlZDtcbiAgICB2YXIgZGF0YUl0ZW1zID0gX3N0YXRlLmRhdGFJdGVtcztcblxuICAgIHZhciBpdGVtcyA9IHRoaXMuX2RhdGEoKSxcbiAgICAgICAgdGFnc0lEID0gdGhpcy5faWQoJ190YWdsaXN0JyksXG4gICAgICAgIGxpc3RJRCA9IHRoaXMuX2lkKCdfX2xpc3Rib3gnKSxcbiAgICAgICAgY3JlYXRlSUQgPSB0aGlzLl9pZCgnX19jcmVhdGVsaXN0JyksXG4gICAgICAgIGNyZWF0ZU9wdGlvbklEID0gdGhpcy5faWQoJ19fY3JlYXRlbGlzdF9vcHRpb24nKTtcblxuICAgIHZhciBzaG91bGRSZW5kZXJUYWdzID0gISFkYXRhSXRlbXMubGVuZ3RoLFxuICAgICAgICBzaG91bGRSZW5kZXJQb3B1cCA9IF8uaXNGaXJzdEZvY3VzZWRSZW5kZXIodGhpcykgfHwgb3BlbixcbiAgICAgICAgc2hvdWxkU2hvd0NyZWF0ZSA9IHRoaXMuX3Nob3VsZFNob3dDcmVhdGUoKSxcbiAgICAgICAgY3JlYXRlSXNGb2N1c2VkID0gIWl0ZW1zLmxlbmd0aCB8fCBmb2N1c2VkSXRlbSA9PT0gbnVsbDtcblxuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB2YXIgbm90aWZ5ID0gZGF0YUl0ZW1zLmxlbmd0aCA/IG1lc3NhZ2VzLnNlbGVjdGVkSXRlbXMgKyAnOiAnICsgZGF0YUl0ZW1zLm1hcCh0aGlzLl9kYXRhVGV4dCkuam9pbignLCAnKSA6IG1lc3NhZ2VzLm5vbmVTZWxlY3RlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZWxlbWVudCcsXG4gICAgICAgIGlkOiB0aGlzLl9pZCgpLFxuICAgICAgICBvbktleURvd246IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2tleURvd24pLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLCB0cnVlKSxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCAncnctd2lkZ2V0JywgJ3J3LW11bHRpc2VsZWN0JywgKF9jeCA9IHt9LCBfY3hbJ3J3LXN0YXRlLWZvY3VzJ10gPSBmb2N1c2VkLCBfY3hbJ3J3LXN0YXRlLWRpc2FibGVkJ10gPSBkaXNhYmxlZCA9PT0gdHJ1ZSwgX2N4Wydydy1zdGF0ZS1yZWFkb25seSddID0gcmVhZE9ubHkgPT09IHRydWUsIF9jeFsncnctcnRsJ10gPSB0aGlzLmlzUnRsKCksIF9jeFsncnctb3BlbicgKyAoZHJvcFVwID8gJy11cCcgOiAnJyldID0gb3BlbiwgX2N4KSkgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6ICdzdGF0dXMnLFxuICAgICAgICAgIGlkOiB0aGlzLl9pZCgnX19ub3RpZnknKSxcbiAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdzci1vbmx5JyxcbiAgICAgICAgICAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScsXG4gICAgICAgICAgJ2FyaWEtYXRvbWljJzogJ3RydWUnLFxuICAgICAgICAgICdhcmlhLXJlbGV2YW50JzogJ2FkZGl0aW9ucyByZW1vdmFscyB0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBub3RpZnlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1tdWx0aXNlbGVjdC13cmFwcGVyJywgcmVmOiAnd3JhcHBlcicgfSxcbiAgICAgICAgYnVzeSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWxvYWRpbmcnIH0pLFxuICAgICAgICBzaG91bGRSZW5kZXJUYWdzICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnTGlzdCwgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCB0YWdzUHJvcHMsIHtcbiAgICAgICAgICByZWY6ICd0YWdMaXN0JyxcbiAgICAgICAgICBpZDogdGFnc0lELFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbWVzc2FnZXMudGFnc0xhYmVsLFxuICAgICAgICAgIHZhbHVlOiBkYXRhSXRlbXMsXG4gICAgICAgICAgZm9jdXNlZDogZm9jdXNlZFRhZyxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgICAgIG9uRGVsZXRlOiB0aGlzLl9kZWxldGUsXG4gICAgICAgICAgdmFsdWVDb21wb25lbnQ6IFRhZ0NvbXBvbmVudCxcbiAgICAgICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ3RhZ2xpc3QnXG4gICAgICAgIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RJbnB1dCwgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwLFxuICAgICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IG9wZW4sXG4gICAgICAgICAgJ2FyaWEtYnVzeSc6ICEhYnVzeSxcbiAgICAgICAgICAnYXJpYS1vd25zJzogbGlzdElEICsgJyAnICsgdGhpcy5faWQoJ19fbm90aWZ5JykgKyAoc2hvdWxkUmVuZGVyVGFncyA/ICcgJyArIHRhZ3NJRCA6ICcnKSArIChzaG91bGRTaG93Q3JlYXRlID8gJyAnICsgY3JlYXRlSUQgOiAnJyksXG4gICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBzZWFyY2hUZXJtLFxuICAgICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogcmVhZE9ubHkgPT09IHRydWUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuX3BsYWNlaG9sZGVyKCksXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLl9zZWFyY2hLZXlEb3duLFxuICAgICAgICAgIG9uS2V5VXA6IHRoaXMuX3NlYXJjaGdLZXlVcCxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5fdHlwaW5nLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuX2lucHV0Rm9jdXMsXG4gICAgICAgICAgb25DbGljazogdGhpcy5faW5wdXRGb2N1c1xuICAgICAgICB9KSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBQb3B1cCxcbiAgICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwb3B1cFByb3BzLCB7XG4gICAgICAgICAgb25PcGVuaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlZnMubGlzdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuY2xvc2VcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzaG91bGRSZW5kZXJQb3B1cCAmJiBbUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoeyByZWY6ICdsaXN0JyxcbiAgICAgICAgICAgIGtleTogJzAnXG4gICAgICAgICAgfSwgbGlzdFByb3BzLCB7XG4gICAgICAgICAgICByZWFkT25seTogISFyZWFkT25seSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAhIWRpc2FibGVkLFxuICAgICAgICAgICAgaWQ6IGxpc3RJRCxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLl9pZCgpLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIW9wZW4sXG4gICAgICAgICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2xpc3QnLFxuICAgICAgICAgICAgZGF0YTogaXRlbXMsXG4gICAgICAgICAgICBmb2N1c2VkOiBmb2N1c2VkSXRlbSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLl9vblNlbGVjdCksXG4gICAgICAgICAgICBvbk1vdmU6IHRoaXMuX3Njcm9sbFRvLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgZW1wdHlMaXN0OiBkYXRhLmxlbmd0aCA/IG1lc3NhZ2VzLmVtcHR5RmlsdGVyIDogbWVzc2FnZXMuZW1wdHlMaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpLCBzaG91bGRTaG93Q3JlYXRlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgeyByb2xlOiAnbGlzdGJveCcsIGlkOiBjcmVhdGVJRCwgY2xhc3NOYW1lOiAncnctbGlzdCBydy1tdWx0aXNlbGVjdC1jcmVhdGUtdGFnJywga2V5OiAnMScgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5fb25DcmVhdGUuYmluZChudWxsLCBzZWFyY2hUZXJtKSxcbiAgICAgICAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICBpZDogY3JlYXRlT3B0aW9uSUQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAgICAgICAgICAgICAncnctbGlzdC1vcHRpb24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgJ3J3LXN0YXRlLWZvY3VzJzogY3JlYXRlSXNGb2N1c2VkXG4gICAgICAgICAgICAgICAgfSkgfSxcbiAgICAgICAgICAgICAgY29tcGF0Q3JlYXRlKHRoaXMucHJvcHMsIG1lc3NhZ2VzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICldXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9kYXRhOiBmdW5jdGlvbiBfZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcm9jZXNzZWREYXRhO1xuICB9LFxuXG4gIF9kZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUodmFsdWUpIHtcbiAgICB0aGlzLl9mb2N1cyh0cnVlKTtcbiAgICB0aGlzLmNoYW5nZSh0aGlzLnN0YXRlLmRhdGFJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkICE9PSB2YWx1ZTtcbiAgICB9KSk7XG4gIH0sXG5cbiAgX2lucHV0Rm9jdXM6IGZ1bmN0aW9uIF9pbnB1dEZvY3VzKCkge1xuICAgIHRoaXMuX2ZvY3VzKHRydWUpO1xuICAgICF0aGlzLnByb3BzLm9wZW4gJiYgdGhpcy5vcGVuKCk7XG4gIH0sXG5cbiAgX2ZvY3VzOiBmdW5jdGlvbiBfZm9jdXMoZm9jdXNlZCwgZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcblxuICAgIGlmIChmb2N1c2VkKSB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWZvY3VzZWQpIF90aGlzNC5yZWZzLnRhZ0xpc3QgJiYgX3RoaXM0LnNldFN0YXRlKHsgZm9jdXNlZFRhZzogbnVsbCB9KTtcblxuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzNC5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIGZvY3VzZWQgPyBfdGhpczQub3BlbigpIDogX3RoaXM0LmNsb3NlKCk7XG5cbiAgICAgICAgX3RoaXM0Lm5vdGlmeShmb2N1c2VkID8gJ29uRm9jdXMnIDogJ29uQmx1cicsIGUpO1xuICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBmb2N1c2VkOiBmb2N1c2VkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIF9zZWFyY2hLZXlEb3duOiBmdW5jdGlvbiBfc2VhcmNoS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJyAmJiBlLnRhcmdldC52YWx1ZSAmJiAhdGhpcy5fZGVsZXRpbmdUZXh0KSB0aGlzLl9kZWxldGluZ1RleHQgPSB0cnVlO1xuICB9LFxuXG4gIF9zZWFyY2hnS2V5VXA6IGZ1bmN0aW9uIF9zZWFyY2hnS2V5VXAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgdGhpcy5fZGVsZXRpbmdUZXh0KSB0aGlzLl9kZWxldGluZ1RleHQgPSBmYWxzZTtcbiAgfSxcblxuICBfdHlwaW5nOiBmdW5jdGlvbiBfdHlwaW5nKGUpIHtcbiAgICB0aGlzLm5vdGlmeSgnb25TZWFyY2gnLCBbZS50YXJnZXQudmFsdWVdKTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfSxcblxuICBfb25TZWxlY3Q6IGZ1bmN0aW9uIF9vblNlbGVjdChkYXRhKSB7XG5cbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNyZWF0ZSkgdGhpcy5fb25DcmVhdGUodGhpcy5wcm9wcy5zZWFyY2hUZXJtKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KCdvblNlbGVjdCcsIGRhdGEpO1xuICAgIHRoaXMuY2hhbmdlKHRoaXMuc3RhdGUuZGF0YUl0ZW1zLmNvbmNhdChkYXRhKSk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5fZm9jdXModHJ1ZSk7XG4gIH0sXG5cbiAgX29uQ3JlYXRlOiBmdW5jdGlvbiBfb25DcmVhdGUodGFnKSB7XG4gICAgaWYgKHRhZy50cmltKCkgPT09ICcnKSByZXR1cm47XG5cbiAgICB0aGlzLm5vdGlmeSgnb25DcmVhdGUnLCB0YWcpO1xuICAgIHRoaXMucHJvcHMuc2VhcmNoVGVybSAmJiB0aGlzLm5vdGlmeSgnb25TZWFyY2gnLCBbJyddKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLl9mb2N1cyh0cnVlKTtcbiAgfSxcblxuICBfa2V5RG93bjogZnVuY3Rpb24gX2tleURvd24oZSkge1xuICAgIHZhciBrZXkgPSBlLmtleTtcbiAgICB2YXIgYWx0S2V5ID0gZS5hbHRLZXk7XG4gICAgdmFyIGN0cmxLZXkgPSBlLmN0cmxLZXk7XG4gICAgdmFyIG5vU2VhcmNoID0gIXRoaXMucHJvcHMuc2VhcmNoVGVybSAmJiAhdGhpcy5fZGVsZXRpbmdUZXh0O1xuICAgIHZhciBpc09wZW4gPSB0aGlzLnByb3BzLm9wZW47dmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBmb2N1c2VkVGFnID0gX3N0YXRlMi5mb2N1c2VkVGFnO1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IF9zdGF0ZTIuZm9jdXNlZEl0ZW07XG4gICAgdmFyIF9yZWZzID0gdGhpcy5yZWZzO1xuICAgIHZhciBsaXN0ID0gX3JlZnMubGlzdDtcbiAgICB2YXIgdGFnTGlzdCA9IF9yZWZzLnRhZ0xpc3Q7XG5cbiAgICB2YXIgbnVsbFRhZyA9IHsgZm9jdXNlZFRhZzogbnVsbCB9O1xuXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHZhciBuZXh0ID0gbGlzdC5uZXh0KGZvY3VzZWRJdGVtKSxcbiAgICAgICAgICBjcmVhdGluZyA9IHRoaXMuX3Nob3VsZFNob3dDcmVhdGUoKSAmJiBmb2N1c2VkSXRlbSA9PT0gbmV4dCB8fCBmb2N1c2VkSXRlbSA9PT0gbnVsbDtcblxuICAgICAgbmV4dCA9IGNyZWF0aW5nID8gbnVsbCA6IG5leHQ7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoYmFiZWxIZWxwZXJzLl9leHRlbmRzKHsgZm9jdXNlZEl0ZW06IG5leHQgfSwgbnVsbFRhZykpO2Vsc2UgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgdmFyIHByZXYgPSBmb2N1c2VkSXRlbSA9PT0gbnVsbCA/IGxpc3QubGFzdCgpIDogbGlzdC5wcmV2KGZvY3VzZWRJdGVtKTtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoYWx0S2V5KSB0aGlzLmNsb3NlKCk7ZWxzZSBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7IGZvY3VzZWRJdGVtOiBwcmV2IH0sIG51bGxUYWcpKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VuZCcpIHtcbiAgICAgIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoYmFiZWxIZWxwZXJzLl9leHRlbmRzKHsgZm9jdXNlZEl0ZW06IGxpc3QubGFzdCgpIH0sIG51bGxUYWcpKTtlbHNlIHRhZ0xpc3QgJiYgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWc6IHRhZ0xpc3QubGFzdCgpIH0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSG9tZScpIHtcbiAgICAgIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoYmFiZWxIZWxwZXJzLl9leHRlbmRzKHsgZm9jdXNlZEl0ZW06IGxpc3QuZmlyc3QoKSB9LCBudWxsVGFnKSk7ZWxzZSB0YWdMaXN0ICYmIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVGFnOiB0YWdMaXN0LmZpcnN0KCkgfSk7XG4gICAgfSBlbHNlIGlmIChpc09wZW4gJiYga2V5ID09PSAnRW50ZXInKSBjdHJsS2V5ICYmIHRoaXMucHJvcHMub25DcmVhdGUgfHwgZm9jdXNlZEl0ZW0gPT09IG51bGwgPyB0aGlzLl9vbkNyZWF0ZSh0aGlzLnByb3BzLnNlYXJjaFRlcm0pIDogdGhpcy5fb25TZWxlY3QodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSk7ZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJykgaXNPcGVuID8gdGhpcy5jbG9zZSgpIDogdGFnTGlzdCAmJiB0aGlzLnNldFN0YXRlKG51bGxUYWcpO2Vsc2UgaWYgKG5vU2VhcmNoICYmIGtleSA9PT0gJ0Fycm93TGVmdCcpIHRhZ0xpc3QgJiYgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWc6IHRhZ0xpc3QucHJldihmb2N1c2VkVGFnKSB9KTtlbHNlIGlmIChub1NlYXJjaCAmJiBrZXkgPT09ICdBcnJvd1JpZ2h0JykgdGFnTGlzdCAmJiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRhZzogdGFnTGlzdC5uZXh0KGZvY3VzZWRUYWcpIH0pO2Vsc2UgaWYgKG5vU2VhcmNoICYmIGtleSA9PT0gJ0RlbGV0ZScpIHRhZ0xpc3QgJiYgdGFnTGlzdC5yZW1vdmUoZm9jdXNlZFRhZyk7ZWxzZSBpZiAobm9TZWFyY2ggJiYga2V5ID09PSAnQmFja3NwYWNlJykgdGFnTGlzdCAmJiB0YWdMaXN0LnJlbW92ZU5leHQoKTtcblxuICAgIHRoaXMubm90aWZ5KCdvbktleURvd24nLCBbZV0pO1xuICB9LFxuXG4gIC8vIF9maXJzdEZvY3VzKCl7XG4gIC8vICAgdGhpcy5vcGVuKClcbiAgLy8gfVxuXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGRhdGEpIHtcbiAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBbZGF0YV0pO1xuICAgIHRoaXMucHJvcHMuc2VhcmNoVGVybSAmJiB0aGlzLm5vdGlmeSgnb25TZWFyY2gnLCBbJyddKTtcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgIGlmICghKHRoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWUgfHwgdGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSkpIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIHRydWUpO1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLm5vdGlmeSgnb25Ub2dnbGUnLCBmYWxzZSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH0sXG5cbiAgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcyhkYXRhLCB2YWx1ZXMsIHNlYXJjaFRlcm0pIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBpdGVtcyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gIXZhbHVlcy5zb21lKF90aGlzNS5fdmFsdWVNYXRjaGVyLmJpbmQobnVsbCwgaSksIF90aGlzNSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAoc2VhcmNoVGVybSkgaXRlbXMgPSB0aGlzLmZpbHRlcihpdGVtcywgc2VhcmNoVGVybSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH0sXG5cbiAgX3Nob3VsZFNob3dDcmVhdGU6IGZ1bmN0aW9uIF9zaG91bGRTaG93Q3JlYXRlKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIHRleHQgPSB0aGlzLnByb3BzLnNlYXJjaFRlcm07XG5cbiAgICBpZiAoIXRoaXMucHJvcHMub25DcmVhdGUgfHwgIXRleHQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGFuIGV4YWN0IG1hdGNoIG9uIHRleHRGaWVsZHM6IFwiam9oblwiID0+IHsgbmFtZTogXCJqb2huXCIgfSwgZG9uJ3Qgc2hvd1xuICAgIHJldHVybiAhdGhpcy5fZGF0YSgpLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBfdGhpczYuX2RhdGFUZXh0KHYpID09PSB0ZXh0O1xuICAgIH0pICYmICF0aGlzLnN0YXRlLmRhdGFJdGVtcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gX3RoaXM2Ll9kYXRhVGV4dCh2KSA9PT0gdGV4dDtcbiAgICB9KTtcbiAgfSxcblxuICBfcGxhY2Vob2xkZXI6IGZ1bmN0aW9uIF9wbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMudmFsdWUgfHwgW10pLmxlbmd0aCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCAnJztcbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gbXNncyhtc2dzKSB7XG4gIHJldHVybiBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe1xuICAgIGNyZWF0ZU5ldzogJyhjcmVhdGUgbmV3IHRhZyknLFxuICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnLFxuICAgIGVtcHR5RmlsdGVyOiAnVGhlIGZpbHRlciByZXR1cm5lZCBubyByZXN1bHRzJyxcbiAgICB0YWdzTGFiZWw6ICdzZWxlY3RlZCBpdGVtcycsXG4gICAgc2VsZWN0ZWRJdGVtczogJ3NlbGVjdGVkIGl0ZW1zJyxcbiAgICByZW1vdmVMYWJlbDogJ3JlbW92ZSBzZWxlY3RlZCBpdGVtJyB9LCBtc2dzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVVbmNvbnRyb2xsZWRXaWRnZXQoTXVsdGlzZWxlY3QsIHsgb3BlbjogJ29uVG9nZ2xlJywgdmFsdWU6ICdvbkNoYW5nZScsIHNlYXJjaFRlcm06ICdvblNlYXJjaCcgfSk7XG5cbi8vIGZ1bmN0aW9uIGRlZmF1bHRDaGFuZ2UoKXtcbi8vICAgaWYgKCB0aGlzLnByb3BzLnNlYXJjaFRlcm0gPT09IHVuZGVmaW5lZCApXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06ICcnIH0pXG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzLkJhc2VNdWx0aXNlbGVjdCA9IE11bHRpc2VsZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTXVsdGlzZWxlY3RJbnB1dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4TGVuZ3RoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXG4gICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMuZm9jdXNlZCAmJiB0aGlzLmZvY3VzKCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICBzaXplID0gTWF0aC5tYXgoKHZhbHVlIHx8IHBsYWNlaG9sZGVyKS5sZW5ndGgsIDEpICsgMTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiAncnctaW5wdXQnLFxuICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICdhcmlhLXJlYWRvbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgcmVhZE9ubHk6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBzaXplOiBzaXplXG4gICAgfSkpO1xuICB9LFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBjb21wYXQuZmluZERPTU5vZGUodGhpcykuZm9jdXMoKTtcbiAgfVxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBfbWl4aW5zV2lkZ2V0TWl4aW4gPSByZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpO1xuXG52YXIgX21peGluc1dpZGdldE1peGluMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21peGluc1dpZGdldE1peGluKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBfID0gcmVxdWlyZSgnLi91dGlsL18nKSxcbiAgICBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBvcHRpb25JZCA9IGZ1bmN0aW9uIG9wdGlvbklkKGlkLCBpZHgpIHtcbiAgcmV0dXJuICcnICsgaWQgKyAnX19vcHRpb25fXycgKyBpZHg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ011bHRpc2VsZWN0VGFnTGlzdCcsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvRGF0YUhlbHBlcnNNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgZm9jdXNlZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAgIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dEZpZWxkOiBDdXN0b21Qcm9wVHlwZXMuYWNjZXNzb3IsXG5cbiAgICB2YWx1ZUNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5hcnJheSwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnZGlzYWJsZWQnXSldKSxcblxuICAgIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLmFycmF5LCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydyZWFkb25seSddKV0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAndGFnbGlzdCdcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wcy5mb2N1c2VkO1xuICAgIHZhciBhY3RpdmVJZCA9IG9wdGlvbklkKF9taXhpbnNXaWRnZXRNaXhpbjJbJ2RlZmF1bHQnXS5faWQuY2FsbCh0aGlzKSwgZm9jdXNlZCk7XG5cbiAgICB0aGlzLmFyaWFBY3RpdmVEZXNjZW5kYW50KGZvY3VzZWQgPT0gbnVsbCB8fCB0aGlzLmlzRGlzYWJsZWQoZm9jdXNlZCkgPyBudWxsIDogYWN0aXZlSWQpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgVmFsdWVDb21wb25lbnQgPSB0aGlzLnByb3BzLnZhbHVlQ29tcG9uZW50O1xuICAgIHZhciBwcm9wcyA9IF8ub21pdCh0aGlzLnByb3BzLCBbJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ3JlYWRPbmx5J10pO1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wczIuZm9jdXNlZDtcbiAgICB2YXIgb3B0aW9uSUQgPSBfcHJvcHMyLm9wdGlvbklEO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG5cbiAgICB2YXIgaWQgPSBfbWl4aW5zV2lkZ2V0TWl4aW4yWydkZWZhdWx0J10uX2lkLmNhbGwodGhpcyk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3J3LW11bHRpc2VsZWN0LXRhZ2xpc3QnXG4gICAgICB9KSxcbiAgICAgIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IF90aGlzLmlzRGlzYWJsZWQoaXRlbSksXG4gICAgICAgICAgICBpc1JlYWRvbmx5ID0gX3RoaXMuaXNSZWFkT25seShpdGVtKSxcbiAgICAgICAgICAgIGlzRm9jdXNlZCA9ICFpc0Rpc2FibGVkICYmIGZvY3VzZWQgPT09IGksXG4gICAgICAgICAgICBjdXJyZW50SUQgPSBvcHRpb25JZChpZCwgaSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xpJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICBpZDogY3VycmVudElELFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgICAgICdydy1zdGF0ZS1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICAgICdydy1zdGF0ZS1yZWFkb25seSc6IGlzUmVhZG9ubHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBWYWx1ZUNvbXBvbmVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb21wb25lbnQsIHsgaXRlbTogaXRlbSB9KSA6IF90aGlzLl9kYXRhVGV4dChpdGVtKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgICAgb25DbGljazogIShpc0Rpc2FibGVkIHx8IGlzUmVhZG9ubHkpICYmIF90aGlzLl9kZWxldGUuYmluZChudWxsLCBpdGVtKSxcbiAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdVbnNlbGVjdCcsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LXRhZy1idG4nLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcbiAgICAgICAgICAgICAgJ8OXJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBfZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKHZhbCkge1xuICAgIHRoaXMucHJvcHMub25EZWxldGUodmFsKTtcbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpZHgpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5wcm9wcy52YWx1ZVtpZHhdO1xuXG4gICAgaWYgKHZhbCAmJiAhKHRoaXMuaXNEaXNhYmxlZCh2YWwpIHx8IHRoaXMuaXNSZWFkT25seSh2YWwpKSkgdGhpcy5wcm9wcy5vbkRlbGV0ZSh2YWwpO1xuICB9LFxuXG4gIHJlbW92ZU5leHQ6IGZ1bmN0aW9uIHJlbW92ZU5leHQoKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMucHJvcHMudmFsdWVbdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgIGlmICh2YWwgJiYgISh0aGlzLmlzRGlzYWJsZWQodmFsKSB8fCB0aGlzLmlzUmVhZE9ubHkodmFsKSkpIHRoaXMucHJvcHMub25EZWxldGUodmFsKTtcbiAgfSxcblxuICBpc0Rpc2FibGVkOiBmdW5jdGlvbiBpc0Rpc2FibGVkKHZhbCwgaXNJZHgpIHtcbiAgICBpZiAoaXNJZHgpIHZhbCA9IHRoaXMucHJvcHMudmFsdWVbdmFsXTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmRpc2FibGVkID09PSB0cnVlIHx8IHRoaXMuX2RhdGFJbmRleE9mKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgW10sIHZhbCkgIT09IC0xO1xuICB9LFxuXG4gIGlzUmVhZE9ubHk6IGZ1bmN0aW9uIGlzUmVhZE9ubHkodmFsLCBpc0lkeCkge1xuICAgIGlmIChpc0lkeCkgdmFsID0gdGhpcy5wcm9wcy52YWx1ZVt2YWxdO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWUgfHwgdGhpcy5fZGF0YUluZGV4T2YodGhpcy5wcm9wcy5yZWFkT25seSB8fCBbXSwgdmFsKSAhPT0gLTE7XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBudWxsIH0pO1xuICB9LFxuXG4gIGZpcnN0OiBmdW5jdGlvbiBmaXJzdCgpIHtcbiAgICB2YXIgaWR4ID0gMCxcbiAgICAgICAgbCA9IHRoaXMucHJvcHMudmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGlkeCA8IGwgJiYgdGhpcy5pc0Rpc2FibGVkKGlkeCwgdHJ1ZSkpIGlkeCsrO1xuXG4gICAgcmV0dXJuIGlkeCAhPT0gbCA/IGlkeCA6IG51bGw7XG4gIH0sXG5cbiAgbGFzdDogZnVuY3Rpb24gbGFzdCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggLSAxO1xuXG4gICAgd2hpbGUgKGlkeCA+IC0xICYmIHRoaXMuaXNEaXNhYmxlZChpZHgsIHRydWUpKSBpZHgtLTtcblxuICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCA6IG51bGw7XG4gIH0sXG5cbiAgbmV4dDogZnVuY3Rpb24gbmV4dChjdXJyZW50KSB7XG4gICAgdmFyIG5leHRJZHggPSBjdXJyZW50ICsgMSxcbiAgICAgICAgbCA9IHRoaXMucHJvcHMudmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKG5leHRJZHggPCBsICYmIHRoaXMuaXNEaXNhYmxlZChuZXh0SWR4LCB0cnVlKSkgbmV4dElkeCsrO1xuXG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwgfHwgbmV4dElkeCA+PSBsKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBuZXh0SWR4O1xuICB9LFxuXG4gIHByZXY6IGZ1bmN0aW9uIHByZXYoY3VycmVudCkge1xuICAgIHZhciBuZXh0SWR4ID0gY3VycmVudDtcblxuICAgIGlmIChuZXh0SWR4ID09PSBudWxsIHx8IG5leHRJZHggPT09IDApIG5leHRJZHggPSB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aDtcblxuICAgIG5leHRJZHgtLTtcblxuICAgIHdoaWxlIChuZXh0SWR4ID4gLTEgJiYgdGhpcy5pc0Rpc2FibGVkKG5leHRJZHgsIHRydWUpKSBuZXh0SWR4LS07XG5cbiAgICByZXR1cm4gbmV4dElkeCA+PSAwID8gbmV4dElkeCA6IG51bGw7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyksXG4gICAgbG9jYWxpemVycyA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJykubG9jYWxlO1xuXG52YXIgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5mb3JtYXQgfHwgbG9jYWxpemVycy5udW1iZXIuZm9ybWF0c1snZGVmYXVsdCddO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdOdW1iZXJQaWNrZXJJbnB1dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBmb3JtYXQ6IEN1c3RvbVByb3BUeXBlcy5udW1iZXJGb3JtYXQsXG4gICAgcGFyc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VsdHVyZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG1pbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uS2V5RG93bjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBlZGl0aW5nOiBmYWxzZSxcbiAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShudW1iZXIsIGN1bHR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplcnMubnVtYmVyLnBhcnNlKG51bWJlciwgY3VsdHVyZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0U3RhdGU6IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZShwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLmVkaXRpbmcgPyBwcm9wcy52YWx1ZSA6IGZvcm1hdE51bWJlcihwcm9wcy52YWx1ZSwgZm9ybWF0KHByb3BzKSwgcHJvcHMuY3VsdHVyZSk7XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBpc05hTihwcm9wcy52YWx1ZSkpIHZhbHVlID0gJyc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RyaW5nVmFsdWU6ICcnICsgdmFsdWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXREZWZhdWx0U3RhdGUobmV4dFByb3BzKSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS5zdHJpbmdWYWx1ZTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiAncnctaW5wdXQnLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2NoYW5nZSxcbiAgICAgIG9uQmx1cjogdGhpcy5fZmluaXNoLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgIHZhbHVlOiB2YWx1ZSB9KSk7XG4gIH0sXG5cbiAgX2NoYW5nZTogZnVuY3Rpb24gX2NoYW5nZShlKSB7XG4gICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICBudW1iZXIgPSB0aGlzLnByb3BzLnBhcnNlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLmN1bHR1cmUpLFxuICAgICAgICB2YWxpZCA9IHRoaXMuaXNWYWxpZChudW1iZXIpO1xuXG4gICAgaWYgKHZhbCA9PSBudWxsIHx8IHZhbC50cmltKCkgPT09ICcnKSByZXR1cm4gdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcblxuICAgIGlmICh2YWxpZCAmJiBudW1iZXIgIT09IHRoaXMucHJvcHMudmFsdWUgJiYgIXRoaXMuaXNBdERlbGltaXRlcihudW1iZXIsIHZhbCkpIHJldHVybiB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bWJlcik7XG5cbiAgICAvL2NvbnNvbGUubG9nKHZhbCAhPT0gMCAmJiAhdmFsKVxuICAgIGlmICghaXNOYU4obnVtYmVyKSB8fCB0aGlzLmlzQXREZWxpbWl0ZXIobnVtYmVyLCB2YWwpKSB0aGlzLmN1cnJlbnQoZS50YXJnZXQudmFsdWUpO1xuICB9LFxuXG4gIF9maW5pc2g6IGZ1bmN0aW9uIF9maW5pc2goKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuc3RhdGUuc3RyaW5nVmFsdWUsXG4gICAgICAgIG51bWJlciA9IHRoaXMucHJvcHMucGFyc2Uoc3RyLCB0aGlzLnByb3BzLmN1bHR1cmUpO1xuXG4gICAgLy8gaWYgbnVtYmVyIGlzIGJlbG93IHRoZSBtaW5cbiAgICAvLyB3ZSBuZWVkIHRvIGZsdXNoIGxvdyB2YWx1ZXMgYW5kIGRlY2ltYWwgc3RvcHMsIG9uQmx1ciBtZWFucyBpJ20gZG9uZSBpbnB1dGluZ1xuICAgIGlmICghaXNOYU4obnVtYmVyKSAmJiAobnVtYmVyIDwgdGhpcy5wcm9wcy5taW4gfHwgdGhpcy5pc0F0RGVsaW1pdGVyKG51bWJlciwgc3RyKSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVtYmVyKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNBdERlbGltaXRlcjogZnVuY3Rpb24gaXNBdERlbGltaXRlcihudW0sIHN0cikge1xuICAgIHZhciBuZXh0O1xuXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbmV4dCA9IHRoaXMucHJvcHMucGFyc2Uoc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSksIHRoaXMucHJvcHMuY3VsdHVyZSk7XG5cbiAgICByZXR1cm4gdHlwZW9mIG5leHQgPT09ICdudW1iZXInICYmICFpc05hTihuZXh0KSAmJiBuZXh0ID09PSBudW07XG4gIH0sXG5cbiAgaXNWYWxpZDogZnVuY3Rpb24gaXNWYWxpZChudW0pIHtcbiAgICBpZiAodHlwZW9mIG51bSAhPT0gJ251bWJlcicgfHwgaXNOYU4obnVtKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBudW0gPj0gdGhpcy5wcm9wcy5taW47XG4gIH0sXG5cbiAgLy90aGlzIGludGVybWVkaWF0ZSBzdGF0ZSBpcyBmb3Igd2hlbiBvbmUgcnVucyBpbnRvIHRoZSBkZWNpbWFsIG9yIGFyZSB0eXBpbmcgdGhlIG51bWJlclxuICBjdXJyZW50OiBmdW5jdGlvbiBjdXJyZW50KHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHJpbmdWYWx1ZTogdmFsIH0pO1xuICB9XG5cbn0pO1xuXG4vLyBmdW5jdGlvbiBwYXJzZUxvY2FsZUZsb2F0KG51bWJlciwgcGFyc2VyLCBjdWx0dXJlKSB7XG4vLyAgIGlmICggdHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJylcbi8vICAgICByZXR1cm4gZm9ybWF0KG51bWJlciwgY3VsdHVyZSlcblxuLy8gICByZXR1cm4gY29uZmlnLmdsb2JhbGl6ZS5wYXJzZUZsb2F0KG51bWJlciwgMTAsIGN1bHR1cmUpXG4vLyB9XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGZvcm1hdCwgY3VsdHVyZSkge1xuICByZXR1cm4gbG9jYWxpemVycy5udW1iZXIuZm9ybWF0KG51bWJlciwgZm9ybWF0LCBjdWx0dXJlKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgXyA9IHJlcXVpcmUoJy4vdXRpbC9fJykgLy9vbWl0XG4sXG4gICAgY29tcGF0ID0gcmVxdWlyZSgnLi91dGlsL2NvbXBhdCcpLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKSxcbiAgICBjcmVhdGVVbmNvbnRyb2xsZWRXaWRnZXQgPSByZXF1aXJlKCd1bmNvbnRyb2xsYWJsZScpLFxuICAgIGRpcmVjdGlvbnMgPSByZXF1aXJlKCcuL3V0aWwvY29uc3RhbnRzJykuZGlyZWN0aW9ucyxcbiAgICByZXBlYXRlciA9IHJlcXVpcmUoJy4vdXRpbC9yZXBlYXRlcicpLFxuICAgIGxvY2FsaXplcnMgPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpLmxvY2FsZSxcbiAgICBJbnB1dCA9IHJlcXVpcmUoJy4vTnVtYmVySW5wdXQnKTtcblxudmFyIEJ0biA9IHJlcXVpcmUoJy4vV2lkZ2V0QnV0dG9uJyk7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmZvcm1hdCB8fCBsb2NhbGl6ZXJzLm51bWJlci5mb3JtYXRzWydkZWZhdWx0J107XG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuXG4gIC8vIC0tIGNvbnRyb2xsZWQgcHJvcHMgLS0tLS0tLS0tLS1cbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBtaW46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG1heDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICBwcmVjaXNpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgY3VsdHVyZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICBmb3JtYXQ6IEN1c3RvbVByb3BUeXBlcy5udW1iZXJGb3JtYXQsXG5cbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICBwYXJzZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cbiAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsncmVhZE9ubHknXSldKSxcblxuICBtZXNzYWdlczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpbmNyZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjcmVtZW50OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG52YXIgTnVtYmVyUGlja2VyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTnVtYmVyUGlja2VyJyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUHVyZVJlbmRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbicpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBvcGVuOiBmYWxzZSxcblxuICAgICAgbWluOiAtSW5maW5pdHksXG4gICAgICBtYXg6IEluZmluaXR5LFxuICAgICAgc3RlcDogMSxcblxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgaW5jcmVtZW50OiAnaW5jcmVtZW50IHZhbHVlJyxcbiAgICAgICAgZGVjcmVtZW50OiAnZGVjcmVtZW50IHZhbHVlJ1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF8kb21pdCA9IF8ub21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKTtcblxuICAgIHZhciBjbGFzc05hbWUgPSBfJG9taXQuY2xhc3NOYW1lO1xuICAgIHZhciBvbktleURvd24gPSBfJG9taXQub25LZXlEb3duO1xuICAgIHZhciBvbktleVByZXNzID0gXyRvbWl0Lm9uS2V5UHJlc3M7XG4gICAgdmFyIG9uS2V5VXAgPSBfJG9taXQub25LZXlVcDtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoXyRvbWl0LCBbJ2NsYXNzTmFtZScsICdvbktleURvd24nLCAnb25LZXlQcmVzcycsICdvbktleVVwJ10pO1xuICAgIHZhciB2YWwgPSB0aGlzLmNvbnN0cmFpblZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZWxlbWVudCcsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fa2V5RG93bixcbiAgICAgICAgb25Gb2N1czogdGhpcy5fZm9jdXMuYmluZChudWxsLCB0cnVlKSxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCAncnctbnVtYmVycGlja2VyJywgJ3J3LXdpZGdldCcsIHtcbiAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICAgJ3J3LXN0YXRlLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAncnctc3RhdGUtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgICAgICdydy1ydGwnOiB0aGlzLmlzUnRsKClcbiAgICAgICAgfSkgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncnctc2VsZWN0JyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEJ0bixcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3goeyAncnctc3RhdGUtYWN0aXZlJzogdGhpcy5zdGF0ZS5hY3RpdmUgPT09IGRpcmVjdGlvbnMuVVAgfSksXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5fbW91c2VEb3duLmJpbmQobnVsbCwgZGlyZWN0aW9ucy5VUCksXG4gICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuX21vdXNlVXAuYmluZChudWxsLCBkaXJlY3Rpb25zLlVQKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksXG4gICAgICAgICAgICBkaXNhYmxlZDogdmFsID09PSB0aGlzLnByb3BzLm1heCB8fCB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB2YWwgPT09IHRoaXMucHJvcHMubWF4IHx8IHRoaXMucHJvcHMuZGlzYWJsZWQgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2knLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2FyZXQtdXAnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncnctc3InIH0sXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMubWVzc2FnZXMuaW5jcmVtZW50XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEJ0bixcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3goeyAncnctc3RhdGUtYWN0aXZlJzogdGhpcy5zdGF0ZS5hY3RpdmUgPT09IGRpcmVjdGlvbnMuRE9XTiB9KSxcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9tb3VzZURvd24uYmluZChudWxsLCBkaXJlY3Rpb25zLkRPV04pLFxuICAgICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLl9tb3VzZVVwLmJpbmQobnVsbCwgZGlyZWN0aW9ucy5ET1dOKSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksXG4gICAgICAgICAgICBkaXNhYmxlZDogdmFsID09PSB0aGlzLnByb3BzLm1pbiB8fCB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB2YWwgPT09IHRoaXMucHJvcHMubWluIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2knLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2FyZXQtZG93bicgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zcicgfSxcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlcy5kZWNyZW1lbnRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4LFxuICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICBlZGl0aW5nOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgIGZvcm1hdDogdGhpcy5wcm9wcy5mb3JtYXQsXG4gICAgICAgIHBhcnNlOiB0aGlzLnByb3BzLnBhcnNlLFxuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgIHJvbGU6ICdzcGluYnV0dG9uJyxcbiAgICAgICAgbWluOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB2YWwsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogaXNGaW5pdGUodGhpcy5wcm9wcy5taW4pID8gdGhpcy5wcm9wcy5taW4gOiBudWxsLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IGlzRmluaXRlKHRoaXMucHJvcHMubWF4KSA/IHRoaXMucHJvcHMubWF4IDogbnVsbCxcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAnYXJpYS1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZG9ubHksXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuY2hhbmdlLFxuICAgICAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICAgICAgb25LZXlQcmVzczogb25LZXlQcmVzcyxcbiAgICAgICAgb25LZXlVcDogb25LZXlVcCB9KVxuICAgICk7XG4gIH0sXG5cbiAgLy9hbGxvdyBmb3Igc3R5bGluZywgZm9jdXMgc3RlYWxpbmcga2VlcGluZyBtZSBmcm9tIHRoZSBub3JtYWwgd2hhdCBoYXZlIHlvdVxuICBfbW91c2VEb3duOiBfLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGRpcikge1xuICAgIHZhciBtZXRob2QgPSBkaXIgPT09IGRpcmVjdGlvbnMuVVAgPyB0aGlzLmluY3JlbWVudCA6IHRoaXMuZGVjcmVtZW50O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZGlyIH0pO1xuXG4gICAgdmFyIHZhbCA9IG1ldGhvZC5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKCEoZGlyID09PSBkaXJlY3Rpb25zLlVQICYmIHZhbCA9PT0gdGhpcy5wcm9wcy5tYXggfHwgZGlyID09PSBkaXJlY3Rpb25zLkRPV04gJiYgdmFsID09PSB0aGlzLnByb3BzLm1pbikpIHtcbiAgICAgIGlmICghdGhpcy5fY2FuY2VsUmVwZWF0ZXIpIHRoaXMuX2NhbmNlbFJlcGVhdGVyID0gcmVwZWF0ZXIodGhpcy5fbW91c2VEb3duLmJpbmQobnVsbCwgZGlyKSk7XG4gICAgfSBlbHNlIHRoaXMuX21vdXNlVXAoKTtcbiAgfSksXG5cbiAgX21vdXNlVXA6IF8uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5fY2FuY2VsUmVwZWF0ZXIgJiYgdGhpcy5fY2FuY2VsUmVwZWF0ZXIoKTtcbiAgICB0aGlzLl9jYW5jZWxSZXBlYXRlciA9IG51bGw7XG4gIH0pLFxuXG4gIF9mb2N1czogXy5pZk5vdERpc2FibGVkKHRydWUsIGZ1bmN0aW9uIChmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvY3VzZWQgJiYgY29tcGF0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCkuZm9jdXMoKTtcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNlZCAhPT0gX3RoaXMuc3RhdGUuZm9jdXNlZCkge1xuICAgICAgICBfdGhpcy5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmb2N1c2VkIH0pO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9KSxcblxuICBfa2V5RG93bjogXy5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGtleSA9IGUua2V5O1xuXG4gICAgaWYgKGtleSA9PT0gJ0VuZCcgJiYgaXNGaW5pdGUodGhpcy5wcm9wcy5tYXgpKSB0aGlzLmNoYW5nZSh0aGlzLnByb3BzLm1heCk7ZWxzZSBpZiAoa2V5ID09PSAnSG9tZScgJiYgaXNGaW5pdGUodGhpcy5wcm9wcy5taW4pKSB0aGlzLmNoYW5nZSh0aGlzLnByb3BzLm1pbik7ZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kZWNyZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgIH1cbiAgfSksXG5cbiAgaW5jcmVtZW50OiBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcCh0aGlzLnByb3BzLnN0ZXApO1xuICB9LFxuXG4gIGRlY3JlbWVudDogZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXAoLXRoaXMucHJvcHMuc3RlcCk7XG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24gc3RlcChhbW91bnQpIHtcbiAgICB2YXIgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCAwKSArIGFtb3VudDtcblxuICAgIHZhciBkZWNpbWFscyA9IHRoaXMucHJvcHMucHJlY2lzaW9uICE9IG51bGwgPyB0aGlzLnByb3BzLnByZWNpc2lvbiA6IGxvY2FsaXplcnMubnVtYmVyLnByZWNpc2lvbihmb3JtYXQodGhpcy5wcm9wcykpO1xuXG4gICAgdGhpcy5jaGFuZ2UoZGVjaW1hbHMgIT0gbnVsbCA/IHJvdW5kKHZhbHVlLCBkZWNpbWFscykgOiB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UodmFsKSB7XG4gICAgdmFsID0gdGhpcy5jb25zdHJhaW5WYWx1ZSh2YWwpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IHZhbCkgdGhpcy5ub3RpZnkoJ29uQ2hhbmdlJywgdmFsKTtcbiAgfSxcblxuICBjb25zdHJhaW5WYWx1ZTogZnVuY3Rpb24gY29uc3RyYWluVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gdGhpcy5wcm9wcy5tYXggPT0gbnVsbCA/IEluZmluaXR5IDogdGhpcy5wcm9wcy5tYXgsXG4gICAgICAgIG1pbiA9IHRoaXMucHJvcHMubWluID09IG51bGwgPyAtSW5maW5pdHkgOiB0aGlzLnByb3BzLm1pbjtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG4gIH1cblxufSk7XG5cbi8vIHRoYW5rIHlvdSBrZW5kbyB1aSBjb3JlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGVsZXJpay9rZW5kby11aS1jb3JlL2Jsb2IvbWFzdGVyL3NyYy9rZW5kby5jb3JlLmpzI0wxMDM2XG5mdW5jdGlvbiByb3VuZCh2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCAwO1xuXG4gIHZhbHVlID0gKCcnICsgdmFsdWUpLnNwbGl0KCdlJyk7XG4gIHZhbHVlID0gTWF0aC5yb3VuZCgrKHZhbHVlWzBdICsgJ2UnICsgKHZhbHVlWzFdID8gK3ZhbHVlWzFdICsgcHJlY2lzaW9uIDogcHJlY2lzaW9uKSkpO1xuXG4gIHZhbHVlID0gKCcnICsgdmFsdWUpLnNwbGl0KCdlJyk7XG4gIHZhbHVlID0gKyh2YWx1ZVswXSArICdlJyArICh2YWx1ZVsxXSA/ICt2YWx1ZVsxXSAtIHByZWNpc2lvbiA6IC1wcmVjaXNpb24pKTtcblxuICByZXR1cm4gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVVuY29udHJvbGxlZFdpZGdldChOdW1iZXJQaWNrZXIsIHsgdmFsdWU6ICdvbkNoYW5nZScgfSk7XG5cbm1vZHVsZS5leHBvcnRzLkJhc2VOdW1iZXJQaWNrZXIgPSBOdW1iZXJQaWNrZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGNzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3N0eWxlJyksXG4gICAgZ2V0SGVpZ2h0ID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvcXVlcnkvaGVpZ2h0JyksXG4gICAgY29uZmlnID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKSxcbiAgICBjbiA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciB0cmFuc2Zvcm0gPSBjb25maWcuYW5pbWF0ZS50cmFuc2Zvcm07XG5cbmZ1bmN0aW9uIHByb3BlcnRpZXMocHJvcCwgdmFsdWUpIHtcbiAgdmFyIF9yZWYsIF9yZWYyO1xuXG4gIHZhciBUUkFOU0xBVElPTl9NQVAgPSBjb25maWcuYW5pbWF0ZS5UUkFOU0xBVElPTl9NQVA7XG5cbiAgaWYgKFRSQU5TTEFUSU9OX01BUCAmJiBUUkFOU0xBVElPTl9NQVBbcHJvcF0pIHJldHVybiAoX3JlZiA9IHt9LCBfcmVmW3RyYW5zZm9ybV0gPSAnJyArIFRSQU5TTEFUSU9OX01BUFtwcm9wXSArICcoJyArIHZhbHVlICsgJyknLCBfcmVmKTtcblxuICByZXR1cm4gKF9yZWYyID0ge30sIF9yZWYyW3Byb3BdID0gdmFsdWUsIF9yZWYyKTtcbn1cblxudmFyIFBvcHVwQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQb3B1cENvbnRlbnQnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICBpZiAoIWNoaWxkKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAncnctcG9wdXAgcnctd2lkZ2V0JyB9KTtcblxuICAgIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBjb21wYXQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBjbGFzc05hbWU6IGNuKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgJ3J3LXBvcHVwIHJ3LXdpZGdldCcpXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1BvcHVwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wVXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGR1cmF0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb25SZXF1ZXN0Q2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zaW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk9wZW5pbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIG9uQ2xvc2luZzogZnVuY3Rpb24gb25DbG9zaW5nKCkge30sXG4gICAgICBvbk9wZW5pbmc6IGZ1bmN0aW9uIG9uT3BlbmluZygpIHt9LFxuICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICAgICAgb25PcGVuOiBmdW5jdGlvbiBvbk9wZW4oKSB7fVxuICAgIH07XG4gIH0sXG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKXtcbiAgLy8gICAhdGhpcy5wcm9wcy5vcGVuICYmIHRoaXMuY2xvc2UoMClcbiAgLy8gfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgIXRoaXMucHJvcHMub3BlbiAmJiAodGhpcy5faW5pdGlhbFBvc2l0aW9uID0gdHJ1ZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRDaGFuZ2VkOiBjaGlsZEtleShuZXh0UHJvcHMuY2hpbGRyZW4pICE9PSBjaGlsZEtleSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHB2UHJvcHMpIHtcbiAgICB2YXIgY2xvc2luZyA9IHB2UHJvcHMub3BlbiAmJiAhdGhpcy5wcm9wcy5vcGVuLFxuICAgICAgICBvcGVuaW5nID0gIXB2UHJvcHMub3BlbiAmJiB0aGlzLnByb3BzLm9wZW4sXG4gICAgICAgIG9wZW4gPSB0aGlzLnByb3BzLm9wZW47XG5cbiAgICBpZiAob3BlbmluZykgdGhpcy5vcGVuKCk7ZWxzZSBpZiAoY2xvc2luZykgdGhpcy5jbG9zZSgpO2Vsc2UgaWYgKG9wZW4pIHRoaXMuaGVpZ2h0KCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIG9wZW4gPSBfcHJvcHMub3BlbjtcbiAgICB2YXIgZHJvcFVwID0gX3Byb3BzLmRyb3BVcDtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdvcGVuJywgJ2Ryb3BVcCddKTtcbiAgICB2YXIgZGlzcGxheSA9IG9wZW4gPyAnYmxvY2snIDogdm9pZCAwO1xuXG4gICAgaWYgKHRoaXMuX2luaXRpYWxQb3NpdGlvbikge1xuICAgICAgZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBzdHlsZTogYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfSwgcHJvcHMuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IGNuKGNsYXNzTmFtZSwgJ3J3LXBvcHVwLWNvbnRhaW5lcicsIHsgJ3J3LWRyb3B1cCc6IGRyb3BVcCB9KVxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBQb3B1cENvbnRlbnQsXG4gICAgICAgIHsgcmVmOiAnY29udGVudCcgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHZhciBjb250YWluZXIgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgIGNvbnRlbnQgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnQpLFxuICAgICAgICBzdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH07XG5cbiAgICBjc3MoY29udGFpbmVyLCBzdHlsZSk7XG4gICAgdGhpcy5oZWlnaHQoKTtcbiAgICBjc3MoY29udGVudCwgcHJvcGVydGllcygndG9wJywgdGhpcy5wcm9wcy5kcm9wVXAgPyAnMTAwJScgOiAnLTEwMCUnKSk7XG4gIH0sXG5cbiAgaGVpZ2h0OiBmdW5jdGlvbiBoZWlnaHQoKSB7XG4gICAgdmFyIGVsID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICBjb250ZW50ID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb250ZW50KSxcbiAgICAgICAgbWFyZ2luID0gcGFyc2VJbnQoY3NzKGNvbnRlbnQsICdtYXJnaW4tdG9wJyksIDEwKSArIHBhcnNlSW50KGNzcyhjb250ZW50LCAnbWFyZ2luLWJvdHRvbScpLCAxMCk7XG5cbiAgICB2YXIgaGVpZ2h0ID0gZ2V0SGVpZ2h0KGNvbnRlbnQpICsgKGlzTmFOKG1hcmdpbikgPyAwIDogbWFyZ2luKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogaGVpZ2h0IH0pO1xuICAgIH1cbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYW5pbSA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgZWwgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5PUkdJTkFMX1BPU0lUSU9OID0gY3NzKGVsLCAncG9zaXRpb24nKTtcbiAgICB0aGlzLl9pc09wZW5pbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2luaXRpYWxQb3NpdGlvbikge1xuICAgICAgdGhpcy5faW5pdGlhbFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBlbHNlIHRoaXMuaGVpZ2h0KCk7XG5cbiAgICB0aGlzLnByb3BzLm9uT3BlbmluZygpO1xuXG4gICAgYW5pbS5jbGFzc05hbWUgKz0gJyBydy1wb3B1cC1hbmltYXRpbmcnO1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgIGNvbmZpZy5hbmltYXRlKGVsLCB7IHRvcDogMCB9LCBzZWxmLnByb3BzLmR1cmF0aW9uLCAnZWFzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuaW5nKSByZXR1cm47XG5cbiAgICAgIGFuaW0uY2xhc3NOYW1lID0gYW5pbS5jbGFzc05hbWUucmVwbGFjZSgvID9ydy1wb3B1cC1hbmltYXRpbmcvZywgJycpO1xuXG4gICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IHNlbGYuT1JHSU5BTF9QT1NJVElPTjtcbiAgICAgIGFuaW0uc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICBzZWxmLk9SR0lOQUxfUE9TSVRJT04gPSBudWxsO1xuXG4gICAgICBzZWxmLnByb3BzLm9uT3BlbigpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShkdXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGVsID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb250ZW50KSxcbiAgICAgICAgYW5pbSA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHRoaXMuT1JHSU5BTF9QT1NJVElPTiA9IGNzcyhlbCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICB0aGlzLl9pc09wZW5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmhlaWdodCgpO1xuICAgIHRoaXMucHJvcHMub25DbG9zaW5nKCk7XG5cbiAgICBhbmltLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYW5pbS5jbGFzc05hbWUgKz0gJyBydy1wb3B1cC1hbmltYXRpbmcnO1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgIGNvbmZpZy5hbmltYXRlKGVsLCB7IHRvcDogdGhpcy5wcm9wcy5kcm9wVXAgPyAnMTAwJScgOiAnLTEwMCUnIH0sIGR1ciA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy5kdXJhdGlvbiA6IGR1ciwgJ2Vhc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5faXNPcGVuaW5nKSByZXR1cm47XG5cbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gc2VsZi5PUkdJTkFMX1BPU0lUSU9OO1xuICAgICAgYW5pbS5jbGFzc05hbWUgPSBhbmltLmNsYXNzTmFtZS5yZXBsYWNlKC8gP3J3LXBvcHVwLWFuaW1hdGluZy9nLCAnJyk7XG5cbiAgICAgIGFuaW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNlbGYuT1JHSU5BTF9QT1NJVElPTiA9IG51bGw7XG4gICAgICBzZWxmLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gY2hpbGRLZXkoY2hpbGRyZW4pIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xuICBmb3IgKHZhciBrZXkgaW4gbmV4dENoaWxkTWFwcGluZykgcmV0dXJuIGtleTtcbn0iLCIvKipcclxuICogQSBzdHJlYW1saW5lZCB2ZXJzaW9uIG9mIFRyYW5zaXRpb25Hcm91cCBidWlsdCBmb3IgbWFuYWdpbmcgYXQgbW9zdCB0d28gYWN0aXZlIGNoaWxkcmVuXHJcbiAqIGFsc28gcHJvdmlkZXMgYWRkaXRpb25hbCBob29rcyBmb3IgYW5pbWF0aW9uIHN0YXJ0L2VuZFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvc3JjL2FkZG9ucy90cmFuc2l0aW9ucy9SZWFjdFRyYW5zaXRpb25Hcm91cC5qc1xyXG4gKiByZWxldmVudCBjb2RlIGlzIGxpY2Vuc2VkIGFjY29yZGluZ2x5XHJcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGNzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3N0eWxlJyksXG4gICAgaGVpZ2h0ID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvcXVlcnkvaGVpZ2h0JyksXG4gICAgd2lkdGggPSByZXF1aXJlKCdkb20taGVscGVycy9xdWVyeS93aWR0aCcpLFxuICAgIGNvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKSxcbiAgICBfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdSZXBsYWNlVHJhbnNpdGlvbkdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5lbGVtZW50LCBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY2hpbGRGYWN0b3J5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIG9uQW5pbWF0aW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFuaW1hdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudDogJ3NwYW4nLFxuICAgICAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoYSkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0sXG5cbiAgICAgIG9uQW5pbWF0aW5nOiBfLm5vb3AsXG4gICAgICBvbkFuaW1hdGU6IF8ubm9vcFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBfLnNwbGF0KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBuZXh0Q2hpbGQgPSBnZXRDaGlsZChuZXh0UHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICBzdGFjayA9IHRoaXMuc3RhdGUuY2hpbGRyZW4uc2xpY2UoKSxcbiAgICAgICAgbmV4dCA9IHN0YWNrWzFdLFxuICAgICAgICBsYXN0ID0gc3RhY2tbMF07XG5cbiAgICB2YXIgaXNMYXN0Q2hpbGQgPSBsYXN0ICYmIGtleShsYXN0KSA9PT0ga2V5KG5leHRDaGlsZCksXG4gICAgICAgIGlzTmV4dENoaWxkID0gbmV4dCAmJiBrZXkobmV4dCkgPT09IGtleShuZXh0Q2hpbGQpO1xuXG4gICAgLy9ubyBjaGlsZHJlblxuICAgIGlmICghbGFzdCkge1xuICAgICAgc3RhY2sucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgdGhpcy5lbnRlcmluZyA9IG5leHRDaGlsZDtcbiAgICB9IGVsc2UgaWYgKGxhc3QgJiYgIW5leHQgJiYgIWlzTGFzdENoaWxkKSB7XG4gICAgICAvL25ldyBjaGlsZFxuICAgICAgc3RhY2sucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgdGhpcy5sZWF2aW5nID0gbGFzdDtcbiAgICAgIHRoaXMuZW50ZXJpbmcgPSBuZXh0Q2hpbGQ7XG4gICAgfSBlbHNlIGlmIChsYXN0ICYmIG5leHQgJiYgIWlzTGFzdENoaWxkICYmICFpc05leHRDaGlsZCkge1xuICAgICAgLy8gdGhlIGNoaWxkIGlzIG5vdCB0aGUgY3VycmVudCBvbmUsIGV4aXQgdGhlIGN1cnJlbnQgb25lLCBhZGQgdGhlIG5ldyBvbmVcbiAgICAgIC8vICAtIHNoaWZ0IHRoZSBzdGFjayBkb3duXG4gICAgICBzdGFjay5zaGlmdCgpO1xuICAgICAgc3RhY2sucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgdGhpcy5sZWF2aW5nID0gbmV4dDtcbiAgICAgIHRoaXMuZW50ZXJpbmcgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIC8vbmV3IGNoaWxkIHRoYXQganVzdCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZFxuICAgIGVsc2UgaWYgKGlzTGFzdENoaWxkKSBzdGFjay5zcGxpY2UoMCwgMSwgbmV4dENoaWxkKTtlbHNlIGlmIChpc05leHRDaGlsZCkgc3RhY2suc3BsaWNlKDEsIDEsIG5leHRDaGlsZCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jaGlsZHJlblswXSAhPT0gc3RhY2tbMF0gfHwgdGhpcy5zdGF0ZS5jaGlsZHJlblsxXSAhPT0gc3RhY2tbMV0pIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogc3RhY2sgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5hbmltYXRpbmdLZXlzID0ge307XG4gICAgdGhpcy5sZWF2aW5nID0gbnVsbDtcbiAgICB0aGlzLmVudGVyaW5nID0gbnVsbDtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgZW50ZXJpbmcgPSB0aGlzLmVudGVyaW5nLFxuICAgICAgICBsZWF2aW5nID0gdGhpcy5sZWF2aW5nLFxuICAgICAgICBmaXJzdCA9IHRoaXMucmVmc1trZXkoZW50ZXJpbmcpIHx8IGtleShsZWF2aW5nKV0sXG4gICAgICAgIG5vZGUgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgIGVsID0gZmlyc3QgJiYgY29tcGF0LmZpbmRET01Ob2RlKGZpcnN0KTtcblxuICAgIGlmIChlbCkgY3NzKG5vZGUsIHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogaGVpZ2h0KGVsKSArICdweCcsXG4gICAgICB3aWR0aDogd2lkdGgoZWwpICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkFuaW1hdGluZygpO1xuXG4gICAgdGhpcy5lbnRlcmluZyA9IG51bGw7XG4gICAgdGhpcy5sZWF2aW5nID0gbnVsbDtcblxuICAgIGlmIChlbnRlcmluZykgdGhpcy5wZXJmb3JtRW50ZXIoa2V5KGVudGVyaW5nKSk7XG4gICAgaWYgKGxlYXZpbmcpIHRoaXMucGVyZm9ybUxlYXZlKGtleShsZWF2aW5nKSk7XG4gIH0sXG5cbiAgcGVyZm9ybUVudGVyOiBmdW5jdGlvbiBwZXJmb3JtRW50ZXIoa2V5KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IHRoaXMucmVmc1trZXldO1xuXG4gICAgaWYgKCFjb21wb25lbnQpIHJldHVybjtcblxuICAgIHRoaXMuYW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSBjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKHRoaXMuX2hhbmRsZURvbmVFbnRlcmluZy5iaW5kKHRoaXMsIGtleSkpO2Vsc2UgdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSk7XG4gIH0sXG5cbiAgX3RyeUZpbmlzaDogZnVuY3Rpb24gX3RyeUZpbmlzaCgpIHtcblxuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZygpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkgY3NzKGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKSwgeyBvdmVyZmxvdzogJ3Zpc2libGUnLCBoZWlnaHQ6ICcnLCB3aWR0aDogJycgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQW5pbWF0ZSgpO1xuICB9LFxuXG4gIF9oYW5kbGVEb25lRW50ZXJpbmc6IGZ1bmN0aW9uIF9oYW5kbGVEb25lRW50ZXJpbmcoZW50ZXJrZXkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2VudGVya2V5XTtcblxuICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKSBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcblxuICAgIGRlbGV0ZSB0aGlzLmFuaW1hdGluZ0tleXNbZW50ZXJrZXldO1xuXG4gICAgaWYgKGtleSh0aGlzLnByb3BzLmNoaWxkcmVuKSAhPT0gZW50ZXJrZXkpIHRoaXMucGVyZm9ybUxlYXZlKGVudGVya2V5KTsgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGVudGVyZWQuIFJlbW92ZSBpdC5cblxuICAgIHRoaXMuX3RyeUZpbmlzaCgpO1xuICB9LFxuXG4gIGlzVHJhbnNpdGlvbmluZzogZnVuY3Rpb24gaXNUcmFuc2l0aW9uaW5nKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmFuaW1hdGluZ0tleXMpLmxlbmd0aCAhPT0gMDtcbiAgfSxcblxuICBwZXJmb3JtTGVhdmU6IGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZShrZXkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2tleV07XG5cbiAgICBpZiAoIWNvbXBvbmVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5hbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUodGhpcy5faGFuZGxlRG9uZUxlYXZpbmcuYmluZCh0aGlzLCBrZXkpKTtlbHNlIHRoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSk7XG4gIH0sXG5cbiAgX2hhbmRsZURvbmVMZWF2aW5nOiBmdW5jdGlvbiBfaGFuZGxlRG9uZUxlYXZpbmcobGVhdmVrZXkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2xlYXZla2V5XTtcblxuICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKSBjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUoKTtcblxuICAgIGRlbGV0ZSB0aGlzLmFuaW1hdGluZ0tleXNbbGVhdmVrZXldO1xuXG4gICAgaWYgKGtleSh0aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gbGVhdmVrZXkpIHRoaXMucGVyZm9ybUVudGVyKGxlYXZla2V5KTtlbHNlIGlmICh0aGlzLmlzTW91bnRlZCgpKSB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4ga2V5KGMpICE9PSBsZWF2ZWtleTtcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLl90cnlGaW5pc2goKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5jaGlsZEZhY3RvcnkoYywga2V5KGMpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldENoaWxkKGNoaWxkcmVuKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24ga2V5KGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZCAmJiBjaGlsZC5rZXk7XG59XG4vLyBUaGlzIGVudGVyZWQgYWdhaW4gYmVmb3JlIGl0IGZ1bGx5IGxlZnQuIEFkZCBpdCBhZ2Fpbi4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyk7XG5cbnZhciBfdW5jb250cm9sbGFibGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5jb250cm9sbGFibGUpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBfTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG52YXIgX0xpc3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdCk7XG5cbnZhciBfTGlzdEdyb3VwYWJsZSA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwYWJsZScpO1xuXG52YXIgX0xpc3RHcm91cGFibGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwYWJsZSk7XG5cbnZhciBfdXRpbFZhbGlkYXRlTGlzdEludGVyZmFjZSA9IHJlcXVpcmUoJy4vdXRpbC92YWxpZGF0ZUxpc3RJbnRlcmZhY2UnKTtcblxudmFyIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxWYWxpZGF0ZUxpc3RJbnRlcmZhY2UpO1xuXG52YXIgX2RvbUhlbHBlcnNVdGlsU2Nyb2xsVG8gPSByZXF1aXJlKCdkb20taGVscGVycy91dGlsL3Njcm9sbFRvJyk7XG5cbnZhciBfZG9tSGVscGVyc1V0aWxTY3JvbGxUbzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21IZWxwZXJzVXRpbFNjcm9sbFRvKTtcblxudmFyIG9taXQgPSBfdXRpbF8yWydkZWZhdWx0J10ub21pdDtcbnZhciBwaWNrID0gX3V0aWxfMlsnZGVmYXVsdCddLnBpY2s7XG52YXIgcmVzdWx0ID0gX3V0aWxfMlsnZGVmYXVsdCddLnJlc3VsdDtcblxudmFyIHByb3BUeXBlcyA9IHtcblxuICBkYXRhOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5XSksXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW92ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gIG11bHRpcGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgaXRlbUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gIGxpc3RDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gIHZhbHVlRmllbGQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0RmllbGQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmFjY2Vzc29yLFxuXG4gIGJ1c3k6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICBmaWx0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkZWxheTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG5cbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gIHJlYWRPbmx5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncmVhZG9ubHknXSldKSxcblxuICBtZXNzYWdlczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZW1wdHlMaXN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9KVxufTtcblxudmFyIFNlbGVjdExpc3QgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NlbGVjdExpc3QnLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhSGVscGVyc01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoKV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGF5OiAyNTAsXG4gICAgICB2YWx1ZTogW10sXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnc2VsZWN0bGlzdCcsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBlbXB0eUxpc3Q6ICdUaGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhpcyBsaXN0J1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFN0YXRlOiBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGlzUmFkaW8gPSAhcHJvcHMubXVsdGlwbGUsXG4gICAgICAgIHZhbHVlcyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5zcGxhdChwcm9wcy52YWx1ZSksXG4gICAgICAgIGZpcnN0ID0gaXNSYWRpbyAmJiB0aGlzLl9kYXRhSXRlbShwcm9wcy5kYXRhLCB2YWx1ZXNbMF0pO1xuXG4gICAgZmlyc3QgPSBpc1JhZGlvICYmIGZpcnN0ID8gZmlyc3QgOiAodGhpcy5zdGF0ZSB8fCB7fSkuZm9jdXNlZEl0ZW0gfHwgbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICBmb2N1c2VkSXRlbTogZmlyc3QsXG4gICAgICBkYXRhSXRlbXM6ICFpc1JhZGlvICYmIHZhbHVlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9kYXRhSXRlbShwcm9wcy5kYXRhLCBpdGVtKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSh0aGlzLnByb3BzKTtcblxuICAgIHN0YXRlLkxpc3RJdGVtID0gZ2V0TGlzdEl0ZW0odGhpcyk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh0aGlzLmdldERlZmF1bHRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgKDAsIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlMlsnZGVmYXVsdCddKSh0aGlzLnJlZnMubGlzdCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHRhYkluZGV4ID0gX3Byb3BzLnRhYkluZGV4O1xuICAgIHZhciBmaWx0ZXIgPSBfcHJvcHMuZmlsdGVyO1xuICAgIHZhciBzdWdnZXN0ID0gX3Byb3BzLnN1Z2dlc3Q7XG4gICAgdmFyIGdyb3VwQnkgPSBfcHJvcHMuZ3JvdXBCeTtcbiAgICB2YXIgbWVzc2FnZXMgPSBfcHJvcHMubWVzc2FnZXM7XG4gICAgdmFyIGRhdGEgPSBfcHJvcHMuZGF0YTtcbiAgICB2YXIgYnVzeSA9IF9wcm9wcy5idXN5O1xuICAgIHZhciBkcm9wVXAgPSBfcHJvcHMuZHJvcFVwO1xuICAgIHZhciBuYW1lID0gX3Byb3BzLm5hbWU7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gX3Byb3BzLnBsYWNlaG9sZGVyO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3BlbiA9IF9wcm9wcy5vcGVuO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHk7XG4gICAgdmFyIExpc3QgPSBfcHJvcHMubGlzdENvbXBvbmVudDtcblxuICAgIExpc3QgPSBMaXN0IHx8IGdyb3VwQnkgJiYgX0xpc3RHcm91cGFibGUyWydkZWZhdWx0J10gfHwgX0xpc3QyWydkZWZhdWx0J107XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gb21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKTtcbiAgICB2YXIgbGlzdFByb3BzID0gcGljayh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS50eXBlKExpc3QpLnByb3BUeXBlcykpO1xuXG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIExpc3RJdGVtID0gX3N0YXRlLkxpc3RJdGVtO1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IF9zdGF0ZS5mb2N1c2VkSXRlbTtcbiAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3N0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB2YXIgZm9jdXNlZCA9IF9zdGF0ZS5mb2N1c2VkO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICBsaXN0SUQgPSB0aGlzLl9pZCgnX2xpc3Rib3gnKTtcblxuICAgIGZvY3VzZWRJdGVtID0gZm9jdXNlZCAmJiAhdGhpcy5pc0Rpc2FibGVkKCkgJiYgIXRoaXMuaXNSZWFkT25seSgpICYmIGZvY3VzZWRJdGVtO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICBvbktleURvd246IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2tleURvd24pLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICByb2xlOiAncmFkaW9ncm91cCcsXG4gICAgICAgICdhcmlhLWJ1c3knOiAhIWJ1c3ksXG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogdGhpcy5pc1JlYWRPbmx5KCksXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctd2lkZ2V0JywgJ3J3LXNlbGVjdGxpc3QnLCB7XG4gICAgICAgICAgJ3J3LXN0YXRlLWZvY3VzJzogZm9jdXNlZCxcbiAgICAgICAgICAncnctc3RhdGUtZGlzYWJsZWQnOiB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICAncnctc3RhdGUtcmVhZG9ubHknOiB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICAncnctcnRsJzogdGhpcy5pc1J0bCgpLFxuICAgICAgICAgICdydy1sb2FkaW5nLW1hc2snOiBidXN5XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KExpc3QsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgbGlzdFByb3BzLCB7XG4gICAgICAgIHJlZjogJ2xpc3QnLFxuICAgICAgICBpZDogbGlzdElELFxuICAgICAgICByb2xlOiAncmFkaW9ncm91cCcsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCB8fCAnMCcsXG4gICAgICAgIGRhdGE6IGl0ZW1zLFxuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkSXRlbSxcbiAgICAgICAgb3B0aW9uQ29tcG9uZW50OiBMaXN0SXRlbSxcbiAgICAgICAgaXRlbUNvbXBvbmVudDogdGhpcy5wcm9wcy5pdGVtQ29tcG9uZW50LFxuICAgICAgICBvbk1vdmU6IHRoaXMuX3Njcm9sbFRvXG4gICAgICB9KSlcbiAgICApO1xuICB9LFxuXG4gIF9zY3JvbGxUbzogZnVuY3Rpb24gX3Njcm9sbFRvKHNlbGVjdGVkLCBsaXN0KSB7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLnByb3BzLm9uTW92ZTtcblxuICAgIGlmIChoYW5kbGVyKSBoYW5kbGVyKHNlbGVjdGVkLCBsaXN0KTtlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbENhbmNlbCAmJiB0aGlzLl9zY3JvbGxDYW5jZWwoKTtcbiAgICAgIC8vIGRlZmF1bHQgYmVoYXZpb3IgaXMgdG8gc2Nyb2xsIHRoZSB3aG9sZSBwYWdlIG5vdCBqdXN0IHRoZSB3aWRnZXRcbiAgICAgIHRoaXMuX3Njcm9sbENhbmNlbCA9ICgwLCBfZG9tSGVscGVyc1V0aWxTY3JvbGxUbzJbJ2RlZmF1bHQnXSkoc2VsZWN0ZWQpO1xuICAgIH1cbiAgfSxcblxuICBfa2V5RG93bjogZnVuY3Rpb24gX2tleURvd24oZSkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAga2V5ID0gZS5rZXksXG4gICAgICAgIG11bHRpcGxlID0gISF0aGlzLnByb3BzLm11bHRpcGxlLFxuICAgICAgICBsaXN0ID0gdGhpcy5yZWZzLmxpc3QsXG4gICAgICAgIGZvY3VzZWRJdGVtID0gdGhpcy5zdGF0ZS5mb2N1c2VkSXRlbTtcblxuICAgIGlmIChrZXkgPT09ICdFbmQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBtb3ZlKCdwcmV2JywgbnVsbCkgfSk7ZWxzZSBjaGFuZ2UobW92ZSgncHJldicsIG51bGwpKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBtb3ZlKCduZXh0JywgbnVsbCkgfSk7ZWxzZSBjaGFuZ2UobW92ZSgnbmV4dCcsIG51bGwpKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2hhbmdlKGZvY3VzZWRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicgfHwga2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IG1vdmUoJ25leHQnLCBmb2N1c2VkSXRlbSkgfSk7ZWxzZSBjaGFuZ2UobW92ZSgnbmV4dCcsIGZvY3VzZWRJdGVtKSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJyB8fCBrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBtb3ZlKCdwcmV2JywgZm9jdXNlZEl0ZW0pIH0pO2Vsc2UgY2hhbmdlKG1vdmUoJ3ByZXYnLCBmb2N1c2VkSXRlbSkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tdWx0aXBsZSAmJiBlLmtleUNvZGUgPT09IDY1ICYmIGUuY3RybEtleSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fc2VsZWN0QWxsKCk7XG4gICAgfSBlbHNlIHRoaXMuc2VhcmNoKFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2UoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgc2VsZi5fY2hhbmdlKGl0ZW0sIG11bHRpcGxlID8gIXNlbGYuX2NvbnRhaW5zKGl0ZW0sIHNlbGYuX3ZhbHVlcygpKSAvLyB0b2dnbGUgdmFsdWVcbiAgICAgICAgOiB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlKGRpciwgaXRlbSkge1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuaXNEaXNhYmxlZEl0ZW0oaXRlbSkgfHwgc2VsZi5pc1JlYWRPbmx5SXRlbShpdGVtKTtcbiAgICAgIH0sXG4gICAgICAgICAgc3RvcCA9IGRpciA9PT0gJ25leHQnID8gbGlzdC5sYXN0KCkgOiBsaXN0LmZpcnN0KCksXG4gICAgICAgICAgbmV4dCA9IGxpc3RbZGlyXShpdGVtKTtcblxuICAgICAgd2hpbGUgKG5leHQgIT09IHN0b3AgJiYgaXNEaXNhYmxlZChuZXh0KSkgbmV4dCA9IGxpc3RbZGlyXShuZXh0KTtcblxuICAgICAgcmV0dXJuIGlzRGlzYWJsZWQobmV4dCkgPyBpdGVtIDogbmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgX3NlbGVjdEFsbDogZnVuY3Rpb24gX3NlbGVjdEFsbCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB2YWx1ZXMgPSB0aGlzLnN0YXRlLmRhdGFJdGVtcyxcbiAgICAgICAgZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgIGRhdGEgPSB0aGlzLl9kYXRhKCksXG4gICAgICAgIGJsYWNrbGlzdDtcblxuICAgIGRpc2FibGVkID0gQXJyYXkuaXNBcnJheShkaXNhYmxlZCkgPyBkaXNhYmxlZCA6IFtdO1xuICAgIC8vZGlzYWJsZWQgdmFsdWVzIHRoYXQgYXJlIG5vdCBzZWxlY3RlZFxuICAgIGJsYWNrbGlzdCA9IGRpc2FibGVkLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuICFfdGhpczIuX2NvbnRhaW5zKHYsIHZhbHVlcyk7XG4gICAgfSk7XG4gICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gIV90aGlzMi5fY29udGFpbnModiwgYmxhY2tsaXN0KTtcbiAgICB9KTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZGF0YSA9IGRpc2FibGVkLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLl9jb250YWlucyh2LCB2YWx1ZXMpO1xuICAgICAgfSk7XG4gICAgICBkYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fZGF0YUl0ZW0oX3RoaXMyLl9kYXRhKCksIHYpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkoJ29uQ2hhbmdlJywgW2RhdGFdKTtcbiAgfSxcblxuICBfY2hhbmdlOiBmdW5jdGlvbiBfY2hhbmdlKGl0ZW0sIGNoZWNrZWQpIHtcbiAgICB2YXIgbXVsdGlwbGUgPSAhIXRoaXMucHJvcHMubXVsdGlwbGUsXG4gICAgICAgIGJsYWNrbGlzdCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgICAgdmFsdWVzID0gdGhpcy5zdGF0ZS5kYXRhSXRlbXM7XG5cbiAgICBibGFja2xpc3QgPSBBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkgPyBibGFja2xpc3QgOiBbXTtcblxuICAgIGlmICghbXVsdGlwbGUpIHJldHVybiB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBjaGVja2VkID8gaXRlbSA6IG51bGwpO1xuXG4gICAgdmFsdWVzID0gY2hlY2tlZCA/IHZhbHVlcy5jb25jYXQoaXRlbSkgOiB2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdiAhPT0gaXRlbTtcbiAgICB9KTtcblxuICAgIHRoaXMubm90aWZ5KCdvbkNoYW5nZScsIFt2YWx1ZXMgfHwgW11dKTtcbiAgfSxcblxuICBfZm9jdXM6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKHRydWUsIGZ1bmN0aW9uIChmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAoZm9jdXNlZCkgX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLmxpc3QpLmZvY3VzKCk7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzMy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzMy5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSksXG5cbiAgaXNEaXNhYmxlZEl0ZW06IGZ1bmN0aW9uIGlzRGlzYWJsZWRJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgfHwgdGhpcy5fY29udGFpbnMoaXRlbSwgdGhpcy5wcm9wcy5kaXNhYmxlZCk7XG4gIH0sXG5cbiAgaXNSZWFkT25seUl0ZW06IGZ1bmN0aW9uIGlzUmVhZE9ubHlJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5pc1JlYWRPbmx5KCkgfHwgdGhpcy5fY29udGFpbnMoaXRlbSwgdGhpcy5wcm9wcy5yZWFkT25seSk7XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbiBzZWFyY2goY2hhcmFjdGVyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgd29yZCA9ICgodGhpcy5fc2VhcmNoVGVybSB8fCAnJykgKyBjaGFyYWN0ZXIpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGxpc3QgPSB0aGlzLnJlZnMubGlzdDtcblxuICAgIHRoaXMuX3NlYXJjaFRlcm0gPSB3b3JkO1xuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdzZWFyY2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZm9jdXNlZEl0ZW0gPSBsaXN0Lm5leHQoX3RoaXM0LnN0YXRlLmZvY3VzZWRJdGVtLCB3b3JkKTtcblxuICAgICAgX3RoaXM0Ll9zZWFyY2hUZXJtID0gJyc7XG5cbiAgICAgIGlmIChmb2N1c2VkSXRlbSkgX3RoaXM0LnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGZvY3VzZWRJdGVtIH0pO1xuICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICB9LFxuXG4gIF9kYXRhOiBmdW5jdGlvbiBfZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICB9LFxuXG4gIF9jb250YWluczogZnVuY3Rpb24gX2NvbnRhaW5zKGl0ZW0sIHZhbHVlcykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMuc29tZSh0aGlzLl92YWx1ZU1hdGNoZXIuYmluZChudWxsLCBpdGVtKSkgOiB0aGlzLl92YWx1ZU1hdGNoZXIoaXRlbSwgdmFsdWVzKTtcbiAgfSxcblxuICBfdmFsdWVzOiBmdW5jdGlvbiBfdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm11bHRpcGxlID8gdGhpcy5zdGF0ZS5kYXRhSXRlbXMgOiB0aGlzLnByb3BzLnZhbHVlO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBnZXRMaXN0SXRlbShwYXJlbnQpIHtcblxuICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnU2VsZWN0SXRlbScsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG4gICAgICB2YXIgZm9jdXNlZCA9IF9wcm9wczIuZm9jdXNlZDtcbiAgICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgICB2YXIgaXRlbSA9IF9wcm9wczIuZGF0YUl0ZW07XG4gICAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjaGlsZHJlbicsICdmb2N1c2VkJywgJ3NlbGVjdGVkJywgJ2RhdGFJdGVtJ10pO1xuICAgICAgdmFyIF9wYXJlbnQkcHJvcHMgPSBwYXJlbnQucHJvcHM7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBfcGFyZW50JHByb3BzLm11bHRpcGxlO1xuICAgICAgdmFyIF9wYXJlbnQkcHJvcHMkbmFtZSA9IF9wYXJlbnQkcHJvcHMubmFtZTtcbiAgICAgIHZhciBuYW1lID0gX3BhcmVudCRwcm9wcyRuYW1lID09PSB1bmRlZmluZWQgPyBwYXJlbnQuX2lkKCdfbmFtZScpIDogX3BhcmVudCRwcm9wcyRuYW1lO1xuXG4gICAgICB2YXIgY2hlY2tlZCA9IHBhcmVudC5fY29udGFpbnMoaXRlbSwgcGFyZW50Ll92YWx1ZXMoKSksXG4gICAgICAgICAgY2hhbmdlID0gcGFyZW50Ll9jaGFuZ2UuYmluZChudWxsLCBpdGVtKSxcbiAgICAgICAgICBkaXNhYmxlZCA9IHBhcmVudC5pc0Rpc2FibGVkSXRlbShpdGVtKSxcbiAgICAgICAgICByZWFkb25seSA9IHBhcmVudC5pc1JlYWRPbmx5SXRlbShpdGVtKSxcbiAgICAgICAgICB0eXBlID0gbXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGknLFxuICAgICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm9sZTogdHlwZSxcbiAgICAgICAgICAnYXJpYS1jaGVja2VkJzogISFjaGVja2VkLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgcmVhZG9ubHksXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdydy1saXN0LW9wdGlvbicsIHtcbiAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGZvY3VzZWQsXG4gICAgICAgICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICdydy1zdGF0ZS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgJ3J3LXN0YXRlLXJlYWRvbmx5JzogcmVhZG9ubHlcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIHJvbGU6ICdwcmVzZW50YXRpb24nLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgcmVhZG9ubHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGlmICghZGlzYWJsZWQgJiYgIXJlYWRvbmx5KSBjaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxudmFyIFVuY29udHJvbGxlZFNlbGVjdExpc3QgPSAoMCwgX3VuY29udHJvbGxhYmxlMlsnZGVmYXVsdCddKShTZWxlY3RMaXN0LCB7IHZhbHVlOiAnb25DaGFuZ2UnIH0pO1xuXG5VbmNvbnRyb2xsZWRTZWxlY3RMaXN0LkJhc2VTZWxlY3RMaXN0ID0gU2VsZWN0TGlzdDtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVW5jb250cm9sbGVkU2VsZWN0TGlzdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBSZXBsYWNlVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgnLi9SZXBsYWNlVHJhbnNpdGlvbkdyb3VwJyksXG4gICAgY29tcGF0ID0gcmVxdWlyZSgnLi91dGlsL2NvbXBhdCcpLFxuICAgIGNzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3N0eWxlJyksXG4gICAgZ2V0V2lkdGggPSByZXF1aXJlKCdkb20taGVscGVycy9xdWVyeS93aWR0aCcpLFxuICAgIGNvbmZpZyA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBTbGlkZUNoaWxkR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU2xpZGVDaGlsZEdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXJlY3Rpb246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gICAgZHVyYXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBjb21wb25lbnRXaWxsRW50ZXI6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihkb25lKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBub2RlID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICB3aWR0aCA9IGdldFdpZHRoKG5vZGUpLFxuICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLnByb3BzLmRpcmVjdGlvbjtcblxuICAgIHdpZHRoID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB3aWR0aCA6IC13aWR0aDtcblxuICAgIHRoaXMuT1JHSU5BTF9QT1NJVElPTiA9IG5vZGUuc3R5bGUucG9zaXRpb247XG5cbiAgICBjc3Mobm9kZSwgeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogd2lkdGggKyAncHgnLCB0b3A6IDAgfSk7XG5cbiAgICBjb25maWcuYW5pbWF0ZShub2RlLCB7IGxlZnQ6IDAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICBjc3Mobm9kZSwge1xuICAgICAgICBwb3NpdGlvbjogX3RoaXMuT1JHSU5BTF9QT1NJVElPTixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuT1JHSU5BTF9QT1NJVElPTiA9IG51bGw7XG4gICAgICBkb25lICYmIGRvbmUoKTtcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTGVhdmU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgbm9kZSA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgd2lkdGggPSBnZXRXaWR0aChub2RlKSxcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wcm9wcy5kaXJlY3Rpb247XG5cbiAgICB3aWR0aCA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gLXdpZHRoIDogd2lkdGg7XG5cbiAgICB0aGlzLk9SR0lOQUxfUE9TSVRJT04gPSBub2RlLnN0eWxlLnBvc2l0aW9uO1xuXG4gICAgY3NzKG5vZGUsIHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9KTtcblxuICAgIGNvbmZpZy5hbmltYXRlKG5vZGUsIHsgbGVmdDogd2lkdGggKyAncHgnIH0sIHRoaXMucHJvcHMuZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNzcyhub2RlLCB7XG4gICAgICAgIHBvc2l0aW9uOiBfdGhpczIuT1JHSU5BTF9QT1NJVElPTixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMyLk9SR0lOQUxfUE9TSVRJT04gPSBudWxsO1xuICAgICAgZG9uZSAmJiBkb25lKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ2V4cG9ydHMnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRpcmVjdGlvbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICB9O1xuICB9LFxuXG4gIF93cmFwQ2hpbGQ6IGZ1bmN0aW9uIF93cmFwQ2hpbGQoY2hpbGQsIHJlZikge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgU2xpZGVDaGlsZEdyb3VwLFxuICAgICAgeyBrZXk6IGNoaWxkLmtleSwgcmVmOiByZWYsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5wcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uIH0sXG4gICAgICBjaGlsZFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3N0eWxlJywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgc3R5bGUgPSBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHN0eWxlLCB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFJlcGxhY2VUcmFuc2l0aW9uR3JvdXAsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHJlZjogJ2NvbnRhaW5lcicsXG4gICAgICAgIGNoaWxkRmFjdG9yeTogdGhpcy5fd3JhcENoaWxkLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNvbXBvbmVudDogJ2RpdicgfSksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaXNUcmFuc2l0aW9uaW5nOiBmdW5jdGlvbiBpc1RyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb3VudGVkKCkgJiYgdGhpcy5yZWZzLmNvbnRhaW5lci5pc1RyYW5zaXRpb25pbmcoKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGRhdGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGVzJyksXG4gICAgTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpLFxuICAgIGxvY2FsaXplcnMgPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpLmxvY2FsZSxcbiAgICBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy50aW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdUaW1lTGlzdCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG1pbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWF4OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBzdGVwOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGl0ZW1Db21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBmb3JtYXQ6IEN1c3RvbVByb3BUeXBlcy5kYXRlRm9ybWF0LFxuICAgIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVzZXJ2ZURhdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGN1bHR1cmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0ZXA6IDMwLFxuICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge30sXG4gICAgICBtaW46IG5ldyBEYXRlKDE5MDAsIDAsIDEpLFxuICAgICAgbWF4OiBuZXcgRGF0ZSgyMDk5LCAxMSwgMzEpLFxuICAgICAgcHJlc2VydmVEYXRlOiB0cnVlLFxuICAgICAgZGVsYXk6IDMwMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRlcyh0aGlzLnByb3BzKSxcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLl9jbG9zZXN0RGF0ZShkYXRhLCB0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb2N1c2VkSXRlbTogZm9jdXNlZEl0ZW0gfHwgZGF0YVswXSxcbiAgICAgIGRhdGVzOiBkYXRhXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBkYXRhID0gdGhpcy5fZGF0ZXMobmV4dFByb3BzKSxcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLl9jbG9zZXN0RGF0ZShkYXRhLCBuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgICB2YWxDaGFuZ2VkID0gIWRhdGVzLmVxKG5leHRQcm9wcy52YWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSwgJ21pbnV0ZXMnKSxcbiAgICAgICAgbWluQ2hhbmdlZCA9ICFkYXRlcy5lcShuZXh0UHJvcHMubWluLCB0aGlzLnByb3BzLm1pbiwgJ21pbnV0ZXMnKSxcbiAgICAgICAgbWF4Q2hhbmdlZCA9ICFkYXRlcy5lcShuZXh0UHJvcHMubWF4LCB0aGlzLnByb3BzLm1heCwgJ21pbnV0ZXMnKTtcblxuICAgIGlmICh2YWxDaGFuZ2VkIHx8IG1pbkNoYW5nZWQgfHwgbWF4Q2hhbmdlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRJdGVtOiBmb2N1c2VkSXRlbSB8fCBkYXRhWzBdLFxuICAgICAgICBkYXRlczogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtaW4gPSBfcHJvcHMubWluO1xuICAgIHZhciBtYXggPSBfcHJvcHMubWF4O1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgc3RlcCA9IF9wcm9wcy5zdGVwO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnbWluJywgJ21heCcsICd2YWx1ZScsICdzdGVwJ10pO1xuXG4gICAgdmFyIHRpbWVzID0gdGhpcy5zdGF0ZS5kYXRlcyxcbiAgICAgICAgZGF0ZSA9IHRoaXMuX2Nsb3Nlc3REYXRlKHRpbWVzLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICByZWY6ICdsaXN0JyxcbiAgICAgIGRhdGE6IHRpbWVzLFxuICAgICAgdGV4dEZpZWxkOiAnbGFiZWwnLFxuICAgICAgdmFsdWVGaWVsZDogJ2RhdGUnLFxuICAgICAgc2VsZWN0ZWQ6IGRhdGUsXG4gICAgICBmb2N1c2VkOiB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtXG4gICAgfSkpO1xuICB9LFxuXG4gIF9jbG9zZXN0RGF0ZTogZnVuY3Rpb24gX2Nsb3Nlc3REYXRlKHRpbWVzLCBkYXRlKSB7XG4gICAgdmFyIHJvdW5kVG8gPSAxMDAwICogNjAgKiB0aGlzLnByb3BzLnN0ZXAsXG4gICAgICAgIGluc3QgPSBudWxsLFxuICAgICAgICBsYWJlbDtcblxuICAgIGlmICghZGF0ZSkgcmV0dXJuIG51bGw7XG5cbiAgICBkYXRlID0gbmV3IERhdGUoTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIHJvdW5kVG8pICogcm91bmRUbyk7XG4gICAgbGFiZWwgPSBkYXRlcy5mb3JtYXQoZGF0ZSwgdGhpcy5wcm9wcy5mb3JtYXQsIHRoaXMucHJvcHMuY3VsdHVyZSk7XG5cbiAgICB0aW1lcy5zb21lKGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICBpZiAodGltZS5sYWJlbCA9PT0gbGFiZWwpIHJldHVybiBpbnN0ID0gdGltZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnN0O1xuICB9LFxuXG4gIF9kYXRhOiBmdW5jdGlvbiBfZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRlcztcbiAgfSxcblxuICBfZGF0ZXM6IGZ1bmN0aW9uIF9kYXRlcyhwcm9wcykge1xuICAgIHZhciB0aW1lcyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgdmFsdWVzID0gdGhpcy5fZGF0ZVZhbHVlcyhwcm9wcyksXG4gICAgICAgIHN0YXJ0ID0gdmFsdWVzLm1pbixcbiAgICAgICAgc3RhcnREYXkgPSBkYXRlcy5kYXRlKHN0YXJ0KTtcblxuICAgIHdoaWxlIChkYXRlcy5kYXRlKHN0YXJ0KSA9PT0gc3RhcnREYXkgJiYgZGF0ZXMubHRlKHN0YXJ0LCB2YWx1ZXMubWF4KSkge1xuICAgICAgaSsrO1xuICAgICAgdGltZXMucHVzaCh7IGRhdGU6IHN0YXJ0LCBsYWJlbDogbG9jYWxpemVycy5kYXRlLmZvcm1hdChzdGFydCwgZm9ybWF0KHByb3BzKSwgcHJvcHMuY3VsdHVyZSkgfSk7XG4gICAgICBzdGFydCA9IGRhdGVzLmFkZChzdGFydCwgcHJvcHMuc3RlcCB8fCAzMCwgJ21pbnV0ZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzO1xuICB9LFxuXG4gIF9kYXRlVmFsdWVzOiBmdW5jdGlvbiBfZGF0ZVZhbHVlcyhwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IGRhdGVzLnRvZGF5KCksXG4gICAgICAgIHVzZURhdGUgPSBwcm9wcy5wcmVzZXJ2ZURhdGUsXG4gICAgICAgIG1pbiA9IHByb3BzLm1pbixcbiAgICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kO1xuXG4gICAgLy9jb21wYXJlIGp1c3QgdGhlIHRpbWUgcmVncmFkbGVzcyBvZiB3aGV0aGVyIHRoZXkgZmFsbCBvbiB0aGUgc2FtZSBkYXlcbiAgICBpZiAoIXVzZURhdGUpIHtcbiAgICAgIHN0YXJ0ID0gZGF0ZXMuc3RhcnRPZihkYXRlcy5tZXJnZShuZXcgRGF0ZSgpLCBtaW4pLCAnbWludXRlcycpO1xuICAgICAgZW5kID0gZGF0ZXMuc3RhcnRPZihkYXRlcy5tZXJnZShuZXcgRGF0ZSgpLCBtYXgpLCAnbWludXRlcycpO1xuXG4gICAgICBpZiAoZGF0ZXMubHRlKGVuZCwgc3RhcnQpICYmIGRhdGVzLmd0KG1heCwgbWluLCAnZGF5JykpIGVuZCA9IGRhdGVzLnRvbW9ycm93KCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbjogc3RhcnQsXG4gICAgICAgIG1heDogZW5kXG4gICAgICB9O1xuICAgIH1cblxuICAgIHN0YXJ0ID0gZGF0ZXMudG9kYXkoKTtcbiAgICBlbmQgPSBkYXRlcy50b21vcnJvdygpO1xuICAgIC8vZGF0ZSBwYXJ0cyBhcmUgZXF1YWxcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiBkYXRlcy5lcSh2YWx1ZSwgbWluLCAnZGF5JykgPyBkYXRlcy5tZXJnZShzdGFydCwgbWluKSA6IHN0YXJ0LFxuICAgICAgbWF4OiBkYXRlcy5lcSh2YWx1ZSwgbWF4LCAnZGF5JykgPyBkYXRlcy5tZXJnZShzdGFydCwgbWF4KSA6IGVuZFxuICAgIH07XG4gIH0sXG5cbiAgX2tleURvd246IGZ1bmN0aW9uIF9rZXlEb3duKGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGtleSA9IGUua2V5LFxuICAgICAgICBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSksXG4gICAgICAgIGZvY3VzZWRJdGVtID0gdGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSxcbiAgICAgICAgbGlzdCA9IHRoaXMucmVmcy5saXN0O1xuXG4gICAgaWYgKGtleSA9PT0gJ0VuZCcpIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbGlzdC5sYXN0KCkgfSk7ZWxzZSBpZiAoa2V5ID09PSAnSG9tZScpIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbGlzdC5maXJzdCgpIH0pO2Vsc2UgaWYgKGtleSA9PT0gJ0VudGVyJykgdGhpcy5wcm9wcy5vblNlbGVjdChmb2N1c2VkSXRlbSk7ZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0Lm5leHQoZm9jdXNlZEl0ZW0pIH0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbGlzdC5wcmV2KGZvY3VzZWRJdGVtKSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLnNlYXJjaChjaGFyYWN0ZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGl0ZW0gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2Nyb2xsVG86IGZ1bmN0aW9uIHNjcm9sbFRvKCkge1xuICAgIHRoaXMucmVmcy5saXN0Lm1vdmUgJiYgdGhpcy5yZWZzLmxpc3QubW92ZSgpO1xuICB9LFxuXG4gIHNlYXJjaDogZnVuY3Rpb24gc2VhcmNoKGNoYXJhY3RlciwgY2IpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB3b3JkID0gKCh0aGlzLl9zZWFyY2hUZXJtIHx8ICcnKSArIGNoYXJhY3RlcikudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuX3NlYXJjaFRlcm0gPSB3b3JkO1xuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdzZWFyY2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdCA9IF90aGlzMi5yZWZzLmxpc3QsXG4gICAgICAgICAgaXRlbSA9IGxpc3QubmV4dChfdGhpczIuc3RhdGUuZm9jdXNlZEl0ZW0sIHdvcmQpO1xuXG4gICAgICBfdGhpczIuX3NlYXJjaFRlcm0gPSAnJztcbiAgICAgIGlmIChpdGVtKSBjYihpdGVtKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY24gPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdleHBvcnRzJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHByb3BzID0gYmFiZWxIZWxwZXJzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwcm9wcywgeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiBjbihjbGFzc05hbWUsICdydy1idG4nKSB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uZmlndXJhdGlvbik7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZTtcbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLm1vbnRoRm9ybWF0IHx8IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzLm1vbnRoO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgb3B0aW9uSUQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgY3VsdHVyZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIGZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1heDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgbW9udGhGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXRcbn07XG5cbnZhciBpc0VxdWFsID0gZnVuY3Rpb24gaXNFcXVhbChkYXRlQSwgZGF0ZUIpIHtcbiAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZXEoZGF0ZUEsIGRhdGVCLCAnbW9udGgnKTtcbn07XG52YXIgb3B0aW9uSWQgPSBmdW5jdGlvbiBvcHRpb25JZChpZCwgZGF0ZSkge1xuICByZXR1cm4gJycgKyBpZCArICdfX3llYXJfJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ueWVhcihkYXRlKSArICctJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubW9udGgoZGF0ZSk7XG59O1xuXG52YXIgWWVhclZpZXcgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnWWVhclZpZXcnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bENoaWxkQ29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgYWN0aXZlSWQgPSBvcHRpb25JZCh0aGlzLl9pZCgpLCB0aGlzLnByb3BzLmZvY3VzZWQpO1xuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoYWN0aXZlSWQpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIG1vbnRocyA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubW9udGhzSW5ZZWFyKF91dGlsRGF0ZXMyWydkZWZhdWx0J10ueWVhcihmb2N1c2VkKSk7XG4gICAgdmFyIHJvd3MgPSBfdXRpbF8yWydkZWZhdWx0J10uY2h1bmsobW9udGhzLCA0KTtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBfdXRpbF8yWydkZWZhdWx0J10ub21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0YWJsZScsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICByb2xlOiAnZ3JpZCcsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsICdydy1uYXYtdmlldycpXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGJvZHknLFxuICAgICAgICBudWxsLFxuICAgICAgICByb3dzLm1hcCh0aGlzLl9yb3cpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBfcm93OiBmdW5jdGlvbiBfcm93KHJvdywgcm93SWR4KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wczIuZm9jdXNlZDtcbiAgICB2YXIgc2VsZWN0ZWQgPSBfcHJvcHMyLnNlbGVjdGVkO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQ7XG4gICAgdmFyIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZTtcbiAgICB2YXIgdmFsdWUgPSBfcHJvcHMyLnZhbHVlO1xuICAgIHZhciB0b2RheSA9IF9wcm9wczIudG9kYXk7XG4gICAgdmFyIGN1bHR1cmUgPSBfcHJvcHMyLmN1bHR1cmU7XG4gICAgdmFyIG1pbiA9IF9wcm9wczIubWluO1xuICAgIHZhciBtYXggPSBfcHJvcHMyLm1heDtcbiAgICB2YXIgRGF5ID0gX3Byb3BzMi5kYXlDb21wb25lbnQ7XG4gICAgdmFyIGlkID0gdGhpcy5faWQoKTtcbiAgICB2YXIgbGFiZWxGb3JtYXQgPSBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy5oZWFkZXI7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndHInLFxuICAgICAgeyBrZXk6IHJvd0lkeCwgcm9sZTogJ3JvdycgfSxcbiAgICAgIHJvdy5tYXAoZnVuY3Rpb24gKGRhdGUsIGNvbElkeCkge1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gaXNFcXVhbChkYXRlLCBmb2N1c2VkKSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGRhdGUsIHZhbHVlKSxcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCA9IGlzRXF1YWwoZGF0ZSwgdG9kYXkpLFxuICAgICAgICAgICAgbGFiZWwgPSBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KGRhdGUsIGxhYmVsRm9ybWF0LCBjdWx0dXJlKTtcblxuICAgICAgICB2YXIgY3VycmVudElEID0gb3B0aW9uSWQoaWQsIGRhdGUpO1xuXG4gICAgICAgIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UoZGF0ZSwgbWluLCBtYXgsICdtb250aCcpID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGNvbElkeCxcbiAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICBpZDogY3VycmVudElELFxuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogbGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogY3VycmVudElELFxuICAgICAgICAgICAgICBvbkNsaWNrOiBvbkNoYW5nZS5iaW5kKG51bGwsIGRhdGUpLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWJ0bicsIHtcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgICAgICAgJ3J3LXN0YXRlLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAncnctbm93JzogY3VycmVudE1vbnRoXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXRlLCBmb3JtYXQoX3RoaXMucHJvcHMpLCBjdWx0dXJlKVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgeyBrZXk6IGNvbElkeCwgY2xhc3NOYW1lOiAncnctZW1wdHktY2VsbCcsIHJvbGU6ICdwcmVzZW50YXRpb24nIH0sXG4gICAgICAgICAgJ8KgJ1xuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBZZWFyVmlldztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIGNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWwvbG9jYWxpemVycycpO1xuXG52YXIgTnVtYmVyTG9jYWxpemVyID0gX3JlcXVpcmUuTnVtYmVyTG9jYWxpemVyO1xudmFyIERhdGVMb2NhbGl6ZXIgPSBfcmVxdWlyZS5EYXRlTG9jYWxpemVyO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9nbG9iYWxpemUtbG9jYWxpemVycycpO1xuXG52YXIgZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyID0gX3JlcXVpcmUyLmdsb2JhbGl6ZU51bWJlckxvY2FsaXplcjtcbnZhciBnbG9iYWxpemVEYXRlTG9jYWxpemVyID0gX3JlcXVpcmUyLmdsb2JhbGl6ZURhdGVMb2NhbGl6ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHNldEdsb2JhbGl6ZUluc3RhbmNlOiBkZXByZWNpYXRlTWV0aG9kKGZ1bmN0aW9uIChnbG9iYWxpemUpIHtcbiAgICBjb25maWd1cmF0aW9uLmxvY2FsZS5kYXRlID0gZ2xvYmFsaXplRGF0ZUxvY2FsaXplcihnbG9iYWxpemUpO1xuICAgIGNvbmZpZ3VyYXRpb24ubG9jYWxlLm51bWJlciA9IGdsb2JhbGl6ZU51bWJlckxvY2FsaXplcihnbG9iYWxpemUpO1xuICB9KSxcblxuICBzZXRBbmltYXRlOiBmdW5jdGlvbiBzZXRBbmltYXRlKGFuaW1hdGVmbikge1xuICAgIGNvbmZpZ3VyYXRpb24uYW5pbWF0ZSA9IGFuaW1hdGVmbjtcbiAgfSxcblxuICBzZXREYXRlTG9jYWxpemVyOiBmdW5jdGlvbiBzZXREYXRlTG9jYWxpemVyKHNwZWMpIHtcbiAgICBjb25maWd1cmF0aW9uLmxvY2FsZS5kYXRlID0gbmV3IERhdGVMb2NhbGl6ZXIoc3BlYyk7XG4gIH0sXG5cbiAgc2V0TnVtYmVyTG9jYWxpemVyOiBmdW5jdGlvbiBzZXROdW1iZXJMb2NhbGl6ZXIoc3BlYykge1xuICAgIGNvbmZpZ3VyYXRpb24ubG9jYWxlLm51bWJlciA9IG5ldyBOdW1iZXJMb2NhbGl6ZXIoc3BlYyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRlcHJlY2lhdGVNZXRob2QoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnc2V0R2xvYmFsaXplSW5zdGFuY2UoKSBpcyBkZXByZWNpYXRlZC4gdXNlIHNldERhdGVMb2NhbGl6ZXIoKSBhbmQgc2V0TnVtYmVyTG9jYWxpemVyKCkgd2l0aCB0aGUgR2xvYmFsaXplIGxvY2FsaXplcnMuICcgKyAnIFRPRE8gRE9DIExJTksnKTtcblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi91dGlsL2xvY2FsaXplcnMnKTtcblxudmFyIE51bWJlckxvY2FsaXplciA9IF9yZXF1aXJlLk51bWJlckxvY2FsaXplcjtcbnZhciBEYXRlTG9jYWxpemVyID0gX3JlcXVpcmUuRGF0ZUxvY2FsaXplcjtcblxudmFyIGRhdGVzID0gcmVxdWlyZSgnZGF0ZS1hcml0aG1ldGljJyk7XG5cbmZ1bmN0aW9uIGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXIoZ2xvYmFsaXplKSB7XG4gIHZhciBzaG9ydE5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBnZXRDdWx0dXJlKGN1bHR1cmUpIHtcbiAgICByZXR1cm4gY3VsdHVyZSA/IChsb2NhbGl6ZXIuZ2xvYmFsaXplIHx8IGdsb2JhbGl6ZSkuZmluZENsb3Nlc3RDdWx0dXJlKGN1bHR1cmUpIDogKGxvY2FsaXplci5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5jdWx0dXJlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaXJzdE9mV2VlayhjdWx0dXJlKSB7XG4gICAgY3VsdHVyZSA9IGdldEN1bHR1cmUoY3VsdHVyZSk7XG4gICAgcmV0dXJuIGN1bHR1cmUgJiYgY3VsdHVyZS5jYWxlbmRhci5maXJzdERheSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvcnREYXkoZGF5T2ZUaGVXZWVrKSB7XG4gICAgdmFyIGN1bHR1cmUgPSBnZXRDdWx0dXJlKGFyZ3VtZW50c1sxXSksXG4gICAgICAgIG5hbWUgPSBjdWx0dXJlLm5hbWUsXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RPZldlZWsoY3VsdHVyZSksXG4gICAgICAgIGRheXMgPSBmdW5jdGlvbiBkYXlzKCkge1xuICAgICAgdmFyIGRheXMgPSBjdWx0dXJlLmNhbGVuZGFyLmRheXMubmFtZXNTaG9ydC5zbGljZSgpO1xuICAgICAgcmV0dXJuIHN0YXJ0ID09PSAwID8gZGF5cyA6IGRheXMuY29uY2F0KGRheXMuc3BsaWNlKDAsIHN0YXJ0KSk7XG4gICAgfTtcblxuICAgIHZhciBuYW1lcyA9IHNob3J0TmFtZXNbbmFtZV0gfHwgKHNob3J0TmFtZXNbbmFtZV0gPSBkYXlzKCkpO1xuXG4gICAgcmV0dXJuIG5hbWVzW2RheU9mVGhlV2Vla107XG4gIH1cblxuICB2YXIgbG9jYWxpemVyID0gbmV3IERhdGVMb2NhbGl6ZXIoe1xuXG4gICAgZm9ybWF0czoge1xuICAgICAgZGF0ZTogJ2QnLFxuICAgICAgdGltZTogJ3QnLFxuICAgICAgJ2RlZmF1bHQnOiAnZicsXG4gICAgICBoZWFkZXI6ICdNTU1NIHl5eXknLFxuICAgICAgZm9vdGVyOiAnRCcsXG4gICAgICB3ZWVrZGF5OiBzaG9ydERheSxcbiAgICAgIGRheU9mTW9udGg6ICdkZCcsXG4gICAgICBtb250aDogJ01NTScsXG4gICAgICB5ZWFyOiAneXl5eScsXG5cbiAgICAgIGRlY2FkZTogZnVuY3Rpb24gZGVjYWRlKGR0LCBjdWx0dXJlLCBsKSB7XG4gICAgICAgIHJldHVybiAnJyArIGwuZm9ybWF0KGR0LCBsLmZvcm1hdHMueWVhciwgY3VsdHVyZSkgKyAnIC0gJyArIGwuZm9ybWF0KGRhdGVzLmVuZE9mKGR0LCAnZGVjYWRlJyksIGwuZm9ybWF0cy55ZWFyLCBjdWx0dXJlKTtcbiAgICAgIH0sXG5cbiAgICAgIGNlbnR1cnk6IGZ1bmN0aW9uIGNlbnR1cnkoZHQsIGN1bHR1cmUsIGwpIHtcbiAgICAgICAgcmV0dXJuICcnICsgbC5mb3JtYXQoZHQsIGwuZm9ybWF0cy55ZWFyLCBjdWx0dXJlKSArICcgLSAnICsgbC5mb3JtYXQoZGF0ZXMuZW5kT2YoZHQsICdjZW50dXJ5JyksIGwuZm9ybWF0cy55ZWFyLCBjdWx0dXJlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlyc3RPZldlZWs6IGZpcnN0T2ZXZWVrLFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpIHtcbiAgICAgIHJldHVybiAodGhpcy5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5wYXJzZURhdGUodmFsdWUsIGZvcm1hdCwgY3VsdHVyZSk7XG4gICAgfSxcblxuICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBfZm9ybWF0LCBjdWx0dXJlKSB7XG4gICAgICByZXR1cm4gKHRoaXMuZ2xvYmFsaXplIHx8IGdsb2JhbGl6ZSkuZm9ybWF0KHZhbHVlLCBfZm9ybWF0LCBjdWx0dXJlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEJhY2stY29tcGF0IGNydWZ0LCBleHBvc2UgdGhlIGdsb2JhbGl6ZSBpbnN0YW5jZSBzbyBzZXRHbG9iYWxpemVJbnN0YW5jZSBjYW4gbXV0YXRlIGl0IGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIC8vIHRoaXMgd29ya3MgYi9jIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHByb3AgdmFsdWVzXG4gIGxvY2FsaXplci5nbG9iYWxpemUgPSBnbG9iYWxpemU7XG4gIHJldHVybiBsb2NhbGl6ZXI7XG59XG5cbmZ1bmN0aW9uIGdsb2JhbGl6ZU51bWJlckxvY2FsaXplcihnbG9iYWxpemUpIHtcblxuICBmdW5jdGlvbiBnZXRDdWx0dXJlKGN1bHR1cmUpIHtcbiAgICByZXR1cm4gY3VsdHVyZSA/IChsb2NhbGl6ZXIuZ2xvYmFsaXplIHx8IGdsb2JhbGl6ZSkuZmluZENsb3Nlc3RDdWx0dXJlKGN1bHR1cmUpIDogKGxvY2FsaXplci5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5jdWx0dXJlKCk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVyID0gbmV3IE51bWJlckxvY2FsaXplcih7XG5cbiAgICBmb3JtYXRzOiB7XG4gICAgICAnZGVmYXVsdCc6ICdEJ1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodmFsdWUsIGN1bHR1cmUpIHtcbiAgICAgIHJldHVybiAodGhpcy5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5wYXJzZUZsb2F0KHZhbHVlLCAxMCwgY3VsdHVyZSk7XG4gICAgfSxcblxuICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBfZm9ybWF0MiwgY3VsdHVyZSkge1xuICAgICAgcmV0dXJuICh0aGlzLmdsb2JhbGl6ZSB8fCBnbG9iYWxpemUpLmZvcm1hdCh2YWx1ZSwgX2Zvcm1hdDIsIGN1bHR1cmUpO1xuICAgIH0sXG5cbiAgICBwcmVjaXNpb246IGZ1bmN0aW9uIHByZWNpc2lvbihmb3JtYXQsIF9jdWx0dXJlKSB7XG4gICAgICB2YXIgY3VsdHVyZSA9IGdldEN1bHR1cmUoX2N1bHR1cmUpLFxuICAgICAgICAgIG51bUZvcm1hdCA9IGN1bHR1cmUubnVtYmVyRm9ybWF0O1xuXG4gICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGZvcm1hdC5sZW5ndGggPiAxKSByZXR1cm4gcGFyc2VGbG9hdChmb3JtYXQuc3Vic3RyKDEpKTtcblxuICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ3AnKSAhPT0gLTEpIG51bUZvcm1hdCA9IG51bUZvcm1hdC5wZXJjZW50O1xuICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ2MnKSAhPT0gLTEpIG51bUZvcm1hdCA9IG51bUZvcm1hdC5jdXJlbmN5O1xuXG4gICAgICAgIHJldHVybiBudW1Gb3JtYXQuZGVjaW1hbHMgfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyBzZWUgcG9pbnQgYWJvdmVcbiAgbG9jYWxpemVyLmdsb2JhbGl6ZSA9IGdsb2JhbGl6ZTtcbiAgcmV0dXJuIGxvY2FsaXplcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdsb2JhbGl6ZU51bWJlckxvY2FsaXplcjogZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyLCBnbG9iYWxpemVEYXRlTG9jYWxpemVyOiBnbG9iYWxpemVEYXRlTG9jYWxpemVyXG59OyIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgW0FycmF5LnByb3RvdHlwZS5zb21lLCBBcnJheS5wcm90b3R5cGUuZmlsdGVyLCBBcnJheS5wcm90b3R5cGUucmVkdWNlXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBpZiAoIW1ldGhvZCkgdGhyb3cgbmV3IEVycm9yKCdPbmUgb3IgbW9yZSBFUzUgZmVhdHVyZXMgaXMgbm90IGF2YWlsYWJsZSB0byBSZWFjdFdpZGdldHM6IGh0dHA6Ly9qcXVlbnNlLmdpdGh1Yi5pby9yZWFjdC13aWRnZXRzL2RvY3MvIy9nZXR0aW5nLXN0YXJ0ZWQvYnJvd3NlcicpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgRHJvcGRvd25MaXN0OiByZXF1aXJlKCcuL0Ryb3Bkb3duTGlzdCcpLFxuICBDb21ib2JveDogcmVxdWlyZSgnLi9Db21ib2JveCcpLFxuXG4gIENhbGVuZGFyOiByZXF1aXJlKCcuL0NhbGVuZGFyJyksXG4gIERhdGVUaW1lUGlja2VyOiByZXF1aXJlKCcuL0RhdGVUaW1lUGlja2VyJyksXG5cbiAgTnVtYmVyUGlja2VyOiByZXF1aXJlKCcuL051bWJlclBpY2tlcicpLFxuXG4gIE11bHRpc2VsZWN0OiByZXF1aXJlKCcuL011bHRpc2VsZWN0JyksXG4gIFNlbGVjdExpc3Q6IHJlcXVpcmUoJy4vU2VsZWN0TGlzdCcpLFxuXG4gIGNvbmZpZ3VyZTogcmVxdWlyZSgnLi9jb25maWd1cmUnKSxcblxuICB1dGlsczoge1xuICAgIFJlcGxhY2VUcmFuc2l0aW9uR3JvdXA6IHJlcXVpcmUoJy4vUmVwbGFjZVRyYW5zaXRpb25Hcm91cCcpLFxuICAgIFNsaWRlVHJhbnNpdGlvbjogcmVxdWlyZSgnLi9TbGlkZVRyYW5zaXRpb24nKVxuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIHNoYXBlID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zaGFwZSh7XG4gIC8vc2V0QWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcmVjb25jaWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG5mdW5jdGlvbiBkZWZhdWx0UmVjb25jaWxlKGtleSwgaWQpIHtcbiAgcmV0dXJuIGlkO1xufVxuXG5mdW5jdGlvbiBmbHVzaEFyaWFUb05vZGUoaWQsIG5vZGVPckNvbXBvbmVudCwgY3R4KSB7XG4gIHZhciBub2RlID0gdHlwZW9mIG5vZGVPckNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyA/IG5vZGVPckNvbXBvbmVudChjdHgpIDogdHlwZW9mIG5vZGVPckNvbXBvbmVudCA9PT0gJ3N0cmluZycgPyBjdHgucmVmc1tub2RlT3JDb21wb25lbnRdIDogY3R4O1xuXG4gIGlmIChub2RlKSB7XG4gICAgLy9jb25zb2xlLmxvZygnZmx1c2hpbmchJywgbm9kZS5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSlcbiAgICBpZiAoaWQpIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShub2RlKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGlkKTtlbHNlIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShub2RlKS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChub2RlT3JDb21wb25lbnQpIHtcbiAgdmFyIHJlY29uY2lsZUNoaWxkcmVuID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0UmVjb25jaWxlIDogYXJndW1lbnRzWzFdO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBjb250ZXh0VHlwZXM6IHtcbiAgICAgIGFjdGl2ZURlc2NlbmRhbnRzOiBzaGFwZVxuICAgIH0sXG5cbiAgICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgICAgYWN0aXZlRGVzY2VuZGFudHM6IHNoYXBlXG4gICAgfSxcblxuICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50OiBmdW5jdGlvbiBhcmlhQWN0aXZlRGVzY2VuZGFudChpZCkge1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy5hcmlhQWN0aXZlRGVzY2VuZGFudEtleSA6IGFyZ3VtZW50c1sxXTtcbiAgICAgIHZhciBhY3RpdmVEZXNjZW5kYW50cyA9IHRoaXMuY29udGV4dC5hY3RpdmVEZXNjZW5kYW50cztcblxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLl9fYXJpYUFjdGl2ZURlc2NlbmRhbnRJZDtcblxuICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHJldHVybiBjdXJyZW50O1xuXG4gICAgICBpZCA9IHJlY29uY2lsZUNoaWxkcmVuLmNhbGwodGhpcywga2V5LCBpZCk7XG5cbiAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSBpZCA9IGN1cnJlbnQ7ZWxzZSB7XG4gICAgICAgIHRoaXMuX19hcmlhQWN0aXZlRGVzY2VuZGFudElkID0gaWQ7XG4gICAgICAgIGZsdXNoQXJpYVRvTm9kZShpZCwgbm9kZU9yQ29tcG9uZW50LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlRGVzY2VuZGFudHMgJiYgYWN0aXZlRGVzY2VuZGFudHMucmVjb25jaWxlKGtleSwgaWQpO1xuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0IHx8ICh0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICBhY3RpdmVEZXNjZW5kYW50czoge1xuICAgICAgICAgIHJlY29uY2lsZTogZnVuY3Rpb24gcmVjb25jaWxlKGtleSwgaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChpZCwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZmlsdGVycyA9IHJlcXVpcmUoJy4uL3V0aWwvZmlsdGVyJyksXG4gICAgQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vdXRpbC9wcm9wVHlwZXMnKSxcbiAgICBoZWxwZXIgPSByZXF1aXJlKCcuL0RhdGFIZWxwZXJzTWl4aW4nKTtcblxudmFyIGRmbHQgPSBmdW5jdGlvbiBkZmx0KGYpIHtcbiAgcmV0dXJuIGYgPT09IHRydWUgPyAnc3RhcnRzV2l0aCcgOiBmID8gZiA6ICdlcSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgZmlsdGVyOiBDdXN0b21Qcm9wVHlwZXMuZmlsdGVyLFxuICAgIGNhc2VTZW5zaXRpdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG1pbkxlbmd0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgIH07XG4gIH0sXG5cbiAgZmlsdGVySW5kZXhPZjogZnVuY3Rpb24gZmlsdGVySW5kZXhPZihpdGVtcywgc2VhcmNoVGVybSkge1xuICAgIHZhciBpZHggPSAtMSxcbiAgICAgICAgbWF0Y2hlcyA9IHR5cGVvZiB0aGlzLnByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZmlsdGVyIDogZ2V0RmlsdGVyKGZpbHRlcnNbZGZsdCh0aGlzLnByb3BzLmZpbHRlcildLCBzZWFyY2hUZXJtLCB0aGlzKTtcblxuICAgIGlmICghc2VhcmNoVGVybSB8fCAhc2VhcmNoVGVybS50cmltKCkgfHwgdGhpcy5wcm9wcy5maWx0ZXIgJiYgc2VhcmNoVGVybS5sZW5ndGggPCAodGhpcy5wcm9wcy5taW5MZW5ndGggfHwgMSkpIHJldHVybiAtMTtcblxuICAgIGl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICBpZiAobWF0Y2hlcyhpdGVtLCBzZWFyY2hUZXJtLCBpKSkgcmV0dXJuIChpZHggPSBpLCBmYWxzZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlkeDtcbiAgfSxcblxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihpdGVtcywgc2VhcmNoVGVybSkge1xuICAgIHZhciBtYXRjaGVzID0gdHlwZW9mIHRoaXMucHJvcHMuZmlsdGVyID09PSAnc3RyaW5nJyA/IGdldEZpbHRlcihmaWx0ZXJzW3RoaXMucHJvcHMuZmlsdGVyXSwgc2VhcmNoVGVybSwgdGhpcykgOiB0aGlzLnByb3BzLmZpbHRlcjtcblxuICAgIGlmICghbWF0Y2hlcyB8fCAhc2VhcmNoVGVybSB8fCAhc2VhcmNoVGVybS50cmltKCkgfHwgc2VhcmNoVGVybS5sZW5ndGggPCAodGhpcy5wcm9wcy5taW5MZW5ndGggfHwgMSkpIHJldHVybiBpdGVtcztcblxuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoaXRlbSwgc2VhcmNoVGVybSwgaWR4KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0RmlsdGVyKG1hdGNoZXIsIHNlYXJjaFRlcm0sIGN0eCkge1xuICBzZWFyY2hUZXJtID0gIWN0eC5wcm9wcy5jYXNlU2Vuc2l0aXZlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdmFsID0gaGVscGVyLl9kYXRhVGV4dC5jYWxsKGN0eCwgaXRlbSk7XG5cbiAgICBpZiAoIWN0eC5wcm9wcy5jYXNlU2Vuc2l0aXZlKSB2YWwgPSB2YWwudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBtYXRjaGVyKHZhbCwgc2VhcmNoVGVybSk7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBwcm9wVHlwZXMgPSByZXF1aXJlKCcuLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi91dGlsL18nKTtcblxudmFyIGhhcyA9IF9yZXF1aXJlLmhhcztcbnZhciBpc1NoYWxsb3dFcXVhbCA9IF9yZXF1aXJlLmlzU2hhbGxvd0VxdWFsO1xuXG5mdW5jdGlvbiBhY2Nlc3NvcihkYXRhLCBmaWVsZCkge1xuICB2YXIgdmFsdWUgPSBkYXRhO1xuXG4gIGlmICh0eXBlb2YgZmllbGQgPT09ICdmdW5jdGlvbicpIHZhbHVlID0gZmllbGQoZGF0YSk7ZWxzZSBpZiAoZGF0YSA9PSBudWxsKSB2YWx1ZSA9IGRhdGE7ZWxzZSBpZiAodHlwZW9mIGZpZWxkID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZmllbGQgaW4gZGF0YSkgdmFsdWUgPSBkYXRhW2ZpZWxkXTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dEZpZWxkOiBwcm9wVHlwZXMuYWNjZXNzb3JcbiAgfSxcblxuICBfZGF0YVZhbHVlOiBmdW5jdGlvbiBfZGF0YVZhbHVlKGl0ZW0pIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLnByb3BzLnZhbHVlRmllbGQ7XG5cbiAgICByZXR1cm4gZmllbGQgJiYgaXRlbSAmJiBoYXMoaXRlbSwgZmllbGQpID8gaXRlbVtmaWVsZF0gOiBpdGVtO1xuICB9LFxuXG4gIF9kYXRhVGV4dDogZnVuY3Rpb24gX2RhdGFUZXh0KGl0ZW0pIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLnByb3BzLnRleHRGaWVsZCxcbiAgICAgICAgdmFsdWUgPSBhY2Nlc3NvcihpdGVtLCBmaWVsZCk7XG5cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUgKyAnJztcbiAgfSxcblxuICBfZGF0YUluZGV4T2Y6IGZ1bmN0aW9uIF9kYXRhSW5kZXhPZihkYXRhLCBpdGVtKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBpZHggPSAtMSxcbiAgICAgICAgbGVuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGZpbmRlciA9IGZ1bmN0aW9uIGZpbmRlcihkYXR1bSkge1xuICAgICAgcmV0dXJuIF90aGlzLl92YWx1ZU1hdGNoZXIoaXRlbSwgZGF0dW0pO1xuICAgIH07XG5cbiAgICB3aGlsZSAoKytpZHggPCBsZW4pIGlmIChmaW5kZXIoZGF0YVtpZHhdKSkgcmV0dXJuIGlkeDtcblxuICAgIHJldHVybiAtMTtcbiAgfSxcblxuICBfdmFsdWVNYXRjaGVyOiBmdW5jdGlvbiBfdmFsdWVNYXRjaGVyKGEsIGIpIHtcbiAgICByZXR1cm4gaXNTaGFsbG93RXF1YWwodGhpcy5fZGF0YVZhbHVlKGEpLCB0aGlzLl9kYXRhVmFsdWUoYikpO1xuICB9LFxuXG4gIF9kYXRhSXRlbTogZnVuY3Rpb24gX2RhdGFJdGVtKGRhdGEsIGl0ZW0pIHtcbiAgICB2YXIgZmlyc3QgPSBkYXRhWzBdLFxuICAgICAgICBmaWVsZCA9IHRoaXMucHJvcHMudmFsdWVGaWVsZCxcbiAgICAgICAgaWR4O1xuXG4gICAgLy8gbWFrZSBhbiBhdHRlbXB0IHRvIHNlZSBpZiB3ZSB3ZXJlIHBhc3NlZCBpbiBkYXRhSXRlbSB2cyBqdXN0IGEgdmFsdWVGaWVsZCB2YWx1ZVxuICAgIC8vIGVpdGhlciBhbiBvYmplY3Qgd2l0aCB0aGUgcmlnaHQgcHJvcCwgb3IgYSBwcmltaXRpdmVcbiAgICAvLyB7IHZhbHVlRmllbGQ6IDUgfSB8fCBcImhlbGxvXCIgWyBcImhlbGxvXCIgXVxuICAgIGlmIChoYXMoaXRlbSwgZmllbGQpIHx8IHR5cGVvZiBmaXJzdCA9PT0gdHlwZW9mIHZhbCkgcmV0dXJuIGl0ZW07XG5cbiAgICBpZHggPSB0aGlzLl9kYXRhSW5kZXhPZihkYXRhLCB0aGlzLl9kYXRhVmFsdWUoaXRlbSkpO1xuXG4gICAgaWYgKGlkeCAhPT0gLTEpIHJldHVybiBkYXRhW2lkeF07XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGZpbHRlciA9IHJlcXVpcmUoJy4uL3V0aWwvZmlsdGVyJyksXG4gICAgaGVscGVyID0gcmVxdWlyZSgnLi9EYXRhSGVscGVyc01peGluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHRleHRGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGZpcnN0OiBmdW5jdGlvbiBmaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSgpWzBdO1xuICB9LFxuXG4gIGxhc3Q6IGZ1bmN0aW9uIGxhc3QoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhKCk7XG4gICAgcmV0dXJuIGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgfSxcblxuICBwcmV2OiBmdW5jdGlvbiBwcmV2KGl0ZW0sIHdvcmQpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGEoKSxcbiAgICAgICAgaWR4ID0gZGF0YS5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGlkeCA9PT0gLTEpIGlkeCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHdvcmQgPyBmaW5kUHJldkluc3RhbmNlKHRoaXMsIGRhdGEsIHdvcmQsIGlkeCkgOiAtLWlkeCA8IDAgPyBkYXRhWzBdIDogZGF0YVtpZHhdO1xuICB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoaXRlbSwgd29yZCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICBpZHggPSBkYXRhLmluZGV4T2YoaXRlbSk7XG5cbiAgICByZXR1cm4gd29yZCA/IGZpbmROZXh0SW5zdGFuY2UodGhpcywgZGF0YSwgd29yZCwgaWR4KSA6ICsraWR4ID09PSBkYXRhLmxlbmd0aCA/IGRhdGFbZGF0YS5sZW5ndGggLSAxXSA6IGRhdGFbaWR4XTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBmaW5kTmV4dEluc3RhbmNlKGN0eCwgZGF0YSwgd29yZCwgc3RhcnRJbmRleCkge1xuICB2YXIgbWF0Y2hlcyA9IGZpbHRlci5zdGFydHNXaXRoLFxuICAgICAgaWR4ID0gLTEsXG4gICAgICBsZW4gPSBkYXRhLmxlbmd0aCxcbiAgICAgIGZvdW5kU3RhcnQsXG4gICAgICBpdGVtVGV4dDtcblxuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gIHdoaWxlICgrK2lkeCA8IGxlbikge1xuICAgIGZvdW5kU3RhcnQgPSBmb3VuZFN0YXJ0IHx8IGlkeCA+IHN0YXJ0SW5kZXg7XG4gICAgaXRlbVRleHQgPSBmb3VuZFN0YXJ0ICYmIGhlbHBlci5fZGF0YVRleHQuY2FsbChjdHgsIGRhdGFbaWR4XSkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChmb3VuZFN0YXJ0ICYmIG1hdGNoZXMoaXRlbVRleHQsIHdvcmQpKSByZXR1cm4gZGF0YVtpZHhdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcmV2SW5zdGFuY2UoY3R4LCBkYXRhLCB3b3JkLCBzdGFydEluZGV4KSB7XG4gIHZhciBtYXRjaGVzID0gZmlsdGVyLnN0YXJ0c1dpdGgsXG4gICAgICBpZHggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGZvdW5kU3RhcnQsXG4gICAgICBpdGVtVGV4dDtcblxuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gIHdoaWxlICgtLWlkeCA+PSAwKSB7XG4gICAgZm91bmRTdGFydCA9IGZvdW5kU3RhcnQgfHwgaWR4IDwgc3RhcnRJbmRleDtcbiAgICBpdGVtVGV4dCA9IGZvdW5kU3RhcnQgJiYgaGVscGVyLl9kYXRhVGV4dC5jYWxsKGN0eCwgZGF0YVtpZHhdKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGZvdW5kU3RhcnQgJiYgbWF0Y2hlcyhpdGVtVGV4dCwgd29yZCkpIHJldHVybiBkYXRhW2lkeF07XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG52YXIgc2Nyb2xsVG8gPSByZXF1aXJlKCdkb20taGVscGVycy91dGlsL3Njcm9sbFRvJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIF9zY3JvbGxUbzogZnVuY3Rpb24gX3Njcm9sbFRvKHNlbGVjdGVkLCBsaXN0LCBmb2N1c2VkKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5fc2Nyb2xsU3RhdGUgfHwgKHRoaXMuX3Njcm9sbFN0YXRlID0ge30pLFxuICAgICAgICBoYW5kbGVyID0gdGhpcy5wcm9wcy5vbk1vdmUsXG4gICAgICAgIGxhc3RWaXNpYmxlID0gc3RhdGUudmlzaWJsZSxcbiAgICAgICAgbGFzdEl0ZW0gPSBzdGF0ZS5mb2N1c2VkLFxuICAgICAgICBzaG93bixcbiAgICAgICAgY2hhbmdlZDtcblxuICAgIHN0YXRlLnZpc2libGUgPSAhKCFsaXN0Lm9mZnNldFdpZHRoIHx8ICFsaXN0Lm9mZnNldEhlaWdodCk7XG4gICAgc3RhdGUuZm9jdXNlZCA9IGZvY3VzZWQ7XG5cbiAgICBjaGFuZ2VkID0gbGFzdEl0ZW0gIT09IGZvY3VzZWQ7XG4gICAgc2hvd24gPSBzdGF0ZS52aXNpYmxlICYmICFsYXN0VmlzaWJsZTtcblxuICAgIGlmIChzaG93biB8fCBzdGF0ZS52aXNpYmxlICYmIGNoYW5nZWQpIHtcbiAgICAgIGlmIChoYW5kbGVyKSBoYW5kbGVyKHNlbGVjdGVkLCBsaXN0LCBmb2N1c2VkKTtlbHNlIHtcbiAgICAgICAgc3RhdGUuc2Nyb2xsQ2FuY2VsICYmIHN0YXRlLnNjcm9sbENhbmNlbCgpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxDYW5jZWwgPSBzY3JvbGxUbyhzZWxlY3RlZCwgbGlzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBfID0gcmVxdWlyZSgnLi4vdXRpbC9fJyk7XG5cbi8vYmFja3BvcnQgUHVyZVJlbmRlckVxdWFsXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhXy5pc1NoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFfLmlzU2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgaXNSdGw6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgaXNSdGw6IGZ1bmN0aW9uIGlzUnRsKCkge1xuICAgIHJldHVybiAhIXRoaXMuY29udGV4dC5pc1J0bDtcbiAgfVxuXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIGlzUnRsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGlzUnRsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgaXNSdGw6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzUnRsOiB0aGlzLnByb3BzLmlzUnRsIHx8IHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuaXNSdGxcbiAgICB9O1xuICB9LFxuXG4gIGlzUnRsOiBmdW5jdGlvbiBpc1J0bCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5wcm9wcy5pc1J0bCB8fCB0aGlzLmNvbnRleHQgJiYgdGhpcy5jb250ZXh0LmlzUnRsKTtcbiAgfVxuXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi4vdXRpbC9fJyk7XG5cbnZhciBoYXMgPSBfcmVxdWlyZS5oYXM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgdGltZXJzID0gdGhpcy5fdGltZXJzIHx8IHt9O1xuXG4gICAgdGhpcy5fdW5tb3VudGVkID0gdHJ1ZTtcblxuICAgIGZvciAodmFyIGsgaW4gdGltZXJzKSBpZiAoaGFzKHRpbWVycywgaykpIGNsZWFyVGltZW91dCh0aW1lcnNba10pO1xuICB9LFxuXG4gIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIHNldFRpbWVvdXQoa2V5LCBjYiwgZHVyYXRpb24pIHtcbiAgICB2YXIgdGltZXJzID0gdGhpcy5fdGltZXJzIHx8ICh0aGlzLl90aW1lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHJldHVybjtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lcnNba2V5XSk7XG4gICAgdGltZXJzW2tleV0gPSB3aW5kb3cuc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xuICB9XG5cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdXRpbC9fJyk7IC8vdW5pcXVlSURcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG5cbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgICByZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3JlYWRPbmx5J10pXSlcbiAgfSxcblxuICBpc0Rpc2FibGVkOiBmdW5jdGlvbiBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRpc2FibGVkID09PSB0cnVlIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQgPT09ICdkaXNhYmxlZCc7XG4gIH0sXG5cbiAgaXNSZWFkT25seTogZnVuY3Rpb24gaXNSZWFkT25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLnByb3BzLnJlYWRPbmx5ID09PSAncmVhZG9ubHknO1xuICB9LFxuXG4gIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KGhhbmRsZXIsIGFyZ3MpIHtcbiAgICB0aGlzLnByb3BzW2hhbmRsZXJdICYmIHRoaXMucHJvcHNbaGFuZGxlcl0uYXBwbHkobnVsbCwgW10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICBfaWQ6IGZ1bmN0aW9uIF9pZCgpIHtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnJyA6IGFyZ3VtZW50c1swXTtcblxuICAgIHRoaXMuX2lkXyB8fCAodGhpcy5faWRfID0gXy51bmlxdWVJZCgncndfJykpO1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5pZCB8fCB0aGlzLl9pZF8pICsgc3VmZml4O1xuICB9LFxuXG4gIF9tYXliZUhhbmRsZTogZnVuY3Rpb24gX21heWJlSGFuZGxlKGhhbmRsZXIsIGRpc2FibGVkT25seSkge1xuICAgIGlmICghKHRoaXMuaXNEaXNhYmxlZCgpIHx8ICFkaXNhYmxlZE9ubHkgJiYgdGhpcy5pc1JlYWRPbmx5KCkpKSByZXR1cm4gaGFuZGxlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlkQ291bnQgPSAwO1xuXG52YXIgXyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGhhczogaGFzLFxuXG4gIHJlc3VsdDogZnVuY3Rpb24gcmVzdWx0KHZhbHVlKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkodW5kZWZpbmVkLCBhcmdzKSA6IHZhbHVlO1xuICB9LFxuXG4gIGlzU2hhbGxvd0VxdWFsOiBmdW5jdGlvbiBpc1NoYWxsb3dFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcblxuICAgIGlmICh0eXBlb2YgYSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT09ICdvYmplY3QnKSByZXR1cm4gYSA9PT0gYjtcblxuICAgIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBzaGFsbG93RXF1YWwoYSwgYik7XG4gIH0sXG5cbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqLCBjYiwgc2VlZCkge1xuICAgIF8uZWFjaChvYmosIGNiLmJpbmQobnVsbCwgc2VlZCA9IHNlZWQgfHwgKEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge30pKSk7XG4gICAgcmV0dXJuIHNlZWQ7XG4gIH0sXG5cbiAgZWFjaDogZnVuY3Rpb24gZWFjaChvYmosIGNiLCB0aGlzQXJnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5mb3JFYWNoKGNiLCB0aGlzQXJnKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChoYXMob2JqLCBrZXkpKSBjYi5jYWxsKHRoaXNBcmcsIG9ialtrZXldLCBrZXksIG9iaik7XG4gIH0sXG5cbiAgcGljazogZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgICBrZXlzID0gW10uY29uY2F0KGtleXMpO1xuICAgIHJldHVybiBfLnRyYW5zZm9ybShvYmosIGZ1bmN0aW9uIChtYXBwZWQsIHZhbCwga2V5KSB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgIT09IC0xKSBtYXBwZWRba2V5XSA9IHZhbDtcbiAgICB9LCB7fSk7XG4gIH0sXG5cbiAgb21pdDogZnVuY3Rpb24gb21pdChvYmosIGtleXMpIHtcbiAgICBrZXlzID0gW10uY29uY2F0KGtleXMpO1xuICAgIHJldHVybiBfLnRyYW5zZm9ybShvYmosIGZ1bmN0aW9uIChtYXBwZWQsIHZhbCwga2V5KSB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSBtYXBwZWRba2V5XSA9IHZhbDtcbiAgICB9LCB7fSk7XG4gIH0sXG5cbiAgZmluZDogZnVuY3Rpb24gZmluZChhcnIsIGNiLCB0aGlzQXJnKSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBhcnIuZXZlcnkoZnVuY3Rpb24gKHZhbCwgaWR4KSB7XG4gICAgICAgIGlmIChjYi5jYWxsKHRoaXNBcmcsIHZhbCwgaWR4LCBhcnIpKSByZXR1cm4gKHJlc3VsdCA9IHZhbCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgZm9yICh2YXIga2V5IGluIGFycikgaWYgKGhhcyhhcnIsIGtleSkpIGlmIChjYi5jYWxsKHRoaXNBcmcsIGFycltrZXldLCBrZXksIGFycikpIHJldHVybiBhcnJba2V5XTtcbiAgfSxcblxuICBjaHVuazogZnVuY3Rpb24gY2h1bmsoYXJyYXksIGNodW5rU2l6ZSkge1xuICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBjaHVua1NpemUgPSBNYXRoLm1heCgrY2h1bmtTaXplIHx8IDEsIDEpO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSByZXN1bHQucHVzaChhcnJheS5zbGljZShpbmRleCwgaW5kZXggKz0gY2h1bmtTaXplKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIHNwbGF0OiBmdW5jdGlvbiBzcGxhdChvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyBbXSA6IFtdLmNvbmNhdChvYmopO1xuICB9LFxuXG4gIG5vb3A6IGZ1bmN0aW9uIG5vb3AoKSB7fSxcblxuICB1bmlxdWVJZDogZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG4gICAgcmV0dXJuICcnICsgKChwcmVmaXggPT0gbnVsbCA/ICcnIDogcHJlZml4KSArICsraWRDb3VudCk7XG4gIH0sXG5cbiAgLy8tLSBSZWFsbHkgc3BlY2lmaWMgQ29tcG9uZW50IFV0aWxpdGllcyAtLVxuXG4gIGlzRmlyc3RGb2N1c2VkUmVuZGVyOiBmdW5jdGlvbiBpc0ZpcnN0Rm9jdXNlZFJlbmRlcihjb21wb25lbnQpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Ll9maXJzdEZvY3VzIHx8IGNvbXBvbmVudC5zdGF0ZS5mb2N1c2VkICYmIChjb21wb25lbnQuX2ZpcnN0Rm9jdXMgPSB0cnVlKTtcbiAgfSxcblxuICBpZk5vdERpc2FibGVkOiBmdW5jdGlvbiBpZk5vdERpc2FibGVkKGRpc2FibGVkT25seSwgZm4pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkgZm4gPSBkaXNhYmxlZE9ubHksIGRpc2FibGVkT25seSA9IGZhbHNlO1xuXG4gICAgLy9jb25zb2xlLmxvZygnY3JlYXRlIG1ldGhvZCcpXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgLy9jb25zb2xlLmxvZygnY2FsbGVkJywgZGlzYWJsZWRPbmx5KVxuICAgICAgaWYgKCEodGhpcy5pc0Rpc2FibGVkKCkgfHwgIWRpc2FibGVkT25seSAmJiB0aGlzLmlzUmVhZE9ubHkoKSkpIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBoYXMobywgaykge1xuICByZXR1cm4gbyA/IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBlcWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuLyoqXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcblxuICBpZiAob2JqQSA9PSBudWxsIHx8IG9iakIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpLFxuICAgICAga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSBpZiAoIWhhcyhvYmpCLCBrZXlzQVtpXSkgfHwgIWVxbChvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cyk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290LmJhYmVsSGVscGVycyA9IHt9KTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgYmFiZWxIZWxwZXJzID0gZ2xvYmFsO1xuXG4gIGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLl9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xufSkiLCIvKmVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FyZXQoZWwsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHJldHVybiBnZXQoZWwpO1xuXG4gIHNldChlbCwgc3RhcnQsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBnZXQoZWwpIHtcbiAgdmFyIHN0YXJ0LCBlbmQsIHJhbmdlRWwsIGNsb25lO1xuXG4gIGlmIChlbC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydDtcbiAgICBlbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICByYW5nZUVsID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICBjbG9uZSA9IHJhbmdlRWwuZHVwbGljYXRlKCk7XG5cbiAgICAgIHJhbmdlRWwubW92ZVRvQm9va21hcmsoZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuZ2V0Qm9va21hcmsoKSk7XG4gICAgICBjbG9uZS5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHJhbmdlRWwpO1xuXG4gICAgICBzdGFydCA9IGNsb25lLnRleHQubGVuZ3RoO1xuICAgICAgZW5kID0gc3RhcnQgKyByYW5nZUVsLnRleHQubGVuZ3RoO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH07XG59XG5cbmZ1bmN0aW9uIHNldChlbCwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmFuZ2VFbDtcblxuICB0cnkge1xuICAgIGlmIChlbC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICByYW5nZUVsID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZUVsLmNvbGxhcHNlKHRydWUpO1xuICAgICAgcmFuZ2VFbC5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHN0YXJ0KTtcbiAgICAgIHJhbmdlRWwubW92ZUVuZCgnY2hhcmFjdGVyJywgZW5kIC0gc3RhcnQpO1xuICAgICAgcmFuZ2VFbC5zZWxlY3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4vKiBub3QgZm9jdXNlZCBvciBub3QgdmlzaWJsZSAqLyAvKiBub3QgZm9jdXNlZCBvciBub3QgdmlzaWJsZSAqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgXyA9IHJlcXVpcmUoJy4vXycpO1xuXG52YXIgX3ZlcnNpb24gPSBSZWFjdC52ZXJzaW9uLnNwbGl0KCcuJykubWFwKHBhcnNlRmxvYXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICB2ZXJzaW9uOiBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgIHJldHVybiBfdmVyc2lvbjtcbiAgfSxcblxuICB0eXBlOiBmdW5jdGlvbiB0eXBlKGNvbXBvbmVudCkge1xuICAgIGlmIChfdmVyc2lvblswXSA9PT0gMCAmJiBfdmVyc2lvblsxXSA+PSAxMykgcmV0dXJuIGNvbXBvbmVudDtcblxuICAgIHJldHVybiBjb21wb25lbnQudHlwZTtcbiAgfSxcblxuICBmaW5kRE9NTm9kZTogZnVuY3Rpb24gZmluZERPTU5vZGUoY29tcG9uZW50KSB7XG4gICAgaWYgKFJlYWN0LmZpbmRET01Ob2RlKSByZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY29tcG9uZW50KTtcblxuICAgIHJldHVybiBjb21wb25lbnQuZ2V0RE9NTm9kZSgpO1xuICB9LFxuXG4gIGNsb25lRWxlbWVudDogZnVuY3Rpb24gY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcykge1xuICAgIGlmIChSZWFjdC5jbG9uZUVsZW1lbnQpIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcblxuICAgIC8vanVzdCBtdXRhdGUgaWYgcHJlIDAuMTNcbiAgICBfLmVhY2gocHJvcHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnByb3BzW3Byb3BdID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9nbG9iYWxpemUtbG9jYWxpemVycycpO1xuXG52YXIgZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyID0gX3JlcXVpcmUuZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyO1xudmFyIGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXIgPSBfcmVxdWlyZS5nbG9iYWxpemVEYXRlTG9jYWxpemVyO1xuXG52YXIgZ2xvYmFsaXplO1xuXG50cnkge1xuICBnbG9iYWxpemUgPSByZXF1aXJlKCdnbG9iYWxpemUnKTtcbn0gY2F0Y2ggKGVycikge1xuICBnbG9iYWxpemUgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZGVzYyA9IHsgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR2xvYmFsaXplLmpzIGlzIGF2YWlsYWJsZSBidXQgaXMgc3RpbGwgc2V0IGFzIHRoZSBsb2NhbGl6YXRpb24gc3RyYXRlZ3kuICcgKyAnUGxlYXNlIGluY2x1ZGUgR2xvYmFsaXplLmpzIG9yIHByb3ZpZGUgYW4gYWx0ZXJuYXRpdmUgbG9jYWxpemF0aW9uIHN0cmF0ZWd5LicpO1xuICAgICAgfSB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGdsb2JhbGl6ZSwgeyBmb3JtYXQ6IGRlc2MsIHBhcnNlRGF0ZTogZGVzYywgcGFyc2VGbG9hdDogZGVzYywgZmluZENsb3Nlc3RDdWx0dXJlOiBkZXNjLCBjdWx0dXJlOiBkZXNjIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGFuaW1hdGU6IHJlcXVpcmUoJy4vZG9tL2FuaW1hdGUnKSxcblxuICBsb2NhbGU6IHtcbiAgICBkYXRlOiBnbG9iYWxpemVEYXRlTG9jYWxpemVyKGdsb2JhbGl6ZSksXG4gICAgbnVtYmVyOiBnbG9iYWxpemVOdW1iZXJMb2NhbGl6ZXIoZ2xvYmFsaXplKVxuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jYWxlbmRhclZpZXdIaWVyYXJjaHksIF9jYWxlbmRhclZpZXdVbml0cztcblxudmFyIHZpZXdzID0ge1xuICBNT05USDogJ21vbnRoJyxcbiAgWUVBUjogJ3llYXInLFxuICBERUNBREU6ICdkZWNhZGUnLFxuICBDRU5UVVJZOiAnY2VudHVyeSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGRpcmVjdGlvbnM6IHtcbiAgICBMRUZUOiAnTEVGVCcsXG4gICAgUklHSFQ6ICdSSUdIVCcsXG4gICAgVVA6ICdVUCcsXG4gICAgRE9XTjogJ0RPV04nXG4gIH0sXG5cbiAgZGF0ZVBvcHVwczoge1xuICAgIFRJTUU6ICd0aW1lJyxcbiAgICBDQUxFTkRBUjogJ2NhbGVuZGFyJ1xuICB9LFxuXG4gIGNhbGVuZGFyVmlld3M6IHZpZXdzLFxuXG4gIGNhbGVuZGFyVmlld0hpZXJhcmNoeTogKF9jYWxlbmRhclZpZXdIaWVyYXJjaHkgPSB7fSwgX2NhbGVuZGFyVmlld0hpZXJhcmNoeVt2aWV3cy5NT05USF0gPSB2aWV3cy5ZRUFSLCBfY2FsZW5kYXJWaWV3SGllcmFyY2h5W3ZpZXdzLllFQVJdID0gdmlld3MuREVDQURFLCBfY2FsZW5kYXJWaWV3SGllcmFyY2h5W3ZpZXdzLkRFQ0FERV0gPSB2aWV3cy5DRU5UVVJZLCBfY2FsZW5kYXJWaWV3SGllcmFyY2h5KSxcblxuICBjYWxlbmRhclZpZXdVbml0czogKF9jYWxlbmRhclZpZXdVbml0cyA9IHt9LCBfY2FsZW5kYXJWaWV3VW5pdHNbdmlld3MuTU9OVEhdID0gJ2RheScsIF9jYWxlbmRhclZpZXdVbml0c1t2aWV3cy5ZRUFSXSA9IHZpZXdzLk1PTlRILCBfY2FsZW5kYXJWaWV3VW5pdHNbdmlld3MuREVDQURFXSA9IHZpZXdzLllFQVIsIF9jYWxlbmRhclZpZXdVbml0c1t2aWV3cy5DRU5UVVJZXSA9IHZpZXdzLkRFQ0FERSwgX2NhbGVuZGFyVmlld1VuaXRzKVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgZGF0ZU1hdGggPSByZXF1aXJlKCdkYXRlLWFyaXRobWV0aWMnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIGRpcmVjdGlvbnMgPSBfcmVxdWlyZS5kaXJlY3Rpb25zO1xudmFyIGNhbGVuZGFyVmlld1VuaXRzID0gX3JlcXVpcmUuY2FsZW5kYXJWaWV3VW5pdHM7XG52YXIgbG9jYWxlID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJykubG9jYWxlO1xuXG52YXIgZGF0ZXMgPSBtb2R1bGUuZXhwb3J0cyA9IGJhYmVsSGVscGVycy5fZXh0ZW5kcyhkYXRlTWF0aCwge1xuXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShkYXRlLCBmb3JtYXQsIGN1bHR1cmUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmRhdGUucGFyc2UoZGF0ZSwgZm9ybWF0LCBjdWx0dXJlKTtcbiAgfSxcblxuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBfZm9ybWF0LCBjdWx0dXJlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5kYXRlLmZvcm1hdChkYXRlLCBfZm9ybWF0LCBjdWx0dXJlKTtcbiAgfSxcblxuICBtb250aHNJblllYXI6IGZ1bmN0aW9uIG1vbnRoc0luWWVhcih5ZWFyKSB7XG4gICAgdmFyIG1vbnRocyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdLFxuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cbiAgICByZXR1cm4gbW9udGhzLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGRhdGVzLm1vbnRoKGRhdGUsIGkpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZpcnN0VmlzaWJsZURheTogZnVuY3Rpb24gZmlyc3RWaXNpYmxlRGF5KGRhdGUsIGN1bHR1cmUpIHtcbiAgICB2YXIgZmlyc3RPZk1vbnRoID0gZGF0ZXMuc3RhcnRPZihkYXRlLCAnbW9udGgnKTtcblxuICAgIHJldHVybiBkYXRlcy5zdGFydE9mKGZpcnN0T2ZNb250aCwgJ3dlZWsnLCBsb2NhbGUuZGF0ZS5zdGFydE9mV2VlayhjdWx0dXJlKSk7XG4gIH0sXG5cbiAgbGFzdFZpc2libGVEYXk6IGZ1bmN0aW9uIGxhc3RWaXNpYmxlRGF5KGRhdGUsIGN1bHR1cmUpIHtcbiAgICB2YXIgZW5kT2ZNb250aCA9IGRhdGVzLmVuZE9mKGRhdGUsICdtb250aCcpO1xuXG4gICAgcmV0dXJuIGRhdGVzLmVuZE9mKGVuZE9mTW9udGgsICd3ZWVrJywgbG9jYWxlLmRhdGUuc3RhcnRPZldlZWsoY3VsdHVyZSkpO1xuICB9LFxuXG4gIHZpc2libGVEYXlzOiBmdW5jdGlvbiB2aXNpYmxlRGF5cyhkYXRlLCBjdWx0dXJlKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBkYXRlcy5maXJzdFZpc2libGVEYXkoZGF0ZSwgY3VsdHVyZSksXG4gICAgICAgIGxhc3QgPSBkYXRlcy5sYXN0VmlzaWJsZURheShkYXRlLCBjdWx0dXJlKSxcbiAgICAgICAgZGF5cyA9IFtdO1xuXG4gICAgd2hpbGUgKGRhdGVzLmx0ZShjdXJyZW50LCBsYXN0LCAnZGF5JykpIHtcbiAgICAgIGRheXMucHVzaChjdXJyZW50KTtcbiAgICAgIGN1cnJlbnQgPSBkYXRlcy5hZGQoY3VycmVudCwgMSwgJ2RheScpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlzO1xuICB9LFxuXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoZGF0ZSwgbWluLCBtYXgsIHVuaXQsIGRpcmVjdGlvbikge1xuICAgIHZhciBpc01vbnRoID0gdW5pdCA9PT0gJ21vbnRoJyxcbiAgICAgICAgaXNVcE9yRG93biA9IGRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5VUCB8fCBkaXJlY3Rpb24gPT09IGRpcmVjdGlvbnMuRE9XTixcbiAgICAgICAgcmFuZ2VVbml0ID0gY2FsZW5kYXJWaWV3VW5pdHNbdW5pdF0sXG4gICAgICAgIGFkZFVuaXQgPSBpc01vbnRoICYmIGlzVXBPckRvd24gPyAnd2VlaycgOiBjYWxlbmRhclZpZXdVbml0c1t1bml0XSxcbiAgICAgICAgYW1vdW50ID0gaXNNb250aCB8fCAhaXNVcE9yRG93biA/IDEgOiA0LFxuICAgICAgICBuZXdEYXRlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5VUCB8fCBkaXJlY3Rpb24gPT09IGRpcmVjdGlvbnMuTEVGVCkgYW1vdW50ICo9IC0xO1xuXG4gICAgbmV3RGF0ZSA9IGRhdGVzLmFkZChkYXRlLCBhbW91bnQsIGFkZFVuaXQpO1xuXG4gICAgcmV0dXJuIGRhdGVzLmluUmFuZ2UobmV3RGF0ZSwgbWluLCBtYXgsIHJhbmdlVW5pdCkgPyBuZXdEYXRlIDogZGF0ZTtcbiAgfSxcblxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoZGF0ZSwgdGltZSkge1xuICAgIGlmICh0aW1lID09IG51bGwgJiYgZGF0ZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGlmICh0aW1lID09IG51bGwpIHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChkYXRlID09IG51bGwpIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgZGF0ZSA9IGRhdGVzLnN0YXJ0T2YoZGF0ZSwgJ2RheScpO1xuICAgIGRhdGUgPSBkYXRlcy5ob3VycyhkYXRlLCBkYXRlcy5ob3Vycyh0aW1lKSk7XG4gICAgZGF0ZSA9IGRhdGVzLm1pbnV0ZXMoZGF0ZSwgZGF0ZXMubWludXRlcyh0aW1lKSk7XG4gICAgZGF0ZSA9IGRhdGVzLnNlY29uZHMoZGF0ZSwgZGF0ZXMuc2Vjb25kcyh0aW1lKSk7XG4gICAgcmV0dXJuIGRhdGVzLm1pbGxpc2Vjb25kcyhkYXRlLCBkYXRlcy5taWxsaXNlY29uZHModGltZSkpO1xuICB9LFxuXG4gIHNhbWVNb250aDogZnVuY3Rpb24gc2FtZU1vbnRoKGRhdGVBLCBkYXRlQikge1xuICAgIHJldHVybiBkYXRlcy5lcShkYXRlQSwgZGF0ZUIsICdtb250aCcpO1xuICB9LFxuXG4gIHRvZGF5OiBmdW5jdGlvbiB0b2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKG5ldyBEYXRlKCksICdkYXknKTtcbiAgfSxcblxuICB5ZXN0ZXJkYXk6IGZ1bmN0aW9uIHllc3RlcmRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQodGhpcy5zdGFydE9mKG5ldyBEYXRlKCksICdkYXknKSwgLTEsICdkYXknKTtcbiAgfSxcblxuICB0b21vcnJvdzogZnVuY3Rpb24gdG9tb3Jyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKHRoaXMuc3RhcnRPZihuZXcgRGF0ZSgpLCAnZGF5JyksIDEsICdkYXknKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlJyksXG4gICAgY3NzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvc3R5bGUnKSxcbiAgICBvbiA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2V2ZW50cy9vbicpLFxuICAgIG9mZiA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2V2ZW50cy9vZmYnKSxcbiAgICB0cmFuc2l0aW9uUHJvcHMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgcmVzZXQgPSB7fSxcbiAgICBUUkFOU0xBVElPTl9NQVAgPSB7XG4gIGxlZnQ6ICd0cmFuc2xhdGVYJyxcbiAgcmlnaHQ6ICd0cmFuc2xhdGVYJyxcbiAgdG9wOiAndHJhbnNsYXRlWScsXG4gIGJvdHRvbTogJ3RyYW5zbGF0ZVknXG59O1xuXG5yZXNldFt0cmFuc2l0aW9uUHJvcHMucHJvcGVydHldID0gcmVzZXRbdHJhbnNpdGlvblByb3BzLmR1cmF0aW9uXSA9IHJlc2V0W3RyYW5zaXRpb25Qcm9wcy5kZWxheV0gPSByZXNldFt0cmFuc2l0aW9uUHJvcHMudGltaW5nXSA9ICcnO1xuXG5hbmltYXRlLmVuZEV2ZW50ID0gdHJhbnNpdGlvblByb3BzLmVuZDtcbmFuaW1hdGUudHJhbnNmb3JtID0gdHJhbnNpdGlvblByb3BzLnRyYW5zZm9ybTtcbmFuaW1hdGUuVFJBTlNMQVRJT05fTUFQID0gVFJBTlNMQVRJT05fTUFQO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGU7XG5cbi8vIHN1cGVyIGxlYW4gYW5pbWF0ZSBmdW5jdGlvbiBmb3IgdHJhbnNpdGlvbnNcbi8vIGRvZXNuJ3Qgc3VwcG9ydCBhbGwgdHJhbnNsYXRpb25zIHRvIGtlZXAgaXQgbWF0Y2hpbmcgdGhlIGpxdWVyeSBBUElcbi8qKlxyXG4gKiBjb2RlIGluIHBhcnQgZnJvbTogWmVwdG8gMS4xLjQgfCB6ZXB0b2pzLmNvbS9saWNlbnNlXHJcbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZShub2RlLCBwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjaykge1xuICB2YXIgY3NzUHJvcGVydGllcyA9IFtdLFxuICAgICAgZmFrZUV2ZW50ID0geyB0YXJnZXQ6IG5vZGUsIGN1cnJlbnRUYXJnZXQ6IG5vZGUgfSxcbiAgICAgIGNzc1ZhbHVlcyA9IHt9LFxuICAgICAgdHJhbnNmb3JtcyA9ICcnLFxuICAgICAgZmlyZWQ7XG5cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gZWFzaW5nLCBlYXNpbmcgPSBudWxsO1xuXG4gIGlmICghdHJhbnNpdGlvblByb3BzLmVuZCkgZHVyYXRpb24gPSAwO1xuICBpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkgZHVyYXRpb24gPSAyMDA7XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIGlmIChoYXMuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSB7XG4gICAgaWYgKC8odG9wfGJvdHRvbSkvLnRlc3Qoa2V5KSkgdHJhbnNmb3JtcyArPSBUUkFOU0xBVElPTl9NQVBba2V5XSArICcoJyArIHByb3BlcnRpZXNba2V5XSArICcpICc7ZWxzZSB7XG4gICAgICBjc3NWYWx1ZXNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgIGNzc1Byb3BlcnRpZXMucHVzaChoeXBoZW5hdGUoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BzLnRyYW5zZm9ybV0gPSB0cmFuc2Zvcm1zO1xuICAgIGNzc1Byb3BlcnRpZXMucHVzaCh0cmFuc2l0aW9uUHJvcHMudHJhbnNmb3JtKTtcbiAgfVxuXG4gIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BzLnByb3BlcnR5XSA9IGNzc1Byb3BlcnRpZXMuam9pbignLCAnKTtcbiAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BzLmR1cmF0aW9uXSA9IGR1cmF0aW9uIC8gMTAwMCArICdzJztcbiAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BzLmRlbGF5XSA9IDAgKyAncyc7XG4gICAgY3NzVmFsdWVzW3RyYW5zaXRpb25Qcm9wcy50aW1pbmddID0gZWFzaW5nIHx8ICdsaW5lYXInO1xuXG4gICAgb24obm9kZSwgdHJhbnNpdGlvblByb3BzLmVuZCwgZG9uZSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZmlyZWQpIGRvbmUoZmFrZUV2ZW50KTtcbiAgICB9LCBkdXJhdGlvbiArIDUwMCk7XG4gIH1cblxuICBub2RlLmNsaWVudExlZnQ7IC8vIHRyaWdnZXIgcGFnZSByZWZsb3dcbiAgY3NzKG5vZGUsIGNzc1ZhbHVlcyk7XG5cbiAgaWYgKGR1cmF0aW9uIDw9IDApIHNldFRpbWVvdXQoZG9uZS5iaW5kKG51bGwsIGZha2VFdmVudCksIDApO1xuXG4gIGZ1bmN0aW9uIGRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm47XG5cbiAgICBmaXJlZCA9IHRydWU7XG4gICAgb2ZmKGV2ZW50LnRhcmdldCwgdHJhbnNpdGlvblByb3BzLmVuZCwgZG9uZSk7XG4gICAgY3NzKG5vZGUsIHJlc2V0KTtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW9zOiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZCkvKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdC8pXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjb21tb24gPSB7XG4gIGVxOiBmdW5jdGlvbiBlcShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH0sXG4gIG5lcTogZnVuY3Rpb24gbmVxKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPT0gYjtcbiAgfSxcbiAgZ3Q6IGZ1bmN0aW9uIGd0KGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGI7XG4gIH0sXG4gIGd0ZTogZnVuY3Rpb24gZ3RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+PSBiO1xuICB9LFxuICBsdDogZnVuY3Rpb24gbHQoYSwgYikge1xuICAgIHJldHVybiBhIDwgYjtcbiAgfSxcbiAgbHRlOiBmdW5jdGlvbiBsdGUoYSwgYikge1xuICAgIHJldHVybiBhIDw9IGI7XG4gIH0sXG5cbiAgY29udGFpbnM6IGZ1bmN0aW9uIGNvbnRhaW5zKGEsIGIpIHtcbiAgICByZXR1cm4gYS5pbmRleE9mKGIpICE9PSAtMTtcbiAgfSxcblxuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKGEsIGIpIHtcbiAgICByZXR1cm4gYS5sYXN0SW5kZXhPZihiLCAwKSA9PT0gMDtcbiAgfSxcblxuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoYSwgYikge1xuICAgIHZhciBwb3MgPSBhLmxlbmd0aCAtIGIubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhLmluZGV4T2YoYiwgcG9zKTtcblxuICAgIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbW1vbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL18nKTtcblxudmFyIGhhcyA9IF9yZXF1aXJlLmhhcztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJFUVVJUkVEX05VTUJFUl9GT1JNQVRTID0gWydkZWZhdWx0J107XG5cbnZhciBsb2NhbGVQcm9wVHlwZSA9IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5zdHJpbmcsIFJlYWN0LlByb3BUeXBlcy5mdW5jXSk7XG5cbnZhciBSRVFVSVJFRF9EQVRFX0ZPUk1BVFMgPSBbJ2RlZmF1bHQnLCAnZGF0ZScsICd0aW1lJywgJ2hlYWRlcicsICdmb290ZXInLCAnZGF5T2ZNb250aCcsICdtb250aCcsICd5ZWFyJywgJ2RlY2FkZScsICdjZW50dXJ5J107XG5cbmZ1bmN0aW9uIF9mb3JtYXQobG9jYWxpemVyLCBmb3JtYXR0ZXIsIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpIHtcbiAgdmFyIHJlc3VsdCA9IHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicgPyBmb3JtYXQodmFsdWUsIGN1bHR1cmUsIGxvY2FsaXplcikgOiBmb3JtYXR0ZXIuY2FsbChsb2NhbGl6ZXIsIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpO1xuXG4gIGludmFyaWFudChyZXN1bHQgPT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJywgJ2Bsb2NhbGl6ZXIgZm9ybWF0KC4uKWAgbXVzdCByZXR1cm4gYSBzdHJpbmcsIG51bGwsIG9yIHVuZGVmaW5lZCcpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybWF0cyhyZXF1aXJlZEZvcm1hdHMsIGZvcm1hdHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHJlcXVpcmVkRm9ybWF0cy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGludmFyaWFudChoYXMoZm9ybWF0cywgZiksICdsb2NhbGl6ZXIgbWlzc2luZyByZXF1aXJlZCBmb3JtYXQ6IGAlc2AnLCBmKTtcbiAgfSk7XG59XG5cbnZhciBOdW1iZXJMb2NhbGl6ZXIgPSBmdW5jdGlvbiBOdW1iZXJMb2NhbGl6ZXIoX3JlZikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdDtcbiAgdmFyIHBhcnNlID0gX3JlZi5wYXJzZTtcbiAgdmFyIHByZWNpc2lvbiA9IF9yZWYucHJlY2lzaW9uO1xuICB2YXIgZm9ybWF0cyA9IF9yZWYuZm9ybWF0cztcbiAgdmFyIHByb3BUeXBlID0gX3JlZi5wcm9wVHlwZTtcbiAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckxvY2FsaXplcik7XG5cbiAgaW52YXJpYW50KHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicsICdudW1iZXIgbG9jYWxpemVyIGBmb3JtYXQoLi4pYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwYXJzZSA9PT0gJ2Z1bmN0aW9uJywgJ251bWJlciBsb2NhbGl6ZXIgYHBhcnNlKC4uKWAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgLy8gaW52YXJpYW50KHR5cGVvZiBwcmVjaXNpb24gPT09ICdmdW5jdGlvbidcbiAgLy8gICAsICdudW1iZXIgbG9jYWxpemVyIGBwcmVjaXNpb24oLi4pYCBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuXG4gIGNoZWNrRm9ybWF0cyhSRVFVSVJFRF9OVU1CRVJfRk9STUFUUywgZm9ybWF0cyk7XG5cbiAgdGhpcy5wcm9wVHlwZSA9IHByb3BUeXBlIHx8IGxvY2FsZVByb3BUeXBlO1xuICB0aGlzLmZvcm1hdHMgPSBmb3JtYXRzO1xuICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUsIHN0ciwgY3VsdHVyZSkge1xuICAgIHJldHVybiBfZm9ybWF0KF90aGlzLCBmb3JtYXQsIHZhbHVlLCBzdHIsIGN1bHR1cmUpO1xuICB9O1xuXG4gIHRoaXMucGFyc2UgPSBmdW5jdGlvbiAodmFsdWUsIGN1bHR1cmUpIHtcbiAgICB2YXIgcmVzdWx0ID0gcGFyc2UuY2FsbChfdGhpcywgdmFsdWUsIGN1bHR1cmUpO1xuXG4gICAgaW52YXJpYW50KHJlc3VsdCA9PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInLCAnbnVtYmVyIGxvY2FsaXplciBgcGFyc2UoLi4pYCBtdXN0IHJldHVybiBhIG51bWJlciwgbnVsbCwgb3IgdW5kZWZpbmVkJyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxudmFyIERhdGVMb2NhbGl6ZXIgPSBmdW5jdGlvbiBEYXRlTG9jYWxpemVyKHNwZWMpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVMb2NhbGl6ZXIpO1xuXG4gIGludmFyaWFudCh0eXBlb2Ygc3BlYy5mb3JtYXQgPT09ICdmdW5jdGlvbicsICdkYXRlIGxvY2FsaXplciBgZm9ybWF0KC4uKWAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIGludmFyaWFudCh0eXBlb2Ygc3BlYy5wYXJzZSA9PT0gJ2Z1bmN0aW9uJywgJ2RhdGUgbG9jYWxpemVyIGBwYXJzZSguLilgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNwZWMuZmlyc3RPZldlZWsgPT09ICdmdW5jdGlvbicsICdkYXRlIGxvY2FsaXplciBgZmlyc3RPZldlZWsoLi4pYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgY2hlY2tGb3JtYXRzKFJFUVVJUkVEX0RBVEVfRk9STUFUUywgc3BlYy5mb3JtYXRzKTtcblxuICB0aGlzLnByb3BUeXBlID0gc3BlYy5wcm9wVHlwZSB8fCBsb2NhbGVQcm9wVHlwZTtcbiAgdGhpcy5mb3JtYXRzID0gc3BlYy5mb3JtYXRzO1xuICB0aGlzLnN0YXJ0T2ZXZWVrID0gc3BlYy5maXJzdE9mV2VlaztcblxuICB0aGlzLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlKSB7XG4gICAgcmV0dXJuIF9mb3JtYXQoX3RoaXMyLCBzcGVjLmZvcm1hdCwgdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSk7XG4gIH07XG5cbiAgdGhpcy5wYXJzZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHNwZWMucGFyc2UuY2FsbChfdGhpczIsIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpO1xuXG4gICAgaW52YXJpYW50KHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdCBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHJlc3VsdC5nZXRUaW1lKCkpLCAnZGF0ZSBsb2NhbGl6ZXIgYHBhcnNlKC4uKWAgbXVzdCByZXR1cm4gYSB2YWxpZCBEYXRlLCBudWxsLCBvciB1bmRlZmluZWQnKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTnVtYmVyTG9jYWxpemVyOiBOdW1iZXJMb2NhbGl6ZXIsIERhdGVMb2NhbGl6ZXI6IERhdGVMb2NhbGl6ZXJcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBsb2NhbGl6ZXJzID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJykubG9jYWxlLFxuICAgIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcicpO1xuXG52YXIgZmlsdGVyVHlwZXMgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgcmV0dXJuIGkgIT09ICdmaWx0ZXInO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGVsZW1lbnRUeXBlOiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHByb3BzW3Byb3BOYW1lXSkpIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3BlY2lmaWVkIGluICBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICsgJyBFeHBlY3RlZCBhbiBFbGVtZW50IGB0eXBlYCwgbm90IGFuIGFjdHVhbCBFbGVtZW50Jyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnc3RyaW5nJykgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzcGVjaWZpZWQgaW4gIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgKyAnIEV4cGVjdGVkIGFuIEVsZW1lbnQgYHR5cGVgIHN1Y2ggYXMgYSB0YWcgbmFtZSBvciByZXR1cm4gdmFsdWUgb2YgUmVhY3QuY3JlYXRlQ2xhc3MoLi4uKScpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSksXG5cbiAgbnVtYmVyRm9ybWF0OiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9sb2NhbGl6ZXJzJG51bWJlcjtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAoX2xvY2FsaXplcnMkbnVtYmVyID0gbG9jYWxpemVycy5udW1iZXIpLnByb3BUeXBlLmFwcGx5KF9sb2NhbGl6ZXJzJG51bWJlciwgYXJncyk7XG4gIH0pLFxuXG4gIGRhdGVGb3JtYXQ6IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2xvY2FsaXplcnMkZGF0ZTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIChfbG9jYWxpemVycyRkYXRlID0gbG9jYWxpemVycy5kYXRlKS5wcm9wVHlwZS5hcHBseShfbG9jYWxpemVycyRkYXRlLCBhcmdzKTtcbiAgfSksXG5cbiAgYWNjZXNzb3I6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5zdHJpbmcsIFJlYWN0LlByb3BUeXBlcy5mdW5jXSksXG5cbiAgbWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmZ1bmMsIFJlYWN0LlByb3BUeXBlcy5zdHJpbmddKSxcblxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5mdW5jLCBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGZpbHRlclR5cGVzKV0pXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuXG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uKSB7XG4gICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgaW4gIGAnICsgY29tcG9uZW50TmFtZSArICdgLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbik7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59IiwiLy8gbXkgdGVzdHMgaW4gaWUxMS9jaHJvbWUvRkYgaW5kaWNhdGUgdGhhdCBrZXlEb3duIHJlcGVhdHNcbi8vIGF0IGFib3V0IDM1bXMrLy0gNW1zIGFmdGVyIGFuIGluaXRpYWwgNTAwbXMgZGVsYXkuIGNhbGxiYWNrIGZpcmVzIG9uIHRoZSBsZWFkaW5nIGVkZ2VcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBSZXBlYXRlcihjYWxsYmFjaykge1xuICB2YXIgaWQsXG4gICAgICBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9O1xuXG4gIGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGNhbmNlbCgpO1xuICAgIGlkID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIDM1KTtcbiAgICBjYWxsYmFjaygpO1xuICB9LCA1MDApO1xuXG4gIHJldHVybiBjYW5jZWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0ZXI7XG4vL2ZpcmUgYWZ0ZXIgZXZlcnl0aGluZyBpbiBjYXNlIHRoZSB1c2VyIGNhbmNlbHMgb24gdGhlIGZpcnN0IGNhbGwiLCIndXNlIHN0cmljdCc7XG52YXIgTUVUSE9EUyA9IFsnbmV4dCcsICdwcmV2JywgJ2ZpcnN0JywgJ2xhc3QnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB2YWxpZGF0ZUxpc3RDb21wb25lbnQobGlzdCkge1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHJldHVybiBhc3NlcnQodHlwZW9mIGxpc3RbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJywgJ0xpc3QgY29tcG9uZW50cyBtdXN0IGltcGxlbWVudCBhIGAnICsgbWV0aG9kICsgJygpYCBtZXRob2QnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnKSB7XG4gIHZhciBlcnJvcjtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIGVycm9yID0gbmV3IEVycm9yKG1zZyk7XG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsInZhciBNSUxJICAgID0gJ21pbGxpc2Vjb25kcydcclxuICAsIFNFQ09ORFMgPSAnc2Vjb25kcydcclxuICAsIE1JTlVURVMgPSAnbWludXRlcydcclxuICAsIEhPVVJTICAgPSAnaG91cnMnXHJcbiAgLCBEQVkgICAgID0gJ2RheSdcclxuICAsIFdFRUsgICAgPSAnd2VlaydcclxuICAsIE1PTlRIICAgPSAnbW9udGgnXHJcbiAgLCBZRUFSICAgID0gJ3llYXInXHJcbiAgLCBERUNBREUgID0gJ2RlY2FkZSdcclxuICAsIENFTlRVUlkgPSAnY2VudHVyeSc7XHJcblxyXG52YXIgZGF0ZXMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgYWRkOiBmdW5jdGlvbihkYXRlLCBudW0sIHVuaXQpIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG5cclxuICAgIHN3aXRjaCAodW5pdCl7XHJcbiAgICAgIGNhc2UgTUlMSTpcclxuICAgICAgY2FzZSBTRUNPTkRTOlxyXG4gICAgICBjYXNlIE1JTlVURVM6XHJcbiAgICAgIGNhc2UgSE9VUlM6XHJcbiAgICAgIGNhc2UgWUVBUjpcclxuICAgICAgICByZXR1cm4gZGF0ZXNbdW5pdF0oZGF0ZSwgZGF0ZXNbdW5pdF0oZGF0ZSkgKyBudW0pXHJcbiAgICAgIGNhc2UgREFZOlxyXG4gICAgICAgIHJldHVybiBkYXRlcy5kYXRlKGRhdGUsIGRhdGVzLmRhdGUoZGF0ZSkgKyBudW0pXHJcbiAgICAgIGNhc2UgV0VFSzpcclxuICAgICAgICByZXR1cm4gZGF0ZXMuZGF0ZShkYXRlLCBkYXRlcy5kYXRlKGRhdGUpICsgKDcgKiBudW0pKVxyXG4gICAgICBjYXNlIE1PTlRIOlxyXG4gICAgICAgIHJldHVybiBtb250aE1hdGgoZGF0ZSwgbnVtKVxyXG4gICAgICBjYXNlIERFQ0FERTpcclxuICAgICAgICByZXR1cm4gZGF0ZXMueWVhcihkYXRlLCBkYXRlcy55ZWFyKGRhdGUpICsgKG51bSAqIDEwKSlcclxuICAgICAgY2FzZSBDRU5UVVJZOlxyXG4gICAgICAgIHJldHVybiBkYXRlcy55ZWFyKGRhdGUsIGRhdGVzLnllYXIoZGF0ZSkgKyAobnVtICogMTAwKSlcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHVuaXRzOiBcIicgKyB1bml0ICsgJ1wiJylcclxuICB9LFxyXG5cclxuICBzdWJ0cmFjdDogZnVuY3Rpb24oZGF0ZSwgbnVtLCB1bml0KSB7XHJcbiAgICByZXR1cm4gZGF0ZXMuYWRkKGRhdGUsIC1udW0sIHVuaXQpXHJcbiAgfSxcclxuXHJcbiAgc3RhcnRPZjogZnVuY3Rpb24oZGF0ZSwgdW5pdCwgZmlyc3RPZldlZWspIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG5cclxuICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICBjYXNlICdjZW50dXJ5JzpcclxuICAgICAgY2FzZSAnZGVjYWRlJzpcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICBkYXRlID0gZGF0ZXMubW9udGgoZGF0ZSwgMCk7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgIGRhdGUgPSBkYXRlcy5kYXRlKGRhdGUsIDEpO1xyXG4gICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgIGRhdGUgPSBkYXRlcy5ob3VycyhkYXRlLCAwKTtcclxuICAgICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICAgICAgZGF0ZSA9IGRhdGVzLm1pbnV0ZXMoZGF0ZSwgMCk7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICAgICAgZGF0ZSA9IGRhdGVzLnNlY29uZHMoZGF0ZSwgMCk7XHJcbiAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgZGF0ZSA9IGRhdGVzLm1pbGxpc2Vjb25kcyhkYXRlLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodW5pdCA9PT0gREVDQURFKVxyXG4gICAgICBkYXRlID0gZGF0ZXMuc3VidHJhY3QoZGF0ZSwgZGF0ZXMueWVhcihkYXRlKSAlIDEwLCAneWVhcicpXHJcblxyXG4gICAgaWYgKHVuaXQgPT09IENFTlRVUlkpXHJcbiAgICAgIGRhdGUgPSBkYXRlcy5zdWJ0cmFjdChkYXRlLCBkYXRlcy55ZWFyKGRhdGUpICUgMTAwLCAneWVhcicpXHJcblxyXG4gICAgaWYgKHVuaXQgPT09IFdFRUspXHJcbiAgICAgIGRhdGUgPSBkYXRlcy53ZWVrZGF5KGRhdGUsIDAsIGZpcnN0T2ZXZWVrKTtcclxuXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0sXHJcblxyXG4gIGVuZE9mOiBmdW5jdGlvbihkYXRlLCB1bml0LCBmaXJzdE9mV2Vlayl7XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcclxuICAgIGRhdGUgPSBkYXRlcy5zdGFydE9mKGRhdGUsIHVuaXQsIGZpcnN0T2ZXZWVrKVxyXG4gICAgZGF0ZSA9IGRhdGVzLmFkZChkYXRlLCAxLCB1bml0KVxyXG4gICAgZGF0ZSA9IGRhdGVzLnN1YnRyYWN0KGRhdGUsIDEsIE1JTEkpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0sXHJcblxyXG4gIGVxOiAgY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhID09PSBiIH0pLFxyXG4gIG5lcTogY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhICE9PSBiIH0pLFxyXG4gIGd0OiAgY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhID4gYiB9KSxcclxuICBndGU6IGNyZWF0ZUNvbXBhcmVyKGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYSA+PSBiIH0pLFxyXG4gIGx0OiAgY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhIDwgYiB9KSxcclxuICBsdGU6IGNyZWF0ZUNvbXBhcmVyKGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYSA8PSBiIH0pLFxyXG5cclxuICBtaW46IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJndW1lbnRzKSlcclxuICB9LFxyXG5cclxuICBtYXg6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJndW1lbnRzKSlcclxuICB9LFxyXG5cclxuICBpblJhbmdlOiBmdW5jdGlvbihkYXksIG1pbiwgbWF4LCB1bml0KXtcclxuICAgIHVuaXQgPSB1bml0IHx8ICdkYXknXHJcblxyXG4gICAgcmV0dXJuICghbWluIHx8IGRhdGVzLmd0ZShkYXksIG1pbiwgdW5pdCkpXHJcbiAgICAgICAgJiYgKCFtYXggfHwgZGF0ZXMubHRlKGRheSwgbWF4LCB1bml0KSlcclxuICB9LFxyXG5cclxuICBtaWxsaXNlY29uZHM6ICAgY3JlYXRlQWNjZXNzb3IoJ01pbGxpc2Vjb25kcycpLFxyXG4gIHNlY29uZHM6ICAgICAgICBjcmVhdGVBY2Nlc3NvcignU2Vjb25kcycpLFxyXG4gIG1pbnV0ZXM6ICAgICAgICBjcmVhdGVBY2Nlc3NvcignTWludXRlcycpLFxyXG4gIGhvdXJzOiAgICAgICAgICBjcmVhdGVBY2Nlc3NvcignSG91cnMnKSxcclxuICBkYXk6ICAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ0RheScpLFxyXG4gIGRhdGU6ICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcignRGF0ZScpLFxyXG4gIG1vbnRoOiAgICAgICAgICBjcmVhdGVBY2Nlc3NvcignTW9udGgnKSxcclxuICB5ZWFyOiAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ0Z1bGxZZWFyJyksXHJcblxyXG4gIGRlY2FkZTogZnVuY3Rpb24gKGRhdGUsIHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gZGF0ZXMueWVhcihkYXRlcy5zdGFydE9mKGRhdGUsIERFQ0FERSkpXHJcbiAgICAgIDogZGF0ZXMuYWRkKGRhdGUsIHZhbCArIDEwLCBZRUFSKTtcclxuICB9LFxyXG5cclxuICBjZW50dXJ5OiBmdW5jdGlvbiAoZGF0ZSwgdmFsKSB7XHJcbiAgICByZXR1cm4gdmFsID09PSB1bmRlZmluZWRcclxuICAgICAgPyBkYXRlcy55ZWFyKGRhdGVzLnN0YXJ0T2YoZGF0ZSwgQ0VOVFVSWSkpXHJcbiAgICAgIDogZGF0ZXMuYWRkKGRhdGUsIHZhbCArIDEwMCwgWUVBUik7XHJcbiAgfSxcclxuXHJcbiAgd2Vla2RheTogZnVuY3Rpb24gKGRhdGUsIHZhbCwgZmlyc3REYXkpIHtcclxuICAgICAgdmFyIHdlZWtkYXkgPSAoZGF0ZXMuZGF5KGRhdGUpICsgNyAtIChmaXJzdERheSB8fCAwKSApICUgNztcclxuXHJcbiAgICAgIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gd2Vla2RheVxyXG4gICAgICAgIDogZGF0ZXMuYWRkKGRhdGUsIHZhbCAtIHdlZWtkYXksIERBWSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbW9udGhNYXRoKGRhdGUsIHZhbCl7XHJcbiAgdmFyIGN1cnJlbnQgPSBkYXRlcy5tb250aChkYXRlKVxyXG4gICAgLCBuZXdNb250aCAgPSAoY3VycmVudCArIHZhbCk7XHJcblxyXG4gICAgZGF0ZSA9IGRhdGVzLm1vbnRoKGRhdGUsIG5ld01vbnRoKVxyXG5cclxuICAgIGlmIChuZXdNb250aCA8IDAgKSBuZXdNb250aCA9IDEyICsgdmFsXHJcblxyXG4gICAgLy9tb250aCByb2xsb3ZlclxyXG4gICAgaWYgKCBkYXRlcy5tb250aChkYXRlKSAhPT0gKCBuZXdNb250aCAlIDEyKSlcclxuICAgICAgZGF0ZSA9IGRhdGVzLmRhdGUoZGF0ZSwgMCkgLy9tb3ZlIHRvIGxhc3Qgb2YgbW9udGhcclxuXHJcbiAgICByZXR1cm4gZGF0ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvcihtZXRob2Qpe1xyXG4gIHJldHVybiBmdW5jdGlvbihkYXRlLCB2YWwpe1xyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICByZXR1cm4gZGF0ZVsnZ2V0JyArIG1ldGhvZF0oKVxyXG5cclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG4gICAgZGF0ZVsnc2V0JyArIG1ldGhvZF0odmFsKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBhcmVyKG9wZXJhdG9yKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCB1bml0LCBtYXliZUZvVykge1xyXG4gICAgcmV0dXJuIG9wZXJhdG9yKCtkYXRlcy5zdGFydE9mKGEsIHVuaXQsIG1heWJlRm9XKSwgK2RhdGVzLnN0YXJ0T2YoYiwgdW5pdCwgbWF5YmVGb1cpKVxyXG4gIH07XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcbnZhciBvZmYgPSBmdW5jdGlvbiBvZmYoKSB7fTtcblxuaWYgKGNhblVzZURPTSkge1xuXG4gIG9mZiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9O2Vsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvZmY7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcbnZhciBvbiA9IGZ1bmN0aW9uIG9uKCkge307XG5cbmlmIChjYW5Vc2VET00pIHtcbiAgb24gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfTtlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb247IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcblxudmFyIGNvbnRhaW5zID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJvb3QgPSBjYW5Vc2VET00gJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHJldHVybiByb290ICYmIHJvb3QuY29udGFpbnMgPyBmdW5jdGlvbiAoY29udGV4dCwgbm9kZSkge1xuICAgIHJldHVybiBjb250ZXh0LmNvbnRhaW5zKG5vZGUpO1xuICB9IDogcm9vdCAmJiByb290LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID8gZnVuY3Rpb24gKGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gY29udGV4dCA9PT0gbm9kZSB8fCAhIShjb250ZXh0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUpICYgMTYpO1xuICB9IDogZnVuY3Rpb24gKGNvbnRleHQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSkgZG8ge1xuICAgICAgaWYgKG5vZGUgPT09IGNvbnRleHQpIHJldHVybiB0cnVlO1xuICAgIH0gd2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvZmZzZXQgPSByZXF1aXJlKCcuL29mZnNldCcpLFxuICAgIGdldFdpbmRvdyA9IHJlcXVpcmUoJy4vaXNXaW5kb3cnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoZWlnaHQobm9kZSwgY2xpZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHJldHVybiB3aW4gPyB3aW4uaW5uZXJIZWlnaHQgOiBjbGllbnQgPyBub2RlLmNsaWVudEhlaWdodCA6IG9mZnNldChub2RlKS5oZWlnaHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICByZXR1cm4gbm9kZSA9PT0gbm9kZS53aW5kb3cgPyBub2RlIDogbm9kZS5ub2RlVHlwZSA9PT0gOSA/IG5vZGUuZGVmYXVsdFZpZXcgfHwgbm9kZS5wYXJlbnRXaW5kb3cgOiBmYWxzZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbnRhaW5zID0gcmVxdWlyZSgnLi9jb250YWlucycpLFxuICAgIGdldFdpbmRvdyA9IHJlcXVpcmUoJy4vaXNXaW5kb3cnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBvZmZzZXQobm9kZSkge1xuICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50LFxuICAgICAgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAsIGhlaWdodDogMCwgd2lkdGg6IDAgfTtcblxuICBpZiAoIWRvYykgcmV0dXJuO1xuXG4gIGlmICghY29udGFpbnMoZG9jRWxlbSwgbm9kZSkpIHJldHVybiBib3g7XG5cbiAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB1bmRlZmluZWQpIGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiBib3gudG9wICsgKHdpbi5wYWdlWU9mZnNldCB8fCBkb2NFbGVtLnNjcm9sbFRvcCkgLSAoZG9jRWxlbS5jbGllbnRUb3AgfHwgMCksXG4gICAgbGVmdDogYm94LmxlZnQgKyAod2luLnBhZ2VYT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsTGVmdCkgLSAoZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDApLFxuICAgIHdpZHRoOiBib3gud2lkdGggfHwgbm9kZS5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGJveC5oZWlnaHQgfHwgbm9kZS5vZmZzZXRIZWlnaHRcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3NzID0gcmVxdWlyZSgnLi4vc3R5bGUnKSxcbiAgICBoZWlnaHQgPSByZXF1aXJlKCcuL2hlaWdodCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjcm9sbFByYXJlbnQobm9kZSkge1xuICB2YXIgcG9zaXRpb24gPSBjc3Mobm9kZSwgJ3Bvc2l0aW9uJyksXG4gICAgICBleGNsdWRlU3RhdGljID0gcG9zaXRpb24gPT09ICdhYnNvbHV0ZScsXG4gICAgICBvd25lckRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcblxuICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHJldHVybiBvd25lckRvYyB8fCBkb2N1bWVudDtcblxuICB3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcblxuICAgIHZhciBpc1N0YXRpYyA9IGV4Y2x1ZGVTdGF0aWMgJiYgY3NzKG5vZGUsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyxcbiAgICAgICAgc3R5bGUgPSBjc3Mobm9kZSwgJ292ZXJmbG93JykgKyBjc3Mobm9kZSwgJ292ZXJmbG93LXknKSArIGNzcyhub2RlLCAnb3ZlcmZsb3cteCcpO1xuXG4gICAgaWYgKGlzU3RhdGljKSBjb250aW51ZTtcblxuICAgIGlmICgvKGF1dG98c2Nyb2xsKS8udGVzdChzdHlsZSkgJiYgaGVpZ2h0KG5vZGUpIDwgbm9kZS5zY3JvbGxIZWlnaHQpIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0V2luZG93ID0gcmVxdWlyZSgnLi9pc1dpbmRvdycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjcm9sbFRvcChub2RlLCB2YWwpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcblxuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybiB3aW4gPyAncGFnZVlPZmZzZXQnIGluIHdpbiA/IHdpbi5wYWdlWU9mZnNldCA6IHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogbm9kZS5zY3JvbGxUb3A7XG5cbiAgaWYgKHdpbikgd2luLnNjcm9sbFRvKCdwYWdlWE9mZnNldCcgaW4gd2luID8gd2luLnBhZ2VYT2Zmc2V0IDogd2luLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCB2YWwpO2Vsc2Ugbm9kZS5zY3JvbGxUb3AgPSB2YWw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9mZnNldCA9IHJlcXVpcmUoJy4vb2Zmc2V0JyksXG4gICAgZ2V0V2luZG93ID0gcmVxdWlyZSgnLi9pc1dpbmRvdycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdpZHRoKG5vZGUsIGNsaWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICByZXR1cm4gd2luID8gd2luLmlubmVyV2lkdGggOiBjbGllbnQgPyBub2RlLmNsaWVudFdpZHRoIDogb2Zmc2V0KG5vZGUpLndpZHRoO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIEVsZW1lbnQgcGFzc2VkIHRvIGBnZXRDb21wdXRlZFN0eWxlKClgXCIpO1xuICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHJldHVybiBcImRlZmF1bHRWaWV3XCIgaW4gZG9jID8gZG9jLmRlZmF1bHRWaWV3Lm9wZW5lciA/IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB7IC8vaWUgOCBcIm1hZ2ljXCJcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHByb3ApIHtcbiAgICAgIHZhciByZSA9IC8oXFwtKFthLXpdKXsxfSkvZztcbiAgICAgIGlmIChwcm9wID09IFwiZmxvYXRcIikgcHJvcCA9IFwic3R5bGVGbG9hdFwiO1xuICAgICAgaWYgKHJlLnRlc3QocHJvcCkpIHByb3AgPSBwcm9wLnJlcGxhY2UocmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1syXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBub2RlLmN1cnJlbnRTdHlsZVtwcm9wXSB8fCBudWxsO1xuICAgIH1cbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuLi91dGlsL2NhbWVsaXplU3R5bGUnKSxcbiAgICBoeXBoZW5hdGUgPSByZXF1aXJlKCcuLi91dGlsL2h5cGhlbmF0ZVN0eWxlJyksXG4gICAgX2dldENvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCcuL2dldENvbXB1dGVkU3R5bGUnKSxcbiAgICByZW1vdmVTdHlsZSA9IHJlcXVpcmUoJy4vcmVtb3ZlU3R5bGUnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHZhciBjc3MgPSAnJyxcbiAgICAgIHByb3BzID0gcHJvcGVydHk7XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG5vZGUuc3R5bGVbY2FtZWxpemUocHJvcGVydHkpXSB8fCBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtlbHNlIChwcm9wcyA9IHt9KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykgaWYgKGhhcy5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgIXByb3BzW2tleV0gJiYgcHJvcHNba2V5XSAhPT0gMCA/IHJlbW92ZVN0eWxlKG5vZGUsIGh5cGhlbmF0ZShrZXkpKSA6IGNzcyArPSBoeXBoZW5hdGUoa2V5KSArICc6JyArIHByb3BzW2tleV0gKyAnOyc7XG4gIH1cblxuICBub2RlLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgY3NzO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGUobm9kZSwga2V5KSB7XG4gIHJldHVybiAncmVtb3ZlUHJvcGVydHknIGluIG5vZGUuc3R5bGUgPyBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSkgOiBub2RlLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNmb3JtJyxcbiAgICB0cmFuc2l0aW9uID0ge30sXG4gICAgdHJhbnNpdGlvblRpbWluZyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgdHJhbnNpdGlvblByb3BlcnR5LFxuICAgIHRyYW5zaXRpb25EZWxheTtcblxuaWYgKGNhblVzZURPTSkge1xuICB0cmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKTtcblxuICB0cmFuc2Zvcm0gPSB0cmFuc2l0aW9uLnByZWZpeCArIHRyYW5zZm9ybTtcblxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uLnByZWZpeCArICd0cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbi5wcmVmaXggKyAndHJhbnNpdGlvbi1kdXJhdGlvbic7XG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb24ucHJlZml4ICsgJ3RyYW5zaXRpb24tZGVsYXknO1xuICB0cmFuc2l0aW9uVGltaW5nID0gdHJhbnNpdGlvbi5wcmVmaXggKyAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbi5lbmQsXG4gIHByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIHRpbWluZzogdHJhbnNpdGlvblRpbWluZyxcbiAgZGVsYXk6IHRyYW5zaXRpb25EZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxufTtcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKSB7XG4gIHZhciBlbmRFdmVudCxcbiAgICAgIHByZWZpeCA9ICcnLFxuICAgICAgdHJhbnNpdGlvbnMgPSB7XG4gICAgTzogJ290cmFuc2l0aW9uZW5kJyxcbiAgICBNb3o6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBtczogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfTtcblxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIHZlbmRvciBpbiB0cmFuc2l0aW9ucykgaWYgKGhhcy5jYWxsKHRyYW5zaXRpb25zLCB2ZW5kb3IpKSB7XG4gICAgaWYgKGVsZW1lbnQuc3R5bGVbdmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eSddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpICsgJy0nO1xuICAgICAgZW5kRXZlbnQgPSB0cmFuc2l0aW9uc1t2ZW5kb3JdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFlbmRFdmVudCAmJiBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSBlbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcblxuICByZXR1cm4geyBlbmQ6IGVuZEV2ZW50LCBwcmVmaXg6IHByZWZpeCB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgckh5cGhlbiA9IC8tKC4pL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShySHlwaGVuLCBmdW5jdGlvbiAoXywgY2hyKSB7XG4gICAgcmV0dXJuIGNoci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn07IiwiLyoqXHJcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzJhZWI4YTJhNmJlYjAwNjE3YTQyMTdmN2Y4Mjg0OTI0ZmEyYWQ4MTkvc3JjL3ZlbmRvci9jb3JlL2NhbWVsaXplU3R5bGVOYW1lLmpzXHJcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG52YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYW1lbGl6ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbWVsaXplKHN0cmluZy5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgclVwcGVyID0gLyhbQS1aXSkvZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufTsiLCIvKipcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXHJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoXCIuL2h5cGhlbmF0ZVwiKTtcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sIFwiLW1zLVwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJy4vaW5ET00nKTtcblxudmFyIHZlbmRvcnMgPSBbJycsICd3ZWJraXQnLCAnbW96JywgJ28nLCAnbXMnXSxcbiAgICBjYW5jZWwgPSAnY2xlYXJUaW1lb3V0JyxcbiAgICByYWYgPSBmYWxsYmFjayxcbiAgICBjb21wYXRSYWY7XG5cbnZhciBnZXRLZXkgPSBmdW5jdGlvbiBnZXRLZXkodmVuZG9yLCBrKSB7XG4gIHJldHVybiB2ZW5kb3IgKyAoIXZlbmRvciA/IGsgOiBrWzBdLnRvVXBwZXJDYXNlKCkgKyBrLnN1YnN0cigxKSkgKyAnQW5pbWF0aW9uRnJhbWUnO1xufTtcblxuaWYgKGNhblVzZURPTSkge1xuICB2ZW5kb3JzLnNvbWUoZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIHZhciByYWZLZXkgPSBnZXRLZXkodmVuZG9yLCAncmVxdWVzdCcpO1xuXG4gICAgaWYgKHJhZktleSBpbiB3aW5kb3cpIHtcbiAgICAgIGNhbmNlbCA9IGdldEtleSh2ZW5kb3IsICdjYW5jZWwnKTtcbiAgICAgIHJldHVybiByYWYgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1tyYWZLZXldKGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL2NvbXBvbmVudC9yYWYgKi9cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSksXG4gICAgICByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG5cbiAgcHJldiA9IGN1cnI7XG4gIHJldHVybiByZXE7XG59XG5cbmNvbXBhdFJhZiA9IGZ1bmN0aW9uIChjYikge1xuICByZXR1cm4gcmFmKGNiKTtcbn07XG5jb21wYXRSYWYuY2FuY2VsID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiB3aW5kb3dbY2FuY2VsXShpZCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhdFJhZjsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0T2Zmc2V0ID0gcmVxdWlyZSgnLi4vcXVlcnkvb2Zmc2V0JyksXG4gICAgaGVpZ2h0ID0gcmVxdWlyZSgnLi4vcXVlcnkvaGVpZ2h0JyksXG4gICAgZ2V0U2Nyb2xsUGFyZW50ID0gcmVxdWlyZSgnLi4vcXVlcnkvc2Nyb2xsUGFyZW50JyksXG4gICAgc2Nyb2xsVG9wID0gcmVxdWlyZSgnLi4vcXVlcnkvc2Nyb2xsVG9wJyksXG4gICAgcmFmID0gcmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKSxcbiAgICBnZXRXaW5kb3cgPSByZXF1aXJlKCcuLi9xdWVyeS9pc1dpbmRvdycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjcm9sbFRvKHNlbGVjdGVkLCBzY3JvbGxQYXJlbnQpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHNlbGVjdGVkKSxcbiAgICAgICAgcG9mZiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAgIGxpc3QsXG4gICAgICAgIGxpc3RTY3JvbGxUb3AsXG4gICAgICAgIHNlbGVjdGVkVG9wLFxuICAgICAgICBpc1dpbixcbiAgICAgICAgc2VsZWN0ZWRIZWlnaHQsXG4gICAgICAgIGxpc3RIZWlnaHQsXG4gICAgICAgIGJvdHRvbTtcblxuICAgIGlmICghc2VsZWN0ZWQpIHJldHVybjtcblxuICAgIGxpc3QgPSBzY3JvbGxQYXJlbnQgfHwgZ2V0U2Nyb2xsUGFyZW50KHNlbGVjdGVkKTtcbiAgICBpc1dpbiA9IGdldFdpbmRvdyhsaXN0KTtcbiAgICBsaXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wKGxpc3QpO1xuXG4gICAgbGlzdEhlaWdodCA9IGhlaWdodChsaXN0LCB0cnVlKTtcbiAgICBpc1dpbiA9IGdldFdpbmRvdyhsaXN0KTtcblxuICAgIGlmICghaXNXaW4pIHBvZmYgPSBnZXRPZmZzZXQobGlzdCk7XG5cbiAgICBvZmZzZXQgPSB7XG4gICAgICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBvZmYudG9wLFxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBvZmYubGVmdCxcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogb2Zmc2V0LndpZHRoXG4gICAgfTtcblxuICAgIHNlbGVjdGVkSGVpZ2h0ID0gb2Zmc2V0LmhlaWdodDtcbiAgICBzZWxlY3RlZFRvcCA9IG9mZnNldC50b3AgKyAoaXNXaW4gPyAwIDogbGlzdFNjcm9sbFRvcCk7XG4gICAgYm90dG9tID0gc2VsZWN0ZWRUb3AgKyBzZWxlY3RlZEhlaWdodDtcblxuICAgIGxpc3RTY3JvbGxUb3AgPSBsaXN0U2Nyb2xsVG9wID4gc2VsZWN0ZWRUb3AgPyBzZWxlY3RlZFRvcCA6IGJvdHRvbSA+IGxpc3RTY3JvbGxUb3AgKyBsaXN0SGVpZ2h0ID8gYm90dG9tIC0gbGlzdEhlaWdodCA6IGxpc3RTY3JvbGxUb3A7XG5cbiAgICB2YXIgaWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsVG9wKGxpc3QsIGxpc3RTY3JvbGxUb3ApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJhZi5jYW5jZWwoaWQpO1xuICAgIH07XG59OyIsIi8qIVxuICogR2xvYmFsaXplXG4gKlxuICogaHR0cDovL2dpdGh1Yi5jb20vanF1ZXJ5L2dsb2JhbGl6ZVxuICpcbiAqIENvcHlyaWdodCBTb2Z0d2FyZSBGcmVlZG9tIENvbnNlcnZhbmN5LCBJbmMuXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgb3IgR1BMIFZlcnNpb24gMiBsaWNlbnNlcy5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgdW5kZWZpbmVkICkge1xuXG52YXIgR2xvYmFsaXplLFxuXHQvLyBwcml2YXRlIHZhcmlhYmxlc1xuXHRyZWdleEhleCxcblx0cmVnZXhJbmZpbml0eSxcblx0cmVnZXhQYXJzZUZsb2F0LFxuXHRyZWdleFRyaW0sXG5cdC8vIHByaXZhdGUgSmF2YVNjcmlwdCB1dGlsaXR5IGZ1bmN0aW9uc1xuXHRhcnJheUluZGV4T2YsXG5cdGVuZHNXaXRoLFxuXHRleHRlbmQsXG5cdGlzQXJyYXksXG5cdGlzRnVuY3Rpb24sXG5cdGlzT2JqZWN0LFxuXHRzdGFydHNXaXRoLFxuXHR0cmltLFxuXHR0cnVuY2F0ZSxcblx0emVyb1BhZCxcblx0Ly8gcHJpdmF0ZSBHbG9iYWxpemF0aW9uIHV0aWxpdHkgZnVuY3Rpb25zXG5cdGFwcGVuZFByZU9yUG9zdE1hdGNoLFxuXHRleHBhbmRGb3JtYXQsXG5cdGZvcm1hdERhdGUsXG5cdGZvcm1hdE51bWJlcixcblx0Z2V0VG9rZW5SZWdFeHAsXG5cdGdldEVyYSxcblx0Z2V0RXJhWWVhcixcblx0cGFyc2VFeGFjdCxcblx0cGFyc2VOZWdhdGl2ZVBhdHRlcm47XG5cbi8vIEdsb2JhbCB2YXJpYWJsZSAoR2xvYmFsaXplKSBvciBDb21tb25KUyBtb2R1bGUgKGdsb2JhbGl6ZSlcbkdsb2JhbGl6ZSA9IGZ1bmN0aW9uKCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiBuZXcgR2xvYmFsaXplLnByb3RvdHlwZS5pbml0KCBjdWx0dXJlU2VsZWN0b3IgKTtcbn07XG5cbmlmICggdHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0dHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0dHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0Ly8gQXNzdW1lIENvbW1vbkpTXG5cdG1vZHVsZS5leHBvcnRzID0gR2xvYmFsaXplO1xufSBlbHNlIHtcblx0Ly8gRXhwb3J0IGFzIGdsb2JhbCB2YXJpYWJsZVxuXHR3aW5kb3cuR2xvYmFsaXplID0gR2xvYmFsaXplO1xufVxuXG5HbG9iYWxpemUuY3VsdHVyZXMgPSB7fTtcblxuR2xvYmFsaXplLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IEdsb2JhbGl6ZSxcblx0aW5pdDogZnVuY3Rpb24oIGN1bHR1cmVTZWxlY3RvciApIHtcblx0XHR0aGlzLmN1bHR1cmVzID0gR2xvYmFsaXplLmN1bHR1cmVzO1xuXHRcdHRoaXMuY3VsdHVyZVNlbGVjdG9yID0gY3VsdHVyZVNlbGVjdG9yO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5HbG9iYWxpemUucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gR2xvYmFsaXplLnByb3RvdHlwZTtcblxuLy8gMS4gV2hlbiBkZWZpbmluZyBhIGN1bHR1cmUsIGFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkIGV4Y2VwdCB0aGUgb25lcyBzdGF0ZWQgYXMgb3B0aW9uYWwuXG4vLyAyLiBFYWNoIGN1bHR1cmUgc2hvdWxkIGhhdmUgYSBcIi5jYWxlbmRhcnNcIiBvYmplY3Qgd2l0aCBhdCBsZWFzdCBvbmUgY2FsZW5kYXIgbmFtZWQgXCJzdGFuZGFyZFwiXG4vLyAgICB3aGljaCBzZXJ2ZXMgYXMgdGhlIGRlZmF1bHQgY2FsZW5kYXIgaW4gdXNlIGJ5IHRoYXQgY3VsdHVyZS5cbi8vIDMuIEVhY2ggY3VsdHVyZSBzaG91bGQgaGF2ZSBhIFwiLmNhbGVuZGFyXCIgb2JqZWN0IHdoaWNoIGlzIHRoZSBjdXJyZW50IGNhbGVuZGFyIGJlaW5nIHVzZWQsXG4vLyAgICBpdCBtYXkgYmUgZHluYW1pY2FsbHkgY2hhbmdlZCBhdCBhbnkgdGltZSB0byBvbmUgb2YgdGhlIGNhbGVuZGFycyBpbiBcIi5jYWxlbmRhcnNcIi5cbkdsb2JhbGl6ZS5jdWx0dXJlc1sgXCJkZWZhdWx0XCIgXSA9IHtcblx0Ly8gQSB1bmlxdWUgbmFtZSBmb3IgdGhlIGN1bHR1cmUgaW4gdGhlIGZvcm0gPGxhbmd1YWdlIGNvZGU+LTxjb3VudHJ5L3JlZ2lvbiBjb2RlPlxuXHRuYW1lOiBcImVuXCIsXG5cdC8vIHRoZSBuYW1lIG9mIHRoZSBjdWx0dXJlIGluIHRoZSBlbmdsaXNoIGxhbmd1YWdlXG5cdGVuZ2xpc2hOYW1lOiBcIkVuZ2xpc2hcIixcblx0Ly8gdGhlIG5hbWUgb2YgdGhlIGN1bHR1cmUgaW4gaXRzIG93biBsYW5ndWFnZVxuXHRuYXRpdmVOYW1lOiBcIkVuZ2xpc2hcIixcblx0Ly8gd2hldGhlciB0aGUgY3VsdHVyZSB1c2VzIHJpZ2h0LXRvLWxlZnQgdGV4dFxuXHRpc1JUTDogZmFsc2UsXG5cdC8vIFwibGFuZ3VhZ2VcIiBpcyB1c2VkIGZvciBzby1jYWxsZWQgXCJzcGVjaWZpY1wiIGN1bHR1cmVzLlxuXHQvLyBGb3IgZXhhbXBsZSwgdGhlIGN1bHR1cmUgXCJlcy1DTFwiIG1lYW5zIFwiU3BhbmlzaCwgaW4gQ2hpbGlcIi5cblx0Ly8gSXQgcmVwcmVzZW50cyB0aGUgU3BhbmlzaC1zcGVha2luZyBjdWx0dXJlIGFzIGl0IGlzIGluIENoaWxpLFxuXHQvLyB3aGljaCBtaWdodCBoYXZlIGRpZmZlcmVudCBmb3JtYXR0aW5nIHJ1bGVzIG9yIGV2ZW4gdHJhbnNsYXRpb25zXG5cdC8vIHRoYW4gU3BhbmlzaCBpbiBTcGFpbi4gQSBcIm5ldXRyYWxcIiBjdWx0dXJlIGlzIG9uZSB0aGF0IGlzIG5vdFxuXHQvLyBzcGVjaWZpYyB0byBhIHJlZ2lvbi4gRm9yIGV4YW1wbGUsIHRoZSBjdWx0dXJlIFwiZXNcIiBpcyB0aGUgZ2VuZXJpY1xuXHQvLyBTcGFuaXNoIGN1bHR1cmUsIHdoaWNoIG1heSBiZSBhIG1vcmUgZ2VuZXJhbGl6ZWQgdmVyc2lvbiBvZiB0aGUgbGFuZ3VhZ2Vcblx0Ly8gdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSB3aGF0IGEgc3BlY2lmaWMgY3VsdHVyZSBleHBlY3RzLlxuXHQvLyBGb3IgYSBzcGVjaWZpYyBjdWx0dXJlIGxpa2UgXCJlcy1DTFwiLCB0aGUgXCJsYW5ndWFnZVwiIGZpZWxkIHJlZmVycyB0byB0aGVcblx0Ly8gbmV1dHJhbCwgZ2VuZXJpYyBjdWx0dXJlIGluZm9ybWF0aW9uIGZvciB0aGUgbGFuZ3VhZ2UgaXQgaXMgdXNpbmcuXG5cdC8vIFRoaXMgaXMgbm90IGFsd2F5cyBhIHNpbXBsZSBtYXR0ZXIgb2YgdGhlIHN0cmluZyBiZWZvcmUgdGhlIGRhc2guXG5cdC8vIEZvciBleGFtcGxlLCB0aGUgXCJ6aC1IYW5zXCIgY3VsdHVyZSBpcyBuZXR1cmFsIChTaW1wbGlmaWVkIENoaW5lc2UpLlxuXHQvLyBBbmQgdGhlIFwiemgtU0dcIiBjdWx0dXJlIGlzIFNpbXBsaWZpZWQgQ2hpbmVzZSBpbiBTaW5nYXBvcmUsIHdob3NlIGxhbnVnYWdlXG5cdC8vIGZpZWxkIGlzIFwiemgtQ0hTXCIsIG5vdCBcInpoXCIuXG5cdC8vIFRoaXMgZmllbGQgc2hvdWxkIGJlIHVzZWQgdG8gbmF2aWdhdGUgZnJvbSBhIHNwZWNpZmljIGN1bHR1cmUgdG8gaXQnc1xuXHQvLyBtb3JlIGdlbmVyYWwsIG5ldXRyYWwgY3VsdHVyZS4gSWYgYSBjdWx0dXJlIGlzIGFscmVhZHkgYXMgZ2VuZXJhbCBhcyBpdFxuXHQvLyBjYW4gZ2V0LCB0aGUgbGFuZ3VhZ2UgbWF5IHJlZmVyIHRvIGl0c2VsZi5cblx0bGFuZ3VhZ2U6IFwiZW5cIixcblx0Ly8gbnVtYmVyRm9ybWF0IGRlZmluZXMgZ2VuZXJhbCBudW1iZXIgZm9ybWF0dGluZyBydWxlcywgbGlrZSB0aGUgZGlnaXRzIGluXG5cdC8vIGVhY2ggZ3JvdXBpbmcsIHRoZSBncm91cCBzZXBhcmF0b3IsIGFuZCBob3cgbmVnYXRpdmUgbnVtYmVycyBhcmUgZGlzcGxheWVkLlxuXHRudW1iZXJGb3JtYXQ6IHtcblx0XHQvLyBbbmVnYXRpdmVQYXR0ZXJuXVxuXHRcdC8vIE5vdGUsIG51bWJlckZvcm1hdC5wYXR0ZXJuIGhhcyBubyBcInBvc2l0aXZlUGF0dGVyblwiIHVubGlrZSBwZXJjZW50IGFuZCBjdXJyZW5jeSxcblx0XHQvLyBidXQgaXMgc3RpbGwgZGVmaW5lZCBhcyBhbiBhcnJheSBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGVtLlxuXHRcdC8vICAgbmVnYXRpdmVQYXR0ZXJuOiBvbmUgb2YgXCIobil8LW58LSBufG4tfG4gLVwiXG5cdFx0cGF0dGVybjogWyBcIi1uXCIgXSxcblx0XHQvLyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgbm9ybWFsbHkgc2hvd25cblx0XHRkZWNpbWFsczogMixcblx0XHQvLyBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgbnVtYmVyIGdyb3VwcywgYXMgaW4gMSwwMDAsMDAwXG5cdFx0XCIsXCI6IFwiLFwiLFxuXHRcdC8vIHN0cmluZyB0aGF0IHNlcGFyYXRlcyBhIG51bWJlciBmcm9tIHRoZSBmcmFjdGlvbmFsIHBvcnRpb24sIGFzIGluIDEuOTlcblx0XHRcIi5cIjogXCIuXCIsXG5cdFx0Ly8gYXJyYXkgb2YgbnVtYmVycyBpbmRpY2F0aW5nIHRoZSBzaXplIG9mIGVhY2ggbnVtYmVyIGdyb3VwLlxuXHRcdC8vIFRPRE86IG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24gYW5kIGV4YW1wbGVcblx0XHRncm91cFNpemVzOiBbIDMgXSxcblx0XHQvLyBzeW1ib2wgdXNlZCBmb3IgcG9zaXRpdmUgbnVtYmVyc1xuXHRcdFwiK1wiOiBcIitcIixcblx0XHQvLyBzeW1ib2wgdXNlZCBmb3IgbmVnYXRpdmUgbnVtYmVyc1xuXHRcdFwiLVwiOiBcIi1cIixcblx0XHQvLyBzeW1ib2wgdXNlZCBmb3IgTmFOIChOb3QtQS1OdW1iZXIpXG5cdFx0XCJOYU5cIjogXCJOYU5cIixcblx0XHQvLyBzeW1ib2wgdXNlZCBmb3IgTmVnYXRpdmUgSW5maW5pdHlcblx0XHRuZWdhdGl2ZUluZmluaXR5OiBcIi1JbmZpbml0eVwiLFxuXHRcdC8vIHN5bWJvbCB1c2VkIGZvciBQb3NpdGl2ZSBJbmZpbml0eVxuXHRcdHBvc2l0aXZlSW5maW5pdHk6IFwiSW5maW5pdHlcIixcblx0XHRwZXJjZW50OiB7XG5cdFx0XHQvLyBbbmVnYXRpdmVQYXR0ZXJuLCBwb3NpdGl2ZVBhdHRlcm5dXG5cdFx0XHQvLyAgIG5lZ2F0aXZlUGF0dGVybjogb25lIG9mIFwiLW4gJXwtbiV8LSVufCUtbnwlbi18bi0lfG4lLXwtJSBufG4gJS18JSBuLXwlIC1ufG4tICVcIlxuXHRcdFx0Ly8gICBwb3NpdGl2ZVBhdHRlcm46IG9uZSBvZiBcIm4gJXxuJXwlbnwlIG5cIlxuXHRcdFx0cGF0dGVybjogWyBcIi1uICVcIiwgXCJuICVcIiBdLFxuXHRcdFx0Ly8gbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIG5vcm1hbGx5IHNob3duXG5cdFx0XHRkZWNpbWFsczogMixcblx0XHRcdC8vIGFycmF5IG9mIG51bWJlcnMgaW5kaWNhdGluZyB0aGUgc2l6ZSBvZiBlYWNoIG51bWJlciBncm91cC5cblx0XHRcdC8vIFRPRE86IG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24gYW5kIGV4YW1wbGVcblx0XHRcdGdyb3VwU2l6ZXM6IFsgMyBdLFxuXHRcdFx0Ly8gc3RyaW5nIHRoYXQgc2VwYXJhdGVzIG51bWJlciBncm91cHMsIGFzIGluIDEsMDAwLDAwMFxuXHRcdFx0XCIsXCI6IFwiLFwiLFxuXHRcdFx0Ly8gc3RyaW5nIHRoYXQgc2VwYXJhdGVzIGEgbnVtYmVyIGZyb20gdGhlIGZyYWN0aW9uYWwgcG9ydGlvbiwgYXMgaW4gMS45OVxuXHRcdFx0XCIuXCI6IFwiLlwiLFxuXHRcdFx0Ly8gc3ltYm9sIHVzZWQgdG8gcmVwcmVzZW50IGEgcGVyY2VudGFnZVxuXHRcdFx0c3ltYm9sOiBcIiVcIlxuXHRcdH0sXG5cdFx0Y3VycmVuY3k6IHtcblx0XHRcdC8vIFtuZWdhdGl2ZVBhdHRlcm4sIHBvc2l0aXZlUGF0dGVybl1cblx0XHRcdC8vICAgbmVnYXRpdmVQYXR0ZXJuOiBvbmUgb2YgXCIoJG4pfC0kbnwkLW58JG4tfChuJCl8LW4kfG4tJHxuJC18LW4gJHwtJCBufG4gJC18JCBuLXwkIC1ufG4tICR8KCQgbil8KG4gJClcIlxuXHRcdFx0Ly8gICBwb3NpdGl2ZVBhdHRlcm46IG9uZSBvZiBcIiRufG4kfCQgbnxuICRcIlxuXHRcdFx0cGF0dGVybjogWyBcIigkbilcIiwgXCIkblwiIF0sXG5cdFx0XHQvLyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgbm9ybWFsbHkgc2hvd25cblx0XHRcdGRlY2ltYWxzOiAyLFxuXHRcdFx0Ly8gYXJyYXkgb2YgbnVtYmVycyBpbmRpY2F0aW5nIHRoZSBzaXplIG9mIGVhY2ggbnVtYmVyIGdyb3VwLlxuXHRcdFx0Ly8gVE9ETzogbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBhbmQgZXhhbXBsZVxuXHRcdFx0Z3JvdXBTaXplczogWyAzIF0sXG5cdFx0XHQvLyBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgbnVtYmVyIGdyb3VwcywgYXMgaW4gMSwwMDAsMDAwXG5cdFx0XHRcIixcIjogXCIsXCIsXG5cdFx0XHQvLyBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgYSBudW1iZXIgZnJvbSB0aGUgZnJhY3Rpb25hbCBwb3J0aW9uLCBhcyBpbiAxLjk5XG5cdFx0XHRcIi5cIjogXCIuXCIsXG5cdFx0XHQvLyBzeW1ib2wgdXNlZCB0byByZXByZXNlbnQgY3VycmVuY3lcblx0XHRcdHN5bWJvbDogXCIkXCJcblx0XHR9XG5cdH0sXG5cdC8vIGNhbGVuZGFycyBkZWZpbmVzIGFsbCB0aGUgcG9zc2libGUgY2FsZW5kYXJzIHVzZWQgYnkgdGhpcyBjdWx0dXJlLlxuXHQvLyBUaGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGRlZmluZWQgd2l0aCBuYW1lIFwic3RhbmRhcmRcIiwgYW5kIGlzIHRoZSBkZWZhdWx0XG5cdC8vIGNhbGVuZGFyIHVzZWQgYnkgdGhlIGN1bHR1cmUuXG5cdC8vIEEgY2FsZW5kYXIgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgaG93IGRhdGVzIGFyZSBmb3JtYXR0ZWQsIGluZm9ybWF0aW9uIGFib3V0XG5cdC8vIHRoZSBjYWxlbmRhcidzIGVyYXMsIGEgc3RhbmRhcmQgc2V0IG9mIHRoZSBkYXRlIGZvcm1hdHMsXG5cdC8vIHRyYW5zbGF0aW9ucyBmb3IgZGF5IGFuZCBtb250aCBuYW1lcywgYW5kIGlmIHRoZSBjYWxlbmRhciBpcyBub3QgYmFzZWQgb24gdGhlIEdyZWdvcmlhblxuXHQvLyBjYWxlbmRhciwgY29udmVyc2lvbiBmdW5jdGlvbnMgdG8gYW5kIGZyb20gdGhlIEdyZWdvcmlhbiBjYWxlbmRhci5cblx0Y2FsZW5kYXJzOiB7XG5cdFx0c3RhbmRhcmQ6IHtcblx0XHRcdC8vIG5hbWUgdGhhdCBpZGVudGlmaWVzIHRoZSB0eXBlIG9mIGNhbGVuZGFyIHRoaXMgaXNcblx0XHRcdG5hbWU6IFwiR3JlZ29yaWFuX1VTRW5nbGlzaFwiLFxuXHRcdFx0Ly8gc2VwYXJhdG9yIG9mIHBhcnRzIG9mIGEgZGF0ZSAoZS5nLiBcIi9cIiBpbiAxMS8wNS8xOTU1KVxuXHRcdFx0XCIvXCI6IFwiL1wiLFxuXHRcdFx0Ly8gc2VwYXJhdG9yIG9mIHBhcnRzIG9mIGEgdGltZSAoZS5nLiBcIjpcIiBpbiAwNTo0NCBQTSlcblx0XHRcdFwiOlwiOiBcIjpcIixcblx0XHRcdC8vIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgPSBTdW5kYXksIDEgPSBNb25kYXksIGV0Yylcblx0XHRcdGZpcnN0RGF5OiAwLFxuXHRcdFx0ZGF5czoge1xuXHRcdFx0XHQvLyBmdWxsIGRheSBuYW1lc1xuXHRcdFx0XHRuYW1lczogWyBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIgXSxcblx0XHRcdFx0Ly8gYWJicmV2aWF0ZWQgZGF5IG5hbWVzXG5cdFx0XHRcdG5hbWVzQWJicjogWyBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiIF0sXG5cdFx0XHRcdC8vIHNob3J0ZXN0IGRheSBuYW1lc1xuXHRcdFx0XHRuYW1lc1Nob3J0OiBbIFwiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIiBdXG5cdFx0XHR9LFxuXHRcdFx0bW9udGhzOiB7XG5cdFx0XHRcdC8vIGZ1bGwgbW9udGggbmFtZXMgKDEzIG1vbnRocyBmb3IgbHVuYXIgY2FsZW5kYXJkcyAtLSAxM3RoIG1vbnRoIHNob3VsZCBiZSBcIlwiIGlmIG5vdCBsdW5hcilcblx0XHRcdFx0bmFtZXM6IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiLCBcIlwiIF0sXG5cdFx0XHRcdC8vIGFiYnJldmlhdGVkIG1vbnRoIG5hbWVzXG5cdFx0XHRcdG5hbWVzQWJicjogWyBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiLCBcIlwiIF1cblx0XHRcdH0sXG5cdFx0XHQvLyBBTSBhbmQgUE0gZGVzaWduYXRvcnMgaW4gb25lIG9mIHRoZXNlIGZvcm1zOlxuXHRcdFx0Ly8gVGhlIHVzdWFsIHZpZXcsIGFuZCB0aGUgdXBwZXIgYW5kIGxvd2VyIGNhc2UgdmVyc2lvbnNcblx0XHRcdC8vICAgWyBzdGFuZGFyZCwgbG93ZXJjYXNlLCB1cHBlcmNhc2UgXVxuXHRcdFx0Ly8gVGhlIGN1bHR1cmUgZG9lcyBub3QgdXNlIEFNIG9yIFBNIChsaWtlbHkgYWxsIHN0YW5kYXJkIGRhdGUgZm9ybWF0cyB1c2UgMjQgaG91ciB0aW1lKVxuXHRcdFx0Ly8gICBudWxsXG5cdFx0XHRBTTogWyBcIkFNXCIsIFwiYW1cIiwgXCJBTVwiIF0sXG5cdFx0XHRQTTogWyBcIlBNXCIsIFwicG1cIiwgXCJQTVwiIF0sXG5cdFx0XHRlcmFzOiBbXG5cdFx0XHRcdC8vIGVyYXMgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyLlxuXHRcdFx0XHQvLyBuYW1lOiB0aGUgbmFtZSBvZiB0aGUgZXJhIGluIHRoaXMgY3VsdHVyZSAoZS5nLiBBLkQuLCBDLkUuKVxuXHRcdFx0XHQvLyBzdGFydDogd2hlbiB0aGUgZXJhIHN0YXJ0cyBpbiB0aWNrcyAoZ3JlZ29yaWFuLCBnbXQpLCBudWxsIGlmIGl0IGlzIHRoZSBlYXJsaWVzdCBzdXBwb3J0ZWQgZXJhLlxuXHRcdFx0XHQvLyBvZmZzZXQ6IG9mZnNldCBpbiB5ZWFycyBmcm9tIGdyZWdvcmlhbiBjYWxlbmRhclxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiQS5ELlwiLFxuXHRcdFx0XHRcdFwic3RhcnRcIjogbnVsbCxcblx0XHRcdFx0XHRcIm9mZnNldFwiOiAwXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHQvLyB3aGVuIGEgdHdvIGRpZ2l0IHllYXIgaXMgZ2l2ZW4sIGl0IHdpbGwgbmV2ZXIgYmUgcGFyc2VkIGFzIGEgZm91ciBkaWdpdFxuXHRcdFx0Ly8geWVhciBncmVhdGVyIHRoYW4gdGhpcyB5ZWFyIChpbiB0aGUgYXBwcm9wcmlhdGUgZXJhIGZvciB0aGUgY3VsdHVyZSlcblx0XHRcdC8vIFNldCBpdCBhcyBhIGZ1bGwgeWVhciAoZS5nLiAyMDI5KSBvciB1c2UgYW4gb2Zmc2V0IGZvcm1hdCBzdGFydGluZyBmcm9tXG5cdFx0XHQvLyB0aGUgY3VycmVudCB5ZWFyOiBcIisxOVwiIHdvdWxkIGNvcnJlc3BvbmQgdG8gMjAyOSBpZiB0aGUgY3VycmVudCB5ZWFyIDIwMTAuXG5cdFx0XHR0d29EaWdpdFllYXJNYXg6IDIwMjksXG5cdFx0XHQvLyBzZXQgb2YgcHJlZGVmaW5lZCBkYXRlIGFuZCB0aW1lIHBhdHRlcm5zIHVzZWQgYnkgdGhlIGN1bHR1cmVcblx0XHRcdC8vIHRoZXNlIHJlcHJlc2VudCB0aGUgZm9ybWF0IHNvbWVvbmUgaW4gdGhpcyBjdWx0dXJlIHdvdWxkIGV4cGVjdFxuXHRcdFx0Ly8gdG8gc2VlIGdpdmVuIHRoZSBwb3J0aW9ucyBvZiB0aGUgZGF0ZSB0aGF0IGFyZSBzaG93bi5cblx0XHRcdHBhdHRlcm5zOiB7XG5cdFx0XHRcdC8vIHNob3J0IGRhdGUgcGF0dGVyblxuXHRcdFx0XHRkOiBcIk0vZC95eXl5XCIsXG5cdFx0XHRcdC8vIGxvbmcgZGF0ZSBwYXR0ZXJuXG5cdFx0XHRcdEQ6IFwiZGRkZCwgTU1NTSBkZCwgeXl5eVwiLFxuXHRcdFx0XHQvLyBzaG9ydCB0aW1lIHBhdHRlcm5cblx0XHRcdFx0dDogXCJoOm1tIHR0XCIsXG5cdFx0XHRcdC8vIGxvbmcgdGltZSBwYXR0ZXJuXG5cdFx0XHRcdFQ6IFwiaDptbTpzcyB0dFwiLFxuXHRcdFx0XHQvLyBsb25nIGRhdGUsIHNob3J0IHRpbWUgcGF0dGVyblxuXHRcdFx0XHRmOiBcImRkZGQsIE1NTU0gZGQsIHl5eXkgaDptbSB0dFwiLFxuXHRcdFx0XHQvLyBsb25nIGRhdGUsIGxvbmcgdGltZSBwYXR0ZXJuXG5cdFx0XHRcdEY6IFwiZGRkZCwgTU1NTSBkZCwgeXl5eSBoOm1tOnNzIHR0XCIsXG5cdFx0XHRcdC8vIG1vbnRoL2RheSBwYXR0ZXJuXG5cdFx0XHRcdE06IFwiTU1NTSBkZFwiLFxuXHRcdFx0XHQvLyBtb250aC95ZWFyIHBhdHRlcm5cblx0XHRcdFx0WTogXCJ5eXl5IE1NTU1cIixcblx0XHRcdFx0Ly8gUyBpcyBhIHNvcnRhYmxlIGZvcm1hdCB0aGF0IGRvZXMgbm90IHZhcnkgYnkgY3VsdHVyZVxuXHRcdFx0XHRTOiBcInl5eXlcXHUwMDI3LVxcdTAwMjdNTVxcdTAwMjctXFx1MDAyN2RkXFx1MDAyN1RcXHUwMDI3SEhcXHUwMDI3OlxcdTAwMjdtbVxcdTAwMjc6XFx1MDAyN3NzXCJcblx0XHRcdH1cblx0XHRcdC8vIG9wdGlvbmFsIGZpZWxkcyBmb3IgZWFjaCBjYWxlbmRhcjpcblx0XHRcdC8qXG5cdFx0XHRtb250aHNHZW5pdGl2ZTpcblx0XHRcdFx0U2FtZSBhcyBtb250aHMgYnV0IHVzZWQgd2hlbiB0aGUgZGF5IHByZWNlZWRzIHRoZSBtb250aC5cblx0XHRcdFx0T21pdCBpZiB0aGUgY3VsdHVyZSBoYXMgbm8gZ2VuaXRpdmUgZGlzdGluY3Rpb24gaW4gbW9udGggbmFtZXMuXG5cdFx0XHRcdEZvciBhbiBleHBsYWluYXRpb24gb2YgZ2VuaXRpdmUgbW9udGhzLCBzZWUgaHR0cDovL2Jsb2dzLm1zZG4uY29tL21pY2hrYXAvYXJjaGl2ZS8yMDA0LzEyLzI1LzMzMjI1OS5hc3B4XG5cdFx0XHRjb252ZXJ0OlxuXHRcdFx0XHRBbGxvd3MgZm9yIHRoZSBzdXBwb3J0IG9mIG5vbi1ncmVnb3JpYW4gYmFzZWQgY2FsZW5kYXJzLiBUaGlzIGNvbnZlcnQgb2JqZWN0IGlzIHVzZWQgdG9cblx0XHRcdFx0dG8gY29udmVydCBhIGRhdGUgdG8gYW5kIGZyb20gYSBncmVnb3JpYW4gY2FsZW5kYXIgZGF0ZSB0byBoYW5kbGUgcGFyc2luZyBhbmQgZm9ybWF0dGluZy5cblx0XHRcdFx0VGhlIHR3byBmdW5jdGlvbnM6XG5cdFx0XHRcdFx0ZnJvbUdyZWdvcmlhbiggZGF0ZSApXG5cdFx0XHRcdFx0XHRHaXZlbiB0aGUgZGF0ZSBhcyBhIHBhcmFtZXRlciwgcmV0dXJuIGFuIGFycmF5IHdpdGggcGFydHMgWyB5ZWFyLCBtb250aCwgZGF5IF1cblx0XHRcdFx0XHRcdGNvcnJlc3BvbmRpbmcgdG8gdGhlIG5vbi1ncmVnb3JpYW4gYmFzZWQgeWVhciwgbW9udGgsIGFuZCBkYXkgZm9yIHRoZSBjYWxlbmRhci5cblx0XHRcdFx0XHR0b0dyZWdvcmlhbiggeWVhciwgbW9udGgsIGRheSApXG5cdFx0XHRcdFx0XHRHaXZlbiB0aGUgbm9uLWdyZWdvcmlhbiB5ZWFyLCBtb250aCwgYW5kIGRheSwgcmV0dXJuIGEgbmV3IERhdGUoKSBvYmplY3Rcblx0XHRcdFx0XHRcdHNldCB0byB0aGUgY29ycmVzcG9uZGluZyBkYXRlIGluIHRoZSBncmVnb3JpYW4gY2FsZW5kYXIuXG5cdFx0XHQqL1xuXHRcdH1cblx0fSxcblx0Ly8gRm9yIGxvY2FsaXplZCBzdHJpbmdzXG5cdG1lc3NhZ2VzOiB7fVxufTtcblxuR2xvYmFsaXplLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdLmNhbGVuZGFyID0gR2xvYmFsaXplLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdLmNhbGVuZGFycy5zdGFuZGFyZDtcblxuR2xvYmFsaXplLmN1bHR1cmVzLmVuID0gR2xvYmFsaXplLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdO1xuXG5HbG9iYWxpemUuY3VsdHVyZVNlbGVjdG9yID0gXCJlblwiO1xuXG4vL1xuLy8gcHJpdmF0ZSB2YXJpYWJsZXNcbi8vXG5cbnJlZ2V4SGV4ID0gL14weFthLWYwLTldKyQvaTtcbnJlZ2V4SW5maW5pdHkgPSAvXlsrXFwtXT9pbmZpbml0eSQvaTtcbnJlZ2V4UGFyc2VGbG9hdCA9IC9eWytcXC1dP1xcZCpcXC4/XFxkKihlWytcXC1dP1xcZCspPyQvO1xucmVnZXhUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8vXG4vLyBwcml2YXRlIEphdmFTY3JpcHQgdXRpbGl0eSBmdW5jdGlvbnNcbi8vXG5cbmFycmF5SW5kZXhPZiA9IGZ1bmN0aW9uKCBhcnJheSwgaXRlbSApIHtcblx0aWYgKCBhcnJheS5pbmRleE9mICkge1xuXHRcdHJldHVybiBhcnJheS5pbmRleE9mKCBpdGVtICk7XG5cdH1cblx0Zm9yICggdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRpZiAoIGFycmF5W2ldID09PSBpdGVtICkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn07XG5cbmVuZHNXaXRoID0gZnVuY3Rpb24oIHZhbHVlLCBwYXR0ZXJuICkge1xuXHRyZXR1cm4gdmFsdWUuc3Vic3RyKCB2YWx1ZS5sZW5ndGggLSBwYXR0ZXJuLmxlbmd0aCApID09PSBwYXR0ZXJuO1xufTtcblxuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXG5cdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIWlzRnVuY3Rpb24odGFyZ2V0KSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAoIChvcHRpb25zID0gYXJndW1lbnRzWyBpIF0pICE9IG51bGwgKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFsgbmFtZSBdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1sgbmFtZSBdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBpc09iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSApICkge1xuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNPYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0gZXh0ZW5kKCBkZWVwLCBjbG9uZSwgY29weSApO1xuXG5cdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0fSBlbHNlIGlmICggY29weSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0gY29weTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiggb2JqICkge1xuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBvYmogKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xufTtcblxuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iaiApID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59O1xuXG5pc09iamVjdCA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iaiApID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufTtcblxuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKCB2YWx1ZSwgcGF0dGVybiApIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2YoIHBhdHRlcm4gKSA9PT0gMDtcbn07XG5cbnRyaW0gPSBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdHJldHVybiAoIHZhbHVlICsgXCJcIiApLnJlcGxhY2UoIHJlZ2V4VHJpbSwgXCJcIiApO1xufTtcblxudHJ1bmNhdGUgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdGlmICggaXNOYU4oIHZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIE5hTjtcblx0fVxuXHRyZXR1cm4gTWF0aFsgdmFsdWUgPCAwID8gXCJjZWlsXCIgOiBcImZsb29yXCIgXSggdmFsdWUgKTtcbn07XG5cbnplcm9QYWQgPSBmdW5jdGlvbiggc3RyLCBjb3VudCwgbGVmdCApIHtcblx0dmFyIGw7XG5cdGZvciAoIGwgPSBzdHIubGVuZ3RoOyBsIDwgY291bnQ7IGwgKz0gMSApIHtcblx0XHRzdHIgPSAoIGxlZnQgPyAoXCIwXCIgKyBzdHIpIDogKHN0ciArIFwiMFwiKSApO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG4vL1xuLy8gcHJpdmF0ZSBHbG9iYWxpemF0aW9uIHV0aWxpdHkgZnVuY3Rpb25zXG4vL1xuXG5hcHBlbmRQcmVPclBvc3RNYXRjaCA9IGZ1bmN0aW9uKCBwcmVNYXRjaCwgc3RyaW5ncyApIHtcblx0Ly8gYXBwZW5kcyBwcmUtIGFuZCBwb3N0LSB0b2tlbiBtYXRjaCBzdHJpbmdzIHdoaWxlIHJlbW92aW5nIGVzY2FwZWQgY2hhcmFjdGVycy5cblx0Ly8gUmV0dXJucyBhIHNpbmdsZSBxdW90ZSBjb3VudCB3aGljaCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgdG9rZW4gb2NjdXJzXG5cdC8vIGluIGEgc3RyaW5nIGxpdGVyYWwuXG5cdHZhciBxdW90ZUNvdW50ID0gMCxcblx0XHRlc2NhcGVkID0gZmFsc2U7XG5cdGZvciAoIHZhciBpID0gMCwgaWwgPSBwcmVNYXRjaC5sZW5ndGg7IGkgPCBpbDsgaSsrICkge1xuXHRcdHZhciBjID0gcHJlTWF0Y2guY2hhckF0KCBpICk7XG5cdFx0c3dpdGNoICggYyApIHtcblx0XHRcdGNhc2UgXCJcXCdcIjpcblx0XHRcdFx0aWYgKCBlc2NhcGVkICkge1xuXHRcdFx0XHRcdHN0cmluZ3MucHVzaCggXCJcXCdcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHF1b3RlQ291bnQrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRlc2NhcGVkID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIlxcXFxcIjpcblx0XHRcdFx0aWYgKCBlc2NhcGVkICkge1xuXHRcdFx0XHRcdHN0cmluZ3MucHVzaCggXCJcXFxcXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlc2NhcGVkID0gIWVzY2FwZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0c3RyaW5ncy5wdXNoKCBjICk7XG5cdFx0XHRcdGVzY2FwZWQgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBxdW90ZUNvdW50O1xufTtcblxuZXhwYW5kRm9ybWF0ID0gZnVuY3Rpb24oIGNhbCwgZm9ybWF0ICkge1xuXHQvLyBleHBhbmRzIHVuc3BlY2lmaWVkIG9yIHNpbmdsZSBjaGFyYWN0ZXIgZGF0ZSBmb3JtYXRzIGludG8gdGhlIGZ1bGwgcGF0dGVybi5cblx0Zm9ybWF0ID0gZm9ybWF0IHx8IFwiRlwiO1xuXHR2YXIgcGF0dGVybixcblx0XHRwYXR0ZXJucyA9IGNhbC5wYXR0ZXJucyxcblx0XHRsZW4gPSBmb3JtYXQubGVuZ3RoO1xuXHRpZiAoIGxlbiA9PT0gMSApIHtcblx0XHRwYXR0ZXJuID0gcGF0dGVybnNbIGZvcm1hdCBdO1xuXHRcdGlmICggIXBhdHRlcm4gKSB7XG5cdFx0XHR0aHJvdyBcIkludmFsaWQgZGF0ZSBmb3JtYXQgc3RyaW5nIFxcJ1wiICsgZm9ybWF0ICsgXCJcXCcuXCI7XG5cdFx0fVxuXHRcdGZvcm1hdCA9IHBhdHRlcm47XG5cdH1cblx0ZWxzZSBpZiAoIGxlbiA9PT0gMiAmJiBmb3JtYXQuY2hhckF0KDApID09PSBcIiVcIiApIHtcblx0XHQvLyAlWCBlc2NhcGUgZm9ybWF0IC0tIGludGVuZGVkIGFzIGEgY3VzdG9tIGZvcm1hdCBzdHJpbmcgdGhhdCBpcyBvbmx5IG9uZSBjaGFyYWN0ZXIsIG5vdCBhIGJ1aWx0LWluIGZvcm1hdC5cblx0XHRmb3JtYXQgPSBmb3JtYXQuY2hhckF0KCAxICk7XG5cdH1cblx0cmV0dXJuIGZvcm1hdDtcbn07XG5cbmZvcm1hdERhdGUgPSBmdW5jdGlvbiggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSApIHtcblx0dmFyIGNhbCA9IGN1bHR1cmUuY2FsZW5kYXIsXG5cdFx0Y29udmVydCA9IGNhbC5jb252ZXJ0LFxuXHRcdHJldDtcblxuXHRpZiAoICFmb3JtYXQgfHwgIWZvcm1hdC5sZW5ndGggfHwgZm9ybWF0ID09PSBcImlcIiApIHtcblx0XHRpZiAoIGN1bHR1cmUgJiYgY3VsdHVyZS5uYW1lLmxlbmd0aCApIHtcblx0XHRcdGlmICggY29udmVydCApIHtcblx0XHRcdFx0Ly8gbm9uLWdyZWdvcmlhbiBjYWxlbmRhciwgc28gd2UgY2Fubm90IHVzZSBidWlsdC1pbiB0b0xvY2FsZVN0cmluZygpXG5cdFx0XHRcdHJldCA9IGZvcm1hdERhdGUoIHZhbHVlLCBjYWwucGF0dGVybnMuRiwgY3VsdHVyZSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZhciBlcmFEYXRlID0gbmV3IERhdGUoIHZhbHVlLmdldFRpbWUoKSApLFxuXHRcdFx0XHRcdGVyYSA9IGdldEVyYSggdmFsdWUsIGNhbC5lcmFzICk7XG5cdFx0XHRcdGVyYURhdGUuc2V0RnVsbFllYXIoIGdldEVyYVllYXIodmFsdWUsIGNhbCwgZXJhKSApO1xuXHRcdFx0XHRyZXQgPSBlcmFEYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0ID0gdmFsdWUudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHZhciBlcmFzID0gY2FsLmVyYXMsXG5cdFx0c29ydGFibGUgPSBmb3JtYXQgPT09IFwic1wiO1xuXHRmb3JtYXQgPSBleHBhbmRGb3JtYXQoIGNhbCwgZm9ybWF0ICk7XG5cblx0Ly8gU3RhcnQgd2l0aCBhbiBlbXB0eSBzdHJpbmdcblx0cmV0ID0gW107XG5cdHZhciBob3VyLFxuXHRcdHplcm9zID0gWyBcIjBcIiwgXCIwMFwiLCBcIjAwMFwiIF0sXG5cdFx0Zm91bmREYXksXG5cdFx0Y2hlY2tlZERheSxcblx0XHRkYXlQYXJ0UmVnRXhwID0gLyhbXmRdfF4pKGR8ZGQpKFteZF18JCkvZyxcblx0XHRxdW90ZUNvdW50ID0gMCxcblx0XHR0b2tlblJlZ0V4cCA9IGdldFRva2VuUmVnRXhwKCksXG5cdFx0Y29udmVydGVkO1xuXG5cdGZ1bmN0aW9uIHBhZFplcm9zKCBudW0sIGMgKSB7XG5cdFx0dmFyIHIsIHMgPSBudW0gKyBcIlwiO1xuXHRcdGlmICggYyA+IDEgJiYgcy5sZW5ndGggPCBjICkge1xuXHRcdFx0ciA9ICggemVyb3NbYyAtIDJdICsgcyk7XG5cdFx0XHRyZXR1cm4gci5zdWJzdHIoIHIubGVuZ3RoIC0gYywgYyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHIgPSBzO1xuXHRcdH1cblx0XHRyZXR1cm4gcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhc0RheSgpIHtcblx0XHRpZiAoIGZvdW5kRGF5IHx8IGNoZWNrZWREYXkgKSB7XG5cdFx0XHRyZXR1cm4gZm91bmREYXk7XG5cdFx0fVxuXHRcdGZvdW5kRGF5ID0gZGF5UGFydFJlZ0V4cC50ZXN0KCBmb3JtYXQgKTtcblx0XHRjaGVja2VkRGF5ID0gdHJ1ZTtcblx0XHRyZXR1cm4gZm91bmREYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRQYXJ0KCBkYXRlLCBwYXJ0ICkge1xuXHRcdGlmICggY29udmVydGVkICkge1xuXHRcdFx0cmV0dXJuIGNvbnZlcnRlZFsgcGFydCBdO1xuXHRcdH1cblx0XHRzd2l0Y2ggKCBwYXJ0ICkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBcIkludmFsaWQgcGFydCB2YWx1ZSBcIiArIHBhcnQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhc29ydGFibGUgJiYgY29udmVydCApIHtcblx0XHRjb252ZXJ0ZWQgPSBjb252ZXJ0LmZyb21HcmVnb3JpYW4oIHZhbHVlICk7XG5cdH1cblxuXHRmb3IgKCA7IDsgKSB7XG5cdFx0Ly8gU2F2ZSB0aGUgY3VycmVudCBpbmRleFxuXHRcdHZhciBpbmRleCA9IHRva2VuUmVnRXhwLmxhc3RJbmRleCxcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBuZXh0IHBhdHRlcm5cblx0XHRcdGFyID0gdG9rZW5SZWdFeHAuZXhlYyggZm9ybWF0ICk7XG5cblx0XHQvLyBBcHBlbmQgdGhlIHRleHQgYmVmb3JlIHRoZSBwYXR0ZXJuIChvciB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgaWYgbm90IGZvdW5kKVxuXHRcdHZhciBwcmVNYXRjaCA9IGZvcm1hdC5zbGljZSggaW5kZXgsIGFyID8gYXIuaW5kZXggOiBmb3JtYXQubGVuZ3RoICk7XG5cdFx0cXVvdGVDb3VudCArPSBhcHBlbmRQcmVPclBvc3RNYXRjaCggcHJlTWF0Y2gsIHJldCApO1xuXG5cdFx0aWYgKCAhYXIgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHQvLyBkbyBub3QgcmVwbGFjZSBhbnkgbWF0Y2hlcyB0aGF0IG9jY3VyIGluc2lkZSBhIHN0cmluZyBsaXRlcmFsLlxuXHRcdGlmICggcXVvdGVDb3VudCAlIDIgKSB7XG5cdFx0XHRyZXQucHVzaCggYXJbMF0gKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciBjdXJyZW50ID0gYXJbIDAgXSxcblx0XHRcdGNsZW5ndGggPSBjdXJyZW50Lmxlbmd0aDtcblxuXHRcdHN3aXRjaCAoIGN1cnJlbnQgKSB7XG5cdFx0XHRjYXNlIFwiZGRkXCI6XG5cdFx0XHRcdC8vRGF5IG9mIHRoZSB3ZWVrLCBhcyBhIHRocmVlLWxldHRlciBhYmJyZXZpYXRpb25cblx0XHRcdGNhc2UgXCJkZGRkXCI6XG5cdFx0XHRcdC8vIERheSBvZiB0aGUgd2VlaywgdXNpbmcgdGhlIGZ1bGwgbmFtZVxuXHRcdFx0XHR2YXIgbmFtZXMgPSAoIGNsZW5ndGggPT09IDMgKSA/IGNhbC5kYXlzLm5hbWVzQWJiciA6IGNhbC5kYXlzLm5hbWVzO1xuXHRcdFx0XHRyZXQucHVzaCggbmFtZXNbdmFsdWUuZ2V0RGF5KCldICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImRcIjpcblx0XHRcdFx0Ly8gRGF5IG9mIG1vbnRoLCB3aXRob3V0IGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IGRheXNcblx0XHRcdGNhc2UgXCJkZFwiOlxuXHRcdFx0XHQvLyBEYXkgb2YgbW9udGgsIHdpdGggbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgZGF5c1xuXHRcdFx0XHRmb3VuZERheSA9IHRydWU7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBhZFplcm9zKCBnZXRQYXJ0KHZhbHVlLCAyKSwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIk1NTVwiOlxuXHRcdFx0XHQvLyBNb250aCwgYXMgYSB0aHJlZS1sZXR0ZXIgYWJicmV2aWF0aW9uXG5cdFx0XHRjYXNlIFwiTU1NTVwiOlxuXHRcdFx0XHQvLyBNb250aCwgdXNpbmcgdGhlIGZ1bGwgbmFtZVxuXHRcdFx0XHR2YXIgcGFydCA9IGdldFBhcnQoIHZhbHVlLCAxICk7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdCggY2FsLm1vbnRoc0dlbml0aXZlICYmIGhhc0RheSgpICkgP1xuXHRcdFx0XHRcdCggY2FsLm1vbnRoc0dlbml0aXZlWyBjbGVuZ3RoID09PSAzID8gXCJuYW1lc0FiYnJcIiA6IFwibmFtZXNcIiBdWyBwYXJ0IF0gKSA6XG5cdFx0XHRcdFx0KCBjYWwubW9udGhzWyBjbGVuZ3RoID09PSAzID8gXCJuYW1lc0FiYnJcIiA6IFwibmFtZXNcIiBdWyBwYXJ0IF0gKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJNXCI6XG5cdFx0XHRcdC8vIE1vbnRoLCBhcyBkaWdpdHMsIHdpdGggbm8gbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgbW9udGhzXG5cdFx0XHRjYXNlIFwiTU1cIjpcblx0XHRcdFx0Ly8gTW9udGgsIGFzIGRpZ2l0cywgd2l0aCBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBtb250aHNcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGFkWmVyb3MoIGdldFBhcnQodmFsdWUsIDEpICsgMSwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInlcIjpcblx0XHRcdFx0Ly8gWWVhciwgYXMgdHdvIGRpZ2l0cywgYnV0IHdpdGggbm8gbGVhZGluZyB6ZXJvIGZvciB5ZWFycyBsZXNzIHRoYW4gMTBcblx0XHRcdGNhc2UgXCJ5eVwiOlxuXHRcdFx0XHQvLyBZZWFyLCBhcyB0d28gZGlnaXRzLCB3aXRoIGxlYWRpbmcgemVybyBmb3IgeWVhcnMgbGVzcyB0aGFuIDEwXG5cdFx0XHRjYXNlIFwieXl5eVwiOlxuXHRcdFx0XHQvLyBZZWFyIHJlcHJlc2VudGVkIGJ5IGZvdXIgZnVsbCBkaWdpdHNcblx0XHRcdFx0cGFydCA9IGNvbnZlcnRlZCA/IGNvbnZlcnRlZFsgMCBdIDogZ2V0RXJhWWVhciggdmFsdWUsIGNhbCwgZ2V0RXJhKHZhbHVlLCBlcmFzKSwgc29ydGFibGUgKTtcblx0XHRcdFx0aWYgKCBjbGVuZ3RoIDwgNCApIHtcblx0XHRcdFx0XHRwYXJ0ID0gcGFydCAlIDEwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggcGFydCwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImhcIjpcblx0XHRcdFx0Ly8gSG91cnMgd2l0aCBubyBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBob3VycywgdXNpbmcgMTItaG91ciBjbG9ja1xuXHRcdFx0Y2FzZSBcImhoXCI6XG5cdFx0XHRcdC8vIEhvdXJzIHdpdGggbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgaG91cnMsIHVzaW5nIDEyLWhvdXIgY2xvY2tcblx0XHRcdFx0aG91ciA9IHZhbHVlLmdldEhvdXJzKCkgJSAxMjtcblx0XHRcdFx0aWYgKCBob3VyID09PSAwICkgaG91ciA9IDEyO1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggaG91ciwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIkhcIjpcblx0XHRcdFx0Ly8gSG91cnMgd2l0aCBubyBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBob3VycywgdXNpbmcgMjQtaG91ciBjbG9ja1xuXHRcdFx0Y2FzZSBcIkhIXCI6XG5cdFx0XHRcdC8vIEhvdXJzIHdpdGggbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgaG91cnMsIHVzaW5nIDI0LWhvdXIgY2xvY2tcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGFkWmVyb3MoIHZhbHVlLmdldEhvdXJzKCksIGNsZW5ndGggKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJtXCI6XG5cdFx0XHRcdC8vIE1pbnV0ZXMgd2l0aCBubyBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBtaW51dGVzXG5cdFx0XHRjYXNlIFwibW1cIjpcblx0XHRcdFx0Ly8gTWludXRlcyB3aXRoIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IG1pbnV0ZXNcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGFkWmVyb3MoIHZhbHVlLmdldE1pbnV0ZXMoKSwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInNcIjpcblx0XHRcdFx0Ly8gU2Vjb25kcyB3aXRoIG5vIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IHNlY29uZHNcblx0XHRcdGNhc2UgXCJzc1wiOlxuXHRcdFx0XHQvLyBTZWNvbmRzIHdpdGggbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgc2Vjb25kc1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggdmFsdWUuZ2V0U2Vjb25kcygpLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwidFwiOlxuXHRcdFx0XHQvLyBPbmUgY2hhcmFjdGVyIGFtL3BtIGluZGljYXRvciAoXCJhXCIgb3IgXCJwXCIpXG5cdFx0XHRjYXNlIFwidHRcIjpcblx0XHRcdFx0Ly8gTXVsdGljaGFyYWN0ZXIgYW0vcG0gaW5kaWNhdG9yXG5cdFx0XHRcdHBhcnQgPSB2YWx1ZS5nZXRIb3VycygpIDwgMTIgPyAoIGNhbC5BTSA/IGNhbC5BTVswXSA6IFwiIFwiICkgOiAoIGNhbC5QTSA/IGNhbC5QTVswXSA6IFwiIFwiICk7XG5cdFx0XHRcdHJldC5wdXNoKCBjbGVuZ3RoID09PSAxID8gcGFydC5jaGFyQXQoMCkgOiBwYXJ0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImZcIjpcblx0XHRcdFx0Ly8gRGVjaXNlY29uZHNcblx0XHRcdGNhc2UgXCJmZlwiOlxuXHRcdFx0XHQvLyBDZW50aXNlY29uZHNcblx0XHRcdGNhc2UgXCJmZmZcIjpcblx0XHRcdFx0Ly8gTWlsbGlzZWNvbmRzXG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBhZFplcm9zKCB2YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSwgMyApLnN1YnN0ciggMCwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInpcIjpcblx0XHRcdFx0Ly8gVGltZSB6b25lIG9mZnNldCwgbm8gbGVhZGluZyB6ZXJvXG5cdFx0XHRjYXNlIFwienpcIjpcblx0XHRcdFx0Ly8gVGltZSB6b25lIG9mZnNldCB3aXRoIGxlYWRpbmcgemVyb1xuXHRcdFx0XHRob3VyID0gdmFsdWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHQoIGhvdXIgPD0gMCA/IFwiK1wiIDogXCItXCIgKSArIHBhZFplcm9zKCBNYXRoLmZsb29yKE1hdGguYWJzKGhvdXIpKSwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInp6elwiOlxuXHRcdFx0XHQvLyBUaW1lIHpvbmUgb2Zmc2V0IHdpdGggbGVhZGluZyB6ZXJvXG5cdFx0XHRcdGhvdXIgPSB2YWx1ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdCggaG91ciA8PSAwID8gXCIrXCIgOiBcIi1cIiApICsgcGFkWmVyb3MoIE1hdGguZmxvb3IoTWF0aC5hYnMoaG91cikpLCAyICkgK1xuXHRcdFx0XHRcdC8vIEhhcmQgY29kZWQgXCI6XCIgc2VwYXJhdG9yLCByYXRoZXIgdGhhbiB1c2luZyBjYWwuVGltZVNlcGFyYXRvclxuXHRcdFx0XHRcdC8vIFJlcGVhdGVkIGhlcmUgZm9yIGNvbnNpc3RlbmN5LCBwbHVzIFwiOlwiIHdhcyBhbHJlYWR5IGFzc3VtZWQgaW4gZGF0ZSBwYXJzaW5nLlxuXHRcdFx0XHRcdFwiOlwiICsgcGFkWmVyb3MoIE1hdGguYWJzKHZhbHVlLmdldFRpbWV6b25lT2Zmc2V0KCkgJSA2MCksIDIgKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJnXCI6XG5cdFx0XHRjYXNlIFwiZ2dcIjpcblx0XHRcdFx0aWYgKCBjYWwuZXJhcyApIHtcblx0XHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRcdGNhbC5lcmFzWyBnZXRFcmEodmFsdWUsIGVyYXMpIF0ubmFtZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIi9cIjpcblx0XHRcdHJldC5wdXNoKCBjYWxbXCIvXCJdICk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgXCJJbnZhbGlkIGRhdGUgZm9ybWF0IHBhdHRlcm4gXFwnXCIgKyBjdXJyZW50ICsgXCJcXCcuXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXQuam9pbiggXCJcIiApO1xufTtcblxuLy8gZm9ybWF0TnVtYmVyXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBleHBhbmROdW1iZXI7XG5cblx0ZXhwYW5kTnVtYmVyID0gZnVuY3Rpb24oIG51bWJlciwgcHJlY2lzaW9uLCBmb3JtYXRJbmZvICkge1xuXHRcdHZhciBncm91cFNpemVzID0gZm9ybWF0SW5mby5ncm91cFNpemVzLFxuXHRcdFx0Y3VyU2l6ZSA9IGdyb3VwU2l6ZXNbIDAgXSxcblx0XHRcdGN1ckdyb3VwSW5kZXggPSAxLFxuXHRcdFx0ZmFjdG9yID0gTWF0aC5wb3coIDEwLCBwcmVjaXNpb24gKSxcblx0XHRcdHJvdW5kZWQgPSBNYXRoLnJvdW5kKCBudW1iZXIgKiBmYWN0b3IgKSAvIGZhY3RvcjtcblxuXHRcdGlmICggIWlzRmluaXRlKHJvdW5kZWQpICkge1xuXHRcdFx0cm91bmRlZCA9IG51bWJlcjtcblx0XHR9XG5cdFx0bnVtYmVyID0gcm91bmRlZDtcblxuXHRcdHZhciBudW1iZXJTdHJpbmcgPSBudW1iZXIrXCJcIixcblx0XHRcdHJpZ2h0ID0gXCJcIixcblx0XHRcdHNwbGl0ID0gbnVtYmVyU3RyaW5nLnNwbGl0KCAvZS9pICksXG5cdFx0XHRleHBvbmVudCA9IHNwbGl0Lmxlbmd0aCA+IDEgPyBwYXJzZUludCggc3BsaXRbMV0sIDEwICkgOiAwO1xuXHRcdG51bWJlclN0cmluZyA9IHNwbGl0WyAwIF07XG5cdFx0c3BsaXQgPSBudW1iZXJTdHJpbmcuc3BsaXQoIFwiLlwiICk7XG5cdFx0bnVtYmVyU3RyaW5nID0gc3BsaXRbIDAgXTtcblx0XHRyaWdodCA9IHNwbGl0Lmxlbmd0aCA+IDEgPyBzcGxpdFsgMSBdIDogXCJcIjtcblxuXHRcdHZhciBsO1xuXHRcdGlmICggZXhwb25lbnQgPiAwICkge1xuXHRcdFx0cmlnaHQgPSB6ZXJvUGFkKCByaWdodCwgZXhwb25lbnQsIGZhbHNlICk7XG5cdFx0XHRudW1iZXJTdHJpbmcgKz0gcmlnaHQuc2xpY2UoIDAsIGV4cG9uZW50ICk7XG5cdFx0XHRyaWdodCA9IHJpZ2h0LnN1YnN0ciggZXhwb25lbnQgKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGV4cG9uZW50IDwgMCApIHtcblx0XHRcdGV4cG9uZW50ID0gLWV4cG9uZW50O1xuXHRcdFx0bnVtYmVyU3RyaW5nID0gemVyb1BhZCggbnVtYmVyU3RyaW5nLCBleHBvbmVudCArIDEsIHRydWUgKTtcblx0XHRcdHJpZ2h0ID0gbnVtYmVyU3RyaW5nLnNsaWNlKCAtZXhwb25lbnQsIG51bWJlclN0cmluZy5sZW5ndGggKSArIHJpZ2h0O1xuXHRcdFx0bnVtYmVyU3RyaW5nID0gbnVtYmVyU3RyaW5nLnNsaWNlKCAwLCAtZXhwb25lbnQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHByZWNpc2lvbiA+IDAgKSB7XG5cdFx0XHRyaWdodCA9IGZvcm1hdEluZm9bIFwiLlwiIF0gK1xuXHRcdFx0XHQoIChyaWdodC5sZW5ndGggPiBwcmVjaXNpb24pID8gcmlnaHQuc2xpY2UoMCwgcHJlY2lzaW9uKSA6IHplcm9QYWQocmlnaHQsIHByZWNpc2lvbikgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyaWdodCA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0dmFyIHN0cmluZ0luZGV4ID0gbnVtYmVyU3RyaW5nLmxlbmd0aCAtIDEsXG5cdFx0XHRzZXAgPSBmb3JtYXRJbmZvWyBcIixcIiBdLFxuXHRcdFx0cmV0ID0gXCJcIjtcblxuXHRcdHdoaWxlICggc3RyaW5nSW5kZXggPj0gMCApIHtcblx0XHRcdGlmICggY3VyU2l6ZSA9PT0gMCB8fCBjdXJTaXplID4gc3RyaW5nSW5kZXggKSB7XG5cdFx0XHRcdHJldHVybiBudW1iZXJTdHJpbmcuc2xpY2UoIDAsIHN0cmluZ0luZGV4ICsgMSApICsgKCByZXQubGVuZ3RoID8gKHNlcCArIHJldCArIHJpZ2h0KSA6IHJpZ2h0ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXQgPSBudW1iZXJTdHJpbmcuc2xpY2UoIHN0cmluZ0luZGV4IC0gY3VyU2l6ZSArIDEsIHN0cmluZ0luZGV4ICsgMSApICsgKCByZXQubGVuZ3RoID8gKHNlcCArIHJldCkgOiBcIlwiICk7XG5cblx0XHRcdHN0cmluZ0luZGV4IC09IGN1clNpemU7XG5cblx0XHRcdGlmICggY3VyR3JvdXBJbmRleCA8IGdyb3VwU2l6ZXMubGVuZ3RoICkge1xuXHRcdFx0XHRjdXJTaXplID0gZ3JvdXBTaXplc1sgY3VyR3JvdXBJbmRleCBdO1xuXHRcdFx0XHRjdXJHcm91cEluZGV4Kys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bWJlclN0cmluZy5zbGljZSggMCwgc3RyaW5nSW5kZXggKyAxICkgKyBzZXAgKyByZXQgKyByaWdodDtcblx0fTtcblxuXHRmb3JtYXROdW1iZXIgPSBmdW5jdGlvbiggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSApIHtcblx0XHRpZiAoICFpc0Zpbml0ZSh2YWx1ZSkgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBJbmZpbml0eSApIHtcblx0XHRcdFx0cmV0dXJuIGN1bHR1cmUubnVtYmVyRm9ybWF0LnBvc2l0aXZlSW5maW5pdHk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHZhbHVlID09PSAtSW5maW5pdHkgKSB7XG5cdFx0XHRcdHJldHVybiBjdWx0dXJlLm51bWJlckZvcm1hdC5uZWdhdGl2ZUluZmluaXR5O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGN1bHR1cmUubnVtYmVyRm9ybWF0WyBcIk5hTlwiIF07XG5cdFx0fVxuXHRcdGlmICggIWZvcm1hdCB8fCBmb3JtYXQgPT09IFwiaVwiICkge1xuXHRcdFx0cmV0dXJuIGN1bHR1cmUubmFtZS5sZW5ndGggPyB2YWx1ZS50b0xvY2FsZVN0cmluZygpIDogdmFsdWUudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0Zm9ybWF0ID0gZm9ybWF0IHx8IFwiRFwiO1xuXG5cdFx0dmFyIG5mID0gY3VsdHVyZS5udW1iZXJGb3JtYXQsXG5cdFx0XHRudW1iZXIgPSBNYXRoLmFicyggdmFsdWUgKSxcblx0XHRcdHByZWNpc2lvbiA9IC0xLFxuXHRcdFx0cGF0dGVybjtcblx0XHRpZiAoIGZvcm1hdC5sZW5ndGggPiAxICkgcHJlY2lzaW9uID0gcGFyc2VJbnQoIGZvcm1hdC5zbGljZSgxKSwgMTAgKTtcblxuXHRcdHZhciBjdXJyZW50ID0gZm9ybWF0LmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCksXG5cdFx0XHRmb3JtYXRJbmZvO1xuXG5cdFx0c3dpdGNoICggY3VycmVudCApIHtcblx0XHRcdGNhc2UgXCJEXCI6XG5cdFx0XHRcdHBhdHRlcm4gPSBcIm5cIjtcblx0XHRcdFx0bnVtYmVyID0gdHJ1bmNhdGUoIG51bWJlciApO1xuXHRcdFx0XHRpZiAoIHByZWNpc2lvbiAhPT0gLTEgKSB7XG5cdFx0XHRcdFx0bnVtYmVyID0gemVyb1BhZCggXCJcIiArIG51bWJlciwgcHJlY2lzaW9uLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCB2YWx1ZSA8IDAgKSBudW1iZXIgPSBcIi1cIiArIG51bWJlcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiTlwiOlxuXHRcdFx0XHRmb3JtYXRJbmZvID0gbmY7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdGNhc2UgXCJDXCI6XG5cdFx0XHRcdGZvcm1hdEluZm8gPSBmb3JtYXRJbmZvIHx8IG5mLmN1cnJlbmN5O1xuXHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRjYXNlIFwiUFwiOlxuXHRcdFx0XHRmb3JtYXRJbmZvID0gZm9ybWF0SW5mbyB8fCBuZi5wZXJjZW50O1xuXHRcdFx0XHRwYXR0ZXJuID0gdmFsdWUgPCAwID8gZm9ybWF0SW5mby5wYXR0ZXJuWyAwIF0gOiAoIGZvcm1hdEluZm8ucGF0dGVyblsxXSB8fCBcIm5cIiApO1xuXHRcdFx0XHRpZiAoIHByZWNpc2lvbiA9PT0gLTEgKSBwcmVjaXNpb24gPSBmb3JtYXRJbmZvLmRlY2ltYWxzO1xuXHRcdFx0XHRudW1iZXIgPSBleHBhbmROdW1iZXIoIG51bWJlciAqIChjdXJyZW50ID09PSBcIlBcIiA/IDEwMCA6IDEpLCBwcmVjaXNpb24sIGZvcm1hdEluZm8gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBcIkJhZCBudW1iZXIgZm9ybWF0IHNwZWNpZmllcjogXCIgKyBjdXJyZW50O1xuXHRcdH1cblxuXHRcdHZhciBwYXR0ZXJuUGFydHMgPSAvbnxcXCR8LXwlL2csXG5cdFx0XHRyZXQgPSBcIlwiO1xuXHRcdGZvciAoIDsgOyApIHtcblx0XHRcdHZhciBpbmRleCA9IHBhdHRlcm5QYXJ0cy5sYXN0SW5kZXgsXG5cdFx0XHRcdGFyID0gcGF0dGVyblBhcnRzLmV4ZWMoIHBhdHRlcm4gKTtcblxuXHRcdFx0cmV0ICs9IHBhdHRlcm4uc2xpY2UoIGluZGV4LCBhciA/IGFyLmluZGV4IDogcGF0dGVybi5sZW5ndGggKTtcblxuXHRcdFx0aWYgKCAhYXIgKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKCBhclswXSApIHtcblx0XHRcdFx0Y2FzZSBcIm5cIjpcblx0XHRcdFx0XHRyZXQgKz0gbnVtYmVyO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiJFwiOlxuXHRcdFx0XHRcdHJldCArPSBuZi5jdXJyZW5jeS5zeW1ib2w7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCItXCI6XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgbWFrZSAwIG5lZ2F0aXZlXG5cdFx0XHRcdFx0aWYgKCAvWzEtOV0vLnRlc3QobnVtYmVyKSApIHtcblx0XHRcdFx0XHRcdHJldCArPSBuZlsgXCItXCIgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCIlXCI6XG5cdFx0XHRcdFx0cmV0ICs9IG5mLnBlcmNlbnQuc3ltYm9sO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cbn0oKSk7XG5cbmdldFRva2VuUmVnRXhwID0gZnVuY3Rpb24oKSB7XG5cdC8vIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgZGF0ZSBhbmQgdGltZSB0b2tlbnMgaW4gZm9ybWF0IHN0cmluZ3MuXG5cdHJldHVybiAoL1xcL3xkZGRkfGRkZHxkZHxkfE1NTU18TU1NfE1NfE18eXl5eXx5eXx5fGhofGh8SEh8SHxtbXxtfHNzfHN8dHR8dHxmZmZ8ZmZ8Znx6enp8enp8enxnZ3xnL2cpO1xufTtcblxuZ2V0RXJhID0gZnVuY3Rpb24oIGRhdGUsIGVyYXMgKSB7XG5cdGlmICggIWVyYXMgKSByZXR1cm4gMDtcblx0dmFyIHN0YXJ0LCB0aWNrcyA9IGRhdGUuZ2V0VGltZSgpO1xuXHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRzdGFydCA9IGVyYXNbIGkgXS5zdGFydDtcblx0XHRpZiAoIHN0YXJ0ID09PSBudWxsIHx8IHRpY2tzID49IHN0YXJ0ICkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAwO1xufTtcblxuZ2V0RXJhWWVhciA9IGZ1bmN0aW9uKCBkYXRlLCBjYWwsIGVyYSwgc29ydGFibGUgKSB7XG5cdHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRpZiAoICFzb3J0YWJsZSAmJiBjYWwuZXJhcyApIHtcblx0XHQvLyBjb252ZXJ0IG5vcm1hbCBncmVnb3JpYW4geWVhciB0byBlcmEtc2hpZnRlZCBncmVnb3JpYW5cblx0XHQvLyB5ZWFyIGJ5IHN1YnRyYWN0aW5nIHRoZSBlcmEgb2Zmc2V0XG5cdFx0eWVhciAtPSBjYWwuZXJhc1sgZXJhIF0ub2Zmc2V0O1xuXHR9XG5cdHJldHVybiB5ZWFyO1xufTtcblxuLy8gcGFyc2VFeGFjdFxuKGZ1bmN0aW9uKCkge1xuXHR2YXIgZXhwYW5kWWVhcixcblx0XHRnZXREYXlJbmRleCxcblx0XHRnZXRNb250aEluZGV4LFxuXHRcdGdldFBhcnNlUmVnRXhwLFxuXHRcdG91dE9mUmFuZ2UsXG5cdFx0dG9VcHBlcixcblx0XHR0b1VwcGVyQXJyYXk7XG5cblx0ZXhwYW5kWWVhciA9IGZ1bmN0aW9uKCBjYWwsIHllYXIgKSB7XG5cdFx0Ly8gZXhwYW5kcyAyLWRpZ2l0IHllYXIgaW50byA0IGRpZ2l0cy5cblx0XHRpZiAoIHllYXIgPCAxMDAgKSB7XG5cdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKSxcblx0XHRcdFx0ZXJhID0gZ2V0RXJhKCBub3cgKSxcblx0XHRcdFx0Y3VyciA9IGdldEVyYVllYXIoIG5vdywgY2FsLCBlcmEgKSxcblx0XHRcdFx0dHdvRGlnaXRZZWFyTWF4ID0gY2FsLnR3b0RpZ2l0WWVhck1heDtcblx0XHRcdHR3b0RpZ2l0WWVhck1heCA9IHR5cGVvZiB0d29EaWdpdFllYXJNYXggPT09IFwic3RyaW5nXCIgPyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJSAxMDAgKyBwYXJzZUludCggdHdvRGlnaXRZZWFyTWF4LCAxMCApIDogdHdvRGlnaXRZZWFyTWF4O1xuXHRcdFx0eWVhciArPSBjdXJyIC0gKCBjdXJyICUgMTAwICk7XG5cdFx0XHRpZiAoIHllYXIgPiB0d29EaWdpdFllYXJNYXggKSB7XG5cdFx0XHRcdHllYXIgLT0gMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4geWVhcjtcblx0fTtcblxuXHRnZXREYXlJbmRleCA9IGZ1bmN0aW9uXHQoIGNhbCwgdmFsdWUsIGFiYnIgKSB7XG5cdFx0dmFyIHJldCxcblx0XHRcdGRheXMgPSBjYWwuZGF5cyxcblx0XHRcdHVwcGVyRGF5cyA9IGNhbC5fdXBwZXJEYXlzO1xuXHRcdGlmICggIXVwcGVyRGF5cyApIHtcblx0XHRcdGNhbC5fdXBwZXJEYXlzID0gdXBwZXJEYXlzID0gW1xuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIGRheXMubmFtZXMgKSxcblx0XHRcdFx0dG9VcHBlckFycmF5KCBkYXlzLm5hbWVzQWJiciApLFxuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIGRheXMubmFtZXNTaG9ydCApXG5cdFx0XHRdO1xuXHRcdH1cblx0XHR2YWx1ZSA9IHRvVXBwZXIoIHZhbHVlICk7XG5cdFx0aWYgKCBhYmJyICkge1xuXHRcdFx0cmV0ID0gYXJyYXlJbmRleE9mKCB1cHBlckRheXNbMV0sIHZhbHVlICk7XG5cdFx0XHRpZiAoIHJldCA9PT0gLTEgKSB7XG5cdFx0XHRcdHJldCA9IGFycmF5SW5kZXhPZiggdXBwZXJEYXlzWzJdLCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldCA9IGFycmF5SW5kZXhPZiggdXBwZXJEYXlzWzBdLCB2YWx1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXG5cdGdldE1vbnRoSW5kZXggPSBmdW5jdGlvbiggY2FsLCB2YWx1ZSwgYWJiciApIHtcblx0XHR2YXIgbW9udGhzID0gY2FsLm1vbnRocyxcblx0XHRcdG1vbnRoc0dlbiA9IGNhbC5tb250aHNHZW5pdGl2ZSB8fCBjYWwubW9udGhzLFxuXHRcdFx0dXBwZXJNb250aHMgPSBjYWwuX3VwcGVyTW9udGhzLFxuXHRcdFx0dXBwZXJNb250aHNHZW4gPSBjYWwuX3VwcGVyTW9udGhzR2VuO1xuXHRcdGlmICggIXVwcGVyTW9udGhzICkge1xuXHRcdFx0Y2FsLl91cHBlck1vbnRocyA9IHVwcGVyTW9udGhzID0gW1xuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIG1vbnRocy5uYW1lcyApLFxuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIG1vbnRocy5uYW1lc0FiYnIgKVxuXHRcdFx0XTtcblx0XHRcdGNhbC5fdXBwZXJNb250aHNHZW4gPSB1cHBlck1vbnRoc0dlbiA9IFtcblx0XHRcdFx0dG9VcHBlckFycmF5KCBtb250aHNHZW4ubmFtZXMgKSxcblx0XHRcdFx0dG9VcHBlckFycmF5KCBtb250aHNHZW4ubmFtZXNBYmJyIClcblx0XHRcdF07XG5cdFx0fVxuXHRcdHZhbHVlID0gdG9VcHBlciggdmFsdWUgKTtcblx0XHR2YXIgaSA9IGFycmF5SW5kZXhPZiggYWJiciA/IHVwcGVyTW9udGhzWzFdIDogdXBwZXJNb250aHNbMF0sIHZhbHVlICk7XG5cdFx0aWYgKCBpIDwgMCApIHtcblx0XHRcdGkgPSBhcnJheUluZGV4T2YoIGFiYnIgPyB1cHBlck1vbnRoc0dlblsxXSA6IHVwcGVyTW9udGhzR2VuWzBdLCB2YWx1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gaTtcblx0fTtcblxuXHRnZXRQYXJzZVJlZ0V4cCA9IGZ1bmN0aW9uKCBjYWwsIGZvcm1hdCApIHtcblx0XHQvLyBjb252ZXJ0cyBhIGZvcm1hdCBzdHJpbmcgaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIGdyb3VwcyB0aGF0XG5cdFx0Ly8gY2FuIGJlIHVzZWQgdG8gZXh0cmFjdCBkYXRlIGZpZWxkcyBmcm9tIGEgZGF0ZSBzdHJpbmcuXG5cdFx0Ly8gY2hlY2sgZm9yIGEgY2FjaGVkIHBhcnNlIHJlZ2V4LlxuXHRcdHZhciByZSA9IGNhbC5fcGFyc2VSZWdFeHA7XG5cdFx0aWYgKCAhcmUgKSB7XG5cdFx0XHRjYWwuX3BhcnNlUmVnRXhwID0gcmUgPSB7fTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgcmVGb3JtYXQgPSByZVsgZm9ybWF0IF07XG5cdFx0XHRpZiAoIHJlRm9ybWF0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVGb3JtYXQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gZXhwYW5kIHNpbmdsZSBkaWdpdCBmb3JtYXRzLCB0aGVuIGVzY2FwZSByZWd1bGFyIGV4cHJlc3Npb24gY2hhcmFjdGVycy5cblx0XHR2YXIgZXhwRm9ybWF0ID0gZXhwYW5kRm9ybWF0KCBjYWwsIGZvcm1hdCApLnJlcGxhY2UoIC8oW1xcXlxcJFxcLlxcKlxcK1xcP1xcfFxcW1xcXVxcKFxcKVxce1xcfV0pL2csIFwiXFxcXFxcXFwkMVwiICksXG5cdFx0XHRyZWdleHAgPSBbIFwiXlwiIF0sXG5cdFx0XHRncm91cHMgPSBbXSxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdHF1b3RlQ291bnQgPSAwLFxuXHRcdFx0dG9rZW5SZWdFeHAgPSBnZXRUb2tlblJlZ0V4cCgpLFxuXHRcdFx0bWF0Y2g7XG5cblx0XHQvLyBpdGVyYXRlIHRocm91Z2ggZWFjaCBkYXRlIHRva2VuIGZvdW5kLlxuXHRcdHdoaWxlICggKG1hdGNoID0gdG9rZW5SZWdFeHAuZXhlYyhleHBGb3JtYXQpKSAhPT0gbnVsbCApIHtcblx0XHRcdHZhciBwcmVNYXRjaCA9IGV4cEZvcm1hdC5zbGljZSggaW5kZXgsIG1hdGNoLmluZGV4ICk7XG5cdFx0XHRpbmRleCA9IHRva2VuUmVnRXhwLmxhc3RJbmRleDtcblxuXHRcdFx0Ly8gZG9uJ3QgcmVwbGFjZSBhbnkgbWF0Y2hlcyB0aGF0IG9jY3VyIGluc2lkZSBhIHN0cmluZyBsaXRlcmFsLlxuXHRcdFx0cXVvdGVDb3VudCArPSBhcHBlbmRQcmVPclBvc3RNYXRjaCggcHJlTWF0Y2gsIHJlZ2V4cCApO1xuXHRcdFx0aWYgKCBxdW90ZUNvdW50ICUgMiApIHtcblx0XHRcdFx0cmVnZXhwLnB1c2goIG1hdGNoWzBdICk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgYSByZWdleCBncm91cCBmb3IgdGhlIHRva2VuLlxuXHRcdFx0dmFyIG0gPSBtYXRjaFsgMCBdLFxuXHRcdFx0XHRsZW4gPSBtLmxlbmd0aCxcblx0XHRcdFx0YWRkO1xuXHRcdFx0c3dpdGNoICggbSApIHtcblx0XHRcdFx0Y2FzZSBcImRkZGRcIjogY2FzZSBcImRkZFwiOlxuXHRcdFx0XHRjYXNlIFwiTU1NTVwiOiBjYXNlIFwiTU1NXCI6XG5cdFx0XHRcdGNhc2UgXCJnZ1wiOiBjYXNlIFwiZ1wiOlxuXHRcdFx0XHRcdGFkZCA9IFwiKFxcXFxEKylcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInR0XCI6IGNhc2UgXCJ0XCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoXFxcXEQqKVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwieXl5eVwiOlxuXHRcdFx0XHRjYXNlIFwiZmZmXCI6XG5cdFx0XHRcdGNhc2UgXCJmZlwiOlxuXHRcdFx0XHRjYXNlIFwiZlwiOlxuXHRcdFx0XHRcdGFkZCA9IFwiKFxcXFxke1wiICsgbGVuICsgXCJ9KVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGRcIjogY2FzZSBcImRcIjpcblx0XHRcdFx0Y2FzZSBcIk1NXCI6IGNhc2UgXCJNXCI6XG5cdFx0XHRcdGNhc2UgXCJ5eVwiOiBjYXNlIFwieVwiOlxuXHRcdFx0XHRjYXNlIFwiSEhcIjogY2FzZSBcIkhcIjpcblx0XHRcdFx0Y2FzZSBcImhoXCI6IGNhc2UgXCJoXCI6XG5cdFx0XHRcdGNhc2UgXCJtbVwiOiBjYXNlIFwibVwiOlxuXHRcdFx0XHRjYXNlIFwic3NcIjogY2FzZSBcInNcIjpcblx0XHRcdFx0XHRhZGQgPSBcIihcXFxcZFxcXFxkPylcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInp6elwiOlxuXHRcdFx0XHRcdGFkZCA9IFwiKFsrLV0/XFxcXGRcXFxcZD86XFxcXGR7Mn0pXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ6elwiOiBjYXNlIFwielwiOlxuXHRcdFx0XHRcdGFkZCA9IFwiKFsrLV0/XFxcXGRcXFxcZD8pXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCIvXCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoXFxcXC8pXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgXCJJbnZhbGlkIGRhdGUgZm9ybWF0IHBhdHRlcm4gXFwnXCIgKyBtICsgXCJcXCcuXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGFkZCApIHtcblx0XHRcdFx0cmVnZXhwLnB1c2goIGFkZCApO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goIG1hdGNoWzBdICk7XG5cdFx0fVxuXHRcdGFwcGVuZFByZU9yUG9zdE1hdGNoKCBleHBGb3JtYXQuc2xpY2UoaW5kZXgpLCByZWdleHAgKTtcblx0XHRyZWdleHAucHVzaCggXCIkXCIgKTtcblxuXHRcdC8vIGFsbG93IHdoaXRlc3BhY2UgdG8gZGlmZmVyIHdoZW4gbWF0Y2hpbmcgZm9ybWF0cy5cblx0XHR2YXIgcmVnZXhwU3RyID0gcmVnZXhwLmpvaW4oIFwiXCIgKS5yZXBsYWNlKCAvXFxzKy9nLCBcIlxcXFxzK1wiICksXG5cdFx0XHRwYXJzZVJlZ0V4cCA9IHsgXCJyZWdFeHBcIjogcmVnZXhwU3RyLCBcImdyb3Vwc1wiOiBncm91cHMgfTtcblxuXHRcdC8vIGNhY2hlIHRoZSByZWdleCBmb3IgdGhpcyBmb3JtYXQuXG5cdFx0cmV0dXJuIHJlWyBmb3JtYXQgXSA9IHBhcnNlUmVnRXhwO1xuXHR9O1xuXG5cdG91dE9mUmFuZ2UgPSBmdW5jdGlvbiggdmFsdWUsIGxvdywgaGlnaCApIHtcblx0XHRyZXR1cm4gdmFsdWUgPCBsb3cgfHwgdmFsdWUgPiBoaWdoO1xuXHR9O1xuXG5cdHRvVXBwZXIgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0Ly8gXCJoZS1JTFwiIGhhcyBub24tYnJlYWtpbmcgc3BhY2UgaW4gd2Vla2RheSBuYW1lcy5cblx0XHRyZXR1cm4gdmFsdWUuc3BsaXQoIFwiXFx1MDBBMFwiICkuam9pbiggXCIgXCIgKS50b1VwcGVyQ2FzZSgpO1xuXHR9O1xuXG5cdHRvVXBwZXJBcnJheSA9IGZ1bmN0aW9uKCBhcnIgKSB7XG5cdFx0dmFyIHJlc3VsdHMgPSBbXTtcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0cmVzdWx0c1sgaSBdID0gdG9VcHBlciggYXJyW2ldICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9O1xuXG5cdHBhcnNlRXhhY3QgPSBmdW5jdGlvbiggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSApIHtcblx0XHQvLyB0cnkgdG8gcGFyc2UgdGhlIGRhdGUgc3RyaW5nIGJ5IG1hdGNoaW5nIGFnYWluc3QgdGhlIGZvcm1hdCBzdHJpbmdcblx0XHQvLyB3aGlsZSB1c2luZyB0aGUgc3BlY2lmaWVkIGN1bHR1cmUgZm9yIGRhdGUgZmllbGQgbmFtZXMuXG5cdFx0dmFsdWUgPSB0cmltKCB2YWx1ZSApO1xuXHRcdHZhciBjYWwgPSBjdWx0dXJlLmNhbGVuZGFyLFxuXHRcdFx0Ly8gY29udmVydCBkYXRlIGZvcm1hdHMgaW50byByZWd1bGFyIGV4cHJlc3Npb25zIHdpdGggZ3JvdXBpbmdzLlxuXHRcdFx0Ly8gdXNlIHRoZSByZWdleHAgdG8gZGV0ZXJtaW5lIHRoZSBpbnB1dCBmb3JtYXQgYW5kIGV4dHJhY3QgdGhlIGRhdGUgZmllbGRzLlxuXHRcdFx0cGFyc2VJbmZvID0gZ2V0UGFyc2VSZWdFeHAoIGNhbCwgZm9ybWF0ICksXG5cdFx0XHRtYXRjaCA9IG5ldyBSZWdFeHAoIHBhcnNlSW5mby5yZWdFeHAgKS5leGVjKCB2YWx1ZSApO1xuXHRcdGlmICggbWF0Y2ggPT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gZm91bmQgYSBkYXRlIGZvcm1hdCB0aGF0IG1hdGNoZXMgdGhlIGlucHV0LlxuXHRcdHZhciBncm91cHMgPSBwYXJzZUluZm8uZ3JvdXBzLFxuXHRcdFx0ZXJhID0gbnVsbCwgeWVhciA9IG51bGwsIG1vbnRoID0gbnVsbCwgZGF0ZSA9IG51bGwsIHdlZWtEYXkgPSBudWxsLFxuXHRcdFx0aG91ciA9IDAsIGhvdXJPZmZzZXQsIG1pbiA9IDAsIHNlYyA9IDAsIG1zZWMgPSAwLCB0ek1pbk9mZnNldCA9IG51bGwsXG5cdFx0XHRwbUhvdXIgPSBmYWxzZTtcblx0XHQvLyBpdGVyYXRlIHRoZSBmb3JtYXQgZ3JvdXBzIHRvIGV4dHJhY3QgYW5kIHNldCB0aGUgZGF0ZSBmaWVsZHMuXG5cdFx0Zm9yICggdmFyIGogPSAwLCBqbCA9IGdyb3Vwcy5sZW5ndGg7IGogPCBqbDsgaisrICkge1xuXHRcdFx0dmFyIG1hdGNoR3JvdXAgPSBtYXRjaFsgaiArIDEgXTtcblx0XHRcdGlmICggbWF0Y2hHcm91cCApIHtcblx0XHRcdFx0dmFyIGN1cnJlbnQgPSBncm91cHNbIGogXSxcblx0XHRcdFx0XHRjbGVuZ3RoID0gY3VycmVudC5sZW5ndGgsXG5cdFx0XHRcdFx0bWF0Y2hJbnQgPSBwYXJzZUludCggbWF0Y2hHcm91cCwgMTAgKTtcblx0XHRcdFx0c3dpdGNoICggY3VycmVudCApIHtcblx0XHRcdFx0XHRjYXNlIFwiZGRcIjogY2FzZSBcImRcIjpcblx0XHRcdFx0XHRcdC8vIERheSBvZiBtb250aC5cblx0XHRcdFx0XHRcdGRhdGUgPSBtYXRjaEludDtcblx0XHRcdFx0XHRcdC8vIGNoZWNrIHRoYXQgZGF0ZSBpcyBnZW5lcmFsbHkgaW4gdmFsaWQgcmFuZ2UsIGFsc28gY2hlY2tpbmcgb3ZlcmZsb3cgYmVsb3cuXG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoZGF0ZSwgMSwgMzEpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiTU1NXCI6IGNhc2UgXCJNTU1NXCI6XG5cdFx0XHRcdFx0XHRtb250aCA9IGdldE1vbnRoSW5kZXgoIGNhbCwgbWF0Y2hHcm91cCwgY2xlbmd0aCA9PT0gMyApO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKG1vbnRoLCAwLCAxMSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJNXCI6IGNhc2UgXCJNTVwiOlxuXHRcdFx0XHRcdFx0Ly8gTW9udGguXG5cdFx0XHRcdFx0XHRtb250aCA9IG1hdGNoSW50IC0gMTtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShtb250aCwgMCwgMTEpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwieVwiOiBjYXNlIFwieXlcIjpcblx0XHRcdFx0XHRjYXNlIFwieXl5eVwiOlxuXHRcdFx0XHRcdFx0eWVhciA9IGNsZW5ndGggPCA0ID8gZXhwYW5kWWVhciggY2FsLCBtYXRjaEludCApIDogbWF0Y2hJbnQ7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoeWVhciwgMCwgOTk5OSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJoXCI6IGNhc2UgXCJoaFwiOlxuXHRcdFx0XHRcdFx0Ly8gSG91cnMgKDEyLWhvdXIgY2xvY2spLlxuXHRcdFx0XHRcdFx0aG91ciA9IG1hdGNoSW50O1xuXHRcdFx0XHRcdFx0aWYgKCBob3VyID09PSAxMiApIGhvdXIgPSAwO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKGhvdXIsIDAsIDExKSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIkhcIjogY2FzZSBcIkhIXCI6XG5cdFx0XHRcdFx0XHQvLyBIb3VycyAoMjQtaG91ciBjbG9jaykuXG5cdFx0XHRcdFx0XHRob3VyID0gbWF0Y2hJbnQ7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoaG91ciwgMCwgMjMpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwibVwiOiBjYXNlIFwibW1cIjpcblx0XHRcdFx0XHRcdC8vIE1pbnV0ZXMuXG5cdFx0XHRcdFx0XHRtaW4gPSBtYXRjaEludDtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShtaW4sIDAsIDU5KSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcInNcIjogY2FzZSBcInNzXCI6XG5cdFx0XHRcdFx0XHQvLyBTZWNvbmRzLlxuXHRcdFx0XHRcdFx0c2VjID0gbWF0Y2hJbnQ7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2Uoc2VjLCAwLCA1OSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJ0dFwiOiBjYXNlIFwidFwiOlxuXHRcdFx0XHRcdFx0Ly8gQU0vUE0gZGVzaWduYXRvci5cblx0XHRcdFx0XHRcdC8vIHNlZSBpZiBpdCBpcyBzdGFuZGFyZCwgdXBwZXIsIG9yIGxvd2VyIGNhc2UgUE0uIElmIG5vdCwgZW5zdXJlIGl0IGlzIGF0IGxlYXN0IG9uZSBvZlxuXHRcdFx0XHRcdFx0Ly8gdGhlIEFNIHRva2Vucy4gSWYgbm90LCBmYWlsIHRoZSBwYXJzZSBmb3IgdGhpcyBmb3JtYXQuXG5cdFx0XHRcdFx0XHRwbUhvdXIgPSBjYWwuUE0gJiYgKCBtYXRjaEdyb3VwID09PSBjYWwuUE1bMF0gfHwgbWF0Y2hHcm91cCA9PT0gY2FsLlBNWzFdIHx8IG1hdGNoR3JvdXAgPT09IGNhbC5QTVsyXSApO1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHQhcG1Ib3VyICYmIChcblx0XHRcdFx0XHRcdFx0XHQhY2FsLkFNIHx8ICggbWF0Y2hHcm91cCAhPT0gY2FsLkFNWzBdICYmIG1hdGNoR3JvdXAgIT09IGNhbC5BTVsxXSAmJiBtYXRjaEdyb3VwICE9PSBjYWwuQU1bMl0gKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImZcIjpcblx0XHRcdFx0XHRcdC8vIERlY2lzZWNvbmRzLlxuXHRcdFx0XHRcdGNhc2UgXCJmZlwiOlxuXHRcdFx0XHRcdFx0Ly8gQ2VudGlzZWNvbmRzLlxuXHRcdFx0XHRcdGNhc2UgXCJmZmZcIjpcblx0XHRcdFx0XHRcdC8vIE1pbGxpc2Vjb25kcy5cblx0XHRcdFx0XHRcdG1zZWMgPSBtYXRjaEludCAqIE1hdGgucG93KCAxMCwgMyAtIGNsZW5ndGggKTtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShtc2VjLCAwLCA5OTkpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZGRkXCI6XG5cdFx0XHRcdFx0XHQvLyBEYXkgb2Ygd2Vlay5cblx0XHRcdFx0XHRjYXNlIFwiZGRkZFwiOlxuXHRcdFx0XHRcdFx0Ly8gRGF5IG9mIHdlZWsuXG5cdFx0XHRcdFx0XHR3ZWVrRGF5ID0gZ2V0RGF5SW5kZXgoIGNhbCwgbWF0Y2hHcm91cCwgY2xlbmd0aCA9PT0gMyApO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKHdlZWtEYXksIDAsIDYpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwienp6XCI6XG5cdFx0XHRcdFx0XHQvLyBUaW1lIHpvbmUgb2Zmc2V0IGluICsvLSBob3VyczptaW4uXG5cdFx0XHRcdFx0XHR2YXIgb2Zmc2V0cyA9IG1hdGNoR3JvdXAuc3BsaXQoIC86LyApO1xuXHRcdFx0XHRcdFx0aWYgKCBvZmZzZXRzLmxlbmd0aCAhPT0gMiApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0aG91ck9mZnNldCA9IHBhcnNlSW50KCBvZmZzZXRzWzBdLCAxMCApO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKGhvdXJPZmZzZXQsIC0xMiwgMTMpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHR2YXIgbWluT2Zmc2V0ID0gcGFyc2VJbnQoIG9mZnNldHNbMV0sIDEwICk7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UobWluT2Zmc2V0LCAwLCA1OSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdHR6TWluT2Zmc2V0ID0gKCBob3VyT2Zmc2V0ICogNjAgKSArICggc3RhcnRzV2l0aChtYXRjaEdyb3VwLCBcIi1cIikgPyAtbWluT2Zmc2V0IDogbWluT2Zmc2V0ICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwielwiOiBjYXNlIFwienpcIjpcblx0XHRcdFx0XHRcdC8vIFRpbWUgem9uZSBvZmZzZXQgaW4gKy8tIGhvdXJzLlxuXHRcdFx0XHRcdFx0aG91ck9mZnNldCA9IG1hdGNoSW50O1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKGhvdXJPZmZzZXQsIC0xMiwgMTMpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHR0ek1pbk9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJnXCI6IGNhc2UgXCJnZ1wiOlxuXHRcdFx0XHRcdFx0dmFyIGVyYU5hbWUgPSBtYXRjaEdyb3VwO1xuXHRcdFx0XHRcdFx0aWYgKCAhZXJhTmFtZSB8fCAhY2FsLmVyYXMgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGVyYU5hbWUgPSB0cmltKCBlcmFOYW1lLnRvTG93ZXJDYXNlKCkgKTtcblx0XHRcdFx0XHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGNhbC5lcmFzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBlcmFOYW1lID09PSBjYWwuZXJhc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXJhID0gaTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gY291bGQgbm90IGZpbmQgYW4gZXJhIHdpdGggdGhhdCBuYW1lXG5cdFx0XHRcdFx0XHRpZiAoIGVyYSA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHJlc3VsdCA9IG5ldyBEYXRlKCksIGRlZmF1bHRZZWFyLCBjb252ZXJ0ID0gY2FsLmNvbnZlcnQ7XG5cdFx0ZGVmYXVsdFllYXIgPSBjb252ZXJ0ID8gY29udmVydC5mcm9tR3JlZ29yaWFuKCByZXN1bHQgKVsgMCBdIDogcmVzdWx0LmdldEZ1bGxZZWFyKCk7XG5cdFx0aWYgKCB5ZWFyID09PSBudWxsICkge1xuXHRcdFx0eWVhciA9IGRlZmF1bHRZZWFyO1xuXHRcdH1cblx0XHRlbHNlIGlmICggY2FsLmVyYXMgKSB7XG5cdFx0XHQvLyB5ZWFyIG11c3QgYmUgc2hpZnRlZCB0byBub3JtYWwgZ3JlZ29yaWFuIHllYXJcblx0XHRcdC8vIGJ1dCBub3QgaWYgeWVhciB3YXMgbm90IHNwZWNpZmllZCwgaXRzIGFscmVhZHkgbm9ybWFsIGdyZWdvcmlhblxuXHRcdFx0Ly8gcGVyIHRoZSBtYWluIGlmIGNsYXVzZSBhYm92ZS5cblx0XHRcdHllYXIgKz0gY2FsLmVyYXNbKCBlcmEgfHwgMCApXS5vZmZzZXQ7XG5cdFx0fVxuXHRcdC8vIHNldCBkZWZhdWx0IGRheSBhbmQgbW9udGggdG8gMSBhbmQgSmFudWFyeSwgc28gaWYgdW5zcGVjaWZpZWQsIHRoZXNlIGFyZSB0aGUgZGVmYXVsdHNcblx0XHQvLyBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IGRheS9tb250aC5cblx0XHRpZiAoIG1vbnRoID09PSBudWxsICkge1xuXHRcdFx0bW9udGggPSAwO1xuXHRcdH1cblx0XHRpZiAoIGRhdGUgPT09IG51bGwgKSB7XG5cdFx0XHRkYXRlID0gMTtcblx0XHR9XG5cdFx0Ly8gbm93IGhhdmUgeWVhciwgbW9udGgsIGFuZCBkYXRlLCBidXQgaW4gdGhlIGN1bHR1cmUncyBjYWxlbmRhci5cblx0XHQvLyBjb252ZXJ0IHRvIGdyZWdvcmlhbiBpZiBuZWNlc3Nhcnlcblx0XHRpZiAoIGNvbnZlcnQgKSB7XG5cdFx0XHRyZXN1bHQgPSBjb252ZXJ0LnRvR3JlZ29yaWFuKCB5ZWFyLCBtb250aCwgZGF0ZSApO1xuXHRcdFx0Ly8gY29udmVyc2lvbiBmYWlsZWQsIG11c3QgYmUgYW4gaW52YWxpZCBtYXRjaFxuXHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSByZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBoYXZlIHRvIHNldCB5ZWFyLCBtb250aCBhbmQgZGF0ZSB0b2dldGhlciB0byBhdm9pZCBvdmVyZmxvdyBiYXNlZCBvbiBjdXJyZW50IGRhdGUuXG5cdFx0XHRyZXN1bHQuc2V0RnVsbFllYXIoIHllYXIsIG1vbnRoLCBkYXRlICk7XG5cdFx0XHQvLyBjaGVjayB0byBzZWUgaWYgZGF0ZSBvdmVyZmxvd2VkIGZvciBzcGVjaWZpZWQgbW9udGggKG9ubHkgY2hlY2tlZCAxLTMxIGFib3ZlKS5cblx0XHRcdGlmICggcmVzdWx0LmdldERhdGUoKSAhPT0gZGF0ZSApIHJldHVybiBudWxsO1xuXHRcdFx0Ly8gaW52YWxpZCBkYXkgb2Ygd2Vlay5cblx0XHRcdGlmICggd2Vla0RheSAhPT0gbnVsbCAmJiByZXN1bHQuZ2V0RGF5KCkgIT09IHdlZWtEYXkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiBwbSBkZXNpZ25hdG9yIHRva2VuIHdhcyBmb3VuZCBtYWtlIHN1cmUgdGhlIGhvdXJzIGZpdCB0aGUgMjQtaG91ciBjbG9jay5cblx0XHRpZiAoIHBtSG91ciAmJiBob3VyIDwgMTIgKSB7XG5cdFx0XHRob3VyICs9IDEyO1xuXHRcdH1cblx0XHRyZXN1bHQuc2V0SG91cnMoIGhvdXIsIG1pbiwgc2VjLCBtc2VjICk7XG5cdFx0aWYgKCB0ek1pbk9mZnNldCAhPT0gbnVsbCApIHtcblx0XHRcdC8vIGFkanVzdCB0aW1lem9uZSB0byB1dGMgYmVmb3JlIGFwcGx5aW5nIGxvY2FsIG9mZnNldC5cblx0XHRcdHZhciBhZGp1c3RlZE1pbiA9IHJlc3VsdC5nZXRNaW51dGVzKCkgLSAoIHR6TWluT2Zmc2V0ICsgcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkgKTtcblx0XHRcdC8vIFNhZmFyaSBsaW1pdHMgaG91cnMgYW5kIG1pbnV0ZXMgdG8gdGhlIHJhbmdlIG9mIC0xMjcgdG8gMTI3LiAgV2UgbmVlZCB0byB1c2Ugc2V0SG91cnNcblx0XHRcdC8vIHRvIGVuc3VyZSBib3RoIHRoZXNlIGZpZWxkcyB3aWxsIG5vdCBleGNlZWQgdGhpcyByYW5nZS5cdGFkanVzdGVkTWluIHdpbGwgcmFuZ2Vcblx0XHRcdC8vIHNvbWV3aGVyZSBiZXR3ZWVuIC0xNDQwIGFuZCAxNTAwLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc3BsaXQgdGhpcyBpbnRvIGhvdXJzLlxuXHRcdFx0cmVzdWx0LnNldEhvdXJzKCByZXN1bHQuZ2V0SG91cnMoKSArIHBhcnNlSW50KGFkanVzdGVkTWluIC8gNjAsIDEwKSwgYWRqdXN0ZWRNaW4gJSA2MCApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufSgpKTtcblxucGFyc2VOZWdhdGl2ZVBhdHRlcm4gPSBmdW5jdGlvbiggdmFsdWUsIG5mLCBuZWdhdGl2ZVBhdHRlcm4gKSB7XG5cdHZhciBuZWcgPSBuZlsgXCItXCIgXSxcblx0XHRwb3MgPSBuZlsgXCIrXCIgXSxcblx0XHRyZXQ7XG5cdHN3aXRjaCAoIG5lZ2F0aXZlUGF0dGVybiApIHtcblx0XHRjYXNlIFwibiAtXCI6XG5cdFx0XHRuZWcgPSBcIiBcIiArIG5lZztcblx0XHRcdHBvcyA9IFwiIFwiICsgcG9zO1xuXHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJuLVwiOlxuXHRcdFx0aWYgKCBlbmRzV2l0aCh2YWx1ZSwgbmVnKSApIHtcblx0XHRcdFx0cmV0ID0gWyBcIi1cIiwgdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIG5lZy5sZW5ndGgpIF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggZW5kc1dpdGgodmFsdWUsIHBvcykgKSB7XG5cdFx0XHRcdHJldCA9IFsgXCIrXCIsIHZhbHVlLnN1YnN0cigwLCB2YWx1ZS5sZW5ndGggLSBwb3MubGVuZ3RoKSBdO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIi0gblwiOlxuXHRcdFx0bmVnICs9IFwiIFwiO1xuXHRcdFx0cG9zICs9IFwiIFwiO1xuXHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCItblwiOlxuXHRcdFx0aWYgKCBzdGFydHNXaXRoKHZhbHVlLCBuZWcpICkge1xuXHRcdFx0XHRyZXQgPSBbIFwiLVwiLCB2YWx1ZS5zdWJzdHIobmVnLmxlbmd0aCkgXTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBzdGFydHNXaXRoKHZhbHVlLCBwb3MpICkge1xuXHRcdFx0XHRyZXQgPSBbIFwiK1wiLCB2YWx1ZS5zdWJzdHIocG9zLmxlbmd0aCkgXTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCIobilcIjpcblx0XHRcdGlmICggc3RhcnRzV2l0aCh2YWx1ZSwgXCIoXCIpICYmIGVuZHNXaXRoKHZhbHVlLCBcIilcIikgKSB7XG5cdFx0XHRcdHJldCA9IFsgXCItXCIsIHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAyKSBdO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIHJldCB8fCBbIFwiXCIsIHZhbHVlIF07XG59O1xuXG4vL1xuLy8gcHVibGljIGluc3RhbmNlIGZ1bmN0aW9uc1xuLy9cblxuR2xvYmFsaXplLnByb3RvdHlwZS5maW5kQ2xvc2VzdEN1bHR1cmUgPSBmdW5jdGlvbiggY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gR2xvYmFsaXplLmZpbmRDbG9zZXN0Q3VsdHVyZS5jYWxsKCB0aGlzLCBjdWx0dXJlU2VsZWN0b3IgKTtcbn07XG5cbkdsb2JhbGl6ZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmVTZWxlY3RvciApIHtcblx0cmV0dXJuIEdsb2JhbGl6ZS5mb3JtYXQuY2FsbCggdGhpcywgdmFsdWUsIGZvcm1hdCwgY3VsdHVyZVNlbGVjdG9yICk7XG59O1xuXG5HbG9iYWxpemUucHJvdG90eXBlLmxvY2FsaXplID0gZnVuY3Rpb24oIGtleSwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gR2xvYmFsaXplLmxvY2FsaXplLmNhbGwoIHRoaXMsIGtleSwgY3VsdHVyZVNlbGVjdG9yICk7XG59O1xuXG5HbG9iYWxpemUucHJvdG90eXBlLnBhcnNlSW50ID0gZnVuY3Rpb24oIHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gR2xvYmFsaXplLnBhcnNlSW50LmNhbGwoIHRoaXMsIHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yICk7XG59O1xuXG5HbG9iYWxpemUucHJvdG90eXBlLnBhcnNlRmxvYXQgPSBmdW5jdGlvbiggdmFsdWUsIHJhZGl4LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiBHbG9iYWxpemUucGFyc2VGbG9hdC5jYWxsKCB0aGlzLCB2YWx1ZSwgcmFkaXgsIGN1bHR1cmVTZWxlY3RvciApO1xufTtcblxuR2xvYmFsaXplLnByb3RvdHlwZS5jdWx0dXJlID0gZnVuY3Rpb24oIGN1bHR1cmVTZWxlY3RvciApIHtcblx0cmV0dXJuIEdsb2JhbGl6ZS5jdWx0dXJlLmNhbGwoIHRoaXMsIGN1bHR1cmVTZWxlY3RvciApO1xufTtcblxuLy9cbi8vIHB1YmxpYyBzaW5nbGV0b24gZnVuY3Rpb25zXG4vL1xuXG5HbG9iYWxpemUuYWRkQ3VsdHVyZUluZm8gPSBmdW5jdGlvbiggY3VsdHVyZU5hbWUsIGJhc2VDdWx0dXJlTmFtZSwgaW5mbyApIHtcblxuXHR2YXIgYmFzZSA9IHt9LFxuXHRcdGlzTmV3ID0gZmFsc2U7XG5cblx0aWYgKCB0eXBlb2YgY3VsdHVyZU5hbWUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0Ly8gY3VsdHVyZU5hbWUgYXJndW1lbnQgaXMgb3B0aW9uYWwgc3RyaW5nLiBJZiBub3Qgc3BlY2lmaWVkLCBhc3N1bWUgaW5mbyBpcyBmaXJzdFxuXHRcdC8vIGFuZCBvbmx5IGFyZ3VtZW50LiBTcGVjaWZpZWQgaW5mbyBkZWVwLWV4dGVuZHMgY3VycmVudCBjdWx0dXJlLlxuXHRcdGluZm8gPSBjdWx0dXJlTmFtZTtcblx0XHRjdWx0dXJlTmFtZSA9IHRoaXMuY3VsdHVyZSgpLm5hbWU7XG5cdFx0YmFzZSA9IHRoaXMuY3VsdHVyZXNbIGN1bHR1cmVOYW1lIF07XG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBiYXNlQ3VsdHVyZU5hbWUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0Ly8gYmFzZUN1bHR1cmVOYW1lIGFyZ3VtZW50IGlzIG9wdGlvbmFsIHN0cmluZy4gSWYgbm90IHNwZWNpZmllZCwgYXNzdW1lIGluZm8gaXMgc2Vjb25kXG5cdFx0Ly8gYXJndW1lbnQuIFNwZWNpZmllZCBpbmZvIGRlZXAtZXh0ZW5kcyBzcGVjaWZpZWQgY3VsdHVyZS5cblx0XHQvLyBJZiBzcGVjaWZpZWQgY3VsdHVyZSBkb2VzIG5vdCBleGlzdCwgY3JlYXRlIGJ5IGRlZXAtZXh0ZW5kaW5nIGRlZmF1bHRcblx0XHRpbmZvID0gYmFzZUN1bHR1cmVOYW1lO1xuXHRcdGlzTmV3ID0gKCB0aGlzLmN1bHR1cmVzWyBjdWx0dXJlTmFtZSBdID09IG51bGwgKTtcblx0XHRiYXNlID0gdGhpcy5jdWx0dXJlc1sgY3VsdHVyZU5hbWUgXSB8fCB0aGlzLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGN1bHR1cmVOYW1lIGFuZCBiYXNlQ3VsdHVyZU5hbWUgc3BlY2lmaWVkLiBBc3N1bWUgYSBuZXcgY3VsdHVyZSBpcyBiZWluZyBjcmVhdGVkXG5cdFx0Ly8gYnkgZGVlcC1leHRlbmRpbmcgYW4gc3BlY2lmaWVkIGJhc2UgY3VsdHVyZVxuXHRcdGlzTmV3ID0gdHJ1ZTtcblx0XHRiYXNlID0gdGhpcy5jdWx0dXJlc1sgYmFzZUN1bHR1cmVOYW1lIF07XG5cdH1cblxuXHR0aGlzLmN1bHR1cmVzWyBjdWx0dXJlTmFtZSBdID0gZXh0ZW5kKHRydWUsIHt9LFxuXHRcdGJhc2UsXG5cdFx0aW5mb1xuXHQpO1xuXHQvLyBNYWtlIHRoZSBzdGFuZGFyZCBjYWxlbmRhciB0aGUgY3VycmVudCBjdWx0dXJlIGlmIGl0J3MgYSBuZXcgY3VsdHVyZVxuXHRpZiAoIGlzTmV3ICkge1xuXHRcdHRoaXMuY3VsdHVyZXNbIGN1bHR1cmVOYW1lIF0uY2FsZW5kYXIgPSB0aGlzLmN1bHR1cmVzWyBjdWx0dXJlTmFtZSBdLmNhbGVuZGFycy5zdGFuZGFyZDtcblx0fVxufTtcblxuR2xvYmFsaXplLmZpbmRDbG9zZXN0Q3VsdHVyZSA9IGZ1bmN0aW9uKCBuYW1lICkge1xuXHR2YXIgbWF0Y2g7XG5cdGlmICggIW5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmluZENsb3Nlc3RDdWx0dXJlKCB0aGlzLmN1bHR1cmVTZWxlY3RvciApIHx8IHRoaXMuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF07XG5cdH1cblx0aWYgKCB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRuYW1lID0gbmFtZS5zcGxpdCggXCIsXCIgKTtcblx0fVxuXHRpZiAoIGlzQXJyYXkobmFtZSkgKSB7XG5cdFx0dmFyIGxhbmcsXG5cdFx0XHRjdWx0dXJlcyA9IHRoaXMuY3VsdHVyZXMsXG5cdFx0XHRsaXN0ID0gbmFtZSxcblx0XHRcdGksIGwgPSBsaXN0Lmxlbmd0aCxcblx0XHRcdHByaW9yaXRpemVkID0gW107XG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRuYW1lID0gdHJpbSggbGlzdFtpXSApO1xuXHRcdFx0dmFyIHByaSwgcGFydHMgPSBuYW1lLnNwbGl0KCBcIjtcIiApO1xuXHRcdFx0bGFuZyA9IHRyaW0oIHBhcnRzWzBdICk7XG5cdFx0XHRpZiAoIHBhcnRzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0cHJpID0gMTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRuYW1lID0gdHJpbSggcGFydHNbMV0gKTtcblx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoXCJxPVwiKSA9PT0gMCApIHtcblx0XHRcdFx0XHRuYW1lID0gbmFtZS5zdWJzdHIoIDIgKTtcblx0XHRcdFx0XHRwcmkgPSBwYXJzZUZsb2F0KCBuYW1lICk7XG5cdFx0XHRcdFx0cHJpID0gaXNOYU4oIHByaSApID8gMCA6IHByaTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRwcmkgPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwcmlvcml0aXplZC5wdXNoKHsgbGFuZzogbGFuZywgcHJpOiBwcmkgfSk7XG5cdFx0fVxuXHRcdHByaW9yaXRpemVkLnNvcnQoZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHRpZiAoIGEucHJpIDwgYi5wcmkgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fSBlbHNlIGlmICggYS5wcmkgPiBiLnByaSApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG5cdFx0Ly8gZXhhY3QgbWF0Y2hcblx0XHRmb3IgKCBpID0gMDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdGxhbmcgPSBwcmlvcml0aXplZFsgaSBdLmxhbmc7XG5cdFx0XHRtYXRjaCA9IGN1bHR1cmVzWyBsYW5nIF07XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gbmV1dHJhbCBsYW5ndWFnZSBtYXRjaFxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0bGFuZyA9IHByaW9yaXRpemVkWyBpIF0ubGFuZztcblx0XHRcdGRvIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGFuZy5sYXN0SW5kZXhPZiggXCItXCIgKTtcblx0XHRcdFx0aWYgKCBpbmRleCA9PT0gLTEgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc3RyaXAgb2ZmIHRoZSBsYXN0IHBhcnQuIGUuZy4gZW4tVVMgPT4gZW5cblx0XHRcdFx0bGFuZyA9IGxhbmcuc3Vic3RyKCAwLCBpbmRleCApO1xuXHRcdFx0XHRtYXRjaCA9IGN1bHR1cmVzWyBsYW5nIF07XG5cdFx0XHRcdGlmICggbWF0Y2ggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAoIDEgKTtcblx0XHR9XG5cblx0XHQvLyBsYXN0IHJlc29ydDogbWF0Y2ggZmlyc3QgY3VsdHVyZSB1c2luZyB0aGF0IGxhbmd1YWdlXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRsYW5nID0gcHJpb3JpdGl6ZWRbIGkgXS5sYW5nO1xuXHRcdFx0Zm9yICggdmFyIGN1bHR1cmVLZXkgaW4gY3VsdHVyZXMgKSB7XG5cdFx0XHRcdHZhciBjdWx0dXJlID0gY3VsdHVyZXNbIGN1bHR1cmVLZXkgXTtcblx0XHRcdFx0aWYgKCBjdWx0dXJlLmxhbmd1YWdlID09IGxhbmcgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1bHR1cmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZWxzZSBpZiAoIHR5cGVvZiBuYW1lID09PSBcIm9iamVjdFwiICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cdHJldHVybiBtYXRjaCB8fCBudWxsO1xufTtcblxuR2xvYmFsaXplLmZvcm1hdCA9IGZ1bmN0aW9uKCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHZhciBjdWx0dXJlID0gdGhpcy5maW5kQ2xvc2VzdEN1bHR1cmUoIGN1bHR1cmVTZWxlY3RvciApO1xuXHRpZiAoIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSApIHtcblx0XHR2YWx1ZSA9IGZvcm1hdERhdGUoIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUgKTtcblx0fVxuXHRlbHNlIGlmICggdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICkge1xuXHRcdHZhbHVlID0gZm9ybWF0TnVtYmVyKCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlICk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcblxuR2xvYmFsaXplLmxvY2FsaXplID0gZnVuY3Rpb24oIGtleSwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gdGhpcy5maW5kQ2xvc2VzdEN1bHR1cmUoIGN1bHR1cmVTZWxlY3RvciApLm1lc3NhZ2VzWyBrZXkgXSB8fFxuXHRcdHRoaXMuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF0ubWVzc2FnZXNbIGtleSBdO1xufTtcblxuR2xvYmFsaXplLnBhcnNlRGF0ZSA9IGZ1bmN0aW9uKCB2YWx1ZSwgZm9ybWF0cywgY3VsdHVyZSApIHtcblx0Y3VsdHVyZSA9IHRoaXMuZmluZENsb3Nlc3RDdWx0dXJlKCBjdWx0dXJlICk7XG5cblx0dmFyIGRhdGUsIHByb3AsIHBhdHRlcm5zO1xuXHRpZiAoIGZvcm1hdHMgKSB7XG5cdFx0aWYgKCB0eXBlb2YgZm9ybWF0cyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGZvcm1hdHMgPSBbIGZvcm1hdHMgXTtcblx0XHR9XG5cdFx0aWYgKCBmb3JtYXRzLmxlbmd0aCApIHtcblx0XHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGZvcm1hdHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHR2YXIgZm9ybWF0ID0gZm9ybWF0c1sgaSBdO1xuXHRcdFx0XHRpZiAoIGZvcm1hdCApIHtcblx0XHRcdFx0XHRkYXRlID0gcGFyc2VFeGFjdCggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSApO1xuXHRcdFx0XHRcdGlmICggZGF0ZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRwYXR0ZXJucyA9IGN1bHR1cmUuY2FsZW5kYXIucGF0dGVybnM7XG5cdFx0Zm9yICggcHJvcCBpbiBwYXR0ZXJucyApIHtcblx0XHRcdGRhdGUgPSBwYXJzZUV4YWN0KCB2YWx1ZSwgcGF0dGVybnNbcHJvcF0sIGN1bHR1cmUgKTtcblx0XHRcdGlmICggZGF0ZSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRhdGUgfHwgbnVsbDtcbn07XG5cbkdsb2JhbGl6ZS5wYXJzZUludCA9IGZ1bmN0aW9uKCB2YWx1ZSwgcmFkaXgsIGN1bHR1cmVTZWxlY3RvciApIHtcblx0cmV0dXJuIHRydW5jYXRlKCBHbG9iYWxpemUucGFyc2VGbG9hdCh2YWx1ZSwgcmFkaXgsIGN1bHR1cmVTZWxlY3RvcikgKTtcbn07XG5cbkdsb2JhbGl6ZS5wYXJzZUZsb2F0ID0gZnVuY3Rpb24oIHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHQvLyByYWRpeCBhcmd1bWVudCBpcyBvcHRpb25hbFxuXHRpZiAoIHR5cGVvZiByYWRpeCAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRjdWx0dXJlU2VsZWN0b3IgPSByYWRpeDtcblx0XHRyYWRpeCA9IDEwO1xuXHR9XG5cblx0dmFyIGN1bHR1cmUgPSB0aGlzLmZpbmRDbG9zZXN0Q3VsdHVyZSggY3VsdHVyZVNlbGVjdG9yICk7XG5cdHZhciByZXQgPSBOYU4sXG5cdFx0bmYgPSBjdWx0dXJlLm51bWJlckZvcm1hdDtcblxuXHRpZiAoIHZhbHVlLmluZGV4T2YoY3VsdHVyZS5udW1iZXJGb3JtYXQuY3VycmVuY3kuc3ltYm9sKSA+IC0xICkge1xuXHRcdC8vIHJlbW92ZSBjdXJyZW5jeSBzeW1ib2xcblx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIGN1bHR1cmUubnVtYmVyRm9ybWF0LmN1cnJlbmN5LnN5bWJvbCwgXCJcIiApO1xuXHRcdC8vIHJlcGxhY2UgZGVjaW1hbCBzZXBlcmF0b3Jcblx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIGN1bHR1cmUubnVtYmVyRm9ybWF0LmN1cnJlbmN5W1wiLlwiXSwgY3VsdHVyZS5udW1iZXJGb3JtYXRbXCIuXCJdICk7XG5cdH1cblxuXHQvL1JlbW92ZSBwZXJjZW50YWdlIGNoYXJhY3RlciBmcm9tIG51bWJlciBzdHJpbmcgYmVmb3JlIHBhcnNpbmdcblx0aWYgKCB2YWx1ZS5pbmRleE9mKGN1bHR1cmUubnVtYmVyRm9ybWF0LnBlcmNlbnQuc3ltYm9sKSA+IC0xKXtcblx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIGN1bHR1cmUubnVtYmVyRm9ybWF0LnBlcmNlbnQuc3ltYm9sLCBcIlwiICk7XG5cdH1cblxuXHQvLyByZW1vdmUgc3BhY2VzOiBsZWFkaW5nLCB0cmFpbGluZyBhbmQgYmV0d2VlbiAtIGFuZCBudW1iZXIuIFVzZWQgZm9yIG5lZ2F0aXZlIGN1cnJlbmN5IHB0LUJSXG5cdHZhbHVlID0gdmFsdWUucmVwbGFjZSggLyAvZywgXCJcIiApO1xuXG5cdC8vIGFsbG93IGluZmluaXR5IG9yIGhleGlkZWNpbWFsXG5cdGlmICggcmVnZXhJbmZpbml0eS50ZXN0KHZhbHVlKSApIHtcblx0XHRyZXQgPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHR9XG5cdGVsc2UgaWYgKCAhcmFkaXggJiYgcmVnZXhIZXgudGVzdCh2YWx1ZSkgKSB7XG5cdFx0cmV0ID0gcGFyc2VJbnQoIHZhbHVlLCAxNiApO1xuXHR9XG5cdGVsc2Uge1xuXG5cdFx0Ly8gZGV0ZXJtaW5lIHNpZ24gYW5kIG51bWJlclxuXHRcdHZhciBzaWduSW5mbyA9IHBhcnNlTmVnYXRpdmVQYXR0ZXJuKCB2YWx1ZSwgbmYsIG5mLnBhdHRlcm5bMF0gKSxcblx0XHRcdHNpZ24gPSBzaWduSW5mb1sgMCBdLFxuXHRcdFx0bnVtID0gc2lnbkluZm9bIDEgXTtcblxuXHRcdC8vICM0NCAtIHRyeSBwYXJzaW5nIGFzIFwiKG4pXCJcblx0XHRpZiAoIHNpZ24gPT09IFwiXCIgJiYgbmYucGF0dGVyblswXSAhPT0gXCIobilcIiApIHtcblx0XHRcdHNpZ25JbmZvID0gcGFyc2VOZWdhdGl2ZVBhdHRlcm4oIHZhbHVlLCBuZiwgXCIobilcIiApO1xuXHRcdFx0c2lnbiA9IHNpZ25JbmZvWyAwIF07XG5cdFx0XHRudW0gPSBzaWduSW5mb1sgMSBdO1xuXHRcdH1cblxuXHRcdC8vIHRyeSBwYXJzaW5nIGFzIFwiLW5cIlxuXHRcdGlmICggc2lnbiA9PT0gXCJcIiAmJiBuZi5wYXR0ZXJuWzBdICE9PSBcIi1uXCIgKSB7XG5cdFx0XHRzaWduSW5mbyA9IHBhcnNlTmVnYXRpdmVQYXR0ZXJuKCB2YWx1ZSwgbmYsIFwiLW5cIiApO1xuXHRcdFx0c2lnbiA9IHNpZ25JbmZvWyAwIF07XG5cdFx0XHRudW0gPSBzaWduSW5mb1sgMSBdO1xuXHRcdH1cblxuXHRcdHNpZ24gPSBzaWduIHx8IFwiK1wiO1xuXG5cdFx0Ly8gZGV0ZXJtaW5lIGV4cG9uZW50IGFuZCBudW1iZXJcblx0XHR2YXIgZXhwb25lbnQsXG5cdFx0XHRpbnRBbmRGcmFjdGlvbixcblx0XHRcdGV4cG9uZW50UG9zID0gbnVtLmluZGV4T2YoIFwiZVwiICk7XG5cdFx0aWYgKCBleHBvbmVudFBvcyA8IDAgKSBleHBvbmVudFBvcyA9IG51bS5pbmRleE9mKCBcIkVcIiApO1xuXHRcdGlmICggZXhwb25lbnRQb3MgPCAwICkge1xuXHRcdFx0aW50QW5kRnJhY3Rpb24gPSBudW07XG5cdFx0XHRleHBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aW50QW5kRnJhY3Rpb24gPSBudW0uc3Vic3RyKCAwLCBleHBvbmVudFBvcyApO1xuXHRcdFx0ZXhwb25lbnQgPSBudW0uc3Vic3RyKCBleHBvbmVudFBvcyArIDEgKTtcblx0XHR9XG5cdFx0Ly8gZGV0ZXJtaW5lIGRlY2ltYWwgcG9zaXRpb25cblx0XHR2YXIgaW50ZWdlcixcblx0XHRcdGZyYWN0aW9uLFxuXHRcdFx0ZGVjU2VwID0gbmZbIFwiLlwiIF0sXG5cdFx0XHRkZWNpbWFsUG9zID0gaW50QW5kRnJhY3Rpb24uaW5kZXhPZiggZGVjU2VwICk7XG5cdFx0aWYgKCBkZWNpbWFsUG9zIDwgMCApIHtcblx0XHRcdGludGVnZXIgPSBpbnRBbmRGcmFjdGlvbjtcblx0XHRcdGZyYWN0aW9uID0gbnVsbDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnRlZ2VyID0gaW50QW5kRnJhY3Rpb24uc3Vic3RyKCAwLCBkZWNpbWFsUG9zICk7XG5cdFx0XHRmcmFjdGlvbiA9IGludEFuZEZyYWN0aW9uLnN1YnN0ciggZGVjaW1hbFBvcyArIGRlY1NlcC5sZW5ndGggKTtcblx0XHR9XG5cdFx0Ly8gaGFuZGxlIGdyb3VwcyAoZS5nLiAxLDAwMCwwMDApXG5cdFx0dmFyIGdyb3VwU2VwID0gbmZbIFwiLFwiIF07XG5cdFx0aW50ZWdlciA9IGludGVnZXIuc3BsaXQoIGdyb3VwU2VwICkuam9pbiggXCJcIiApO1xuXHRcdHZhciBhbHRHcm91cFNlcCA9IGdyb3VwU2VwLnJlcGxhY2UoIC9cXHUwMEEwL2csIFwiIFwiICk7XG5cdFx0aWYgKCBncm91cFNlcCAhPT0gYWx0R3JvdXBTZXAgKSB7XG5cdFx0XHRpbnRlZ2VyID0gaW50ZWdlci5zcGxpdCggYWx0R3JvdXBTZXAgKS5qb2luKCBcIlwiICk7XG5cdFx0fVxuXHRcdC8vIGJ1aWxkIGEgbmF0aXZlbHkgcGFyc2FibGUgbnVtYmVyIHN0cmluZ1xuXHRcdHZhciBwID0gc2lnbiArIGludGVnZXI7XG5cdFx0aWYgKCBmcmFjdGlvbiAhPT0gbnVsbCApIHtcblx0XHRcdHAgKz0gXCIuXCIgKyBmcmFjdGlvbjtcblx0XHR9XG5cdFx0aWYgKCBleHBvbmVudCAhPT0gbnVsbCApIHtcblx0XHRcdC8vIGV4cG9uZW50IGl0c2VsZiBtYXkgaGF2ZSBhIG51bWJlciBwYXR0ZXJuZFxuXHRcdFx0dmFyIGV4cFNpZ25JbmZvID0gcGFyc2VOZWdhdGl2ZVBhdHRlcm4oIGV4cG9uZW50LCBuZiwgXCItblwiICk7XG5cdFx0XHRwICs9IFwiZVwiICsgKCBleHBTaWduSW5mb1swXSB8fCBcIitcIiApICsgZXhwU2lnbkluZm9bIDEgXTtcblx0XHR9XG5cdFx0aWYgKCByZWdleFBhcnNlRmxvYXQudGVzdChwKSApIHtcblx0XHRcdHJldCA9IHBhcnNlRmxvYXQoIHAgKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJldDtcbn07XG5cbkdsb2JhbGl6ZS5jdWx0dXJlID0gZnVuY3Rpb24oIGN1bHR1cmVTZWxlY3RvciApIHtcblx0Ly8gc2V0dGVyXG5cdGlmICggdHlwZW9mIGN1bHR1cmVTZWxlY3RvciAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHR0aGlzLmN1bHR1cmVTZWxlY3RvciA9IGN1bHR1cmVTZWxlY3Rvcjtcblx0fVxuXHQvLyBnZXR0ZXJcblx0cmV0dXJuIHRoaXMuZmluZENsb3Nlc3RDdWx0dXJlKCBjdWx0dXJlU2VsZWN0b3IgKSB8fCB0aGlzLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdO1xufTtcblxufSggdGhpcyApKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoXCIuL3V0aWwvYmFiZWxIZWxwZXJzLmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvaW52YXJpYW50XCIpO1xuXG5mdW5jdGlvbiBjdXN0b21Qcm9wVHlwZShoYW5kbGVyLCBwcm9wVHlwZSwgbmFtZSkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbikge1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXByb3BzW2hhbmRsZXJdKSByZXR1cm4gbmV3IEVycm9yKFwiWW91IGhhdmUgcHJvdmlkZWQgYSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIHRvIFwiICsgXCJgXCIgKyBuYW1lICsgXCJgIHdpdGhvdXQgYW4gYFwiICsgaGFuZGxlciArIFwiYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBcIiArIFwiSWYgdGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgXCIgKyBkZWZhdWx0S2V5KHByb3BOYW1lKSArIFwiYC4gT3RoZXJ3aXNlLCBzZXQgYFwiICsgaGFuZGxlciArIFwiYFwiKTtcblxuICAgICAgcmV0dXJuIHByb3BUeXBlICYmIHByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSwgbmFtZSwgbG9jYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHZlcnNpb24gPSBSZWFjdC52ZXJzaW9uLnNwbGl0KFwiLlwiKS5tYXAocGFyc2VGbG9hdCk7XG5cbmZ1bmN0aW9uIGdldFR5cGUoY29tcG9uZW50KSB7XG4gIGlmICh2ZXJzaW9uWzBdID09PSAwICYmIHZlcnNpb25bMV0gPj0gMTMpIHJldHVybiBjb21wb25lbnQ7XG5cbiAgcmV0dXJuIGNvbXBvbmVudC50eXBlO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5rTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lID09PSBcInZhbHVlXCIgPyBcInZhbHVlTGlua1wiIDogbmFtZSA9PT0gXCJjaGVja2VkXCIgPyBcImNoZWNrZWRMaW5rXCIgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb21wb25lbnQsIGNvbnRyb2xsZWRWYWx1ZXMsIHRhcHMpIHtcbiAgdmFyIG5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIixcbiAgICAgIHR5cGVzID0ge307XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnZXRUeXBlKENvbXBvbmVudCkucHJvcFR5cGVzKSB7XG4gICAgdHlwZXMgPSB0cmFuc2Zvcm0oY29udHJvbGxlZFZhbHVlcywgZnVuY3Rpb24gKG9iaiwgaGFuZGxlciwgcHJvcCkge1xuICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKENvbXBvbmVudCkucHJvcFR5cGVzW3Byb3BdO1xuXG4gICAgICBpbnZhcmlhbnQodHlwZW9mIGhhbmRsZXIgPT09IFwic3RyaW5nXCIgJiYgaGFuZGxlci50cmltKCkubGVuZ3RoLCBcIlVuY29udHJvbGxhYmxlIC0gWyVzXTogdGhlIHByb3AgYCVzYCBuZWVkcyBhIHZhbGlkIGhhbmRsZXIga2V5IG5hbWUgaW4gb3JkZXIgdG8gbWFrZSBpdCB1bmNvbnRyb2xsYWJsZVwiLCBDb21wb25lbnQuZGlzcGxheU5hbWUsIHByb3ApO1xuXG4gICAgICBvYmpbcHJvcF0gPSBjdXN0b21Qcm9wVHlwZShoYW5kbGVyLCB0eXBlLCBDb21wb25lbnQuZGlzcGxheU5hbWUpO1xuICAgICAgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvYmpbZGVmYXVsdEtleShwcm9wKV0gPSB0eXBlO1xuICAgICAgfVxuICAgIH0sIHt9KTtcbiAgfVxuXG4gIG5hbWUgPSBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKTtcblxuICB0YXBzID0gdGFwcyB8fCB7fTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6IFwiVW5jb250cm9sbGVkXCIgKyBuYW1lLFxuXG4gICAgcHJvcFR5cGVzOiB0eXBlcyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoY29udHJvbGxlZFZhbHVlcyk7XG5cbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oa2V5cywgZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHtcbiAgICAgICAgc3RhdGVba2V5XSA9IHByb3BzW2RlZmF1bHRLZXkoa2V5KV07XG4gICAgICB9LCB7fSk7XG4gICAgfSxcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgLy9sZXQgdGhlIHNldFN0YXRlIHRyaWdnZXIgdGhlIHVwZGF0ZVxuICAgICAgcmV0dXJuICF0aGlzLl9ub3RpZnlpbmc7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB2YWx1ZUxpbmsgPSBfcHJvcHMudmFsdWVMaW5rO1xuICAgICAgdmFyIGNoZWNrZWRMaW5rID0gX3Byb3BzLmNoZWNrZWRMaW5rO1xuICAgICAgdmFyIHByb3BzID0gYmFiZWxIZWxwZXJzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1widmFsdWVMaW5rXCIsIFwiY2hlY2tlZExpbmtcIl0pO1xuXG4gICAgICBlYWNoKGNvbnRyb2xsZWRWYWx1ZXMsIGZ1bmN0aW9uIChoYW5kbGUsIHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBsaW5rUHJvcE5hbWUgPSBnZXRMaW5rTmFtZShwcm9wTmFtZSksXG4gICAgICAgICAgICBwcm9wID0gX3RoaXMucHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICAgIGlmIChsaW5rUHJvcE5hbWUgJiYgIWlzUHJvcChfdGhpcy5wcm9wcywgcHJvcE5hbWUpICYmIGlzUHJvcChfdGhpcy5wcm9wcywgbGlua1Byb3BOYW1lKSkge1xuICAgICAgICAgIHByb3AgPSBfdGhpcy5wcm9wc1tsaW5rUHJvcE5hbWVdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UHJvcHNbcHJvcE5hbWVdID0gcHJvcCAhPT0gdW5kZWZpbmVkID8gcHJvcCA6IF90aGlzLnN0YXRlW3Byb3BOYW1lXTtcblxuICAgICAgICBuZXdQcm9wc1toYW5kbGVdID0gc2V0QW5kTm90aWZ5LmJpbmQoX3RoaXMsIHByb3BOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdQcm9wcyA9IGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIG5ld1Byb3BzKTtcblxuICAgICAgLy9jb25zb2xlLmxvZygncHJvcHM6ICcsIG5ld1Byb3BzKVxuICAgICAgZWFjaCh0YXBzLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5ld1Byb3BzW2tleV0gPSBjaGFpbihfdGhpcywgdmFsLCBuZXdQcm9wc1trZXldKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIG5ld1Byb3BzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldEFuZE5vdGlmeShwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaW5rTmFtZSA9IGdldExpbmtOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgaGFuZGxlciA9IHRoaXMucHJvcHNbY29udHJvbGxlZFZhbHVlc1twcm9wTmFtZV1dO1xuICAgIC8vLCBjb250cm9sbGVkID0gaGFuZGxlciAmJiBpc1Byb3AodGhpcy5wcm9wcywgcHJvcE5hbWUpO1xuXG4gICAgaWYgKGxpbmtOYW1lICYmIGlzUHJvcCh0aGlzLnByb3BzLCBsaW5rTmFtZSkgJiYgIWhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3BzW2xpbmtOYW1lXS5yZXF1ZXN0Q2hhbmdlXG4gICAgICAvL3Byb3BOYW1lID0gcHJvcE5hbWUgPT09ICd2YWx1ZUxpbmsnID8gJ3ZhbHVlJyA6ICdjaGVja2VkJ1xuICAgICAgO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICB0aGlzLl9ub3RpZnlpbmcgPSB0cnVlO1xuICAgICAgaGFuZGxlci5jYWxsLmFwcGx5KGhhbmRsZXIsIFt0aGlzLCB2YWx1ZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIHRoaXMuX25vdGlmeWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2V0U3RhdGUgPSB7fTtcbiAgICAgIF9zZXRTdGF0ZVtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBfc2V0U3RhdGU7XG4gICAgfSkoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Byb3AocHJvcHMsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcHNbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEtleShrZXkpIHtcbiAgcmV0dXJuIFwiZGVmYXVsdFwiICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gY2hhaW4odGhpc0FyZywgYSwgYikge1xuICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGEgJiYgYS5jYWxsLmFwcGx5KGEsIFt0aGlzQXJnXS5jb25jYXQoYXJncykpO1xuICAgIGIgJiYgYi5jYWxsLmFwcGx5KGIsIFt0aGlzQXJnXS5jb25jYXQoYXJncykpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0ob2JqLCBjYiwgc2VlZCkge1xuICBlYWNoKG9iaiwgY2IuYmluZChudWxsLCBzZWVkID0gc2VlZCB8fCAoQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fSkpKTtcbiAgcmV0dXJuIHNlZWQ7XG59XG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYiwgdGhpc0FyZykge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLmZvckVhY2goY2IsIHRoaXNBcmcpO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChoYXMob2JqLCBrZXkpKSBjYi5jYWxsKHRoaXNBcmcsIG9ialtrZXldLCBrZXksIG9iaik7XG59XG5cbmZ1bmN0aW9uIGhhcyhvLCBrKSB7XG4gIHJldHVybiBvID8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspIDogZmFsc2U7XG59XG4vL3JldHVybiAhY29udHJvbGxlZCIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdC5iYWJlbEhlbHBlcnMgPSB7fSk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgdmFyIGJhYmVsSGVscGVycyA9IGdsb2JhbDtcblxuICBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5fZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59KSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbihhcmcpIHsgcmV0dXJuIGFyZzsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGdldEFjdGl2ZUVsZW1lbnRcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuLyoqXG4gKiBTYW1lIGFzIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYnV0IHdyYXBzIGluIGEgdHJ5LWNhdGNoIGJsb2NrLiBJbiBJRSBpdCBpc1xuICogbm90IHNhZmUgdG8gY2FsbCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGlmIHRoZXJlIGlzIG5vdGhpbmcgZm9jdXNlZC5cbiAqXG4gKiBUaGUgYWN0aXZlRWxlbWVudCB3aWxsIGJlIG51bGwgb25seSBpZiB0aGUgZG9jdW1lbnQgYm9keSBpcyBub3QgeWV0IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoKSAvKj9ET01FbGVtZW50Ki8ge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFjdGl2ZUVsZW1lbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKFwiLi9lbXB0eUZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0ICkge2ZvciAodmFyIGFyZ3M9W10sJF9fMD0yLCRfXzE9YXJndW1lbnRzLmxlbmd0aDskX18wPCRfXzE7JF9fMCsrKSBhcmdzLnB1c2goYXJndW1lbnRzWyRfXzBdKTtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAvXltzXFxXXSokLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSAge3JldHVybiBhcmdzW2FyZ0luZGV4KytdO30pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXN0ZXIgZnJvbSBcIi4vbWFzdGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBNYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb250ZW50KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXN0ZXIgZnJvbSBcIi4vbWFzdGVyXCI7XG5cblxudmFyIGNvbG9ycyA9IFsnb3JhbmdlJywgJ3JlZCcsICdibHVlJywgJ3B1cnBsZSddO1xuY29uc3QgQ2FsZW5kYXIgPSByZXF1aXJlKCdyZWFjdC13aWRnZXRzJykuQ2FsZW5kYXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIE1hc3RlciB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtjb2xvcnM6IFtdfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtjb2xvcnM6IFsnb3JhbmdlJywgJ3JlZCcsICdibHVlJywgJ3B1cnBsZSddfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgfVxuXG4gICAgY29udGVudCAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxodG1sPlxuICAgICAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3MvY29yZS5jc3NcIiBtZWRpYT1cImFsbFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3MvcmVhY3Qtd2lkZ2V0cy5jc3NcIiBtZWRpYT1cImFsbFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3MvdmFyaWFibGVzLmNzc1wiIG1lZGlhPVwiYWxsXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Gb288L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvaGVhZD5cblxuICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9e3RoaXMucHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWFzdGVyIHBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPnt0aGlzLmNvbnRlbnQoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9qcy9kaXN0L3ZlbmRvci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvc3RhdGljL2pzL2Rpc3QvZGVtby5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvaHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
