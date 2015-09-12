"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _net = require("net");

var _net2 = _interopRequireDefault(_net);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _rendererTempateRenderer = require("./renderer/tempate-renderer");

var server = _net2["default"].createServer(function (socket) {
    socket.on("data", function (data) {
        var obj = JSON.parse(data.toString());
        var renderedTemplate = _rendererTempateRenderer.renderer.render(obj.template, obj.context);
        socket.write(renderedTemplate);
        socket.end();
    });
});

var serve = function serve() {
    var socketPath = "/tmp/template-server.sock";
    _fs2["default"].unlinkSync(socketPath);

    server.listen(socketPath, function () {
        console.log("Template server running");
    });
};

serve();