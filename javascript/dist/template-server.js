"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _net = require("net");

var _net2 = _interopRequireDefault(_net);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _rendererReactReactTempateRendererJs = require("./renderer/react/react-tempate-renderer.js");

var server = _net2["default"].createServer(function (socket) {
    socket.on("data", function (data) {
        try {
            var obj = JSON.parse(data.toString());
            var renderedTemplate = _rendererReactReactTempateRendererJs.renderer.render(obj.template, obj.context);
            socket.write(renderedTemplate);
        } catch (ex) {
            console.log(ex.stack);
        } finally {
            socket.end();
        }
    });
});

var serve = function serve() {
    var socketPath = "/tmp/template-server.sock";
    try {
        // Delete stale socket
        _fs2["default"].unlinkSync(socketPath);
    } catch (ex) {}

    server.listen(socketPath, function () {
        console.log("Template server running");
    });
};

serve();

// Nothing to be done here