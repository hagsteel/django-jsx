'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var reactRendererPath = './renderer/react/react-tempate-renderer.js';

var getOptions = function getOptions() {
    if (process.argv.length < 3) {
        return {};
    }

    var options = {};
    for (var i = 2; i < process.argv.length; i += 1) {
        var opt = process.argv[i].split('=');
        options[opt[0]] = opt[1];
    }

    if (options.renderer === undefined) {
        options.renderer = require(reactRendererPath).renderer;
    } else {
        options.renderer = require(options.renderer);
    }

    return options;
};

var server = _net2['default'].createServer(function (socket) {
    var options = getOptions();
    var renderer = options.renderer;

    socket.on('data', function (data) {
        try {
            var obj = JSON.parse(data.toString());
            var renderedTemplate = renderer.render(obj.template, obj.context, obj.request);
            socket.write('0' + renderedTemplate);
        } catch (ex) {
            socket.write('1' + ex.stack);
        } finally {
            socket.end();
        }
    });
});

var serve = function serve() {
    var socketPath = '/tmp/template-server.sock';
    try {
        // Delete stale socket
        _fs2['default'].unlinkSync(socketPath);
    } catch (ex) {}

    server.listen(socketPath, function () {
        console.log('Template server running');
    });
};

serve();

// Nothing to be done here