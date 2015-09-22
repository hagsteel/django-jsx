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