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
        this.state = {};
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9uYXMvUHJvamVjdHMvRGphbmdvL2RqYW5nby1qc3gvZGVtby9zdGF0aWMvanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvQ2FsZW5kYXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvQ2VudHVyeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9Db21ib2JveC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9Db21ib2JveElucHV0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0RhdGVJbnB1dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9EYXRlVGltZVBpY2tlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9EZWNhZGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvRHJvcGRvd25MaXN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0Zvb3Rlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9IZWFkZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9MaXN0R3JvdXBhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL0xpc3RPcHRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTW9udGguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTXVsdGlzZWxlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTXVsdGlzZWxlY3RJbnB1dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9NdWx0aXNlbGVjdFRhZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTnVtYmVySW5wdXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvTnVtYmVyUGlja2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1BvcHVwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1JlcGxhY2VUcmFuc2l0aW9uR3JvdXAuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvU2VsZWN0TGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9TbGlkZVRyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvVGltZUxpc3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvV2lkZ2V0QnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL1llYXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvY29uZmlndXJlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL2dsb2JhbGl6ZS1sb2NhbGl6ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9EYXRhRmlsdGVyTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL0xpc3RNb3ZlbWVudE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9Qb3B1cFNjcm9sbFRvTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL1B1cmVSZW5kZXJNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi9taXhpbnMvVGltZW91dE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL21peGlucy9XaWRnZXRNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL18uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9iYWJlbEhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9jYXJldC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2NvbXBhdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2NvbmZpZ3VyYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9kYXRlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL2xpYi91dGlsL2RvbS9hbmltYXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvZG9tL3N1cHBvcnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9maWx0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC9sb2NhbGl6ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvcHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbGliL3V0aWwvcmVwZWF0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9saWIvdXRpbC92YWxpZGF0ZUxpc3RJbnRlcmZhY2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kYXRlLWFyaXRobWV0aWMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXZlbnRzL29mZi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvaGVpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L2lzV2luZG93LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9xdWVyeS9zY3JvbGxQYXJlbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvcXVlcnkvc2Nyb2xsVG9wLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3F1ZXJ5L3dpZHRoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvc3R5bGUvcmVtb3ZlU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtd2lkZ2V0cy9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3Njcm9sbFRvLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL2dsb2JhbGl6ZS9saWIvZ2xvYmFsaXplLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXdpZGdldHMvbm9kZV9tb2R1bGVzL3VuY29udHJvbGxhYmxlL2xpYi91bmNvbnRyb2xsYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC13aWRnZXRzL25vZGVfbW9kdWxlcy91bmNvbnRyb2xsYWJsZS9saWIvdXRpbC9iYWJlbEhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2dldEFjdGl2ZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIi9Vc2Vycy9qb25hcy9Qcm9qZWN0cy9EamFuZ28vZGphbmdvLWpzeC9kZW1vL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwiL1VzZXJzL2pvbmFzL1Byb2plY3RzL0RqYW5nby9kamFuZ28tanN4L2RlbW8vc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL21hc3Rlci5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3FCQ0FrQixPQUFPOzs7O2lDQUNSLHVCQUF1Qjs7OztrQ0FDdEIsd0JBQXdCOzs7O0FBRzFDLG1CQUFNLE1BQU0sQ0FDUixzRUFBUSxFQUNSLFFBQVEsQ0FDWCxDQUFDOzs7QUNSRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbGpEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkMzRGtCLE9BQU87Ozs7c0JBQ04sVUFBVTs7OztJQUdSLEtBQUs7Y0FBTCxLQUFLOztBQUNYLGFBRE0sS0FBSyxDQUNWLEtBQUssRUFBRTs4QkFERixLQUFLOztBQUVsQixtQ0FGYSxLQUFLLDZDQUVaLEtBQUssRUFBRTtLQUNoQjs7aUJBSGdCLEtBQUs7O2VBS2YsbUJBQUc7QUFDTixtQkFDSTs7OzthQUFjLENBQ2pCO1NBQ0o7OztXQVRnQixLQUFLOzs7cUJBQUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDSlIsT0FBTzs7OztzQkFDTixVQUFVOzs7O0FBRzdCLElBQUksTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQTs7SUFFN0IsSUFBSTtjQUFKLElBQUk7O0FBQ1QsYUFESyxJQUFJLENBQ1IsS0FBSyxFQUFFOzhCQURILElBQUk7O0FBRWpCLG1DQUZhLElBQUksNkNBRVgsS0FBSyxFQUFFO0FBQ2IsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQUpnQixJQUFJOztlQU1ILDZCQUFHLEVBRXBCOzs7ZUFFTyxtQkFBRztBQUNQLG1CQUNJOzs7Z0JBQ0k7Ozs7aUJBQWE7Z0JBQ2IsaUNBQUMsUUFBUSxPQUFHO2FBQ1YsQ0FDVDtTQUNKOzs7V0FqQmdCLElBQUk7OztxQkFBSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNQUCxPQUFPOzs7O0lBR0osTUFBTTtjQUFOLE1BQU07O0FBQ1osYUFETSxNQUFNLENBQ1gsS0FBSyxFQUFFOzhCQURGLE1BQU07O0FBRW5CLG1DQUZhLE1BQU0sNkNBRWIsS0FBSyxFQUFFO0tBQ2hCOztpQkFIZ0IsTUFBTTs7ZUFLakIsa0JBQUc7QUFDTCxtQkFDSTs7O2dCQUNJOzs7b0JBQ0ksMkNBQU0sT0FBTyxFQUFDLE9BQU8sR0FBRztvQkFDeEI7Ozs7cUJBQWtCO2lCQUNmO2dCQUVQLDJDQUFNLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQyxHQUFHO2dCQUNuQzs7O29CQUNJOzs7d0JBQ0k7Ozs7eUJBQW9CO3dCQUNwQjs7OEJBQUssRUFBRSxFQUFDLEtBQUs7NEJBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTt5QkFBTztxQkFDbEM7b0JBRU4sNkNBQVEsSUFBSSxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBQywyQkFBMkIsR0FBVTtvQkFDeEUsNkNBQVEsSUFBSSxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBQyx5QkFBeUIsR0FBVTtpQkFDbkU7YUFDSixDQUNWO1NBQ0o7OztXQXpCZ0IsTUFBTTtHQUFTLG1CQUFNLFNBQVM7O3FCQUE5QixNQUFNOzs7O0FDSDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9zcmMvY29tcG9uZW50cy9ob21lXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vc3JjL2NvbXBvbmVudHMvYWJvdXRcIjtcblxuXG5SZWFjdC5yZW5kZXIoXG4gICAgPEhvbWUgLz4sXG4gICAgZG9jdW1lbnRcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfVklFVywgX09QUE9TSVRFX0RJUkVDVElPTiwgX01VTFRJUExJRVI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG52YXIgX0hlYWRlciA9IHJlcXVpcmUoJy4vSGVhZGVyJyk7XG5cbnZhciBfSGVhZGVyMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hlYWRlcik7XG5cbnZhciBfRm9vdGVyID0gcmVxdWlyZSgnLi9Gb290ZXInKTtcblxudmFyIF9Gb290ZXIyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9vdGVyKTtcblxudmFyIF9Nb250aCA9IHJlcXVpcmUoJy4vTW9udGgnKTtcblxudmFyIF9Nb250aDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb250aCk7XG5cbnZhciBfWWVhciA9IHJlcXVpcmUoJy4vWWVhcicpO1xuXG52YXIgX1llYXIyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfWWVhcik7XG5cbnZhciBfRGVjYWRlID0gcmVxdWlyZSgnLi9EZWNhZGUnKTtcblxudmFyIF9EZWNhZGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfRGVjYWRlKTtcblxudmFyIF9DZW50dXJ5ID0gcmVxdWlyZSgnLi9DZW50dXJ5Jyk7XG5cbnZhciBfQ2VudHVyeTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DZW50dXJ5KTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbmZpZ3VyYXRpb24pO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyk7XG5cbnZhciBfdW5jb250cm9sbGFibGUyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5jb250cm9sbGFibGUpO1xuXG52YXIgX1NsaWRlVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vU2xpZGVUcmFuc2l0aW9uJyk7XG5cbnZhciBfU2xpZGVUcmFuc2l0aW9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRlVHJhbnNpdGlvbik7XG5cbnZhciBfdXRpbERhdGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGVzJyk7XG5cbnZhciBfdXRpbERhdGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxEYXRlcyk7XG5cbnZhciBfdXRpbENvbnN0YW50cyA9IHJlcXVpcmUoJy4vdXRpbC9jb25zdGFudHMnKTtcblxudmFyIF91dGlsQ29uc3RhbnRzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb25zdGFudHMpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbi8vdmFsdWVzLCBvbWl0XG5cbnZhciBkaXIgPSBfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5kaXJlY3Rpb25zLFxuICAgIHZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59LFxuICAgIGludmVydCA9IGZ1bmN0aW9uIGludmVydChvYmopIHtcbiAgcmV0dXJuIF91dGlsXzJbJ2RlZmF1bHQnXS50cmFuc2Zvcm0ob2JqLCBmdW5jdGlvbiAobywgdmFsLCBrZXkpIHtcbiAgICBvW3ZhbF0gPSBrZXk7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZSxcbiAgICB2aWV3cyA9IF91dGlsQ29uc3RhbnRzMlsnZGVmYXVsdCddLmNhbGVuZGFyVmlld3MsXG4gICAgVklFV19PUFRJT05TID0gdmFsdWVzKHZpZXdzKSxcbiAgICBBTFRfVklFVyA9IGludmVydChfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5jYWxlbmRhclZpZXdIaWVyYXJjaHkpLFxuICAgIE5FWFRfVklFVyA9IF91dGlsQ29uc3RhbnRzMlsnZGVmYXVsdCddLmNhbGVuZGFyVmlld0hpZXJhcmNoeSxcbiAgICBWSUVXX1VOSVQgPSBfdXRpbENvbnN0YW50czJbJ2RlZmF1bHQnXS5jYWxlbmRhclZpZXdVbml0cyxcbiAgICBWSUVXID0gKF9WSUVXID0ge30sIF9WSUVXW3ZpZXdzLk1PTlRIXSA9IF9Nb250aDJbJ2RlZmF1bHQnXSwgX1ZJRVdbdmlld3MuWUVBUl0gPSBfWWVhcjJbJ2RlZmF1bHQnXSwgX1ZJRVdbdmlld3MuREVDQURFXSA9IF9EZWNhZGUyWydkZWZhdWx0J10sIF9WSUVXW3ZpZXdzLkNFTlRVUlldID0gX0NlbnR1cnkyWydkZWZhdWx0J10sIF9WSUVXKTtcblxudmFyIEFSUk9XU19UT19ESVJFQ1RJT04gPSB7XG4gIEFycm93RG93bjogZGlyLkRPV04sXG4gIEFycm93VXA6IGRpci5VUCxcbiAgQXJyb3dSaWdodDogZGlyLlJJR0hULFxuICBBcnJvd0xlZnQ6IGRpci5MRUZUXG59O1xuXG52YXIgT1BQT1NJVEVfRElSRUNUSU9OID0gKF9PUFBPU0lURV9ESVJFQ1RJT04gPSB7fSwgX09QUE9TSVRFX0RJUkVDVElPTltkaXIuTEVGVF0gPSBkaXIuUklHSFQsIF9PUFBPU0lURV9ESVJFQ1RJT05bZGlyLlJJR0hUXSA9IGRpci5MRUZULCBfT1BQT1NJVEVfRElSRUNUSU9OKTtcblxudmFyIE1VTFRJUExJRVIgPSAoX01VTFRJUExJRVIgPSB7fSwgX01VTFRJUExJRVJbdmlld3MuWUVBUl0gPSAxLCBfTVVMVElQTElFUlt2aWV3cy5ERUNBREVdID0gMTAsIF9NVUxUSVBMSUVSW3ZpZXdzLkNFTlRVUlldID0gMTAwLCBfTVVMVElQTElFUik7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMsIGYpIHtcbiAgcmV0dXJuIHByb3BzW2YgKyAnRm9ybWF0J10gfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHNbZl07XG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG5cbiAgbWluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1heDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuXG4gIGluaXRpYWxWaWV3OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFZJRVdfT1BUSU9OUyksXG5cbiAgZmluYWxWaWV3OiBmdW5jdGlvbiBmaW5hbFZpZXcocHJvcHMsIHByb3BuYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGVyciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoVklFV19PUFRJT05TKShwcm9wcywgcHJvcG5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgaWYgKGVycikgcmV0dXJuIGVycjtcbiAgICBpZiAoVklFV19PUFRJT05TLmluZGV4T2YocHJvcHNbcHJvcG5hbWVdKSA8IFZJRVdfT1BUSU9OUy5pbmRleE9mKHByb3BzLmluaXRpYWxWaWV3KSkgcmV0dXJuIG5ldyBFcnJvcigoJ1RoZSBgJyArIHByb3BuYW1lICsgJ2AgcHJvcDogYCcgKyBwcm9wc1twcm9wbmFtZV0gKyAnYCBjYW5ub3QgYmUgXFwnbG93ZXJcXCcgdGhhbiB0aGUgYGluaXRpYWxWaWV3YFxcbiAgICAgICAgcHJvcC4gVGhpcyBjcmVhdGVzIGEgcmFuZ2UgdGhhdCBjYW5ub3QgYmUgcmVuZGVyZWQuJykucmVwbGFjZSgvXFxuXFx0L2csICcnKSk7XG4gIH0sXG5cbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gIHJlYWRPbmx5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncmVhZE9ubHknXSldKSxcblxuICBjdWx0dXJlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICBmb290ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICBkYXlDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICBoZWFkZXJGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIGZvb3RlckZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcblxuICBkYXlGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIGRhdGVGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIG1vbnRoRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICB5ZWFyRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBkZWNhZGVGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG4gIGNlbnR1cnlGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG5cbiAgbWVzc2FnZXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vdmVCYWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtb3ZlRm9yd2FyZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn07XG5cbnZhciBDYWxlbmRhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdDYWxlbmRhcicsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvVGltZW91dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1B1cmVSZW5kZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9SdGxQYXJlbnRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5SYW5nZVZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICB2aWV3OiB0aGlzLnByb3BzLmluaXRpYWxWaWV3IHx8ICdtb250aCcsXG4gICAgICBjdXJyZW50RGF0ZTogdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiB0aGlzLmluUmFuZ2VWYWx1ZShuZXcgRGF0ZSgpKVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBtaW46IG5ldyBEYXRlKDE5MDAsIDAsIDEpLFxuICAgICAgbWF4OiBuZXcgRGF0ZSgyMDk5LCAxMSwgMzEpLFxuXG4gICAgICBpbml0aWFsVmlldzogJ21vbnRoJyxcbiAgICAgIGZpbmFsVmlldzogJ2NlbnR1cnknLFxuXG4gICAgICB0YWJJbmRleDogJzAnLFxuICAgICAgZm9vdGVyOiBmYWxzZSxcblxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdjYWxlbmRhcicsXG4gICAgICBtZXNzYWdlczogbXNncyh7fSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGJvdHRvbSA9IFZJRVdfT1BUSU9OUy5pbmRleE9mKG5leHRQcm9wcy5pbml0aWFsVmlldyksXG4gICAgICAgIHRvcCA9IFZJRVdfT1BUSU9OUy5pbmRleE9mKG5leHRQcm9wcy5maW5hbFZpZXcpLFxuICAgICAgICBjdXJyZW50ID0gVklFV19PUFRJT05TLmluZGV4T2YodGhpcy5zdGF0ZS52aWV3KSxcbiAgICAgICAgdmlldyA9IHRoaXMuc3RhdGUudmlldyxcbiAgICAgICAgdmFsID0gdGhpcy5pblJhbmdlVmFsdWUobmV4dFByb3BzLnZhbHVlKTtcblxuICAgIGlmIChjdXJyZW50IDwgYm90dG9tKSB0aGlzLnNldFN0YXRlKHsgdmlldzogdmlldyA9IG5leHRQcm9wcy5pbml0aWFsVmlldyB9KTtlbHNlIGlmIChjdXJyZW50ID4gdG9wKSB0aGlzLnNldFN0YXRlKHsgdmlldzogdmlldyA9IG5leHRQcm9wcy5maW5hbFZpZXcgfSk7XG5cbiAgICAvL2lmIHRoZSB2YWx1ZSBjaGFuZ2VzIHJlc2V0IHZpZXdzIHRvIHRoZSBuZXcgb25lXG4gICAgaWYgKCFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVxKHZhbCwgZGF0ZU9yTnVsbCh0aGlzLnByb3BzLnZhbHVlKSwgVklFV19VTklUW3ZpZXddKSkgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50RGF0ZTogdmFsID8gbmV3IERhdGUodmFsKSA6IG5ldyBEYXRlKClcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBmb290ZXJGb3JtYXQgPSBfcHJvcHMuZm9vdGVyRm9ybWF0O1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHk7XG4gICAgdmFyIGZpbmFsVmlldyA9IF9wcm9wcy5maW5hbFZpZXc7XG4gICAgdmFyIGZvb3RlciA9IF9wcm9wcy5mb290ZXI7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBtaW4gPSBfcHJvcHMubWluO1xuICAgIHZhciBtYXggPSBfcHJvcHMubWF4O1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzLmN1bHR1cmU7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB2aWV3ID0gX3N0YXRlLnZpZXc7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gX3N0YXRlLmN1cnJlbnREYXRlO1xuICAgIHZhciBzbGlkZURpcmVjdGlvbiA9IF9zdGF0ZS5zbGlkZURpcmVjdGlvbjtcbiAgICB2YXIgZm9jdXNlZCA9IF9zdGF0ZS5mb2N1c2VkO1xuXG4gICAgdmFyIFZpZXcgPSBWSUVXW3ZpZXddLFxuICAgICAgICB1bml0ID0gVklFV19VTklUW3ZpZXddLFxuICAgICAgICB0b2RheXNEYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgdG9kYXlOb3RJblJhbmdlID0gIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZSh0b2RheXNEYXRlLCBtaW4sIG1heCwgdmlldyk7XG5cbiAgICB1bml0ID0gdW5pdCA9PT0gJ2RheScgPyAnZGF0ZScgOiB1bml0O1xuXG4gICAgdmFyIHZpZXdJRCA9IHRoaXMuX2lkKCdfY2FsZW5kYXInKSxcbiAgICAgICAgbGFiZWxJRCA9IHRoaXMuX2lkKCdfY2FsZW5kYXJfbGFiZWwnKSxcbiAgICAgICAga2V5ID0gdmlldyArICdfJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J11bdmlld10oY3VycmVudERhdGUpO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpLFxuICAgICAgICB2aWV3UHJvcHMgPSBfdXRpbF8yWydkZWZhdWx0J10ucGljayh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS50eXBlKFZpZXcpLnByb3BUeXBlcykpO1xuXG4gICAgdmFyIGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCByZWFkT25seTtcblxuICAgIG1lc3NhZ2VzID0gbXNncyh0aGlzLnByb3BzLm1lc3NhZ2VzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ2dyb3VwJyxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLl9rZXlEb3duLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctY2FsZW5kYXInLCAncnctd2lkZ2V0Jywge1xuICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGZvY3VzZWQsXG4gICAgICAgICAgJ3J3LXN0YXRlLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgJ3J3LXN0YXRlLXJlYWRvbmx5JzogcmVhZE9ubHksXG4gICAgICAgICAgJ3J3LXJ0bCc6IHRoaXMuaXNSdGwoKVxuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfSGVhZGVyMlsnZGVmYXVsdCddLCB7XG4gICAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbCgpLFxuICAgICAgICBsYWJlbElkOiBsYWJlbElELFxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIHVwRGlzYWJsZWQ6IGlzRGlzYWJsZWQgfHwgdmlldyA9PT0gZmluYWxWaWV3LFxuICAgICAgICBwcmV2RGlzYWJsZWQ6IGlzRGlzYWJsZWQgfHwgIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZSh0aGlzLm5leHREYXRlKGRpci5MRUZUKSwgbWluLCBtYXgsIHZpZXcpLFxuICAgICAgICBuZXh0RGlzYWJsZWQ6IGlzRGlzYWJsZWQgfHwgIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZSh0aGlzLm5leHREYXRlKGRpci5SSUdIVCksIG1pbiwgbWF4LCB2aWV3KSxcbiAgICAgICAgb25WaWV3Q2hhbmdlOiB0aGlzLm5hdmlnYXRlLmJpbmQobnVsbCwgZGlyLlVQLCBudWxsKSxcbiAgICAgICAgb25Nb3ZlTGVmdDogdGhpcy5uYXZpZ2F0ZS5iaW5kKG51bGwsIGRpci5MRUZULCBudWxsKSxcbiAgICAgICAgb25Nb3ZlUmlnaHQ6IHRoaXMubmF2aWdhdGUuYmluZChudWxsLCBkaXIuUklHSFQsIG51bGwpXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfU2xpZGVUcmFuc2l0aW9uMlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiAnYW5pbWF0aW9uJyxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICAgICAgICBvbkFuaW1hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1cyh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFZpZXcsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgdmlld1Byb3BzLCB7XG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgaWQ6IHZpZXdJRCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdydy1jYWxlbmRhci1ncmlkJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJRCxcbiAgICAgICAgICB0b2RheTogdG9kYXlzRGF0ZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZm9jdXNlZDogY3VycmVudERhdGUsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuY2hhbmdlKSxcbiAgICAgICAgICBvbktleURvd246IHRoaXMuX2tleURvd24sXG4gICAgICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdjYWxlbmRhclZpZXcnXG4gICAgICAgIH0pKVxuICAgICAgKSxcbiAgICAgIGZvb3RlciAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfRm9vdGVyMlsnZGVmYXVsdCddLCB7XG4gICAgICAgIHZhbHVlOiB0b2RheXNEYXRlLFxuICAgICAgICBmb3JtYXQ6IGZvb3RlckZvcm1hdCxcbiAgICAgICAgY3VsdHVyZTogY3VsdHVyZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHRvZGF5Tm90SW5SYW5nZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgICBvbkNsaWNrOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLnNlbGVjdClcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBuYXZpZ2F0ZTogX3V0aWxfMlsnZGVmYXVsdCddLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGRpcmVjdGlvbiwgZGF0ZSkge1xuICAgIHZhciB2aWV3ID0gdGhpcy5zdGF0ZS52aWV3LFxuICAgICAgICBzbGlkZURpciA9IGRpcmVjdGlvbiA9PT0gZGlyLkxFRlQgfHwgZGlyZWN0aW9uID09PSBkaXIuVVAgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgaWYgKCFkYXRlKSBkYXRlID0gW2Rpci5MRUZULCBkaXIuUklHSFRdLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEgPyB0aGlzLm5leHREYXRlKGRpcmVjdGlvbikgOiB0aGlzLnN0YXRlLmN1cnJlbnREYXRlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gZGlyLkRPV04pIHZpZXcgPSBBTFRfVklFV1t2aWV3XSB8fCB2aWV3O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gZGlyLlVQKSB2aWV3ID0gTkVYVF9WSUVXW3ZpZXddIHx8IHZpZXc7XG5cbiAgICBpZiAodGhpcy5pc1ZhbGlkVmlldyh2aWV3KSAmJiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UoZGF0ZSwgdGhpcy5wcm9wcy5taW4sIHRoaXMucHJvcHMubWF4LCB2aWV3KSkge1xuICAgICAgdGhpcy5ub3RpZnkoJ29uTmF2aWdhdGUnLCBbZGF0ZSwgc2xpZGVEaXIsIHZpZXddKTtcbiAgICAgIHRoaXMuZm9jdXModHJ1ZSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50RGF0ZTogZGF0ZSxcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyLFxuICAgICAgICB2aWV3OiB2aWV3XG4gICAgICB9KTtcbiAgICB9XG4gIH0pLFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAoK3RoaXMucHJvcHMudGFiSW5kZXggPiAtMSkgX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykuZm9jdXMoKTtcbiAgfSxcblxuICBfZm9jdXM6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKHRydWUsIGZ1bmN0aW9uIChmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoK3RoaXMucHJvcHMudGFiSW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzMi5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzMi5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSksXG5cbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09IHRoaXMucHJvcHMuaW5pdGlhbFZpZXcpIHtcbiAgICAgIHRoaXMubm90aWZ5KCdvbkNoYW5nZScsIGRhdGUpO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmF2aWdhdGUoZGlyLkRPV04sIGRhdGUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGRhdGUpIHtcbiAgICB2YXIgdmlldyA9IHRoaXMucHJvcHMuaW5pdGlhbFZpZXcsXG4gICAgICAgIHNsaWRlRGlyID0gdmlldyAhPT0gdGhpcy5zdGF0ZS52aWV3IHx8IF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZ3QoZGF0ZSwgdGhpcy5zdGF0ZS5jdXJyZW50RGF0ZSkgPyAnbGVmdCcgLy8gbW92ZSBkb3duIHRvIGEgdGhlIHZpZXdcbiAgICA6ICdyaWdodCc7XG5cbiAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBkYXRlKTtcblxuICAgIGlmICh0aGlzLmlzVmFsaWRWaWV3KHZpZXcpICYmIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZShkYXRlLCB0aGlzLnByb3BzLm1pbiwgdGhpcy5wcm9wcy5tYXgsIHZpZXcpKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50RGF0ZTogZGF0ZSxcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyLFxuICAgICAgICB2aWV3OiB2aWV3XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgbmV4dERhdGU6IGZ1bmN0aW9uIG5leHREYXRlKGRpcmVjdGlvbikge1xuICAgIHZhciBtZXRob2QgPSBkaXJlY3Rpb24gPT09IGRpci5MRUZUID8gJ3N1YnRyYWN0JyA6ICdhZGQnLFxuICAgICAgICB2aWV3ID0gdGhpcy5zdGF0ZS52aWV3LFxuICAgICAgICB1bml0ID0gdmlldyA9PT0gdmlld3MuTU9OVEggPyB2aWV3IDogdmlld3MuWUVBUixcbiAgICAgICAgbXVsdGkgPSBNVUxUSVBMSUVSW3ZpZXddIHx8IDE7XG5cbiAgICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXVttZXRob2RdKHRoaXMuc3RhdGUuY3VycmVudERhdGUsIDEgKiBtdWx0aSwgdW5pdCk7XG4gIH0sXG5cbiAgX2tleURvd246IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGN0cmwgPSBlLmN0cmxLZXksXG4gICAgICAgIGtleSA9IGUua2V5LFxuICAgICAgICBkaXJlY3Rpb24gPSBBUlJPV1NfVE9fRElSRUNUSU9OW2tleV0sXG4gICAgICAgIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnREYXRlLFxuICAgICAgICB2aWV3ID0gdGhpcy5zdGF0ZS52aWV3LFxuICAgICAgICB1bml0ID0gVklFV19VTklUW3ZpZXddLFxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnQ7XG5cbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGRpcmVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc1J0bCgpICYmIE9QUE9TSVRFX0RJUkVDVElPTltkaXJlY3Rpb25dKSBkaXJlY3Rpb24gPSBPUFBPU0lURV9ESVJFQ1RJT05bZGlyZWN0aW9uXTtcblxuICAgICAgICBjdXJyZW50RGF0ZSA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubW92ZShjdXJyZW50RGF0ZSwgdGhpcy5wcm9wcy5taW4sIHRoaXMucHJvcHMubWF4LCB2aWV3LCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcShjdXJyZW50LCBjdXJyZW50RGF0ZSwgdW5pdCkpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5ndChjdXJyZW50RGF0ZSwgY3VycmVudCwgdmlldykpIHRoaXMubmF2aWdhdGUoZGlyLlJJR0hULCBjdXJyZW50RGF0ZSk7ZWxzZSBpZiAoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5sdChjdXJyZW50RGF0ZSwgY3VycmVudCwgdmlldykpIHRoaXMubmF2aWdhdGUoZGlyLkxFRlQsIGN1cnJlbnREYXRlKTtlbHNlIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGF0ZTogY3VycmVudERhdGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeSgnb25LZXlEb3duJywgW2VdKTtcbiAgfSksXG5cbiAgX2xhYmVsOiBmdW5jdGlvbiBfbGFiZWwoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzMi5jdWx0dXJlO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2N1bHR1cmUnXSk7XG4gICAgdmFyIHZpZXcgPSB0aGlzLnN0YXRlLnZpZXc7XG4gICAgdmFyIGR0ID0gdGhpcy5zdGF0ZS5jdXJyZW50RGF0ZTtcblxuICAgIGlmICh2aWV3ID09PSAnbW9udGgnKSByZXR1cm4gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkdCwgZm9ybWF0KHByb3BzLCAnaGVhZGVyJyksIGN1bHR1cmUpO2Vsc2UgaWYgKHZpZXcgPT09ICd5ZWFyJykgcmV0dXJuIGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZHQsIGZvcm1hdChwcm9wcywgJ3llYXInKSwgY3VsdHVyZSk7ZWxzZSBpZiAodmlldyA9PT0gJ2RlY2FkZScpIHJldHVybiBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KF91dGlsRGF0ZXMyWydkZWZhdWx0J10uc3RhcnRPZihkdCwgJ2RlY2FkZScpLCBmb3JtYXQocHJvcHMsICdkZWNhZGUnKSwgY3VsdHVyZSk7ZWxzZSBpZiAodmlldyA9PT0gJ2NlbnR1cnknKSByZXR1cm4gbG9jYWxpemVycy5kYXRlLmZvcm1hdChfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YoZHQsICdjZW50dXJ5JyksIGZvcm1hdChwcm9wcywgJ2NlbnR1cnknKSwgY3VsdHVyZSk7XG4gIH0sXG5cbiAgaW5SYW5nZVZhbHVlOiBmdW5jdGlvbiBpblJhbmdlVmFsdWUoX3ZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0ZU9yTnVsbChfdmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tYXgoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5taW4odmFsdWUsIHRoaXMucHJvcHMubWF4KSwgdGhpcy5wcm9wcy5taW4pO1xuICB9LFxuXG4gIGlzVmFsaWRWaWV3OiBmdW5jdGlvbiBpc1ZhbGlkVmlldyhuZXh0KSB7XG4gICAgdmFyIGJvdHRvbSA9IFZJRVdfT1BUSU9OUy5pbmRleE9mKHRoaXMucHJvcHMuaW5pdGlhbFZpZXcpLFxuICAgICAgICB0b3AgPSBWSUVXX09QVElPTlMuaW5kZXhPZih0aGlzLnByb3BzLmZpbmFsVmlldyksXG4gICAgICAgIGN1cnJlbnQgPSBWSUVXX09QVElPTlMuaW5kZXhPZihuZXh0KTtcblxuICAgIHJldHVybiBjdXJyZW50ID49IGJvdHRvbSAmJiBjdXJyZW50IDw9IHRvcDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRhdGVPck51bGwoZHQpIHtcbiAgaWYgKGR0ICYmICFpc05hTihkdC5nZXRUaW1lKCkpKSByZXR1cm4gZHQ7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBtc2dzKG1zZ3MpIHtcbiAgcmV0dXJuIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7XG4gICAgbW92ZUJhY2s6ICduYXZpZ2F0ZSBiYWNrJyxcbiAgICBtb3ZlRm9yd2FyZDogJ25hdmlnYXRlIGZvcndhcmQnIH0sIG1zZ3MpO1xufVxuXG52YXIgVW5jb250cm9sbGVkQ2FsZW5kYXIgPSAoMCwgX3VuY29udHJvbGxhYmxlMlsnZGVmYXVsdCddKShDYWxlbmRhciwgeyB2YWx1ZTogJ29uQ2hhbmdlJyB9KTtcblxuVW5jb250cm9sbGVkQ2FsZW5kYXIuQmFzZUNhbGVuZGFyID0gQ2FsZW5kYXI7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFVuY29udHJvbGxlZENhbGVuZGFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vL2NvbnNvbGUubG9nKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uZmlndXJhdGlvbik7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZTtcbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmRlY2FkZUZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy5kZWNhZGU7XG59O1xuXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwoZGF0ZUEsIGRhdGVCKSB7XG4gIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVxKGRhdGVBLCBkYXRlQiwgJ2RlY2FkZScpO1xufTtcbnZhciBvcHRpb25JZCA9IGZ1bmN0aW9uIG9wdGlvbklkKGlkLCBkYXRlKSB7XG4gIHJldHVybiAnJyArIGlkICsgJ19fY2VudHVyeV8nICsgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS55ZWFyKGRhdGUpO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgb3B0aW9uSUQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgY3VsdHVyZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1pbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtYXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcblxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlY2FkZUZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdFxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0NlbnR1cnlWaWV3JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBhY3RpdmVJZCA9IG9wdGlvbklkKHRoaXMuX2lkKCksIHRoaXMucHJvcHMuZm9jdXNlZCk7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChhY3RpdmVJZCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMuZm9jdXNlZDtcbiAgICB2YXIgeWVhcnMgPSBnZXRDZW50dXJ5RGVjYWRlcyhmb2N1c2VkKTtcbiAgICB2YXIgcm93cyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5jaHVuayh5ZWFycywgNCk7XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gX3V0aWxfMlsnZGVmYXVsdCddLm9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ2dyaWQnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctbmF2LXZpZXcnKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcm93cy5tYXAodGhpcy5fcm93KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX3JvdzogZnVuY3Rpb24gX3Jvdyhyb3csIHJvd0lkeCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMyLmZvY3VzZWQ7XG4gICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzMi5zZWxlY3RlZDtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkO1xuICAgIHZhciBvbkNoYW5nZSA9IF9wcm9wczIub25DaGFuZ2U7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcbiAgICB2YXIgdG9kYXkgPSBfcHJvcHMyLnRvZGF5O1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzMi5jdWx0dXJlO1xuICAgIHZhciBtaW4gPSBfcHJvcHMyLm1pbjtcbiAgICB2YXIgbWF4ID0gX3Byb3BzMi5tYXg7XG4gICAgdmFyIGlkID0gdGhpcy5faWQoJ19jZW50dXJ5Jyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndHInLFxuICAgICAgeyBrZXk6ICdyb3dfJyArIHJvd0lkeCwgcm9sZTogJ3JvdycgfSxcbiAgICAgIHJvdy5tYXAoZnVuY3Rpb24gKGRhdGUsIGNvbElkeCkge1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gaXNFcXVhbChkYXRlLCBmb2N1c2VkKSxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc0VxdWFsKGRhdGUsIHZhbHVlKSxcbiAgICAgICAgICAgIGN1cnJlbnREZWNhZGUgPSBpc0VxdWFsKGRhdGUsIHRvZGF5KSxcbiAgICAgICAgICAgIGxhYmVsID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YoZGF0ZSwgJ2RlY2FkZScpLCBmb3JtYXQoX3RoaXMucHJvcHMpLCBjdWx0dXJlKTtcblxuICAgICAgICB2YXIgY3VycmVudElEID0gb3B0aW9uSWQoaWQsIGRhdGUpO1xuXG4gICAgICAgIHJldHVybiAhaW5SYW5nZShkYXRlLCBtaW4sIG1heCkgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHsga2V5OiBjb2xJZHgsIHJvbGU6ICdncmlkY2VsbCcsIGNsYXNzTmFtZTogJ3J3LWVtcHR5LWNlbGwnIH0sXG4gICAgICAgICAgJ8KgJ1xuICAgICAgICApIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGNvbElkeCxcbiAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICBpZDogY3VycmVudElELFxuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAgICAgICAgICdhcmlhLXJlYWRvbmx5JzogZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogY3VycmVudElELFxuICAgICAgICAgICAgICBvbkNsaWNrOiBvbkNoYW5nZS5iaW5kKG51bGwsIGluUmFuZ2VEYXRlKGRhdGUsIG1pbiwgbWF4KSksXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgncnctYnRuJywge1xuICAgICAgICAgICAgICAgICdydy1vZmYtcmFuZ2UnOiAhaW5DZW50dXJ5KGRhdGUsIGZvY3VzZWQpLFxuICAgICAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICdydy1ub3cnOiBjdXJyZW50RGVjYWRlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIGluUmFuZ2VEYXRlKGRlY2FkZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWF4KF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubWluKGRlY2FkZSwgbWF4KSwgbWluKTtcbn1cblxuZnVuY3Rpb24gaW5SYW5nZShkZWNhZGUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmd0ZShkZWNhZGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uc3RhcnRPZihtaW4sICdkZWNhZGUnKSwgJ3llYXInKSAmJiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmx0ZShkZWNhZGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZW5kT2YobWF4LCAnZGVjYWRlJyksICd5ZWFyJyk7XG59XG5cbmZ1bmN0aW9uIGluQ2VudHVyeShkYXRlLCBzdGFydCkge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5ndGUoZGF0ZSwgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5zdGFydE9mKHN0YXJ0LCAnY2VudHVyeScpLCAneWVhcicpICYmIF91dGlsRGF0ZXMyWydkZWZhdWx0J10ubHRlKGRhdGUsIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZW5kT2Yoc3RhcnQsICdjZW50dXJ5JyksICd5ZWFyJyk7XG59XG5cbmZ1bmN0aW9uIGdldENlbnR1cnlEZWNhZGVzKF9kYXRlKSB7XG4gIHZhciBkYXlzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdLFxuICAgICAgZGF0ZSA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10uYWRkKF91dGlsRGF0ZXMyWydkZWZhdWx0J10uc3RhcnRPZihfZGF0ZSwgJ2NlbnR1cnknKSwgLTIwLCAneWVhcicpO1xuXG4gIHJldHVybiBkYXlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRhdGUgPSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmFkZChkYXRlLCAxMCwgJ3llYXInKTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIF91dGlsRmlsdGVyID0gcmVxdWlyZSgnLi91dGlsL2ZpbHRlcicpO1xuXG52YXIgX3V0aWxGaWx0ZXIyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbEZpbHRlcik7XG5cbnZhciBfUG9wdXAgPSByZXF1aXJlKCcuL1BvcHVwJyk7XG5cbnZhciBfUG9wdXAyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wdXApO1xuXG52YXIgX1dpZGdldEJ1dHRvbiA9IHJlcXVpcmUoJy4vV2lkZ2V0QnV0dG9uJyk7XG5cbnZhciBfV2lkZ2V0QnV0dG9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dpZGdldEJ1dHRvbik7XG5cbnZhciBfQ29tYm9ib3hJbnB1dCA9IHJlcXVpcmUoJy4vQ29tYm9ib3hJbnB1dCcpO1xuXG52YXIgX0NvbWJvYm94SW5wdXQyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tYm9ib3hJbnB1dCk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF9MaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG5cbnZhciBfTGlzdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0KTtcblxudmFyIF9MaXN0R3JvdXBhYmxlID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBhYmxlJyk7XG5cbnZhciBfTGlzdEdyb3VwYWJsZTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0R3JvdXBhYmxlKTtcblxudmFyIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlID0gcmVxdWlyZSgnLi91dGlsL3ZhbGlkYXRlTGlzdEludGVyZmFjZScpO1xuXG52YXIgX3V0aWxWYWxpZGF0ZUxpc3RJbnRlcmZhY2UyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFZhbGlkYXRlTGlzdEludGVyZmFjZSk7XG5cbnZhciBfdW5jb250cm9sbGFibGUgPSByZXF1aXJlKCd1bmNvbnRyb2xsYWJsZScpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuY29udHJvbGxhYmxlKTtcblxudmFyIGRlZmF1bHRTdWdnZXN0ID0gZnVuY3Rpb24gZGVmYXVsdFN1Z2dlc3QoZikge1xuICByZXR1cm4gZiA9PT0gdHJ1ZSA/ICdzdGFydHNXaXRoJyA6IGYgPyBmIDogJ2VxJztcbn07XG5cbnZhciBvbWl0ID0gX3V0aWxfMlsnZGVmYXVsdCddLm9taXQ7XG52YXIgcGljayA9IF91dGlsXzJbJ2RlZmF1bHQnXS5waWNrO1xudmFyIHJlc3VsdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5yZXN1bHQ7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8vLS0gY29udHJvbGxlZCBwcm9wcyAtLS0tLS0tLS0tLVxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIG9wZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgb25Ub2dnbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpdGVtQ29tcG9uZW50OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcbiAgbGlzdENvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG5cbiAgZ3JvdXBDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICBncm91cEJ5OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5hY2Nlc3NvcixcblxuICBkYXRhOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZUZpZWxkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dEZpZWxkOiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5hY2Nlc3NvcixcbiAgbmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydyZWFkT25seSddKV0pLFxuXG4gIHN1Z2dlc3Q6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmZpbHRlcixcbiAgZmlsdGVyOiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5maWx0ZXIsXG5cbiAgYnVzeTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gIGRyb3BVcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBkdXJhdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIC8vcG9wdXBcblxuICBwbGFjZWhvbGRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgbWVzc2FnZXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wZW46IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLm1lc3NhZ2UsXG4gICAgZW1wdHlMaXN0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5tZXNzYWdlLFxuICAgIGVtcHR5RmlsdGVyOiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5tZXNzYWdlXG4gIH0pXG59O1xuXG52YXIgQ29tYm9Cb3ggPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnQ29tYm9Cb3gnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhRmlsdGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvRGF0YUhlbHBlcnNNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9Qb3B1cFNjcm9sbFRvTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgnaW5wdXQnKV0sXG5cbiAgcHJvcFR5cGVzOiBwcm9wVHlwZXMsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5wcm9jZXNzKHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy52YWx1ZSksXG4gICAgICAgIGlkeCA9IHRoaXMuX2RhdGFJbmRleE9mKGl0ZW1zLCB0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZEl0ZW06IGl0ZW1zW2lkeF0sXG4gICAgICBmb2N1c2VkSXRlbTogaXRlbXNbISB+aWR4ID8gMCA6IGlkeF0sXG4gICAgICBwcm9jZXNzZWREYXRhOiBpdGVtcyxcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW10sXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHN1Z2dlc3Q6IGZhbHNlLFxuICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgIGRlbGF5OiA1MDAsXG5cbiAgICAgIG1lc3NhZ2VzOiBtc2dzKCksXG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2NvbWJvYm94J1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZWZzLmxpc3QgJiYgKDAsIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlMlsnZGVmYXVsdCddKSh0aGlzLnJlZnMubGlzdCk7XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB2YXIgaXNTdWdnZXN0aW5nID0gdGhpcy5yZWZzLmlucHV0ICYmIHRoaXMucmVmcy5pbnB1dC5pc1N1Z2dlc3RpbmcoKSxcbiAgICAgICAgc3RhdGVDaGFuZ2VkID0gIV91dGlsXzJbJ2RlZmF1bHQnXS5pc1NoYWxsb3dFcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpLFxuICAgICAgICB2YWx1ZUNoYW5nZWQgPSAhX3V0aWxfMlsnZGVmYXVsdCddLmlzU2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gaXNTdWdnZXN0aW5nIHx8IHN0YXRlQ2hhbmdlZCB8fCB2YWx1ZUNoYW5nZWQ7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgcmF3SWR4ID0gdGhpcy5fZGF0YUluZGV4T2YobmV4dFByb3BzLmRhdGEsIG5leHRQcm9wcy52YWx1ZSksXG4gICAgICAgIHZhbHVlSXRlbSA9IHJhd0lkeCA9PT0gLTEgPyBuZXh0UHJvcHMudmFsdWUgOiBuZXh0UHJvcHMuZGF0YVtyYXdJZHhdLFxuICAgICAgICBpc1N1Z2dlc3RpbmcgPSB0aGlzLnJlZnMuaW5wdXQuaXNTdWdnZXN0aW5nKCksXG4gICAgICAgIGl0ZW1zID0gdGhpcy5wcm9jZXNzKG5leHRQcm9wcy5kYXRhLCBuZXh0UHJvcHMudmFsdWUsIChyYXdJZHggPT09IC0xIHx8IGlzU3VnZ2VzdGluZykgJiYgdGhpcy5fZGF0YVRleHQodmFsdWVJdGVtKSksXG4gICAgICAgIGlkeCA9IHRoaXMuX2RhdGFJbmRleE9mKGl0ZW1zLCBuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgICBmb2N1c2VkID0gdGhpcy5maWx0ZXJJbmRleE9mKGl0ZW1zLCB0aGlzLl9kYXRhVGV4dCh2YWx1ZUl0ZW0pKTtcblxuICAgIHRoaXMuX3NlYXJjaFRlcm0gPSAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJvY2Vzc2VkRGF0YTogaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW06IGl0ZW1zW2lkeF0sXG4gICAgICBmb2N1c2VkSXRlbTogaXRlbXNbaWR4ID09PSAtMSA/IGZvY3VzZWQgIT09IC0xID8gZm9jdXNlZCA6IDAgLy8gZm9jdXMgdGhlIGNsb3Nlc3QgbWF0Y2hcbiAgICAgIDogaWR4XVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY3gsXG4gICAgICAgIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciB0YWJJbmRleCA9IF9wcm9wcy50YWJJbmRleDtcbiAgICB2YXIgZmlsdGVyID0gX3Byb3BzLmZpbHRlcjtcbiAgICB2YXIgc3VnZ2VzdCA9IF9wcm9wcy5zdWdnZXN0O1xuICAgIHZhciBncm91cEJ5ID0gX3Byb3BzLmdyb3VwQnk7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBkYXRhID0gX3Byb3BzLmRhdGE7XG4gICAgdmFyIGJ1c3kgPSBfcHJvcHMuYnVzeTtcbiAgICB2YXIgZHJvcFVwID0gX3Byb3BzLmRyb3BVcDtcbiAgICB2YXIgbmFtZSA9IF9wcm9wcy5uYW1lO1xuICAgIHZhciBwbGFjZWhvbGRlciA9IF9wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgdmFyIG9wZW4gPSBfcHJvcHMub3BlbjtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgdmFyIHJlYWRPbmx5ID0gX3Byb3BzLnJlYWRPbmx5O1xuICAgIHZhciBMaXN0ID0gX3Byb3BzLmxpc3RDb21wb25lbnQ7XG5cbiAgICBMaXN0ID0gTGlzdCB8fCBncm91cEJ5ICYmIF9MaXN0R3JvdXBhYmxlMlsnZGVmYXVsdCddIHx8IF9MaXN0MlsnZGVmYXVsdCddO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG4gICAgdmFyIGxpc3RQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoX3V0aWxDb21wYXQyWydkZWZhdWx0J10udHlwZShMaXN0KS5wcm9wVHlwZXMpKTtcbiAgICB2YXIgcG9wdXBQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoX3V0aWxDb21wYXQyWydkZWZhdWx0J10udHlwZShfUG9wdXAyWydkZWZhdWx0J10pLnByb3BUeXBlcykpO1xuXG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGZvY3VzZWRJdGVtID0gX3N0YXRlLmZvY3VzZWRJdGVtO1xuICAgIHZhciBzZWxlY3RlZEl0ZW0gPSBfc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIHZhciBmb2N1c2VkID0gX3N0YXRlLmZvY3VzZWQ7XG5cbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9kYXRhKCksXG4gICAgICAgIHZhbHVlSXRlbSA9IHRoaXMuX2RhdGFJdGVtKGRhdGEsIHZhbHVlKSAvLyB0YWtlIHZhbHVlIGZyb20gdGhlIHJhdyBkYXRhXG4gICAgLFxuICAgICAgICBpbnB1dElEID0gdGhpcy5faWQoJ19pbnB1dCcpLFxuICAgICAgICBsaXN0SUQgPSB0aGlzLl9pZCgnX2xpc3Rib3gnKSxcbiAgICAgICAgY29tcGxldGVUeXBlID0gdGhpcy5wcm9wcy5zdWdnZXN0ID8gdGhpcy5wcm9wcy5maWx0ZXIgPyAnYm90aCcgOiAnaW5saW5lJyA6IHRoaXMucHJvcHMuZmlsdGVyID8gJ2xpc3QnIDogJyc7XG5cbiAgICB2YXIgc2hvdWxkUmVuZGVyTGlzdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5pc0ZpcnN0Rm9jdXNlZFJlbmRlcih0aGlzKSB8fCBvcGVuO1xuXG4gICAgbWVzc2FnZXMgPSBtc2dzKG1lc3NhZ2VzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZWxlbWVudCcsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fa2V5RG93bixcbiAgICAgICAgb25Gb2N1czogdGhpcy5fZm9jdXMuYmluZChudWxsLCB0cnVlKSxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsICdydy1jb21ib2JveCcsICdydy13aWRnZXQnLCAoX2N4ID0ge30sIF9jeFsncnctc3RhdGUtZm9jdXMnXSA9IGZvY3VzZWQsIF9jeFsncnctc3RhdGUtZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfY3hbJ3J3LXN0YXRlLXJlYWRvbmx5J10gPSByZWFkT25seSwgX2N4Wydydy1ydGwnXSA9IHRoaXMuaXNSdGwoKSwgX2N4Wydydy1vcGVuJyArIChkcm9wVXAgPyAnLXVwJyA6ICcnKV0gPSBvcGVuLCBfY3gpKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1dpZGdldEJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LXNlbGVjdCcsXG4gICAgICAgICAgb25DbGljazogdGhpcy50b2dnbGUsXG4gICAgICAgICAgZGlzYWJsZWQ6ICEhKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5yZWFkT25seSlcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2knLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdydy1pIHJ3LWktY2FyZXQtZG93bicsIHsgJ3J3LWxvYWRpbmcnOiBidXN5IH0pIH0sXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LXNyJyB9LFxuICAgICAgICAgICAgX3V0aWxfMlsnZGVmYXVsdCddLnJlc3VsdChtZXNzYWdlcy5vcGVuLCB0aGlzLnByb3BzKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9Db21ib2JveElucHV0MlsnZGVmYXVsdCddLCB7XG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgICAgaWQ6IGlucHV0SUQsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgc3VnZ2VzdDogc3VnZ2VzdCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgJ2FyaWEtb3ducyc6IGxpc3RJRCxcbiAgICAgICAgJ2FyaWEtYnVzeSc6ICEhYnVzeSxcbiAgICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogY29tcGxldGVUeXBlLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IG9wZW4sXG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICAgICAgY2xhc3NOYW1lOiAncnctaW5wdXQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5fZGF0YVRleHQodmFsdWVJdGVtKSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuX2lucHV0VHlwaW5nLFxuICAgICAgICBvbktleURvd246IHRoaXMuX2lucHV0S2V5RG93blxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BvcHVwMlsnZGVmYXVsdCddLFxuICAgICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHBvcHVwUHJvcHMsIHtcbiAgICAgICAgICBvbk9wZW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZWZzLmxpc3QuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmNsb3NlXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHNob3VsZFJlbmRlckxpc3QgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoTGlzdCwgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHsgcmVmOiAnbGlzdCdcbiAgICAgICAgICB9LCBsaXN0UHJvcHMsIHtcbiAgICAgICAgICAgIGlkOiBsaXN0SUQsXG4gICAgICAgICAgICBkYXRhOiBpdGVtcyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBmb2N1c2VkOiBmb2N1c2VkSXRlbSxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICFvcGVuLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGlucHV0SUQsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogb3BlbiAmJiAncG9saXRlJyxcbiAgICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLl9vblNlbGVjdCxcbiAgICAgICAgICAgIG9uTW92ZTogdGhpcy5fc2Nyb2xsVG8sXG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICBlbXB0eUxpc3Q6IGRhdGEubGVuZ3RoID8gbWVzc2FnZXMuZW1wdHlGaWx0ZXIgOiBtZXNzYWdlcy5lbXB0eUxpc3RcbiAgICAgICAgICAgIH0gfSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9vblNlbGVjdDogX3V0aWxfMlsnZGVmYXVsdCddLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5ub3RpZnkoJ29uU2VsZWN0JywgZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2UoZGF0YSk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9KSxcblxuICBfaW5wdXRLZXlEb3duOiBmdW5jdGlvbiBfaW5wdXRLZXlEb3duKGUpIHtcbiAgICB0aGlzLl9kZWxldGluZyA9IGUua2V5ID09PSAnQmFja3NwYWNlJyB8fCBlLmtleSA9PT0gJ0RlbGV0ZSc7XG4gICAgdGhpcy5faXNUeXBpbmcgPSB0cnVlO1xuICB9LFxuXG4gIF9pbnB1dFR5cGluZzogZnVuY3Rpb24gX2lucHV0VHlwaW5nKGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgc2hvdWxkU3VnZ2VzdCA9ICEhdGhpcy5wcm9wcy5zdWdnZXN0LFxuICAgICAgICBzdHJWYWwgPSBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgc3VnZ2VzdGlvbixcbiAgICAgICAgZGF0YTtcblxuICAgIHN1Z2dlc3Rpb24gPSB0aGlzLl9kZWxldGluZyB8fCAhc2hvdWxkU3VnZ2VzdCA/IHN0clZhbCA6IHRoaXMuc3VnZ2VzdCh0aGlzLl9kYXRhKCksIHN0clZhbCk7XG5cbiAgICBzdWdnZXN0aW9uID0gc3VnZ2VzdGlvbiB8fCBzdHJWYWw7XG5cbiAgICBkYXRhID0gX3V0aWxfMlsnZGVmYXVsdCddLmZpbmQoc2VsZi5wcm9wcy5kYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5fZGF0YVRleHQoaXRlbSkudG9Mb3dlckNhc2UoKSA9PT0gc3VnZ2VzdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFuZ2UoIXRoaXMuX2RlbGV0aW5nICYmIGRhdGEgPyBkYXRhIDogc3RyVmFsLCB0cnVlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9LFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcbiAgfSxcblxuICBfZm9jdXM6IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKHRydWUsIGZ1bmN0aW9uIChmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAhZm9jdXNlZCAmJiB0aGlzLnJlZnMuaW5wdXQuYWNjZXB0KCk7IC8vbm90IHN1Z2dlc3RpbmcgYW55bW9yZVxuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgaWYgKCFmb2N1c2VkKSBfdGhpczMuY2xvc2UoKTtcblxuICAgICAgaWYgKGZvY3VzZWQgIT09IF90aGlzMy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzMy5ub3RpZnkoZm9jdXNlZCA/ICdvbkZvY3VzJyA6ICdvbkJsdXInLCBlKTtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgZm9jdXNlZDogZm9jdXNlZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSksXG5cbiAgX2tleURvd246IF91dGlsXzJbJ2RlZmF1bHQnXS5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBrZXkgPSBlLmtleSxcbiAgICAgICAgYWx0ID0gZS5hbHRLZXksXG4gICAgICAgIGxpc3QgPSB0aGlzLnJlZnMubGlzdCxcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLFxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSxcbiAgICAgICAgaXNPcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuXG4gICAgaWYgKGtleSA9PT0gJ0VuZCcpIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbGlzdC5sYXN0KCkgfSk7ZWxzZSBzZWxlY3QobGlzdC5sYXN0KCksIHRydWUpO2Vsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QuZmlyc3QoKSB9KTtlbHNlIHNlbGVjdChsaXN0LmZpcnN0KCksIHRydWUpO2Vsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScgJiYgaXNPcGVuKSB0aGlzLmNsb3NlKCk7ZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInICYmIGlzT3Blbikge1xuICAgICAgc2VsZWN0KHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0sIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgaWYgKGFsdCkgdGhpcy5vcGVuKCk7ZWxzZSB7XG4gICAgICAgIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbGlzdC5uZXh0KGZvY3VzZWRJdGVtKSB9KTtlbHNlIHNlbGVjdChsaXN0Lm5leHQoc2VsZWN0ZWRJdGVtKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgaWYgKGFsdCkgdGhpcy5jbG9zZSgpO2Vsc2Uge1xuICAgICAgICBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QucHJldihmb2N1c2VkSXRlbSkgfSk7ZWxzZSBzZWxlY3QobGlzdC5wcmV2KHNlbGVjdGVkSXRlbSksIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KCdvbktleURvd24nLCBbZV0pO1xuXG4gICAgZnVuY3Rpb24gc2VsZWN0KGl0ZW0sIGZyb21MaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0pIHJldHVybiBzZWxmLmNoYW5nZShfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShzZWxmLnJlZnMuaW5wdXQpLnZhbHVlLCBmYWxzZSk7XG5cbiAgICAgIHNlbGYucmVmcy5pbnB1dC5hY2NlcHQodHJ1ZSk7IC8vcmVtb3ZlcyBjYXJldFxuXG4gICAgICBpZiAoZnJvbUxpc3QpIHJldHVybiBzZWxmLl9vblNlbGVjdChpdGVtKTtcblxuICAgICAgc2VsZi5jaGFuZ2UoaXRlbSwgZmFsc2UpO1xuICAgIH1cbiAgfSksXG5cbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZGF0YSwgdHlwaW5nKSB7XG4gICAgdGhpcy5fdHlwZWRDaGFuZ2UgPSAhIXR5cGluZztcbiAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBkYXRhKTtcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5vcGVuKSB0aGlzLm5vdGlmeSgnb25Ub2dnbGUnLCB0cnVlKTtcbiAgfSxcblxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3BlbikgdGhpcy5ub3RpZnkoJ29uVG9nZ2xlJywgZmFsc2UpO1xuICB9LFxuXG4gIHRvZ2dsZTogX3V0aWxfMlsnZGVmYXVsdCddLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIHRoaXMucHJvcHMub3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9KSxcblxuICBzdWdnZXN0OiBmdW5jdGlvbiBzdWdnZXN0KGRhdGEsIHZhbHVlKSB7XG4gICAgdmFyIHdvcmQgPSB0aGlzLl9kYXRhVGV4dCh2YWx1ZSksXG4gICAgICAgIHN1Z2dlc3QgPSBkZWZhdWx0U3VnZ2VzdCh0aGlzLnByb3BzLnN1Z2dlc3QpLFxuICAgICAgICBzdWdnZXN0aW9uO1xuXG4gICAgaWYgKCEod29yZCB8fCAnJykudHJpbSgpIHx8IHdvcmQubGVuZ3RoIDwgKHRoaXMucHJvcHMubWluTGVuZ3RoIHx8IDEpKSByZXR1cm4gJyc7XG5cbiAgICBzdWdnZXN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IF91dGlsXzJbJ2RlZmF1bHQnXS5maW5kKGRhdGEsIGdldEZpbHRlcihzdWdnZXN0LCB3b3JkLCB0aGlzKSkgOiB2YWx1ZTtcblxuICAgIGlmIChzdWdnZXN0aW9uICYmICghdGhpcy5zdGF0ZSB8fCAhdGhpcy5zdGF0ZS5kZWxldGluZykpIHJldHVybiB0aGlzLl9kYXRhVGV4dChzdWdnZXN0aW9uKTtcblxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICBfZGF0YTogZnVuY3Rpb24gX2RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucHJvY2Vzc2VkRGF0YTtcbiAgfSxcblxuICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGRhdGEsIHZhbHVlcywgc2VhcmNoVGVybSkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAmJiBzZWFyY2hUZXJtKSBkYXRhID0gdGhpcy5maWx0ZXIoZGF0YSwgc2VhcmNoVGVybSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1zZ3MobXNncykge1xuICByZXR1cm4gYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICBvcGVuOiAnb3BlbiBjb21ib2JveCcsXG4gICAgZW1wdHlMaXN0OiAnVGhlcmUgYXJlIG5vIGl0ZW1zIGluIHRoaXMgbGlzdCcsXG4gICAgZW1wdHlGaWx0ZXI6ICdUaGUgZmlsdGVyIHJldHVybmVkIG5vIHJlc3VsdHMnIH0sIG1zZ3MpO1xufVxuXG5mdW5jdGlvbiBnZXRGaWx0ZXIoc3VnZ2VzdCwgd29yZCwgY3R4KSB7XG4gIHJldHVybiB0eXBlb2Ygc3VnZ2VzdCA9PT0gJ3N0cmluZycgPyBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBfdXRpbEZpbHRlcjJbJ2RlZmF1bHQnXVtzdWdnZXN0XShjdHguX2RhdGFUZXh0KGl0ZW0pLnRvTG93ZXJDYXNlKCksIHdvcmQudG9Mb3dlckNhc2UoKSk7XG4gIH0gOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBzdWdnZXN0KGl0ZW0sIHdvcmQpO1xuICB9O1xufVxuXG52YXIgVW5jb250cm9sbGVkQ29tYm9Cb3ggPSAoMCwgX3VuY29udHJvbGxhYmxlMlsnZGVmYXVsdCddKShDb21ib0JveCwgeyBvcGVuOiAnb25Ub2dnbGUnLCB2YWx1ZTogJ29uQ2hhbmdlJyB9KTtcblxuVW5jb250cm9sbGVkQ29tYm9Cb3guQmFzZUNvbWJvQm94ID0gQ29tYm9Cb3g7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFVuY29udHJvbGxlZENvbWJvQm94O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbENhcmV0ID0gcmVxdWlyZSgnLi91dGlsL2NhcmV0Jyk7XG5cbnZhciBfdXRpbENhcmV0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDYXJldCk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnQ29tYm9ib3hJbnB1dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBpbnB1dCA9IF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICB2YWwgPSB0aGlzLnByb3BzLnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuaXNTdWdnZXN0aW5nKCkpIHtcbiAgICAgIHZhciBzdGFydCA9IHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5fbGFzdC50b0xvd2VyQ2FzZSgpKSArIHRoaXMuX2xhc3QubGVuZ3RoLFxuICAgICAgICAgIGVuZCA9IHZhbC5sZW5ndGggLSBzdGFydDtcblxuICAgICAgaWYgKHN0YXJ0ID49IDApIHtcbiAgICAgICAgKDAsIF91dGlsQ2FyZXQyWydkZWZhdWx0J10pKGlucHV0LCBzdGFydCwgc3RhcnQgKyBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAnYXJpYS1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgJyBydy1pbnB1dCcsXG4gICAgICBvbktleURvd246IHRoaXMucHJvcHMub25LZXlEb3duLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2NoYW5nZSxcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlID09IG51bGwgPyAnJyA6IHRoaXMucHJvcHMudmFsdWVcbiAgICB9KSk7XG4gIH0sXG5cbiAgaXNTdWdnZXN0aW5nOiBmdW5jdGlvbiBpc1N1Z2dlc3RpbmcoKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgIGlzU3VnZ2VzdGlvbiA9IHRoaXMuX2xhc3QgIT0gbnVsbCAmJiB2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuX2xhc3QudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc3VnZ2VzdCAmJiBpc1N1Z2dlc3Rpb247XG4gIH0sXG5cbiAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQocmVtb3ZlQ2FyZXQpIHtcbiAgICB2YXIgdmFsID0gX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykudmFsdWUgfHwgJycsXG4gICAgICAgIGVuZCA9IHZhbC5sZW5ndGg7XG5cbiAgICB0aGlzLl9sYXN0ID0gbnVsbDtcbiAgICByZW1vdmVDYXJldCAmJiAoMCwgX3V0aWxDYXJldDJbJ2RlZmF1bHQnXSkoX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIGVuZCwgZW5kKTtcbiAgfSxcblxuICBfY2hhbmdlOiBmdW5jdGlvbiBfY2hhbmdlKGUpIHtcbiAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgIHBsID0gISF0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuXG4gICAgLy8gSUUgZmlyZXMgaW5wdXQgZXZlbnRzIHdoZW4gc2V0dGluZy91bnNldHRpbmcgcGxhY2Vob2xkZXJzLlxuICAgIC8vIGlzc3VlICMxMTJcbiAgICBpZiAocGwgJiYgIXZhbCAmJiB2YWwgPT09ICh0aGlzLnByb3BzLnZhbHVlIHx8ICcnKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fbGFzdCA9IHZhbDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbCk7XG4gIH0sXG5cbiAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLmZvY3VzKCk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIGNvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKSxcbiAgICBsb2NhbGl6ZXJzID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKS5sb2NhbGUsXG4gICAgQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0RhdGVQaWNrZXJJbnB1dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZm9ybWF0OiBDdXN0b21Qcm9wVHlwZXMuZGF0ZUZvcm1hdC5pc1JlcXVpcmVkLFxuICAgIGVkaXRGb3JtYXQ6IEN1c3RvbVByb3BUeXBlcy5kYXRlRm9ybWF0LFxuICAgIHBhcnNlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1bHR1cmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dFZhbHVlOiAnJ1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgdGV4dCA9IGZvcm1hdERhdGUobmV4dFByb3BzLnZhbHVlLCBuZXh0UHJvcHMuZWRpdGluZyAmJiBuZXh0UHJvcHMuZWRpdEZvcm1hdCA/IG5leHRQcm9wcy5lZGl0Rm9ybWF0IDogbmV4dFByb3BzLmZvcm1hdCwgbmV4dFByb3BzLmN1bHR1cmUpO1xuXG4gICAgdGhpcy5zdGFydFZhbHVlID0gdGV4dDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dFZhbHVlOiB0ZXh0XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIHRleHQgPSBmb3JtYXREYXRlKHRoaXMucHJvcHMudmFsdWUsIHRoaXMucHJvcHMuZWRpdGluZyAmJiB0aGlzLnByb3BzLmVkaXRGb3JtYXQgPyB0aGlzLnByb3BzLmVkaXRGb3JtYXQgOiB0aGlzLnByb3BzLmZvcm1hdCwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRleHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dFZhbHVlOiB0ZXh0XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnRleHRWYWx1ZTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiBjeCh7ICdydy1pbnB1dCc6IHRydWUgfSksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAnYXJpYS1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2NoYW5nZSxcbiAgICAgIG9uQmx1cjogY2hhaW4odGhpcy5wcm9wcy5ibHVyLCB0aGlzLl9ibHVyLCB0aGlzKSB9KSk7XG4gIH0sXG5cbiAgX2NoYW5nZTogZnVuY3Rpb24gX2NoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgdGhpcy5fbmVlZHNGbHVzaCA9IHRydWU7XG4gIH0sXG5cbiAgX2JsdXI6IGZ1bmN0aW9uIF9ibHVyKGUpIHtcbiAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgIGRhdGU7XG5cbiAgICBpZiAodGhpcy5fbmVlZHNGbHVzaCkge1xuICAgICAgdGhpcy5fbmVlZHNGbHVzaCA9IGZhbHNlO1xuICAgICAgZGF0ZSA9IHRoaXMucHJvcHMucGFyc2UodmFsKTtcblxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlLCBmb3JtYXREYXRlKGRhdGUsIHRoaXMucHJvcHMuZm9ybWF0LCB0aGlzLnByb3BzLmN1bHR1cmUpKTtcbiAgICB9XG4gIH0sXG5cbiAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKS5mb2N1cygpO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBpc1ZhbGlkKGQpIHtcbiAgcmV0dXJuICFpc05hTihkLmdldFRpbWUoKSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBjdWx0dXJlKSB7XG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNWYWxpZChkYXRlKSkgdmFsID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXRlLCBmb3JtYXQsIGN1bHR1cmUpO1xuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNoYWluKGEsIGIsIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhICYmIGEuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICBiICYmIGIuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdExpYkludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIF9yZWFjdExpYkludmFyaWFudDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdExpYkludmFyaWFudCk7XG5cbnZhciBfcmVhY3RMaWJHZXRBY3RpdmVFbGVtZW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2dldEFjdGl2ZUVsZW1lbnQnKTtcblxudmFyIF9yZWFjdExpYkdldEFjdGl2ZUVsZW1lbnQyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RMaWJHZXRBY3RpdmVFbGVtZW50KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbi8vcGljaywgb21pdCwgaGFzXG5cbnZhciBfdXRpbERhdGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGVzJyk7XG5cbnZhciBfdXRpbERhdGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxEYXRlcyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb25maWd1cmF0aW9uKTtcblxudmFyIF91dGlsQ29uc3RhbnRzID0gcmVxdWlyZSgnLi91dGlsL2NvbnN0YW50cycpO1xuXG52YXIgX3V0aWxDb25zdGFudHMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbENvbnN0YW50cyk7XG5cbnZhciBfUG9wdXAgPSByZXF1aXJlKCcuL1BvcHVwJyk7XG5cbnZhciBfUG9wdXAyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wdXApO1xuXG52YXIgX0NhbGVuZGFyMiA9IHJlcXVpcmUoJy4vQ2FsZW5kYXInKTtcblxudmFyIF9DYWxlbmRhcjMgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYWxlbmRhcjIpO1xuXG52YXIgX1RpbWVMaXN0ID0gcmVxdWlyZSgnLi9UaW1lTGlzdCcpO1xuXG52YXIgX1RpbWVMaXN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpbWVMaXN0KTtcblxudmFyIF9EYXRlSW5wdXQgPSByZXF1aXJlKCcuL0RhdGVJbnB1dCcpO1xuXG52YXIgX0RhdGVJbnB1dDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EYXRlSW5wdXQpO1xuXG52YXIgX1dpZGdldEJ1dHRvbiA9IHJlcXVpcmUoJy4vV2lkZ2V0QnV0dG9uJyk7XG5cbnZhciBfV2lkZ2V0QnV0dG9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dpZGdldEJ1dHRvbik7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZSgndW5jb250cm9sbGFibGUnKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmNvbnRyb2xsYWJsZSk7XG5cbnZhciB2aWV3cyA9IF91dGlsQ29uc3RhbnRzMlsnZGVmYXVsdCddLmNhbGVuZGFyVmlld3M7XG52YXIgcG9wdXBzID0gX3V0aWxDb25zdGFudHMyWydkZWZhdWx0J10uZGF0ZVBvcHVwcztcblxudmFyIENhbGVuZGFyID0gX0NhbGVuZGFyM1snZGVmYXVsdCddLkJhc2VDYWxlbmRhcjtcbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZTtcbnZhciB2aWV3RW51bSA9IE9iamVjdC5rZXlzKHZpZXdzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgcmV0dXJuIHZpZXdzW2tdO1xufSk7XG5cbnZhciBvbWl0ID0gX3V0aWxfMlsnZGVmYXVsdCddLm9taXQ7XG52YXIgcGljayA9IF91dGlsXzJbJ2RlZmF1bHQnXS5waWNrO1xudmFyIHJlc3VsdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5yZXN1bHQ7XG5cbnZhciBwcm9wVHlwZXMgPSBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLnR5cGUoQ2FsZW5kYXIpLnByb3BUeXBlcywge1xuXG4gIC8vLS0gY29udHJvbGxlZCBwcm9wcyAtLS0tLS0tLS0tLVxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBvbkNoYW5nZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICBvcGVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgcG9wdXBzLlRJTUUsIHBvcHVwcy5DQUxFTkRBUl0pLFxuICBvblRvZ2dsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgbWluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1heDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuXG4gIGN1bHR1cmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgdGltZUZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcbiAgZWRpdEZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdCxcblxuICBjYWxlbmRhcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICB0aW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgdGltZUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG5cbiAgLy9wb3B1cFxuICBkcm9wVXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgZHVyYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIHBsYWNlaG9sZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgaW5pdGlhbFZpZXc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2Yodmlld0VudW0pLFxuICBmaW5hbFZpZXc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2Yodmlld0VudW0pLFxuXG4gIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnZGlzYWJsZWQnXSldKSxcblxuICByZWFkT25seTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3JlYWRPbmx5J10pXSksXG5cbiAgcGFyc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcpLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXSksXG5cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjYWxlbmRhckJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn0pO1xuXG52YXIgRGF0ZVRpbWVQaWNrZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnRGF0ZVRpbWVQaWNrZXInLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUG9wdXBTY3JvbGxUb01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1J0bFBhcmVudENvbnRleHRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoJ3ZhbHVlSW5wdXQnLCBmdW5jdGlvbiAoa2V5LCBpZCkge1xuICAgIHZhciBvcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudCgpO1xuICAgIHZhciBjYWxJc0FjdGl2ZSA9IG9wZW4gPT09IHBvcHVwcy5DQUxFTkRBUiAmJiBrZXkgPT09ICdjYWxlbmRhcic7XG4gICAgdmFyIHRpbWVJc0FjdGl2ZSA9IG9wZW4gPT09IHBvcHVwcy5USU1FICYmIGtleSA9PT0gJ3RpbWVsaXN0JztcblxuICAgIGlmICghY3VycmVudCB8fCAodGltZUlzQWN0aXZlIHx8IGNhbElzQWN0aXZlKSkgcmV0dXJuIGlkO1xuICB9KV0sXG5cbiAgcHJvcFR5cGVzOiBwcm9wVHlwZXMsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbnVsbCxcblxuICAgICAgbWluOiBuZXcgRGF0ZSgxOTAwLCAwLCAxKSxcbiAgICAgIG1heDogbmV3IERhdGUoMjA5OSwgMTEsIDMxKSxcbiAgICAgIGNhbGVuZGFyOiB0cnVlLFxuICAgICAgdGltZTogdHJ1ZSxcbiAgICAgIG9wZW46IGZhbHNlLFxuXG4gICAgICAvL2NhbGVuZGFyIG92ZXJyaWRlXG4gICAgICBmb290ZXI6IHRydWUsXG5cbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGNhbGVuZGFyQnV0dG9uOiAnU2VsZWN0IERhdGUnLFxuICAgICAgICB0aW1lQnV0dG9uOiAnU2VsZWN0IFRpbWUnXG4gICAgICB9LFxuXG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2Ryb3Bkb3dubGlzdCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY3gsXG4gICAgICAgIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjYWxlbmRhciA9IF9wcm9wcy5jYWxlbmRhcjtcbiAgICB2YXIgdGltZSA9IF9wcm9wcy50aW1lO1xuICAgIHZhciBvcGVuID0gX3Byb3BzLm9wZW47XG4gICAgdmFyIHRhYkluZGV4ID0gX3Byb3BzLnRhYkluZGV4O1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgZm9ybWF0ID0gX3Byb3BzLmZvcm1hdDtcbiAgICB2YXIgZWRpdEZvcm1hdCA9IF9wcm9wcy5lZGl0Rm9ybWF0O1xuICAgIHZhciB0aW1lRm9ybWF0ID0gX3Byb3BzLnRpbWVGb3JtYXQ7XG4gICAgdmFyIGN1bHR1cmUgPSBfcHJvcHMuY3VsdHVyZTtcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIHN0ZXAgPSBfcHJvcHMuc3RlcDtcbiAgICB2YXIgbWVzc2FnZXMgPSBfcHJvcHMubWVzc2FnZXM7XG4gICAgdmFyIG1pbiA9IF9wcm9wcy5taW47XG4gICAgdmFyIG1heCA9IF9wcm9wcy5tYXg7XG4gICAgdmFyIGJ1c3kgPSBfcHJvcHMuYnVzeTtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciByZWFkT25seSA9IF9wcm9wcy5yZWFkT25seTtcbiAgICB2YXIgbmFtZSA9IF9wcm9wcy5uYW1lO1xuICAgIHZhciBkcm9wVXAgPSBfcHJvcHMuZHJvcFVwO1xuICAgIHZhciB0aW1lQ29tcG9uZW50ID0gX3Byb3BzLnRpbWVDb21wb25lbnQ7XG4gICAgdmFyIGFyaWFMYWJlbGxlZGJ5ID0gX3Byb3BzWydhcmlhLWxhYmVsbGVkYnknXTtcbiAgICB2YXIgZm9jdXNlZCA9IHRoaXMuc3RhdGUuZm9jdXNlZDtcblxuICAgIHZhciBpbnB1dElEID0gdGhpcy5faWQoJ19pbnB1dCcpLFxuICAgICAgICB0aW1lTGlzdElEID0gdGhpcy5faWQoJ190aW1lX2xpc3Rib3gnKSxcbiAgICAgICAgZGF0ZUxpc3RJRCA9IHRoaXMuX2lkKCdfY2FsJyksXG4gICAgICAgIG93bnMgPSAnJztcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpLFxuICAgICAgICBjYWxQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoX3V0aWxDb21wYXQyWydkZWZhdWx0J10udHlwZShDYWxlbmRhcikucHJvcFR5cGVzKSk7XG5cbiAgICB2YXIgc2hvdWxkUmVuZGVyTGlzdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5pc0ZpcnN0Rm9jdXNlZFJlbmRlcih0aGlzKSB8fCBvcGVuLFxuICAgICAgICBkaXNhYmxlZE9yUmVhZG9ubHkgPSB0aGlzLmlzRGlzYWJsZWQoKSB8fCB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgY2FsZW5kYXJJc09wZW4gPSBvcGVuID09PSBwb3B1cHMuQ0FMRU5EQVIsXG4gICAgICAgIHRpbWVJc09wZW4gPSBvcGVuID09PSBwb3B1cHMuVElNRTtcblxuICAgIGlmIChjYWxlbmRhcikgb3ducyArPSBkYXRlTGlzdElEO1xuICAgIGlmICh0aW1lKSBvd25zICs9ICcgJyArIHRpbWVMaXN0SUQ7XG5cbiAgICB2YWx1ZSA9IGRhdGVPck51bGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICByZWY6ICdlbGVtZW50JyxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fa2V5RG93biksXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctZGF0ZXRpbWVwaWNrZXInLCAncnctd2lkZ2V0JywgKF9jeCA9IHt9LCBfY3hbJ3J3LXN0YXRlLWZvY3VzJ10gPSBmb2N1c2VkLCBfY3hbJ3J3LXN0YXRlLWRpc2FibGVkJ10gPSB0aGlzLmlzRGlzYWJsZWQoKSwgX2N4Wydydy1zdGF0ZS1yZWFkb25seSddID0gdGhpcy5pc1JlYWRPbmx5KCksIF9jeFsncnctaGFzLWJvdGgnXSA9IGNhbGVuZGFyICYmIHRpbWUsIF9jeFsncnctaGFzLW5laXRoZXInXSA9ICFjYWxlbmRhciAmJiAhdGltZSwgX2N4Wydydy1ydGwnXSA9IHRoaXMuaXNSdGwoKSwgX2N4Wydydy1vcGVuJyArIChkcm9wVXAgPyAnLXVwJyA6ICcnKV0gPSBvcGVuLCBfY3gpKVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfRGF0ZUlucHV0MlsnZGVmYXVsdCddLCB7XG4gICAgICAgIHJlZjogJ3ZhbHVlSW5wdXQnLFxuICAgICAgICBpZDogaW5wdXRJRCxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4IHx8IDAsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogISFvcGVuLFxuICAgICAgICAnYXJpYS1idXN5JzogISFidXN5LFxuICAgICAgICAnYXJpYS1vd25zJzogb3ducy50cmltKCksXG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgIHJlYWRPbmx5OiB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBmb3JtYXQ6IGdldEZvcm1hdCh0aGlzLnByb3BzKSxcbiAgICAgICAgZWRpdEZvcm1hdDogZWRpdEZvcm1hdCxcbiAgICAgICAgZWRpdGluZzogZm9jdXNlZCxcbiAgICAgICAgY3VsdHVyZTogY3VsdHVyZSxcbiAgICAgICAgcGFyc2U6IHRoaXMuX3BhcnNlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5fY2hhbmdlXG4gICAgICB9KSxcbiAgICAgIChjYWxlbmRhciB8fCB0aW1lKSAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LXNlbGVjdCcgfSxcbiAgICAgICAgY2FsZW5kYXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1dpZGdldEJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LWJ0bi1jYWxlbmRhcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRPclJlYWRvbmx5LFxuICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZE9yUmVhZG9ubHksXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IG1lc3NhZ2VzLmNhbGVuZGFyQnV0dG9uLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fY2xpY2suYmluZChudWxsLCBwb3B1cHMuQ0FMRU5EQVIpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ3J3LWkgcnctaS1jYWxlbmRhcicsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICB0aW1lICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9XaWRnZXRCdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdydy1idG4tdGltZScsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRPclJlYWRvbmx5LFxuICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZE9yUmVhZG9ubHksXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IG1lc3NhZ2VzLnRpbWVCdXR0b24sXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLl9jbGljay5iaW5kKG51bGwsIHBvcHVwcy5USU1FKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2xvY2stbycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3B1cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGRyb3BVcDogZHJvcFVwLFxuICAgICAgICAgIG9wZW46IHRpbWVJc09wZW4sXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuY2xvc2UsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIG9uT3BlbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlZnMudGltZVBvcHVwLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHNob3VsZFJlbmRlckxpc3QgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1RpbWVMaXN0MlsnZGVmYXVsdCddLCB7IHJlZjogJ3RpbWVQb3B1cCcsXG4gICAgICAgICAgICBpZDogdGltZUxpc3RJRCxcbiAgICAgICAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAndGltZWxpc3QnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGlucHV0SUQsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogb3BlbiAmJiAncG9saXRlJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICFvcGVuLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZm9ybWF0OiB0aW1lRm9ybWF0LFxuICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICBjdWx0dXJlOiBjdWx0dXJlLFxuICAgICAgICAgICAgb25Nb3ZlOiB0aGlzLl9zY3JvbGxUbyxcbiAgICAgICAgICAgIHByZXNlcnZlRGF0ZTogISFjYWxlbmRhcixcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQ6IHRpbWVDb21wb25lbnQsXG4gICAgICAgICAgICBvblNlbGVjdDogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fc2VsZWN0VGltZSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3B1cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LWNhbGVuZGFyLXBvcHVwJyxcbiAgICAgICAgICBkcm9wVXA6IGRyb3BVcCxcbiAgICAgICAgICBvcGVuOiBjYWxlbmRhcklzT3BlbixcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuY2xvc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdWxkUmVuZGVyTGlzdCAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDYWxlbmRhciwgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBjYWxQcm9wcywge1xuICAgICAgICAgIHJlZjogJ2NhbFBvcHVwJyxcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICBpZDogZGF0ZUxpc3RJRCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIW9wZW4sXG4gICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnY2FsZW5kYXInLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLl9tYXliZUhhbmRsZSh0aGlzLl9zZWxlY3REYXRlKSxcblxuICAgICAgICAgIG9uTmF2aWdhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBfY2hhbmdlOiBmdW5jdGlvbiBfY2hhbmdlKGRhdGUsIHN0ciwgY29uc3RyYWluKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkNoYW5nZSA9IF9wcm9wczIub25DaGFuZ2U7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcblxuICAgIGlmIChjb25zdHJhaW4pIGRhdGUgPSB0aGlzLmluUmFuZ2VWYWx1ZShkYXRlKTtcblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgaWYgKGRhdGUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChkYXRlICE9IHZhbHVlKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgICAgICAgb25DaGFuZ2UoZGF0ZSwgc3RyKTtcbiAgICAgIH0gZWxzZSBpZiAoIV91dGlsRGF0ZXMyWydkZWZhdWx0J10uZXEoZGF0ZSwgdmFsdWUpKSBvbkNoYW5nZShkYXRlLCBzdHIpO1xuICAgIH1cbiAgfSxcblxuICBfa2V5RG93bjogZnVuY3Rpb24gX2tleURvd24oZSkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb3BlbiA9IF9wcm9wczMub3BlbjtcbiAgICB2YXIgY2FsZW5kYXIgPSBfcHJvcHMzLmNhbGVuZGFyO1xuICAgIHZhciB0aW1lID0gX3Byb3BzMy50aW1lO1xuXG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBvcGVuKSB0aGlzLmNsb3NlKCk7ZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBpZiAoY2FsZW5kYXIgJiYgdGltZSkgdGhpcy5vcGVuKG9wZW4gPT09IHBvcHVwcy5DQUxFTkRBUiA/IHBvcHVwcy5USU1FIDogcG9wdXBzLkNBTEVOREFSKTtlbHNlIGlmICh0aW1lKSB0aGlzLm9wZW4ocG9wdXBzLlRJTUUpO2Vsc2UgaWYgKGNhbGVuZGFyKSB0aGlzLm9wZW4ocG9wdXBzLkNBTEVOREFSKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAob3Blbikge1xuICAgICAgaWYgKG9wZW4gPT09IHBvcHVwcy5DQUxFTkRBUikgdGhpcy5yZWZzLmNhbFBvcHVwLl9rZXlEb3duKGUpO1xuICAgICAgaWYgKG9wZW4gPT09IHBvcHVwcy5USU1FKSB0aGlzLnJlZnMudGltZVBvcHVwLl9rZXlEb3duKGUpO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KCdvbktleURvd24nLCBbZV0pO1xuICB9LFxuXG4gIF9mb2N1czogZnVuY3Rpb24gX2ZvY3VzKGZvY3VzZWQsIGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWZvY3VzZWQpIF90aGlzMi5jbG9zZSgpO1xuXG4gICAgICBpZiAoZm9jdXNlZCAhPT0gX3RoaXMyLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMyLm5vdGlmeShmb2N1c2VkID8gJ29uRm9jdXMnIDogJ29uQmx1cicsIGUpO1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBmb2N1c2VkOiBmb2N1c2VkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAoKDAsIF9yZWFjdExpYkdldEFjdGl2ZUVsZW1lbnQyWydkZWZhdWx0J10pKCkgIT09IF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy52YWx1ZUlucHV0KSkgdGhpcy5yZWZzLnZhbHVlSW5wdXQuZm9jdXMoKTtcbiAgfSxcblxuICBfc2VsZWN0RGF0ZTogZnVuY3Rpb24gX3NlbGVjdERhdGUoZGF0ZSkge1xuICAgIHZhciBmb3JtYXQgPSBnZXRGb3JtYXQodGhpcy5wcm9wcyksXG4gICAgICAgIGRhdGVUaW1lID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tZXJnZShkYXRlLCB0aGlzLnByb3BzLnZhbHVlKSxcbiAgICAgICAgZGF0ZVN0ciA9IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLnByb3BzLmN1bHR1cmUpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMubm90aWZ5KCdvblNlbGVjdCcsIFtkYXRlVGltZSwgZGF0ZVN0cl0pO1xuICAgIHRoaXMuX2NoYW5nZShkYXRlVGltZSwgZGF0ZVN0ciwgdHJ1ZSk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9LFxuXG4gIF9zZWxlY3RUaW1lOiBmdW5jdGlvbiBfc2VsZWN0VGltZShkYXR1bSkge1xuICAgIHZhciBmb3JtYXQgPSBnZXRGb3JtYXQodGhpcy5wcm9wcyksXG4gICAgICAgIGRhdGVUaW1lID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tZXJnZSh0aGlzLnByb3BzLnZhbHVlLCBkYXR1bS5kYXRlKSxcbiAgICAgICAgZGF0ZVN0ciA9IGZvcm1hdERhdGUoZGF0dW0uZGF0ZSwgZm9ybWF0LCB0aGlzLnByb3BzLmN1bHR1cmUpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMubm90aWZ5KCdvblNlbGVjdCcsIFtkYXRlVGltZSwgZGF0ZVN0cl0pO1xuICAgIHRoaXMuX2NoYW5nZShkYXRlVGltZSwgZGF0ZVN0ciwgdHJ1ZSk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9LFxuXG4gIF9jbGljazogZnVuY3Rpb24gX2NsaWNrKHZpZXcsIGUpIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gICAgdGhpcy50b2dnbGUodmlldywgZSk7XG4gIH0sXG5cbiAgX3BhcnNlOiBmdW5jdGlvbiBfcGFyc2Uoc3RyaW5nKSB7XG4gICAgdmFyIGZvcm1hdCA9IGdldEZvcm1hdCh0aGlzLnByb3BzLCB0cnVlKSxcbiAgICAgICAgZWRpdEZvcm1hdCA9IHRoaXMucHJvcHMuZWRpdEZvcm1hdCxcbiAgICAgICAgcGFyc2UgPSB0aGlzLnByb3BzLnBhcnNlLFxuICAgICAgICBmb3JtYXRzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHBhcnNlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gcGFyc2Uoc3RyaW5nLCB0aGlzLnByb3BzLmN1bHR1cmUpO1xuXG4gICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSBmb3JtYXRzLnB1c2goZm9ybWF0KTtcblxuICAgIGlmICh0eXBlb2YgZWRpdEZvcm1hdCA9PT0gJ3N0cmluZycpIGZvcm1hdHMucHVzaChlZGl0Rm9ybWF0KTtcblxuICAgIGlmIChwYXJzZSkgZm9ybWF0cyA9IGZvcm1hdHMuY29uY2F0KHRoaXMucHJvcHMucGFyc2UpO1xuXG4gICAgKDAsIF9yZWFjdExpYkludmFyaWFudDJbJ2RlZmF1bHQnXSkoZm9ybWF0cy5sZW5ndGgsICdSZWFjdCBXaWRnZXRzOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWVkIGBwYXJzZWAgZm9ybWF0cyBwcm92aWRlZCBhbmQgdGhlIGBmb3JtYXRgIHByb3AgaXMgYSBmdW5jdGlvbi4gJyArICd0aGUgRGF0ZVRpbWVQaWNrZXIgaXMgdW5hYmxlIHRvIHBhcnNlIGAlc2AgaW50byBhIGRhdGVUaW1lLCAnICsgJ3BsZWFzZSBwcm92aWRlIGVpdGhlciBhIHBhcnNlIGZ1bmN0aW9uIG9yIEdsb2JhbGl6ZS5qcyBjb21wYXRpYmxlIHN0cmluZyBmb3IgYGZvcm1hdGAnLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHNQYXJzZXIoZm9ybWF0cywgdGhpcy5wcm9wcy5jdWx0dXJlLCBzdHJpbmcpO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKHZpZXcpIHtcbiAgICB0aGlzLnByb3BzLm9wZW4gPyB0aGlzLnByb3BzLm9wZW4gIT09IHZpZXcgPyB0aGlzLm9wZW4odmlldykgOiB0aGlzLmNsb3NlKHZpZXcpIDogdGhpcy5vcGVuKHZpZXcpO1xuICB9LFxuXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4odmlldykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4gIT09IHZpZXcgJiYgdGhpcy5wcm9wc1t2aWV3XSA9PT0gdHJ1ZSkgdGhpcy5ub3RpZnkoJ29uVG9nZ2xlJywgdmlldyk7XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIGZhbHNlKTtcbiAgfSxcblxuICBpblJhbmdlVmFsdWU6IGZ1bmN0aW9uIGluUmFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tYXgoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5taW4odmFsdWUsIHRoaXMucHJvcHMubWF4KSwgdGhpcy5wcm9wcy5taW4pO1xuICB9XG5cbn0pO1xuXG52YXIgVW5jb250cm9sbGVkRGF0ZVRpbWVQaWNrZXIgPSAoMCwgX3VuY29udHJvbGxhYmxlMlsnZGVmYXVsdCddKShEYXRlVGltZVBpY2tlciwgeyBvcGVuOiAnb25Ub2dnbGUnLCB2YWx1ZTogJ29uQ2hhbmdlJyB9KTtcblxuVW5jb250cm9sbGVkRGF0ZVRpbWVQaWNrZXIuQmFzZURhdGVUaW1lUGlja2VyID0gRGF0ZVRpbWVQaWNrZXI7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFVuY29udHJvbGxlZERhdGVUaW1lUGlja2VyO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXQocHJvcHMpIHtcbiAgdmFyIGNhbCA9IHByb3BzW3BvcHVwcy5DQUxFTkRBUl0gIT0gbnVsbCA/IHByb3BzLmNhbGVuZGFyIDogdHJ1ZSxcbiAgICAgIHRpbWUgPSBwcm9wc1twb3B1cHMuVElNRV0gIT0gbnVsbCA/IHByb3BzLnRpbWUgOiB0cnVlO1xuXG4gIHJldHVybiBwcm9wcy5mb3JtYXQgPyBwcm9wcy5mb3JtYXQgOiBjYWwgJiYgdGltZSB8fCAhY2FsICYmICF0aW1lID8gbG9jYWxpemVycy5kYXRlLmZvcm1hdHNbJ2RlZmF1bHQnXSA6IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzW2NhbCA/ICdkYXRlJyA6ICd0aW1lJ107XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBjdWx0dXJlKSB7XG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgdmFsID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXRlLCBmb3JtYXQsIGN1bHR1cmUpO1xuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdHNQYXJzZXIoZm9ybWF0cywgY3VsdHVyZSwgc3RyKSB7XG4gIHZhciBkYXRlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGUgPSBsb2NhbGl6ZXJzLmRhdGUucGFyc2Uoc3RyLCBmb3JtYXRzW2ldLCBjdWx0dXJlKTtcbiAgICBpZiAoZGF0ZSkgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRhdGVPck51bGwoZHQpIHtcbiAgaWYgKGR0ICYmICFpc05hTihkdC5nZXRUaW1lKCkpKSByZXR1cm4gZHQ7XG4gIHJldHVybiBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyAjNzU6IG5lZWQgdG8gYWdncmVzc2l2ZWx5IHJlY2xhaW0gZm9jdXMgZnJvbSB0aGUgY2FsZW5kYXIgb3RoZXJ3aXNlXG4vLyBkaXNhYmxlZCBoZWFkZXIvZm9vdGVyIGJ1dHRvbnMgd2lsbCBkcm9wIGZvY3VzIGNvbXBsZXRlbHkgZnJvbSB0aGUgd2lkZ2V0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uZmlndXJhdGlvbik7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZTtcblxudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMueWVhckZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy55ZWFyO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgb3B0aW9uSUQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgY3VsdHVyZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgZm9jdXNlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtaW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWF4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICB5ZWFyRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0XG59O1xuXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwoZGF0YUEsIGRhdGVCKSB7XG4gIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVxKGRhdGFBLCBkYXRlQiwgJ3llYXInKTtcbn07XG52YXIgb3B0aW9uSWQgPSBmdW5jdGlvbiBvcHRpb25JZChpZCwgZGF0ZSkge1xuICByZXR1cm4gJycgKyBpZCArICdfX2RlY2FkZV8nICsgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS55ZWFyKGRhdGUpO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0RlY2FkZVZpZXcnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1B1cmVSZW5kZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9SdGxDaGlsZENvbnRleHRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoKV0sXG5cbiAgcHJvcFR5cGVzOiBwcm9wVHlwZXMsXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIGFjdGl2ZUlkID0gb3B0aW9uSWQodGhpcy5faWQoKSwgdGhpcy5wcm9wcy5mb2N1c2VkKTtcbiAgICB0aGlzLmFyaWFBY3RpdmVEZXNjZW5kYW50KGFjdGl2ZUlkKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wcy5mb2N1c2VkO1xuICAgIHZhciB5ZWFycyA9IGdldERlY2FkZVllYXJzKGZvY3VzZWQpO1xuICAgIHZhciByb3dzID0gX3V0aWxfMlsnZGVmYXVsdCddLmNodW5rKHllYXJzLCA0KTtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBfdXRpbF8yWydkZWZhdWx0J10ub21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0YWJsZScsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICByb2xlOiAnZ3JpZCcsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsICdydy1uYXYtdmlldycpXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGJvZHknLFxuICAgICAgICBudWxsLFxuICAgICAgICByb3dzLm1hcCh0aGlzLl9yb3cpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBfcm93OiBmdW5jdGlvbiBfcm93KHJvdywgcm93SWR4KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9jdXNlZCA9IF9wcm9wczIuZm9jdXNlZDtcbiAgICB2YXIgc2VsZWN0ZWQgPSBfcHJvcHMyLnNlbGVjdGVkO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQ7XG4gICAgdmFyIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZTtcbiAgICB2YXIgdmFsdWUgPSBfcHJvcHMyLnZhbHVlO1xuICAgIHZhciB0b2RheSA9IF9wcm9wczIudG9kYXk7XG4gICAgdmFyIGN1bHR1cmUgPSBfcHJvcHMyLmN1bHR1cmU7XG4gICAgdmFyIG1pbiA9IF9wcm9wczIubWluO1xuICAgIHZhciBtYXggPSBfcHJvcHMyLm1heDtcbiAgICB2YXIgRGF5ID0gX3Byb3BzMi5kYXlDb21wb25lbnQ7XG4gICAgdmFyIGlkID0gdGhpcy5faWQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0cicsXG4gICAgICB7IGtleTogJ3Jvd18nICsgcm93SWR4LCByb2xlOiAncm93JyB9LFxuICAgICAgcm93Lm1hcChmdW5jdGlvbiAoZGF0ZSwgY29sSWR4KSB7XG4gICAgICAgIHZhciBpc0ZvY3VzZWQgPSBpc0VxdWFsKGRhdGUsIGZvY3VzZWQpLFxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IGlzRXF1YWwoZGF0ZSwgdmFsdWUpLFxuICAgICAgICAgICAgY3VycmVudFllYXIgPSBpc0VxdWFsKGRhdGUsIHRvZGF5KSxcbiAgICAgICAgICAgIGxhYmVsID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXRlLCBmb3JtYXQoX3RoaXMucHJvcHMpLCBjdWx0dXJlKTtcblxuICAgICAgICB2YXIgY3VycmVudElEID0gb3B0aW9uSWQoaWQsIGRhdGUpO1xuXG4gICAgICAgIHJldHVybiAhX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5pblJhbmdlKGRhdGUsIG1pbiwgbWF4LCAneWVhcicpID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7IGtleTogY29sSWR4LCByb2xlOiAncHJlc2VudGF0aW9uJywgY2xhc3NOYW1lOiAncnctZW1wdHktY2VsbCcgfSxcbiAgICAgICAgICAnwqAnXG4gICAgICAgICkgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogY29sSWR4LFxuICAgICAgICAgICAgcm9sZTogJ2dyaWRjZWxsJyxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SUQsXG4gICAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IGxhYmVsLFxuICAgICAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBkaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBjdXJyZW50SUQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2hhbmdlLmJpbmQobnVsbCwgZGF0ZSksXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgncnctYnRuJywge1xuICAgICAgICAgICAgICAgICdydy1vZmYtcmFuZ2UnOiAhaW5EZWNhZGUoZGF0ZSwgZm9jdXNlZCksXG4gICAgICAgICAgICAgICAgJ3J3LXN0YXRlLWZvY3VzJzogaXNGb2N1c2VkLFxuICAgICAgICAgICAgICAgICdydy1zdGF0ZS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgJ3J3LW5vdyc6IGN1cnJlbnRZZWFyXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpbkRlY2FkZShkYXRlLCBzdGFydCkge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5ndGUoZGF0ZSwgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5zdGFydE9mKHN0YXJ0LCAnZGVjYWRlJyksICd5ZWFyJykgJiYgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5sdGUoZGF0ZSwgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lbmRPZihzdGFydCwgJ2RlY2FkZScpLCAneWVhcicpO1xufVxuXG5mdW5jdGlvbiBnZXREZWNhZGVZZWFycyhfZGF0ZSkge1xuICB2YXIgZGF5cyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSxcbiAgICAgIGRhdGUgPSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmFkZChfdXRpbERhdGVzMlsnZGVmYXVsdCddLnN0YXJ0T2YoX2RhdGUsICdkZWNhZGUnKSwgLTIsICd5ZWFyJyk7XG5cbiAgcmV0dXJuIGRheXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGF0ZSA9IF91dGlsRGF0ZXMyWydkZWZhdWx0J10uYWRkKGRhdGUsIDEsICd5ZWFyJyk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGFjdGl2ZUVsZW1lbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvZ2V0QWN0aXZlRWxlbWVudCcpLFxuICAgIF8gPSByZXF1aXJlKCcuL3V0aWwvXycpLFxuICAgIGNvbnRhaW5zID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvcXVlcnkvY29udGFpbnMnKSxcbiAgICBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0JyksXG4gICAgQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpLFxuICAgIFBvcHVwID0gcmVxdWlyZSgnLi9Qb3B1cCcpLFxuICAgIFBsYWluTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpLFxuICAgIEdyb3VwYWJsZUxpc3QgPSByZXF1aXJlKCcuL0xpc3RHcm91cGFibGUnKSxcbiAgICB2YWxpZGF0ZUxpc3QgPSByZXF1aXJlKCcuL3V0aWwvdmFsaWRhdGVMaXN0SW50ZXJmYWNlJyksXG4gICAgY3JlYXRlVW5jb250cm9sbGVkV2lkZ2V0ID0gcmVxdWlyZSgndW5jb250cm9sbGFibGUnKTtcblxudmFyIG9taXQgPSBfLm9taXQ7XG52YXIgcGljayA9IF8ucGljaztcbnZhciByZXN1bHQgPSBfLnJlc3VsdDtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLy8tLSBjb250cm9sbGVkIHByb3BzIC0tLS0tLS0tLS0tXG4gIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblRvZ2dsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0RmllbGQ6IEN1c3RvbVByb3BUeXBlcy5hY2Nlc3NvcixcblxuICB2YWx1ZUNvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBpdGVtQ29tcG9uZW50OiBDdXN0b21Qcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIGxpc3RDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICBncm91cENvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBncm91cEJ5OiBDdXN0b21Qcm9wVHlwZXMuYWNjZXNzb3IsXG5cbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXG4gIHNlYXJjaFRlcm06IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICBidXN5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICBkcm9wVXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlciwgLy9wb3B1cFxuXG4gIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnZGlzYWJsZWQnXSldKSxcblxuICByZWFkT25seTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3JlYWRPbmx5J10pXSksXG5cbiAgbWVzc2FnZXM6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3BlbjogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgZW1wdHlMaXN0OiBDdXN0b21Qcm9wVHlwZXMubWVzc2FnZSxcbiAgICBlbXB0eUZpbHRlcjogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IEN1c3RvbVByb3BUeXBlcy5tZXNzYWdlXG4gIH0pXG59O1xuXG52YXIgRHJvcGRvd25MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnRHJvcGRvd25MaXN0JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9XaWRnZXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9UaW1lb3V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUHVyZVJlbmRlck1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFGaWx0ZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhSGVscGVyc01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1BvcHVwU2Nyb2xsVG9NaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9SdGxQYXJlbnRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxheTogNTAwLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHNlYXJjaFRlcm06ICcnLFxuICAgICAgbWVzc2FnZXM6IG1zZ3MoKSxcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnZHJvcGRvd25saXN0J1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGZpbHRlciA9IHRoaXMucHJvcHMub3BlbiAmJiB0aGlzLnByb3BzLmZpbHRlcixcbiAgICAgICAgZGF0YSA9IGZpbHRlciA/IHRoaXMuZmlsdGVyKHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5zZWFyY2hUZXJtKSA6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgICAgaW5pdGlhbElkeCA9IHRoaXMuX2RhdGFJbmRleE9mKHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlsdGVyZWREYXRhOiBmaWx0ZXIgJiYgZGF0YSxcbiAgICAgIHNlbGVjdGVkSXRlbTogZGF0YVtpbml0aWFsSWR4XSxcbiAgICAgIGZvY3VzZWRJdGVtOiBkYXRhW2luaXRpYWxJZHhdIHx8IGRhdGFbMF1cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucmVmcy5saXN0ICYmIHZhbGlkYXRlTGlzdCh0aGlzLnJlZnMubGlzdCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIHZhciBmaWx0ZXIgPSBwcm9wcy5vcGVuICYmIHByb3BzLmZpbHRlcixcbiAgICAgICAgZGF0YSA9IGZpbHRlciA/IHRoaXMuZmlsdGVyKHByb3BzLmRhdGEsIHByb3BzLnNlYXJjaFRlcm0pIDogcHJvcHMuZGF0YSxcbiAgICAgICAgaWR4ID0gdGhpcy5fZGF0YUluZGV4T2YoZGF0YSwgcHJvcHMudmFsdWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZERhdGE6IGZpbHRlciAmJiBkYXRhLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBkYXRhW2lkeF0sXG4gICAgICBmb2N1c2VkSXRlbTogZGF0YVshIH5pZHggPyAwIDogaWR4XVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY3gsXG4gICAgICAgIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciB0YWJJbmRleCA9IF9wcm9wcy50YWJJbmRleDtcbiAgICB2YXIgZmlsdGVyID0gX3Byb3BzLmZpbHRlcjtcbiAgICB2YXIgZ3JvdXBCeSA9IF9wcm9wcy5ncm91cEJ5O1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBidXN5ID0gX3Byb3BzLmJ1c3k7XG4gICAgdmFyIGRyb3BVcCA9IF9wcm9wcy5kcm9wVXA7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gX3Byb3BzLnBsYWNlaG9sZGVyO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3BlbiA9IF9wcm9wcy5vcGVuO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHk7XG4gICAgdmFyIFZhbHVlQ29tcG9uZW50ID0gX3Byb3BzLnZhbHVlQ29tcG9uZW50O1xuICAgIHZhciBMaXN0ID0gX3Byb3BzLmxpc3RDb21wb25lbnQ7XG5cbiAgICBMaXN0ID0gTGlzdCB8fCBncm91cEJ5ICYmIEdyb3VwYWJsZUxpc3QgfHwgUGxhaW5MaXN0O1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG4gICAgdmFyIGxpc3RQcm9wcyA9IHBpY2sodGhpcy5wcm9wcywgT2JqZWN0LmtleXMoY29tcGF0LnR5cGUoTGlzdCkucHJvcFR5cGVzKSk7XG4gICAgdmFyIHBvcHVwUHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKGNvbXBhdC50eXBlKFBvcHVwKS5wcm9wVHlwZXMpKTtcblxuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IF9zdGF0ZS5mb2N1c2VkSXRlbTtcbiAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3N0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB2YXIgZm9jdXNlZCA9IF9zdGF0ZS5mb2N1c2VkO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICB2YWx1ZUl0ZW0gPSB0aGlzLl9kYXRhSXRlbShkYXRhLCB2YWx1ZSkgLy8gdGFrZSB2YWx1ZSBmcm9tIHRoZSByYXcgZGF0YVxuICAgICxcbiAgICAgICAgbGlzdElEID0gdGhpcy5faWQoJ19fbGlzdGJveCcpO1xuXG4gICAgdmFyIHNob3VsZFJlbmRlckxpc3QgPSBfLmlzRmlyc3RGb2N1c2VkUmVuZGVyKHRoaXMpIHx8IG9wZW47XG5cbiAgICBtZXNzYWdlcyA9IG1zZ3MobWVzc2FnZXMpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4IHx8ICcwJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBvcGVuLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICdhcmlhLW93bnMnOiBsaXN0SUQsXG4gICAgICAgICdhcmlhLWJ1c3knOiAhIWJ1c3ksXG4gICAgICAgICdhcmlhLWxpdmUnOiAhb3BlbiAmJiAncG9saXRlJyxcbiAgICAgICAgLy9hcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9e2FjdGl2ZUlEfVxuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogcmVhZE9ubHksXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fa2V5RG93bixcbiAgICAgICAgb25DbGljazogdGhpcy5fY2xpY2ssXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksXG4gICAgICAgIG9uQmx1cjogdGhpcy5fZm9jdXMuYmluZChudWxsLCBmYWxzZSksXG4gICAgICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCAncnctZHJvcGRvd25saXN0JywgJ3J3LXdpZGdldCcsIChfY3ggPSB7fSwgX2N4Wydydy1zdGF0ZS1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9jeFsncnctc3RhdGUtcmVhZG9ubHknXSA9IHJlYWRPbmx5LCBfY3hbJ3J3LXN0YXRlLWZvY3VzJ10gPSBmb2N1c2VkLCBfY3hbJ3J3LXJ0bCddID0gdGhpcy5pc1J0bCgpLCBfY3hbJ3J3LW9wZW4nICsgKGRyb3BVcCA/ICctdXAnIDogJycpXSA9IG9wZW4sIF9jeCkpIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LWRyb3Bkb3dubGlzdC1waWNrZXIgcnctc2VsZWN0IHJ3LWJ0bicgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2FyZXQtZG93bicgKyAoYnVzeSA/ICcgcnctbG9hZGluZycgOiAnJykgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zcicgfSxcbiAgICAgICAgICAgIHJlc3VsdChtZXNzYWdlcy5vcGVuLCB0aGlzLnByb3BzKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncnctaW5wdXQnXG4gICAgICAgIH0sXG4gICAgICAgICF2YWx1ZUl0ZW0gJiYgcGxhY2Vob2xkZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LXBsYWNlaG9sZGVyJyB9LFxuICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICkgOiB0aGlzLnByb3BzLnZhbHVlQ29tcG9uZW50ID8gUmVhY3QuY3JlYXRlRWxlbWVudChWYWx1ZUNvbXBvbmVudCwgeyBpdGVtOiB2YWx1ZUl0ZW0gfSkgOiB0aGlzLl9kYXRhVGV4dCh2YWx1ZUl0ZW0pXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUG9wdXAsXG4gICAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcG9wdXBQcm9wcywge1xuICAgICAgICAgIG9uT3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZvY3VzKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk9wZW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZWZzLmxpc3QuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmNsb3NlXG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZmlsdGVyICYmIHRoaXMuX3JlbmRlckZpbHRlcihtZXNzYWdlcyksXG4gICAgICAgICAgc2hvdWxkUmVuZGVyTGlzdCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7IHJlZjogJ2xpc3QnXG4gICAgICAgICAgfSwgbGlzdFByb3BzLCB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtcyxcbiAgICAgICAgICAgIGlkOiBsaXN0SUQsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogb3BlbiAmJiAncG9saXRlJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLl9pZCgpLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXRoaXMucHJvcHMub3BlbixcbiAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBmb2N1c2VkOiBvcGVuID8gZm9jdXNlZEl0ZW0gOiBudWxsLFxuICAgICAgICAgICAgb25TZWxlY3Q6IHRoaXMuX29uU2VsZWN0LFxuICAgICAgICAgICAgb25Nb3ZlOiB0aGlzLl9zY3JvbGxUbyxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgIGVtcHR5TGlzdDogZGF0YS5sZW5ndGggPyBtZXNzYWdlcy5lbXB0eUZpbHRlciA6IG1lc3NhZ2VzLmVtcHR5TGlzdFxuICAgICAgICAgICAgfSB9KSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX3JlbmRlckZpbHRlcjogZnVuY3Rpb24gX3JlbmRlckZpbHRlcihtZXNzYWdlcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgcmVmOiAnZmlsdGVyV3JhcHBlcicsIGNsYXNzTmFtZTogJ3J3LWZpbHRlci1pbnB1dCcgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zZWxlY3QgcnctYnRuJyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdydy1pIHJ3LWktc2VhcmNoJyB9KVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyByZWY6ICdmaWx0ZXInLCBjbGFzc05hbWU6ICdydy1pbnB1dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfLnJlc3VsdChtZXNzYWdlcy5maWx0ZXJQbGFjZWhvbGRlciwgdGhpcy5wcm9wcyksXG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnNlYXJjaFRlcm0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubm90aWZ5KCdvblNlYXJjaCcsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSB9KVxuICAgICk7XG4gIH0sXG5cbiAgX2ZvY3VzOiBfLmlmTm90RGlzYWJsZWQodHJ1ZSwgZnVuY3Rpb24gKGZvY3VzZWQsIGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWZvY3VzZWQpIF90aGlzMy5jbG9zZSgpO1xuXG4gICAgICBpZiAoZm9jdXNlZCAhPT0gX3RoaXMzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMzLm5vdGlmeShmb2N1c2VkID8gJ29uRm9jdXMnIDogJ29uQmx1cicsIGUpO1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmb2N1c2VkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcblxuICBfb25TZWxlY3Q6IF8uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLm5vdGlmeSgnb25TZWxlY3QnLCBkYXRhKTtcbiAgICB0aGlzLmNoYW5nZShkYXRhKTtcbiAgICB0aGlzLmZvY3VzKHRoaXMpO1xuICB9KSxcblxuICBfY2xpY2s6IF8uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZSkge1xuICAgIHZhciB3cmFwcGVyID0gdGhpcy5yZWZzLmZpbHRlcldyYXBwZXI7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuZmlsdGVyIHx8ICF0aGlzLnByb3BzLm9wZW4pIHRoaXMudG9nZ2xlKCk7ZWxzZSBpZiAoIWNvbnRhaW5zKGNvbXBhdC5maW5kRE9NTm9kZSh3cmFwcGVyKSwgZS50YXJnZXQpKSB0aGlzLmNsb3NlKCk7XG5cbiAgICB0aGlzLm5vdGlmeSgnb25DbGljaycsIGUpO1xuICB9KSxcblxuICBfa2V5RG93bjogXy5pZk5vdERpc2FibGVkKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGtleSA9IGUua2V5LFxuICAgICAgICBhbHQgPSBlLmFsdEtleSxcbiAgICAgICAgbGlzdCA9IHRoaXMucmVmcy5saXN0LFxuICAgICAgICBmaWx0ZXJpbmcgPSB0aGlzLnByb3BzLmZpbHRlcixcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLFxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSxcbiAgICAgICAgaXNPcGVuID0gdGhpcy5wcm9wcy5vcGVuLFxuICAgICAgICBjbG9zZVdpdGhGb2N1cyA9IGZ1bmN0aW9uIGNsb3NlV2l0aEZvY3VzKCkge1xuICAgICAgX3RoaXM0LmNsb3NlKCksIGNvbXBhdC5maW5kRE9NTm9kZShfdGhpczQpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIGlmIChrZXkgPT09ICdFbmQnKSB7XG4gICAgICBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QubGFzdCgpIH0pO2Vsc2UgY2hhbmdlKGxpc3QubGFzdCgpKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QuZmlyc3QoKSB9KTtlbHNlIGNoYW5nZShsaXN0LmZpcnN0KCkpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJyAmJiBpc09wZW4pIHtcbiAgICAgIGNsb3NlV2l0aEZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICgoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJyAnICYmICFmaWx0ZXJpbmcpICYmIGlzT3Blbikge1xuICAgICAgY2hhbmdlKHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0sIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgaWYgKGFsdCkgdGhpcy5vcGVuKCk7ZWxzZSBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QubmV4dChmb2N1c2VkSXRlbSkgfSk7ZWxzZSBjaGFuZ2UobGlzdC5uZXh0KHNlbGVjdGVkSXRlbSkpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGlmIChhbHQpIGNsb3NlV2l0aEZvY3VzKCk7ZWxzZSBpZiAoaXNPcGVuKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QucHJldihmb2N1c2VkSXRlbSkgfSk7ZWxzZSBjaGFuZ2UobGlzdC5wcmV2KHNlbGVjdGVkSXRlbSkpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoISh0aGlzLnByb3BzLmZpbHRlciAmJiBpc09wZW4pKSB0aGlzLnNlYXJjaChTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpc09wZW4gPyBfdGhpczQuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogaXRlbSB9KSA6IGNoYW5nZShpdGVtKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm90aWZ5KCdvbktleURvd24nLCBbZV0pO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlKGl0ZW0sIGZyb21MaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICAgIGZyb21MaXN0ID8gc2VsZi5fb25TZWxlY3QoaXRlbSkgOiBzZWxmLmNoYW5nZShpdGVtKTtcbiAgICB9XG4gIH0pLFxuXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGRhdGEpIHtcbiAgICBpZiAoIV8uaXNTaGFsbG93RXF1YWwoZGF0YSwgdGhpcy5wcm9wcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMubm90aWZ5KCdvbkNoYW5nZScsIGRhdGEpO1xuICAgICAgdGhpcy5ub3RpZnkoJ29uU2VhcmNoJywgJycpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICBmb2N1czogZnVuY3Rpb24gZm9jdXModGFyZ2V0KSB7XG4gICAgdmFyIGluc3QgPSB0YXJnZXQgfHwgKHRoaXMucHJvcHMuZmlsdGVyICYmIHRoaXMucHJvcHMub3BlbiA/IHRoaXMucmVmcy5maWx0ZXIgOiB0aGlzLnJlZnMuaW5wdXQpO1xuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQoKSAhPT0gY29tcGF0LmZpbmRET01Ob2RlKGluc3QpKSBjb21wYXQuZmluZERPTU5vZGUoaW5zdCkuZm9jdXMoKTtcbiAgfSxcblxuICBfZGF0YTogZnVuY3Rpb24gX2RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZmlsdGVyZWREYXRhIHx8IHRoaXMucHJvcHMuZGF0YS5jb25jYXQoKTtcbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uIHNlYXJjaChjaGFyYWN0ZXIsIGNiKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgd29yZCA9ICgodGhpcy5fc2VhcmNoVGVybSB8fCAnJykgKyBjaGFyYWN0ZXIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLl9zZWFyY2hUZXJtID0gd29yZDtcblxuICAgIHRoaXMuc2V0VGltZW91dCgnc2VhcmNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3QgPSBfdGhpczUucmVmcy5saXN0LFxuICAgICAgICAgIGtleSA9IF90aGlzNS5wcm9wcy5vcGVuID8gJ2ZvY3VzZWRJdGVtJyA6ICdzZWxlY3RlZEl0ZW0nLFxuICAgICAgICAgIGl0ZW0gPSBsaXN0Lm5leHQoX3RoaXM1LnN0YXRlW2tleV0sIHdvcmQpO1xuXG4gICAgICBfdGhpczUuX3NlYXJjaFRlcm0gPSAnJztcbiAgICAgIGlmIChpdGVtKSBjYihpdGVtKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfSxcblxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIHRydWUpO1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLm5vdGlmeSgnb25Ub2dnbGUnLCBmYWxzZSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIG1zZ3MobXNncykge1xuICByZXR1cm4gYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICBvcGVuOiAnb3BlbiBkcm9wZG93bicsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICcnLFxuICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnLFxuICAgIGVtcHR5RmlsdGVyOiAnVGhlIGZpbHRlciByZXR1cm5lZCBubyByZXN1bHRzJyB9LCBtc2dzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVVbmNvbnRyb2xsZWRXaWRnZXQoRHJvcGRvd25MaXN0LCB7IG9wZW46ICdvblRvZ2dsZScsIHZhbHVlOiAnb25DaGFuZ2UnLCBzZWFyY2hUZXJtOiAnb25TZWFyY2gnIH0pO1xuXG5tb2R1bGUuZXhwb3J0cy5CYXNlRHJvcGRvd25MaXN0ID0gRHJvcGRvd25MaXN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBCdG4gPSByZXF1aXJlKCcuL1dpZGdldEJ1dHRvbicpLFxuICAgIGxvY2FsaXplcnMgPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpLmxvY2FsZTtcblxudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZm9ybWF0IHx8IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzLmZvb3Rlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnRm9vdGVyJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgbm93ID0gdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgZm9ybWF0dGVkID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChub3csIGZvcm1hdCh0aGlzLnByb3BzKSwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3J3LWZvb3RlcicgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEJ0bixcbiAgICAgICAgeyB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICEhdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAnYXJpYS1yZWFkb25seSc6ICEhdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2suYmluZChudWxsLCBub3cpXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdHRlZFxuICAgICAgKVxuICAgICk7XG4gIH1cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBCdG4gPSByZXF1aXJlKCcuL1dpZGdldEJ1dHRvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdleHBvcnRzJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICB1cERpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHByZXZEaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBuZXh0RGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25WaWV3Q2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTW92ZUxlZnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Nb3ZlUmlnaHQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICBtZXNzYWdlczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1vdmVCYWNrOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbW92ZUZvcndhcmQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9LFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1B1cmVSZW5kZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9SdGxDaGlsZENvbnRleHRNaXhpbicpXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbW92ZUJhY2s6ICduYXZpZ2F0ZSBiYWNrJyxcbiAgICAgICAgbW92ZUZvcndhcmQ6ICduYXZpZ2F0ZSBmb3J3YXJkJ1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBsYWJlbCA9IF9wcm9wcy5sYWJlbDtcbiAgICB2YXIgbGFiZWxJZCA9IF9wcm9wcy5sYWJlbElkO1xuICAgIHZhciBvbk1vdmVSaWdodCA9IF9wcm9wcy5vbk1vdmVSaWdodDtcbiAgICB2YXIgb25Nb3ZlTGVmdCA9IF9wcm9wcy5vbk1vdmVMZWZ0O1xuICAgIHZhciBvblZpZXdDaGFuZ2UgPSBfcHJvcHMub25WaWV3Q2hhbmdlO1xuICAgIHZhciBwcmV2RGlzYWJsZWQgPSBfcHJvcHMucHJldkRpc2FibGVkO1xuICAgIHZhciB1cERpc2FibGVkID0gX3Byb3BzLnVwRGlzYWJsZWQ7XG4gICAgdmFyIG5leHREaXNhYmxlZCA9IF9wcm9wcy5uZXh0RGlzYWJsZWQ7XG5cbiAgICB2YXIgcnRsID0gdGhpcy5pc1J0bCgpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncnctaGVhZGVyJyB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQnRuLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LWJ0bi1sZWZ0JyxcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICBvbkNsaWNrOiBvbk1vdmVMZWZ0LFxuICAgICAgICAgIGRpc2FibGVkOiBwcmV2RGlzYWJsZWQsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcmV2RGlzYWJsZWQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBtZXNzYWdlcy5tb3ZlQmFjayxcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZXMubW92ZUJhY2tcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdydy1pIHJ3LWktY2FyZXQtJyArIChydGwgPyAncmlnaHQnIDogJ2xlZnQnKVxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEJ0bixcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBsYWJlbElkLFxuICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3J3LWJ0bi12aWV3JyxcbiAgICAgICAgICBkaXNhYmxlZDogdXBEaXNhYmxlZCxcbiAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHVwRGlzYWJsZWQsXG4gICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICAgICdhcmlhLWF0b21pYyc6ICd0cnVlJyxcbiAgICAgICAgICBvbkNsaWNrOiBvblZpZXdDaGFuZ2VcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBCdG4sXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncnctYnRuLXJpZ2h0JyxcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICBvbkNsaWNrOiBvbk1vdmVSaWdodCxcbiAgICAgICAgICBkaXNhYmxlZDogbmV4dERpc2FibGVkLFxuICAgICAgICAgIHRpdGxlOiBtZXNzYWdlcy5tb3ZlRm9yd2FyZCxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IG1lc3NhZ2VzLm1vdmVGb3J3YXJkLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogbmV4dERpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdhcmlhLWhpZGRlbic6ICdmYWxzZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAncnctaSBydy1pLWNhcmV0LScgKyAocnRsID8gJ2xlZnQnIDogJ3JpZ2h0JylcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9MaXN0T3B0aW9uID0gcmVxdWlyZSgnLi9MaXN0T3B0aW9uJyk7XG5cbnZhciBfTGlzdE9wdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0T3B0aW9uKTtcblxudmFyIF91dGlsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFByb3BUeXBlcyk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG52YXIgb3B0aW9uSWQgPSBmdW5jdGlvbiBvcHRpb25JZChpZCwgaWR4KSB7XG4gIHJldHVybiAnJyArIGlkICsgJ19fb3B0aW9uX18nICsgaWR4O1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0xpc3QnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvTGlzdE1vdmVtZW50TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRhdGE6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIG9wdGlvbkNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gICAgaXRlbUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG5cbiAgICBzZWxlY3RlZEluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb2N1c2VkSW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlRmllbGQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRGaWVsZDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uYWNjZXNzb3IsXG5cbiAgICBvcHRpb25JRDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gICAgbWVzc2FnZXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW1wdHlMaXN0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5tZXNzYWdlXG4gICAgfSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0SUQ6ICcnLFxuICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge30sXG4gICAgICBvcHRpb25Db21wb25lbnQ6IF9MaXN0T3B0aW9uMlsnZGVmYXVsdCddLFxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdsaXN0JyxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZW1wdHlMaXN0OiAnVGhlcmUgYXJlIG5vIGl0ZW1zIGluIHRoaXMgbGlzdCdcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIGlkeCA9IGRhdGEuaW5kZXhPZihmb2N1c2VkKTtcbiAgICB2YXIgYWN0aXZlSWQgPSBvcHRpb25JZCh0aGlzLl9pZCgpLCBpZHgpO1xuXG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChpZHggIT09IC0xID8gYWN0aXZlSWQgOiBudWxsKTtcblxuICAgIHRoaXMubW92ZSgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lO1xuICAgIHZhciByb2xlID0gX3Byb3BzMi5yb2xlO1xuICAgIHZhciBkYXRhID0gX3Byb3BzMi5kYXRhO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzMi5tZXNzYWdlcztcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMyLm9uU2VsZWN0O1xuICAgIHZhciBJdGVtQ29tcG9uZW50ID0gX3Byb3BzMi5pdGVtQ29tcG9uZW50O1xuICAgIHZhciBPcHRpb24gPSBfcHJvcHMyLm9wdGlvbkNvbXBvbmVudDtcbiAgICB2YXIgb3B0aW9uSUQgPSBfcHJvcHMyLm9wdGlvbklEO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2NsYXNzTmFtZScsICdyb2xlJywgJ2RhdGEnLCAnZm9jdXNlZCcsICdzZWxlY3RlZCcsICdtZXNzYWdlcycsICdvblNlbGVjdCcsICdpdGVtQ29tcG9uZW50JywgJ29wdGlvbkNvbXBvbmVudCcsICdvcHRpb25JRCddKTtcbiAgICB2YXIgaWQgPSB0aGlzLl9pZCgpO1xuICAgIHZhciBpdGVtcztcblxuICAgIGl0ZW1zID0gIWRhdGEubGVuZ3RoID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICdydy1saXN0LWVtcHR5JyB9LFxuICAgICAgX3V0aWxfMlsnZGVmYXVsdCddLnJlc3VsdChtZXNzYWdlcy5lbXB0eUxpc3QsIHRoaXMucHJvcHMpXG4gICAgKSA6IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBjdXJyZW50SWQgPSBvcHRpb25JZChpZCwgaWR4KTtcblxuICAgICAgLy8gaWYgKGZvY3VzZWQgPT09IGl0ZW0pXG4gICAgICAvLyAgIHRoaXMuX2FjdGl2ZUlEID0gY3VycmVudElkO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIE9wdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2l0ZW1fJyArIGlkeCxcbiAgICAgICAgICBpZDogY3VycmVudElkLFxuICAgICAgICAgIGRhdGFJdGVtOiBpdGVtLFxuICAgICAgICAgIGZvY3VzZWQ6IGZvY3VzZWQgPT09IGl0ZW0sXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkID09PSBpdGVtLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LmJpbmQobnVsbCwgaXRlbSlcbiAgICAgICAgfSxcbiAgICAgICAgSXRlbUNvbXBvbmVudCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEl0ZW1Db21wb25lbnQsIHsgaXRlbTogaXRlbSwgdmFsdWU6IF90aGlzLl9kYXRhVmFsdWUoaXRlbSksIHRleHQ6IF90aGlzLl9kYXRhVGV4dChpdGVtKSB9KSA6IF90aGlzLl9kYXRhVGV4dChpdGVtKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAncnctbGlzdCcpLFxuICAgICAgICByb2xlOiByb2xlID09PSB1bmRlZmluZWQgPyAnbGlzdGJveCcgOiByb2xlXG4gICAgICB9LCBwcm9wcyksXG4gICAgICBpdGVtc1xuICAgICk7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGE7XG4gIH0sXG5cbiAgbW92ZTogZnVuY3Rpb24gbW92ZSgpIHtcbiAgICB2YXIgbGlzdCA9IF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICBpZHggPSB0aGlzLl9kYXRhKCkuaW5kZXhPZih0aGlzLnByb3BzLmZvY3VzZWQpLFxuICAgICAgICBzZWxlY3RlZCA9IGxpc3QuY2hpbGRyZW5baWR4XTtcblxuICAgIGlmICghc2VsZWN0ZWQpIHJldHVybjtcblxuICAgIHRoaXMubm90aWZ5KCdvbk1vdmUnLCBbc2VsZWN0ZWQsIGxpc3QsIHRoaXMucHJvcHMuZm9jdXNlZF0pO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfTGlzdE9wdGlvbiA9IHJlcXVpcmUoJy4vTGlzdE9wdGlvbicpO1xuXG52YXIgX0xpc3RPcHRpb24yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdE9wdGlvbik7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxDb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0Jyk7XG5cbnZhciBfdXRpbENvbXBhdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29tcGF0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG52YXIgX3V0aWxfMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxfKTtcblxudmFyIF9yZWFjdExpYldhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xuXG52YXIgX3JlYWN0TGliV2FybmluZzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdExpYldhcm5pbmcpO1xuXG52YXIgb3B0aW9uSWQgPSBmdW5jdGlvbiBvcHRpb25JZChpZCwgaWR4KSB7XG4gIHJldHVybiAnJyArIGlkICsgJ19fb3B0aW9uX18nICsgaWR4O1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ0xpc3QnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvTGlzdE1vdmVtZW50TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRhdGE6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIG9wdGlvbkNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gICAgaXRlbUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gICAgZ3JvdXBDb21wb25lbnQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuXG4gICAgc2VsZWN0ZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuXG4gICAgdmFsdWVGaWVsZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dEZpZWxkOiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5hY2Nlc3NvcixcblxuICAgIG9wdElEOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIGdyb3VwQnk6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmFjY2Vzc29yLFxuXG4gICAgbWVzc2FnZXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW1wdHlMaXN0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5tZXNzYWdlXG4gICAgfSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0SUQ6ICcnLFxuICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge30sXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIG9wdGlvbkNvbXBvbmVudDogX0xpc3RPcHRpb24yWydkZWZhdWx0J10sXG4gICAgICBhcmlhQWN0aXZlRGVzY2VuZGFudEtleTogJ2dyb3VwZWRMaXN0JyxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwczogdGhpcy5fZ3JvdXAodGhpcy5wcm9wcy5ncm91cEJ5LCB0aGlzLnByb3BzLmRhdGEsIGtleXMpLFxuXG4gICAgICBzb3J0ZWRLZXlzOiBrZXlzXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAobmV4dFByb3BzLmRhdGEgIT09IHRoaXMucHJvcHMuZGF0YSB8fCBuZXh0UHJvcHMuZ3JvdXBCeSAhPT0gdGhpcy5wcm9wcy5ncm91cEJ5KSB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdyb3VwczogdGhpcy5fZ3JvdXAobmV4dFByb3BzLmdyb3VwQnksIG5leHRQcm9wcy5kYXRhLCBrZXlzKSxcbiAgICAgIHNvcnRlZEtleXM6IGtleXNcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLl9jdXJyZW50QWN0aXZlSUQpO1xuICAgIHRoaXMubW92ZSgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgcm9sZSA9IF9wcm9wcy5yb2xlO1xuICAgIHZhciBkYXRhID0gX3Byb3BzLmRhdGE7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcbiAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IF9wcm9wcy5zZWxlY3RlZEluZGV4O1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ3JvbGUnLCAnZGF0YScsICdtZXNzYWdlcycsICdvblNlbGVjdCcsICdzZWxlY3RlZEluZGV4J10pO1xuICAgIHZhciBpZCA9IHRoaXMuX2lkKCk7dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIHNvcnRlZEtleXMgPSBfc3RhdGUuc29ydGVkS2V5cztcbiAgICB2YXIgZ3JvdXBzID0gX3N0YXRlLmdyb3VwcztcblxuICAgIHZhciBpdGVtcyA9IFtdLFxuICAgICAgICBpZHggPSAtMSxcbiAgICAgICAgZ3JvdXAgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9jdXJyZW50QWN0aXZlSUQgPSBudWxsO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICBpdGVtcyA9IHNvcnRlZEtleXMucmVkdWNlKGZ1bmN0aW9uIChpdGVtcywga2V5KSB7XG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2tleV07XG4gICAgICAgIGl0ZW1zLnB1c2goX3RoaXMuX3JlbmRlckdyb3VwSGVhZGVyKGtleSkpO1xuXG4gICAgICAgIGZvciAodmFyIGl0ZW1JZHggPSAwOyBpdGVtSWR4IDwgZ3JvdXAubGVuZ3RoOyBpdGVtSWR4KyspIGl0ZW1zLnB1c2goX3RoaXMuX3JlbmRlckl0ZW0oa2V5LCBncm91cFtpdGVtSWR4XSwgKytpZHgpKTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9LCBbXSk7XG4gICAgfSBlbHNlIGl0ZW1zID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICdydy1saXN0LWVtcHR5JyB9LFxuICAgICAgX3V0aWxfMlsnZGVmYXVsdCddLnJlc3VsdChtZXNzYWdlcy5lbXB0eUxpc3QsIHRoaXMucHJvcHMpXG4gICAgKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe1xuICAgICAgICByZWY6ICdzY3JvbGxhYmxlJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LWxpc3QnLCAncnctbGlzdC1ncm91cGVkJyksXG4gICAgICAgIHJvbGU6IHJvbGUgPT09IHVuZGVmaW5lZCA/ICdsaXN0Ym94JyA6IHJvbGVcbiAgICAgIH0sIHByb3BzKSxcbiAgICAgIGl0ZW1zXG4gICAgKTtcbiAgfSxcblxuICBfcmVuZGVyR3JvdXBIZWFkZXI6IGZ1bmN0aW9uIF9yZW5kZXJHcm91cEhlYWRlcihncm91cCkge1xuICAgIHZhciBHcm91cENvbXBvbmVudCA9IHRoaXMucHJvcHMuZ3JvdXBDb21wb25lbnQsXG4gICAgICAgIGlkID0gdGhpcy5faWQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7XG4gICAgICAgIGtleTogJ2l0ZW1fJyArIGdyb3VwLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgcm9sZTogJ3NlcGFyYXRvcicsXG4gICAgICAgIGlkOiBpZCArICdfZ3JvdXBfJyArIGdyb3VwLFxuICAgICAgICBjbGFzc05hbWU6ICdydy1saXN0LW9wdGdyb3VwJ1xuICAgICAgfSxcbiAgICAgIEdyb3VwQ29tcG9uZW50ID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoR3JvdXBDb21wb25lbnQsIHsgaXRlbTogZ3JvdXAgfSkgOiBncm91cFxuICAgICk7XG4gIH0sXG5cbiAgX3JlbmRlckl0ZW06IGZ1bmN0aW9uIF9yZW5kZXJJdGVtKGdyb3VwLCBpdGVtLCBpZHgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMyLmZvY3VzZWQ7XG4gICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzMi5zZWxlY3RlZDtcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMyLm9uU2VsZWN0O1xuICAgIHZhciBJdGVtQ29tcG9uZW50ID0gX3Byb3BzMi5pdGVtQ29tcG9uZW50O1xuICAgIHZhciBPcHRpb24gPSBfcHJvcHMyLm9wdGlvbkNvbXBvbmVudDtcblxuICAgIHZhciBjdXJyZW50SUQgPSBvcHRpb25JZCh0aGlzLl9pZCgpLCBpZHgpO1xuXG4gICAgaWYgKGZvY3VzZWQgPT09IGl0ZW0pIHRoaXMuX2N1cnJlbnRBY3RpdmVJRCA9IGN1cnJlbnRJRDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIE9wdGlvbixcbiAgICAgIHtcbiAgICAgICAga2V5OiAnaXRlbV8nICsgZ3JvdXAgKyAnXycgKyBpZHgsXG4gICAgICAgIGlkOiBjdXJyZW50SUQsXG4gICAgICAgIGRhdGFJdGVtOiBpdGVtLFxuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkID09PSBpdGVtLFxuICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQgPT09IGl0ZW0sXG4gICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LmJpbmQobnVsbCwgaXRlbSlcbiAgICAgIH0sXG4gICAgICBJdGVtQ29tcG9uZW50ID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoSXRlbUNvbXBvbmVudCwge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICB2YWx1ZTogdGhpcy5fZGF0YVZhbHVlKGl0ZW0pLFxuICAgICAgICB0ZXh0OiB0aGlzLl9kYXRhVGV4dChpdGVtKVxuICAgICAgfSkgOiB0aGlzLl9kYXRhVGV4dChpdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgX2lzSW5kZXhPZjogZnVuY3Rpb24gX2lzSW5kZXhPZihpZHgsIGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhW2lkeF0gPT09IGl0ZW07XG4gIH0sXG5cbiAgX2dyb3VwOiBmdW5jdGlvbiBfZ3JvdXAoZ3JvdXBCeSwgZGF0YSwga2V5cykge1xuICAgIHZhciBpdGVyID0gdHlwZW9mIGdyb3VwQnkgPT09ICdmdW5jdGlvbicgPyBncm91cEJ5IDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtW2dyb3VwQnldO1xuICAgIH07XG5cbiAgICAvLyB0aGUga2V5cyBhcnJheSBlbnN1cmVzIHRoYXQgZ3JvdXBzIGFyZSByZW5kZXJlZCBpbiB0aGUgb3JkZXIgdGhleSBjYW1lIGluXG4gICAgLy8gd2hpY2ggbWVhbnMgdGhhdCBpZiB5b3Ugc29ydCB0aGUgZGF0YSBhcnJheSBpdCB3aWxsIHJlbmRlciBzb3J0ZWQsXG4gICAgLy8gc28gbG9uZyBhcyB5b3UgYWxzbyBzb3J0ZWQgYnkgZ3JvdXBcbiAgICBrZXlzID0ga2V5cyB8fCBbXTtcblxuICAgICgwLCBfcmVhY3RMaWJXYXJuaW5nMlsnZGVmYXVsdCddKSh0eXBlb2YgZ3JvdXBCeSAhPT0gJ3N0cmluZycgfHwgIWRhdGEubGVuZ3RoIHx8IF91dGlsXzJbJ2RlZmF1bHQnXS5oYXMoZGF0YVswXSwgZ3JvdXBCeSksICdbUmVhY3QgV2lkZ2V0c10gWW91IGFyZSBzZWVtIHRvIGJlIHRyeWluZyB0byBncm91cCB0aGlzIGxpc3QgYnkgYSAnICsgKCdwcm9wZXJ0eSBgJyArIGdyb3VwQnkgKyAnYCB0aGF0IGRvZXNuXFwndCBleGlzdCBpbiB0aGUgZGF0YXNldCBpdGVtcywgdGhpcyBtYXkgYmUgYSB0eXBvJykpO1xuXG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChncnBzLCBpdGVtKSB7XG4gICAgICB2YXIgZ3JvdXAgPSBpdGVyKGl0ZW0pO1xuXG4gICAgICBfdXRpbF8yWydkZWZhdWx0J10uaGFzKGdycHMsIGdyb3VwKSA/IGdycHNbZ3JvdXBdLnB1c2goaXRlbSkgOiAoa2V5cy5wdXNoKGdyb3VwKSwgZ3Jwc1tncm91cF0gPSBbaXRlbV0pO1xuXG4gICAgICByZXR1cm4gZ3JwcztcbiAgICB9LCB7fSk7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHZhciBncm91cHMgPSB0aGlzLnN0YXRlLmdyb3VwcztcblxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnRlZEtleXMucmVkdWNlKGZ1bmN0aW9uIChmbGF0LCBncnApIHtcbiAgICAgIHJldHVybiBmbGF0LmNvbmNhdChncm91cHNbZ3JwXSk7XG4gICAgfSwgW10pO1xuICB9LFxuXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gdGhpcy5nZXRJdGVtRE9NTm9kZSh0aGlzLnByb3BzLmZvY3VzZWQpO1xuXG4gICAgaWYgKCFzZWxlY3RlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5ub3RpZnkoJ29uTW92ZScsIFtzZWxlY3RlZCwgX3V0aWxDb21wYXQyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRoaXMucHJvcHMuZm9jdXNlZF0pO1xuICB9LFxuXG4gIGdldEl0ZW1ET01Ob2RlOiBmdW5jdGlvbiBnZXRJdGVtRE9NTm9kZShpdGVtKSB7XG4gICAgdmFyIGxpc3QgPSBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgZ3JvdXBzID0gdGhpcy5zdGF0ZS5ncm91cHMsXG4gICAgICAgIGlkeCA9IC0xLFxuICAgICAgICBpdGVtSWR4LFxuICAgICAgICBjaGlsZDtcblxuICAgIHRoaXMuc3RhdGUuc29ydGVkS2V5cy5zb21lKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaXRlbUlkeCA9IGdyb3Vwc1tncm91cF0uaW5kZXhPZihpdGVtKTtcbiAgICAgIGlkeCsrO1xuXG4gICAgICBpZiAoaXRlbUlkeCAhPT0gLTEpIHJldHVybiAhIShjaGlsZCA9IGxpc3QuY2hpbGRyZW5baWR4ICsgaXRlbUlkeCArIDFdKTtcblxuICAgICAgaWR4ICs9IGdyb3Vwc1tncm91cF0ubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTGlzdE9wdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTGlzdE9wdGlvbicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGF0YUl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3RlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzLnNlbGVjdGVkO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ2NoaWxkcmVuJywgJ2ZvY3VzZWQnLCAnc2VsZWN0ZWQnXSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGZvY3VzZWQsXG4gICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBzZWxlY3RlZFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHtcbiAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICEhc2VsZWN0ZWQsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgncnctbGlzdC1vcHRpb24nLCBjbGFzc05hbWUsIGNsYXNzZXMpXG4gICAgICB9LCBwcm9wcyksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMaXN0T3B0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxEYXRlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRlcycpO1xuXG52YXIgX3V0aWxEYXRlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsRGF0ZXMpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIF91dGlsQ29uZmlndXJhdGlvbjIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ29uZmlndXJhdGlvbik7XG5cbnZhciBfdXRpbFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIF91dGlsUHJvcFR5cGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxQcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBsb2NhbGl6ZXJzID0gX3V0aWxDb25maWd1cmF0aW9uMlsnZGVmYXVsdCddLmxvY2FsZSxcbiAgICBkYXlGb3JtYXQgPSBmdW5jdGlvbiBkYXlGb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmRheUZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy53ZWVrZGF5O1xufSxcbiAgICBkYXRlRm9ybWF0ID0gZnVuY3Rpb24gZGF0ZUZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZGF0ZUZvcm1hdCB8fCBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0cy5kYXlPZk1vbnRoO1xufTtcblxudmFyIG9wdGlvbklkID0gZnVuY3Rpb24gb3B0aW9uSWQoaWQsIGRhdGUpIHtcbiAgcmV0dXJuICcnICsgaWQgKyAnX19tb250aF8nICsgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tb250aChkYXRlKSArICctJyArIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uZGF0ZShkYXRlKTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIG9wdGlvbklEOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgY3VsdHVyZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIGZvY3VzZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG1heDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuXG4gIGRheUNvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG5cbiAgZGF5Rm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBkYXRlRm9ybWF0OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5kYXRlRm9ybWF0LFxuICBmb290ZXJGb3JtYXQ6IF91dGlsUHJvcFR5cGVzMlsnZGVmYXVsdCddLmRhdGVGb3JtYXQsXG5cbiAgb25DaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwoZGF0ZUEsIGRhdGVCKSB7XG4gIHJldHVybiBfdXRpbERhdGVzMlsnZGVmYXVsdCddLmVxKGRhdGVBLCBkYXRlQiwgJ2RheScpO1xufTtcblxudmFyIE1vbnRoVmlldyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNb250aFZpZXcnLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBpc0VxdWFsOiBpc0VxdWFsXG4gIH0sXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBhY3RpdmVJZCA9IG9wdGlvbklkKHRoaXMuX2lkKCksIHRoaXMucHJvcHMuZm9jdXNlZCk7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChhY3RpdmVJZCwgbnVsbCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMuZm9jdXNlZDtcbiAgICB2YXIgZm9jdXNJRCA9IF9wcm9wcy5mb2N1c0lEO1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzLmN1bHR1cmU7XG4gICAgdmFyIG1vbnRoID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS52aXNpYmxlRGF5cyhmb2N1c2VkLCBjdWx0dXJlKTtcbiAgICB2YXIgcm93cyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5jaHVuayhtb250aCwgNyk7XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gX3V0aWxfMlsnZGVmYXVsdCddLm9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzKSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBlbGVtZW50UHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ2dyaWQnXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndHInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5faGVhZGVycyhkYXlGb3JtYXQodGhpcy5wcm9wcyksIGN1bHR1cmUpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcm93cy5tYXAodGhpcy5fcm93KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX3JvdzogZnVuY3Rpb24gX3Jvdyhyb3csIHJvd0lkeCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMyLmZvY3VzZWQ7XG4gICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzMi5zZWxlY3RlZDtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkO1xuICAgIHZhciBvbkNoYW5nZSA9IF9wcm9wczIub25DaGFuZ2U7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcbiAgICB2YXIgdG9kYXkgPSBfcHJvcHMyLnRvZGF5O1xuICAgIHZhciBjdWx0dXJlID0gX3Byb3BzMi5jdWx0dXJlO1xuICAgIHZhciBtaW4gPSBfcHJvcHMyLm1pbjtcbiAgICB2YXIgbWF4ID0gX3Byb3BzMi5tYXg7XG4gICAgdmFyIERheSA9IF9wcm9wczIuZGF5Q29tcG9uZW50O1xuICAgIHZhciBpZCA9IHRoaXMuX2lkKCk7XG4gICAgdmFyIGxhYmVsRm9ybWF0ID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdHMuZm9vdGVyO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RyJyxcbiAgICAgIHsga2V5OiAnd2Vla18nICsgcm93SWR4LCByb2xlOiAncm93JyB9LFxuICAgICAgcm93Lm1hcChmdW5jdGlvbiAoZGF5LCBjb2xJZHgpIHtcblxuICAgICAgICB2YXIgaXNGb2N1c2VkID0gaXNFcXVhbChkYXksIGZvY3VzZWQpLFxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IGlzRXF1YWwoZGF5LCB2YWx1ZSksXG4gICAgICAgICAgICB0b2RheSA9IGlzRXF1YWwoZGF5LCB0b2RheSksXG4gICAgICAgICAgICBkYXRlID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXksIGRhdGVGb3JtYXQoX3RoaXMucHJvcHMpLCBjdWx0dXJlKSxcbiAgICAgICAgICAgIGxhYmVsID0gbG9jYWxpemVycy5kYXRlLmZvcm1hdChkYXksIGxhYmVsRm9ybWF0LCBjdWx0dXJlKTtcblxuICAgICAgICB2YXIgY3VycmVudElEID0gb3B0aW9uSWQoaWQsIGRheSk7XG5cbiAgICAgICAgcmV0dXJuICFfdXRpbERhdGVzMlsnZGVmYXVsdCddLmluUmFuZ2UoZGF5LCBtaW4sIG1heCkgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHsga2V5OiAnZGF5XycgKyBjb2xJZHgsIHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6ICdydy1lbXB0eS1jZWxsJyB9LFxuICAgICAgICAgICfCoCdcbiAgICAgICAgKSA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICd0ZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnZGF5XycgKyBjb2xJZHgsXG4gICAgICAgICAgICByb2xlOiAnZ3JpZGNlbGwnLFxuICAgICAgICAgICAgaWQ6IGN1cnJlbnRJRCxcbiAgICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IGRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGN1cnJlbnRJRCxcbiAgICAgICAgICAgICAgb25DbGljazogb25DaGFuZ2UuYmluZChudWxsLCBkYXkpLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWJ0bicsIHtcbiAgICAgICAgICAgICAgICAncnctb2ZmLXJhbmdlJzogX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tb250aChkYXkpICE9PSBfdXRpbERhdGVzMlsnZGVmYXVsdCddLm1vbnRoKGZvY3VzZWQpLFxuICAgICAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICdydy1ub3cnOiB0b2RheVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIERheSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERheSwgeyBkYXRlOiBkYXksIGxhYmVsOiBkYXRlIH0pIDogZGF0ZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBfaGVhZGVyczogZnVuY3Rpb24gX2hlYWRlcnMoZm9ybWF0LCBjdWx0dXJlKSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzLCA0LCA1LCA2XS5tYXAoZnVuY3Rpb24gKGRheSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGgnLFxuICAgICAgICB7IGtleTogJ2hlYWRlcl8nICsgZGF5IH0sXG4gICAgICAgIGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF5LCBmb3JtYXQsIGN1bHR1cmUpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb250aFZpZXc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgY3ggPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyksXG4gICAgc3VwcG9ydCA9IHJlcXVpcmUoJy4vdXRpbC9kb20vc3VwcG9ydCcpLFxuICAgIGNvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKSxcbiAgICBTZWxlY3RJbnB1dCA9IHJlcXVpcmUoJy4vTXVsdGlzZWxlY3RJbnB1dCcpLFxuICAgIFRhZ0xpc3QgPSByZXF1aXJlKCcuL011bHRpc2VsZWN0VGFnTGlzdCcpLFxuICAgIFBvcHVwID0gcmVxdWlyZSgnLi9Qb3B1cCcpLFxuICAgIFBsYWluTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpLFxuICAgIEdyb3VwYWJsZUxpc3QgPSByZXF1aXJlKCcuL0xpc3RHcm91cGFibGUnKSxcbiAgICB2YWxpZGF0ZUxpc3QgPSByZXF1aXJlKCcuL3V0aWwvdmFsaWRhdGVMaXN0SW50ZXJmYWNlJyksXG4gICAgY3JlYXRlVW5jb250cm9sbGVkV2lkZ2V0ID0gcmVxdWlyZSgndW5jb250cm9sbGFibGUnKSxcbiAgICBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBjb21wYXRDcmVhdGUgPSBmdW5jdGlvbiBjb21wYXRDcmVhdGUocHJvcHMsIG1zZ3MpIHtcbiAgcmV0dXJuIHR5cGVvZiBtc2dzLmNyZWF0ZU5ldyA9PT0gJ2Z1bmN0aW9uJyA/IG1zZ3MuY3JlYXRlTmV3KHByb3BzKSA6IFtSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdzdHJvbmcnLFxuICAgIG51bGwsXG4gICAgJ1wiJyArIHByb3BzLnNlYXJjaFRlcm0gKyAnXCInXG4gICksICcgJyArIG1zZ3MuY3JlYXRlTmV3XTtcbn07XG5cbnZhciBvbWl0ID0gXy5vbWl0O1xudmFyIHBpY2sgPSBfLnBpY2s7XG52YXIgcmVzdWx0ID0gXy5yZXN1bHQ7XG52YXIgc3BsYXQgPSBfLnNwbGF0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIC8vLS0gY29udHJvbGxlZCBwcm9wcyAtLVxuICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cbiAgc2VhcmNoVGVybTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXG4gIG9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblRvZ2dsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhbHVlRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRGaWVsZDogQ3VzdG9tUHJvcFR5cGVzLmFjY2Vzc29yLFxuXG4gIHRhZ0NvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBpdGVtQ29tcG9uZW50OiBDdXN0b21Qcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIGxpc3RDb21wb25lbnQ6IEN1c3RvbVByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICBncm91cENvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICBncm91cEJ5OiBDdXN0b21Qcm9wVHlwZXMuYWNjZXNzb3IsXG5cbiAgY3JlYXRlQ29tcG9uZW50OiBDdXN0b21Qcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkNyZWF0ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pLCBSZWFjdC5Qcm9wVHlwZXMuZnVuY10pLFxuXG4gIGRyb3BVcDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGR1cmF0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCAvL3BvcHVwXG5cbiAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3JlYWRvbmx5J10pXSksXG5cbiAgbWVzc2FnZXM6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3BlbjogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgZW1wdHlMaXN0OiBDdXN0b21Qcm9wVHlwZXMubWVzc2FnZSxcbiAgICBlbXB0eUZpbHRlcjogQ3VzdG9tUHJvcFR5cGVzLm1lc3NhZ2UsXG4gICAgY3JlYXRlTmV3OiBDdXN0b21Qcm9wVHlwZXMubWVzc2FnZVxuICB9KVxufTtcblxudmFyIE11bHRpc2VsZWN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTXVsdGlzZWxlY3QnLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9EYXRhRmlsdGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvRGF0YUhlbHBlcnNNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9Qb3B1cFNjcm9sbFRvTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgnaW5wdXQnLCBmdW5jdGlvbiAoa2V5LCBpZCkge1xuICAgIHZhciBteUtleSA9IHRoaXMucHJvcHMuYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk7XG5cbiAgICB2YXIgY3JlYXRlSXNBY3RpdmUgPSAoIXRoaXMuX2RhdGEoKS5sZW5ndGggfHwgdGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSA9PT0gbnVsbCkgJiYga2V5ID09PSBteUtleTtcblxuICAgIHZhciB0YWdJc0FjdGl2ZSA9IHRoaXMuc3RhdGUuZm9jdXNlZFRhZyAhPSBudWxsICYmIGtleSA9PT0gJ3RhZ2xpc3QnO1xuICAgIHZhciBsaXN0SXNBY3RpdmUgPSB0aGlzLnN0YXRlLmZvY3VzZWRUYWcgPT0gbnVsbCAmJiBrZXkgPT09ICdsaXN0JztcblxuICAgIGlmIChjcmVhdGVJc0FjdGl2ZSB8fCB0YWdJc0FjdGl2ZSB8fCBsaXN0SXNBY3RpdmUpIHJldHVybiBpZDtcbiAgfSldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGZpbHRlcjogJ3N0YXJ0c1dpdGgnLFxuICAgICAgdmFsdWU6IFtdLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzZWFyY2hUZXJtOiAnJyxcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnbXVsdGlzZWxlY3QnLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgY3JlYXRlTmV3OiAnKGNyZWF0ZSBuZXcgdGFnKScsXG4gICAgICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnLFxuICAgICAgICBlbXB0eUZpbHRlcjogJ1RoZSBmaWx0ZXIgcmV0dXJuZWQgbm8gcmVzdWx0cycsXG4gICAgICAgIHRhZ3NMYWJlbDogJ3NlbGVjdGVkIGl0ZW1zJyxcbiAgICAgICAgc2VsZWN0ZWRJdGVtczogJ3NlbGVjdGVkIGl0ZW1zJyxcbiAgICAgICAgbm9uZVNlbGVjdGVkOiAnbm8gc2VsZWN0ZWQgaXRlbXMnLFxuICAgICAgICByZW1vdmVMYWJlbDogJ3JlbW92ZSBzZWxlY3RlZCBpdGVtJ1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkYXRhSXRlbXMgPSBzcGxhdCh0aGlzLnByb3BzLnZhbHVlKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpcy5fZGF0YUl0ZW0oX3RoaXMucHJvcHMuZGF0YSwgaXRlbSk7XG4gICAgfSksXG4gICAgICAgIGRhdGEgPSB0aGlzLnByb2Nlc3ModGhpcy5wcm9wcy5kYXRhLCBkYXRhSXRlbXMsIHRoaXMucHJvcHMuc2VhcmNoVGVybSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXNlZFRhZzogbnVsbCxcbiAgICAgIGZvY3VzZWRJdGVtOiBkYXRhWzBdLFxuICAgICAgcHJvY2Vzc2VkRGF0YTogZGF0YSxcbiAgICAgIGRhdGFJdGVtczogZGF0YUl0ZW1zXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmFyaWFBY3RpdmVEZXNjZW5kYW50KHRoaXMuX2lkKCdfX2NyZWF0ZWxpc3Rfb3B0aW9uJykpO1xuXG4gICAgdGhpcy5yZWZzLmxpc3QgJiYgdmFsaWRhdGVMaXN0KHRoaXMucmVmcy5saXN0KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTY5XG4gICAgaWYgKHN1cHBvcnQuaW9zKSBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLndyYXBwZXIpLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHZhbHVlcyA9IF8uc3BsYXQobmV4dFByb3BzLnZhbHVlKSxcbiAgICAgICAgY3VycmVudCA9IHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0sXG4gICAgICAgIGl0ZW1zID0gdGhpcy5wcm9jZXNzKG5leHRQcm9wcy5kYXRhLCB2YWx1ZXMsIG5leHRQcm9wcy5zZWFyY2hUZXJtKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJvY2Vzc2VkRGF0YTogaXRlbXMsXG4gICAgICBmb2N1c2VkSXRlbTogaXRlbXMuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEgPyBpdGVtc1swXSA6IGN1cnJlbnQsXG4gICAgICBkYXRhSXRlbXM6IHZhbHVlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fZGF0YUl0ZW0obmV4dFByb3BzLmRhdGEsIGl0ZW0pO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2N4LFxuICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHNlYXJjaFRlcm0gPSBfcHJvcHMuc2VhcmNoVGVybTtcbiAgICB2YXIgbWF4TGVuZ3RoID0gX3Byb3BzLm1heExlbmd0aDtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHRhYkluZGV4ID0gX3Byb3BzLnRhYkluZGV4O1xuICAgIHZhciBncm91cEJ5ID0gX3Byb3BzLmdyb3VwQnk7XG4gICAgdmFyIG1lc3NhZ2VzID0gX3Byb3BzLm1lc3NhZ2VzO1xuICAgIHZhciBkYXRhID0gX3Byb3BzLmRhdGE7XG4gICAgdmFyIGJ1c3kgPSBfcHJvcHMuYnVzeTtcbiAgICB2YXIgZHJvcFVwID0gX3Byb3BzLmRyb3BVcDtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBvcGVuID0gX3Byb3BzLm9wZW47XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciByZWFkT25seSA9IF9wcm9wcy5yZWFkT25seTtcbiAgICB2YXIgVGFnQ29tcG9uZW50ID0gX3Byb3BzLnRhZ0NvbXBvbmVudDtcbiAgICB2YXIgTGlzdCA9IF9wcm9wcy5saXN0Q29tcG9uZW50O1xuXG4gICAgTGlzdCA9IExpc3QgfHwgZ3JvdXBCeSAmJiBHcm91cGFibGVMaXN0IHx8IFBsYWluTGlzdDtcblxuICAgIG1lc3NhZ2VzID0gbXNncyhtZXNzYWdlcyk7XG5cbiAgICB2YXIgZWxlbWVudFByb3BzID0gb21pdCh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhwcm9wVHlwZXMpKTtcbiAgICB2YXIgdGFnc1Byb3BzID0gcGljayh0aGlzLnByb3BzLCBbJ3ZhbHVlRmllbGQnLCAndGV4dEZpZWxkJ10pO1xuICAgIHZhciBpbnB1dFByb3BzID0gcGljayh0aGlzLnByb3BzLCBbJ21heExlbmd0aCcsICdzZWFyY2hUZXJtJ10pO1xuICAgIHZhciBsaXN0UHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKGNvbXBhdC50eXBlKExpc3QpLnByb3BUeXBlcykpO1xuICAgIHZhciBwb3B1cFByb3BzID0gcGljayh0aGlzLnByb3BzLCBPYmplY3Qua2V5cyhjb21wYXQudHlwZShQb3B1cCkucHJvcFR5cGVzKSk7XG5cbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgZm9jdXNlZFRhZyA9IF9zdGF0ZS5mb2N1c2VkVGFnO1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IF9zdGF0ZS5mb2N1c2VkSXRlbTtcbiAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3N0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB2YXIgZm9jdXNlZCA9IF9zdGF0ZS5mb2N1c2VkO1xuICAgIHZhciBkYXRhSXRlbXMgPSBfc3RhdGUuZGF0YUl0ZW1zO1xuXG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICB0YWdzSUQgPSB0aGlzLl9pZCgnX3RhZ2xpc3QnKSxcbiAgICAgICAgbGlzdElEID0gdGhpcy5faWQoJ19fbGlzdGJveCcpLFxuICAgICAgICBjcmVhdGVJRCA9IHRoaXMuX2lkKCdfX2NyZWF0ZWxpc3QnKSxcbiAgICAgICAgY3JlYXRlT3B0aW9uSUQgPSB0aGlzLl9pZCgnX19jcmVhdGVsaXN0X29wdGlvbicpO1xuXG4gICAgdmFyIHNob3VsZFJlbmRlclRhZ3MgPSAhIWRhdGFJdGVtcy5sZW5ndGgsXG4gICAgICAgIHNob3VsZFJlbmRlclBvcHVwID0gXy5pc0ZpcnN0Rm9jdXNlZFJlbmRlcih0aGlzKSB8fCBvcGVuLFxuICAgICAgICBzaG91bGRTaG93Q3JlYXRlID0gdGhpcy5fc2hvdWxkU2hvd0NyZWF0ZSgpLFxuICAgICAgICBjcmVhdGVJc0ZvY3VzZWQgPSAhaXRlbXMubGVuZ3RoIHx8IGZvY3VzZWRJdGVtID09PSBudWxsO1xuXG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIHZhciBub3RpZnkgPSBkYXRhSXRlbXMubGVuZ3RoID8gbWVzc2FnZXMuc2VsZWN0ZWRJdGVtcyArICc6ICcgKyBkYXRhSXRlbXMubWFwKHRoaXMuX2RhdGFUZXh0KS5qb2luKCcsICcpIDogbWVzc2FnZXMubm9uZVNlbGVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGVsZW1lbnRQcm9wcywge1xuICAgICAgICByZWY6ICdlbGVtZW50JyxcbiAgICAgICAgaWQ6IHRoaXMuX2lkKCksXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fa2V5RG93biksXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgY2xhc3NOYW1lOiBjeChjbGFzc05hbWUsICdydy13aWRnZXQnLCAncnctbXVsdGlzZWxlY3QnLCAoX2N4ID0ge30sIF9jeFsncnctc3RhdGUtZm9jdXMnXSA9IGZvY3VzZWQsIF9jeFsncnctc3RhdGUtZGlzYWJsZWQnXSA9IGRpc2FibGVkID09PSB0cnVlLCBfY3hbJ3J3LXN0YXRlLXJlYWRvbmx5J10gPSByZWFkT25seSA9PT0gdHJ1ZSwgX2N4Wydydy1ydGwnXSA9IHRoaXMuaXNSdGwoKSwgX2N4Wydydy1vcGVuJyArIChkcm9wVXAgPyAnLXVwJyA6ICcnKV0gPSBvcGVuLCBfY3gpKSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogJ3N0YXR1cycsXG4gICAgICAgICAgaWQ6IHRoaXMuX2lkKCdfX25vdGlmeScpLFxuICAgICAgICAgIHJvbGU6ICdzdGF0dXMnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3NyLW9ubHknLFxuICAgICAgICAgICdhcmlhLWxpdmUnOiAnYXNzZXJ0aXZlJyxcbiAgICAgICAgICAnYXJpYS1hdG9taWMnOiAndHJ1ZScsXG4gICAgICAgICAgJ2FyaWEtcmVsZXZhbnQnOiAnYWRkaXRpb25zIHJlbW92YWxzIHRleHQnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LW11bHRpc2VsZWN0LXdyYXBwZXInLCByZWY6ICd3cmFwcGVyJyB9LFxuICAgICAgICBidXN5ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ3J3LWkgcnctbG9hZGluZycgfSksXG4gICAgICAgIHNob3VsZFJlbmRlclRhZ3MgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUYWdMaXN0LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHRhZ3NQcm9wcywge1xuICAgICAgICAgIHJlZjogJ3RhZ0xpc3QnLFxuICAgICAgICAgIGlkOiB0YWdzSUQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBtZXNzYWdlcy50YWdzTGFiZWwsXG4gICAgICAgICAgdmFsdWU6IGRhdGFJdGVtcyxcbiAgICAgICAgICBmb2N1c2VkOiBmb2N1c2VkVGFnLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgICAgb25EZWxldGU6IHRoaXMuX2RlbGV0ZSxcbiAgICAgICAgICB2YWx1ZUNvbXBvbmVudDogVGFnQ29tcG9uZW50LFxuICAgICAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAndGFnbGlzdCdcbiAgICAgICAgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdElucHV0LCBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4IHx8IDAsXG4gICAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogb3BlbixcbiAgICAgICAgICAnYXJpYS1idXN5JzogISFidXN5LFxuICAgICAgICAgICdhcmlhLW93bnMnOiBsaXN0SUQgKyAnICcgKyB0aGlzLl9pZCgnX19ub3RpZnknKSArIChzaG91bGRSZW5kZXJUYWdzID8gJyAnICsgdGFnc0lEIDogJycpICsgKHNob3VsZFNob3dDcmVhdGUgPyAnICcgKyBjcmVhdGVJRCA6ICcnKSxcbiAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHNlYXJjaFRlcm0sXG4gICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkID09PSB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiByZWFkT25seSA9PT0gdHJ1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5fcGxhY2Vob2xkZXIoKSxcbiAgICAgICAgICBvbktleURvd246IHRoaXMuX3NlYXJjaEtleURvd24sXG4gICAgICAgICAgb25LZXlVcDogdGhpcy5fc2VhcmNoZ0tleVVwLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLl90eXBpbmcsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5faW5wdXRGb2N1cyxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9pbnB1dEZvY3VzXG4gICAgICAgIH0pKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFBvcHVwLFxuICAgICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHBvcHVwUHJvcHMsIHtcbiAgICAgICAgICBvbk9wZW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVmcy5saXN0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHNob3VsZFJlbmRlclBvcHVwICYmIFtSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7IHJlZjogJ2xpc3QnLFxuICAgICAgICAgICAga2V5OiAnMCdcbiAgICAgICAgICB9LCBsaXN0UHJvcHMsIHtcbiAgICAgICAgICAgIHJlYWRPbmx5OiAhIXJlYWRPbmx5LFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICEhZGlzYWJsZWQsXG4gICAgICAgICAgICBpZDogbGlzdElELFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRoaXMuX2lkKCksXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhb3BlbixcbiAgICAgICAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiAnbGlzdCcsXG4gICAgICAgICAgICBkYXRhOiBpdGVtcyxcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZvY3VzZWRJdGVtLFxuICAgICAgICAgICAgb25TZWxlY3Q6IHRoaXMuX21heWJlSGFuZGxlKHRoaXMuX29uU2VsZWN0KSxcbiAgICAgICAgICAgIG9uTW92ZTogdGhpcy5fc2Nyb2xsVG8sXG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICBlbXB0eUxpc3Q6IGRhdGEubGVuZ3RoID8gbWVzc2FnZXMuZW1wdHlGaWx0ZXIgOiBtZXNzYWdlcy5lbXB0eUxpc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSksIHNob3VsZFNob3dDcmVhdGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICB7IHJvbGU6ICdsaXN0Ym94JywgaWQ6IGNyZWF0ZUlELCBjbGFzc05hbWU6ICdydy1saXN0IHJ3LW11bHRpc2VsZWN0LWNyZWF0ZS10YWcnLCBrZXk6ICcxJyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgeyBvbkNsaWNrOiB0aGlzLl9vbkNyZWF0ZS5iaW5kKG51bGwsIHNlYXJjaFRlcm0pLFxuICAgICAgICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgIGlkOiBjcmVhdGVPcHRpb25JRCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICAgICAgICAgICAgICdydy1saXN0LW9wdGlvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBjcmVhdGVJc0ZvY3VzZWRcbiAgICAgICAgICAgICAgICB9KSB9LFxuICAgICAgICAgICAgICBjb21wYXRDcmVhdGUodGhpcy5wcm9wcywgbWVzc2FnZXMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKV1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnByb2Nlc3NlZERhdGE7XG4gIH0sXG5cbiAgX2RlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2ZvY3VzKHRydWUpO1xuICAgIHRoaXMuY2hhbmdlKHRoaXMuc3RhdGUuZGF0YUl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQgIT09IHZhbHVlO1xuICAgIH0pKTtcbiAgfSxcblxuICBfaW5wdXRGb2N1czogZnVuY3Rpb24gX2lucHV0Rm9jdXMoKSB7XG4gICAgdGhpcy5fZm9jdXModHJ1ZSk7XG4gICAgIXRoaXMucHJvcHMub3BlbiAmJiB0aGlzLm9wZW4oKTtcbiAgfSxcblxuICBfZm9jdXM6IGZ1bmN0aW9uIF9mb2N1cyhmb2N1c2VkLCBlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGZvY3VzZWQpIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZm9jdXNlZCkgX3RoaXM0LnJlZnMudGFnTGlzdCAmJiBfdGhpczQuc2V0U3RhdGUoeyBmb2N1c2VkVGFnOiBudWxsIH0pO1xuXG4gICAgICBpZiAoZm9jdXNlZCAhPT0gX3RoaXM0LnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgZm9jdXNlZCA/IF90aGlzNC5vcGVuKCkgOiBfdGhpczQuY2xvc2UoKTtcblxuICAgICAgICBfdGhpczQubm90aWZ5KGZvY3VzZWQgPyAnb25Gb2N1cycgOiAnb25CbHVyJywgZSk7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgX3NlYXJjaEtleURvd246IGZ1bmN0aW9uIF9zZWFyY2hLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdCYWNrc3BhY2UnICYmIGUudGFyZ2V0LnZhbHVlICYmICF0aGlzLl9kZWxldGluZ1RleHQpIHRoaXMuX2RlbGV0aW5nVGV4dCA9IHRydWU7XG4gIH0sXG5cbiAgX3NlYXJjaGdLZXlVcDogZnVuY3Rpb24gX3NlYXJjaGdLZXlVcChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLl9kZWxldGluZ1RleHQpIHRoaXMuX2RlbGV0aW5nVGV4dCA9IGZhbHNlO1xuICB9LFxuXG4gIF90eXBpbmc6IGZ1bmN0aW9uIF90eXBpbmcoZSkge1xuICAgIHRoaXMubm90aWZ5KCdvblNlYXJjaCcsIFtlLnRhcmdldC52YWx1ZV0pO1xuICAgIHRoaXMub3BlbigpO1xuICB9LFxuXG4gIF9vblNlbGVjdDogZnVuY3Rpb24gX29uU2VsZWN0KGRhdGEpIHtcblxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ3JlYXRlKSB0aGlzLl9vbkNyZWF0ZSh0aGlzLnByb3BzLnNlYXJjaFRlcm0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkoJ29uU2VsZWN0JywgZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2UodGhpcy5zdGF0ZS5kYXRhSXRlbXMuY29uY2F0KGRhdGEpKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLl9mb2N1cyh0cnVlKTtcbiAgfSxcblxuICBfb25DcmVhdGU6IGZ1bmN0aW9uIF9vbkNyZWF0ZSh0YWcpIHtcbiAgICBpZiAodGFnLnRyaW0oKSA9PT0gJycpIHJldHVybjtcblxuICAgIHRoaXMubm90aWZ5KCdvbkNyZWF0ZScsIHRhZyk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hUZXJtICYmIHRoaXMubm90aWZ5KCdvblNlYXJjaCcsIFsnJ10pO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuX2ZvY3VzKHRydWUpO1xuICB9LFxuXG4gIF9rZXlEb3duOiBmdW5jdGlvbiBfa2V5RG93bihlKSB7XG4gICAgdmFyIGtleSA9IGUua2V5O1xuICAgIHZhciBhbHRLZXkgPSBlLmFsdEtleTtcbiAgICB2YXIgY3RybEtleSA9IGUuY3RybEtleTtcbiAgICB2YXIgbm9TZWFyY2ggPSAhdGhpcy5wcm9wcy5zZWFyY2hUZXJtICYmICF0aGlzLl9kZWxldGluZ1RleHQ7XG4gICAgdmFyIGlzT3BlbiA9IHRoaXMucHJvcHMub3Blbjt2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGZvY3VzZWRUYWcgPSBfc3RhdGUyLmZvY3VzZWRUYWc7XG4gICAgdmFyIGZvY3VzZWRJdGVtID0gX3N0YXRlMi5mb2N1c2VkSXRlbTtcbiAgICB2YXIgX3JlZnMgPSB0aGlzLnJlZnM7XG4gICAgdmFyIGxpc3QgPSBfcmVmcy5saXN0O1xuICAgIHZhciB0YWdMaXN0ID0gX3JlZnMudGFnTGlzdDtcblxuICAgIHZhciBudWxsVGFnID0geyBmb2N1c2VkVGFnOiBudWxsIH07XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdmFyIG5leHQgPSBsaXN0Lm5leHQoZm9jdXNlZEl0ZW0pLFxuICAgICAgICAgIGNyZWF0aW5nID0gdGhpcy5fc2hvdWxkU2hvd0NyZWF0ZSgpICYmIGZvY3VzZWRJdGVtID09PSBuZXh0IHx8IGZvY3VzZWRJdGVtID09PSBudWxsO1xuXG4gICAgICBuZXh0ID0gY3JlYXRpbmcgPyBudWxsIDogbmV4dDtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZShiYWJlbEhlbHBlcnMuX2V4dGVuZHMoeyBmb2N1c2VkSXRlbTogbmV4dCB9LCBudWxsVGFnKSk7ZWxzZSB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICB2YXIgcHJldiA9IGZvY3VzZWRJdGVtID09PSBudWxsID8gbGlzdC5sYXN0KCkgOiBsaXN0LnByZXYoZm9jdXNlZEl0ZW0pO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChhbHRLZXkpIHRoaXMuY2xvc2UoKTtlbHNlIGlmIChpc09wZW4pIHRoaXMuc2V0U3RhdGUoYmFiZWxIZWxwZXJzLl9leHRlbmRzKHsgZm9jdXNlZEl0ZW06IHByZXYgfSwgbnVsbFRhZykpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW5kJykge1xuICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZShiYWJlbEhlbHBlcnMuX2V4dGVuZHMoeyBmb2N1c2VkSXRlbTogbGlzdC5sYXN0KCkgfSwgbnVsbFRhZykpO2Vsc2UgdGFnTGlzdCAmJiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRhZzogdGFnTGlzdC5sYXN0KCkgfSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdIb21lJykge1xuICAgICAgaWYgKGlzT3BlbikgdGhpcy5zZXRTdGF0ZShiYWJlbEhlbHBlcnMuX2V4dGVuZHMoeyBmb2N1c2VkSXRlbTogbGlzdC5maXJzdCgpIH0sIG51bGxUYWcpKTtlbHNlIHRhZ0xpc3QgJiYgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWc6IHRhZ0xpc3QuZmlyc3QoKSB9KTtcbiAgICB9IGVsc2UgaWYgKGlzT3BlbiAmJiBrZXkgPT09ICdFbnRlcicpIGN0cmxLZXkgJiYgdGhpcy5wcm9wcy5vbkNyZWF0ZSB8fCBmb2N1c2VkSXRlbSA9PT0gbnVsbCA/IHRoaXMuX29uQ3JlYXRlKHRoaXMucHJvcHMuc2VhcmNoVGVybSkgOiB0aGlzLl9vblNlbGVjdCh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtKTtlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSBpc09wZW4gPyB0aGlzLmNsb3NlKCkgOiB0YWdMaXN0ICYmIHRoaXMuc2V0U3RhdGUobnVsbFRhZyk7ZWxzZSBpZiAobm9TZWFyY2ggJiYga2V5ID09PSAnQXJyb3dMZWZ0JykgdGFnTGlzdCAmJiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRhZzogdGFnTGlzdC5wcmV2KGZvY3VzZWRUYWcpIH0pO2Vsc2UgaWYgKG5vU2VhcmNoICYmIGtleSA9PT0gJ0Fycm93UmlnaHQnKSB0YWdMaXN0ICYmIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVGFnOiB0YWdMaXN0Lm5leHQoZm9jdXNlZFRhZykgfSk7ZWxzZSBpZiAobm9TZWFyY2ggJiYga2V5ID09PSAnRGVsZXRlJykgdGFnTGlzdCAmJiB0YWdMaXN0LnJlbW92ZShmb2N1c2VkVGFnKTtlbHNlIGlmIChub1NlYXJjaCAmJiBrZXkgPT09ICdCYWNrc3BhY2UnKSB0YWdMaXN0ICYmIHRhZ0xpc3QucmVtb3ZlTmV4dCgpO1xuXG4gICAgdGhpcy5ub3RpZnkoJ29uS2V5RG93bicsIFtlXSk7XG4gIH0sXG5cbiAgLy8gX2ZpcnN0Rm9jdXMoKXtcbiAgLy8gICB0aGlzLm9wZW4oKVxuICAvLyB9XG5cbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZGF0YSkge1xuICAgIHRoaXMubm90aWZ5KCdvbkNoYW5nZScsIFtkYXRhXSk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hUZXJtICYmIHRoaXMubm90aWZ5KCdvblNlYXJjaCcsIFsnJ10pO1xuICB9LFxuXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgaWYgKCEodGhpcy5wcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSB8fCB0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlKSkgdGhpcy5ub3RpZnkoJ29uVG9nZ2xlJywgdHJ1ZSk7XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMubm90aWZ5KCdvblRvZ2dsZScsIGZhbHNlKTtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnByb3BzLm9wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfSxcblxuICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGRhdGEsIHZhbHVlcywgc2VhcmNoVGVybSkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIGl0ZW1zID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiAhdmFsdWVzLnNvbWUoX3RoaXM1Ll92YWx1ZU1hdGNoZXIuYmluZChudWxsLCBpKSwgX3RoaXM1KTtcbiAgICB9LCB0aGlzKTtcblxuICAgIGlmIChzZWFyY2hUZXJtKSBpdGVtcyA9IHRoaXMuZmlsdGVyKGl0ZW1zLCBzZWFyY2hUZXJtKTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfSxcblxuICBfc2hvdWxkU2hvd0NyZWF0ZTogZnVuY3Rpb24gX3Nob3VsZFNob3dDcmVhdGUoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgdGV4dCA9IHRoaXMucHJvcHMuc2VhcmNoVGVybTtcblxuICAgIGlmICghdGhpcy5wcm9wcy5vbkNyZWF0ZSB8fCAhdGV4dCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYW4gZXhhY3QgbWF0Y2ggb24gdGV4dEZpZWxkczogXCJqb2huXCIgPT4geyBuYW1lOiBcImpvaG5cIiB9LCBkb24ndCBzaG93XG4gICAgcmV0dXJuICF0aGlzLl9kYXRhKCkuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIF90aGlzNi5fZGF0YVRleHQodikgPT09IHRleHQ7XG4gICAgfSkgJiYgIXRoaXMuc3RhdGUuZGF0YUl0ZW1zLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBfdGhpczYuX2RhdGFUZXh0KHYpID09PSB0ZXh0O1xuICAgIH0pO1xuICB9LFxuXG4gIF9wbGFjZWhvbGRlcjogZnVuY3Rpb24gX3BsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5wcm9wcy52YWx1ZSB8fCBbXSkubGVuZ3RoID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8ICcnO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBtc2dzKG1zZ3MpIHtcbiAgcmV0dXJuIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7XG4gICAgY3JlYXRlTmV3OiAnKGNyZWF0ZSBuZXcgdGFnKScsXG4gICAgZW1wdHlMaXN0OiAnVGhlcmUgYXJlIG5vIGl0ZW1zIGluIHRoaXMgbGlzdCcsXG4gICAgZW1wdHlGaWx0ZXI6ICdUaGUgZmlsdGVyIHJldHVybmVkIG5vIHJlc3VsdHMnLFxuICAgIHRhZ3NMYWJlbDogJ3NlbGVjdGVkIGl0ZW1zJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiAnc2VsZWN0ZWQgaXRlbXMnLFxuICAgIHJlbW92ZUxhYmVsOiAncmVtb3ZlIHNlbGVjdGVkIGl0ZW0nIH0sIG1zZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVVuY29udHJvbGxlZFdpZGdldChNdWx0aXNlbGVjdCwgeyBvcGVuOiAnb25Ub2dnbGUnLCB2YWx1ZTogJ29uQ2hhbmdlJywgc2VhcmNoVGVybTogJ29uU2VhcmNoJyB9KTtcblxuLy8gZnVuY3Rpb24gZGVmYXVsdENoYW5nZSgpe1xuLy8gICBpZiAoIHRoaXMucHJvcHMuc2VhcmNoVGVybSA9PT0gdW5kZWZpbmVkIClcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTogJycgfSlcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMuQmFzZU11bHRpc2VsZWN0ID0gTXVsdGlzZWxlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGNvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdNdWx0aXNlbGVjdElucHV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhMZW5ndGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5wcm9wcy5mb2N1c2VkICYmIHRoaXMuZm9jdXMoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICAgIHNpemUgPSBNYXRoLm1heCgodmFsdWUgfHwgcGxhY2Vob2xkZXIpLmxlbmd0aCwgMSkgKyAxO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICdydy1pbnB1dCcsXG4gICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICByZWFkT25seTogdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgIHNpemU6IHNpemVcbiAgICB9KSk7XG4gIH0sXG5cbiAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKS5mb2N1cygpO1xuICB9XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIF9taXhpbnNXaWRnZXRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyk7XG5cbnZhciBfbWl4aW5zV2lkZ2V0TWl4aW4yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfbWl4aW5zV2lkZ2V0TWl4aW4pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIF8gPSByZXF1aXJlKCcuL3V0aWwvXycpLFxuICAgIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIG9wdGlvbklkID0gZnVuY3Rpb24gb3B0aW9uSWQoaWQsIGlkeCkge1xuICByZXR1cm4gJycgKyBpZCArICdfX29wdGlvbl9fJyArIGlkeDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnTXVsdGlzZWxlY3RUYWdMaXN0JyxcblxuICBtaXhpbnM6IFtyZXF1aXJlKCcuL21peGlucy9EYXRhSGVscGVyc01peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1B1cmVSZW5kZXJNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9BcmlhRGVzY2VuZGFudE1peGluJykoKV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBmb2N1c2VkOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgdmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0RmllbGQ6IEN1c3RvbVByb3BUeXBlcy5hY2Nlc3NvcixcblxuICAgIHZhbHVlQ29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLmFycmF5LCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydkaXNhYmxlZCddKV0pLFxuXG4gICAgcmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3JlYWRvbmx5J10pXSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICd0YWdsaXN0J1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzLmZvY3VzZWQ7XG4gICAgdmFyIGFjdGl2ZUlkID0gb3B0aW9uSWQoX21peGluc1dpZGdldE1peGluMlsnZGVmYXVsdCddLl9pZC5jYWxsKHRoaXMpLCBmb2N1c2VkKTtcblxuICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQoZm9jdXNlZCA9PSBudWxsIHx8IHRoaXMuaXNEaXNhYmxlZChmb2N1c2VkKSA/IG51bGwgOiBhY3RpdmVJZCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBWYWx1ZUNvbXBvbmVudCA9IHRoaXMucHJvcHMudmFsdWVDb21wb25lbnQ7XG4gICAgdmFyIHByb3BzID0gXy5vbWl0KHRoaXMucHJvcHMsIFsndmFsdWUnLCAnZGlzYWJsZWQnLCAncmVhZE9ubHknXSk7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBvcHRpb25JRCA9IF9wcm9wczIub3B0aW9uSUQ7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcblxuICAgIHZhciBpZCA9IF9taXhpbnNXaWRnZXRNaXhpbjJbJ2RlZmF1bHQnXS5faWQuY2FsbCh0aGlzKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncnctbXVsdGlzZWxlY3QtdGFnbGlzdCdcbiAgICAgIH0pLFxuICAgICAgdmFsdWUubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHZhciBpc0Rpc2FibGVkID0gX3RoaXMuaXNEaXNhYmxlZChpdGVtKSxcbiAgICAgICAgICAgIGlzUmVhZG9ubHkgPSBfdGhpcy5pc1JlYWRPbmx5KGl0ZW0pLFxuICAgICAgICAgICAgaXNGb2N1c2VkID0gIWlzRGlzYWJsZWQgJiYgZm9jdXNlZCA9PT0gaSxcbiAgICAgICAgICAgIGN1cnJlbnRJRCA9IG9wdGlvbklkKGlkLCBpKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnbGknLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SUQsXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgJ3J3LXN0YXRlLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgICAgJ3J3LXN0YXRlLXJlYWRvbmx5JzogaXNSZWFkb25seVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIFZhbHVlQ29tcG9uZW50ID8gUmVhY3QuY3JlYXRlRWxlbWVudChWYWx1ZUNvbXBvbmVudCwgeyBpdGVtOiBpdGVtIH0pIDogX3RoaXMuX2RhdGFUZXh0KGl0ZW0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAhKGlzRGlzYWJsZWQgfHwgaXNSZWFkb25seSkgJiYgX3RoaXMuX2RlbGV0ZS5iaW5kKG51bGwsIGl0ZW0pLFxuICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ1Vuc2VsZWN0JyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncnctdGFnLWJ0bicsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgICAgICAgICAnw5cnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIF9kZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUodmFsKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSh2YWwpO1xuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGlkeCkge1xuICAgIHZhciB2YWwgPSB0aGlzLnByb3BzLnZhbHVlW2lkeF07XG5cbiAgICBpZiAodmFsICYmICEodGhpcy5pc0Rpc2FibGVkKHZhbCkgfHwgdGhpcy5pc1JlYWRPbmx5KHZhbCkpKSB0aGlzLnByb3BzLm9uRGVsZXRlKHZhbCk7XG4gIH0sXG5cbiAgcmVtb3ZlTmV4dDogZnVuY3Rpb24gcmVtb3ZlTmV4dCgpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5wcm9wcy52YWx1ZVt0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHZhbCAmJiAhKHRoaXMuaXNEaXNhYmxlZCh2YWwpIHx8IHRoaXMuaXNSZWFkT25seSh2YWwpKSkgdGhpcy5wcm9wcy5vbkRlbGV0ZSh2YWwpO1xuICB9LFxuXG4gIGlzRGlzYWJsZWQ6IGZ1bmN0aW9uIGlzRGlzYWJsZWQodmFsLCBpc0lkeCkge1xuICAgIGlmIChpc0lkeCkgdmFsID0gdGhpcy5wcm9wcy52YWx1ZVt2YWxdO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWUgfHwgdGhpcy5fZGF0YUluZGV4T2YodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBbXSwgdmFsKSAhPT0gLTE7XG4gIH0sXG5cbiAgaXNSZWFkT25seTogZnVuY3Rpb24gaXNSZWFkT25seSh2YWwsIGlzSWR4KSB7XG4gICAgaWYgKGlzSWR4KSB2YWwgPSB0aGlzLnByb3BzLnZhbHVlW3ZhbF07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLl9kYXRhSW5kZXhPZih0aGlzLnByb3BzLnJlYWRPbmx5IHx8IFtdLCB2YWwpICE9PSAtMTtcbiAgfSxcblxuICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IG51bGwgfSk7XG4gIH0sXG5cbiAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgIHZhciBpZHggPSAwLFxuICAgICAgICBsID0gdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaWR4IDwgbCAmJiB0aGlzLmlzRGlzYWJsZWQoaWR4LCB0cnVlKSkgaWR4Kys7XG5cbiAgICByZXR1cm4gaWR4ICE9PSBsID8gaWR4IDogbnVsbDtcbiAgfSxcblxuICBsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuICAgIHZhciBpZHggPSB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCAtIDE7XG5cbiAgICB3aGlsZSAoaWR4ID4gLTEgJiYgdGhpcy5pc0Rpc2FibGVkKGlkeCwgdHJ1ZSkpIGlkeC0tO1xuXG4gICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4IDogbnVsbDtcbiAgfSxcblxuICBuZXh0OiBmdW5jdGlvbiBuZXh0KGN1cnJlbnQpIHtcbiAgICB2YXIgbmV4dElkeCA9IGN1cnJlbnQgKyAxLFxuICAgICAgICBsID0gdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAobmV4dElkeCA8IGwgJiYgdGhpcy5pc0Rpc2FibGVkKG5leHRJZHgsIHRydWUpKSBuZXh0SWR4Kys7XG5cbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCB8fCBuZXh0SWR4ID49IGwpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIG5leHRJZHg7XG4gIH0sXG5cbiAgcHJldjogZnVuY3Rpb24gcHJldihjdXJyZW50KSB7XG4gICAgdmFyIG5leHRJZHggPSBjdXJyZW50O1xuXG4gICAgaWYgKG5leHRJZHggPT09IG51bGwgfHwgbmV4dElkeCA9PT0gMCkgbmV4dElkeCA9IHRoaXMucHJvcHMudmFsdWUubGVuZ3RoO1xuXG4gICAgbmV4dElkeC0tO1xuXG4gICAgd2hpbGUgKG5leHRJZHggPiAtMSAmJiB0aGlzLmlzRGlzYWJsZWQobmV4dElkeCwgdHJ1ZSkpIG5leHRJZHgtLTtcblxuICAgIHJldHVybiBuZXh0SWR4ID49IDAgPyBuZXh0SWR4IDogbnVsbDtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKSxcbiAgICBsb2NhbGl6ZXJzID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKS5sb2NhbGU7XG5cbnZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmZvcm1hdCB8fCBsb2NhbGl6ZXJzLm51bWJlci5mb3JtYXRzWydkZWZhdWx0J107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ051bWJlclBpY2tlcklucHV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAgIGZvcm1hdDogQ3VzdG9tUHJvcFR5cGVzLm51bWJlckZvcm1hdCxcbiAgICBwYXJzZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdWx0dXJlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgbWluOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25LZXlEb3duOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKG51bWJlciwgY3VsdHVyZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemVycy5udW1iZXIucGFyc2UobnVtYmVyLCBjdWx0dXJlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRTdGF0ZTogZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKHByb3BzKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMuZWRpdGluZyA/IHByb3BzLnZhbHVlIDogZm9ybWF0TnVtYmVyKHByb3BzLnZhbHVlLCBmb3JtYXQocHJvcHMpLCBwcm9wcy5jdWx0dXJlKTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IGlzTmFOKHByb3BzLnZhbHVlKSkgdmFsdWUgPSAnJztcblxuICAgIHJldHVybiB7XG4gICAgICBzdHJpbmdWYWx1ZTogJycgKyB2YWx1ZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFN0YXRlKHRoaXMucHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldERlZmF1bHRTdGF0ZShuZXh0UHJvcHMpKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnN0cmluZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBjbGFzc05hbWU6ICdydy1pbnB1dCcsXG4gICAgICBvbkNoYW5nZTogdGhpcy5fY2hhbmdlLFxuICAgICAgb25CbHVyOiB0aGlzLl9maW5pc2gsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAnYXJpYS1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgdmFsdWU6IHZhbHVlIH0pKTtcbiAgfSxcblxuICBfY2hhbmdlOiBmdW5jdGlvbiBfY2hhbmdlKGUpIHtcbiAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgIG51bWJlciA9IHRoaXMucHJvcHMucGFyc2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMuY3VsdHVyZSksXG4gICAgICAgIHZhbGlkID0gdGhpcy5pc1ZhbGlkKG51bWJlcik7XG5cbiAgICBpZiAodmFsID09IG51bGwgfHwgdmFsLnRyaW0oKSA9PT0gJycpIHJldHVybiB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xuXG4gICAgaWYgKHZhbGlkICYmIG51bWJlciAhPT0gdGhpcy5wcm9wcy52YWx1ZSAmJiAhdGhpcy5pc0F0RGVsaW1pdGVyKG51bWJlciwgdmFsKSkgcmV0dXJuIHRoaXMucHJvcHMub25DaGFuZ2UobnVtYmVyKTtcblxuICAgIC8vY29uc29sZS5sb2codmFsICE9PSAwICYmICF2YWwpXG4gICAgaWYgKCFpc05hTihudW1iZXIpIHx8IHRoaXMuaXNBdERlbGltaXRlcihudW1iZXIsIHZhbCkpIHRoaXMuY3VycmVudChlLnRhcmdldC52YWx1ZSk7XG4gIH0sXG5cbiAgX2ZpbmlzaDogZnVuY3Rpb24gX2ZpbmlzaCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5zdGF0ZS5zdHJpbmdWYWx1ZSxcbiAgICAgICAgbnVtYmVyID0gdGhpcy5wcm9wcy5wYXJzZShzdHIsIHRoaXMucHJvcHMuY3VsdHVyZSk7XG5cbiAgICAvLyBpZiBudW1iZXIgaXMgYmVsb3cgdGhlIG1pblxuICAgIC8vIHdlIG5lZWQgdG8gZmx1c2ggbG93IHZhbHVlcyBhbmQgZGVjaW1hbCBzdG9wcywgb25CbHVyIG1lYW5zIGknbSBkb25lIGlucHV0aW5nXG4gICAgaWYgKCFpc05hTihudW1iZXIpICYmIChudW1iZXIgPCB0aGlzLnByb3BzLm1pbiB8fCB0aGlzLmlzQXREZWxpbWl0ZXIobnVtYmVyLCBzdHIpKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudW1iZXIpO1xuICAgIH1cbiAgfSxcblxuICBpc0F0RGVsaW1pdGVyOiBmdW5jdGlvbiBpc0F0RGVsaW1pdGVyKG51bSwgc3RyKSB7XG4gICAgdmFyIG5leHQ7XG5cbiAgICBpZiAoc3RyLmxlbmd0aCA8PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICBuZXh0ID0gdGhpcy5wcm9wcy5wYXJzZShzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKSwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHJldHVybiB0eXBlb2YgbmV4dCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG5leHQpICYmIG5leHQgPT09IG51bTtcbiAgfSxcblxuICBpc1ZhbGlkOiBmdW5jdGlvbiBpc1ZhbGlkKG51bSkge1xuICAgIGlmICh0eXBlb2YgbnVtICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW0pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG51bSA+PSB0aGlzLnByb3BzLm1pbjtcbiAgfSxcblxuICAvL3RoaXMgaW50ZXJtZWRpYXRlIHN0YXRlIGlzIGZvciB3aGVuIG9uZSBydW5zIGludG8gdGhlIGRlY2ltYWwgb3IgYXJlIHR5cGluZyB0aGUgbnVtYmVyXG4gIGN1cnJlbnQ6IGZ1bmN0aW9uIGN1cnJlbnQodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0cmluZ1ZhbHVlOiB2YWwgfSk7XG4gIH1cblxufSk7XG5cbi8vIGZ1bmN0aW9uIHBhcnNlTG9jYWxlRmxvYXQobnVtYmVyLCBwYXJzZXIsIGN1bHR1cmUpIHtcbi8vICAgaWYgKCB0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKVxuLy8gICAgIHJldHVybiBmb3JtYXQobnVtYmVyLCBjdWx0dXJlKVxuXG4vLyAgIHJldHVybiBjb25maWcuZ2xvYmFsaXplLnBhcnNlRmxvYXQobnVtYmVyLCAxMCwgY3VsdHVyZSlcbi8vIH1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZm9ybWF0LCBjdWx0dXJlKSB7XG4gIHJldHVybiBsb2NhbGl6ZXJzLm51bWJlci5mb3JtYXQobnVtYmVyLCBmb3JtYXQsIGN1bHR1cmUpO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICBfID0gcmVxdWlyZSgnLi91dGlsL18nKSAvL29taXRcbixcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0JyksXG4gICAgQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3Byb3BUeXBlcycpLFxuICAgIGNyZWF0ZVVuY29udHJvbGxlZFdpZGdldCA9IHJlcXVpcmUoJ3VuY29udHJvbGxhYmxlJyksXG4gICAgZGlyZWN0aW9ucyA9IHJlcXVpcmUoJy4vdXRpbC9jb25zdGFudHMnKS5kaXJlY3Rpb25zLFxuICAgIHJlcGVhdGVyID0gcmVxdWlyZSgnLi91dGlsL3JlcGVhdGVyJyksXG4gICAgbG9jYWxpemVycyA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJykubG9jYWxlLFxuICAgIElucHV0ID0gcmVxdWlyZSgnLi9OdW1iZXJJbnB1dCcpO1xuXG52YXIgQnRuID0gcmVxdWlyZSgnLi9XaWRnZXRCdXR0b24nKTtcblxudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZm9ybWF0IHx8IGxvY2FsaXplcnMubnVtYmVyLmZvcm1hdHNbJ2RlZmF1bHQnXTtcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG5cbiAgLy8gLS0gY29udHJvbGxlZCBwcm9wcyAtLS0tLS0tLS0tLVxuICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG1pbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIHByZWNpc2lvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICBjdWx0dXJlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGZvcm1hdDogQ3VzdG9tUHJvcFR5cGVzLm51bWJlckZvcm1hdCxcblxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIHBhcnNlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcblxuICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydyZWFkT25seSddKV0pLFxuXG4gIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGluY3JlbWVudDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNyZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn07XG5cbnZhciBOdW1iZXJQaWNrZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdOdW1iZXJQaWNrZXInLFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1dpZGdldE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpLCByZXF1aXJlKCcuL21peGlucy9QdXJlUmVuZGVyTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIG9wZW46IGZhbHNlLFxuXG4gICAgICBtaW46IC1JbmZpbml0eSxcbiAgICAgIG1heDogSW5maW5pdHksXG4gICAgICBzdGVwOiAxLFxuXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBpbmNyZW1lbnQ6ICdpbmNyZW1lbnQgdmFsdWUnLFxuICAgICAgICBkZWNyZW1lbnQ6ICdkZWNyZW1lbnQgdmFsdWUnXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgXyRvbWl0ID0gXy5vbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IF8kb21pdC5jbGFzc05hbWU7XG4gICAgdmFyIG9uS2V5RG93biA9IF8kb21pdC5vbktleURvd247XG4gICAgdmFyIG9uS2V5UHJlc3MgPSBfJG9taXQub25LZXlQcmVzcztcbiAgICB2YXIgb25LZXlVcCA9IF8kb21pdC5vbktleVVwO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfJG9taXQsIFsnY2xhc3NOYW1lJywgJ29uS2V5RG93bicsICdvbktleVByZXNzJywgJ29uS2V5VXAnXSk7XG4gICAgdmFyIHZhbCA9IHRoaXMuY29uc3RyYWluVmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICByZWY6ICdlbGVtZW50JyxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLl9rZXlEb3duLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLl9mb2N1cy5iaW5kKG51bGwsIHRydWUpLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgY2xhc3NOYW1lOiBjeChjbGFzc05hbWUsICdydy1udW1iZXJwaWNrZXInLCAncnctd2lkZ2V0Jywge1xuICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICAgICAgICAncnctc3RhdGUtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICdydy1zdGF0ZS1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgJ3J3LXJ0bCc6IHRoaXMuaXNSdGwoKVxuICAgICAgICB9KSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zZWxlY3QnIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnRuLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjeCh7ICdydy1zdGF0ZS1hY3RpdmUnOiB0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gZGlyZWN0aW9ucy5VUCB9KSxcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9tb3VzZURvd24uYmluZChudWxsLCBkaXJlY3Rpb25zLlVQKSxcbiAgICAgICAgICAgIG9uTW91c2VVcDogdGhpcy5fbW91c2VVcC5iaW5kKG51bGwsIGRpcmVjdGlvbnMuVVApLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5fZm9jdXMuYmluZChudWxsLCB0cnVlKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB2YWwgPT09IHRoaXMucHJvcHMubWF4IHx8IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHZhbCA9PT0gdGhpcy5wcm9wcy5tYXggfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaScsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LWkgcnctaS1jYXJldC11cCcgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdydy1zcicgfSxcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlcy5pbmNyZW1lbnRcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnRuLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjeCh7ICdydy1zdGF0ZS1hY3RpdmUnOiB0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gZGlyZWN0aW9ucy5ET1dOIH0pLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuX21vdXNlRG93bi5iaW5kKG51bGwsIGRpcmVjdGlvbnMuRE9XTiksXG4gICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuX21vdXNlVXAuYmluZChudWxsLCBkaXJlY3Rpb25zLkRPV04pLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5fZm9jdXMuYmluZChudWxsLCB0cnVlKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB2YWwgPT09IHRoaXMucHJvcHMubWluIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHZhbCA9PT0gdGhpcy5wcm9wcy5taW4gfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaScsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LWkgcnctaS1jYXJldC1kb3duJyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3J3LXNyJyB9LFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lc3NhZ2VzLmRlY3JlbWVudFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXgsXG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIGVkaXRpbmc6IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICAgICAgZm9ybWF0OiB0aGlzLnByb3BzLmZvcm1hdCxcbiAgICAgICAgcGFyc2U6IHRoaXMucHJvcHMucGFyc2UsXG4gICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgcm9sZTogJ3NwaW5idXR0b24nLFxuICAgICAgICBtaW46IHRoaXMucHJvcHMubWluLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpc0Zpbml0ZSh0aGlzLnByb3BzLm1pbikgPyB0aGlzLnByb3BzLm1pbiA6IG51bGwsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogaXNGaW5pdGUodGhpcy5wcm9wcy5tYXgpID8gdGhpcy5wcm9wcy5tYXggOiBudWxsLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogdGhpcy5wcm9wcy5yZWFkb25seSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5jaGFuZ2UsXG4gICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgICAgICBvbktleVByZXNzOiBvbktleVByZXNzLFxuICAgICAgICBvbktleVVwOiBvbktleVVwIH0pXG4gICAgKTtcbiAgfSxcblxuICAvL2FsbG93IGZvciBzdHlsaW5nLCBmb2N1cyBzdGVhbGluZyBrZWVwaW5nIG1lIGZyb20gdGhlIG5vcm1hbCB3aGF0IGhhdmUgeW91XG4gIF9tb3VzZURvd246IF8uaWZOb3REaXNhYmxlZChmdW5jdGlvbiAoZGlyKSB7XG4gICAgdmFyIG1ldGhvZCA9IGRpciA9PT0gZGlyZWN0aW9ucy5VUCA/IHRoaXMuaW5jcmVtZW50IDogdGhpcy5kZWNyZW1lbnQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBkaXIgfSk7XG5cbiAgICB2YXIgdmFsID0gbWV0aG9kLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoIShkaXIgPT09IGRpcmVjdGlvbnMuVVAgJiYgdmFsID09PSB0aGlzLnByb3BzLm1heCB8fCBkaXIgPT09IGRpcmVjdGlvbnMuRE9XTiAmJiB2YWwgPT09IHRoaXMucHJvcHMubWluKSkge1xuICAgICAgaWYgKCF0aGlzLl9jYW5jZWxSZXBlYXRlcikgdGhpcy5fY2FuY2VsUmVwZWF0ZXIgPSByZXBlYXRlcih0aGlzLl9tb3VzZURvd24uYmluZChudWxsLCBkaXIpKTtcbiAgICB9IGVsc2UgdGhpcy5fbW91c2VVcCgpO1xuICB9KSxcblxuICBfbW91c2VVcDogXy5pZk5vdERpc2FibGVkKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLl9jYW5jZWxSZXBlYXRlciAmJiB0aGlzLl9jYW5jZWxSZXBlYXRlcigpO1xuICAgIHRoaXMuX2NhbmNlbFJlcGVhdGVyID0gbnVsbDtcbiAgfSksXG5cbiAgX2ZvY3VzOiBfLmlmTm90RGlzYWJsZWQodHJ1ZSwgZnVuY3Rpb24gKGZvY3VzZWQsIGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9jdXNlZCAmJiBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KS5mb2N1cygpO1xuXG4gICAgdGhpcy5zZXRUaW1lb3V0KCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c2VkICE9PSBfdGhpcy5zdGF0ZS5mb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLm5vdGlmeShmb2N1c2VkID8gJ29uRm9jdXMnIDogJ29uQmx1cicsIGUpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH0pLFxuXG4gIF9rZXlEb3duOiBfLmlmTm90RGlzYWJsZWQoZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIga2V5ID0gZS5rZXk7XG5cbiAgICBpZiAoa2V5ID09PSAnRW5kJyAmJiBpc0Zpbml0ZSh0aGlzLnByb3BzLm1heCkpIHRoaXMuY2hhbmdlKHRoaXMucHJvcHMubWF4KTtlbHNlIGlmIChrZXkgPT09ICdIb21lJyAmJiBpc0Zpbml0ZSh0aGlzLnByb3BzLm1pbikpIHRoaXMuY2hhbmdlKHRoaXMucHJvcHMubWluKTtlbHNlIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRlY3JlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgfVxuICB9KSxcblxuICBpbmNyZW1lbnQ6IGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwKHRoaXMucHJvcHMuc3RlcCk7XG4gIH0sXG5cbiAgZGVjcmVtZW50OiBmdW5jdGlvbiBkZWNyZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcCgtdGhpcy5wcm9wcy5zdGVwKTtcbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbiBzdGVwKGFtb3VudCkge1xuICAgIHZhciB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IDApICsgYW1vdW50O1xuXG4gICAgdmFyIGRlY2ltYWxzID0gdGhpcy5wcm9wcy5wcmVjaXNpb24gIT0gbnVsbCA/IHRoaXMucHJvcHMucHJlY2lzaW9uIDogbG9jYWxpemVycy5udW1iZXIucHJlY2lzaW9uKGZvcm1hdCh0aGlzLnByb3BzKSk7XG5cbiAgICB0aGlzLmNoYW5nZShkZWNpbWFscyAhPSBudWxsID8gcm91bmQodmFsdWUsIGRlY2ltYWxzKSA6IHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZSh2YWwpIHtcbiAgICB2YWwgPSB0aGlzLmNvbnN0cmFpblZhbHVlKHZhbCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gdmFsKSB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCB2YWwpO1xuICB9LFxuXG4gIGNvbnN0cmFpblZhbHVlOiBmdW5jdGlvbiBjb25zdHJhaW5WYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBtYXggPSB0aGlzLnByb3BzLm1heCA9PSBudWxsID8gSW5maW5pdHkgOiB0aGlzLnByb3BzLm1heCxcbiAgICAgICAgbWluID0gdGhpcy5wcm9wcy5taW4gPT0gbnVsbCA/IC1JbmZpbml0eSA6IHRoaXMucHJvcHMubWluO1xuXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbiAgfVxuXG59KTtcblxuLy8gdGhhbmsgeW91IGtlbmRvIHVpIGNvcmVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90ZWxlcmlrL2tlbmRvLXVpLWNvcmUvYmxvYi9tYXN0ZXIvc3JjL2tlbmRvLmNvcmUuanMjTDEwMzZcbmZ1bmN0aW9uIHJvdW5kKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDA7XG5cbiAgdmFsdWUgPSAoJycgKyB2YWx1ZSkuc3BsaXQoJ2UnKTtcbiAgdmFsdWUgPSBNYXRoLnJvdW5kKCsodmFsdWVbMF0gKyAnZScgKyAodmFsdWVbMV0gPyArdmFsdWVbMV0gKyBwcmVjaXNpb24gOiBwcmVjaXNpb24pKSk7XG5cbiAgdmFsdWUgPSAoJycgKyB2YWx1ZSkuc3BsaXQoJ2UnKTtcbiAgdmFsdWUgPSArKHZhbHVlWzBdICsgJ2UnICsgKHZhbHVlWzFdID8gK3ZhbHVlWzFdIC0gcHJlY2lzaW9uIDogLXByZWNpc2lvbikpO1xuXG4gIHJldHVybiB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVW5jb250cm9sbGVkV2lkZ2V0KE51bWJlclBpY2tlciwgeyB2YWx1ZTogJ29uQ2hhbmdlJyB9KTtcblxubW9kdWxlLmV4cG9ydHMuQmFzZU51bWJlclBpY2tlciA9IE51bWJlclBpY2tlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgY3NzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvc3R5bGUnKSxcbiAgICBnZXRIZWlnaHQgPSByZXF1aXJlKCdkb20taGVscGVycy9xdWVyeS9oZWlnaHQnKSxcbiAgICBjb25maWcgPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpLFxuICAgIGNuID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpLFxuICAgIGNvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIHRyYW5zZm9ybSA9IGNvbmZpZy5hbmltYXRlLnRyYW5zZm9ybTtcblxuZnVuY3Rpb24gcHJvcGVydGllcyhwcm9wLCB2YWx1ZSkge1xuICB2YXIgX3JlZiwgX3JlZjI7XG5cbiAgdmFyIFRSQU5TTEFUSU9OX01BUCA9IGNvbmZpZy5hbmltYXRlLlRSQU5TTEFUSU9OX01BUDtcblxuICBpZiAoVFJBTlNMQVRJT05fTUFQICYmIFRSQU5TTEFUSU9OX01BUFtwcm9wXSkgcmV0dXJuIChfcmVmID0ge30sIF9yZWZbdHJhbnNmb3JtXSA9ICcnICsgVFJBTlNMQVRJT05fTUFQW3Byb3BdICsgJygnICsgdmFsdWUgKyAnKScsIF9yZWYpO1xuXG4gIHJldHVybiAoX3JlZjIgPSB7fSwgX3JlZjJbcHJvcF0gPSB2YWx1ZSwgX3JlZjIpO1xufVxuXG52YXIgUG9wdXBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BvcHVwQ29udGVudCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIGlmICghY2hpbGQpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdydy1wb3B1cCBydy13aWRnZXQnIH0pO1xuXG4gICAgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGNvbXBhdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGNsYXNzTmFtZTogY24oY2hpbGQucHJvcHMuY2xhc3NOYW1lLCAncnctcG9wdXAgcnctd2lkZ2V0JylcbiAgICB9KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGRpc3BsYXlOYW1lOiAnUG9wdXAnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGRyb3BVcDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZHVyYXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBvblJlcXVlc3RDbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3Npbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbmluZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PcGVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgb25DbG9zaW5nOiBmdW5jdGlvbiBvbkNsb3NpbmcoKSB7fSxcbiAgICAgIG9uT3BlbmluZzogZnVuY3Rpb24gb25PcGVuaW5nKCkge30sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG4gICAgICBvbk9wZW46IGZ1bmN0aW9uIG9uT3BlbigpIHt9XG4gICAgfTtcbiAgfSxcblxuICAvLyBjb21wb25lbnREaWRNb3VudCgpe1xuICAvLyAgICF0aGlzLnByb3BzLm9wZW4gJiYgdGhpcy5jbG9zZSgwKVxuICAvLyB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAhdGhpcy5wcm9wcy5vcGVuICYmICh0aGlzLl9pbml0aWFsUG9zaXRpb24gPSB0cnVlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudENoYW5nZWQ6IGNoaWxkS2V5KG5leHRQcm9wcy5jaGlsZHJlbikgIT09IGNoaWxkS2V5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHZQcm9wcykge1xuICAgIHZhciBjbG9zaW5nID0gcHZQcm9wcy5vcGVuICYmICF0aGlzLnByb3BzLm9wZW4sXG4gICAgICAgIG9wZW5pbmcgPSAhcHZQcm9wcy5vcGVuICYmIHRoaXMucHJvcHMub3BlbixcbiAgICAgICAgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcblxuICAgIGlmIChvcGVuaW5nKSB0aGlzLm9wZW4oKTtlbHNlIGlmIChjbG9zaW5nKSB0aGlzLmNsb3NlKCk7ZWxzZSBpZiAob3BlbikgdGhpcy5oZWlnaHQoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgb3BlbiA9IF9wcm9wcy5vcGVuO1xuICAgIHZhciBkcm9wVXAgPSBfcHJvcHMuZHJvcFVwO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ29wZW4nLCAnZHJvcFVwJ10pO1xuICAgIHZhciBkaXNwbGF5ID0gb3BlbiA/ICdibG9jaycgOiB2b2lkIDA7XG5cbiAgICBpZiAodGhpcy5faW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgICBkaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHN0eWxlOiBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe1xuICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9LCBwcm9wcy5zdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY24oY2xhc3NOYW1lLCAncnctcG9wdXAtY29udGFpbmVyJywgeyAncnctZHJvcHVwJzogZHJvcFVwIH0pXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFBvcHVwQ29udGVudCxcbiAgICAgICAgeyByZWY6ICdjb250ZW50JyB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgY29udGVudCA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udGVudCksXG4gICAgICAgIHN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvdzogJ2hpZGRlbicgfTtcblxuICAgIGNzcyhjb250YWluZXIsIHN0eWxlKTtcbiAgICB0aGlzLmhlaWdodCgpO1xuICAgIGNzcyhjb250ZW50LCBwcm9wZXJ0aWVzKCd0b3AnLCB0aGlzLnByb3BzLmRyb3BVcCA/ICcxMDAlJyA6ICctMTAwJScpKTtcbiAgfSxcblxuICBoZWlnaHQ6IGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgICB2YXIgZWwgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgIGNvbnRlbnQgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnQpLFxuICAgICAgICBtYXJnaW4gPSBwYXJzZUludChjc3MoY29udGVudCwgJ21hcmdpbi10b3AnKSwgMTApICsgcGFyc2VJbnQoY3NzKGNvbnRlbnQsICdtYXJnaW4tYm90dG9tJyksIDEwKTtcblxuICAgIHZhciBoZWlnaHQgPSBnZXRIZWlnaHQoY29udGVudCkgKyAoaXNOYU4obWFyZ2luKSA/IDAgOiBtYXJnaW4pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhbmltID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICBlbCA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udGVudCk7XG5cbiAgICB0aGlzLk9SR0lOQUxfUE9TSVRJT04gPSBjc3MoZWwsICdwb3NpdGlvbicpO1xuICAgIHRoaXMuX2lzT3BlbmluZyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5faW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9pbml0aWFsUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9IGVsc2UgdGhpcy5oZWlnaHQoKTtcblxuICAgIHRoaXMucHJvcHMub25PcGVuaW5nKCk7XG5cbiAgICBhbmltLmNsYXNzTmFtZSArPSAnIHJ3LXBvcHVwLWFuaW1hdGluZyc7XG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgY29uZmlnLmFuaW1hdGUoZWwsIHsgdG9wOiAwIH0sIHNlbGYucHJvcHMuZHVyYXRpb24sICdlYXNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzZWxmLl9pc09wZW5pbmcpIHJldHVybjtcblxuICAgICAgYW5pbS5jbGFzc05hbWUgPSBhbmltLmNsYXNzTmFtZS5yZXBsYWNlKC8gP3J3LXBvcHVwLWFuaW1hdGluZy9nLCAnJyk7XG5cbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gc2VsZi5PUkdJTkFMX1BPU0lUSU9OO1xuICAgICAgYW5pbS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgIHNlbGYuT1JHSU5BTF9QT1NJVElPTiA9IG51bGw7XG5cbiAgICAgIHNlbGYucHJvcHMub25PcGVuKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGR1cikge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZWwgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnQpLFxuICAgICAgICBhbmltID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdGhpcy5PUkdJTkFMX1BPU0lUSU9OID0gY3NzKGVsLCAncG9zaXRpb24nKTtcblxuICAgIHRoaXMuX2lzT3BlbmluZyA9IGZhbHNlO1xuICAgIHRoaXMuaGVpZ2h0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NpbmcoKTtcblxuICAgIGFuaW0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBhbmltLmNsYXNzTmFtZSArPSAnIHJ3LXBvcHVwLWFuaW1hdGluZyc7XG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgY29uZmlnLmFuaW1hdGUoZWwsIHsgdG9wOiB0aGlzLnByb3BzLmRyb3BVcCA/ICcxMDAlJyA6ICctMTAwJScgfSwgZHVyID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLmR1cmF0aW9uIDogZHVyLCAnZWFzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLl9pc09wZW5pbmcpIHJldHVybjtcblxuICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSBzZWxmLk9SR0lOQUxfUE9TSVRJT047XG4gICAgICBhbmltLmNsYXNzTmFtZSA9IGFuaW0uY2xhc3NOYW1lLnJlcGxhY2UoLyA/cnctcG9wdXAtYW5pbWF0aW5nL2csICcnKTtcblxuICAgICAgYW5pbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2VsZi5PUkdJTkFMX1BPU0lUSU9OID0gbnVsbDtcbiAgICAgIHNlbGYucHJvcHMub25DbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBjaGlsZEtleShjaGlsZHJlbikge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSk7XG4gIGZvciAodmFyIGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKSByZXR1cm4ga2V5O1xufSIsIi8qKlxyXG4gKiBBIHN0cmVhbWxpbmVkIHZlcnNpb24gb2YgVHJhbnNpdGlvbkdyb3VwIGJ1aWx0IGZvciBtYW5hZ2luZyBhdCBtb3N0IHR3byBhY3RpdmUgY2hpbGRyZW5cclxuICogYWxzbyBwcm92aWRlcyBhZGRpdGlvbmFsIGhvb2tzIGZvciBhbmltYXRpb24gc3RhcnQvZW5kXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9zcmMvYWRkb25zL3RyYW5zaXRpb25zL1JlYWN0VHJhbnNpdGlvbkdyb3VwLmpzXHJcbiAqIHJlbGV2ZW50IGNvZGUgaXMgbGljZW5zZWQgYWNjb3JkaW5nbHlcclxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgY3NzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvc3R5bGUnKSxcbiAgICBoZWlnaHQgPSByZXF1aXJlKCdkb20taGVscGVycy9xdWVyeS9oZWlnaHQnKSxcbiAgICB3aWR0aCA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3F1ZXJ5L3dpZHRoJyksXG4gICAgY29tcGF0ID0gcmVxdWlyZSgnLi91dGlsL2NvbXBhdCcpLFxuICAgIF8gPSByZXF1aXJlKCcuL3V0aWwvXycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1JlcGxhY2VUcmFuc2l0aW9uR3JvdXAnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsIFJlYWN0LlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBjaGlsZEZhY3Rvcnk6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXG4gICAgb25BbmltYXRpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQW5pbWF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50OiAnc3BhbicsXG4gICAgICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShhKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSxcblxuICAgICAgb25BbmltYXRpbmc6IF8ubm9vcCxcbiAgICAgIG9uQW5pbWF0ZTogXy5ub29wXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IF8uc3BsYXQodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIG5leHRDaGlsZCA9IGdldENoaWxkKG5leHRQcm9wcy5jaGlsZHJlbiksXG4gICAgICAgIHN0YWNrID0gdGhpcy5zdGF0ZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgICAgICBuZXh0ID0gc3RhY2tbMV0sXG4gICAgICAgIGxhc3QgPSBzdGFja1swXTtcblxuICAgIHZhciBpc0xhc3RDaGlsZCA9IGxhc3QgJiYga2V5KGxhc3QpID09PSBrZXkobmV4dENoaWxkKSxcbiAgICAgICAgaXNOZXh0Q2hpbGQgPSBuZXh0ICYmIGtleShuZXh0KSA9PT0ga2V5KG5leHRDaGlsZCk7XG5cbiAgICAvL25vIGNoaWxkcmVuXG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICBzdGFjay5wdXNoKG5leHRDaGlsZCk7XG4gICAgICB0aGlzLmVudGVyaW5nID0gbmV4dENoaWxkO1xuICAgIH0gZWxzZSBpZiAobGFzdCAmJiAhbmV4dCAmJiAhaXNMYXN0Q2hpbGQpIHtcbiAgICAgIC8vbmV3IGNoaWxkXG4gICAgICBzdGFjay5wdXNoKG5leHRDaGlsZCk7XG4gICAgICB0aGlzLmxlYXZpbmcgPSBsYXN0O1xuICAgICAgdGhpcy5lbnRlcmluZyA9IG5leHRDaGlsZDtcbiAgICB9IGVsc2UgaWYgKGxhc3QgJiYgbmV4dCAmJiAhaXNMYXN0Q2hpbGQgJiYgIWlzTmV4dENoaWxkKSB7XG4gICAgICAvLyB0aGUgY2hpbGQgaXMgbm90IHRoZSBjdXJyZW50IG9uZSwgZXhpdCB0aGUgY3VycmVudCBvbmUsIGFkZCB0aGUgbmV3IG9uZVxuICAgICAgLy8gIC0gc2hpZnQgdGhlIHN0YWNrIGRvd25cbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgICBzdGFjay5wdXNoKG5leHRDaGlsZCk7XG4gICAgICB0aGlzLmxlYXZpbmcgPSBuZXh0O1xuICAgICAgdGhpcy5lbnRlcmluZyA9IG5leHRDaGlsZDtcbiAgICB9XG4gICAgLy9uZXcgY2hpbGQgdGhhdCBqdXN0IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkXG4gICAgZWxzZSBpZiAoaXNMYXN0Q2hpbGQpIHN0YWNrLnNwbGljZSgwLCAxLCBuZXh0Q2hpbGQpO2Vsc2UgaWYgKGlzTmV4dENoaWxkKSBzdGFjay5zcGxpY2UoMSwgMSwgbmV4dENoaWxkKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmNoaWxkcmVuWzBdICE9PSBzdGFja1swXSB8fCB0aGlzLnN0YXRlLmNoaWxkcmVuWzFdICE9PSBzdGFja1sxXSkgdGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBzdGFjayB9KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmFuaW1hdGluZ0tleXMgPSB7fTtcbiAgICB0aGlzLmxlYXZpbmcgPSBudWxsO1xuICAgIHRoaXMuZW50ZXJpbmcgPSBudWxsO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBlbnRlcmluZyA9IHRoaXMuZW50ZXJpbmcsXG4gICAgICAgIGxlYXZpbmcgPSB0aGlzLmxlYXZpbmcsXG4gICAgICAgIGZpcnN0ID0gdGhpcy5yZWZzW2tleShlbnRlcmluZykgfHwga2V5KGxlYXZpbmcpXSxcbiAgICAgICAgbm9kZSA9IGNvbXBhdC5maW5kRE9NTm9kZSh0aGlzKSxcbiAgICAgICAgZWwgPSBmaXJzdCAmJiBjb21wYXQuZmluZERPTU5vZGUoZmlyc3QpO1xuXG4gICAgaWYgKGVsKSBjc3Mobm9kZSwge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQoZWwpICsgJ3B4JyxcbiAgICAgIHdpZHRoOiB3aWR0aChlbCkgKyAncHgnXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQW5pbWF0aW5nKCk7XG5cbiAgICB0aGlzLmVudGVyaW5nID0gbnVsbDtcbiAgICB0aGlzLmxlYXZpbmcgPSBudWxsO1xuXG4gICAgaWYgKGVudGVyaW5nKSB0aGlzLnBlcmZvcm1FbnRlcihrZXkoZW50ZXJpbmcpKTtcbiAgICBpZiAobGVhdmluZykgdGhpcy5wZXJmb3JtTGVhdmUoa2V5KGxlYXZpbmcpKTtcbiAgfSxcblxuICBwZXJmb3JtRW50ZXI6IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihrZXkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2tleV07XG5cbiAgICBpZiAoIWNvbXBvbmVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5hbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIodGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQodGhpcywga2V5KSk7ZWxzZSB0aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcoa2V5KTtcbiAgfSxcblxuICBfdHJ5RmluaXNoOiBmdW5jdGlvbiBfdHJ5RmluaXNoKCkge1xuXG4gICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nKCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSBjc3MoY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpLCB7IG92ZXJmbG93OiAndmlzaWJsZScsIGhlaWdodDogJycsIHdpZHRoOiAnJyB9KTtcblxuICAgIHRoaXMucHJvcHMub25BbmltYXRlKCk7XG4gIH0sXG5cbiAgX2hhbmRsZURvbmVFbnRlcmluZzogZnVuY3Rpb24gX2hhbmRsZURvbmVFbnRlcmluZyhlbnRlcmtleSkge1xuICAgIHZhciBjb21wb25lbnQgPSB0aGlzLnJlZnNbZW50ZXJrZXldO1xuXG4gICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIpIGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcigpO1xuXG4gICAgZGVsZXRlIHRoaXMuYW5pbWF0aW5nS2V5c1tlbnRlcmtleV07XG5cbiAgICBpZiAoa2V5KHRoaXMucHJvcHMuY2hpbGRyZW4pICE9PSBlbnRlcmtleSkgdGhpcy5wZXJmb3JtTGVhdmUoZW50ZXJrZXkpOyAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgZW50ZXJlZC4gUmVtb3ZlIGl0LlxuXG4gICAgdGhpcy5fdHJ5RmluaXNoKCk7XG4gIH0sXG5cbiAgaXNUcmFuc2l0aW9uaW5nOiBmdW5jdGlvbiBpc1RyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYW5pbWF0aW5nS2V5cykubGVuZ3RoICE9PSAwO1xuICB9LFxuXG4gIHBlcmZvcm1MZWF2ZTogZnVuY3Rpb24gcGVyZm9ybUxlYXZlKGtleSkge1xuICAgIHZhciBjb21wb25lbnQgPSB0aGlzLnJlZnNba2V5XTtcblxuICAgIGlmICghY29tcG9uZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSh0aGlzLl9oYW5kbGVEb25lTGVhdmluZy5iaW5kKHRoaXMsIGtleSkpO2Vsc2UgdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5KTtcbiAgfSxcblxuICBfaGFuZGxlRG9uZUxlYXZpbmc6IGZ1bmN0aW9uIF9oYW5kbGVEb25lTGVhdmluZyhsZWF2ZWtleSkge1xuICAgIHZhciBjb21wb25lbnQgPSB0aGlzLnJlZnNbbGVhdmVrZXldO1xuXG4gICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUpIGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSgpO1xuXG4gICAgZGVsZXRlIHRoaXMuYW5pbWF0aW5nS2V5c1tsZWF2ZWtleV07XG5cbiAgICBpZiAoa2V5KHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSBsZWF2ZWtleSkgdGhpcy5wZXJmb3JtRW50ZXIobGVhdmVrZXkpO2Vsc2UgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46IHRoaXMuc3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBrZXkoYykgIT09IGxlYXZla2V5O1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuX3RyeUZpbmlzaCgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmNoaWxkRmFjdG9yeShjLCBrZXkoYykpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBrZXkoY2hpbGQpIHtcbiAgcmV0dXJuIGNoaWxkICYmIGNoaWxkLmtleTtcbn1cbi8vIFRoaXMgZW50ZXJlZCBhZ2FpbiBiZWZvcmUgaXQgZnVsbHkgbGVmdC4gQWRkIGl0IGFnYWluLiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxfID0gcmVxdWlyZSgnLi91dGlsL18nKTtcblxudmFyIF91dGlsXzIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsXyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZSgndW5jb250cm9sbGFibGUnKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmNvbnRyb2xsYWJsZSk7XG5cbnZhciBfdXRpbENvbXBhdCA9IHJlcXVpcmUoJy4vdXRpbC9jb21wYXQnKTtcblxudmFyIF91dGlsQ29tcGF0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb21wYXQpO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIF9MaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG5cbnZhciBfTGlzdDIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0KTtcblxudmFyIF9MaXN0R3JvdXBhYmxlID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBhYmxlJyk7XG5cbnZhciBfTGlzdEdyb3VwYWJsZTIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0R3JvdXBhYmxlKTtcblxudmFyIF91dGlsVmFsaWRhdGVMaXN0SW50ZXJmYWNlID0gcmVxdWlyZSgnLi91dGlsL3ZhbGlkYXRlTGlzdEludGVyZmFjZScpO1xuXG52YXIgX3V0aWxWYWxpZGF0ZUxpc3RJbnRlcmZhY2UyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFZhbGlkYXRlTGlzdEludGVyZmFjZSk7XG5cbnZhciBfZG9tSGVscGVyc1V0aWxTY3JvbGxUbyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3V0aWwvc2Nyb2xsVG8nKTtcblxudmFyIF9kb21IZWxwZXJzVXRpbFNjcm9sbFRvMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbUhlbHBlcnNVdGlsU2Nyb2xsVG8pO1xuXG52YXIgb21pdCA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0O1xudmFyIHBpY2sgPSBfdXRpbF8yWydkZWZhdWx0J10ucGljaztcbnZhciByZXN1bHQgPSBfdXRpbF8yWydkZWZhdWx0J10ucmVzdWx0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuXG4gIGRhdGE6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXldKSxcbiAgb25DaGFuZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3ZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgbXVsdGlwbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICBpdGVtQ29tcG9uZW50OiBfdXRpbFByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcbiAgbGlzdENvbXBvbmVudDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG5cbiAgdmFsdWVGaWVsZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRGaWVsZDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uYWNjZXNzb3IsXG5cbiAgYnVzeTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gIGZpbHRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGRlbGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblxuICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2Rpc2FibGVkJ10pXSksXG5cbiAgcmVhZE9ubHk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXksIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydyZWFkb25seSddKV0pLFxuXG4gIG1lc3NhZ2VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlbXB0eUxpc3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG52YXIgU2VsZWN0TGlzdCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU2VsZWN0TGlzdCcsXG5cbiAgcHJvcFR5cGVzOiBwcm9wVHlwZXMsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvVGltZW91dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0RhdGFIZWxwZXJzTWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsUGFyZW50Q29udGV4dE1peGluJyksIHJlcXVpcmUoJy4vbWl4aW5zL0FyaWFEZXNjZW5kYW50TWl4aW4nKSgpXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsYXk6IDI1MCxcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgYXJpYUFjdGl2ZURlc2NlbmRhbnRLZXk6ICdzZWxlY3RsaXN0JyxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGVtcHR5TGlzdDogJ1RoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIGxpc3QnXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0U3RhdGU6IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZShwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgaXNSYWRpbyA9ICFwcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgdmFsdWVzID0gX3V0aWxfMlsnZGVmYXVsdCddLnNwbGF0KHByb3BzLnZhbHVlKSxcbiAgICAgICAgZmlyc3QgPSBpc1JhZGlvICYmIHRoaXMuX2RhdGFJdGVtKHByb3BzLmRhdGEsIHZhbHVlc1swXSk7XG5cbiAgICBmaXJzdCA9IGlzUmFkaW8gJiYgZmlyc3QgPyBmaXJzdCA6ICh0aGlzLnN0YXRlIHx8IHt9KS5mb2N1c2VkSXRlbSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzZWRJdGVtOiBmaXJzdCxcbiAgICAgIGRhdGFJdGVtczogIWlzUmFkaW8gJiYgdmFsdWVzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2RhdGFJdGVtKHByb3BzLmRhdGEsIGl0ZW0pO1xuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0RGVmYXVsdFN0YXRlKHRoaXMucHJvcHMpO1xuXG4gICAgc3RhdGUuTGlzdEl0ZW0gPSBnZXRMaXN0SXRlbSh0aGlzKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0RGVmYXVsdFN0YXRlKG5leHRQcm9wcykpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAoMCwgX3V0aWxWYWxpZGF0ZUxpc3RJbnRlcmZhY2UyWydkZWZhdWx0J10pKHRoaXMucmVmcy5saXN0KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdGFiSW5kZXggPSBfcHJvcHMudGFiSW5kZXg7XG4gICAgdmFyIGZpbHRlciA9IF9wcm9wcy5maWx0ZXI7XG4gICAgdmFyIHN1Z2dlc3QgPSBfcHJvcHMuc3VnZ2VzdDtcbiAgICB2YXIgZ3JvdXBCeSA9IF9wcm9wcy5ncm91cEJ5O1xuICAgIHZhciBtZXNzYWdlcyA9IF9wcm9wcy5tZXNzYWdlcztcbiAgICB2YXIgZGF0YSA9IF9wcm9wcy5kYXRhO1xuICAgIHZhciBidXN5ID0gX3Byb3BzLmJ1c3k7XG4gICAgdmFyIGRyb3BVcCA9IF9wcm9wcy5kcm9wVXA7XG4gICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBvcGVuID0gX3Byb3BzLm9wZW47XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciByZWFkT25seSA9IF9wcm9wcy5yZWFkT25seTtcbiAgICB2YXIgTGlzdCA9IF9wcm9wcy5saXN0Q29tcG9uZW50O1xuXG4gICAgTGlzdCA9IExpc3QgfHwgZ3JvdXBCeSAmJiBfTGlzdEdyb3VwYWJsZTJbJ2RlZmF1bHQnXSB8fCBfTGlzdDJbJ2RlZmF1bHQnXTtcblxuICAgIHZhciBlbGVtZW50UHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuICAgIHZhciBsaXN0UHJvcHMgPSBwaWNrKHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKF91dGlsQ29tcGF0MlsnZGVmYXVsdCddLnR5cGUoTGlzdCkucHJvcFR5cGVzKSk7XG5cbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgTGlzdEl0ZW0gPSBfc3RhdGUuTGlzdEl0ZW07XG4gICAgdmFyIGZvY3VzZWRJdGVtID0gX3N0YXRlLmZvY3VzZWRJdGVtO1xuICAgIHZhciBzZWxlY3RlZEl0ZW0gPSBfc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIHZhciBmb2N1c2VkID0gX3N0YXRlLmZvY3VzZWQ7XG5cbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9kYXRhKCksXG4gICAgICAgIGxpc3RJRCA9IHRoaXMuX2lkKCdfbGlzdGJveCcpO1xuXG4gICAgZm9jdXNlZEl0ZW0gPSBmb2N1c2VkICYmICF0aGlzLmlzRGlzYWJsZWQoKSAmJiAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgZm9jdXNlZEl0ZW07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fbWF5YmVIYW5kbGUodGhpcy5fa2V5RG93biksXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX2ZvY3VzLmJpbmQobnVsbCwgdHJ1ZSksXG4gICAgICAgIG9uQmx1cjogdGhpcy5fZm9jdXMuYmluZChudWxsLCBmYWxzZSksXG4gICAgICAgIHJvbGU6ICdyYWRpb2dyb3VwJyxcbiAgICAgICAgJ2FyaWEtYnVzeSc6ICEhYnVzeSxcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsICdydy13aWRnZXQnLCAncnctc2VsZWN0bGlzdCcsIHtcbiAgICAgICAgICAncnctc3RhdGUtZm9jdXMnOiBmb2N1c2VkLFxuICAgICAgICAgICdydy1zdGF0ZS1kaXNhYmxlZCc6IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgICdydy1zdGF0ZS1yZWFkb25seSc6IHRoaXMuaXNSZWFkT25seSgpLFxuICAgICAgICAgICdydy1ydGwnOiB0aGlzLmlzUnRsKCksXG4gICAgICAgICAgJ3J3LWxvYWRpbmctbWFzayc6IGJ1c3lcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoTGlzdCwgYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBsaXN0UHJvcHMsIHtcbiAgICAgICAgcmVmOiAnbGlzdCcsXG4gICAgICAgIGlkOiBsaXN0SUQsXG4gICAgICAgIHJvbGU6ICdyYWRpb2dyb3VwJyxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4IHx8ICcwJyxcbiAgICAgICAgZGF0YTogaXRlbXMsXG4gICAgICAgIGZvY3VzZWQ6IGZvY3VzZWRJdGVtLFxuICAgICAgICBvcHRpb25Db21wb25lbnQ6IExpc3RJdGVtLFxuICAgICAgICBpdGVtQ29tcG9uZW50OiB0aGlzLnByb3BzLml0ZW1Db21wb25lbnQsXG4gICAgICAgIG9uTW92ZTogdGhpcy5fc2Nyb2xsVG9cbiAgICAgIH0pKVxuICAgICk7XG4gIH0sXG5cbiAgX3Njcm9sbFRvOiBmdW5jdGlvbiBfc2Nyb2xsVG8oc2VsZWN0ZWQsIGxpc3QpIHtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMucHJvcHMub25Nb3ZlO1xuXG4gICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIoc2VsZWN0ZWQsIGxpc3QpO2Vsc2Uge1xuICAgICAgdGhpcy5fc2Nyb2xsQ2FuY2VsICYmIHRoaXMuX3Njcm9sbENhbmNlbCgpO1xuICAgICAgLy8gZGVmYXVsdCBiZWhhdmlvciBpcyB0byBzY3JvbGwgdGhlIHdob2xlIHBhZ2Ugbm90IGp1c3QgdGhlIHdpZGdldFxuICAgICAgdGhpcy5fc2Nyb2xsQ2FuY2VsID0gKDAsIF9kb21IZWxwZXJzVXRpbFNjcm9sbFRvMlsnZGVmYXVsdCddKShzZWxlY3RlZCk7XG4gICAgfVxuICB9LFxuXG4gIF9rZXlEb3duOiBmdW5jdGlvbiBfa2V5RG93bihlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBrZXkgPSBlLmtleSxcbiAgICAgICAgbXVsdGlwbGUgPSAhIXRoaXMucHJvcHMubXVsdGlwbGUsXG4gICAgICAgIGxpc3QgPSB0aGlzLnJlZnMubGlzdCxcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtO1xuXG4gICAgaWYgKGtleSA9PT0gJ0VuZCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IG1vdmUoJ3ByZXYnLCBudWxsKSB9KTtlbHNlIGNoYW5nZShtb3ZlKCdwcmV2JywgbnVsbCkpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSG9tZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IG1vdmUoJ25leHQnLCBudWxsKSB9KTtlbHNlIGNoYW5nZShtb3ZlKCduZXh0JywgbnVsbCkpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJyAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjaGFuZ2UoZm9jdXNlZEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAobXVsdGlwbGUpIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogbW92ZSgnbmV4dCcsIGZvY3VzZWRJdGVtKSB9KTtlbHNlIGNoYW5nZShtb3ZlKCduZXh0JywgZm9jdXNlZEl0ZW0pKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnIHx8IGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IG1vdmUoJ3ByZXYnLCBmb2N1c2VkSXRlbSkgfSk7ZWxzZSBjaGFuZ2UobW92ZSgncHJldicsIGZvY3VzZWRJdGVtKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm11bHRpcGxlICYmIGUua2V5Q29kZSA9PT0gNjUgJiYgZS5jdHJsS2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGwoKTtcbiAgICB9IGVsc2UgdGhpcy5zZWFyY2goU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZShpdGVtKSB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBzZWxmLl9jaGFuZ2UoaXRlbSwgbXVsdGlwbGUgPyAhc2VsZi5fY29udGFpbnMoaXRlbSwgc2VsZi5fdmFsdWVzKCkpIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgICA6IHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmUoZGlyLCBpdGVtKSB7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWQoaXRlbSkge1xuICAgICAgICByZXR1cm4gc2VsZi5pc0Rpc2FibGVkSXRlbShpdGVtKSB8fCBzZWxmLmlzUmVhZE9ubHlJdGVtKGl0ZW0pO1xuICAgICAgfSxcbiAgICAgICAgICBzdG9wID0gZGlyID09PSAnbmV4dCcgPyBsaXN0Lmxhc3QoKSA6IGxpc3QuZmlyc3QoKSxcbiAgICAgICAgICBuZXh0ID0gbGlzdFtkaXJdKGl0ZW0pO1xuXG4gICAgICB3aGlsZSAobmV4dCAhPT0gc3RvcCAmJiBpc0Rpc2FibGVkKG5leHQpKSBuZXh0ID0gbGlzdFtkaXJdKG5leHQpO1xuXG4gICAgICByZXR1cm4gaXNEaXNhYmxlZChuZXh0KSA/IGl0ZW0gOiBuZXh0O1xuICAgIH1cbiAgfSxcblxuICBfc2VsZWN0QWxsOiBmdW5jdGlvbiBfc2VsZWN0QWxsKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuc3RhdGUuZGF0YUl0ZW1zLFxuICAgICAgICBkaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5yZWFkT25seSxcbiAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEoKSxcbiAgICAgICAgYmxhY2tsaXN0O1xuXG4gICAgZGlzYWJsZWQgPSBBcnJheS5pc0FycmF5KGRpc2FibGVkKSA/IGRpc2FibGVkIDogW107XG4gICAgLy9kaXNhYmxlZCB2YWx1ZXMgdGhhdCBhcmUgbm90IHNlbGVjdGVkXG4gICAgYmxhY2tsaXN0ID0gZGlzYWJsZWQuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gIV90aGlzMi5fY29udGFpbnModiwgdmFsdWVzKTtcbiAgICB9KTtcbiAgICBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiAhX3RoaXMyLl9jb250YWlucyh2LCBibGFja2xpc3QpO1xuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBkYXRhID0gZGlzYWJsZWQuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX2NvbnRhaW5zKHYsIHZhbHVlcyk7XG4gICAgICB9KTtcbiAgICAgIGRhdGEgPSBkYXRhLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLl9kYXRhSXRlbShfdGhpczIuX2RhdGEoKSwgdik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeSgnb25DaGFuZ2UnLCBbZGF0YV0pO1xuICB9LFxuXG4gIF9jaGFuZ2U6IGZ1bmN0aW9uIF9jaGFuZ2UoaXRlbSwgY2hlY2tlZCkge1xuICAgIHZhciBtdWx0aXBsZSA9ICEhdGhpcy5wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgYmxhY2tsaXN0ID0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgICB2YWx1ZXMgPSB0aGlzLnN0YXRlLmRhdGFJdGVtcztcblxuICAgIGJsYWNrbGlzdCA9IEFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSA/IGJsYWNrbGlzdCA6IFtdO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkgcmV0dXJuIHRoaXMubm90aWZ5KCdvbkNoYW5nZScsIGNoZWNrZWQgPyBpdGVtIDogbnVsbCk7XG5cbiAgICB2YWx1ZXMgPSBjaGVja2VkID8gdmFsdWVzLmNvbmNhdChpdGVtKSA6IHZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2ICE9PSBpdGVtO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3RpZnkoJ29uQ2hhbmdlJywgW3ZhbHVlcyB8fCBbXV0pO1xuICB9LFxuXG4gIF9mb2N1czogX3V0aWxfMlsnZGVmYXVsdCddLmlmTm90RGlzYWJsZWQodHJ1ZSwgZnVuY3Rpb24gKGZvY3VzZWQsIGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChmb2N1c2VkKSBfdXRpbENvbXBhdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGlzdCkuZm9jdXMoKTtcblxuICAgIHRoaXMuc2V0VGltZW91dCgnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNlZCAhPT0gX3RoaXMzLnN0YXRlLmZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMzLm5vdGlmeShmb2N1c2VkID8gJ29uRm9jdXMnIDogJ29uQmx1cicsIGUpO1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmb2N1c2VkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcblxuICBpc0Rpc2FibGVkSXRlbTogZnVuY3Rpb24gaXNEaXNhYmxlZEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQoKSB8fCB0aGlzLl9jb250YWlucyhpdGVtLCB0aGlzLnByb3BzLmRpc2FibGVkKTtcbiAgfSxcblxuICBpc1JlYWRPbmx5SXRlbTogZnVuY3Rpb24gaXNSZWFkT25seUl0ZW0oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmlzUmVhZE9ubHkoKSB8fCB0aGlzLl9jb250YWlucyhpdGVtLCB0aGlzLnByb3BzLnJlYWRPbmx5KTtcbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uIHNlYXJjaChjaGFyYWN0ZXIpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciB3b3JkID0gKCh0aGlzLl9zZWFyY2hUZXJtIHx8ICcnKSArIGNoYXJhY3RlcikudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbGlzdCA9IHRoaXMucmVmcy5saXN0O1xuXG4gICAgdGhpcy5fc2VhcmNoVGVybSA9IHdvcmQ7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ3NlYXJjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmb2N1c2VkSXRlbSA9IGxpc3QubmV4dChfdGhpczQuc3RhdGUuZm9jdXNlZEl0ZW0sIHdvcmQpO1xuXG4gICAgICBfdGhpczQuX3NlYXJjaFRlcm0gPSAnJztcblxuICAgICAgaWYgKGZvY3VzZWRJdGVtKSBfdGhpczQuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogZm9jdXNlZEl0ZW0gfSk7XG4gICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGE7XG4gIH0sXG5cbiAgX2NvbnRhaW5zOiBmdW5jdGlvbiBfY29udGFpbnMoaXRlbSwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWVzKSA/IHZhbHVlcy5zb21lKHRoaXMuX3ZhbHVlTWF0Y2hlci5iaW5kKG51bGwsIGl0ZW0pKSA6IHRoaXMuX3ZhbHVlTWF0Y2hlcihpdGVtLCB2YWx1ZXMpO1xuICB9LFxuXG4gIF92YWx1ZXM6IGZ1bmN0aW9uIF92YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubXVsdGlwbGUgPyB0aGlzLnN0YXRlLmRhdGFJdGVtcyA6IHRoaXMucHJvcHMudmFsdWU7XG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIGdldExpc3RJdGVtKHBhcmVudCkge1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdTZWxlY3RJdGVtJyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbjtcbiAgICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgICAgdmFyIHNlbGVjdGVkID0gX3Byb3BzMi5zZWxlY3RlZDtcbiAgICAgIHZhciBpdGVtID0gX3Byb3BzMi5kYXRhSXRlbTtcbiAgICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2NoaWxkcmVuJywgJ2ZvY3VzZWQnLCAnc2VsZWN0ZWQnLCAnZGF0YUl0ZW0nXSk7XG4gICAgICB2YXIgX3BhcmVudCRwcm9wcyA9IHBhcmVudC5wcm9wcztcbiAgICAgIHZhciBtdWx0aXBsZSA9IF9wYXJlbnQkcHJvcHMubXVsdGlwbGU7XG4gICAgICB2YXIgX3BhcmVudCRwcm9wcyRuYW1lID0gX3BhcmVudCRwcm9wcy5uYW1lO1xuICAgICAgdmFyIG5hbWUgPSBfcGFyZW50JHByb3BzJG5hbWUgPT09IHVuZGVmaW5lZCA/IHBhcmVudC5faWQoJ19uYW1lJykgOiBfcGFyZW50JHByb3BzJG5hbWU7XG5cbiAgICAgIHZhciBjaGVja2VkID0gcGFyZW50Ll9jb250YWlucyhpdGVtLCBwYXJlbnQuX3ZhbHVlcygpKSxcbiAgICAgICAgICBjaGFuZ2UgPSBwYXJlbnQuX2NoYW5nZS5iaW5kKG51bGwsIGl0ZW0pLFxuICAgICAgICAgIGRpc2FibGVkID0gcGFyZW50LmlzRGlzYWJsZWRJdGVtKGl0ZW0pLFxuICAgICAgICAgIHJlYWRvbmx5ID0gcGFyZW50LmlzUmVhZE9ubHlJdGVtKGl0ZW0pLFxuICAgICAgICAgIHR5cGUgPSBtdWx0aXBsZSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICByb2xlOiB0eXBlLFxuICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiAhIWNoZWNrZWQsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCByZWFkb25seSxcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ3J3LWxpc3Qtb3B0aW9uJywge1xuICAgICAgICAgICAgJ3J3LXN0YXRlLWZvY3VzJzogZm9jdXNlZCxcbiAgICAgICAgICAgICdydy1zdGF0ZS1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgICAgICAgJ3J3LXN0YXRlLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAncnctc3RhdGUtcmVhZG9ubHknOiByZWFkb25seVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgcm9sZTogJ3ByZXNlbnRhdGlvbicsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCByZWFkb25seVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhcmVhZG9ubHkpIGNoYW5nZShlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG52YXIgVW5jb250cm9sbGVkU2VsZWN0TGlzdCA9ICgwLCBfdW5jb250cm9sbGFibGUyWydkZWZhdWx0J10pKFNlbGVjdExpc3QsIHsgdmFsdWU6ICdvbkNoYW5nZScgfSk7XG5cblVuY29udHJvbGxlZFNlbGVjdExpc3QuQmFzZVNlbGVjdExpc3QgPSBTZWxlY3RMaXN0O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVbmNvbnRyb2xsZWRTZWxlY3RMaXN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsL2JhYmVsSGVscGVycy5qcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIFJlcGxhY2VUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCcuL1JlcGxhY2VUcmFuc2l0aW9uR3JvdXAnKSxcbiAgICBjb21wYXQgPSByZXF1aXJlKCcuL3V0aWwvY29tcGF0JyksXG4gICAgY3NzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvc3R5bGUnKSxcbiAgICBnZXRXaWR0aCA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3F1ZXJ5L3dpZHRoJyksXG4gICAgY29uZmlnID0gcmVxdWlyZSgnLi91dGlsL2NvbmZpZ3VyYXRpb24nKTtcblxudmFyIFNsaWRlQ2hpbGRHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTbGlkZUNoaWxkR3JvdXAnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRpcmVjdGlvbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxFbnRlcjogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSBjb21wYXQuZmluZERPTU5vZGUodGhpcyksXG4gICAgICAgIHdpZHRoID0gZ2V0V2lkdGgobm9kZSksXG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMucHJvcHMuZGlyZWN0aW9uO1xuXG4gICAgd2lkdGggPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHdpZHRoIDogLXdpZHRoO1xuXG4gICAgdGhpcy5PUkdJTkFMX1BPU0lUSU9OID0gbm9kZS5zdHlsZS5wb3NpdGlvbjtcblxuICAgIGNzcyhub2RlLCB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiB3aWR0aCArICdweCcsIHRvcDogMCB9KTtcblxuICAgIGNvbmZpZy5hbmltYXRlKG5vZGUsIHsgbGVmdDogMCB9LCB0aGlzLnByb3BzLmR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGNzcyhub2RlLCB7XG4gICAgICAgIHBvc2l0aW9uOiBfdGhpcy5PUkdJTkFMX1BPU0lUSU9OLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5PUkdJTkFMX1BPU0lUSU9OID0gbnVsbDtcbiAgICAgIGRvbmUgJiYgZG9uZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxMZWF2ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGRvbmUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBub2RlID0gY29tcGF0LmZpbmRET01Ob2RlKHRoaXMpLFxuICAgICAgICB3aWR0aCA9IGdldFdpZHRoKG5vZGUpLFxuICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLnByb3BzLmRpcmVjdGlvbjtcblxuICAgIHdpZHRoID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAtd2lkdGggOiB3aWR0aDtcblxuICAgIHRoaXMuT1JHSU5BTF9QT1NJVElPTiA9IG5vZGUuc3R5bGUucG9zaXRpb247XG5cbiAgICBjc3Mobm9kZSwgeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwIH0pO1xuXG4gICAgY29uZmlnLmFuaW1hdGUobm9kZSwgeyBsZWZ0OiB3aWR0aCArICdweCcgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgY3NzKG5vZGUsIHtcbiAgICAgICAgcG9zaXRpb246IF90aGlzMi5PUkdJTkFMX1BPU0lUSU9OLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczIuT1JHSU5BTF9QT1NJVElPTiA9IG51bGw7XG4gICAgICBkb25lICYmIGRvbmUoKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGlyZWN0aW9uOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAgIGR1cmF0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgZHVyYXRpb246IDI1MFxuICAgIH07XG4gIH0sXG5cbiAgX3dyYXBDaGlsZDogZnVuY3Rpb24gX3dyYXBDaGlsZChjaGlsZCwgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTbGlkZUNoaWxkR3JvdXAsXG4gICAgICB7IGtleTogY2hpbGQua2V5LCByZWY6IHJlZixcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb24gfSxcbiAgICAgIGNoaWxkXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnc3R5bGUnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICBzdHlsZSA9IGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgc3R5bGUsIHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUmVwbGFjZVRyYW5zaXRpb25Hcm91cCxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgY2hpbGRGYWN0b3J5OiB0aGlzLl93cmFwQ2hpbGQsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY29tcG9uZW50OiAnZGl2JyB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICBpc1RyYW5zaXRpb25pbmc6IGZ1bmN0aW9uIGlzVHJhbnNpdGlvbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc01vdW50ZWQoKSAmJiB0aGlzLnJlZnMuY29udGFpbmVyLmlzVHJhbnNpdGlvbmluZygpO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZGF0ZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0ZXMnKSxcbiAgICBMaXN0ID0gcmVxdWlyZSgnLi9MaXN0JyksXG4gICAgbG9jYWxpemVycyA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJykubG9jYWxlLFxuICAgIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9wcm9wVHlwZXMnKTtcblxudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMuZm9ybWF0IHx8IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzLnRpbWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1RpbWVMaXN0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gICAgbWluOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgICBtYXg6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAgIHN0ZXA6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbUNvbXBvbmVudDogQ3VzdG9tUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIGZvcm1hdDogQ3VzdG9tUHJvcFR5cGVzLmRhdGVGb3JtYXQsXG4gICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZXNlcnZlRGF0ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VsdHVyZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW3JlcXVpcmUoJy4vbWl4aW5zL1RpbWVvdXRNaXhpbicpXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RlcDogMzAsXG4gICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoKSB7fSxcbiAgICAgIG1pbjogbmV3IERhdGUoMTkwMCwgMCwgMSksXG4gICAgICBtYXg6IG5ldyBEYXRlKDIwOTksIDExLCAzMSksXG4gICAgICBwcmVzZXJ2ZURhdGU6IHRydWUsXG4gICAgICBkZWxheTogMzAwXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGVzKHRoaXMucHJvcHMpLFxuICAgICAgICBmb2N1c2VkSXRlbSA9IHRoaXMuX2Nsb3Nlc3REYXRlKGRhdGEsIHRoaXMucHJvcHMudmFsdWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzZWRJdGVtOiBmb2N1c2VkSXRlbSB8fCBkYXRhWzBdLFxuICAgICAgZGF0ZXM6IGRhdGFcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRlcyhuZXh0UHJvcHMpLFxuICAgICAgICBmb2N1c2VkSXRlbSA9IHRoaXMuX2Nsb3Nlc3REYXRlKGRhdGEsIG5leHRQcm9wcy52YWx1ZSksXG4gICAgICAgIHZhbENoYW5nZWQgPSAhZGF0ZXMuZXEobmV4dFByb3BzLnZhbHVlLCB0aGlzLnByb3BzLnZhbHVlLCAnbWludXRlcycpLFxuICAgICAgICBtaW5DaGFuZ2VkID0gIWRhdGVzLmVxKG5leHRQcm9wcy5taW4sIHRoaXMucHJvcHMubWluLCAnbWludXRlcycpLFxuICAgICAgICBtYXhDaGFuZ2VkID0gIWRhdGVzLmVxKG5leHRQcm9wcy5tYXgsIHRoaXMucHJvcHMubWF4LCAnbWludXRlcycpO1xuXG4gICAgaWYgKHZhbENoYW5nZWQgfHwgbWluQ2hhbmdlZCB8fCBtYXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZEl0ZW06IGZvY3VzZWRJdGVtIHx8IGRhdGFbMF0sXG4gICAgICAgIGRhdGVzOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1pbiA9IF9wcm9wcy5taW47XG4gICAgdmFyIG1heCA9IF9wcm9wcy5tYXg7XG4gICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuICAgIHZhciBzdGVwID0gX3Byb3BzLnN0ZXA7XG4gICAgdmFyIHByb3BzID0gYmFiZWxIZWxwZXJzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydtaW4nLCAnbWF4JywgJ3ZhbHVlJywgJ3N0ZXAnXSk7XG5cbiAgICB2YXIgdGltZXMgPSB0aGlzLnN0YXRlLmRhdGVzLFxuICAgICAgICBkYXRlID0gdGhpcy5fY2xvc2VzdERhdGUodGltZXMsIHZhbHVlKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHJlZjogJ2xpc3QnLFxuICAgICAgZGF0YTogdGltZXMsXG4gICAgICB0ZXh0RmllbGQ6ICdsYWJlbCcsXG4gICAgICB2YWx1ZUZpZWxkOiAnZGF0ZScsXG4gICAgICBzZWxlY3RlZDogZGF0ZSxcbiAgICAgIGZvY3VzZWQ6IHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW1cbiAgICB9KSk7XG4gIH0sXG5cbiAgX2Nsb3Nlc3REYXRlOiBmdW5jdGlvbiBfY2xvc2VzdERhdGUodGltZXMsIGRhdGUpIHtcbiAgICB2YXIgcm91bmRUbyA9IDEwMDAgKiA2MCAqIHRoaXMucHJvcHMuc3RlcCxcbiAgICAgICAgaW5zdCA9IG51bGwsXG4gICAgICAgIGxhYmVsO1xuXG4gICAgaWYgKCFkYXRlKSByZXR1cm4gbnVsbDtcblxuICAgIGRhdGUgPSBuZXcgRGF0ZShNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gcm91bmRUbykgKiByb3VuZFRvKTtcbiAgICBsYWJlbCA9IGRhdGVzLmZvcm1hdChkYXRlLCB0aGlzLnByb3BzLmZvcm1hdCwgdGhpcy5wcm9wcy5jdWx0dXJlKTtcblxuICAgIHRpbWVzLnNvbWUoZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgIGlmICh0aW1lLmxhYmVsID09PSBsYWJlbCkgcmV0dXJuIGluc3QgPSB0aW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH0sXG5cbiAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGVzO1xuICB9LFxuXG4gIF9kYXRlczogZnVuY3Rpb24gX2RhdGVzKHByb3BzKSB7XG4gICAgdmFyIHRpbWVzID0gW10sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICB2YWx1ZXMgPSB0aGlzLl9kYXRlVmFsdWVzKHByb3BzKSxcbiAgICAgICAgc3RhcnQgPSB2YWx1ZXMubWluLFxuICAgICAgICBzdGFydERheSA9IGRhdGVzLmRhdGUoc3RhcnQpO1xuXG4gICAgd2hpbGUgKGRhdGVzLmRhdGUoc3RhcnQpID09PSBzdGFydERheSAmJiBkYXRlcy5sdGUoc3RhcnQsIHZhbHVlcy5tYXgpKSB7XG4gICAgICBpKys7XG4gICAgICB0aW1lcy5wdXNoKHsgZGF0ZTogc3RhcnQsIGxhYmVsOiBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KHN0YXJ0LCBmb3JtYXQocHJvcHMpLCBwcm9wcy5jdWx0dXJlKSB9KTtcbiAgICAgIHN0YXJ0ID0gZGF0ZXMuYWRkKHN0YXJ0LCBwcm9wcy5zdGVwIHx8IDMwLCAnbWludXRlcycpO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXM7XG4gIH0sXG5cbiAgX2RhdGVWYWx1ZXM6IGZ1bmN0aW9uIF9kYXRlVmFsdWVzKHByb3BzKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgfHwgZGF0ZXMudG9kYXkoKSxcbiAgICAgICAgdXNlRGF0ZSA9IHByb3BzLnByZXNlcnZlRGF0ZSxcbiAgICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgICBtYXggPSBwcm9wcy5tYXgsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQ7XG5cbiAgICAvL2NvbXBhcmUganVzdCB0aGUgdGltZSByZWdyYWRsZXNzIG9mIHdoZXRoZXIgdGhleSBmYWxsIG9uIHRoZSBzYW1lIGRheVxuICAgIGlmICghdXNlRGF0ZSkge1xuICAgICAgc3RhcnQgPSBkYXRlcy5zdGFydE9mKGRhdGVzLm1lcmdlKG5ldyBEYXRlKCksIG1pbiksICdtaW51dGVzJyk7XG4gICAgICBlbmQgPSBkYXRlcy5zdGFydE9mKGRhdGVzLm1lcmdlKG5ldyBEYXRlKCksIG1heCksICdtaW51dGVzJyk7XG5cbiAgICAgIGlmIChkYXRlcy5sdGUoZW5kLCBzdGFydCkgJiYgZGF0ZXMuZ3QobWF4LCBtaW4sICdkYXknKSkgZW5kID0gZGF0ZXMudG9tb3Jyb3coKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBzdGFydCxcbiAgICAgICAgbWF4OiBlbmRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhcnQgPSBkYXRlcy50b2RheSgpO1xuICAgIGVuZCA9IGRhdGVzLnRvbW9ycm93KCk7XG4gICAgLy9kYXRlIHBhcnRzIGFyZSBlcXVhbFxuICAgIHJldHVybiB7XG4gICAgICBtaW46IGRhdGVzLmVxKHZhbHVlLCBtaW4sICdkYXknKSA/IGRhdGVzLm1lcmdlKHN0YXJ0LCBtaW4pIDogc3RhcnQsXG4gICAgICBtYXg6IGRhdGVzLmVxKHZhbHVlLCBtYXgsICdkYXknKSA/IGRhdGVzLm1lcmdlKHN0YXJ0LCBtYXgpIDogZW5kXG4gICAgfTtcbiAgfSxcblxuICBfa2V5RG93bjogZnVuY3Rpb24gX2tleURvd24oZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIga2V5ID0gZS5rZXksXG4gICAgICAgIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSxcbiAgICAgICAgZm9jdXNlZEl0ZW0gPSB0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLFxuICAgICAgICBsaXN0ID0gdGhpcy5yZWZzLmxpc3Q7XG5cbiAgICBpZiAoa2V5ID09PSAnRW5kJykgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0Lmxhc3QoKSB9KTtlbHNlIGlmIChrZXkgPT09ICdIb21lJykgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LmZpcnN0KCkgfSk7ZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB0aGlzLnByb3BzLm9uU2VsZWN0KGZvY3VzZWRJdGVtKTtlbHNlIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEl0ZW06IGxpc3QubmV4dChmb2N1c2VkSXRlbSkgfSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJdGVtOiBsaXN0LnByZXYoZm9jdXNlZEl0ZW0pIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKGNoYXJhY3RlciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSXRlbTogaXRlbSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzY3JvbGxUbzogZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gICAgdGhpcy5yZWZzLmxpc3QubW92ZSAmJiB0aGlzLnJlZnMubGlzdC5tb3ZlKCk7XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbiBzZWFyY2goY2hhcmFjdGVyLCBjYikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHdvcmQgPSAoKHRoaXMuX3NlYXJjaFRlcm0gfHwgJycpICsgY2hhcmFjdGVyKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fc2VhcmNoVGVybSA9IHdvcmQ7XG5cbiAgICB0aGlzLnNldFRpbWVvdXQoJ3NlYXJjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gX3RoaXMyLnJlZnMubGlzdCxcbiAgICAgICAgICBpdGVtID0gbGlzdC5uZXh0KF90aGlzMi5zdGF0ZS5mb2N1c2VkSXRlbSwgd29yZCk7XG5cbiAgICAgIF90aGlzMi5fc2VhcmNoVGVybSA9ICcnO1xuICAgICAgaWYgKGl0ZW0pIGNiKGl0ZW0pO1xuICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICB9XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjbiA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ2V4cG9ydHMnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdjaGlsZHJlbiddKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMoe30sIHByb3BzLCB7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6IGNuKGNsYXNzTmFtZSwgJ3J3LWJ0bicpIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuL3V0aWwvYmFiZWxIZWxwZXJzLmpzJyk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbERhdGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGVzJyk7XG5cbnZhciBfdXRpbERhdGVzMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxEYXRlcyk7XG5cbnZhciBfdXRpbENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL3V0aWwvY29uZmlndXJhdGlvbicpO1xuXG52YXIgX3V0aWxDb25maWd1cmF0aW9uMiA9IGJhYmVsSGVscGVycy5pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDb25maWd1cmF0aW9uKTtcblxudmFyIF91dGlsXyA9IHJlcXVpcmUoJy4vdXRpbC9fJyk7XG5cbnZhciBfdXRpbF8yID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbF8pO1xuXG52YXIgX3V0aWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbFByb3BUeXBlczIgPSBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsUHJvcFR5cGVzKTtcblxudmFyIGxvY2FsaXplcnMgPSBfdXRpbENvbmZpZ3VyYXRpb24yWydkZWZhdWx0J10ubG9jYWxlO1xudmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChwcm9wcykge1xuICByZXR1cm4gcHJvcHMubW9udGhGb3JtYXQgfHwgbG9jYWxpemVycy5kYXRlLmZvcm1hdHMubW9udGg7XG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICBvcHRpb25JRDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICBjdWx0dXJlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgZm9jdXNlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICBtaW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgbWF4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIG9uQ2hhbmdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICBtb250aEZvcm1hdDogX3V0aWxQcm9wVHlwZXMyWydkZWZhdWx0J10uZGF0ZUZvcm1hdFxufTtcblxudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiBpc0VxdWFsKGRhdGVBLCBkYXRlQikge1xuICByZXR1cm4gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5lcShkYXRlQSwgZGF0ZUIsICdtb250aCcpO1xufTtcbnZhciBvcHRpb25JZCA9IGZ1bmN0aW9uIG9wdGlvbklkKGlkLCBkYXRlKSB7XG4gIHJldHVybiAnJyArIGlkICsgJ19feWVhcl8nICsgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS55ZWFyKGRhdGUpICsgJy0nICsgX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tb250aChkYXRlKTtcbn07XG5cbnZhciBZZWFyVmlldyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdZZWFyVmlldycsXG5cbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi9taXhpbnMvV2lkZ2V0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvUnRsQ2hpbGRDb250ZXh0TWl4aW4nKSwgcmVxdWlyZSgnLi9taXhpbnMvQXJpYURlc2NlbmRhbnRNaXhpbicpKCldLFxuXG4gIHByb3BUeXBlczogcHJvcFR5cGVzLFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBhY3RpdmVJZCA9IG9wdGlvbklkKHRoaXMuX2lkKCksIHRoaXMucHJvcHMuZm9jdXNlZCk7XG4gICAgdGhpcy5hcmlhQWN0aXZlRGVzY2VuZGFudChhY3RpdmVJZCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGZvY3VzZWQgPSBfcHJvcHMuZm9jdXNlZDtcbiAgICB2YXIgbW9udGhzID0gX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS5tb250aHNJblllYXIoX3V0aWxEYXRlczJbJ2RlZmF1bHQnXS55ZWFyKGZvY3VzZWQpKTtcbiAgICB2YXIgcm93cyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5jaHVuayhtb250aHMsIDQpO1xuXG4gICAgdmFyIGVsZW1lbnRQcm9wcyA9IF91dGlsXzJbJ2RlZmF1bHQnXS5vbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcykpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RhYmxlJyxcbiAgICAgIGJhYmVsSGVscGVycy5fZXh0ZW5kcyh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJvbGU6ICdncmlkJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzTmFtZSwgJ3J3LW5hdi12aWV3JylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHJvd3MubWFwKHRoaXMuX3JvdylcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9yb3c6IGZ1bmN0aW9uIF9yb3cocm93LCByb3dJZHgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb2N1c2VkID0gX3Byb3BzMi5mb2N1c2VkO1xuICAgIHZhciBzZWxlY3RlZCA9IF9wcm9wczIuc2VsZWN0ZWQ7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZDtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG4gICAgdmFyIHRvZGF5ID0gX3Byb3BzMi50b2RheTtcbiAgICB2YXIgY3VsdHVyZSA9IF9wcm9wczIuY3VsdHVyZTtcbiAgICB2YXIgbWluID0gX3Byb3BzMi5taW47XG4gICAgdmFyIG1heCA9IF9wcm9wczIubWF4O1xuICAgIHZhciBEYXkgPSBfcHJvcHMyLmRheUNvbXBvbmVudDtcbiAgICB2YXIgaWQgPSB0aGlzLl9pZCgpO1xuICAgIHZhciBsYWJlbEZvcm1hdCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXRzLmhlYWRlcjtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0cicsXG4gICAgICB7IGtleTogcm93SWR4LCByb2xlOiAncm93JyB9LFxuICAgICAgcm93Lm1hcChmdW5jdGlvbiAoZGF0ZSwgY29sSWR4KSB7XG4gICAgICAgIHZhciBpc0ZvY3VzZWQgPSBpc0VxdWFsKGRhdGUsIGZvY3VzZWQpLFxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IGlzRXF1YWwoZGF0ZSwgdmFsdWUpLFxuICAgICAgICAgICAgY3VycmVudE1vbnRoID0gaXNFcXVhbChkYXRlLCB0b2RheSksXG4gICAgICAgICAgICBsYWJlbCA9IGxvY2FsaXplcnMuZGF0ZS5mb3JtYXQoZGF0ZSwgbGFiZWxGb3JtYXQsIGN1bHR1cmUpO1xuXG4gICAgICAgIHZhciBjdXJyZW50SUQgPSBvcHRpb25JZChpZCwgZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIF91dGlsRGF0ZXMyWydkZWZhdWx0J10uaW5SYW5nZShkYXRlLCBtaW4sIG1heCwgJ21vbnRoJykgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogY29sSWR4LFxuICAgICAgICAgICAgcm9sZTogJ2dyaWRjZWxsJyxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SUQsXG4gICAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAnYXJpYS1yZWFkb25seSc6IGRpc2FibGVkLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBsYWJlbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBjdXJyZW50SUQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2hhbmdlLmJpbmQobnVsbCwgZGF0ZSksXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgncnctYnRuJywge1xuICAgICAgICAgICAgICAgICdydy1zdGF0ZS1mb2N1cyc6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgICAncnctc3RhdGUtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICdydy1ub3cnOiBjdXJyZW50TW9udGhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhbGl6ZXJzLmRhdGUuZm9ybWF0KGRhdGUsIGZvcm1hdChfdGhpcy5wcm9wcyksIGN1bHR1cmUpXG4gICAgICAgICAgKVxuICAgICAgICApIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7IGtleTogY29sSWR4LCBjbGFzc05hbWU6ICdydy1lbXB0eS1jZWxsJywgcm9sZTogJ3ByZXNlbnRhdGlvbicgfSxcbiAgICAgICAgICAnwqAnXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFllYXJWaWV3O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbC9jb25maWd1cmF0aW9uJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vdXRpbC9sb2NhbGl6ZXJzJyk7XG5cbnZhciBOdW1iZXJMb2NhbGl6ZXIgPSBfcmVxdWlyZS5OdW1iZXJMb2NhbGl6ZXI7XG52YXIgRGF0ZUxvY2FsaXplciA9IF9yZXF1aXJlLkRhdGVMb2NhbGl6ZXI7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuL2dsb2JhbGl6ZS1sb2NhbGl6ZXJzJyk7XG5cbnZhciBnbG9iYWxpemVOdW1iZXJMb2NhbGl6ZXIgPSBfcmVxdWlyZTIuZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyO1xudmFyIGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXIgPSBfcmVxdWlyZTIuZ2xvYmFsaXplRGF0ZUxvY2FsaXplcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgc2V0R2xvYmFsaXplSW5zdGFuY2U6IGRlcHJlY2lhdGVNZXRob2QoZnVuY3Rpb24gKGdsb2JhbGl6ZSkge1xuICAgIGNvbmZpZ3VyYXRpb24ubG9jYWxlLmRhdGUgPSBnbG9iYWxpemVEYXRlTG9jYWxpemVyKGdsb2JhbGl6ZSk7XG4gICAgY29uZmlndXJhdGlvbi5sb2NhbGUubnVtYmVyID0gZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyKGdsb2JhbGl6ZSk7XG4gIH0pLFxuXG4gIHNldEFuaW1hdGU6IGZ1bmN0aW9uIHNldEFuaW1hdGUoYW5pbWF0ZWZuKSB7XG4gICAgY29uZmlndXJhdGlvbi5hbmltYXRlID0gYW5pbWF0ZWZuO1xuICB9LFxuXG4gIHNldERhdGVMb2NhbGl6ZXI6IGZ1bmN0aW9uIHNldERhdGVMb2NhbGl6ZXIoc3BlYykge1xuICAgIGNvbmZpZ3VyYXRpb24ubG9jYWxlLmRhdGUgPSBuZXcgRGF0ZUxvY2FsaXplcihzcGVjKTtcbiAgfSxcblxuICBzZXROdW1iZXJMb2NhbGl6ZXI6IGZ1bmN0aW9uIHNldE51bWJlckxvY2FsaXplcihzcGVjKSB7XG4gICAgY29uZmlndXJhdGlvbi5sb2NhbGUubnVtYmVyID0gbmV3IE51bWJlckxvY2FsaXplcihzcGVjKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGVwcmVjaWF0ZU1ldGhvZChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdhcm5pbmcoZmFsc2UsICdzZXRHbG9iYWxpemVJbnN0YW5jZSgpIGlzIGRlcHJlY2lhdGVkLiB1c2Ugc2V0RGF0ZUxvY2FsaXplcigpIGFuZCBzZXROdW1iZXJMb2NhbGl6ZXIoKSB3aXRoIHRoZSBHbG9iYWxpemUgbG9jYWxpemVycy4gJyArICcgVE9ETyBET0MgTElOSycpO1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWwvbG9jYWxpemVycycpO1xuXG52YXIgTnVtYmVyTG9jYWxpemVyID0gX3JlcXVpcmUuTnVtYmVyTG9jYWxpemVyO1xudmFyIERhdGVMb2NhbGl6ZXIgPSBfcmVxdWlyZS5EYXRlTG9jYWxpemVyO1xuXG52YXIgZGF0ZXMgPSByZXF1aXJlKCdkYXRlLWFyaXRobWV0aWMnKTtcblxuZnVuY3Rpb24gZ2xvYmFsaXplRGF0ZUxvY2FsaXplcihnbG9iYWxpemUpIHtcbiAgdmFyIHNob3J0TmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGdldEN1bHR1cmUoY3VsdHVyZSkge1xuICAgIHJldHVybiBjdWx0dXJlID8gKGxvY2FsaXplci5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5maW5kQ2xvc2VzdEN1bHR1cmUoY3VsdHVyZSkgOiAobG9jYWxpemVyLmdsb2JhbGl6ZSB8fCBnbG9iYWxpemUpLmN1bHR1cmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpcnN0T2ZXZWVrKGN1bHR1cmUpIHtcbiAgICBjdWx0dXJlID0gZ2V0Q3VsdHVyZShjdWx0dXJlKTtcbiAgICByZXR1cm4gY3VsdHVyZSAmJiBjdWx0dXJlLmNhbGVuZGFyLmZpcnN0RGF5IHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBzaG9ydERheShkYXlPZlRoZVdlZWspIHtcbiAgICB2YXIgY3VsdHVyZSA9IGdldEN1bHR1cmUoYXJndW1lbnRzWzFdKSxcbiAgICAgICAgbmFtZSA9IGN1bHR1cmUubmFtZSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdE9mV2VlayhjdWx0dXJlKSxcbiAgICAgICAgZGF5cyA9IGZ1bmN0aW9uIGRheXMoKSB7XG4gICAgICB2YXIgZGF5cyA9IGN1bHR1cmUuY2FsZW5kYXIuZGF5cy5uYW1lc1Nob3J0LnNsaWNlKCk7XG4gICAgICByZXR1cm4gc3RhcnQgPT09IDAgPyBkYXlzIDogZGF5cy5jb25jYXQoZGF5cy5zcGxpY2UoMCwgc3RhcnQpKTtcbiAgICB9O1xuXG4gICAgdmFyIG5hbWVzID0gc2hvcnROYW1lc1tuYW1lXSB8fCAoc2hvcnROYW1lc1tuYW1lXSA9IGRheXMoKSk7XG5cbiAgICByZXR1cm4gbmFtZXNbZGF5T2ZUaGVXZWVrXTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZXIgPSBuZXcgRGF0ZUxvY2FsaXplcih7XG5cbiAgICBmb3JtYXRzOiB7XG4gICAgICBkYXRlOiAnZCcsXG4gICAgICB0aW1lOiAndCcsXG4gICAgICAnZGVmYXVsdCc6ICdmJyxcbiAgICAgIGhlYWRlcjogJ01NTU0geXl5eScsXG4gICAgICBmb290ZXI6ICdEJyxcbiAgICAgIHdlZWtkYXk6IHNob3J0RGF5LFxuICAgICAgZGF5T2ZNb250aDogJ2RkJyxcbiAgICAgIG1vbnRoOiAnTU1NJyxcbiAgICAgIHllYXI6ICd5eXl5JyxcblxuICAgICAgZGVjYWRlOiBmdW5jdGlvbiBkZWNhZGUoZHQsIGN1bHR1cmUsIGwpIHtcbiAgICAgICAgcmV0dXJuICcnICsgbC5mb3JtYXQoZHQsIGwuZm9ybWF0cy55ZWFyLCBjdWx0dXJlKSArICcgLSAnICsgbC5mb3JtYXQoZGF0ZXMuZW5kT2YoZHQsICdkZWNhZGUnKSwgbC5mb3JtYXRzLnllYXIsIGN1bHR1cmUpO1xuICAgICAgfSxcblxuICAgICAgY2VudHVyeTogZnVuY3Rpb24gY2VudHVyeShkdCwgY3VsdHVyZSwgbCkge1xuICAgICAgICByZXR1cm4gJycgKyBsLmZvcm1hdChkdCwgbC5mb3JtYXRzLnllYXIsIGN1bHR1cmUpICsgJyAtICcgKyBsLmZvcm1hdChkYXRlcy5lbmRPZihkdCwgJ2NlbnR1cnknKSwgbC5mb3JtYXRzLnllYXIsIGN1bHR1cmUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaXJzdE9mV2VlazogZmlyc3RPZldlZWssXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodmFsdWUsIGZvcm1hdCwgY3VsdHVyZSkge1xuICAgICAgcmV0dXJuICh0aGlzLmdsb2JhbGl6ZSB8fCBnbG9iYWxpemUpLnBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIF9mb3JtYXQsIGN1bHR1cmUpIHtcbiAgICAgIHJldHVybiAodGhpcy5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5mb3JtYXQodmFsdWUsIF9mb3JtYXQsIGN1bHR1cmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQmFjay1jb21wYXQgY3J1ZnQsIGV4cG9zZSB0aGUgZ2xvYmFsaXplIGluc3RhbmNlIHNvIHNldEdsb2JhbGl6ZUluc3RhbmNlIGNhbiBtdXRhdGUgaXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgLy8gdGhpcyB3b3JrcyBiL2MgdGhlcmUgaXMgbm8gbmVlZCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgcHJvcCB2YWx1ZXNcbiAgbG9jYWxpemVyLmdsb2JhbGl6ZSA9IGdsb2JhbGl6ZTtcbiAgcmV0dXJuIGxvY2FsaXplcjtcbn1cblxuZnVuY3Rpb24gZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyKGdsb2JhbGl6ZSkge1xuXG4gIGZ1bmN0aW9uIGdldEN1bHR1cmUoY3VsdHVyZSkge1xuICAgIHJldHVybiBjdWx0dXJlID8gKGxvY2FsaXplci5nbG9iYWxpemUgfHwgZ2xvYmFsaXplKS5maW5kQ2xvc2VzdEN1bHR1cmUoY3VsdHVyZSkgOiAobG9jYWxpemVyLmdsb2JhbGl6ZSB8fCBnbG9iYWxpemUpLmN1bHR1cmUoKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZXIgPSBuZXcgTnVtYmVyTG9jYWxpemVyKHtcblxuICAgIGZvcm1hdHM6IHtcbiAgICAgICdkZWZhdWx0JzogJ0QnXG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2YWx1ZSwgY3VsdHVyZSkge1xuICAgICAgcmV0dXJuICh0aGlzLmdsb2JhbGl6ZSB8fCBnbG9iYWxpemUpLnBhcnNlRmxvYXQodmFsdWUsIDEwLCBjdWx0dXJlKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIF9mb3JtYXQyLCBjdWx0dXJlKSB7XG4gICAgICByZXR1cm4gKHRoaXMuZ2xvYmFsaXplIHx8IGdsb2JhbGl6ZSkuZm9ybWF0KHZhbHVlLCBfZm9ybWF0MiwgY3VsdHVyZSk7XG4gICAgfSxcblxuICAgIHByZWNpc2lvbjogZnVuY3Rpb24gcHJlY2lzaW9uKGZvcm1hdCwgX2N1bHR1cmUpIHtcbiAgICAgIHZhciBjdWx0dXJlID0gZ2V0Q3VsdHVyZShfY3VsdHVyZSksXG4gICAgICAgICAgbnVtRm9ybWF0ID0gY3VsdHVyZS5udW1iZXJGb3JtYXQ7XG5cbiAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZm9ybWF0Lmxlbmd0aCA+IDEpIHJldHVybiBwYXJzZUZsb2F0KGZvcm1hdC5zdWJzdHIoMSkpO1xuXG4gICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZigncCcpICE9PSAtMSkgbnVtRm9ybWF0ID0gbnVtRm9ybWF0LnBlcmNlbnQ7XG4gICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignYycpICE9PSAtMSkgbnVtRm9ybWF0ID0gbnVtRm9ybWF0LmN1cmVuY3k7XG5cbiAgICAgICAgcmV0dXJuIG51bUZvcm1hdC5kZWNpbWFscyB8fCBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHNlZSBwb2ludCBhYm92ZVxuICBsb2NhbGl6ZXIuZ2xvYmFsaXplID0gZ2xvYmFsaXplO1xuICByZXR1cm4gbG9jYWxpemVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2xvYmFsaXplTnVtYmVyTG9jYWxpemVyOiBnbG9iYWxpemVOdW1iZXJMb2NhbGl6ZXIsIGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXI6IGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBbQXJyYXkucHJvdG90eXBlLnNvbWUsIEFycmF5LnByb3RvdHlwZS5maWx0ZXIsIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGlmICghbWV0aG9kKSB0aHJvdyBuZXcgRXJyb3IoJ09uZSBvciBtb3JlIEVTNSBmZWF0dXJlcyBpcyBub3QgYXZhaWxhYmxlIHRvIFJlYWN0V2lkZ2V0czogaHR0cDovL2pxdWVuc2UuZ2l0aHViLmlvL3JlYWN0LXdpZGdldHMvZG9jcy8jL2dldHRpbmctc3RhcnRlZC9icm93c2VyJyk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBEcm9wZG93bkxpc3Q6IHJlcXVpcmUoJy4vRHJvcGRvd25MaXN0JyksXG4gIENvbWJvYm94OiByZXF1aXJlKCcuL0NvbWJvYm94JyksXG5cbiAgQ2FsZW5kYXI6IHJlcXVpcmUoJy4vQ2FsZW5kYXInKSxcbiAgRGF0ZVRpbWVQaWNrZXI6IHJlcXVpcmUoJy4vRGF0ZVRpbWVQaWNrZXInKSxcblxuICBOdW1iZXJQaWNrZXI6IHJlcXVpcmUoJy4vTnVtYmVyUGlja2VyJyksXG5cbiAgTXVsdGlzZWxlY3Q6IHJlcXVpcmUoJy4vTXVsdGlzZWxlY3QnKSxcbiAgU2VsZWN0TGlzdDogcmVxdWlyZSgnLi9TZWxlY3RMaXN0JyksXG5cbiAgY29uZmlndXJlOiByZXF1aXJlKCcuL2NvbmZpZ3VyZScpLFxuXG4gIHV0aWxzOiB7XG4gICAgUmVwbGFjZVRyYW5zaXRpb25Hcm91cDogcmVxdWlyZSgnLi9SZXBsYWNlVHJhbnNpdGlvbkdyb3VwJyksXG4gICAgU2xpZGVUcmFuc2l0aW9uOiByZXF1aXJlKCcuL1NsaWRlVHJhbnNpdGlvbicpXG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbC9iYWJlbEhlbHBlcnMuanMnKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gYmFiZWxIZWxwZXJzLmludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgc2hhcGUgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgLy9zZXRBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICByZWNvbmNpbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xufSk7XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZWNvbmNpbGUoa2V5LCBpZCkge1xuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGZsdXNoQXJpYVRvTm9kZShpZCwgbm9kZU9yQ29tcG9uZW50LCBjdHgpIHtcbiAgdmFyIG5vZGUgPSB0eXBlb2Ygbm9kZU9yQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gbm9kZU9yQ29tcG9uZW50KGN0eCkgOiB0eXBlb2Ygbm9kZU9yQ29tcG9uZW50ID09PSAnc3RyaW5nJyA/IGN0eC5yZWZzW25vZGVPckNvbXBvbmVudF0gOiBjdHg7XG5cbiAgaWYgKG5vZGUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdmbHVzaGluZyEnLCBub2RlLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKVxuICAgIGlmIChpZCkgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG5vZGUpLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaWQpO2Vsc2UgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG5vZGUpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKG5vZGVPckNvbXBvbmVudCkge1xuICB2YXIgcmVjb25jaWxlQ2hpbGRyZW4gPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRSZWNvbmNpbGUgOiBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGFyaWFBY3RpdmVEZXNjZW5kYW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGNvbnRleHRUeXBlczoge1xuICAgICAgYWN0aXZlRGVzY2VuZGFudHM6IHNoYXBlXG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICBhY3RpdmVEZXNjZW5kYW50czogc2hhcGVcbiAgICB9LFxuXG4gICAgYXJpYUFjdGl2ZURlc2NlbmRhbnQ6IGZ1bmN0aW9uIGFyaWFBY3RpdmVEZXNjZW5kYW50KGlkKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLmFyaWFBY3RpdmVEZXNjZW5kYW50S2V5IDogYXJndW1lbnRzWzFdO1xuICAgICAgdmFyIGFjdGl2ZURlc2NlbmRhbnRzID0gdGhpcy5jb250ZXh0LmFjdGl2ZURlc2NlbmRhbnRzO1xuXG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuX19hcmlhQWN0aXZlRGVzY2VuZGFudElkO1xuXG4gICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGN1cnJlbnQ7XG5cbiAgICAgIGlkID0gcmVjb25jaWxlQ2hpbGRyZW4uY2FsbCh0aGlzLCBrZXksIGlkKTtcblxuICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIGlkID0gY3VycmVudDtlbHNlIHtcbiAgICAgICAgdGhpcy5fX2FyaWFBY3RpdmVEZXNjZW5kYW50SWQgPSBpZDtcbiAgICAgICAgZmx1c2hBcmlhVG9Ob2RlKGlkLCBub2RlT3JDb21wb25lbnQsIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmVEZXNjZW5kYW50cyAmJiBhY3RpdmVEZXNjZW5kYW50cy5yZWNvbmNpbGUoa2V5LCBpZCk7XG4gICAgfSxcblxuICAgIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQgfHwgKHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgIGFjdGl2ZURlc2NlbmRhbnRzOiB7XG4gICAgICAgICAgcmVjb25jaWxlOiBmdW5jdGlvbiByZWNvbmNpbGUoa2V5LCBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFyaWFBY3RpdmVEZXNjZW5kYW50KGlkLCBrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBmaWx0ZXJzID0gcmVxdWlyZSgnLi4vdXRpbC9maWx0ZXInKSxcbiAgICBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuLi91dGlsL3Byb3BUeXBlcycpLFxuICAgIGhlbHBlciA9IHJlcXVpcmUoJy4vRGF0YUhlbHBlcnNNaXhpbicpO1xuXG52YXIgZGZsdCA9IGZ1bmN0aW9uIGRmbHQoZikge1xuICByZXR1cm4gZiA9PT0gdHJ1ZSA/ICdzdGFydHNXaXRoJyA6IGYgPyBmIDogJ2VxJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBmaWx0ZXI6IEN1c3RvbVByb3BUeXBlcy5maWx0ZXIsXG4gICAgY2FzZVNlbnNpdGl2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgbWluTGVuZ3RoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgfTtcbiAgfSxcblxuICBmaWx0ZXJJbmRleE9mOiBmdW5jdGlvbiBmaWx0ZXJJbmRleE9mKGl0ZW1zLCBzZWFyY2hUZXJtKSB7XG4gICAgdmFyIGlkeCA9IC0xLFxuICAgICAgICBtYXRjaGVzID0gdHlwZW9mIHRoaXMucHJvcHMuZmlsdGVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5maWx0ZXIgOiBnZXRGaWx0ZXIoZmlsdGVyc1tkZmx0KHRoaXMucHJvcHMuZmlsdGVyKV0sIHNlYXJjaFRlcm0sIHRoaXMpO1xuXG4gICAgaWYgKCFzZWFyY2hUZXJtIHx8ICFzZWFyY2hUZXJtLnRyaW0oKSB8fCB0aGlzLnByb3BzLmZpbHRlciAmJiBzZWFyY2hUZXJtLmxlbmd0aCA8ICh0aGlzLnByb3BzLm1pbkxlbmd0aCB8fCAxKSkgcmV0dXJuIC0xO1xuXG4gICAgaXRlbXMuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgIGlmIChtYXRjaGVzKGl0ZW0sIHNlYXJjaFRlcm0sIGkpKSByZXR1cm4gKGlkeCA9IGksIGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaWR4O1xuICB9LFxuXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGl0ZW1zLCBzZWFyY2hUZXJtKSB7XG4gICAgdmFyIG1hdGNoZXMgPSB0eXBlb2YgdGhpcy5wcm9wcy5maWx0ZXIgPT09ICdzdHJpbmcnID8gZ2V0RmlsdGVyKGZpbHRlcnNbdGhpcy5wcm9wcy5maWx0ZXJdLCBzZWFyY2hUZXJtLCB0aGlzKSA6IHRoaXMucHJvcHMuZmlsdGVyO1xuXG4gICAgaWYgKCFtYXRjaGVzIHx8ICFzZWFyY2hUZXJtIHx8ICFzZWFyY2hUZXJtLnRyaW0oKSB8fCBzZWFyY2hUZXJtLmxlbmd0aCA8ICh0aGlzLnByb3BzLm1pbkxlbmd0aCB8fCAxKSkgcmV0dXJuIGl0ZW1zO1xuXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhpdGVtLCBzZWFyY2hUZXJtLCBpZHgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRGaWx0ZXIobWF0Y2hlciwgc2VhcmNoVGVybSwgY3R4KSB7XG4gIHNlYXJjaFRlcm0gPSAhY3R4LnByb3BzLmNhc2VTZW5zaXRpdmUgPyBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkgOiBzZWFyY2hUZXJtO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciB2YWwgPSBoZWxwZXIuX2RhdGFUZXh0LmNhbGwoY3R4LCBpdGVtKTtcblxuICAgIGlmICghY3R4LnByb3BzLmNhc2VTZW5zaXRpdmUpIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXIodmFsLCBzZWFyY2hUZXJtKTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL3V0aWwvcHJvcFR5cGVzJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4uL3V0aWwvXycpO1xuXG52YXIgaGFzID0gX3JlcXVpcmUuaGFzO1xudmFyIGlzU2hhbGxvd0VxdWFsID0gX3JlcXVpcmUuaXNTaGFsbG93RXF1YWw7XG5cbmZ1bmN0aW9uIGFjY2Vzc29yKGRhdGEsIGZpZWxkKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGE7XG5cbiAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSBmaWVsZChkYXRhKTtlbHNlIGlmIChkYXRhID09IG51bGwpIHZhbHVlID0gZGF0YTtlbHNlIGlmICh0eXBlb2YgZmllbGQgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBmaWVsZCBpbiBkYXRhKSB2YWx1ZSA9IGRhdGFbZmllbGRdO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmFsdWVGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0RmllbGQ6IHByb3BUeXBlcy5hY2Nlc3NvclxuICB9LFxuXG4gIF9kYXRhVmFsdWU6IGZ1bmN0aW9uIF9kYXRhVmFsdWUoaXRlbSkge1xuICAgIHZhciBmaWVsZCA9IHRoaXMucHJvcHMudmFsdWVGaWVsZDtcblxuICAgIHJldHVybiBmaWVsZCAmJiBpdGVtICYmIGhhcyhpdGVtLCBmaWVsZCkgPyBpdGVtW2ZpZWxkXSA6IGl0ZW07XG4gIH0sXG5cbiAgX2RhdGFUZXh0OiBmdW5jdGlvbiBfZGF0YVRleHQoaXRlbSkge1xuICAgIHZhciBmaWVsZCA9IHRoaXMucHJvcHMudGV4dEZpZWxkLFxuICAgICAgICB2YWx1ZSA9IGFjY2Vzc29yKGl0ZW0sIGZpZWxkKTtcblxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSArICcnO1xuICB9LFxuXG4gIF9kYXRhSW5kZXhPZjogZnVuY3Rpb24gX2RhdGFJbmRleE9mKGRhdGEsIGl0ZW0pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGlkeCA9IC0xLFxuICAgICAgICBsZW4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZmluZGVyID0gZnVuY3Rpb24gZmluZGVyKGRhdHVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX3ZhbHVlTWF0Y2hlcihpdGVtLCBkYXR1bSk7XG4gICAgfTtcblxuICAgIHdoaWxlICgrK2lkeCA8IGxlbikgaWYgKGZpbmRlcihkYXRhW2lkeF0pKSByZXR1cm4gaWR4O1xuXG4gICAgcmV0dXJuIC0xO1xuICB9LFxuXG4gIF92YWx1ZU1hdGNoZXI6IGZ1bmN0aW9uIF92YWx1ZU1hdGNoZXIoYSwgYikge1xuICAgIHJldHVybiBpc1NoYWxsb3dFcXVhbCh0aGlzLl9kYXRhVmFsdWUoYSksIHRoaXMuX2RhdGFWYWx1ZShiKSk7XG4gIH0sXG5cbiAgX2RhdGFJdGVtOiBmdW5jdGlvbiBfZGF0YUl0ZW0oZGF0YSwgaXRlbSkge1xuICAgIHZhciBmaXJzdCA9IGRhdGFbMF0sXG4gICAgICAgIGZpZWxkID0gdGhpcy5wcm9wcy52YWx1ZUZpZWxkLFxuICAgICAgICBpZHg7XG5cbiAgICAvLyBtYWtlIGFuIGF0dGVtcHQgdG8gc2VlIGlmIHdlIHdlcmUgcGFzc2VkIGluIGRhdGFJdGVtIHZzIGp1c3QgYSB2YWx1ZUZpZWxkIHZhbHVlXG4gICAgLy8gZWl0aGVyIGFuIG9iamVjdCB3aXRoIHRoZSByaWdodCBwcm9wLCBvciBhIHByaW1pdGl2ZVxuICAgIC8vIHsgdmFsdWVGaWVsZDogNSB9IHx8IFwiaGVsbG9cIiBbIFwiaGVsbG9cIiBdXG4gICAgaWYgKGhhcyhpdGVtLCBmaWVsZCkgfHwgdHlwZW9mIGZpcnN0ID09PSB0eXBlb2YgdmFsKSByZXR1cm4gaXRlbTtcblxuICAgIGlkeCA9IHRoaXMuX2RhdGFJbmRleE9mKGRhdGEsIHRoaXMuX2RhdGFWYWx1ZShpdGVtKSk7XG5cbiAgICBpZiAoaWR4ICE9PSAtMSkgcmV0dXJuIGRhdGFbaWR4XTtcblxuICAgIHJldHVybiBpdGVtO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZmlsdGVyID0gcmVxdWlyZSgnLi4vdXRpbC9maWx0ZXInKSxcbiAgICBoZWxwZXIgPSByZXF1aXJlKCcuL0RhdGFIZWxwZXJzTWl4aW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGV4dEZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhKClbMF07XG4gIH0sXG5cbiAgbGFzdDogZnVuY3Rpb24gbGFzdCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGEoKTtcbiAgICByZXR1cm4gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuICB9LFxuXG4gIHByZXY6IGZ1bmN0aW9uIHByZXYoaXRlbSwgd29yZCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YSgpLFxuICAgICAgICBpZHggPSBkYXRhLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaWR4ID09PSAtMSkgaWR4ID0gZGF0YS5sZW5ndGg7XG5cbiAgICByZXR1cm4gd29yZCA/IGZpbmRQcmV2SW5zdGFuY2UodGhpcywgZGF0YSwgd29yZCwgaWR4KSA6IC0taWR4IDwgMCA/IGRhdGFbMF0gOiBkYXRhW2lkeF07XG4gIH0sXG5cbiAgbmV4dDogZnVuY3Rpb24gbmV4dChpdGVtLCB3b3JkKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhKCksXG4gICAgICAgIGlkeCA9IGRhdGEuaW5kZXhPZihpdGVtKTtcblxuICAgIHJldHVybiB3b3JkID8gZmluZE5leHRJbnN0YW5jZSh0aGlzLCBkYXRhLCB3b3JkLCBpZHgpIDogKytpZHggPT09IGRhdGEubGVuZ3RoID8gZGF0YVtkYXRhLmxlbmd0aCAtIDFdIDogZGF0YVtpZHhdO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIGZpbmROZXh0SW5zdGFuY2UoY3R4LCBkYXRhLCB3b3JkLCBzdGFydEluZGV4KSB7XG4gIHZhciBtYXRjaGVzID0gZmlsdGVyLnN0YXJ0c1dpdGgsXG4gICAgICBpZHggPSAtMSxcbiAgICAgIGxlbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgZm91bmRTdGFydCxcbiAgICAgIGl0ZW1UZXh0O1xuXG4gIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgd2hpbGUgKCsraWR4IDwgbGVuKSB7XG4gICAgZm91bmRTdGFydCA9IGZvdW5kU3RhcnQgfHwgaWR4ID4gc3RhcnRJbmRleDtcbiAgICBpdGVtVGV4dCA9IGZvdW5kU3RhcnQgJiYgaGVscGVyLl9kYXRhVGV4dC5jYWxsKGN0eCwgZGF0YVtpZHhdKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGZvdW5kU3RhcnQgJiYgbWF0Y2hlcyhpdGVtVGV4dCwgd29yZCkpIHJldHVybiBkYXRhW2lkeF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFByZXZJbnN0YW5jZShjdHgsIGRhdGEsIHdvcmQsIHN0YXJ0SW5kZXgpIHtcbiAgdmFyIG1hdGNoZXMgPSBmaWx0ZXIuc3RhcnRzV2l0aCxcbiAgICAgIGlkeCA9IGRhdGEubGVuZ3RoLFxuICAgICAgZm91bmRTdGFydCxcbiAgICAgIGl0ZW1UZXh0O1xuXG4gIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgd2hpbGUgKC0taWR4ID49IDApIHtcbiAgICBmb3VuZFN0YXJ0ID0gZm91bmRTdGFydCB8fCBpZHggPCBzdGFydEluZGV4O1xuICAgIGl0ZW1UZXh0ID0gZm91bmRTdGFydCAmJiBoZWxwZXIuX2RhdGFUZXh0LmNhbGwoY3R4LCBkYXRhW2lkeF0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoZm91bmRTdGFydCAmJiBtYXRjaGVzKGl0ZW1UZXh0LCB3b3JkKSkgcmV0dXJuIGRhdGFbaWR4XTtcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBzY3JvbGxUbyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3V0aWwvc2Nyb2xsVG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgX3Njcm9sbFRvOiBmdW5jdGlvbiBfc2Nyb2xsVG8oc2VsZWN0ZWQsIGxpc3QsIGZvY3VzZWQpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLl9zY3JvbGxTdGF0ZSB8fCAodGhpcy5fc2Nyb2xsU3RhdGUgPSB7fSksXG4gICAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3BzLm9uTW92ZSxcbiAgICAgICAgbGFzdFZpc2libGUgPSBzdGF0ZS52aXNpYmxlLFxuICAgICAgICBsYXN0SXRlbSA9IHN0YXRlLmZvY3VzZWQsXG4gICAgICAgIHNob3duLFxuICAgICAgICBjaGFuZ2VkO1xuXG4gICAgc3RhdGUudmlzaWJsZSA9ICEoIWxpc3Qub2Zmc2V0V2lkdGggfHwgIWxpc3Qub2Zmc2V0SGVpZ2h0KTtcbiAgICBzdGF0ZS5mb2N1c2VkID0gZm9jdXNlZDtcblxuICAgIGNoYW5nZWQgPSBsYXN0SXRlbSAhPT0gZm9jdXNlZDtcbiAgICBzaG93biA9IHN0YXRlLnZpc2libGUgJiYgIWxhc3RWaXNpYmxlO1xuXG4gICAgaWYgKHNob3duIHx8IHN0YXRlLnZpc2libGUgJiYgY2hhbmdlZCkge1xuICAgICAgaWYgKGhhbmRsZXIpIGhhbmRsZXIoc2VsZWN0ZWQsIGxpc3QsIGZvY3VzZWQpO2Vsc2Uge1xuICAgICAgICBzdGF0ZS5zY3JvbGxDYW5jZWwgJiYgc3RhdGUuc2Nyb2xsQ2FuY2VsKCk7XG4gICAgICAgIHN0YXRlLnNjcm9sbENhbmNlbCA9IHNjcm9sbFRvKHNlbGVjdGVkLCBsaXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIF8gPSByZXF1aXJlKCcuLi91dGlsL18nKTtcblxuLy9iYWNrcG9ydCBQdXJlUmVuZGVyRXF1YWxcbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzU2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIV8uaXNTaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBpc1J0bDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBpc1J0bDogZnVuY3Rpb24gaXNSdGwoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jb250ZXh0LmlzUnRsO1xuICB9XG5cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaXNSdGw6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgaXNSdGw6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBpc1J0bDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNSdGw6IHRoaXMucHJvcHMuaXNSdGwgfHwgdGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5pc1J0bFxuICAgIH07XG4gIH0sXG5cbiAgaXNSdGw6IGZ1bmN0aW9uIGlzUnRsKCkge1xuICAgIHJldHVybiAhISh0aGlzLnByb3BzLmlzUnRsIHx8IHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuaXNSdGwpO1xuICB9XG5cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi91dGlsL18nKTtcblxudmFyIGhhcyA9IF9yZXF1aXJlLmhhcztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciB0aW1lcnMgPSB0aGlzLl90aW1lcnMgfHwge307XG5cbiAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgZm9yICh2YXIgayBpbiB0aW1lcnMpIGlmIChoYXModGltZXJzLCBrKSkgY2xlYXJUaW1lb3V0KHRpbWVyc1trXSk7XG4gIH0sXG5cbiAgc2V0VGltZW91dDogZnVuY3Rpb24gc2V0VGltZW91dChrZXksIGNiLCBkdXJhdGlvbikge1xuICAgIHZhciB0aW1lcnMgPSB0aGlzLl90aW1lcnMgfHwgKHRoaXMuX3RpbWVycyA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkgcmV0dXJuO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyc1trZXldKTtcbiAgICB0aW1lcnNba2V5XSA9IHdpbmRvdy5zZXRUaW1lb3V0KGNiLCBkdXJhdGlvbik7XG4gIH1cblxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIF8gPSByZXF1aXJlKCcuLi91dGlsL18nKTsgLy91bmlxdWVJRFxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcm9wVHlwZXM6IHtcblxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnZGlzYWJsZWQnXSldKSxcblxuICAgIHJlYWRPbmx5OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsncmVhZE9ubHknXSldKVxuICB9LFxuXG4gIGlzRGlzYWJsZWQ6IGZ1bmN0aW9uIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzYWJsZWQgPT09IHRydWUgfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCA9PT0gJ2Rpc2FibGVkJztcbiAgfSxcblxuICBpc1JlYWRPbmx5OiBmdW5jdGlvbiBpc1JlYWRPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlIHx8IHRoaXMucHJvcHMucmVhZE9ubHkgPT09ICdyZWFkb25seSc7XG4gIH0sXG5cbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoaGFuZGxlciwgYXJncykge1xuICAgIHRoaXMucHJvcHNbaGFuZGxlcl0gJiYgdGhpcy5wcm9wc1toYW5kbGVyXS5hcHBseShudWxsLCBbXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIF9pZDogZnVuY3Rpb24gX2lkKCkge1xuICAgIHZhciBzdWZmaXggPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgdGhpcy5faWRfIHx8ICh0aGlzLl9pZF8gPSBfLnVuaXF1ZUlkKCdyd18nKSk7XG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmlkIHx8IHRoaXMuX2lkXykgKyBzdWZmaXg7XG4gIH0sXG5cbiAgX21heWJlSGFuZGxlOiBmdW5jdGlvbiBfbWF5YmVIYW5kbGUoaGFuZGxlciwgZGlzYWJsZWRPbmx5KSB7XG4gICAgaWYgKCEodGhpcy5pc0Rpc2FibGVkKCkgfHwgIWRpc2FibGVkT25seSAmJiB0aGlzLmlzUmVhZE9ubHkoKSkpIHJldHVybiBoYW5kbGVyO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgaWRDb3VudCA9IDA7XG5cbnZhciBfID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgaGFzOiBoYXMsXG5cbiAgcmVzdWx0OiBmdW5jdGlvbiByZXN1bHQodmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpIDogdmFsdWU7XG4gIH0sXG5cbiAgaXNTaGFsbG93RXF1YWw6IGZ1bmN0aW9uIGlzU2hhbGxvd0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBhICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiAhPT0gJ29iamVjdCcpIHJldHVybiBhID09PSBiO1xuXG4gICAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHNoYWxsb3dFcXVhbChhLCBiKTtcbiAgfSxcblxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybShvYmosIGNiLCBzZWVkKSB7XG4gICAgXy5lYWNoKG9iaiwgY2IuYmluZChudWxsLCBzZWVkID0gc2VlZCB8fCAoQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fSkpKTtcbiAgICByZXR1cm4gc2VlZDtcbiAgfSxcblxuICBlYWNoOiBmdW5jdGlvbiBlYWNoKG9iaiwgY2IsIHRoaXNBcmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLmZvckVhY2goY2IsIHRoaXNBcmcpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyhvYmosIGtleSkpIGNiLmNhbGwodGhpc0FyZywgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgfSxcblxuICBwaWNrOiBmdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICAgIGtleXMgPSBbXS5jb25jYXQoa2V5cyk7XG4gICAgcmV0dXJuIF8udHJhbnNmb3JtKG9iaiwgZnVuY3Rpb24gKG1hcHBlZCwgdmFsLCBrZXkpIHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIG1hcHBlZFtrZXldID0gdmFsO1xuICAgIH0sIHt9KTtcbiAgfSxcblxuICBvbWl0OiBmdW5jdGlvbiBvbWl0KG9iaiwga2V5cykge1xuICAgIGtleXMgPSBbXS5jb25jYXQoa2V5cyk7XG4gICAgcmV0dXJuIF8udHJhbnNmb3JtKG9iaiwgZnVuY3Rpb24gKG1hcHBlZCwgdmFsLCBrZXkpIHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIG1hcHBlZFtrZXldID0gdmFsO1xuICAgIH0sIHt9KTtcbiAgfSxcblxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGFyciwgY2IsIHRoaXNBcmcpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGFyci5ldmVyeShmdW5jdGlvbiAodmFsLCBpZHgpIHtcbiAgICAgICAgaWYgKGNiLmNhbGwodGhpc0FyZywgdmFsLCBpZHgsIGFycikpIHJldHVybiAocmVzdWx0ID0gdmFsLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSBmb3IgKHZhciBrZXkgaW4gYXJyKSBpZiAoaGFzKGFyciwga2V5KSkgaWYgKGNiLmNhbGwodGhpc0FyZywgYXJyW2tleV0sIGtleSwgYXJyKSkgcmV0dXJuIGFycltrZXldO1xuICB9LFxuXG4gIGNodW5rOiBmdW5jdGlvbiBjaHVuayhhcnJheSwgY2h1bmtTaXplKSB7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIGNodW5rU2l6ZSA9IE1hdGgubWF4KCtjaHVua1NpemUgfHwgMSwgMSk7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHJlc3VsdC5wdXNoKGFycmF5LnNsaWNlKGluZGV4LCBpbmRleCArPSBjaHVua1NpemUpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgc3BsYXQ6IGZ1bmN0aW9uIHNwbGF0KG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFtdIDogW10uY29uY2F0KG9iaik7XG4gIH0sXG5cbiAgbm9vcDogZnVuY3Rpb24gbm9vcCgpIHt9LFxuXG4gIHVuaXF1ZUlkOiBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgICByZXR1cm4gJycgKyAoKHByZWZpeCA9PSBudWxsID8gJycgOiBwcmVmaXgpICsgKytpZENvdW50KTtcbiAgfSxcblxuICAvLy0tIFJlYWxseSBzcGVjaWZpYyBDb21wb25lbnQgVXRpbGl0aWVzIC0tXG5cbiAgaXNGaXJzdEZvY3VzZWRSZW5kZXI6IGZ1bmN0aW9uIGlzRmlyc3RGb2N1c2VkUmVuZGVyKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQuX2ZpcnN0Rm9jdXMgfHwgY29tcG9uZW50LnN0YXRlLmZvY3VzZWQgJiYgKGNvbXBvbmVudC5fZmlyc3RGb2N1cyA9IHRydWUpO1xuICB9LFxuXG4gIGlmTm90RGlzYWJsZWQ6IGZ1bmN0aW9uIGlmTm90RGlzYWJsZWQoZGlzYWJsZWRPbmx5LCBmbikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBmbiA9IGRpc2FibGVkT25seSwgZGlzYWJsZWRPbmx5ID0gZmFsc2U7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdjcmVhdGUgbWV0aG9kJylcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKCdjYWxsZWQnLCBkaXNhYmxlZE9ubHkpXG4gICAgICBpZiAoISh0aGlzLmlzRGlzYWJsZWQoKSB8fCAhZGlzYWJsZWRPbmx5ICYmIHRoaXMuaXNSZWFkT25seSgpKSkgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGhhcyhvLCBrKSB7XG4gIHJldHVybiBvID8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGVxbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG4vKipcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuXG4gIGlmIChvYmpBID09IG51bGwgfHwgb2JqQiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSksXG4gICAgICBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIGlmICghaGFzKG9iakIsIGtleXNBW2ldKSB8fCAhZXFsKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn0iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3QuYmFiZWxIZWxwZXJzID0ge30pO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBiYWJlbEhlbHBlcnMgPSBnbG9iYWw7XG5cbiAgYmFiZWxIZWxwZXJzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICAgIHZhciB0YXJnZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG59KSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYXJldChlbCwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGdldChlbCk7XG5cbiAgc2V0KGVsLCBzdGFydCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGdldChlbCkge1xuICB2YXIgc3RhcnQsIGVuZCwgcmFuZ2VFbCwgY2xvbmU7XG5cbiAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIGVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIHJhbmdlRWwgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIGNsb25lID0gcmFuZ2VFbC5kdXBsaWNhdGUoKTtcblxuICAgICAgcmFuZ2VFbC5tb3ZlVG9Cb29rbWFyayhkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5nZXRCb29rbWFyaygpKTtcbiAgICAgIGNsb25lLnNldEVuZFBvaW50KCdFbmRUb1N0YXJ0JywgcmFuZ2VFbCk7XG5cbiAgICAgIHN0YXJ0ID0gY2xvbmUudGV4dC5sZW5ndGg7XG4gICAgICBlbmQgPSBzdGFydCArIHJhbmdlRWwudGV4dC5sZW5ndGg7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfTtcbn1cblxuZnVuY3Rpb24gc2V0KGVsLCBzdGFydCwgZW5kKSB7XG4gIHZhciByYW5nZUVsO1xuXG4gIHRyeSB7XG4gICAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIHJhbmdlRWwgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlRWwuY29sbGFwc2UodHJ1ZSk7XG4gICAgICByYW5nZUVsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgc3RhcnQpO1xuICAgICAgcmFuZ2VFbC5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQgLSBzdGFydCk7XG4gICAgICByYW5nZUVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cbn1cbi8qIG5vdCBmb2N1c2VkIG9yIG5vdCB2aXNpYmxlICovIC8qIG5vdCBmb2N1c2VkIG9yIG5vdCB2aXNpYmxlICovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBfID0gcmVxdWlyZSgnLi9fJyk7XG5cbnZhciBfdmVyc2lvbiA9IFJlYWN0LnZlcnNpb24uc3BsaXQoJy4nKS5tYXAocGFyc2VGbG9hdCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHZlcnNpb246IGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uO1xuICB9LFxuXG4gIHR5cGU6IGZ1bmN0aW9uIHR5cGUoY29tcG9uZW50KSB7XG4gICAgaWYgKF92ZXJzaW9uWzBdID09PSAwICYmIF92ZXJzaW9uWzFdID49IDEzKSByZXR1cm4gY29tcG9uZW50O1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudC50eXBlO1xuICB9LFxuXG4gIGZpbmRET01Ob2RlOiBmdW5jdGlvbiBmaW5kRE9NTm9kZShjb21wb25lbnQpIHtcbiAgICBpZiAoUmVhY3QuZmluZERPTU5vZGUpIHJldHVybiBSZWFjdC5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudC5nZXRET01Ob2RlKCk7XG4gIH0sXG5cbiAgY2xvbmVFbGVtZW50OiBmdW5jdGlvbiBjbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKSB7XG4gICAgaWYgKFJlYWN0LmNsb25lRWxlbWVudCkgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpO1xuXG4gICAgLy9qdXN0IG11dGF0ZSBpZiBwcmUgMC4xM1xuICAgIF8uZWFjaChwcm9wcywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICByZXR1cm4gY2hpbGQucHJvcHNbcHJvcF0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4uL2dsb2JhbGl6ZS1sb2NhbGl6ZXJzJyk7XG5cbnZhciBnbG9iYWxpemVOdW1iZXJMb2NhbGl6ZXIgPSBfcmVxdWlyZS5nbG9iYWxpemVOdW1iZXJMb2NhbGl6ZXI7XG52YXIgZ2xvYmFsaXplRGF0ZUxvY2FsaXplciA9IF9yZXF1aXJlLmdsb2JhbGl6ZURhdGVMb2NhbGl6ZXI7XG5cbnZhciBnbG9iYWxpemU7XG5cbnRyeSB7XG4gIGdsb2JhbGl6ZSA9IHJlcXVpcmUoJ2dsb2JhbGl6ZScpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGdsb2JhbGl6ZSA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBkZXNjID0geyBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHbG9iYWxpemUuanMgaXMgYXZhaWxhYmxlIGJ1dCBpcyBzdGlsbCBzZXQgYXMgdGhlIGxvY2FsaXphdGlvbiBzdHJhdGVneS4gJyArICdQbGVhc2UgaW5jbHVkZSBHbG9iYWxpemUuanMgb3IgcHJvdmlkZSBhbiBhbHRlcm5hdGl2ZSBsb2NhbGl6YXRpb24gc3RyYXRlZ3kuJyk7XG4gICAgICB9IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZ2xvYmFsaXplLCB7IGZvcm1hdDogZGVzYywgcGFyc2VEYXRlOiBkZXNjLCBwYXJzZUZsb2F0OiBkZXNjLCBmaW5kQ2xvc2VzdEN1bHR1cmU6IGRlc2MsIGN1bHR1cmU6IGRlc2MgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYW5pbWF0ZTogcmVxdWlyZSgnLi9kb20vYW5pbWF0ZScpLFxuXG4gIGxvY2FsZToge1xuICAgIGRhdGU6IGdsb2JhbGl6ZURhdGVMb2NhbGl6ZXIoZ2xvYmFsaXplKSxcbiAgICBudW1iZXI6IGdsb2JhbGl6ZU51bWJlckxvY2FsaXplcihnbG9iYWxpemUpXG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NhbGVuZGFyVmlld0hpZXJhcmNoeSwgX2NhbGVuZGFyVmlld1VuaXRzO1xuXG52YXIgdmlld3MgPSB7XG4gIE1PTlRIOiAnbW9udGgnLFxuICBZRUFSOiAneWVhcicsXG4gIERFQ0FERTogJ2RlY2FkZScsXG4gIENFTlRVUlk6ICdjZW50dXJ5J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgZGlyZWN0aW9uczoge1xuICAgIExFRlQ6ICdMRUZUJyxcbiAgICBSSUdIVDogJ1JJR0hUJyxcbiAgICBVUDogJ1VQJyxcbiAgICBET1dOOiAnRE9XTidcbiAgfSxcblxuICBkYXRlUG9wdXBzOiB7XG4gICAgVElNRTogJ3RpbWUnLFxuICAgIENBTEVOREFSOiAnY2FsZW5kYXInXG4gIH0sXG5cbiAgY2FsZW5kYXJWaWV3czogdmlld3MsXG5cbiAgY2FsZW5kYXJWaWV3SGllcmFyY2h5OiAoX2NhbGVuZGFyVmlld0hpZXJhcmNoeSA9IHt9LCBfY2FsZW5kYXJWaWV3SGllcmFyY2h5W3ZpZXdzLk1PTlRIXSA9IHZpZXdzLllFQVIsIF9jYWxlbmRhclZpZXdIaWVyYXJjaHlbdmlld3MuWUVBUl0gPSB2aWV3cy5ERUNBREUsIF9jYWxlbmRhclZpZXdIaWVyYXJjaHlbdmlld3MuREVDQURFXSA9IHZpZXdzLkNFTlRVUlksIF9jYWxlbmRhclZpZXdIaWVyYXJjaHkpLFxuXG4gIGNhbGVuZGFyVmlld1VuaXRzOiAoX2NhbGVuZGFyVmlld1VuaXRzID0ge30sIF9jYWxlbmRhclZpZXdVbml0c1t2aWV3cy5NT05USF0gPSAnZGF5JywgX2NhbGVuZGFyVmlld1VuaXRzW3ZpZXdzLllFQVJdID0gdmlld3MuTU9OVEgsIF9jYWxlbmRhclZpZXdVbml0c1t2aWV3cy5ERUNBREVdID0gdmlld3MuWUVBUiwgX2NhbGVuZGFyVmlld1VuaXRzW3ZpZXdzLkNFTlRVUlldID0gdmlld3MuREVDQURFLCBfY2FsZW5kYXJWaWV3VW5pdHMpXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBkYXRlTWF0aCA9IHJlcXVpcmUoJ2RhdGUtYXJpdGhtZXRpYycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgZGlyZWN0aW9ucyA9IF9yZXF1aXJlLmRpcmVjdGlvbnM7XG52YXIgY2FsZW5kYXJWaWV3VW5pdHMgPSBfcmVxdWlyZS5jYWxlbmRhclZpZXdVbml0cztcbnZhciBsb2NhbGUgPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKS5sb2NhbGU7XG5cbnZhciBkYXRlcyA9IG1vZHVsZS5leHBvcnRzID0gYmFiZWxIZWxwZXJzLl9leHRlbmRzKGRhdGVNYXRoLCB7XG5cbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGRhdGUsIGZvcm1hdCwgY3VsdHVyZSkge1xuICAgIHJldHVybiBsb2NhbGUuZGF0ZS5wYXJzZShkYXRlLCBmb3JtYXQsIGN1bHR1cmUpO1xuICB9LFxuXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGRhdGUsIF9mb3JtYXQsIGN1bHR1cmUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmRhdGUuZm9ybWF0KGRhdGUsIF9mb3JtYXQsIGN1bHR1cmUpO1xuICB9LFxuXG4gIG1vbnRoc0luWWVhcjogZnVuY3Rpb24gbW9udGhzSW5ZZWFyKHllYXIpIHtcbiAgICB2YXIgbW9udGhzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV0sXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcblxuICAgIHJldHVybiBtb250aHMubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gZGF0ZXMubW9udGgoZGF0ZSwgaSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZmlyc3RWaXNpYmxlRGF5OiBmdW5jdGlvbiBmaXJzdFZpc2libGVEYXkoZGF0ZSwgY3VsdHVyZSkge1xuICAgIHZhciBmaXJzdE9mTW9udGggPSBkYXRlcy5zdGFydE9mKGRhdGUsICdtb250aCcpO1xuXG4gICAgcmV0dXJuIGRhdGVzLnN0YXJ0T2YoZmlyc3RPZk1vbnRoLCAnd2VlaycsIGxvY2FsZS5kYXRlLnN0YXJ0T2ZXZWVrKGN1bHR1cmUpKTtcbiAgfSxcblxuICBsYXN0VmlzaWJsZURheTogZnVuY3Rpb24gbGFzdFZpc2libGVEYXkoZGF0ZSwgY3VsdHVyZSkge1xuICAgIHZhciBlbmRPZk1vbnRoID0gZGF0ZXMuZW5kT2YoZGF0ZSwgJ21vbnRoJyk7XG5cbiAgICByZXR1cm4gZGF0ZXMuZW5kT2YoZW5kT2ZNb250aCwgJ3dlZWsnLCBsb2NhbGUuZGF0ZS5zdGFydE9mV2VlayhjdWx0dXJlKSk7XG4gIH0sXG5cbiAgdmlzaWJsZURheXM6IGZ1bmN0aW9uIHZpc2libGVEYXlzKGRhdGUsIGN1bHR1cmUpIHtcbiAgICB2YXIgY3VycmVudCA9IGRhdGVzLmZpcnN0VmlzaWJsZURheShkYXRlLCBjdWx0dXJlKSxcbiAgICAgICAgbGFzdCA9IGRhdGVzLmxhc3RWaXNpYmxlRGF5KGRhdGUsIGN1bHR1cmUpLFxuICAgICAgICBkYXlzID0gW107XG5cbiAgICB3aGlsZSAoZGF0ZXMubHRlKGN1cnJlbnQsIGxhc3QsICdkYXknKSkge1xuICAgICAgZGF5cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgY3VycmVudCA9IGRhdGVzLmFkZChjdXJyZW50LCAxLCAnZGF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXM7XG4gIH0sXG5cbiAgbW92ZTogZnVuY3Rpb24gbW92ZShkYXRlLCBtaW4sIG1heCwgdW5pdCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIGlzTW9udGggPSB1bml0ID09PSAnbW9udGgnLFxuICAgICAgICBpc1VwT3JEb3duID0gZGlyZWN0aW9uID09PSBkaXJlY3Rpb25zLlVQIHx8IGRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5ET1dOLFxuICAgICAgICByYW5nZVVuaXQgPSBjYWxlbmRhclZpZXdVbml0c1t1bml0XSxcbiAgICAgICAgYWRkVW5pdCA9IGlzTW9udGggJiYgaXNVcE9yRG93biA/ICd3ZWVrJyA6IGNhbGVuZGFyVmlld1VuaXRzW3VuaXRdLFxuICAgICAgICBhbW91bnQgPSBpc01vbnRoIHx8ICFpc1VwT3JEb3duID8gMSA6IDQsXG4gICAgICAgIG5ld0RhdGU7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBkaXJlY3Rpb25zLlVQIHx8IGRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5MRUZUKSBhbW91bnQgKj0gLTE7XG5cbiAgICBuZXdEYXRlID0gZGF0ZXMuYWRkKGRhdGUsIGFtb3VudCwgYWRkVW5pdCk7XG5cbiAgICByZXR1cm4gZGF0ZXMuaW5SYW5nZShuZXdEYXRlLCBtaW4sIG1heCwgcmFuZ2VVbml0KSA/IG5ld0RhdGUgOiBkYXRlO1xuICB9LFxuXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShkYXRlLCB0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT0gbnVsbCAmJiBkYXRlID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKHRpbWUgPT0gbnVsbCkgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGRhdGUgPT0gbnVsbCkgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBkYXRlID0gZGF0ZXMuc3RhcnRPZihkYXRlLCAnZGF5Jyk7XG4gICAgZGF0ZSA9IGRhdGVzLmhvdXJzKGRhdGUsIGRhdGVzLmhvdXJzKHRpbWUpKTtcbiAgICBkYXRlID0gZGF0ZXMubWludXRlcyhkYXRlLCBkYXRlcy5taW51dGVzKHRpbWUpKTtcbiAgICBkYXRlID0gZGF0ZXMuc2Vjb25kcyhkYXRlLCBkYXRlcy5zZWNvbmRzKHRpbWUpKTtcbiAgICByZXR1cm4gZGF0ZXMubWlsbGlzZWNvbmRzKGRhdGUsIGRhdGVzLm1pbGxpc2Vjb25kcyh0aW1lKSk7XG4gIH0sXG5cbiAgc2FtZU1vbnRoOiBmdW5jdGlvbiBzYW1lTW9udGgoZGF0ZUEsIGRhdGVCKSB7XG4gICAgcmV0dXJuIGRhdGVzLmVxKGRhdGVBLCBkYXRlQiwgJ21vbnRoJyk7XG4gIH0sXG5cbiAgdG9kYXk6IGZ1bmN0aW9uIHRvZGF5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0T2YobmV3IERhdGUoKSwgJ2RheScpO1xuICB9LFxuXG4gIHllc3RlcmRheTogZnVuY3Rpb24geWVzdGVyZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmFkZCh0aGlzLnN0YXJ0T2YobmV3IERhdGUoKSwgJ2RheScpLCAtMSwgJ2RheScpO1xuICB9LFxuXG4gIHRvbW9ycm93OiBmdW5jdGlvbiB0b21vcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQodGhpcy5zdGFydE9mKG5ldyBEYXRlKCksICdkYXknKSwgMSwgJ2RheScpO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgaHlwaGVuYXRlID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGUnKSxcbiAgICBjc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9zdHlsZScpLFxuICAgIG9uID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvZXZlbnRzL29uJyksXG4gICAgb2ZmID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvZXZlbnRzL29mZicpLFxuICAgIHRyYW5zaXRpb25Qcm9wcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICByZXNldCA9IHt9LFxuICAgIFRSQU5TTEFUSU9OX01BUCA9IHtcbiAgbGVmdDogJ3RyYW5zbGF0ZVgnLFxuICByaWdodDogJ3RyYW5zbGF0ZVgnLFxuICB0b3A6ICd0cmFuc2xhdGVZJyxcbiAgYm90dG9tOiAndHJhbnNsYXRlWSdcbn07XG5cbnJlc2V0W3RyYW5zaXRpb25Qcm9wcy5wcm9wZXJ0eV0gPSByZXNldFt0cmFuc2l0aW9uUHJvcHMuZHVyYXRpb25dID0gcmVzZXRbdHJhbnNpdGlvblByb3BzLmRlbGF5XSA9IHJlc2V0W3RyYW5zaXRpb25Qcm9wcy50aW1pbmddID0gJyc7XG5cbmFuaW1hdGUuZW5kRXZlbnQgPSB0cmFuc2l0aW9uUHJvcHMuZW5kO1xuYW5pbWF0ZS50cmFuc2Zvcm0gPSB0cmFuc2l0aW9uUHJvcHMudHJhbnNmb3JtO1xuYW5pbWF0ZS5UUkFOU0xBVElPTl9NQVAgPSBUUkFOU0xBVElPTl9NQVA7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0ZTtcblxuLy8gc3VwZXIgbGVhbiBhbmltYXRlIGZ1bmN0aW9uIGZvciB0cmFuc2l0aW9uc1xuLy8gZG9lc24ndCBzdXBwb3J0IGFsbCB0cmFuc2xhdGlvbnMgdG8ga2VlcCBpdCBtYXRjaGluZyB0aGUganF1ZXJ5IEFQSVxuLyoqXHJcbiAqIGNvZGUgaW4gcGFydCBmcm9tOiBaZXB0byAxLjEuNCB8IHplcHRvanMuY29tL2xpY2Vuc2VcclxuICovXG5mdW5jdGlvbiBhbmltYXRlKG5vZGUsIHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gIHZhciBjc3NQcm9wZXJ0aWVzID0gW10sXG4gICAgICBmYWtlRXZlbnQgPSB7IHRhcmdldDogbm9kZSwgY3VycmVudFRhcmdldDogbm9kZSB9LFxuICAgICAgY3NzVmFsdWVzID0ge30sXG4gICAgICB0cmFuc2Zvcm1zID0gJycsXG4gICAgICBmaXJlZDtcblxuICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2sgPSBlYXNpbmcsIGVhc2luZyA9IG51bGw7XG5cbiAgaWYgKCF0cmFuc2l0aW9uUHJvcHMuZW5kKSBkdXJhdGlvbiA9IDA7XG4gIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSBkdXJhdGlvbiA9IDIwMDtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykgaWYgKGhhcy5jYWxsKHByb3BlcnRpZXMsIGtleSkpIHtcbiAgICBpZiAoLyh0b3B8Ym90dG9tKS8udGVzdChrZXkpKSB0cmFuc2Zvcm1zICs9IFRSQU5TTEFUSU9OX01BUFtrZXldICsgJygnICsgcHJvcGVydGllc1trZXldICsgJykgJztlbHNlIHtcbiAgICAgIGNzc1ZhbHVlc1trZXldID0gcHJvcGVydGllc1trZXldO1xuICAgICAgY3NzUHJvcGVydGllcy5wdXNoKGh5cGhlbmF0ZShrZXkpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhbnNmb3Jtcykge1xuICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcHMudHJhbnNmb3JtXSA9IHRyYW5zZm9ybXM7XG4gICAgY3NzUHJvcGVydGllcy5wdXNoKHRyYW5zaXRpb25Qcm9wcy50cmFuc2Zvcm0pO1xuICB9XG5cbiAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcHMucHJvcGVydHldID0gY3NzUHJvcGVydGllcy5qb2luKCcsICcpO1xuICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcHMuZHVyYXRpb25dID0gZHVyYXRpb24gLyAxMDAwICsgJ3MnO1xuICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uUHJvcHMuZGVsYXldID0gMCArICdzJztcbiAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BzLnRpbWluZ10gPSBlYXNpbmcgfHwgJ2xpbmVhcic7XG5cbiAgICBvbihub2RlLCB0cmFuc2l0aW9uUHJvcHMuZW5kLCBkb25lKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmaXJlZCkgZG9uZShmYWtlRXZlbnQpO1xuICAgIH0sIGR1cmF0aW9uICsgNTAwKTtcbiAgfVxuXG4gIG5vZGUuY2xpZW50TGVmdDsgLy8gdHJpZ2dlciBwYWdlIHJlZmxvd1xuICBjc3Mobm9kZSwgY3NzVmFsdWVzKTtcblxuICBpZiAoZHVyYXRpb24gPD0gMCkgc2V0VGltZW91dChkb25lLmJpbmQobnVsbCwgZmFrZUV2ZW50KSwgMCk7XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybjtcblxuICAgIGZpcmVkID0gdHJ1ZTtcbiAgICBvZmYoZXZlbnQudGFyZ2V0LCB0cmFuc2l0aW9uUHJvcHMuZW5kLCBkb25lKTtcbiAgICBjc3Mobm9kZSwgcmVzZXQpO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpb3M6IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUG9kfGlQaG9uZXxpUGFkKS8pICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0Lylcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbW1vbiA9IHtcbiAgZXE6IGZ1bmN0aW9uIGVxKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfSxcbiAgbmVxOiBmdW5jdGlvbiBuZXEoYSwgYikge1xuICAgIHJldHVybiBhICE9PSBiO1xuICB9LFxuICBndDogZnVuY3Rpb24gZ3QoYSwgYikge1xuICAgIHJldHVybiBhID4gYjtcbiAgfSxcbiAgZ3RlOiBmdW5jdGlvbiBndGUoYSwgYikge1xuICAgIHJldHVybiBhID49IGI7XG4gIH0sXG4gIGx0OiBmdW5jdGlvbiBsdChhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiO1xuICB9LFxuICBsdGU6IGZ1bmN0aW9uIGx0ZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPD0gYjtcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gY29udGFpbnMoYSwgYikge1xuICAgIHJldHVybiBhLmluZGV4T2YoYikgIT09IC0xO1xuICB9LFxuXG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoYSwgYikge1xuICAgIHJldHVybiBhLmxhc3RJbmRleE9mKGIsIDApID09PSAwO1xuICB9LFxuXG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChhLCBiKSB7XG4gICAgdmFyIHBvcyA9IGEubGVuZ3RoIC0gYi5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IGEuaW5kZXhPZihiLCBwb3MpO1xuXG4gICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3M7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tbW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4vYmFiZWxIZWxwZXJzLmpzJyk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vXycpO1xuXG52YXIgaGFzID0gX3JlcXVpcmUuaGFzO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUkVRVUlSRURfTlVNQkVSX0ZPUk1BVFMgPSBbJ2RlZmF1bHQnXTtcblxudmFyIGxvY2FsZVByb3BUeXBlID0gUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgUmVhY3QuUHJvcFR5cGVzLmZ1bmNdKTtcblxudmFyIFJFUVVJUkVEX0RBVEVfRk9STUFUUyA9IFsnZGVmYXVsdCcsICdkYXRlJywgJ3RpbWUnLCAnaGVhZGVyJywgJ2Zvb3RlcicsICdkYXlPZk1vbnRoJywgJ21vbnRoJywgJ3llYXInLCAnZGVjYWRlJywgJ2NlbnR1cnknXTtcblxuZnVuY3Rpb24gX2Zvcm1hdChsb2NhbGl6ZXIsIGZvcm1hdHRlciwgdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSkge1xuICB2YXIgcmVzdWx0ID0gdHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/IGZvcm1hdCh2YWx1ZSwgY3VsdHVyZSwgbG9jYWxpemVyKSA6IGZvcm1hdHRlci5jYWxsKGxvY2FsaXplciwgdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSk7XG5cbiAgaW52YXJpYW50KHJlc3VsdCA9PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnLCAnYGxvY2FsaXplciBmb3JtYXQoLi4pYCBtdXN0IHJldHVybiBhIHN0cmluZywgbnVsbCwgb3IgdW5kZWZpbmVkJyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JtYXRzKHJlcXVpcmVkRm9ybWF0cywgZm9ybWF0cykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgcmVxdWlyZWRGb3JtYXRzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gaW52YXJpYW50KGhhcyhmb3JtYXRzLCBmKSwgJ2xvY2FsaXplciBtaXNzaW5nIHJlcXVpcmVkIGZvcm1hdDogYCVzYCcsIGYpO1xuICB9KTtcbn1cblxudmFyIE51bWJlckxvY2FsaXplciA9IGZ1bmN0aW9uIE51bWJlckxvY2FsaXplcihfcmVmKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGZvcm1hdCA9IF9yZWYuZm9ybWF0O1xuICB2YXIgcGFyc2UgPSBfcmVmLnBhcnNlO1xuICB2YXIgcHJlY2lzaW9uID0gX3JlZi5wcmVjaXNpb247XG4gIHZhciBmb3JtYXRzID0gX3JlZi5mb3JtYXRzO1xuICB2YXIgcHJvcFR5cGUgPSBfcmVmLnByb3BUeXBlO1xuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyTG9jYWxpemVyKTtcblxuICBpbnZhcmlhbnQodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJywgJ251bWJlciBsb2NhbGl6ZXIgYGZvcm1hdCguLilgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICBpbnZhcmlhbnQodHlwZW9mIHBhcnNlID09PSAnZnVuY3Rpb24nLCAnbnVtYmVyIGxvY2FsaXplciBgcGFyc2UoLi4pYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICAvLyBpbnZhcmlhbnQodHlwZW9mIHByZWNpc2lvbiA9PT0gJ2Z1bmN0aW9uJ1xuICAvLyAgICwgJ251bWJlciBsb2NhbGl6ZXIgYHByZWNpc2lvbiguLilgIG11c3QgYmUgYSBmdW5jdGlvbicpXG5cbiAgY2hlY2tGb3JtYXRzKFJFUVVJUkVEX05VTUJFUl9GT1JNQVRTLCBmb3JtYXRzKTtcblxuICB0aGlzLnByb3BUeXBlID0gcHJvcFR5cGUgfHwgbG9jYWxlUHJvcFR5cGU7XG4gIHRoaXMuZm9ybWF0cyA9IGZvcm1hdHM7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RyLCBjdWx0dXJlKSB7XG4gICAgcmV0dXJuIF9mb3JtYXQoX3RoaXMsIGZvcm1hdCwgdmFsdWUsIHN0ciwgY3VsdHVyZSk7XG4gIH07XG5cbiAgdGhpcy5wYXJzZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY3VsdHVyZSkge1xuICAgIHZhciByZXN1bHQgPSBwYXJzZS5jYWxsKF90aGlzLCB2YWx1ZSwgY3VsdHVyZSk7XG5cbiAgICBpbnZhcmlhbnQocmVzdWx0ID09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicsICdudW1iZXIgbG9jYWxpemVyIGBwYXJzZSguLilgIG11c3QgcmV0dXJuIGEgbnVtYmVyLCBudWxsLCBvciB1bmRlZmluZWQnKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG52YXIgRGF0ZUxvY2FsaXplciA9IGZ1bmN0aW9uIERhdGVMb2NhbGl6ZXIoc3BlYykge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZUxvY2FsaXplcik7XG5cbiAgaW52YXJpYW50KHR5cGVvZiBzcGVjLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJywgJ2RhdGUgbG9jYWxpemVyIGBmb3JtYXQoLi4pYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzcGVjLnBhcnNlID09PSAnZnVuY3Rpb24nLCAnZGF0ZSBsb2NhbGl6ZXIgYHBhcnNlKC4uKWAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIGludmFyaWFudCh0eXBlb2Ygc3BlYy5maXJzdE9mV2VlayA9PT0gJ2Z1bmN0aW9uJywgJ2RhdGUgbG9jYWxpemVyIGBmaXJzdE9mV2VlayguLilgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICBjaGVja0Zvcm1hdHMoUkVRVUlSRURfREFURV9GT1JNQVRTLCBzcGVjLmZvcm1hdHMpO1xuXG4gIHRoaXMucHJvcFR5cGUgPSBzcGVjLnByb3BUeXBlIHx8IGxvY2FsZVByb3BUeXBlO1xuICB0aGlzLmZvcm1hdHMgPSBzcGVjLmZvcm1hdHM7XG4gIHRoaXMuc3RhcnRPZldlZWsgPSBzcGVjLmZpcnN0T2ZXZWVrO1xuXG4gIHRoaXMuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpIHtcbiAgICByZXR1cm4gX2Zvcm1hdChfdGhpczIsIHNwZWMuZm9ybWF0LCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlKTtcbiAgfTtcblxuICB0aGlzLnBhcnNlID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUpIHtcbiAgICB2YXIgcmVzdWx0ID0gc3BlYy5wYXJzZS5jYWxsKF90aGlzMiwgdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSk7XG5cbiAgICBpbnZhcmlhbnQocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0IGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4ocmVzdWx0LmdldFRpbWUoKSksICdkYXRlIGxvY2FsaXplciBgcGFyc2UoLi4pYCBtdXN0IHJldHVybiBhIHZhbGlkIERhdGUsIG51bGwsIG9yIHVuZGVmaW5lZCcpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOdW1iZXJMb2NhbGl6ZXI6IE51bWJlckxvY2FsaXplciwgRGF0ZUxvY2FsaXplcjogRGF0ZUxvY2FsaXplclxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGxvY2FsaXplcnMgPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKS5sb2NhbGUsXG4gICAgZmlsdGVycyA9IHJlcXVpcmUoJy4vZmlsdGVyJyk7XG5cbnZhciBmaWx0ZXJUeXBlcyA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICByZXR1cm4gaSAhPT0gJ2ZpbHRlcic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgZWxlbWVudFR5cGU6IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcblxuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocHJvcHNbcHJvcE5hbWVdKSkgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzcGVjaWZpZWQgaW4gIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgKyAnIEV4cGVjdGVkIGFuIEVsZW1lbnQgYHR5cGVgLCBub3QgYW4gYWN0dWFsIEVsZW1lbnQnKTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICdzdHJpbmcnKSByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIHNwZWNpZmllZCBpbiAgYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArICcgRXhwZWN0ZWQgYW4gRWxlbWVudCBgdHlwZWAgc3VjaCBhcyBhIHRhZyBuYW1lIG9yIHJldHVybiB2YWx1ZSBvZiBSZWFjdC5jcmVhdGVDbGFzcyguLi4pJyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KSxcblxuICBudW1iZXJGb3JtYXQ6IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2xvY2FsaXplcnMkbnVtYmVyO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChfbG9jYWxpemVycyRudW1iZXIgPSBsb2NhbGl6ZXJzLm51bWJlcikucHJvcFR5cGUuYXBwbHkoX2xvY2FsaXplcnMkbnVtYmVyLCBhcmdzKTtcbiAgfSksXG5cbiAgZGF0ZUZvcm1hdDogY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfbG9jYWxpemVycyRkYXRlO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKF9sb2NhbGl6ZXJzJGRhdGUgPSBsb2NhbGl6ZXJzLmRhdGUpLnByb3BUeXBlLmFwcGx5KF9sb2NhbGl6ZXJzJGRhdGUsIGFyZ3MpO1xuICB9KSxcblxuICBhY2Nlc3NvcjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgUmVhY3QuUHJvcFR5cGVzLmZ1bmNdKSxcblxuICBtZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuZnVuYywgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmZ1bmMsIFJlYWN0LlByb3BUeXBlcy5ib29sLCBSZWFjdC5Qcm9wVHlwZXMub25lT2YoZmlsdGVyVHlwZXMpXSlcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG5cbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24pIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCB3YXMgbm90IHNwZWNpZmllZCBpbiAgYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn0iLCIvLyBteSB0ZXN0cyBpbiBpZTExL2Nocm9tZS9GRiBpbmRpY2F0ZSB0aGF0IGtleURvd24gcmVwZWF0c1xuLy8gYXQgYWJvdXQgMzVtcysvLSA1bXMgYWZ0ZXIgYW4gaW5pdGlhbCA1MDBtcyBkZWxheS4gY2FsbGJhY2sgZmlyZXMgb24gdGhlIGxlYWRpbmcgZWRnZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFJlcGVhdGVyKGNhbGxiYWNrKSB7XG4gIHZhciBpZCxcbiAgICAgIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH07XG5cbiAgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsKCk7XG4gICAgaWQgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgMzUpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sIDUwMCk7XG5cbiAgcmV0dXJuIGNhbmNlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRlcjtcbi8vZmlyZSBhZnRlciBldmVyeXRoaW5nIGluIGNhc2UgdGhlIHVzZXIgY2FuY2VscyBvbiB0aGUgZmlyc3QgY2FsbCIsIid1c2Ugc3RyaWN0JztcbnZhciBNRVRIT0RTID0gWyduZXh0JywgJ3ByZXYnLCAnZmlyc3QnLCAnbGFzdCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZhbGlkYXRlTGlzdENvbXBvbmVudChsaXN0KSB7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBNRVRIT0RTLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgcmV0dXJuIGFzc2VydCh0eXBlb2YgbGlzdFttZXRob2RdID09PSAnZnVuY3Rpb24nLCAnTGlzdCBjb21wb25lbnRzIG11c3QgaW1wbGVtZW50IGEgYCcgKyBtZXRob2QgKyAnKClgIG1ldGhvZCcpO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cpIHtcbiAgdmFyIGVycm9yO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgZXJyb3IgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKXtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuIiwidmFyIE1JTEkgICAgPSAnbWlsbGlzZWNvbmRzJ1xyXG4gICwgU0VDT05EUyA9ICdzZWNvbmRzJ1xyXG4gICwgTUlOVVRFUyA9ICdtaW51dGVzJ1xyXG4gICwgSE9VUlMgICA9ICdob3VycydcclxuICAsIERBWSAgICAgPSAnZGF5J1xyXG4gICwgV0VFSyAgICA9ICd3ZWVrJ1xyXG4gICwgTU9OVEggICA9ICdtb250aCdcclxuICAsIFlFQVIgICAgPSAneWVhcidcclxuICAsIERFQ0FERSAgPSAnZGVjYWRlJ1xyXG4gICwgQ0VOVFVSWSA9ICdjZW50dXJ5JztcclxuXHJcbnZhciBkYXRlcyA9IG1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICBhZGQ6IGZ1bmN0aW9uKGRhdGUsIG51bSwgdW5pdCkge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXHJcblxyXG4gICAgc3dpdGNoICh1bml0KXtcclxuICAgICAgY2FzZSBNSUxJOlxyXG4gICAgICBjYXNlIFNFQ09ORFM6XHJcbiAgICAgIGNhc2UgTUlOVVRFUzpcclxuICAgICAgY2FzZSBIT1VSUzpcclxuICAgICAgY2FzZSBZRUFSOlxyXG4gICAgICAgIHJldHVybiBkYXRlc1t1bml0XShkYXRlLCBkYXRlc1t1bml0XShkYXRlKSArIG51bSlcclxuICAgICAgY2FzZSBEQVk6XHJcbiAgICAgICAgcmV0dXJuIGRhdGVzLmRhdGUoZGF0ZSwgZGF0ZXMuZGF0ZShkYXRlKSArIG51bSlcclxuICAgICAgY2FzZSBXRUVLOlxyXG4gICAgICAgIHJldHVybiBkYXRlcy5kYXRlKGRhdGUsIGRhdGVzLmRhdGUoZGF0ZSkgKyAoNyAqIG51bSkpXHJcbiAgICAgIGNhc2UgTU9OVEg6XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoTWF0aChkYXRlLCBudW0pXHJcbiAgICAgIGNhc2UgREVDQURFOlxyXG4gICAgICAgIHJldHVybiBkYXRlcy55ZWFyKGRhdGUsIGRhdGVzLnllYXIoZGF0ZSkgKyAobnVtICogMTApKVxyXG4gICAgICBjYXNlIENFTlRVUlk6XHJcbiAgICAgICAgcmV0dXJuIGRhdGVzLnllYXIoZGF0ZSwgZGF0ZXMueWVhcihkYXRlKSArIChudW0gKiAxMDApKVxyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdW5pdHM6IFwiJyArIHVuaXQgKyAnXCInKVxyXG4gIH0sXHJcblxyXG4gIHN1YnRyYWN0OiBmdW5jdGlvbihkYXRlLCBudW0sIHVuaXQpIHtcclxuICAgIHJldHVybiBkYXRlcy5hZGQoZGF0ZSwgLW51bSwgdW5pdClcclxuICB9LFxyXG5cclxuICBzdGFydE9mOiBmdW5jdGlvbihkYXRlLCB1bml0LCBmaXJzdE9mV2Vlaykge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXHJcblxyXG4gICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgIGNhc2UgJ2NlbnR1cnknOlxyXG4gICAgICBjYXNlICdkZWNhZGUnOlxyXG4gICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICAgIGRhdGUgPSBkYXRlcy5tb250aChkYXRlLCAwKTtcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgZGF0ZSA9IGRhdGVzLmRhdGUoZGF0ZSwgMSk7XHJcbiAgICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgZGF0ZSA9IGRhdGVzLmhvdXJzKGRhdGUsIDApO1xyXG4gICAgICBjYXNlICdob3Vycyc6XHJcbiAgICAgICAgICBkYXRlID0gZGF0ZXMubWludXRlcyhkYXRlLCAwKTtcclxuICAgICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICAgICAgICBkYXRlID0gZGF0ZXMuc2Vjb25kcyhkYXRlLCAwKTtcclxuICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICBkYXRlID0gZGF0ZXMubWlsbGlzZWNvbmRzKGRhdGUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1bml0ID09PSBERUNBREUpXHJcbiAgICAgIGRhdGUgPSBkYXRlcy5zdWJ0cmFjdChkYXRlLCBkYXRlcy55ZWFyKGRhdGUpICUgMTAsICd5ZWFyJylcclxuXHJcbiAgICBpZiAodW5pdCA9PT0gQ0VOVFVSWSlcclxuICAgICAgZGF0ZSA9IGRhdGVzLnN1YnRyYWN0KGRhdGUsIGRhdGVzLnllYXIoZGF0ZSkgJSAxMDAsICd5ZWFyJylcclxuXHJcbiAgICBpZiAodW5pdCA9PT0gV0VFSylcclxuICAgICAgZGF0ZSA9IGRhdGVzLndlZWtkYXkoZGF0ZSwgMCwgZmlyc3RPZldlZWspO1xyXG5cclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSxcclxuXHJcbiAgZW5kT2Y6IGZ1bmN0aW9uKGRhdGUsIHVuaXQsIGZpcnN0T2ZXZWVrKXtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxyXG4gICAgZGF0ZSA9IGRhdGVzLnN0YXJ0T2YoZGF0ZSwgdW5pdCwgZmlyc3RPZldlZWspXHJcbiAgICBkYXRlID0gZGF0ZXMuYWRkKGRhdGUsIDEsIHVuaXQpXHJcbiAgICBkYXRlID0gZGF0ZXMuc3VidHJhY3QoZGF0ZSwgMSwgTUlMSSlcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSxcclxuXHJcbiAgZXE6ICBjcmVhdGVDb21wYXJlcihmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEgPT09IGIgfSksXHJcbiAgbmVxOiBjcmVhdGVDb21wYXJlcihmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEgIT09IGIgfSksXHJcbiAgZ3Q6ICBjcmVhdGVDb21wYXJlcihmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEgPiBiIH0pLFxyXG4gIGd0ZTogY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhID49IGIgfSksXHJcbiAgbHQ6ICBjcmVhdGVDb21wYXJlcihmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEgPCBiIH0pLFxyXG4gIGx0ZTogY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhIDw9IGIgfSksXHJcblxyXG4gIG1pbjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZShNYXRoLm1pbi5hcHBseShNYXRoLCBhcmd1bWVudHMpKVxyXG4gIH0sXHJcblxyXG4gIG1heDogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZShNYXRoLm1heC5hcHBseShNYXRoLCBhcmd1bWVudHMpKVxyXG4gIH0sXHJcblxyXG4gIGluUmFuZ2U6IGZ1bmN0aW9uKGRheSwgbWluLCBtYXgsIHVuaXQpe1xyXG4gICAgdW5pdCA9IHVuaXQgfHwgJ2RheSdcclxuXHJcbiAgICByZXR1cm4gKCFtaW4gfHwgZGF0ZXMuZ3RlKGRheSwgbWluLCB1bml0KSlcclxuICAgICAgICAmJiAoIW1heCB8fCBkYXRlcy5sdGUoZGF5LCBtYXgsIHVuaXQpKVxyXG4gIH0sXHJcblxyXG4gIG1pbGxpc2Vjb25kczogICBjcmVhdGVBY2Nlc3NvcignTWlsbGlzZWNvbmRzJyksXHJcbiAgc2Vjb25kczogICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdTZWNvbmRzJyksXHJcbiAgbWludXRlczogICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdNaW51dGVzJyksXHJcbiAgaG91cnM6ICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdIb3VycycpLFxyXG4gIGRheTogICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcignRGF5JyksXHJcbiAgZGF0ZTogICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdEYXRlJyksXHJcbiAgbW9udGg6ICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdNb250aCcpLFxyXG4gIHllYXI6ICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcignRnVsbFllYXInKSxcclxuXHJcbiAgZGVjYWRlOiBmdW5jdGlvbiAoZGF0ZSwgdmFsKSB7XHJcbiAgICByZXR1cm4gdmFsID09PSB1bmRlZmluZWRcclxuICAgICAgPyBkYXRlcy55ZWFyKGRhdGVzLnN0YXJ0T2YoZGF0ZSwgREVDQURFKSlcclxuICAgICAgOiBkYXRlcy5hZGQoZGF0ZSwgdmFsICsgMTAsIFlFQVIpO1xyXG4gIH0sXHJcblxyXG4gIGNlbnR1cnk6IGZ1bmN0aW9uIChkYXRlLCB2YWwpIHtcclxuICAgIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGRhdGVzLnllYXIoZGF0ZXMuc3RhcnRPZihkYXRlLCBDRU5UVVJZKSlcclxuICAgICAgOiBkYXRlcy5hZGQoZGF0ZSwgdmFsICsgMTAwLCBZRUFSKTtcclxuICB9LFxyXG5cclxuICB3ZWVrZGF5OiBmdW5jdGlvbiAoZGF0ZSwgdmFsLCBmaXJzdERheSkge1xyXG4gICAgICB2YXIgd2Vla2RheSA9IChkYXRlcy5kYXkoZGF0ZSkgKyA3IC0gKGZpcnN0RGF5IHx8IDApICkgJSA3O1xyXG5cclxuICAgICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB3ZWVrZGF5XHJcbiAgICAgICAgOiBkYXRlcy5hZGQoZGF0ZSwgdmFsIC0gd2Vla2RheSwgREFZKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb250aE1hdGgoZGF0ZSwgdmFsKXtcclxuICB2YXIgY3VycmVudCA9IGRhdGVzLm1vbnRoKGRhdGUpXHJcbiAgICAsIG5ld01vbnRoICA9IChjdXJyZW50ICsgdmFsKTtcclxuXHJcbiAgICBkYXRlID0gZGF0ZXMubW9udGgoZGF0ZSwgbmV3TW9udGgpXHJcblxyXG4gICAgaWYgKG5ld01vbnRoIDwgMCApIG5ld01vbnRoID0gMTIgKyB2YWxcclxuXHJcbiAgICAvL21vbnRoIHJvbGxvdmVyXHJcbiAgICBpZiAoIGRhdGVzLm1vbnRoKGRhdGUpICE9PSAoIG5ld01vbnRoICUgMTIpKVxyXG4gICAgICBkYXRlID0gZGF0ZXMuZGF0ZShkYXRlLCAwKSAvL21vdmUgdG8gbGFzdCBvZiBtb250aFxyXG5cclxuICAgIHJldHVybiBkYXRlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yKG1ldGhvZCl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGUsIHZhbCl7XHJcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybiBkYXRlWydnZXQnICsgbWV0aG9kXSgpXHJcblxyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXHJcbiAgICBkYXRlWydzZXQnICsgbWV0aG9kXSh2YWwpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29tcGFyZXIob3BlcmF0b3IpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIHVuaXQsIG1heWJlRm9XKSB7XHJcbiAgICByZXR1cm4gb3BlcmF0b3IoK2RhdGVzLnN0YXJ0T2YoYSwgdW5pdCwgbWF5YmVGb1cpLCArZGF0ZXMuc3RhcnRPZihiLCB1bml0LCBtYXliZUZvVykpXHJcbiAgfTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xudmFyIG9mZiA9IGZ1bmN0aW9uIG9mZigpIHt9O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG5cbiAgb2ZmID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH07ZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9mZjsiLCIndXNlIHN0cmljdCc7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xudmFyIG9uID0gZnVuY3Rpb24gb24oKSB7fTtcblxuaWYgKGNhblVzZURPTSkge1xuICBvbiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9O2Vsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvbjsiLCIndXNlIHN0cmljdCc7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgY29udGFpbnMgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcm9vdCA9IGNhblVzZURPTSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgcmV0dXJuIHJvb3QgJiYgcm9vdC5jb250YWlucyA/IGZ1bmN0aW9uIChjb250ZXh0LCBub2RlKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuY29udGFpbnMobm9kZSk7XG4gIH0gOiByb290ICYmIHJvb3QuY29tcGFyZURvY3VtZW50UG9zaXRpb24gPyBmdW5jdGlvbiAoY29udGV4dCwgbm9kZSkge1xuICAgIHJldHVybiBjb250ZXh0ID09PSBub2RlIHx8ICEhKGNvbnRleHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNik7XG4gIH0gOiBmdW5jdGlvbiAoY29udGV4dCwgbm9kZSkge1xuICAgIGlmIChub2RlKSBkbyB7XG4gICAgICBpZiAobm9kZSA9PT0gY29udGV4dCkgcmV0dXJuIHRydWU7XG4gICAgfSB3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9mZnNldCA9IHJlcXVpcmUoJy4vb2Zmc2V0JyksXG4gICAgZ2V0V2luZG93ID0gcmVxdWlyZSgnLi9pc1dpbmRvdycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlaWdodChub2RlLCBjbGllbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgcmV0dXJuIHdpbiA/IHdpbi5pbm5lckhlaWdodCA6IGNsaWVudCA/IG5vZGUuY2xpZW50SGVpZ2h0IDogb2Zmc2V0KG5vZGUpLmhlaWdodDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHJldHVybiBub2RlID09PSBub2RlLndpbmRvdyA/IG5vZGUgOiBub2RlLm5vZGVUeXBlID09PSA5ID8gbm9kZS5kZWZhdWx0VmlldyB8fCBub2RlLnBhcmVudFdpbmRvdyA6IGZhbHNlO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY29udGFpbnMgPSByZXF1aXJlKCcuL2NvbnRhaW5zJyksXG4gICAgZ2V0V2luZG93ID0gcmVxdWlyZSgnLi9pc1dpbmRvdycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG9mZnNldChub2RlKSB7XG4gIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQsXG4gICAgICBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBib3ggPSB7IHRvcDogMCwgbGVmdDogMCwgaGVpZ2h0OiAwLCB3aWR0aDogMCB9O1xuXG4gIGlmICghZG9jKSByZXR1cm47XG5cbiAgaWYgKCFjb250YWlucyhkb2NFbGVtLCBub2RlKSkgcmV0dXJuIGJveDtcblxuICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHVuZGVmaW5lZCkgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB2YXIgd2luID0gZ2V0V2luZG93KGRvYyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IGJveC50b3AgKyAod2luLnBhZ2VZT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsVG9wKSAtIChkb2NFbGVtLmNsaWVudFRvcCB8fCAwKSxcbiAgICBsZWZ0OiBib3gubGVmdCArICh3aW4ucGFnZVhPZmZzZXQgfHwgZG9jRWxlbS5zY3JvbGxMZWZ0KSAtIChkb2NFbGVtLmNsaWVudExlZnQgfHwgMCksXG4gICAgd2lkdGg6IGJveC53aWR0aCB8fCBub2RlLm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogYm94LmhlaWdodCB8fCBub2RlLm9mZnNldEhlaWdodFxuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjc3MgPSByZXF1aXJlKCcuLi9zdHlsZScpLFxuICAgIGhlaWdodCA9IHJlcXVpcmUoJy4vaGVpZ2h0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Nyb2xsUHJhcmVudChub2RlKSB7XG4gIHZhciBwb3NpdGlvbiA9IGNzcyhub2RlLCAncG9zaXRpb24nKSxcbiAgICAgIGV4Y2x1ZGVTdGF0aWMgPSBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyxcbiAgICAgIG93bmVyRG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIG93bmVyRG9jIHx8IGRvY3VtZW50O1xuXG4gIHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOSkge1xuXG4gICAgdmFyIGlzU3RhdGljID0gZXhjbHVkZVN0YXRpYyAmJiBjc3Mobm9kZSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnLFxuICAgICAgICBzdHlsZSA9IGNzcyhub2RlLCAnb3ZlcmZsb3cnKSArIGNzcyhub2RlLCAnb3ZlcmZsb3cteScpICsgY3NzKG5vZGUsICdvdmVyZmxvdy14Jyk7XG5cbiAgICBpZiAoaXNTdGF0aWMpIGNvbnRpbnVlO1xuXG4gICAgaWYgKC8oYXV0b3xzY3JvbGwpLy50ZXN0KHN0eWxlKSAmJiBoZWlnaHQobm9kZSkgPCBub2RlLnNjcm9sbEhlaWdodCkgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnQ7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRXaW5kb3cgPSByZXF1aXJlKCcuL2lzV2luZG93Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Nyb2xsVG9wKG5vZGUsIHZhbCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuXG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHdpbiA/ICdwYWdlWU9mZnNldCcgaW4gd2luID8gd2luLnBhZ2VZT2Zmc2V0IDogd2luLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBub2RlLnNjcm9sbFRvcDtcblxuICBpZiAod2luKSB3aW4uc2Nyb2xsVG8oJ3BhZ2VYT2Zmc2V0JyBpbiB3aW4gPyB3aW4ucGFnZVhPZmZzZXQgOiB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIHZhbCk7ZWxzZSBub2RlLnNjcm9sbFRvcCA9IHZhbDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2Zmc2V0ID0gcmVxdWlyZSgnLi9vZmZzZXQnKSxcbiAgICBnZXRXaW5kb3cgPSByZXF1aXJlKCcuL2lzV2luZG93Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2lkdGgobm9kZSwgY2xpZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHJldHVybiB3aW4gPyB3aW4uaW5uZXJXaWR0aCA6IGNsaWVudCA/IG5vZGUuY2xpZW50V2lkdGggOiBvZmZzZXQobm9kZSkud2lkdGg7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gRWxlbWVudCBwYXNzZWQgdG8gYGdldENvbXB1dGVkU3R5bGUoKWBcIik7XG4gIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG5cbiAgcmV0dXJuIFwiZGVmYXVsdFZpZXdcIiBpbiBkb2MgPyBkb2MuZGVmYXVsdFZpZXcub3BlbmVyID8gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHsgLy9pZSA4IFwibWFnaWNcIlxuICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUocHJvcCkge1xuICAgICAgdmFyIHJlID0gLyhcXC0oW2Etel0pezF9KS9nO1xuICAgICAgaWYgKHByb3AgPT0gXCJmbG9hdFwiKSBwcm9wID0gXCJzdHlsZUZsb2F0XCI7XG4gICAgICBpZiAocmUudGVzdChwcm9wKSkgcHJvcCA9IHByb3AucmVwbGFjZShyZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzJdLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5vZGUuY3VycmVudFN0eWxlW3Byb3BdIHx8IG51bGw7XG4gICAgfVxuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpLFxuICAgIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJy4uL3V0aWwvaHlwaGVuYXRlU3R5bGUnKSxcbiAgICBfZ2V0Q29tcHV0ZWRTdHlsZSA9IHJlcXVpcmUoJy4vZ2V0Q29tcHV0ZWRTdHlsZScpLFxuICAgIHJlbW92ZVN0eWxlID0gcmVxdWlyZSgnLi9yZW1vdmVTdHlsZScpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHlsZShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIGNzcyA9ICcnLFxuICAgICAgcHJvcHMgPSBwcm9wZXJ0eTtcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbm9kZS5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO2Vsc2UgKHByb3BzID0ge30pW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSBpZiAoaGFzLmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAhcHJvcHNba2V5XSAmJiBwcm9wc1trZXldICE9PSAwID8gcmVtb3ZlU3R5bGUobm9kZSwgaHlwaGVuYXRlKGtleSkpIDogY3NzICs9IGh5cGhlbmF0ZShrZXkpICsgJzonICsgcHJvcHNba2V5XSArICc7JztcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBjc3M7XG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmVTdHlsZShub2RlLCBrZXkpIHtcbiAgcmV0dXJuICdyZW1vdmVQcm9wZXJ0eScgaW4gbm9kZS5zdHlsZSA/IG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KSA6IG5vZGUuc3R5bGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCcuLi91dGlsL2luRE9NJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nLFxuICAgIHRyYW5zaXRpb24gPSB7fSxcbiAgICB0cmFuc2l0aW9uVGltaW5nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uUHJvcGVydHksXG4gICAgdHJhbnNpdGlvbkRlbGF5O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIHRyYW5zaXRpb24gPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHRyYW5zZm9ybSA9IHRyYW5zaXRpb24ucHJlZml4ICsgdHJhbnNmb3JtO1xuXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHRyYW5zaXRpb24ucHJlZml4ICsgJ3RyYW5zaXRpb24tcHJvcGVydHknO1xuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uLnByZWZpeCArICd0cmFuc2l0aW9uLWR1cmF0aW9uJztcbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbi5wcmVmaXggKyAndHJhbnNpdGlvbi1kZWxheSc7XG4gIHRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uLnByZWZpeCArICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgZW5kOiB0cmFuc2l0aW9uLmVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpIHtcbiAgdmFyIGVuZEV2ZW50LFxuICAgICAgcHJlZml4ID0gJycsXG4gICAgICB0cmFuc2l0aW9ucyA9IHtcbiAgICBPOiAnb3RyYW5zaXRpb25lbmQnLFxuICAgIE1vejogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIG1zOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgdmVuZG9yIGluIHRyYW5zaXRpb25zKSBpZiAoaGFzLmNhbGwodHJhbnNpdGlvbnMsIHZlbmRvcikpIHtcbiAgICBpZiAoZWxlbWVudC5zdHlsZVt2ZW5kb3IgKyAnVHJhbnNpdGlvblByb3BlcnR5J10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4ID0gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICBlbmRFdmVudCA9IHRyYW5zaXRpb25zW3ZlbmRvcl07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWVuZEV2ZW50ICYmIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ICE9PSB1bmRlZmluZWQpIGVuZEV2ZW50ID0gJ3RyYW5zaXRpb25lbmQnO1xuXG4gIHJldHVybiB7IGVuZDogZW5kRXZlbnQsIHByZWZpeDogcHJlZml4IH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBySHlwaGVuID0gLy0oLikvZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJIeXBoZW4sIGZ1bmN0aW9uIChfLCBjaHIpIHtcbiAgICByZXR1cm4gY2hyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufTsiLCIvKipcclxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvY2FtZWxpemVTdHlsZU5hbWUuanNcclxuICovXG5cbid1c2Ugc3RyaWN0JztcbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gY2FtZWxpemUoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJVcHBlciwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59OyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgaHlwaGVuYXRlID0gcmVxdWlyZShcIi4vaHlwaGVuYXRlXCIpO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBoeXBoZW5hdGUoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgXCItbXMtXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgnLi9pbkRPTScpO1xuXG52YXIgdmVuZG9ycyA9IFsnJywgJ3dlYmtpdCcsICdtb3onLCAnbycsICdtcyddLFxuICAgIGNhbmNlbCA9ICdjbGVhclRpbWVvdXQnLFxuICAgIHJhZiA9IGZhbGxiYWNrLFxuICAgIGNvbXBhdFJhZjtcblxudmFyIGdldEtleSA9IGZ1bmN0aW9uIGdldEtleSh2ZW5kb3IsIGspIHtcbiAgcmV0dXJuIHZlbmRvciArICghdmVuZG9yID8gayA6IGtbMF0udG9VcHBlckNhc2UoKSArIGsuc3Vic3RyKDEpKSArICdBbmltYXRpb25GcmFtZSc7XG59O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIHZlbmRvcnMuc29tZShmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgdmFyIHJhZktleSA9IGdldEtleSh2ZW5kb3IsICdyZXF1ZXN0Jyk7XG5cbiAgICBpZiAocmFmS2V5IGluIHdpbmRvdykge1xuICAgICAgY2FuY2VsID0gZ2V0S2V5KHZlbmRvciwgJ2NhbmNlbCcpO1xuICAgICAgcmV0dXJuIHJhZiA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gd2luZG93W3JhZktleV0oY2IpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vY29tcG9uZW50L3JhZiAqL1xudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKSxcbiAgICAgIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcblxuICBwcmV2ID0gY3VycjtcbiAgcmV0dXJuIHJlcTtcbn1cblxuY29tcGF0UmFmID0gZnVuY3Rpb24gKGNiKSB7XG4gIHJldHVybiByYWYoY2IpO1xufTtcbmNvbXBhdFJhZi5jYW5jZWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIHdpbmRvd1tjYW5jZWxdKGlkKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGF0UmFmOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRPZmZzZXQgPSByZXF1aXJlKCcuLi9xdWVyeS9vZmZzZXQnKSxcbiAgICBoZWlnaHQgPSByZXF1aXJlKCcuLi9xdWVyeS9oZWlnaHQnKSxcbiAgICBnZXRTY3JvbGxQYXJlbnQgPSByZXF1aXJlKCcuLi9xdWVyeS9zY3JvbGxQYXJlbnQnKSxcbiAgICBzY3JvbGxUb3AgPSByZXF1aXJlKCcuLi9xdWVyeS9zY3JvbGxUb3AnKSxcbiAgICByYWYgPSByZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZScpLFxuICAgIGdldFdpbmRvdyA9IHJlcXVpcmUoJy4uL3F1ZXJ5L2lzV2luZG93Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Nyb2xsVG8oc2VsZWN0ZWQsIHNjcm9sbFBhcmVudCkge1xuICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoc2VsZWN0ZWQpLFxuICAgICAgICBwb2ZmID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgbGlzdFNjcm9sbFRvcCxcbiAgICAgICAgc2VsZWN0ZWRUb3AsXG4gICAgICAgIGlzV2luLFxuICAgICAgICBzZWxlY3RlZEhlaWdodCxcbiAgICAgICAgbGlzdEhlaWdodCxcbiAgICAgICAgYm90dG9tO1xuXG4gICAgaWYgKCFzZWxlY3RlZCkgcmV0dXJuO1xuXG4gICAgbGlzdCA9IHNjcm9sbFBhcmVudCB8fCBnZXRTY3JvbGxQYXJlbnQoc2VsZWN0ZWQpO1xuICAgIGlzV2luID0gZ2V0V2luZG93KGxpc3QpO1xuICAgIGxpc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3AobGlzdCk7XG5cbiAgICBsaXN0SGVpZ2h0ID0gaGVpZ2h0KGxpc3QsIHRydWUpO1xuICAgIGlzV2luID0gZ2V0V2luZG93KGxpc3QpO1xuXG4gICAgaWYgKCFpc1dpbikgcG9mZiA9IGdldE9mZnNldChsaXN0KTtcblxuICAgIG9mZnNldCA9IHtcbiAgICAgICAgdG9wOiBvZmZzZXQudG9wIC0gcG9mZi50b3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcG9mZi5sZWZ0LFxuICAgICAgICBoZWlnaHQ6IG9mZnNldC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBvZmZzZXQud2lkdGhcbiAgICB9O1xuXG4gICAgc2VsZWN0ZWRIZWlnaHQgPSBvZmZzZXQuaGVpZ2h0O1xuICAgIHNlbGVjdGVkVG9wID0gb2Zmc2V0LnRvcCArIChpc1dpbiA/IDAgOiBsaXN0U2Nyb2xsVG9wKTtcbiAgICBib3R0b20gPSBzZWxlY3RlZFRvcCArIHNlbGVjdGVkSGVpZ2h0O1xuXG4gICAgbGlzdFNjcm9sbFRvcCA9IGxpc3RTY3JvbGxUb3AgPiBzZWxlY3RlZFRvcCA/IHNlbGVjdGVkVG9wIDogYm90dG9tID4gbGlzdFNjcm9sbFRvcCArIGxpc3RIZWlnaHQgPyBib3R0b20gLSBsaXN0SGVpZ2h0IDogbGlzdFNjcm9sbFRvcDtcblxuICAgIHZhciBpZCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxUb3AobGlzdCwgbGlzdFNjcm9sbFRvcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmFmLmNhbmNlbChpZCk7XG4gICAgfTtcbn07IiwiLyohXG4gKiBHbG9iYWxpemVcbiAqXG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qcXVlcnkvZ2xvYmFsaXplXG4gKlxuICogQ29weXJpZ2h0IFNvZnR3YXJlIEZyZWVkb20gQ29uc2VydmFuY3ksIEluYy5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbihmdW5jdGlvbiggd2luZG93LCB1bmRlZmluZWQgKSB7XG5cbnZhciBHbG9iYWxpemUsXG5cdC8vIHByaXZhdGUgdmFyaWFibGVzXG5cdHJlZ2V4SGV4LFxuXHRyZWdleEluZmluaXR5LFxuXHRyZWdleFBhcnNlRmxvYXQsXG5cdHJlZ2V4VHJpbSxcblx0Ly8gcHJpdmF0ZSBKYXZhU2NyaXB0IHV0aWxpdHkgZnVuY3Rpb25zXG5cdGFycmF5SW5kZXhPZixcblx0ZW5kc1dpdGgsXG5cdGV4dGVuZCxcblx0aXNBcnJheSxcblx0aXNGdW5jdGlvbixcblx0aXNPYmplY3QsXG5cdHN0YXJ0c1dpdGgsXG5cdHRyaW0sXG5cdHRydW5jYXRlLFxuXHR6ZXJvUGFkLFxuXHQvLyBwcml2YXRlIEdsb2JhbGl6YXRpb24gdXRpbGl0eSBmdW5jdGlvbnNcblx0YXBwZW5kUHJlT3JQb3N0TWF0Y2gsXG5cdGV4cGFuZEZvcm1hdCxcblx0Zm9ybWF0RGF0ZSxcblx0Zm9ybWF0TnVtYmVyLFxuXHRnZXRUb2tlblJlZ0V4cCxcblx0Z2V0RXJhLFxuXHRnZXRFcmFZZWFyLFxuXHRwYXJzZUV4YWN0LFxuXHRwYXJzZU5lZ2F0aXZlUGF0dGVybjtcblxuLy8gR2xvYmFsIHZhcmlhYmxlIChHbG9iYWxpemUpIG9yIENvbW1vbkpTIG1vZHVsZSAoZ2xvYmFsaXplKVxuR2xvYmFsaXplID0gZnVuY3Rpb24oIGN1bHR1cmVTZWxlY3RvciApIHtcblx0cmV0dXJuIG5ldyBHbG9iYWxpemUucHJvdG90eXBlLmluaXQoIGN1bHR1cmVTZWxlY3RvciApO1xufTtcblxuaWYgKCB0eXBlb2YgcmVxdWlyZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHR0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHR0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHQvLyBBc3N1bWUgQ29tbW9uSlNcblx0bW9kdWxlLmV4cG9ydHMgPSBHbG9iYWxpemU7XG59IGVsc2Uge1xuXHQvLyBFeHBvcnQgYXMgZ2xvYmFsIHZhcmlhYmxlXG5cdHdpbmRvdy5HbG9iYWxpemUgPSBHbG9iYWxpemU7XG59XG5cbkdsb2JhbGl6ZS5jdWx0dXJlcyA9IHt9O1xuXG5HbG9iYWxpemUucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogR2xvYmFsaXplLFxuXHRpbml0OiBmdW5jdGlvbiggY3VsdHVyZVNlbGVjdG9yICkge1xuXHRcdHRoaXMuY3VsdHVyZXMgPSBHbG9iYWxpemUuY3VsdHVyZXM7XG5cdFx0dGhpcy5jdWx0dXJlU2VsZWN0b3IgPSBjdWx0dXJlU2VsZWN0b3I7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbkdsb2JhbGl6ZS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBHbG9iYWxpemUucHJvdG90eXBlO1xuXG4vLyAxLiBXaGVuIGRlZmluaW5nIGEgY3VsdHVyZSwgYWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQgZXhjZXB0IHRoZSBvbmVzIHN0YXRlZCBhcyBvcHRpb25hbC5cbi8vIDIuIEVhY2ggY3VsdHVyZSBzaG91bGQgaGF2ZSBhIFwiLmNhbGVuZGFyc1wiIG9iamVjdCB3aXRoIGF0IGxlYXN0IG9uZSBjYWxlbmRhciBuYW1lZCBcInN0YW5kYXJkXCJcbi8vICAgIHdoaWNoIHNlcnZlcyBhcyB0aGUgZGVmYXVsdCBjYWxlbmRhciBpbiB1c2UgYnkgdGhhdCBjdWx0dXJlLlxuLy8gMy4gRWFjaCBjdWx0dXJlIHNob3VsZCBoYXZlIGEgXCIuY2FsZW5kYXJcIiBvYmplY3Qgd2hpY2ggaXMgdGhlIGN1cnJlbnQgY2FsZW5kYXIgYmVpbmcgdXNlZCxcbi8vICAgIGl0IG1heSBiZSBkeW5hbWljYWxseSBjaGFuZ2VkIGF0IGFueSB0aW1lIHRvIG9uZSBvZiB0aGUgY2FsZW5kYXJzIGluIFwiLmNhbGVuZGFyc1wiLlxuR2xvYmFsaXplLmN1bHR1cmVzWyBcImRlZmF1bHRcIiBdID0ge1xuXHQvLyBBIHVuaXF1ZSBuYW1lIGZvciB0aGUgY3VsdHVyZSBpbiB0aGUgZm9ybSA8bGFuZ3VhZ2UgY29kZT4tPGNvdW50cnkvcmVnaW9uIGNvZGU+XG5cdG5hbWU6IFwiZW5cIixcblx0Ly8gdGhlIG5hbWUgb2YgdGhlIGN1bHR1cmUgaW4gdGhlIGVuZ2xpc2ggbGFuZ3VhZ2Vcblx0ZW5nbGlzaE5hbWU6IFwiRW5nbGlzaFwiLFxuXHQvLyB0aGUgbmFtZSBvZiB0aGUgY3VsdHVyZSBpbiBpdHMgb3duIGxhbmd1YWdlXG5cdG5hdGl2ZU5hbWU6IFwiRW5nbGlzaFwiLFxuXHQvLyB3aGV0aGVyIHRoZSBjdWx0dXJlIHVzZXMgcmlnaHQtdG8tbGVmdCB0ZXh0XG5cdGlzUlRMOiBmYWxzZSxcblx0Ly8gXCJsYW5ndWFnZVwiIGlzIHVzZWQgZm9yIHNvLWNhbGxlZCBcInNwZWNpZmljXCIgY3VsdHVyZXMuXG5cdC8vIEZvciBleGFtcGxlLCB0aGUgY3VsdHVyZSBcImVzLUNMXCIgbWVhbnMgXCJTcGFuaXNoLCBpbiBDaGlsaVwiLlxuXHQvLyBJdCByZXByZXNlbnRzIHRoZSBTcGFuaXNoLXNwZWFraW5nIGN1bHR1cmUgYXMgaXQgaXMgaW4gQ2hpbGksXG5cdC8vIHdoaWNoIG1pZ2h0IGhhdmUgZGlmZmVyZW50IGZvcm1hdHRpbmcgcnVsZXMgb3IgZXZlbiB0cmFuc2xhdGlvbnNcblx0Ly8gdGhhbiBTcGFuaXNoIGluIFNwYWluLiBBIFwibmV1dHJhbFwiIGN1bHR1cmUgaXMgb25lIHRoYXQgaXMgbm90XG5cdC8vIHNwZWNpZmljIHRvIGEgcmVnaW9uLiBGb3IgZXhhbXBsZSwgdGhlIGN1bHR1cmUgXCJlc1wiIGlzIHRoZSBnZW5lcmljXG5cdC8vIFNwYW5pc2ggY3VsdHVyZSwgd2hpY2ggbWF5IGJlIGEgbW9yZSBnZW5lcmFsaXplZCB2ZXJzaW9uIG9mIHRoZSBsYW5ndWFnZVxuXHQvLyB0aGF0IG1heSBvciBtYXkgbm90IGJlIHdoYXQgYSBzcGVjaWZpYyBjdWx0dXJlIGV4cGVjdHMuXG5cdC8vIEZvciBhIHNwZWNpZmljIGN1bHR1cmUgbGlrZSBcImVzLUNMXCIsIHRoZSBcImxhbmd1YWdlXCIgZmllbGQgcmVmZXJzIHRvIHRoZVxuXHQvLyBuZXV0cmFsLCBnZW5lcmljIGN1bHR1cmUgaW5mb3JtYXRpb24gZm9yIHRoZSBsYW5ndWFnZSBpdCBpcyB1c2luZy5cblx0Ly8gVGhpcyBpcyBub3QgYWx3YXlzIGEgc2ltcGxlIG1hdHRlciBvZiB0aGUgc3RyaW5nIGJlZm9yZSB0aGUgZGFzaC5cblx0Ly8gRm9yIGV4YW1wbGUsIHRoZSBcInpoLUhhbnNcIiBjdWx0dXJlIGlzIG5ldHVyYWwgKFNpbXBsaWZpZWQgQ2hpbmVzZSkuXG5cdC8vIEFuZCB0aGUgXCJ6aC1TR1wiIGN1bHR1cmUgaXMgU2ltcGxpZmllZCBDaGluZXNlIGluIFNpbmdhcG9yZSwgd2hvc2UgbGFudWdhZ2Vcblx0Ly8gZmllbGQgaXMgXCJ6aC1DSFNcIiwgbm90IFwiemhcIi5cblx0Ly8gVGhpcyBmaWVsZCBzaG91bGQgYmUgdXNlZCB0byBuYXZpZ2F0ZSBmcm9tIGEgc3BlY2lmaWMgY3VsdHVyZSB0byBpdCdzXG5cdC8vIG1vcmUgZ2VuZXJhbCwgbmV1dHJhbCBjdWx0dXJlLiBJZiBhIGN1bHR1cmUgaXMgYWxyZWFkeSBhcyBnZW5lcmFsIGFzIGl0XG5cdC8vIGNhbiBnZXQsIHRoZSBsYW5ndWFnZSBtYXkgcmVmZXIgdG8gaXRzZWxmLlxuXHRsYW5ndWFnZTogXCJlblwiLFxuXHQvLyBudW1iZXJGb3JtYXQgZGVmaW5lcyBnZW5lcmFsIG51bWJlciBmb3JtYXR0aW5nIHJ1bGVzLCBsaWtlIHRoZSBkaWdpdHMgaW5cblx0Ly8gZWFjaCBncm91cGluZywgdGhlIGdyb3VwIHNlcGFyYXRvciwgYW5kIGhvdyBuZWdhdGl2ZSBudW1iZXJzIGFyZSBkaXNwbGF5ZWQuXG5cdG51bWJlckZvcm1hdDoge1xuXHRcdC8vIFtuZWdhdGl2ZVBhdHRlcm5dXG5cdFx0Ly8gTm90ZSwgbnVtYmVyRm9ybWF0LnBhdHRlcm4gaGFzIG5vIFwicG9zaXRpdmVQYXR0ZXJuXCIgdW5saWtlIHBlcmNlbnQgYW5kIGN1cnJlbmN5LFxuXHRcdC8vIGJ1dCBpcyBzdGlsbCBkZWZpbmVkIGFzIGFuIGFycmF5IGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZW0uXG5cdFx0Ly8gICBuZWdhdGl2ZVBhdHRlcm46IG9uZSBvZiBcIihuKXwtbnwtIG58bi18biAtXCJcblx0XHRwYXR0ZXJuOiBbIFwiLW5cIiBdLFxuXHRcdC8vIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBub3JtYWxseSBzaG93blxuXHRcdGRlY2ltYWxzOiAyLFxuXHRcdC8vIHN0cmluZyB0aGF0IHNlcGFyYXRlcyBudW1iZXIgZ3JvdXBzLCBhcyBpbiAxLDAwMCwwMDBcblx0XHRcIixcIjogXCIsXCIsXG5cdFx0Ly8gc3RyaW5nIHRoYXQgc2VwYXJhdGVzIGEgbnVtYmVyIGZyb20gdGhlIGZyYWN0aW9uYWwgcG9ydGlvbiwgYXMgaW4gMS45OVxuXHRcdFwiLlwiOiBcIi5cIixcblx0XHQvLyBhcnJheSBvZiBudW1iZXJzIGluZGljYXRpbmcgdGhlIHNpemUgb2YgZWFjaCBudW1iZXIgZ3JvdXAuXG5cdFx0Ly8gVE9ETzogbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBhbmQgZXhhbXBsZVxuXHRcdGdyb3VwU2l6ZXM6IFsgMyBdLFxuXHRcdC8vIHN5bWJvbCB1c2VkIGZvciBwb3NpdGl2ZSBudW1iZXJzXG5cdFx0XCIrXCI6IFwiK1wiLFxuXHRcdC8vIHN5bWJvbCB1c2VkIGZvciBuZWdhdGl2ZSBudW1iZXJzXG5cdFx0XCItXCI6IFwiLVwiLFxuXHRcdC8vIHN5bWJvbCB1c2VkIGZvciBOYU4gKE5vdC1BLU51bWJlcilcblx0XHRcIk5hTlwiOiBcIk5hTlwiLFxuXHRcdC8vIHN5bWJvbCB1c2VkIGZvciBOZWdhdGl2ZSBJbmZpbml0eVxuXHRcdG5lZ2F0aXZlSW5maW5pdHk6IFwiLUluZmluaXR5XCIsXG5cdFx0Ly8gc3ltYm9sIHVzZWQgZm9yIFBvc2l0aXZlIEluZmluaXR5XG5cdFx0cG9zaXRpdmVJbmZpbml0eTogXCJJbmZpbml0eVwiLFxuXHRcdHBlcmNlbnQ6IHtcblx0XHRcdC8vIFtuZWdhdGl2ZVBhdHRlcm4sIHBvc2l0aXZlUGF0dGVybl1cblx0XHRcdC8vICAgbmVnYXRpdmVQYXR0ZXJuOiBvbmUgb2YgXCItbiAlfC1uJXwtJW58JS1ufCVuLXxuLSV8biUtfC0lIG58biAlLXwlIG4tfCUgLW58bi0gJVwiXG5cdFx0XHQvLyAgIHBvc2l0aXZlUGF0dGVybjogb25lIG9mIFwibiAlfG4lfCVufCUgblwiXG5cdFx0XHRwYXR0ZXJuOiBbIFwiLW4gJVwiLCBcIm4gJVwiIF0sXG5cdFx0XHQvLyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgbm9ybWFsbHkgc2hvd25cblx0XHRcdGRlY2ltYWxzOiAyLFxuXHRcdFx0Ly8gYXJyYXkgb2YgbnVtYmVycyBpbmRpY2F0aW5nIHRoZSBzaXplIG9mIGVhY2ggbnVtYmVyIGdyb3VwLlxuXHRcdFx0Ly8gVE9ETzogbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBhbmQgZXhhbXBsZVxuXHRcdFx0Z3JvdXBTaXplczogWyAzIF0sXG5cdFx0XHQvLyBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgbnVtYmVyIGdyb3VwcywgYXMgaW4gMSwwMDAsMDAwXG5cdFx0XHRcIixcIjogXCIsXCIsXG5cdFx0XHQvLyBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgYSBudW1iZXIgZnJvbSB0aGUgZnJhY3Rpb25hbCBwb3J0aW9uLCBhcyBpbiAxLjk5XG5cdFx0XHRcIi5cIjogXCIuXCIsXG5cdFx0XHQvLyBzeW1ib2wgdXNlZCB0byByZXByZXNlbnQgYSBwZXJjZW50YWdlXG5cdFx0XHRzeW1ib2w6IFwiJVwiXG5cdFx0fSxcblx0XHRjdXJyZW5jeToge1xuXHRcdFx0Ly8gW25lZ2F0aXZlUGF0dGVybiwgcG9zaXRpdmVQYXR0ZXJuXVxuXHRcdFx0Ly8gICBuZWdhdGl2ZVBhdHRlcm46IG9uZSBvZiBcIigkbil8LSRufCQtbnwkbi18KG4kKXwtbiR8bi0kfG4kLXwtbiAkfC0kIG58biAkLXwkIG4tfCQgLW58bi0gJHwoJCBuKXwobiAkKVwiXG5cdFx0XHQvLyAgIHBvc2l0aXZlUGF0dGVybjogb25lIG9mIFwiJG58biR8JCBufG4gJFwiXG5cdFx0XHRwYXR0ZXJuOiBbIFwiKCRuKVwiLCBcIiRuXCIgXSxcblx0XHRcdC8vIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBub3JtYWxseSBzaG93blxuXHRcdFx0ZGVjaW1hbHM6IDIsXG5cdFx0XHQvLyBhcnJheSBvZiBudW1iZXJzIGluZGljYXRpbmcgdGhlIHNpemUgb2YgZWFjaCBudW1iZXIgZ3JvdXAuXG5cdFx0XHQvLyBUT0RPOiBtb3JlIGRldGFpbGVkIGRlc2NyaXB0aW9uIGFuZCBleGFtcGxlXG5cdFx0XHRncm91cFNpemVzOiBbIDMgXSxcblx0XHRcdC8vIHN0cmluZyB0aGF0IHNlcGFyYXRlcyBudW1iZXIgZ3JvdXBzLCBhcyBpbiAxLDAwMCwwMDBcblx0XHRcdFwiLFwiOiBcIixcIixcblx0XHRcdC8vIHN0cmluZyB0aGF0IHNlcGFyYXRlcyBhIG51bWJlciBmcm9tIHRoZSBmcmFjdGlvbmFsIHBvcnRpb24sIGFzIGluIDEuOTlcblx0XHRcdFwiLlwiOiBcIi5cIixcblx0XHRcdC8vIHN5bWJvbCB1c2VkIHRvIHJlcHJlc2VudCBjdXJyZW5jeVxuXHRcdFx0c3ltYm9sOiBcIiRcIlxuXHRcdH1cblx0fSxcblx0Ly8gY2FsZW5kYXJzIGRlZmluZXMgYWxsIHRoZSBwb3NzaWJsZSBjYWxlbmRhcnMgdXNlZCBieSB0aGlzIGN1bHR1cmUuXG5cdC8vIFRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgZGVmaW5lZCB3aXRoIG5hbWUgXCJzdGFuZGFyZFwiLCBhbmQgaXMgdGhlIGRlZmF1bHRcblx0Ly8gY2FsZW5kYXIgdXNlZCBieSB0aGUgY3VsdHVyZS5cblx0Ly8gQSBjYWxlbmRhciBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBob3cgZGF0ZXMgYXJlIGZvcm1hdHRlZCwgaW5mb3JtYXRpb24gYWJvdXRcblx0Ly8gdGhlIGNhbGVuZGFyJ3MgZXJhcywgYSBzdGFuZGFyZCBzZXQgb2YgdGhlIGRhdGUgZm9ybWF0cyxcblx0Ly8gdHJhbnNsYXRpb25zIGZvciBkYXkgYW5kIG1vbnRoIG5hbWVzLCBhbmQgaWYgdGhlIGNhbGVuZGFyIGlzIG5vdCBiYXNlZCBvbiB0aGUgR3JlZ29yaWFuXG5cdC8vIGNhbGVuZGFyLCBjb252ZXJzaW9uIGZ1bmN0aW9ucyB0byBhbmQgZnJvbSB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyLlxuXHRjYWxlbmRhcnM6IHtcblx0XHRzdGFuZGFyZDoge1xuXHRcdFx0Ly8gbmFtZSB0aGF0IGlkZW50aWZpZXMgdGhlIHR5cGUgb2YgY2FsZW5kYXIgdGhpcyBpc1xuXHRcdFx0bmFtZTogXCJHcmVnb3JpYW5fVVNFbmdsaXNoXCIsXG5cdFx0XHQvLyBzZXBhcmF0b3Igb2YgcGFydHMgb2YgYSBkYXRlIChlLmcuIFwiL1wiIGluIDExLzA1LzE5NTUpXG5cdFx0XHRcIi9cIjogXCIvXCIsXG5cdFx0XHQvLyBzZXBhcmF0b3Igb2YgcGFydHMgb2YgYSB0aW1lIChlLmcuIFwiOlwiIGluIDA1OjQ0IFBNKVxuXHRcdFx0XCI6XCI6IFwiOlwiLFxuXHRcdFx0Ly8gdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjKVxuXHRcdFx0Zmlyc3REYXk6IDAsXG5cdFx0XHRkYXlzOiB7XG5cdFx0XHRcdC8vIGZ1bGwgZGF5IG5hbWVzXG5cdFx0XHRcdG5hbWVzOiBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdLFxuXHRcdFx0XHQvLyBhYmJyZXZpYXRlZCBkYXkgbmFtZXNcblx0XHRcdFx0bmFtZXNBYmJyOiBbIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIgXSxcblx0XHRcdFx0Ly8gc2hvcnRlc3QgZGF5IG5hbWVzXG5cdFx0XHRcdG5hbWVzU2hvcnQ6IFsgXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiIF1cblx0XHRcdH0sXG5cdFx0XHRtb250aHM6IHtcblx0XHRcdFx0Ly8gZnVsbCBtb250aCBuYW1lcyAoMTMgbW9udGhzIGZvciBsdW5hciBjYWxlbmRhcmRzIC0tIDEzdGggbW9udGggc2hvdWxkIGJlIFwiXCIgaWYgbm90IGx1bmFyKVxuXHRcdFx0XHRuYW1lczogWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIsIFwiXCIgXSxcblx0XHRcdFx0Ly8gYWJicmV2aWF0ZWQgbW9udGggbmFtZXNcblx0XHRcdFx0bmFtZXNBYmJyOiBbIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIsIFwiXCIgXVxuXHRcdFx0fSxcblx0XHRcdC8vIEFNIGFuZCBQTSBkZXNpZ25hdG9ycyBpbiBvbmUgb2YgdGhlc2UgZm9ybXM6XG5cdFx0XHQvLyBUaGUgdXN1YWwgdmlldywgYW5kIHRoZSB1cHBlciBhbmQgbG93ZXIgY2FzZSB2ZXJzaW9uc1xuXHRcdFx0Ly8gICBbIHN0YW5kYXJkLCBsb3dlcmNhc2UsIHVwcGVyY2FzZSBdXG5cdFx0XHQvLyBUaGUgY3VsdHVyZSBkb2VzIG5vdCB1c2UgQU0gb3IgUE0gKGxpa2VseSBhbGwgc3RhbmRhcmQgZGF0ZSBmb3JtYXRzIHVzZSAyNCBob3VyIHRpbWUpXG5cdFx0XHQvLyAgIG51bGxcblx0XHRcdEFNOiBbIFwiQU1cIiwgXCJhbVwiLCBcIkFNXCIgXSxcblx0XHRcdFBNOiBbIFwiUE1cIiwgXCJwbVwiLCBcIlBNXCIgXSxcblx0XHRcdGVyYXM6IFtcblx0XHRcdFx0Ly8gZXJhcyBpbiByZXZlcnNlIGNocm9ub2xvZ2ljYWwgb3JkZXIuXG5cdFx0XHRcdC8vIG5hbWU6IHRoZSBuYW1lIG9mIHRoZSBlcmEgaW4gdGhpcyBjdWx0dXJlIChlLmcuIEEuRC4sIEMuRS4pXG5cdFx0XHRcdC8vIHN0YXJ0OiB3aGVuIHRoZSBlcmEgc3RhcnRzIGluIHRpY2tzIChncmVnb3JpYW4sIGdtdCksIG51bGwgaWYgaXQgaXMgdGhlIGVhcmxpZXN0IHN1cHBvcnRlZCBlcmEuXG5cdFx0XHRcdC8vIG9mZnNldDogb2Zmc2V0IGluIHllYXJzIGZyb20gZ3JlZ29yaWFuIGNhbGVuZGFyXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJBLkQuXCIsXG5cdFx0XHRcdFx0XCJzdGFydFwiOiBudWxsLFxuXHRcdFx0XHRcdFwib2Zmc2V0XCI6IDBcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdC8vIHdoZW4gYSB0d28gZGlnaXQgeWVhciBpcyBnaXZlbiwgaXQgd2lsbCBuZXZlciBiZSBwYXJzZWQgYXMgYSBmb3VyIGRpZ2l0XG5cdFx0XHQvLyB5ZWFyIGdyZWF0ZXIgdGhhbiB0aGlzIHllYXIgKGluIHRoZSBhcHByb3ByaWF0ZSBlcmEgZm9yIHRoZSBjdWx0dXJlKVxuXHRcdFx0Ly8gU2V0IGl0IGFzIGEgZnVsbCB5ZWFyIChlLmcuIDIwMjkpIG9yIHVzZSBhbiBvZmZzZXQgZm9ybWF0IHN0YXJ0aW5nIGZyb21cblx0XHRcdC8vIHRoZSBjdXJyZW50IHllYXI6IFwiKzE5XCIgd291bGQgY29ycmVzcG9uZCB0byAyMDI5IGlmIHRoZSBjdXJyZW50IHllYXIgMjAxMC5cblx0XHRcdHR3b0RpZ2l0WWVhck1heDogMjAyOSxcblx0XHRcdC8vIHNldCBvZiBwcmVkZWZpbmVkIGRhdGUgYW5kIHRpbWUgcGF0dGVybnMgdXNlZCBieSB0aGUgY3VsdHVyZVxuXHRcdFx0Ly8gdGhlc2UgcmVwcmVzZW50IHRoZSBmb3JtYXQgc29tZW9uZSBpbiB0aGlzIGN1bHR1cmUgd291bGQgZXhwZWN0XG5cdFx0XHQvLyB0byBzZWUgZ2l2ZW4gdGhlIHBvcnRpb25zIG9mIHRoZSBkYXRlIHRoYXQgYXJlIHNob3duLlxuXHRcdFx0cGF0dGVybnM6IHtcblx0XHRcdFx0Ly8gc2hvcnQgZGF0ZSBwYXR0ZXJuXG5cdFx0XHRcdGQ6IFwiTS9kL3l5eXlcIixcblx0XHRcdFx0Ly8gbG9uZyBkYXRlIHBhdHRlcm5cblx0XHRcdFx0RDogXCJkZGRkLCBNTU1NIGRkLCB5eXl5XCIsXG5cdFx0XHRcdC8vIHNob3J0IHRpbWUgcGF0dGVyblxuXHRcdFx0XHR0OiBcImg6bW0gdHRcIixcblx0XHRcdFx0Ly8gbG9uZyB0aW1lIHBhdHRlcm5cblx0XHRcdFx0VDogXCJoOm1tOnNzIHR0XCIsXG5cdFx0XHRcdC8vIGxvbmcgZGF0ZSwgc2hvcnQgdGltZSBwYXR0ZXJuXG5cdFx0XHRcdGY6IFwiZGRkZCwgTU1NTSBkZCwgeXl5eSBoOm1tIHR0XCIsXG5cdFx0XHRcdC8vIGxvbmcgZGF0ZSwgbG9uZyB0aW1lIHBhdHRlcm5cblx0XHRcdFx0RjogXCJkZGRkLCBNTU1NIGRkLCB5eXl5IGg6bW06c3MgdHRcIixcblx0XHRcdFx0Ly8gbW9udGgvZGF5IHBhdHRlcm5cblx0XHRcdFx0TTogXCJNTU1NIGRkXCIsXG5cdFx0XHRcdC8vIG1vbnRoL3llYXIgcGF0dGVyblxuXHRcdFx0XHRZOiBcInl5eXkgTU1NTVwiLFxuXHRcdFx0XHQvLyBTIGlzIGEgc29ydGFibGUgZm9ybWF0IHRoYXQgZG9lcyBub3QgdmFyeSBieSBjdWx0dXJlXG5cdFx0XHRcdFM6IFwieXl5eVxcdTAwMjctXFx1MDAyN01NXFx1MDAyNy1cXHUwMDI3ZGRcXHUwMDI3VFxcdTAwMjdISFxcdTAwMjc6XFx1MDAyN21tXFx1MDAyNzpcXHUwMDI3c3NcIlxuXHRcdFx0fVxuXHRcdFx0Ly8gb3B0aW9uYWwgZmllbGRzIGZvciBlYWNoIGNhbGVuZGFyOlxuXHRcdFx0Lypcblx0XHRcdG1vbnRoc0dlbml0aXZlOlxuXHRcdFx0XHRTYW1lIGFzIG1vbnRocyBidXQgdXNlZCB3aGVuIHRoZSBkYXkgcHJlY2VlZHMgdGhlIG1vbnRoLlxuXHRcdFx0XHRPbWl0IGlmIHRoZSBjdWx0dXJlIGhhcyBubyBnZW5pdGl2ZSBkaXN0aW5jdGlvbiBpbiBtb250aCBuYW1lcy5cblx0XHRcdFx0Rm9yIGFuIGV4cGxhaW5hdGlvbiBvZiBnZW5pdGl2ZSBtb250aHMsIHNlZSBodHRwOi8vYmxvZ3MubXNkbi5jb20vbWljaGthcC9hcmNoaXZlLzIwMDQvMTIvMjUvMzMyMjU5LmFzcHhcblx0XHRcdGNvbnZlcnQ6XG5cdFx0XHRcdEFsbG93cyBmb3IgdGhlIHN1cHBvcnQgb2Ygbm9uLWdyZWdvcmlhbiBiYXNlZCBjYWxlbmRhcnMuIFRoaXMgY29udmVydCBvYmplY3QgaXMgdXNlZCB0b1xuXHRcdFx0XHR0byBjb252ZXJ0IGEgZGF0ZSB0byBhbmQgZnJvbSBhIGdyZWdvcmlhbiBjYWxlbmRhciBkYXRlIHRvIGhhbmRsZSBwYXJzaW5nIGFuZCBmb3JtYXR0aW5nLlxuXHRcdFx0XHRUaGUgdHdvIGZ1bmN0aW9uczpcblx0XHRcdFx0XHRmcm9tR3JlZ29yaWFuKCBkYXRlIClcblx0XHRcdFx0XHRcdEdpdmVuIHRoZSBkYXRlIGFzIGEgcGFyYW1ldGVyLCByZXR1cm4gYW4gYXJyYXkgd2l0aCBwYXJ0cyBbIHllYXIsIG1vbnRoLCBkYXkgXVxuXHRcdFx0XHRcdFx0Y29ycmVzcG9uZGluZyB0byB0aGUgbm9uLWdyZWdvcmlhbiBiYXNlZCB5ZWFyLCBtb250aCwgYW5kIGRheSBmb3IgdGhlIGNhbGVuZGFyLlxuXHRcdFx0XHRcdHRvR3JlZ29yaWFuKCB5ZWFyLCBtb250aCwgZGF5IClcblx0XHRcdFx0XHRcdEdpdmVuIHRoZSBub24tZ3JlZ29yaWFuIHllYXIsIG1vbnRoLCBhbmQgZGF5LCByZXR1cm4gYSBuZXcgRGF0ZSgpIG9iamVjdFxuXHRcdFx0XHRcdFx0c2V0IHRvIHRoZSBjb3JyZXNwb25kaW5nIGRhdGUgaW4gdGhlIGdyZWdvcmlhbiBjYWxlbmRhci5cblx0XHRcdCovXG5cdFx0fVxuXHR9LFxuXHQvLyBGb3IgbG9jYWxpemVkIHN0cmluZ3Ncblx0bWVzc2FnZXM6IHt9XG59O1xuXG5HbG9iYWxpemUuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF0uY2FsZW5kYXIgPSBHbG9iYWxpemUuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF0uY2FsZW5kYXJzLnN0YW5kYXJkO1xuXG5HbG9iYWxpemUuY3VsdHVyZXMuZW4gPSBHbG9iYWxpemUuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF07XG5cbkdsb2JhbGl6ZS5jdWx0dXJlU2VsZWN0b3IgPSBcImVuXCI7XG5cbi8vXG4vLyBwcml2YXRlIHZhcmlhYmxlc1xuLy9cblxucmVnZXhIZXggPSAvXjB4W2EtZjAtOV0rJC9pO1xucmVnZXhJbmZpbml0eSA9IC9eWytcXC1dP2luZmluaXR5JC9pO1xucmVnZXhQYXJzZUZsb2F0ID0gL15bK1xcLV0/XFxkKlxcLj9cXGQqKGVbK1xcLV0/XFxkKyk/JC87XG5yZWdleFRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLy9cbi8vIHByaXZhdGUgSmF2YVNjcmlwdCB1dGlsaXR5IGZ1bmN0aW9uc1xuLy9cblxuYXJyYXlJbmRleE9mID0gZnVuY3Rpb24oIGFycmF5LCBpdGVtICkge1xuXHRpZiAoIGFycmF5LmluZGV4T2YgKSB7XG5cdFx0cmV0dXJuIGFycmF5LmluZGV4T2YoIGl0ZW0gKTtcblx0fVxuXHRmb3IgKCB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdGlmICggYXJyYXlbaV0gPT09IGl0ZW0gKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufTtcblxuZW5kc1dpdGggPSBmdW5jdGlvbiggdmFsdWUsIHBhdHRlcm4gKSB7XG5cdHJldHVybiB2YWx1ZS5zdWJzdHIoIHZhbHVlLmxlbmd0aCAtIHBhdHRlcm4ubGVuZ3RoICkgPT09IHBhdHRlcm47XG59O1xuXG5leHRlbmQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG5cdGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhaXNGdW5jdGlvbih0YXJnZXQpICkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKG9wdGlvbnMgPSBhcmd1bWVudHNbIGkgXSkgIT0gbnVsbCApIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAoIHRhcmdldCA9PT0gY29weSApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRpZiAoIGRlZXAgJiYgY29weSAmJiAoIGlzT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb3B5SXNBcnJheSApIHtcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc09iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBleHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKCBvYmogKSB7XG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iaiApID09PSBcIltvYmplY3QgQXJyYXldXCI7XG59O1xuXG5pc0Z1bmN0aW9uID0gZnVuY3Rpb24oIG9iaiApIHtcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqICkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn07XG5cbmlzT2JqZWN0ID0gZnVuY3Rpb24oIG9iaiApIHtcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqICkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59O1xuXG5zdGFydHNXaXRoID0gZnVuY3Rpb24oIHZhbHVlLCBwYXR0ZXJuICkge1xuXHRyZXR1cm4gdmFsdWUuaW5kZXhPZiggcGF0dGVybiApID09PSAwO1xufTtcblxudHJpbSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0cmV0dXJuICggdmFsdWUgKyBcIlwiICkucmVwbGFjZSggcmVnZXhUcmltLCBcIlwiICk7XG59O1xuXG50cnVuY2F0ZSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0aWYgKCBpc05hTiggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gTmFOO1xuXHR9XG5cdHJldHVybiBNYXRoWyB2YWx1ZSA8IDAgPyBcImNlaWxcIiA6IFwiZmxvb3JcIiBdKCB2YWx1ZSApO1xufTtcblxuemVyb1BhZCA9IGZ1bmN0aW9uKCBzdHIsIGNvdW50LCBsZWZ0ICkge1xuXHR2YXIgbDtcblx0Zm9yICggbCA9IHN0ci5sZW5ndGg7IGwgPCBjb3VudDsgbCArPSAxICkge1xuXHRcdHN0ciA9ICggbGVmdCA/IChcIjBcIiArIHN0cikgOiAoc3RyICsgXCIwXCIpICk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn07XG5cbi8vXG4vLyBwcml2YXRlIEdsb2JhbGl6YXRpb24gdXRpbGl0eSBmdW5jdGlvbnNcbi8vXG5cbmFwcGVuZFByZU9yUG9zdE1hdGNoID0gZnVuY3Rpb24oIHByZU1hdGNoLCBzdHJpbmdzICkge1xuXHQvLyBhcHBlbmRzIHByZS0gYW5kIHBvc3QtIHRva2VuIG1hdGNoIHN0cmluZ3Mgd2hpbGUgcmVtb3ZpbmcgZXNjYXBlZCBjaGFyYWN0ZXJzLlxuXHQvLyBSZXR1cm5zIGEgc2luZ2xlIHF1b3RlIGNvdW50IHdoaWNoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSB0b2tlbiBvY2N1cnNcblx0Ly8gaW4gYSBzdHJpbmcgbGl0ZXJhbC5cblx0dmFyIHF1b3RlQ291bnQgPSAwLFxuXHRcdGVzY2FwZWQgPSBmYWxzZTtcblx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHByZU1hdGNoLmxlbmd0aDsgaSA8IGlsOyBpKysgKSB7XG5cdFx0dmFyIGMgPSBwcmVNYXRjaC5jaGFyQXQoIGkgKTtcblx0XHRzd2l0Y2ggKCBjICkge1xuXHRcdFx0Y2FzZSBcIlxcJ1wiOlxuXHRcdFx0XHRpZiAoIGVzY2FwZWQgKSB7XG5cdFx0XHRcdFx0c3RyaW5ncy5wdXNoKCBcIlxcJ1wiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cXVvdGVDb3VudCsrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVzY2FwZWQgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiXFxcXFwiOlxuXHRcdFx0XHRpZiAoIGVzY2FwZWQgKSB7XG5cdFx0XHRcdFx0c3RyaW5ncy5wdXNoKCBcIlxcXFxcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVzY2FwZWQgPSAhZXNjYXBlZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRzdHJpbmdzLnB1c2goIGMgKTtcblx0XHRcdFx0ZXNjYXBlZCA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0cmV0dXJuIHF1b3RlQ291bnQ7XG59O1xuXG5leHBhbmRGb3JtYXQgPSBmdW5jdGlvbiggY2FsLCBmb3JtYXQgKSB7XG5cdC8vIGV4cGFuZHMgdW5zcGVjaWZpZWQgb3Igc2luZ2xlIGNoYXJhY3RlciBkYXRlIGZvcm1hdHMgaW50byB0aGUgZnVsbCBwYXR0ZXJuLlxuXHRmb3JtYXQgPSBmb3JtYXQgfHwgXCJGXCI7XG5cdHZhciBwYXR0ZXJuLFxuXHRcdHBhdHRlcm5zID0gY2FsLnBhdHRlcm5zLFxuXHRcdGxlbiA9IGZvcm1hdC5sZW5ndGg7XG5cdGlmICggbGVuID09PSAxICkge1xuXHRcdHBhdHRlcm4gPSBwYXR0ZXJuc1sgZm9ybWF0IF07XG5cdFx0aWYgKCAhcGF0dGVybiApIHtcblx0XHRcdHRocm93IFwiSW52YWxpZCBkYXRlIGZvcm1hdCBzdHJpbmcgXFwnXCIgKyBmb3JtYXQgKyBcIlxcJy5cIjtcblx0XHR9XG5cdFx0Zm9ybWF0ID0gcGF0dGVybjtcblx0fVxuXHRlbHNlIGlmICggbGVuID09PSAyICYmIGZvcm1hdC5jaGFyQXQoMCkgPT09IFwiJVwiICkge1xuXHRcdC8vICVYIGVzY2FwZSBmb3JtYXQgLS0gaW50ZW5kZWQgYXMgYSBjdXN0b20gZm9ybWF0IHN0cmluZyB0aGF0IGlzIG9ubHkgb25lIGNoYXJhY3Rlciwgbm90IGEgYnVpbHQtaW4gZm9ybWF0LlxuXHRcdGZvcm1hdCA9IGZvcm1hdC5jaGFyQXQoIDEgKTtcblx0fVxuXHRyZXR1cm4gZm9ybWF0O1xufTtcblxuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlICkge1xuXHR2YXIgY2FsID0gY3VsdHVyZS5jYWxlbmRhcixcblx0XHRjb252ZXJ0ID0gY2FsLmNvbnZlcnQsXG5cdFx0cmV0O1xuXG5cdGlmICggIWZvcm1hdCB8fCAhZm9ybWF0Lmxlbmd0aCB8fCBmb3JtYXQgPT09IFwiaVwiICkge1xuXHRcdGlmICggY3VsdHVyZSAmJiBjdWx0dXJlLm5hbWUubGVuZ3RoICkge1xuXHRcdFx0aWYgKCBjb252ZXJ0ICkge1xuXHRcdFx0XHQvLyBub24tZ3JlZ29yaWFuIGNhbGVuZGFyLCBzbyB3ZSBjYW5ub3QgdXNlIGJ1aWx0LWluIHRvTG9jYWxlU3RyaW5nKClcblx0XHRcdFx0cmV0ID0gZm9ybWF0RGF0ZSggdmFsdWUsIGNhbC5wYXR0ZXJucy5GLCBjdWx0dXJlICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmFyIGVyYURhdGUgPSBuZXcgRGF0ZSggdmFsdWUuZ2V0VGltZSgpICksXG5cdFx0XHRcdFx0ZXJhID0gZ2V0RXJhKCB2YWx1ZSwgY2FsLmVyYXMgKTtcblx0XHRcdFx0ZXJhRGF0ZS5zZXRGdWxsWWVhciggZ2V0RXJhWWVhcih2YWx1ZSwgY2FsLCBlcmEpICk7XG5cdFx0XHRcdHJldCA9IGVyYURhdGUudG9Mb2NhbGVTdHJpbmcoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXQgPSB2YWx1ZS50b1N0cmluZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0dmFyIGVyYXMgPSBjYWwuZXJhcyxcblx0XHRzb3J0YWJsZSA9IGZvcm1hdCA9PT0gXCJzXCI7XG5cdGZvcm1hdCA9IGV4cGFuZEZvcm1hdCggY2FsLCBmb3JtYXQgKTtcblxuXHQvLyBTdGFydCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuXHRyZXQgPSBbXTtcblx0dmFyIGhvdXIsXG5cdFx0emVyb3MgPSBbIFwiMFwiLCBcIjAwXCIsIFwiMDAwXCIgXSxcblx0XHRmb3VuZERheSxcblx0XHRjaGVja2VkRGF5LFxuXHRcdGRheVBhcnRSZWdFeHAgPSAvKFteZF18XikoZHxkZCkoW15kXXwkKS9nLFxuXHRcdHF1b3RlQ291bnQgPSAwLFxuXHRcdHRva2VuUmVnRXhwID0gZ2V0VG9rZW5SZWdFeHAoKSxcblx0XHRjb252ZXJ0ZWQ7XG5cblx0ZnVuY3Rpb24gcGFkWmVyb3MoIG51bSwgYyApIHtcblx0XHR2YXIgciwgcyA9IG51bSArIFwiXCI7XG5cdFx0aWYgKCBjID4gMSAmJiBzLmxlbmd0aCA8IGMgKSB7XG5cdFx0XHRyID0gKCB6ZXJvc1tjIC0gMl0gKyBzKTtcblx0XHRcdHJldHVybiByLnN1YnN0ciggci5sZW5ndGggLSBjLCBjICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ciA9IHM7XG5cdFx0fVxuXHRcdHJldHVybiByO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFzRGF5KCkge1xuXHRcdGlmICggZm91bmREYXkgfHwgY2hlY2tlZERheSApIHtcblx0XHRcdHJldHVybiBmb3VuZERheTtcblx0XHR9XG5cdFx0Zm91bmREYXkgPSBkYXlQYXJ0UmVnRXhwLnRlc3QoIGZvcm1hdCApO1xuXHRcdGNoZWNrZWREYXkgPSB0cnVlO1xuXHRcdHJldHVybiBmb3VuZERheTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFBhcnQoIGRhdGUsIHBhcnQgKSB7XG5cdFx0aWYgKCBjb252ZXJ0ZWQgKSB7XG5cdFx0XHRyZXR1cm4gY29udmVydGVkWyBwYXJ0IF07XG5cdFx0fVxuXHRcdHN3aXRjaCAoIHBhcnQgKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiBkYXRlLmdldE1vbnRoKCk7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHJldHVybiBkYXRlLmdldERhdGUoKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IFwiSW52YWxpZCBwYXJ0IHZhbHVlIFwiICsgcGFydDtcblx0XHR9XG5cdH1cblxuXHRpZiAoICFzb3J0YWJsZSAmJiBjb252ZXJ0ICkge1xuXHRcdGNvbnZlcnRlZCA9IGNvbnZlcnQuZnJvbUdyZWdvcmlhbiggdmFsdWUgKTtcblx0fVxuXG5cdGZvciAoIDsgOyApIHtcblx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IGluZGV4XG5cdFx0dmFyIGluZGV4ID0gdG9rZW5SZWdFeHAubGFzdEluZGV4LFxuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIG5leHQgcGF0dGVyblxuXHRcdFx0YXIgPSB0b2tlblJlZ0V4cC5leGVjKCBmb3JtYXQgKTtcblxuXHRcdC8vIEFwcGVuZCB0aGUgdGV4dCBiZWZvcmUgdGhlIHBhdHRlcm4gKG9yIHRoZSBlbmQgb2YgdGhlIHN0cmluZyBpZiBub3QgZm91bmQpXG5cdFx0dmFyIHByZU1hdGNoID0gZm9ybWF0LnNsaWNlKCBpbmRleCwgYXIgPyBhci5pbmRleCA6IGZvcm1hdC5sZW5ndGggKTtcblx0XHRxdW90ZUNvdW50ICs9IGFwcGVuZFByZU9yUG9zdE1hdGNoKCBwcmVNYXRjaCwgcmV0ICk7XG5cblx0XHRpZiAoICFhciApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIGRvIG5vdCByZXBsYWNlIGFueSBtYXRjaGVzIHRoYXQgb2NjdXIgaW5zaWRlIGEgc3RyaW5nIGxpdGVyYWwuXG5cdFx0aWYgKCBxdW90ZUNvdW50ICUgMiApIHtcblx0XHRcdHJldC5wdXNoKCBhclswXSApO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cnJlbnQgPSBhclsgMCBdLFxuXHRcdFx0Y2xlbmd0aCA9IGN1cnJlbnQubGVuZ3RoO1xuXG5cdFx0c3dpdGNoICggY3VycmVudCApIHtcblx0XHRcdGNhc2UgXCJkZGRcIjpcblx0XHRcdFx0Ly9EYXkgb2YgdGhlIHdlZWssIGFzIGEgdGhyZWUtbGV0dGVyIGFiYnJldmlhdGlvblxuXHRcdFx0Y2FzZSBcImRkZGRcIjpcblx0XHRcdFx0Ly8gRGF5IG9mIHRoZSB3ZWVrLCB1c2luZyB0aGUgZnVsbCBuYW1lXG5cdFx0XHRcdHZhciBuYW1lcyA9ICggY2xlbmd0aCA9PT0gMyApID8gY2FsLmRheXMubmFtZXNBYmJyIDogY2FsLmRheXMubmFtZXM7XG5cdFx0XHRcdHJldC5wdXNoKCBuYW1lc1t2YWx1ZS5nZXREYXkoKV0gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZFwiOlxuXHRcdFx0XHQvLyBEYXkgb2YgbW9udGgsIHdpdGhvdXQgbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgZGF5c1xuXHRcdFx0Y2FzZSBcImRkXCI6XG5cdFx0XHRcdC8vIERheSBvZiBtb250aCwgd2l0aCBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBkYXlzXG5cdFx0XHRcdGZvdW5kRGF5ID0gdHJ1ZTtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGFkWmVyb3MoIGdldFBhcnQodmFsdWUsIDIpLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiTU1NXCI6XG5cdFx0XHRcdC8vIE1vbnRoLCBhcyBhIHRocmVlLWxldHRlciBhYmJyZXZpYXRpb25cblx0XHRcdGNhc2UgXCJNTU1NXCI6XG5cdFx0XHRcdC8vIE1vbnRoLCB1c2luZyB0aGUgZnVsbCBuYW1lXG5cdFx0XHRcdHZhciBwYXJ0ID0gZ2V0UGFydCggdmFsdWUsIDEgKTtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0KCBjYWwubW9udGhzR2VuaXRpdmUgJiYgaGFzRGF5KCkgKSA/XG5cdFx0XHRcdFx0KCBjYWwubW9udGhzR2VuaXRpdmVbIGNsZW5ndGggPT09IDMgPyBcIm5hbWVzQWJiclwiIDogXCJuYW1lc1wiIF1bIHBhcnQgXSApIDpcblx0XHRcdFx0XHQoIGNhbC5tb250aHNbIGNsZW5ndGggPT09IDMgPyBcIm5hbWVzQWJiclwiIDogXCJuYW1lc1wiIF1bIHBhcnQgXSApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIk1cIjpcblx0XHRcdFx0Ly8gTW9udGgsIGFzIGRpZ2l0cywgd2l0aCBubyBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBtb250aHNcblx0XHRcdGNhc2UgXCJNTVwiOlxuXHRcdFx0XHQvLyBNb250aCwgYXMgZGlnaXRzLCB3aXRoIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IG1vbnRoc1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggZ2V0UGFydCh2YWx1ZSwgMSkgKyAxLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwieVwiOlxuXHRcdFx0XHQvLyBZZWFyLCBhcyB0d28gZGlnaXRzLCBidXQgd2l0aCBubyBsZWFkaW5nIHplcm8gZm9yIHllYXJzIGxlc3MgdGhhbiAxMFxuXHRcdFx0Y2FzZSBcInl5XCI6XG5cdFx0XHRcdC8vIFllYXIsIGFzIHR3byBkaWdpdHMsIHdpdGggbGVhZGluZyB6ZXJvIGZvciB5ZWFycyBsZXNzIHRoYW4gMTBcblx0XHRcdGNhc2UgXCJ5eXl5XCI6XG5cdFx0XHRcdC8vIFllYXIgcmVwcmVzZW50ZWQgYnkgZm91ciBmdWxsIGRpZ2l0c1xuXHRcdFx0XHRwYXJ0ID0gY29udmVydGVkID8gY29udmVydGVkWyAwIF0gOiBnZXRFcmFZZWFyKCB2YWx1ZSwgY2FsLCBnZXRFcmEodmFsdWUsIGVyYXMpLCBzb3J0YWJsZSApO1xuXHRcdFx0XHRpZiAoIGNsZW5ndGggPCA0ICkge1xuXHRcdFx0XHRcdHBhcnQgPSBwYXJ0ICUgMTAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBhZFplcm9zKCBwYXJ0LCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiaFwiOlxuXHRcdFx0XHQvLyBIb3VycyB3aXRoIG5vIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IGhvdXJzLCB1c2luZyAxMi1ob3VyIGNsb2NrXG5cdFx0XHRjYXNlIFwiaGhcIjpcblx0XHRcdFx0Ly8gSG91cnMgd2l0aCBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBob3VycywgdXNpbmcgMTItaG91ciBjbG9ja1xuXHRcdFx0XHRob3VyID0gdmFsdWUuZ2V0SG91cnMoKSAlIDEyO1xuXHRcdFx0XHRpZiAoIGhvdXIgPT09IDAgKSBob3VyID0gMTI7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBhZFplcm9zKCBob3VyLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiSFwiOlxuXHRcdFx0XHQvLyBIb3VycyB3aXRoIG5vIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IGhvdXJzLCB1c2luZyAyNC1ob3VyIGNsb2NrXG5cdFx0XHRjYXNlIFwiSEhcIjpcblx0XHRcdFx0Ly8gSG91cnMgd2l0aCBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBob3VycywgdXNpbmcgMjQtaG91ciBjbG9ja1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggdmFsdWUuZ2V0SG91cnMoKSwgY2xlbmd0aCApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1cIjpcblx0XHRcdFx0Ly8gTWludXRlcyB3aXRoIG5vIGxlYWRpbmcgemVybyBmb3Igc2luZ2xlLWRpZ2l0IG1pbnV0ZXNcblx0XHRcdGNhc2UgXCJtbVwiOlxuXHRcdFx0XHQvLyBNaW51dGVzIHdpdGggbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgbWludXRlc1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwYWRaZXJvcyggdmFsdWUuZ2V0TWludXRlcygpLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwic1wiOlxuXHRcdFx0XHQvLyBTZWNvbmRzIHdpdGggbm8gbGVhZGluZyB6ZXJvIGZvciBzaW5nbGUtZGlnaXQgc2Vjb25kc1xuXHRcdFx0Y2FzZSBcInNzXCI6XG5cdFx0XHRcdC8vIFNlY29uZHMgd2l0aCBsZWFkaW5nIHplcm8gZm9yIHNpbmdsZS1kaWdpdCBzZWNvbmRzXG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBhZFplcm9zKCB2YWx1ZS5nZXRTZWNvbmRzKCksIGNsZW5ndGggKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ0XCI6XG5cdFx0XHRcdC8vIE9uZSBjaGFyYWN0ZXIgYW0vcG0gaW5kaWNhdG9yIChcImFcIiBvciBcInBcIilcblx0XHRcdGNhc2UgXCJ0dFwiOlxuXHRcdFx0XHQvLyBNdWx0aWNoYXJhY3RlciBhbS9wbSBpbmRpY2F0b3Jcblx0XHRcdFx0cGFydCA9IHZhbHVlLmdldEhvdXJzKCkgPCAxMiA/ICggY2FsLkFNID8gY2FsLkFNWzBdIDogXCIgXCIgKSA6ICggY2FsLlBNID8gY2FsLlBNWzBdIDogXCIgXCIgKTtcblx0XHRcdFx0cmV0LnB1c2goIGNsZW5ndGggPT09IDEgPyBwYXJ0LmNoYXJBdCgwKSA6IHBhcnQgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZlwiOlxuXHRcdFx0XHQvLyBEZWNpc2Vjb25kc1xuXHRcdFx0Y2FzZSBcImZmXCI6XG5cdFx0XHRcdC8vIENlbnRpc2Vjb25kc1xuXHRcdFx0Y2FzZSBcImZmZlwiOlxuXHRcdFx0XHQvLyBNaWxsaXNlY29uZHNcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGFkWmVyb3MoIHZhbHVlLmdldE1pbGxpc2Vjb25kcygpLCAzICkuc3Vic3RyKCAwLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwielwiOlxuXHRcdFx0XHQvLyBUaW1lIHpvbmUgb2Zmc2V0LCBubyBsZWFkaW5nIHplcm9cblx0XHRcdGNhc2UgXCJ6elwiOlxuXHRcdFx0XHQvLyBUaW1lIHpvbmUgb2Zmc2V0IHdpdGggbGVhZGluZyB6ZXJvXG5cdFx0XHRcdGhvdXIgPSB2YWx1ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdCggaG91ciA8PSAwID8gXCIrXCIgOiBcIi1cIiApICsgcGFkWmVyb3MoIE1hdGguZmxvb3IoTWF0aC5hYnMoaG91cikpLCBjbGVuZ3RoIClcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwienp6XCI6XG5cdFx0XHRcdC8vIFRpbWUgem9uZSBvZmZzZXQgd2l0aCBsZWFkaW5nIHplcm9cblx0XHRcdFx0aG91ciA9IHZhbHVlLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MDtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0KCBob3VyIDw9IDAgPyBcIitcIiA6IFwiLVwiICkgKyBwYWRaZXJvcyggTWF0aC5mbG9vcihNYXRoLmFicyhob3VyKSksIDIgKSArXG5cdFx0XHRcdFx0Ly8gSGFyZCBjb2RlZCBcIjpcIiBzZXBhcmF0b3IsIHJhdGhlciB0aGFuIHVzaW5nIGNhbC5UaW1lU2VwYXJhdG9yXG5cdFx0XHRcdFx0Ly8gUmVwZWF0ZWQgaGVyZSBmb3IgY29uc2lzdGVuY3ksIHBsdXMgXCI6XCIgd2FzIGFscmVhZHkgYXNzdW1lZCBpbiBkYXRlIHBhcnNpbmcuXG5cdFx0XHRcdFx0XCI6XCIgKyBwYWRaZXJvcyggTWF0aC5hYnModmFsdWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAlIDYwKSwgMiApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImdcIjpcblx0XHRcdGNhc2UgXCJnZ1wiOlxuXHRcdFx0XHRpZiAoIGNhbC5lcmFzICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdFx0Y2FsLmVyYXNbIGdldEVyYSh2YWx1ZSwgZXJhcykgXS5uYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRjYXNlIFwiL1wiOlxuXHRcdFx0cmV0LnB1c2goIGNhbFtcIi9cIl0gKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBcIkludmFsaWQgZGF0ZSBmb3JtYXQgcGF0dGVybiBcXCdcIiArIGN1cnJlbnQgKyBcIlxcJy5cIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJldC5qb2luKCBcIlwiICk7XG59O1xuXG4vLyBmb3JtYXROdW1iZXJcbihmdW5jdGlvbigpIHtcblx0dmFyIGV4cGFuZE51bWJlcjtcblxuXHRleHBhbmROdW1iZXIgPSBmdW5jdGlvbiggbnVtYmVyLCBwcmVjaXNpb24sIGZvcm1hdEluZm8gKSB7XG5cdFx0dmFyIGdyb3VwU2l6ZXMgPSBmb3JtYXRJbmZvLmdyb3VwU2l6ZXMsXG5cdFx0XHRjdXJTaXplID0gZ3JvdXBTaXplc1sgMCBdLFxuXHRcdFx0Y3VyR3JvdXBJbmRleCA9IDEsXG5cdFx0XHRmYWN0b3IgPSBNYXRoLnBvdyggMTAsIHByZWNpc2lvbiApLFxuXHRcdFx0cm91bmRlZCA9IE1hdGgucm91bmQoIG51bWJlciAqIGZhY3RvciApIC8gZmFjdG9yO1xuXG5cdFx0aWYgKCAhaXNGaW5pdGUocm91bmRlZCkgKSB7XG5cdFx0XHRyb3VuZGVkID0gbnVtYmVyO1xuXHRcdH1cblx0XHRudW1iZXIgPSByb3VuZGVkO1xuXG5cdFx0dmFyIG51bWJlclN0cmluZyA9IG51bWJlcitcIlwiLFxuXHRcdFx0cmlnaHQgPSBcIlwiLFxuXHRcdFx0c3BsaXQgPSBudW1iZXJTdHJpbmcuc3BsaXQoIC9lL2kgKSxcblx0XHRcdGV4cG9uZW50ID0gc3BsaXQubGVuZ3RoID4gMSA/IHBhcnNlSW50KCBzcGxpdFsxXSwgMTAgKSA6IDA7XG5cdFx0bnVtYmVyU3RyaW5nID0gc3BsaXRbIDAgXTtcblx0XHRzcGxpdCA9IG51bWJlclN0cmluZy5zcGxpdCggXCIuXCIgKTtcblx0XHRudW1iZXJTdHJpbmcgPSBzcGxpdFsgMCBdO1xuXHRcdHJpZ2h0ID0gc3BsaXQubGVuZ3RoID4gMSA/IHNwbGl0WyAxIF0gOiBcIlwiO1xuXG5cdFx0dmFyIGw7XG5cdFx0aWYgKCBleHBvbmVudCA+IDAgKSB7XG5cdFx0XHRyaWdodCA9IHplcm9QYWQoIHJpZ2h0LCBleHBvbmVudCwgZmFsc2UgKTtcblx0XHRcdG51bWJlclN0cmluZyArPSByaWdodC5zbGljZSggMCwgZXhwb25lbnQgKTtcblx0XHRcdHJpZ2h0ID0gcmlnaHQuc3Vic3RyKCBleHBvbmVudCApO1xuXHRcdH1cblx0XHRlbHNlIGlmICggZXhwb25lbnQgPCAwICkge1xuXHRcdFx0ZXhwb25lbnQgPSAtZXhwb25lbnQ7XG5cdFx0XHRudW1iZXJTdHJpbmcgPSB6ZXJvUGFkKCBudW1iZXJTdHJpbmcsIGV4cG9uZW50ICsgMSwgdHJ1ZSApO1xuXHRcdFx0cmlnaHQgPSBudW1iZXJTdHJpbmcuc2xpY2UoIC1leHBvbmVudCwgbnVtYmVyU3RyaW5nLmxlbmd0aCApICsgcmlnaHQ7XG5cdFx0XHRudW1iZXJTdHJpbmcgPSBudW1iZXJTdHJpbmcuc2xpY2UoIDAsIC1leHBvbmVudCApO1xuXHRcdH1cblxuXHRcdGlmICggcHJlY2lzaW9uID4gMCApIHtcblx0XHRcdHJpZ2h0ID0gZm9ybWF0SW5mb1sgXCIuXCIgXSArXG5cdFx0XHRcdCggKHJpZ2h0Lmxlbmd0aCA+IHByZWNpc2lvbikgPyByaWdodC5zbGljZSgwLCBwcmVjaXNpb24pIDogemVyb1BhZChyaWdodCwgcHJlY2lzaW9uKSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJpZ2h0ID0gXCJcIjtcblx0XHR9XG5cblx0XHR2YXIgc3RyaW5nSW5kZXggPSBudW1iZXJTdHJpbmcubGVuZ3RoIC0gMSxcblx0XHRcdHNlcCA9IGZvcm1hdEluZm9bIFwiLFwiIF0sXG5cdFx0XHRyZXQgPSBcIlwiO1xuXG5cdFx0d2hpbGUgKCBzdHJpbmdJbmRleCA+PSAwICkge1xuXHRcdFx0aWYgKCBjdXJTaXplID09PSAwIHx8IGN1clNpemUgPiBzdHJpbmdJbmRleCApIHtcblx0XHRcdFx0cmV0dXJuIG51bWJlclN0cmluZy5zbGljZSggMCwgc3RyaW5nSW5kZXggKyAxICkgKyAoIHJldC5sZW5ndGggPyAoc2VwICsgcmV0ICsgcmlnaHQpIDogcmlnaHQgKTtcblx0XHRcdH1cblx0XHRcdHJldCA9IG51bWJlclN0cmluZy5zbGljZSggc3RyaW5nSW5kZXggLSBjdXJTaXplICsgMSwgc3RyaW5nSW5kZXggKyAxICkgKyAoIHJldC5sZW5ndGggPyAoc2VwICsgcmV0KSA6IFwiXCIgKTtcblxuXHRcdFx0c3RyaW5nSW5kZXggLT0gY3VyU2l6ZTtcblxuXHRcdFx0aWYgKCBjdXJHcm91cEluZGV4IDwgZ3JvdXBTaXplcy5sZW5ndGggKSB7XG5cdFx0XHRcdGN1clNpemUgPSBncm91cFNpemVzWyBjdXJHcm91cEluZGV4IF07XG5cdFx0XHRcdGN1ckdyb3VwSW5kZXgrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVtYmVyU3RyaW5nLnNsaWNlKCAwLCBzdHJpbmdJbmRleCArIDEgKSArIHNlcCArIHJldCArIHJpZ2h0O1xuXHR9O1xuXG5cdGZvcm1hdE51bWJlciA9IGZ1bmN0aW9uKCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlICkge1xuXHRcdGlmICggIWlzRmluaXRlKHZhbHVlKSApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IEluZmluaXR5ICkge1xuXHRcdFx0XHRyZXR1cm4gY3VsdHVyZS5udW1iZXJGb3JtYXQucG9zaXRpdmVJbmZpbml0eTtcblx0XHRcdH1cblx0XHRcdGlmICggdmFsdWUgPT09IC1JbmZpbml0eSApIHtcblx0XHRcdFx0cmV0dXJuIGN1bHR1cmUubnVtYmVyRm9ybWF0Lm5lZ2F0aXZlSW5maW5pdHk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3VsdHVyZS5udW1iZXJGb3JtYXRbIFwiTmFOXCIgXTtcblx0XHR9XG5cdFx0aWYgKCAhZm9ybWF0IHx8IGZvcm1hdCA9PT0gXCJpXCIgKSB7XG5cdFx0XHRyZXR1cm4gY3VsdHVyZS5uYW1lLmxlbmd0aCA/IHZhbHVlLnRvTG9jYWxlU3RyaW5nKCkgOiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdH1cblx0XHRmb3JtYXQgPSBmb3JtYXQgfHwgXCJEXCI7XG5cblx0XHR2YXIgbmYgPSBjdWx0dXJlLm51bWJlckZvcm1hdCxcblx0XHRcdG51bWJlciA9IE1hdGguYWJzKCB2YWx1ZSApLFxuXHRcdFx0cHJlY2lzaW9uID0gLTEsXG5cdFx0XHRwYXR0ZXJuO1xuXHRcdGlmICggZm9ybWF0Lmxlbmd0aCA+IDEgKSBwcmVjaXNpb24gPSBwYXJzZUludCggZm9ybWF0LnNsaWNlKDEpLCAxMCApO1xuXG5cdFx0dmFyIGN1cnJlbnQgPSBmb3JtYXQuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSxcblx0XHRcdGZvcm1hdEluZm87XG5cblx0XHRzd2l0Y2ggKCBjdXJyZW50ICkge1xuXHRcdFx0Y2FzZSBcIkRcIjpcblx0XHRcdFx0cGF0dGVybiA9IFwiblwiO1xuXHRcdFx0XHRudW1iZXIgPSB0cnVuY2F0ZSggbnVtYmVyICk7XG5cdFx0XHRcdGlmICggcHJlY2lzaW9uICE9PSAtMSApIHtcblx0XHRcdFx0XHRudW1iZXIgPSB6ZXJvUGFkKCBcIlwiICsgbnVtYmVyLCBwcmVjaXNpb24sIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIHZhbHVlIDwgMCApIG51bWJlciA9IFwiLVwiICsgbnVtYmVyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJOXCI6XG5cdFx0XHRcdGZvcm1hdEluZm8gPSBuZjtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0Y2FzZSBcIkNcIjpcblx0XHRcdFx0Zm9ybWF0SW5mbyA9IGZvcm1hdEluZm8gfHwgbmYuY3VycmVuY3k7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdGNhc2UgXCJQXCI6XG5cdFx0XHRcdGZvcm1hdEluZm8gPSBmb3JtYXRJbmZvIHx8IG5mLnBlcmNlbnQ7XG5cdFx0XHRcdHBhdHRlcm4gPSB2YWx1ZSA8IDAgPyBmb3JtYXRJbmZvLnBhdHRlcm5bIDAgXSA6ICggZm9ybWF0SW5mby5wYXR0ZXJuWzFdIHx8IFwiblwiICk7XG5cdFx0XHRcdGlmICggcHJlY2lzaW9uID09PSAtMSApIHByZWNpc2lvbiA9IGZvcm1hdEluZm8uZGVjaW1hbHM7XG5cdFx0XHRcdG51bWJlciA9IGV4cGFuZE51bWJlciggbnVtYmVyICogKGN1cnJlbnQgPT09IFwiUFwiID8gMTAwIDogMSksIHByZWNpc2lvbiwgZm9ybWF0SW5mbyApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IFwiQmFkIG51bWJlciBmb3JtYXQgc3BlY2lmaWVyOiBcIiArIGN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIHBhdHRlcm5QYXJ0cyA9IC9ufFxcJHwtfCUvZyxcblx0XHRcdHJldCA9IFwiXCI7XG5cdFx0Zm9yICggOyA7ICkge1xuXHRcdFx0dmFyIGluZGV4ID0gcGF0dGVyblBhcnRzLmxhc3RJbmRleCxcblx0XHRcdFx0YXIgPSBwYXR0ZXJuUGFydHMuZXhlYyggcGF0dGVybiApO1xuXG5cdFx0XHRyZXQgKz0gcGF0dGVybi5zbGljZSggaW5kZXgsIGFyID8gYXIuaW5kZXggOiBwYXR0ZXJuLmxlbmd0aCApO1xuXG5cdFx0XHRpZiAoICFhciApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAoIGFyWzBdICkge1xuXHRcdFx0XHRjYXNlIFwiblwiOlxuXHRcdFx0XHRcdHJldCArPSBudW1iZXI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCIkXCI6XG5cdFx0XHRcdFx0cmV0ICs9IG5mLmN1cnJlbmN5LnN5bWJvbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi1cIjpcblx0XHRcdFx0XHQvLyBkb24ndCBtYWtlIDAgbmVnYXRpdmVcblx0XHRcdFx0XHRpZiAoIC9bMS05XS8udGVzdChudW1iZXIpICkge1xuXHRcdFx0XHRcdFx0cmV0ICs9IG5mWyBcIi1cIiBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIiVcIjpcblx0XHRcdFx0XHRyZXQgKz0gbmYucGVyY2VudC5zeW1ib2w7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblxufSgpKTtcblxuZ2V0VG9rZW5SZWdFeHAgPSBmdW5jdGlvbigpIHtcblx0Ly8gcmVndWxhciBleHByZXNzaW9uIGZvciBtYXRjaGluZyBkYXRlIGFuZCB0aW1lIHRva2VucyBpbiBmb3JtYXQgc3RyaW5ncy5cblx0cmV0dXJuICgvXFwvfGRkZGR8ZGRkfGRkfGR8TU1NTXxNTU18TU18TXx5eXl5fHl5fHl8aGh8aHxISHxIfG1tfG18c3N8c3x0dHx0fGZmZnxmZnxmfHp6enx6enx6fGdnfGcvZyk7XG59O1xuXG5nZXRFcmEgPSBmdW5jdGlvbiggZGF0ZSwgZXJhcyApIHtcblx0aWYgKCAhZXJhcyApIHJldHVybiAwO1xuXHR2YXIgc3RhcnQsIHRpY2tzID0gZGF0ZS5nZXRUaW1lKCk7XG5cdGZvciAoIHZhciBpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdHN0YXJ0ID0gZXJhc1sgaSBdLnN0YXJ0O1xuXHRcdGlmICggc3RhcnQgPT09IG51bGwgfHwgdGlja3MgPj0gc3RhcnQgKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIDA7XG59O1xuXG5nZXRFcmFZZWFyID0gZnVuY3Rpb24oIGRhdGUsIGNhbCwgZXJhLCBzb3J0YWJsZSApIHtcblx0dmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdGlmICggIXNvcnRhYmxlICYmIGNhbC5lcmFzICkge1xuXHRcdC8vIGNvbnZlcnQgbm9ybWFsIGdyZWdvcmlhbiB5ZWFyIHRvIGVyYS1zaGlmdGVkIGdyZWdvcmlhblxuXHRcdC8vIHllYXIgYnkgc3VidHJhY3RpbmcgdGhlIGVyYSBvZmZzZXRcblx0XHR5ZWFyIC09IGNhbC5lcmFzWyBlcmEgXS5vZmZzZXQ7XG5cdH1cblx0cmV0dXJuIHllYXI7XG59O1xuXG4vLyBwYXJzZUV4YWN0XG4oZnVuY3Rpb24oKSB7XG5cdHZhciBleHBhbmRZZWFyLFxuXHRcdGdldERheUluZGV4LFxuXHRcdGdldE1vbnRoSW5kZXgsXG5cdFx0Z2V0UGFyc2VSZWdFeHAsXG5cdFx0b3V0T2ZSYW5nZSxcblx0XHR0b1VwcGVyLFxuXHRcdHRvVXBwZXJBcnJheTtcblxuXHRleHBhbmRZZWFyID0gZnVuY3Rpb24oIGNhbCwgeWVhciApIHtcblx0XHQvLyBleHBhbmRzIDItZGlnaXQgeWVhciBpbnRvIDQgZGlnaXRzLlxuXHRcdGlmICggeWVhciA8IDEwMCApIHtcblx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRlcmEgPSBnZXRFcmEoIG5vdyApLFxuXHRcdFx0XHRjdXJyID0gZ2V0RXJhWWVhciggbm93LCBjYWwsIGVyYSApLFxuXHRcdFx0XHR0d29EaWdpdFllYXJNYXggPSBjYWwudHdvRGlnaXRZZWFyTWF4O1xuXHRcdFx0dHdvRGlnaXRZZWFyTWF4ID0gdHlwZW9mIHR3b0RpZ2l0WWVhck1heCA9PT0gXCJzdHJpbmdcIiA/IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAlIDEwMCArIHBhcnNlSW50KCB0d29EaWdpdFllYXJNYXgsIDEwICkgOiB0d29EaWdpdFllYXJNYXg7XG5cdFx0XHR5ZWFyICs9IGN1cnIgLSAoIGN1cnIgJSAxMDAgKTtcblx0XHRcdGlmICggeWVhciA+IHR3b0RpZ2l0WWVhck1heCApIHtcblx0XHRcdFx0eWVhciAtPSAxMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB5ZWFyO1xuXHR9O1xuXG5cdGdldERheUluZGV4ID0gZnVuY3Rpb25cdCggY2FsLCB2YWx1ZSwgYWJiciApIHtcblx0XHR2YXIgcmV0LFxuXHRcdFx0ZGF5cyA9IGNhbC5kYXlzLFxuXHRcdFx0dXBwZXJEYXlzID0gY2FsLl91cHBlckRheXM7XG5cdFx0aWYgKCAhdXBwZXJEYXlzICkge1xuXHRcdFx0Y2FsLl91cHBlckRheXMgPSB1cHBlckRheXMgPSBbXG5cdFx0XHRcdHRvVXBwZXJBcnJheSggZGF5cy5uYW1lcyApLFxuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIGRheXMubmFtZXNBYmJyICksXG5cdFx0XHRcdHRvVXBwZXJBcnJheSggZGF5cy5uYW1lc1Nob3J0IClcblx0XHRcdF07XG5cdFx0fVxuXHRcdHZhbHVlID0gdG9VcHBlciggdmFsdWUgKTtcblx0XHRpZiAoIGFiYnIgKSB7XG5cdFx0XHRyZXQgPSBhcnJheUluZGV4T2YoIHVwcGVyRGF5c1sxXSwgdmFsdWUgKTtcblx0XHRcdGlmICggcmV0ID09PSAtMSApIHtcblx0XHRcdFx0cmV0ID0gYXJyYXlJbmRleE9mKCB1cHBlckRheXNbMl0sIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0ID0gYXJyYXlJbmRleE9mKCB1cHBlckRheXNbMF0sIHZhbHVlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cblx0Z2V0TW9udGhJbmRleCA9IGZ1bmN0aW9uKCBjYWwsIHZhbHVlLCBhYmJyICkge1xuXHRcdHZhciBtb250aHMgPSBjYWwubW9udGhzLFxuXHRcdFx0bW9udGhzR2VuID0gY2FsLm1vbnRoc0dlbml0aXZlIHx8IGNhbC5tb250aHMsXG5cdFx0XHR1cHBlck1vbnRocyA9IGNhbC5fdXBwZXJNb250aHMsXG5cdFx0XHR1cHBlck1vbnRoc0dlbiA9IGNhbC5fdXBwZXJNb250aHNHZW47XG5cdFx0aWYgKCAhdXBwZXJNb250aHMgKSB7XG5cdFx0XHRjYWwuX3VwcGVyTW9udGhzID0gdXBwZXJNb250aHMgPSBbXG5cdFx0XHRcdHRvVXBwZXJBcnJheSggbW9udGhzLm5hbWVzICksXG5cdFx0XHRcdHRvVXBwZXJBcnJheSggbW9udGhzLm5hbWVzQWJiciApXG5cdFx0XHRdO1xuXHRcdFx0Y2FsLl91cHBlck1vbnRoc0dlbiA9IHVwcGVyTW9udGhzR2VuID0gW1xuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIG1vbnRoc0dlbi5uYW1lcyApLFxuXHRcdFx0XHR0b1VwcGVyQXJyYXkoIG1vbnRoc0dlbi5uYW1lc0FiYnIgKVxuXHRcdFx0XTtcblx0XHR9XG5cdFx0dmFsdWUgPSB0b1VwcGVyKCB2YWx1ZSApO1xuXHRcdHZhciBpID0gYXJyYXlJbmRleE9mKCBhYmJyID8gdXBwZXJNb250aHNbMV0gOiB1cHBlck1vbnRoc1swXSwgdmFsdWUgKTtcblx0XHRpZiAoIGkgPCAwICkge1xuXHRcdFx0aSA9IGFycmF5SW5kZXhPZiggYWJiciA/IHVwcGVyTW9udGhzR2VuWzFdIDogdXBwZXJNb250aHNHZW5bMF0sIHZhbHVlICk7XG5cdFx0fVxuXHRcdHJldHVybiBpO1xuXHR9O1xuXG5cdGdldFBhcnNlUmVnRXhwID0gZnVuY3Rpb24oIGNhbCwgZm9ybWF0ICkge1xuXHRcdC8vIGNvbnZlcnRzIGEgZm9ybWF0IHN0cmluZyBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggZ3JvdXBzIHRoYXRcblx0XHQvLyBjYW4gYmUgdXNlZCB0byBleHRyYWN0IGRhdGUgZmllbGRzIGZyb20gYSBkYXRlIHN0cmluZy5cblx0XHQvLyBjaGVjayBmb3IgYSBjYWNoZWQgcGFyc2UgcmVnZXguXG5cdFx0dmFyIHJlID0gY2FsLl9wYXJzZVJlZ0V4cDtcblx0XHRpZiAoICFyZSApIHtcblx0XHRcdGNhbC5fcGFyc2VSZWdFeHAgPSByZSA9IHt9O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZhciByZUZvcm1hdCA9IHJlWyBmb3JtYXQgXTtcblx0XHRcdGlmICggcmVGb3JtYXQgKSB7XG5cdFx0XHRcdHJldHVybiByZUZvcm1hdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBleHBhbmQgc2luZ2xlIGRpZ2l0IGZvcm1hdHMsIHRoZW4gZXNjYXBlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGFyYWN0ZXJzLlxuXHRcdHZhciBleHBGb3JtYXQgPSBleHBhbmRGb3JtYXQoIGNhbCwgZm9ybWF0ICkucmVwbGFjZSggLyhbXFxeXFwkXFwuXFwqXFwrXFw/XFx8XFxbXFxdXFwoXFwpXFx7XFx9XSkvZywgXCJcXFxcXFxcXCQxXCIgKSxcblx0XHRcdHJlZ2V4cCA9IFsgXCJeXCIgXSxcblx0XHRcdGdyb3VwcyA9IFtdLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0cXVvdGVDb3VudCA9IDAsXG5cdFx0XHR0b2tlblJlZ0V4cCA9IGdldFRva2VuUmVnRXhwKCksXG5cdFx0XHRtYXRjaDtcblxuXHRcdC8vIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIGRhdGUgdG9rZW4gZm91bmQuXG5cdFx0d2hpbGUgKCAobWF0Y2ggPSB0b2tlblJlZ0V4cC5leGVjKGV4cEZvcm1hdCkpICE9PSBudWxsICkge1xuXHRcdFx0dmFyIHByZU1hdGNoID0gZXhwRm9ybWF0LnNsaWNlKCBpbmRleCwgbWF0Y2guaW5kZXggKTtcblx0XHRcdGluZGV4ID0gdG9rZW5SZWdFeHAubGFzdEluZGV4O1xuXG5cdFx0XHQvLyBkb24ndCByZXBsYWNlIGFueSBtYXRjaGVzIHRoYXQgb2NjdXIgaW5zaWRlIGEgc3RyaW5nIGxpdGVyYWwuXG5cdFx0XHRxdW90ZUNvdW50ICs9IGFwcGVuZFByZU9yUG9zdE1hdGNoKCBwcmVNYXRjaCwgcmVnZXhwICk7XG5cdFx0XHRpZiAoIHF1b3RlQ291bnQgJSAyICkge1xuXHRcdFx0XHRyZWdleHAucHVzaCggbWF0Y2hbMF0gKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFkZCBhIHJlZ2V4IGdyb3VwIGZvciB0aGUgdG9rZW4uXG5cdFx0XHR2YXIgbSA9IG1hdGNoWyAwIF0sXG5cdFx0XHRcdGxlbiA9IG0ubGVuZ3RoLFxuXHRcdFx0XHRhZGQ7XG5cdFx0XHRzd2l0Y2ggKCBtICkge1xuXHRcdFx0XHRjYXNlIFwiZGRkZFwiOiBjYXNlIFwiZGRkXCI6XG5cdFx0XHRcdGNhc2UgXCJNTU1NXCI6IGNhc2UgXCJNTU1cIjpcblx0XHRcdFx0Y2FzZSBcImdnXCI6IGNhc2UgXCJnXCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoXFxcXEQrKVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidHRcIjogY2FzZSBcInRcIjpcblx0XHRcdFx0XHRhZGQgPSBcIihcXFxcRCopXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ5eXl5XCI6XG5cdFx0XHRcdGNhc2UgXCJmZmZcIjpcblx0XHRcdFx0Y2FzZSBcImZmXCI6XG5cdFx0XHRcdGNhc2UgXCJmXCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoXFxcXGR7XCIgKyBsZW4gKyBcIn0pXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZFwiOiBjYXNlIFwiZFwiOlxuXHRcdFx0XHRjYXNlIFwiTU1cIjogY2FzZSBcIk1cIjpcblx0XHRcdFx0Y2FzZSBcInl5XCI6IGNhc2UgXCJ5XCI6XG5cdFx0XHRcdGNhc2UgXCJISFwiOiBjYXNlIFwiSFwiOlxuXHRcdFx0XHRjYXNlIFwiaGhcIjogY2FzZSBcImhcIjpcblx0XHRcdFx0Y2FzZSBcIm1tXCI6IGNhc2UgXCJtXCI6XG5cdFx0XHRcdGNhc2UgXCJzc1wiOiBjYXNlIFwic1wiOlxuXHRcdFx0XHRcdGFkZCA9IFwiKFxcXFxkXFxcXGQ/KVwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwienp6XCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoWystXT9cXFxcZFxcXFxkPzpcXFxcZHsyfSlcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInp6XCI6IGNhc2UgXCJ6XCI6XG5cdFx0XHRcdFx0YWRkID0gXCIoWystXT9cXFxcZFxcXFxkPylcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi9cIjpcblx0XHRcdFx0XHRhZGQgPSBcIihcXFxcLylcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBcIkludmFsaWQgZGF0ZSBmb3JtYXQgcGF0dGVybiBcXCdcIiArIG0gKyBcIlxcJy5cIjtcblx0XHRcdH1cblx0XHRcdGlmICggYWRkICkge1xuXHRcdFx0XHRyZWdleHAucHVzaCggYWRkICk7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggbWF0Y2hbMF0gKTtcblx0XHR9XG5cdFx0YXBwZW5kUHJlT3JQb3N0TWF0Y2goIGV4cEZvcm1hdC5zbGljZShpbmRleCksIHJlZ2V4cCApO1xuXHRcdHJlZ2V4cC5wdXNoKCBcIiRcIiApO1xuXG5cdFx0Ly8gYWxsb3cgd2hpdGVzcGFjZSB0byBkaWZmZXIgd2hlbiBtYXRjaGluZyBmb3JtYXRzLlxuXHRcdHZhciByZWdleHBTdHIgPSByZWdleHAuam9pbiggXCJcIiApLnJlcGxhY2UoIC9cXHMrL2csIFwiXFxcXHMrXCIgKSxcblx0XHRcdHBhcnNlUmVnRXhwID0geyBcInJlZ0V4cFwiOiByZWdleHBTdHIsIFwiZ3JvdXBzXCI6IGdyb3VwcyB9O1xuXG5cdFx0Ly8gY2FjaGUgdGhlIHJlZ2V4IGZvciB0aGlzIGZvcm1hdC5cblx0XHRyZXR1cm4gcmVbIGZvcm1hdCBdID0gcGFyc2VSZWdFeHA7XG5cdH07XG5cblx0b3V0T2ZSYW5nZSA9IGZ1bmN0aW9uKCB2YWx1ZSwgbG93LCBoaWdoICkge1xuXHRcdHJldHVybiB2YWx1ZSA8IGxvdyB8fCB2YWx1ZSA+IGhpZ2g7XG5cdH07XG5cblx0dG9VcHBlciA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHQvLyBcImhlLUlMXCIgaGFzIG5vbi1icmVha2luZyBzcGFjZSBpbiB3ZWVrZGF5IG5hbWVzLlxuXHRcdHJldHVybiB2YWx1ZS5zcGxpdCggXCJcXHUwMEEwXCIgKS5qb2luKCBcIiBcIiApLnRvVXBwZXJDYXNlKCk7XG5cdH07XG5cblx0dG9VcHBlckFycmF5ID0gZnVuY3Rpb24oIGFyciApIHtcblx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRyZXN1bHRzWyBpIF0gPSB0b1VwcGVyKCBhcnJbaV0gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH07XG5cblx0cGFyc2VFeGFjdCA9IGZ1bmN0aW9uKCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlICkge1xuXHRcdC8vIHRyeSB0byBwYXJzZSB0aGUgZGF0ZSBzdHJpbmcgYnkgbWF0Y2hpbmcgYWdhaW5zdCB0aGUgZm9ybWF0IHN0cmluZ1xuXHRcdC8vIHdoaWxlIHVzaW5nIHRoZSBzcGVjaWZpZWQgY3VsdHVyZSBmb3IgZGF0ZSBmaWVsZCBuYW1lcy5cblx0XHR2YWx1ZSA9IHRyaW0oIHZhbHVlICk7XG5cdFx0dmFyIGNhbCA9IGN1bHR1cmUuY2FsZW5kYXIsXG5cdFx0XHQvLyBjb252ZXJ0IGRhdGUgZm9ybWF0cyBpbnRvIHJlZ3VsYXIgZXhwcmVzc2lvbnMgd2l0aCBncm91cGluZ3MuXG5cdFx0XHQvLyB1c2UgdGhlIHJlZ2V4cCB0byBkZXRlcm1pbmUgdGhlIGlucHV0IGZvcm1hdCBhbmQgZXh0cmFjdCB0aGUgZGF0ZSBmaWVsZHMuXG5cdFx0XHRwYXJzZUluZm8gPSBnZXRQYXJzZVJlZ0V4cCggY2FsLCBmb3JtYXQgKSxcblx0XHRcdG1hdGNoID0gbmV3IFJlZ0V4cCggcGFyc2VJbmZvLnJlZ0V4cCApLmV4ZWMoIHZhbHVlICk7XG5cdFx0aWYgKCBtYXRjaCA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBmb3VuZCBhIGRhdGUgZm9ybWF0IHRoYXQgbWF0Y2hlcyB0aGUgaW5wdXQuXG5cdFx0dmFyIGdyb3VwcyA9IHBhcnNlSW5mby5ncm91cHMsXG5cdFx0XHRlcmEgPSBudWxsLCB5ZWFyID0gbnVsbCwgbW9udGggPSBudWxsLCBkYXRlID0gbnVsbCwgd2Vla0RheSA9IG51bGwsXG5cdFx0XHRob3VyID0gMCwgaG91ck9mZnNldCwgbWluID0gMCwgc2VjID0gMCwgbXNlYyA9IDAsIHR6TWluT2Zmc2V0ID0gbnVsbCxcblx0XHRcdHBtSG91ciA9IGZhbHNlO1xuXHRcdC8vIGl0ZXJhdGUgdGhlIGZvcm1hdCBncm91cHMgdG8gZXh0cmFjdCBhbmQgc2V0IHRoZSBkYXRlIGZpZWxkcy5cblx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gZ3JvdXBzLmxlbmd0aDsgaiA8IGpsOyBqKysgKSB7XG5cdFx0XHR2YXIgbWF0Y2hHcm91cCA9IG1hdGNoWyBqICsgMSBdO1xuXHRcdFx0aWYgKCBtYXRjaEdyb3VwICkge1xuXHRcdFx0XHR2YXIgY3VycmVudCA9IGdyb3Vwc1sgaiBdLFxuXHRcdFx0XHRcdGNsZW5ndGggPSBjdXJyZW50Lmxlbmd0aCxcblx0XHRcdFx0XHRtYXRjaEludCA9IHBhcnNlSW50KCBtYXRjaEdyb3VwLCAxMCApO1xuXHRcdFx0XHRzd2l0Y2ggKCBjdXJyZW50ICkge1xuXHRcdFx0XHRcdGNhc2UgXCJkZFwiOiBjYXNlIFwiZFwiOlxuXHRcdFx0XHRcdFx0Ly8gRGF5IG9mIG1vbnRoLlxuXHRcdFx0XHRcdFx0ZGF0ZSA9IG1hdGNoSW50O1xuXHRcdFx0XHRcdFx0Ly8gY2hlY2sgdGhhdCBkYXRlIGlzIGdlbmVyYWxseSBpbiB2YWxpZCByYW5nZSwgYWxzbyBjaGVja2luZyBvdmVyZmxvdyBiZWxvdy5cblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShkYXRlLCAxLCAzMSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJNTU1cIjogY2FzZSBcIk1NTU1cIjpcblx0XHRcdFx0XHRcdG1vbnRoID0gZ2V0TW9udGhJbmRleCggY2FsLCBtYXRjaEdyb3VwLCBjbGVuZ3RoID09PSAzICk7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UobW9udGgsIDAsIDExKSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIk1cIjogY2FzZSBcIk1NXCI6XG5cdFx0XHRcdFx0XHQvLyBNb250aC5cblx0XHRcdFx0XHRcdG1vbnRoID0gbWF0Y2hJbnQgLSAxO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKG1vbnRoLCAwLCAxMSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJ5XCI6IGNhc2UgXCJ5eVwiOlxuXHRcdFx0XHRcdGNhc2UgXCJ5eXl5XCI6XG5cdFx0XHRcdFx0XHR5ZWFyID0gY2xlbmd0aCA8IDQgPyBleHBhbmRZZWFyKCBjYWwsIG1hdGNoSW50ICkgOiBtYXRjaEludDtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZSh5ZWFyLCAwLCA5OTk5KSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImhcIjogY2FzZSBcImhoXCI6XG5cdFx0XHRcdFx0XHQvLyBIb3VycyAoMTItaG91ciBjbG9jaykuXG5cdFx0XHRcdFx0XHRob3VyID0gbWF0Y2hJbnQ7XG5cdFx0XHRcdFx0XHRpZiAoIGhvdXIgPT09IDEyICkgaG91ciA9IDA7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoaG91ciwgMCwgMTEpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiSFwiOiBjYXNlIFwiSEhcIjpcblx0XHRcdFx0XHRcdC8vIEhvdXJzICgyNC1ob3VyIGNsb2NrKS5cblx0XHRcdFx0XHRcdGhvdXIgPSBtYXRjaEludDtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShob3VyLCAwLCAyMykgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJtXCI6IGNhc2UgXCJtbVwiOlxuXHRcdFx0XHRcdFx0Ly8gTWludXRlcy5cblx0XHRcdFx0XHRcdG1pbiA9IG1hdGNoSW50O1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKG1pbiwgMCwgNTkpICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwic1wiOiBjYXNlIFwic3NcIjpcblx0XHRcdFx0XHRcdC8vIFNlY29uZHMuXG5cdFx0XHRcdFx0XHRzZWMgPSBtYXRjaEludDtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShzZWMsIDAsIDU5KSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcInR0XCI6IGNhc2UgXCJ0XCI6XG5cdFx0XHRcdFx0XHQvLyBBTS9QTSBkZXNpZ25hdG9yLlxuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIGl0IGlzIHN0YW5kYXJkLCB1cHBlciwgb3IgbG93ZXIgY2FzZSBQTS4gSWYgbm90LCBlbnN1cmUgaXQgaXMgYXQgbGVhc3Qgb25lIG9mXG5cdFx0XHRcdFx0XHQvLyB0aGUgQU0gdG9rZW5zLiBJZiBub3QsIGZhaWwgdGhlIHBhcnNlIGZvciB0aGlzIGZvcm1hdC5cblx0XHRcdFx0XHRcdHBtSG91ciA9IGNhbC5QTSAmJiAoIG1hdGNoR3JvdXAgPT09IGNhbC5QTVswXSB8fCBtYXRjaEdyb3VwID09PSBjYWwuUE1bMV0gfHwgbWF0Y2hHcm91cCA9PT0gY2FsLlBNWzJdICk7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdCFwbUhvdXIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdCFjYWwuQU0gfHwgKCBtYXRjaEdyb3VwICE9PSBjYWwuQU1bMF0gJiYgbWF0Y2hHcm91cCAhPT0gY2FsLkFNWzFdICYmIG1hdGNoR3JvdXAgIT09IGNhbC5BTVsyXSApXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiZlwiOlxuXHRcdFx0XHRcdFx0Ly8gRGVjaXNlY29uZHMuXG5cdFx0XHRcdFx0Y2FzZSBcImZmXCI6XG5cdFx0XHRcdFx0XHQvLyBDZW50aXNlY29uZHMuXG5cdFx0XHRcdFx0Y2FzZSBcImZmZlwiOlxuXHRcdFx0XHRcdFx0Ly8gTWlsbGlzZWNvbmRzLlxuXHRcdFx0XHRcdFx0bXNlYyA9IG1hdGNoSW50ICogTWF0aC5wb3coIDEwLCAzIC0gY2xlbmd0aCApO1xuXHRcdFx0XHRcdFx0aWYgKCBvdXRPZlJhbmdlKG1zZWMsIDAsIDk5OSkgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJkZGRcIjpcblx0XHRcdFx0XHRcdC8vIERheSBvZiB3ZWVrLlxuXHRcdFx0XHRcdGNhc2UgXCJkZGRkXCI6XG5cdFx0XHRcdFx0XHQvLyBEYXkgb2Ygd2Vlay5cblx0XHRcdFx0XHRcdHdlZWtEYXkgPSBnZXREYXlJbmRleCggY2FsLCBtYXRjaEdyb3VwLCBjbGVuZ3RoID09PSAzICk7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2Uod2Vla0RheSwgMCwgNikgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJ6enpcIjpcblx0XHRcdFx0XHRcdC8vIFRpbWUgem9uZSBvZmZzZXQgaW4gKy8tIGhvdXJzOm1pbi5cblx0XHRcdFx0XHRcdHZhciBvZmZzZXRzID0gbWF0Y2hHcm91cC5zcGxpdCggLzovICk7XG5cdFx0XHRcdFx0XHRpZiAoIG9mZnNldHMubGVuZ3RoICE9PSAyICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRob3VyT2Zmc2V0ID0gcGFyc2VJbnQoIG9mZnNldHNbMF0sIDEwICk7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoaG91ck9mZnNldCwgLTEyLCAxMykgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdHZhciBtaW5PZmZzZXQgPSBwYXJzZUludCggb2Zmc2V0c1sxXSwgMTAgKTtcblx0XHRcdFx0XHRcdGlmICggb3V0T2ZSYW5nZShtaW5PZmZzZXQsIDAsIDU5KSApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0dHpNaW5PZmZzZXQgPSAoIGhvdXJPZmZzZXQgKiA2MCApICsgKCBzdGFydHNXaXRoKG1hdGNoR3JvdXAsIFwiLVwiKSA/IC1taW5PZmZzZXQgOiBtaW5PZmZzZXQgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJ6XCI6IGNhc2UgXCJ6elwiOlxuXHRcdFx0XHRcdFx0Ly8gVGltZSB6b25lIG9mZnNldCBpbiArLy0gaG91cnMuXG5cdFx0XHRcdFx0XHRob3VyT2Zmc2V0ID0gbWF0Y2hJbnQ7XG5cdFx0XHRcdFx0XHRpZiAoIG91dE9mUmFuZ2UoaG91ck9mZnNldCwgLTEyLCAxMykgKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdHR6TWluT2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImdcIjogY2FzZSBcImdnXCI6XG5cdFx0XHRcdFx0XHR2YXIgZXJhTmFtZSA9IG1hdGNoR3JvdXA7XG5cdFx0XHRcdFx0XHRpZiAoICFlcmFOYW1lIHx8ICFjYWwuZXJhcyApIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0ZXJhTmFtZSA9IHRyaW0oIGVyYU5hbWUudG9Mb3dlckNhc2UoKSApO1xuXHRcdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsID0gY2FsLmVyYXMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGVyYU5hbWUgPT09IGNhbC5lcmFzW2ldLm5hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0XHRlcmEgPSBpO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBjb3VsZCBub3QgZmluZCBhbiBlcmEgd2l0aCB0aGF0IG5hbWVcblx0XHRcdFx0XHRcdGlmICggZXJhID09PSBudWxsICkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgcmVzdWx0ID0gbmV3IERhdGUoKSwgZGVmYXVsdFllYXIsIGNvbnZlcnQgPSBjYWwuY29udmVydDtcblx0XHRkZWZhdWx0WWVhciA9IGNvbnZlcnQgPyBjb252ZXJ0LmZyb21HcmVnb3JpYW4oIHJlc3VsdCApWyAwIF0gOiByZXN1bHQuZ2V0RnVsbFllYXIoKTtcblx0XHRpZiAoIHllYXIgPT09IG51bGwgKSB7XG5cdFx0XHR5ZWFyID0gZGVmYXVsdFllYXI7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBjYWwuZXJhcyApIHtcblx0XHRcdC8vIHllYXIgbXVzdCBiZSBzaGlmdGVkIHRvIG5vcm1hbCBncmVnb3JpYW4geWVhclxuXHRcdFx0Ly8gYnV0IG5vdCBpZiB5ZWFyIHdhcyBub3Qgc3BlY2lmaWVkLCBpdHMgYWxyZWFkeSBub3JtYWwgZ3JlZ29yaWFuXG5cdFx0XHQvLyBwZXIgdGhlIG1haW4gaWYgY2xhdXNlIGFib3ZlLlxuXHRcdFx0eWVhciArPSBjYWwuZXJhc1soIGVyYSB8fCAwICldLm9mZnNldDtcblx0XHR9XG5cdFx0Ly8gc2V0IGRlZmF1bHQgZGF5IGFuZCBtb250aCB0byAxIGFuZCBKYW51YXJ5LCBzbyBpZiB1bnNwZWNpZmllZCwgdGhlc2UgYXJlIHRoZSBkZWZhdWx0c1xuXHRcdC8vIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgZGF5L21vbnRoLlxuXHRcdGlmICggbW9udGggPT09IG51bGwgKSB7XG5cdFx0XHRtb250aCA9IDA7XG5cdFx0fVxuXHRcdGlmICggZGF0ZSA9PT0gbnVsbCApIHtcblx0XHRcdGRhdGUgPSAxO1xuXHRcdH1cblx0XHQvLyBub3cgaGF2ZSB5ZWFyLCBtb250aCwgYW5kIGRhdGUsIGJ1dCBpbiB0aGUgY3VsdHVyZSdzIGNhbGVuZGFyLlxuXHRcdC8vIGNvbnZlcnQgdG8gZ3JlZ29yaWFuIGlmIG5lY2Vzc2FyeVxuXHRcdGlmICggY29udmVydCApIHtcblx0XHRcdHJlc3VsdCA9IGNvbnZlcnQudG9HcmVnb3JpYW4oIHllYXIsIG1vbnRoLCBkYXRlICk7XG5cdFx0XHQvLyBjb252ZXJzaW9uIGZhaWxlZCwgbXVzdCBiZSBhbiBpbnZhbGlkIG1hdGNoXG5cdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIGhhdmUgdG8gc2V0IHllYXIsIG1vbnRoIGFuZCBkYXRlIHRvZ2V0aGVyIHRvIGF2b2lkIG92ZXJmbG93IGJhc2VkIG9uIGN1cnJlbnQgZGF0ZS5cblx0XHRcdHJlc3VsdC5zZXRGdWxsWWVhciggeWVhciwgbW9udGgsIGRhdGUgKTtcblx0XHRcdC8vIGNoZWNrIHRvIHNlZSBpZiBkYXRlIG92ZXJmbG93ZWQgZm9yIHNwZWNpZmllZCBtb250aCAob25seSBjaGVja2VkIDEtMzEgYWJvdmUpLlxuXHRcdFx0aWYgKCByZXN1bHQuZ2V0RGF0ZSgpICE9PSBkYXRlICkgcmV0dXJuIG51bGw7XG5cdFx0XHQvLyBpbnZhbGlkIGRheSBvZiB3ZWVrLlxuXHRcdFx0aWYgKCB3ZWVrRGF5ICE9PSBudWxsICYmIHJlc3VsdC5nZXREYXkoKSAhPT0gd2Vla0RheSApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGlmIHBtIGRlc2lnbmF0b3IgdG9rZW4gd2FzIGZvdW5kIG1ha2Ugc3VyZSB0aGUgaG91cnMgZml0IHRoZSAyNC1ob3VyIGNsb2NrLlxuXHRcdGlmICggcG1Ib3VyICYmIGhvdXIgPCAxMiApIHtcblx0XHRcdGhvdXIgKz0gMTI7XG5cdFx0fVxuXHRcdHJlc3VsdC5zZXRIb3VycyggaG91ciwgbWluLCBzZWMsIG1zZWMgKTtcblx0XHRpZiAoIHR6TWluT2Zmc2V0ICE9PSBudWxsICkge1xuXHRcdFx0Ly8gYWRqdXN0IHRpbWV6b25lIHRvIHV0YyBiZWZvcmUgYXBwbHlpbmcgbG9jYWwgb2Zmc2V0LlxuXHRcdFx0dmFyIGFkanVzdGVkTWluID0gcmVzdWx0LmdldE1pbnV0ZXMoKSAtICggdHpNaW5PZmZzZXQgKyByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSApO1xuXHRcdFx0Ly8gU2FmYXJpIGxpbWl0cyBob3VycyBhbmQgbWludXRlcyB0byB0aGUgcmFuZ2Ugb2YgLTEyNyB0byAxMjcuICBXZSBuZWVkIHRvIHVzZSBzZXRIb3Vyc1xuXHRcdFx0Ly8gdG8gZW5zdXJlIGJvdGggdGhlc2UgZmllbGRzIHdpbGwgbm90IGV4Y2VlZCB0aGlzIHJhbmdlLlx0YWRqdXN0ZWRNaW4gd2lsbCByYW5nZVxuXHRcdFx0Ly8gc29tZXdoZXJlIGJldHdlZW4gLTE0NDAgYW5kIDE1MDAsIHNvIHdlIG9ubHkgbmVlZCB0byBzcGxpdCB0aGlzIGludG8gaG91cnMuXG5cdFx0XHRyZXN1bHQuc2V0SG91cnMoIHJlc3VsdC5nZXRIb3VycygpICsgcGFyc2VJbnQoYWRqdXN0ZWRNaW4gLyA2MCwgMTApLCBhZGp1c3RlZE1pbiAlIDYwICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59KCkpO1xuXG5wYXJzZU5lZ2F0aXZlUGF0dGVybiA9IGZ1bmN0aW9uKCB2YWx1ZSwgbmYsIG5lZ2F0aXZlUGF0dGVybiApIHtcblx0dmFyIG5lZyA9IG5mWyBcIi1cIiBdLFxuXHRcdHBvcyA9IG5mWyBcIitcIiBdLFxuXHRcdHJldDtcblx0c3dpdGNoICggbmVnYXRpdmVQYXR0ZXJuICkge1xuXHRcdGNhc2UgXCJuIC1cIjpcblx0XHRcdG5lZyA9IFwiIFwiICsgbmVnO1xuXHRcdFx0cG9zID0gXCIgXCIgKyBwb3M7XG5cdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0Y2FzZSBcIm4tXCI6XG5cdFx0XHRpZiAoIGVuZHNXaXRoKHZhbHVlLCBuZWcpICkge1xuXHRcdFx0XHRyZXQgPSBbIFwiLVwiLCB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gbmVnLmxlbmd0aCkgXTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBlbmRzV2l0aCh2YWx1ZSwgcG9zKSApIHtcblx0XHRcdFx0cmV0ID0gWyBcIitcIiwgdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIHBvcy5sZW5ndGgpIF07XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiLSBuXCI6XG5cdFx0XHRuZWcgKz0gXCIgXCI7XG5cdFx0XHRwb3MgKz0gXCIgXCI7XG5cdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0Y2FzZSBcIi1uXCI6XG5cdFx0XHRpZiAoIHN0YXJ0c1dpdGgodmFsdWUsIG5lZykgKSB7XG5cdFx0XHRcdHJldCA9IFsgXCItXCIsIHZhbHVlLnN1YnN0cihuZWcubGVuZ3RoKSBdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHN0YXJ0c1dpdGgodmFsdWUsIHBvcykgKSB7XG5cdFx0XHRcdHJldCA9IFsgXCIrXCIsIHZhbHVlLnN1YnN0cihwb3MubGVuZ3RoKSBdO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIihuKVwiOlxuXHRcdFx0aWYgKCBzdGFydHNXaXRoKHZhbHVlLCBcIihcIikgJiYgZW5kc1dpdGgodmFsdWUsIFwiKVwiKSApIHtcblx0XHRcdFx0cmV0ID0gWyBcIi1cIiwgdmFsdWUuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDIpIF07XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gcmV0IHx8IFsgXCJcIiwgdmFsdWUgXTtcbn07XG5cbi8vXG4vLyBwdWJsaWMgaW5zdGFuY2UgZnVuY3Rpb25zXG4vL1xuXG5HbG9iYWxpemUucHJvdG90eXBlLmZpbmRDbG9zZXN0Q3VsdHVyZSA9IGZ1bmN0aW9uKCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiBHbG9iYWxpemUuZmluZENsb3Nlc3RDdWx0dXJlLmNhbGwoIHRoaXMsIGN1bHR1cmVTZWxlY3RvciApO1xufTtcblxuR2xvYmFsaXplLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gR2xvYmFsaXplLmZvcm1hdC5jYWxsKCB0aGlzLCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlU2VsZWN0b3IgKTtcbn07XG5cbkdsb2JhbGl6ZS5wcm90b3R5cGUubG9jYWxpemUgPSBmdW5jdGlvbigga2V5LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiBHbG9iYWxpemUubG9jYWxpemUuY2FsbCggdGhpcywga2V5LCBjdWx0dXJlU2VsZWN0b3IgKTtcbn07XG5cbkdsb2JhbGl6ZS5wcm90b3R5cGUucGFyc2VJbnQgPSBmdW5jdGlvbiggdmFsdWUsIHJhZGl4LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiBHbG9iYWxpemUucGFyc2VJbnQuY2FsbCggdGhpcywgdmFsdWUsIHJhZGl4LCBjdWx0dXJlU2VsZWN0b3IgKTtcbn07XG5cbkdsb2JhbGl6ZS5wcm90b3R5cGUucGFyc2VGbG9hdCA9IGZ1bmN0aW9uKCB2YWx1ZSwgcmFkaXgsIGN1bHR1cmVTZWxlY3RvciApIHtcblx0cmV0dXJuIEdsb2JhbGl6ZS5wYXJzZUZsb2F0LmNhbGwoIHRoaXMsIHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yICk7XG59O1xuXG5HbG9iYWxpemUucHJvdG90eXBlLmN1bHR1cmUgPSBmdW5jdGlvbiggY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gR2xvYmFsaXplLmN1bHR1cmUuY2FsbCggdGhpcywgY3VsdHVyZVNlbGVjdG9yICk7XG59O1xuXG4vL1xuLy8gcHVibGljIHNpbmdsZXRvbiBmdW5jdGlvbnNcbi8vXG5cbkdsb2JhbGl6ZS5hZGRDdWx0dXJlSW5mbyA9IGZ1bmN0aW9uKCBjdWx0dXJlTmFtZSwgYmFzZUN1bHR1cmVOYW1lLCBpbmZvICkge1xuXG5cdHZhciBiYXNlID0ge30sXG5cdFx0aXNOZXcgPSBmYWxzZTtcblxuXHRpZiAoIHR5cGVvZiBjdWx0dXJlTmFtZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHQvLyBjdWx0dXJlTmFtZSBhcmd1bWVudCBpcyBvcHRpb25hbCBzdHJpbmcuIElmIG5vdCBzcGVjaWZpZWQsIGFzc3VtZSBpbmZvIGlzIGZpcnN0XG5cdFx0Ly8gYW5kIG9ubHkgYXJndW1lbnQuIFNwZWNpZmllZCBpbmZvIGRlZXAtZXh0ZW5kcyBjdXJyZW50IGN1bHR1cmUuXG5cdFx0aW5mbyA9IGN1bHR1cmVOYW1lO1xuXHRcdGN1bHR1cmVOYW1lID0gdGhpcy5jdWx0dXJlKCkubmFtZTtcblx0XHRiYXNlID0gdGhpcy5jdWx0dXJlc1sgY3VsdHVyZU5hbWUgXTtcblx0fSBlbHNlIGlmICggdHlwZW9mIGJhc2VDdWx0dXJlTmFtZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHQvLyBiYXNlQ3VsdHVyZU5hbWUgYXJndW1lbnQgaXMgb3B0aW9uYWwgc3RyaW5nLiBJZiBub3Qgc3BlY2lmaWVkLCBhc3N1bWUgaW5mbyBpcyBzZWNvbmRcblx0XHQvLyBhcmd1bWVudC4gU3BlY2lmaWVkIGluZm8gZGVlcC1leHRlbmRzIHNwZWNpZmllZCBjdWx0dXJlLlxuXHRcdC8vIElmIHNwZWNpZmllZCBjdWx0dXJlIGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgYnkgZGVlcC1leHRlbmRpbmcgZGVmYXVsdFxuXHRcdGluZm8gPSBiYXNlQ3VsdHVyZU5hbWU7XG5cdFx0aXNOZXcgPSAoIHRoaXMuY3VsdHVyZXNbIGN1bHR1cmVOYW1lIF0gPT0gbnVsbCApO1xuXHRcdGJhc2UgPSB0aGlzLmN1bHR1cmVzWyBjdWx0dXJlTmFtZSBdIHx8IHRoaXMuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gY3VsdHVyZU5hbWUgYW5kIGJhc2VDdWx0dXJlTmFtZSBzcGVjaWZpZWQuIEFzc3VtZSBhIG5ldyBjdWx0dXJlIGlzIGJlaW5nIGNyZWF0ZWRcblx0XHQvLyBieSBkZWVwLWV4dGVuZGluZyBhbiBzcGVjaWZpZWQgYmFzZSBjdWx0dXJlXG5cdFx0aXNOZXcgPSB0cnVlO1xuXHRcdGJhc2UgPSB0aGlzLmN1bHR1cmVzWyBiYXNlQ3VsdHVyZU5hbWUgXTtcblx0fVxuXG5cdHRoaXMuY3VsdHVyZXNbIGN1bHR1cmVOYW1lIF0gPSBleHRlbmQodHJ1ZSwge30sXG5cdFx0YmFzZSxcblx0XHRpbmZvXG5cdCk7XG5cdC8vIE1ha2UgdGhlIHN0YW5kYXJkIGNhbGVuZGFyIHRoZSBjdXJyZW50IGN1bHR1cmUgaWYgaXQncyBhIG5ldyBjdWx0dXJlXG5cdGlmICggaXNOZXcgKSB7XG5cdFx0dGhpcy5jdWx0dXJlc1sgY3VsdHVyZU5hbWUgXS5jYWxlbmRhciA9IHRoaXMuY3VsdHVyZXNbIGN1bHR1cmVOYW1lIF0uY2FsZW5kYXJzLnN0YW5kYXJkO1xuXHR9XG59O1xuXG5HbG9iYWxpemUuZmluZENsb3Nlc3RDdWx0dXJlID0gZnVuY3Rpb24oIG5hbWUgKSB7XG5cdHZhciBtYXRjaDtcblx0aWYgKCAhbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5maW5kQ2xvc2VzdEN1bHR1cmUoIHRoaXMuY3VsdHVyZVNlbGVjdG9yICkgfHwgdGhpcy5jdWx0dXJlc1sgXCJkZWZhdWx0XCIgXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICkge1xuXHRcdG5hbWUgPSBuYW1lLnNwbGl0KCBcIixcIiApO1xuXHR9XG5cdGlmICggaXNBcnJheShuYW1lKSApIHtcblx0XHR2YXIgbGFuZyxcblx0XHRcdGN1bHR1cmVzID0gdGhpcy5jdWx0dXJlcyxcblx0XHRcdGxpc3QgPSBuYW1lLFxuXHRcdFx0aSwgbCA9IGxpc3QubGVuZ3RoLFxuXHRcdFx0cHJpb3JpdGl6ZWQgPSBbXTtcblx0XHRmb3IgKCBpID0gMDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdG5hbWUgPSB0cmltKCBsaXN0W2ldICk7XG5cdFx0XHR2YXIgcHJpLCBwYXJ0cyA9IG5hbWUuc3BsaXQoIFwiO1wiICk7XG5cdFx0XHRsYW5nID0gdHJpbSggcGFydHNbMF0gKTtcblx0XHRcdGlmICggcGFydHMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0XHRwcmkgPSAxO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG5hbWUgPSB0cmltKCBwYXJ0c1sxXSApO1xuXHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZihcInE9XCIpID09PSAwICkge1xuXHRcdFx0XHRcdG5hbWUgPSBuYW1lLnN1YnN0ciggMiApO1xuXHRcdFx0XHRcdHByaSA9IHBhcnNlRmxvYXQoIG5hbWUgKTtcblx0XHRcdFx0XHRwcmkgPSBpc05hTiggcHJpICkgPyAwIDogcHJpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHByaSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHByaW9yaXRpemVkLnB1c2goeyBsYW5nOiBsYW5nLCBwcmk6IHByaSB9KTtcblx0XHR9XG5cdFx0cHJpb3JpdGl6ZWQuc29ydChmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdGlmICggYS5wcmkgPCBiLnByaSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9IGVsc2UgaWYgKCBhLnByaSA+IGIucHJpICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KTtcblx0XHQvLyBleGFjdCBtYXRjaFxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0bGFuZyA9IHByaW9yaXRpemVkWyBpIF0ubGFuZztcblx0XHRcdG1hdGNoID0gY3VsdHVyZXNbIGxhbmcgXTtcblx0XHRcdGlmICggbWF0Y2ggKSB7XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBuZXV0cmFsIGxhbmd1YWdlIG1hdGNoXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRsYW5nID0gcHJpb3JpdGl6ZWRbIGkgXS5sYW5nO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBsYW5nLmxhc3RJbmRleE9mKCBcIi1cIiApO1xuXHRcdFx0XHRpZiAoIGluZGV4ID09PSAtMSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzdHJpcCBvZmYgdGhlIGxhc3QgcGFydC4gZS5nLiBlbi1VUyA9PiBlblxuXHRcdFx0XHRsYW5nID0gbGFuZy5zdWJzdHIoIDAsIGluZGV4ICk7XG5cdFx0XHRcdG1hdGNoID0gY3VsdHVyZXNbIGxhbmcgXTtcblx0XHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlICggMSApO1xuXHRcdH1cblxuXHRcdC8vIGxhc3QgcmVzb3J0OiBtYXRjaCBmaXJzdCBjdWx0dXJlIHVzaW5nIHRoYXQgbGFuZ3VhZ2Vcblx0XHRmb3IgKCBpID0gMDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdGxhbmcgPSBwcmlvcml0aXplZFsgaSBdLmxhbmc7XG5cdFx0XHRmb3IgKCB2YXIgY3VsdHVyZUtleSBpbiBjdWx0dXJlcyApIHtcblx0XHRcdFx0dmFyIGN1bHR1cmUgPSBjdWx0dXJlc1sgY3VsdHVyZUtleSBdO1xuXHRcdFx0XHRpZiAoIGN1bHR1cmUubGFuZ3VhZ2UgPT0gbGFuZyApIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VsdHVyZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRlbHNlIGlmICggdHlwZW9mIG5hbWUgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblx0cmV0dXJuIG1hdGNoIHx8IG51bGw7XG59O1xuXG5HbG9iYWxpemUuZm9ybWF0ID0gZnVuY3Rpb24oIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmVTZWxlY3RvciApIHtcblx0dmFyIGN1bHR1cmUgPSB0aGlzLmZpbmRDbG9zZXN0Q3VsdHVyZSggY3VsdHVyZVNlbGVjdG9yICk7XG5cdGlmICggdmFsdWUgaW5zdGFuY2VvZiBEYXRlICkge1xuXHRcdHZhbHVlID0gZm9ybWF0RGF0ZSggdmFsdWUsIGZvcm1hdCwgY3VsdHVyZSApO1xuXHR9XG5cdGVsc2UgaWYgKCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0dmFsdWUgPSBmb3JtYXROdW1iZXIoIHZhbHVlLCBmb3JtYXQsIGN1bHR1cmUgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5HbG9iYWxpemUubG9jYWxpemUgPSBmdW5jdGlvbigga2V5LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdHJldHVybiB0aGlzLmZpbmRDbG9zZXN0Q3VsdHVyZSggY3VsdHVyZVNlbGVjdG9yICkubWVzc2FnZXNbIGtleSBdIHx8XG5cdFx0dGhpcy5jdWx0dXJlc1sgXCJkZWZhdWx0XCIgXS5tZXNzYWdlc1sga2V5IF07XG59O1xuXG5HbG9iYWxpemUucGFyc2VEYXRlID0gZnVuY3Rpb24oIHZhbHVlLCBmb3JtYXRzLCBjdWx0dXJlICkge1xuXHRjdWx0dXJlID0gdGhpcy5maW5kQ2xvc2VzdEN1bHR1cmUoIGN1bHR1cmUgKTtcblxuXHR2YXIgZGF0ZSwgcHJvcCwgcGF0dGVybnM7XG5cdGlmICggZm9ybWF0cyApIHtcblx0XHRpZiAoIHR5cGVvZiBmb3JtYXRzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Zm9ybWF0cyA9IFsgZm9ybWF0cyBdO1xuXHRcdH1cblx0XHRpZiAoIGZvcm1hdHMubGVuZ3RoICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsID0gZm9ybWF0cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdHZhciBmb3JtYXQgPSBmb3JtYXRzWyBpIF07XG5cdFx0XHRcdGlmICggZm9ybWF0ICkge1xuXHRcdFx0XHRcdGRhdGUgPSBwYXJzZUV4YWN0KCB2YWx1ZSwgZm9ybWF0LCBjdWx0dXJlICk7XG5cdFx0XHRcdFx0aWYgKCBkYXRlICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHBhdHRlcm5zID0gY3VsdHVyZS5jYWxlbmRhci5wYXR0ZXJucztcblx0XHRmb3IgKCBwcm9wIGluIHBhdHRlcm5zICkge1xuXHRcdFx0ZGF0ZSA9IHBhcnNlRXhhY3QoIHZhbHVlLCBwYXR0ZXJuc1twcm9wXSwgY3VsdHVyZSApO1xuXHRcdFx0aWYgKCBkYXRlICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGF0ZSB8fCBudWxsO1xufTtcblxuR2xvYmFsaXplLnBhcnNlSW50ID0gZnVuY3Rpb24oIHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yICkge1xuXHRyZXR1cm4gdHJ1bmNhdGUoIEdsb2JhbGl6ZS5wYXJzZUZsb2F0KHZhbHVlLCByYWRpeCwgY3VsdHVyZVNlbGVjdG9yKSApO1xufTtcblxuR2xvYmFsaXplLnBhcnNlRmxvYXQgPSBmdW5jdGlvbiggdmFsdWUsIHJhZGl4LCBjdWx0dXJlU2VsZWN0b3IgKSB7XG5cdC8vIHJhZGl4IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG5cdGlmICggdHlwZW9mIHJhZGl4ICE9PSBcIm51bWJlclwiICkge1xuXHRcdGN1bHR1cmVTZWxlY3RvciA9IHJhZGl4O1xuXHRcdHJhZGl4ID0gMTA7XG5cdH1cblxuXHR2YXIgY3VsdHVyZSA9IHRoaXMuZmluZENsb3Nlc3RDdWx0dXJlKCBjdWx0dXJlU2VsZWN0b3IgKTtcblx0dmFyIHJldCA9IE5hTixcblx0XHRuZiA9IGN1bHR1cmUubnVtYmVyRm9ybWF0O1xuXG5cdGlmICggdmFsdWUuaW5kZXhPZihjdWx0dXJlLm51bWJlckZvcm1hdC5jdXJyZW5jeS5zeW1ib2wpID4gLTEgKSB7XG5cdFx0Ly8gcmVtb3ZlIGN1cnJlbmN5IHN5bWJvbFxuXHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggY3VsdHVyZS5udW1iZXJGb3JtYXQuY3VycmVuY3kuc3ltYm9sLCBcIlwiICk7XG5cdFx0Ly8gcmVwbGFjZSBkZWNpbWFsIHNlcGVyYXRvclxuXHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggY3VsdHVyZS5udW1iZXJGb3JtYXQuY3VycmVuY3lbXCIuXCJdLCBjdWx0dXJlLm51bWJlckZvcm1hdFtcIi5cIl0gKTtcblx0fVxuXG5cdC8vUmVtb3ZlIHBlcmNlbnRhZ2UgY2hhcmFjdGVyIGZyb20gbnVtYmVyIHN0cmluZyBiZWZvcmUgcGFyc2luZ1xuXHRpZiAoIHZhbHVlLmluZGV4T2YoY3VsdHVyZS5udW1iZXJGb3JtYXQucGVyY2VudC5zeW1ib2wpID4gLTEpe1xuXHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggY3VsdHVyZS5udW1iZXJGb3JtYXQucGVyY2VudC5zeW1ib2wsIFwiXCIgKTtcblx0fVxuXG5cdC8vIHJlbW92ZSBzcGFjZXM6IGxlYWRpbmcsIHRyYWlsaW5nIGFuZCBiZXR3ZWVuIC0gYW5kIG51bWJlci4gVXNlZCBmb3IgbmVnYXRpdmUgY3VycmVuY3kgcHQtQlJcblx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCAvIC9nLCBcIlwiICk7XG5cblx0Ly8gYWxsb3cgaW5maW5pdHkgb3IgaGV4aWRlY2ltYWxcblx0aWYgKCByZWdleEluZmluaXR5LnRlc3QodmFsdWUpICkge1xuXHRcdHJldCA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cdH1cblx0ZWxzZSBpZiAoICFyYWRpeCAmJiByZWdleEhleC50ZXN0KHZhbHVlKSApIHtcblx0XHRyZXQgPSBwYXJzZUludCggdmFsdWUsIDE2ICk7XG5cdH1cblx0ZWxzZSB7XG5cblx0XHQvLyBkZXRlcm1pbmUgc2lnbiBhbmQgbnVtYmVyXG5cdFx0dmFyIHNpZ25JbmZvID0gcGFyc2VOZWdhdGl2ZVBhdHRlcm4oIHZhbHVlLCBuZiwgbmYucGF0dGVyblswXSApLFxuXHRcdFx0c2lnbiA9IHNpZ25JbmZvWyAwIF0sXG5cdFx0XHRudW0gPSBzaWduSW5mb1sgMSBdO1xuXG5cdFx0Ly8gIzQ0IC0gdHJ5IHBhcnNpbmcgYXMgXCIobilcIlxuXHRcdGlmICggc2lnbiA9PT0gXCJcIiAmJiBuZi5wYXR0ZXJuWzBdICE9PSBcIihuKVwiICkge1xuXHRcdFx0c2lnbkluZm8gPSBwYXJzZU5lZ2F0aXZlUGF0dGVybiggdmFsdWUsIG5mLCBcIihuKVwiICk7XG5cdFx0XHRzaWduID0gc2lnbkluZm9bIDAgXTtcblx0XHRcdG51bSA9IHNpZ25JbmZvWyAxIF07XG5cdFx0fVxuXG5cdFx0Ly8gdHJ5IHBhcnNpbmcgYXMgXCItblwiXG5cdFx0aWYgKCBzaWduID09PSBcIlwiICYmIG5mLnBhdHRlcm5bMF0gIT09IFwiLW5cIiApIHtcblx0XHRcdHNpZ25JbmZvID0gcGFyc2VOZWdhdGl2ZVBhdHRlcm4oIHZhbHVlLCBuZiwgXCItblwiICk7XG5cdFx0XHRzaWduID0gc2lnbkluZm9bIDAgXTtcblx0XHRcdG51bSA9IHNpZ25JbmZvWyAxIF07XG5cdFx0fVxuXG5cdFx0c2lnbiA9IHNpZ24gfHwgXCIrXCI7XG5cblx0XHQvLyBkZXRlcm1pbmUgZXhwb25lbnQgYW5kIG51bWJlclxuXHRcdHZhciBleHBvbmVudCxcblx0XHRcdGludEFuZEZyYWN0aW9uLFxuXHRcdFx0ZXhwb25lbnRQb3MgPSBudW0uaW5kZXhPZiggXCJlXCIgKTtcblx0XHRpZiAoIGV4cG9uZW50UG9zIDwgMCApIGV4cG9uZW50UG9zID0gbnVtLmluZGV4T2YoIFwiRVwiICk7XG5cdFx0aWYgKCBleHBvbmVudFBvcyA8IDAgKSB7XG5cdFx0XHRpbnRBbmRGcmFjdGlvbiA9IG51bTtcblx0XHRcdGV4cG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnRBbmRGcmFjdGlvbiA9IG51bS5zdWJzdHIoIDAsIGV4cG9uZW50UG9zICk7XG5cdFx0XHRleHBvbmVudCA9IG51bS5zdWJzdHIoIGV4cG9uZW50UG9zICsgMSApO1xuXHRcdH1cblx0XHQvLyBkZXRlcm1pbmUgZGVjaW1hbCBwb3NpdGlvblxuXHRcdHZhciBpbnRlZ2VyLFxuXHRcdFx0ZnJhY3Rpb24sXG5cdFx0XHRkZWNTZXAgPSBuZlsgXCIuXCIgXSxcblx0XHRcdGRlY2ltYWxQb3MgPSBpbnRBbmRGcmFjdGlvbi5pbmRleE9mKCBkZWNTZXAgKTtcblx0XHRpZiAoIGRlY2ltYWxQb3MgPCAwICkge1xuXHRcdFx0aW50ZWdlciA9IGludEFuZEZyYWN0aW9uO1xuXHRcdFx0ZnJhY3Rpb24gPSBudWxsO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGludGVnZXIgPSBpbnRBbmRGcmFjdGlvbi5zdWJzdHIoIDAsIGRlY2ltYWxQb3MgKTtcblx0XHRcdGZyYWN0aW9uID0gaW50QW5kRnJhY3Rpb24uc3Vic3RyKCBkZWNpbWFsUG9zICsgZGVjU2VwLmxlbmd0aCApO1xuXHRcdH1cblx0XHQvLyBoYW5kbGUgZ3JvdXBzIChlLmcuIDEsMDAwLDAwMClcblx0XHR2YXIgZ3JvdXBTZXAgPSBuZlsgXCIsXCIgXTtcblx0XHRpbnRlZ2VyID0gaW50ZWdlci5zcGxpdCggZ3JvdXBTZXAgKS5qb2luKCBcIlwiICk7XG5cdFx0dmFyIGFsdEdyb3VwU2VwID0gZ3JvdXBTZXAucmVwbGFjZSggL1xcdTAwQTAvZywgXCIgXCIgKTtcblx0XHRpZiAoIGdyb3VwU2VwICE9PSBhbHRHcm91cFNlcCApIHtcblx0XHRcdGludGVnZXIgPSBpbnRlZ2VyLnNwbGl0KCBhbHRHcm91cFNlcCApLmpvaW4oIFwiXCIgKTtcblx0XHR9XG5cdFx0Ly8gYnVpbGQgYSBuYXRpdmVseSBwYXJzYWJsZSBudW1iZXIgc3RyaW5nXG5cdFx0dmFyIHAgPSBzaWduICsgaW50ZWdlcjtcblx0XHRpZiAoIGZyYWN0aW9uICE9PSBudWxsICkge1xuXHRcdFx0cCArPSBcIi5cIiArIGZyYWN0aW9uO1xuXHRcdH1cblx0XHRpZiAoIGV4cG9uZW50ICE9PSBudWxsICkge1xuXHRcdFx0Ly8gZXhwb25lbnQgaXRzZWxmIG1heSBoYXZlIGEgbnVtYmVyIHBhdHRlcm5kXG5cdFx0XHR2YXIgZXhwU2lnbkluZm8gPSBwYXJzZU5lZ2F0aXZlUGF0dGVybiggZXhwb25lbnQsIG5mLCBcIi1uXCIgKTtcblx0XHRcdHAgKz0gXCJlXCIgKyAoIGV4cFNpZ25JbmZvWzBdIHx8IFwiK1wiICkgKyBleHBTaWduSW5mb1sgMSBdO1xuXHRcdH1cblx0XHRpZiAoIHJlZ2V4UGFyc2VGbG9hdC50ZXN0KHApICkge1xuXHRcdFx0cmV0ID0gcGFyc2VGbG9hdCggcCApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmV0O1xufTtcblxuR2xvYmFsaXplLmN1bHR1cmUgPSBmdW5jdGlvbiggY3VsdHVyZVNlbGVjdG9yICkge1xuXHQvLyBzZXR0ZXJcblx0aWYgKCB0eXBlb2YgY3VsdHVyZVNlbGVjdG9yICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHRoaXMuY3VsdHVyZVNlbGVjdG9yID0gY3VsdHVyZVNlbGVjdG9yO1xuXHR9XG5cdC8vIGdldHRlclxuXHRyZXR1cm4gdGhpcy5maW5kQ2xvc2VzdEN1bHR1cmUoIGN1bHR1cmVTZWxlY3RvciApIHx8IHRoaXMuY3VsdHVyZXNbIFwiZGVmYXVsdFwiIF07XG59O1xuXG59KCB0aGlzICkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgYmFiZWxIZWxwZXJzID0gcmVxdWlyZShcIi4vdXRpbC9iYWJlbEhlbHBlcnMuanNcIik7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZShcInJlYWN0L2xpYi9pbnZhcmlhbnRcIik7XG5cbmZ1bmN0aW9uIGN1c3RvbVByb3BUeXBlKGhhbmRsZXIsIHByb3BUeXBlLCBuYW1lKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uKSB7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghcHJvcHNbaGFuZGxlcl0pIHJldHVybiBuZXcgRXJyb3IoXCJZb3UgaGF2ZSBwcm92aWRlZCBhIGBcIiArIHByb3BOYW1lICsgXCJgIHByb3AgdG8gXCIgKyBcImBcIiArIG5hbWUgKyBcImAgd2l0aG91dCBhbiBgXCIgKyBoYW5kbGVyICsgXCJgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIFwiICsgXCJJZiB0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBcIiArIGRlZmF1bHRLZXkocHJvcE5hbWUpICsgXCJgLiBPdGhlcndpc2UsIHNldCBgXCIgKyBoYW5kbGVyICsgXCJgXCIpO1xuXG4gICAgICByZXR1cm4gcHJvcFR5cGUgJiYgcHJvcFR5cGUocHJvcHMsIHByb3BOYW1lLCBuYW1lLCBsb2NhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG52YXIgdmVyc2lvbiA9IFJlYWN0LnZlcnNpb24uc3BsaXQoXCIuXCIpLm1hcChwYXJzZUZsb2F0KTtcblxuZnVuY3Rpb24gZ2V0VHlwZShjb21wb25lbnQpIHtcbiAgaWYgKHZlcnNpb25bMF0gPT09IDAgJiYgdmVyc2lvblsxXSA+PSAxMykgcmV0dXJuIGNvbXBvbmVudDtcblxuICByZXR1cm4gY29tcG9uZW50LnR5cGU7XG59XG5cbmZ1bmN0aW9uIGdldExpbmtOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgPT09IFwidmFsdWVcIiA/IFwidmFsdWVMaW5rXCIgOiBuYW1lID09PSBcImNoZWNrZWRcIiA/IFwiY2hlY2tlZExpbmtcIiA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbXBvbmVudCwgY29udHJvbGxlZFZhbHVlcywgdGFwcykge1xuICB2YXIgbmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiLFxuICAgICAgdHlwZXMgPSB7fTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdldFR5cGUoQ29tcG9uZW50KS5wcm9wVHlwZXMpIHtcbiAgICB0eXBlcyA9IHRyYW5zZm9ybShjb250cm9sbGVkVmFsdWVzLCBmdW5jdGlvbiAob2JqLCBoYW5kbGVyLCBwcm9wKSB7XG4gICAgICB2YXIgdHlwZSA9IGdldFR5cGUoQ29tcG9uZW50KS5wcm9wVHlwZXNbcHJvcF07XG5cbiAgICAgIGludmFyaWFudCh0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiAmJiBoYW5kbGVyLnRyaW0oKS5sZW5ndGgsIFwiVW5jb250cm9sbGFibGUgLSBbJXNdOiB0aGUgcHJvcCBgJXNgIG5lZWRzIGEgdmFsaWQgaGFuZGxlciBrZXkgbmFtZSBpbiBvcmRlciB0byBtYWtlIGl0IHVuY29udHJvbGxhYmxlXCIsIENvbXBvbmVudC5kaXNwbGF5TmFtZSwgcHJvcCk7XG5cbiAgICAgIG9ialtwcm9wXSA9IGN1c3RvbVByb3BUeXBlKGhhbmRsZXIsIHR5cGUsIENvbXBvbmVudC5kaXNwbGF5TmFtZSk7XG4gICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9ialtkZWZhdWx0S2V5KHByb3ApXSA9IHR5cGU7XG4gICAgICB9XG4gICAgfSwge30pO1xuICB9XG5cbiAgbmFtZSA9IG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpO1xuXG4gIHRhcHMgPSB0YXBzIHx8IHt9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogXCJVbmNvbnRyb2xsZWRcIiArIG5hbWUsXG5cbiAgICBwcm9wVHlwZXM6IHR5cGVzLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhjb250cm9sbGVkVmFsdWVzKTtcblxuICAgICAgcmV0dXJuIHRyYW5zZm9ybShrZXlzLCBmdW5jdGlvbiAoc3RhdGUsIGtleSkge1xuICAgICAgICBzdGF0ZVtrZXldID0gcHJvcHNbZGVmYXVsdEtleShrZXkpXTtcbiAgICAgIH0sIHt9KTtcbiAgICB9LFxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvL2xldCB0aGUgc2V0U3RhdGUgdHJpZ2dlciB0aGUgdXBkYXRlXG4gICAgICByZXR1cm4gIXRoaXMuX25vdGlmeWluZztcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgbmV3UHJvcHMgPSB7fTtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbms7XG4gICAgICB2YXIgY2hlY2tlZExpbmsgPSBfcHJvcHMuY2hlY2tlZExpbms7XG4gICAgICB2YXIgcHJvcHMgPSBiYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJ2YWx1ZUxpbmtcIiwgXCJjaGVja2VkTGlua1wiXSk7XG5cbiAgICAgIGVhY2goY29udHJvbGxlZFZhbHVlcywgZnVuY3Rpb24gKGhhbmRsZSwgcHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIGxpbmtQcm9wTmFtZSA9IGdldExpbmtOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgIHByb3AgPSBfdGhpcy5wcm9wc1twcm9wTmFtZV07XG5cbiAgICAgICAgaWYgKGxpbmtQcm9wTmFtZSAmJiAhaXNQcm9wKF90aGlzLnByb3BzLCBwcm9wTmFtZSkgJiYgaXNQcm9wKF90aGlzLnByb3BzLCBsaW5rUHJvcE5hbWUpKSB7XG4gICAgICAgICAgcHJvcCA9IF90aGlzLnByb3BzW2xpbmtQcm9wTmFtZV0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQcm9wc1twcm9wTmFtZV0gPSBwcm9wICE9PSB1bmRlZmluZWQgPyBwcm9wIDogX3RoaXMuc3RhdGVbcHJvcE5hbWVdO1xuXG4gICAgICAgIG5ld1Byb3BzW2hhbmRsZV0gPSBzZXRBbmROb3RpZnkuYmluZChfdGhpcywgcHJvcE5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld1Byb3BzID0gYmFiZWxIZWxwZXJzLl9leHRlbmRzKHt9LCBwcm9wcywgbmV3UHJvcHMpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKCdwcm9wczogJywgbmV3UHJvcHMpXG4gICAgICBlYWNoKHRhcHMsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICByZXR1cm4gbmV3UHJvcHNba2V5XSA9IGNoYWluKF90aGlzLCB2YWwsIG5ld1Byb3BzW2tleV0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgbmV3UHJvcHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2V0QW5kTm90aWZ5KHByb3BOYW1lLCB2YWx1ZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGxpbmtOYW1lID0gZ2V0TGlua05hbWUocHJvcE5hbWUpLFxuICAgICAgICBoYW5kbGVyID0gdGhpcy5wcm9wc1tjb250cm9sbGVkVmFsdWVzW3Byb3BOYW1lXV07XG4gICAgLy8sIGNvbnRyb2xsZWQgPSBoYW5kbGVyICYmIGlzUHJvcCh0aGlzLnByb3BzLCBwcm9wTmFtZSk7XG5cbiAgICBpZiAobGlua05hbWUgJiYgaXNQcm9wKHRoaXMucHJvcHMsIGxpbmtOYW1lKSAmJiAhaGFuZGxlcikge1xuICAgICAgaGFuZGxlciA9IHRoaXMucHJvcHNbbGlua05hbWVdLnJlcXVlc3RDaGFuZ2VcbiAgICAgIC8vcHJvcE5hbWUgPSBwcm9wTmFtZSA9PT0gJ3ZhbHVlTGluaycgPyAndmFsdWUnIDogJ2NoZWNrZWQnXG4gICAgICA7XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX25vdGlmeWluZyA9IHRydWU7XG4gICAgICBoYW5kbGVyLmNhbGwuYXBwbHkoaGFuZGxlciwgW3RoaXMsIHZhbHVlXS5jb25jYXQoYXJncykpO1xuICAgICAgdGhpcy5fbm90aWZ5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSgoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9zZXRTdGF0ZSA9IHt9O1xuICAgICAgX3NldFN0YXRlW3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIF9zZXRTdGF0ZTtcbiAgICB9KSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUHJvcChwcm9wcywgcHJvcCkge1xuICAgIHJldHVybiBwcm9wc1twcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0S2V5KGtleSkge1xuICByZXR1cm4gXCJkZWZhdWx0XCIgKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBjaGFpbih0aGlzQXJnLCBhLCBiKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgYSAmJiBhLmNhbGwuYXBwbHkoYSwgW3RoaXNBcmddLmNvbmNhdChhcmdzKSk7XG4gICAgYiAmJiBiLmNhbGwuYXBwbHkoYiwgW3RoaXNBcmddLmNvbmNhdChhcmdzKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmosIGNiLCBzZWVkKSB7XG4gIGVhY2gob2JqLCBjYi5iaW5kKG51bGwsIHNlZWQgPSBzZWVkIHx8IChBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9KSkpO1xuICByZXR1cm4gc2VlZDtcbn1cblxuZnVuY3Rpb24gZWFjaChvYmosIGNiLCB0aGlzQXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouZm9yRWFjaChjYiwgdGhpc0FyZyk7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyhvYmosIGtleSkpIGNiLmNhbGwodGhpc0FyZywgb2JqW2tleV0sIGtleSwgb2JqKTtcbn1cblxuZnVuY3Rpb24gaGFzKG8sIGspIHtcbiAgcmV0dXJuIG8gPyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykgOiBmYWxzZTtcbn1cbi8vcmV0dXJuICFjb250cm9sbGVkIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cyk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290LmJhYmVsSGVscGVycyA9IHt9KTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgYmFiZWxIZWxwZXJzID0gZ2xvYmFsO1xuXG4gIGJhYmVsSGVscGVycy5vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLl9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn0pIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGVtcHR5RnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uKGFyZykgeyByZXR1cm4gYXJnOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZ2V0QWN0aXZlRWxlbWVudFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4vKipcbiAqIFNhbWUgYXMgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBidXQgd3JhcHMgaW4gYSB0cnktY2F0Y2ggYmxvY2suIEluIElFIGl0IGlzXG4gKiBub3Qgc2FmZSB0byBjYWxsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaWYgdGhlcmUgaXMgbm90aGluZyBmb2N1c2VkLlxuICpcbiAqIFRoZSBhY3RpdmVFbGVtZW50IHdpbGwgYmUgbnVsbCBvbmx5IGlmIHRoZSBkb2N1bWVudCBib2R5IGlzIG5vdCB5ZXQgZGVmaW5lZC5cbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudCgpIC8qP0RPTUVsZW1lbnQqLyB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWN0aXZlRWxlbWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgd2FybmluZ1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2VtcHR5RnVuY3Rpb25cIik7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQgKSB7Zm9yICh2YXIgYXJncz1bXSwkX18wPTIsJF9fMT1hcmd1bWVudHMubGVuZ3RoOyRfXzA8JF9fMTskX18wKyspIGFyZ3MucHVzaChhcmd1bWVudHNbJF9fMF0pO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8IC9eW3NcXFddKiQvLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpICB7cmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107fSk7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIE1hc3RlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc3RlciBmcm9tIFwiLi9tYXN0ZXJcIjtcblxuXG52YXIgY29sb3JzID0gWydvcmFuZ2UnLCAncmVkJywgJ2JsdWUnLCAncHVycGxlJ107XG5jb25zdCBDYWxlbmRhciA9IHJlcXVpcmUoJ3JlYWN0LXdpZGdldHMnKS5DYWxlbmRhclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgTWFzdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgfVxuXG4gICAgY29udGVudCAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxodG1sPlxuICAgICAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Rm9vPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L2hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPXt0aGlzLnByb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1hc3RlciBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIj57dGhpcy5jb250ZW50KCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvanMvZGlzdC92ZW5kb3IuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL3N0YXRpYy9qcy9kaXN0L2RlbW8uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L2h0bWw+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5NdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIGlmIChjYW5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHZhciBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVMaXN0ID0gcXVldWUuc2xpY2UoKTtcbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBxdWV1ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaGlkZGVuRGl2LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ3llcycsICdubycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
