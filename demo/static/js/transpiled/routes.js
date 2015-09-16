"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var _componentsAbout = require("./components/about");

var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

var _componentsHome = require("./components/home");

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsForm = require("./components/form");

var _componentsForm2 = _interopRequireDefault(_componentsForm);

var routes = {
    path: "/",
    component: _app2["default"],
    childRoutes: [{ path: "about", component: _componentsAbout2["default"] }, { path: "home", component: _componentsHome2["default"] }, { path: "form", component: _componentsForm2["default"] }]
};

//React.render(<Router routes={routes}/>, document.body)

exports.routes = routes;