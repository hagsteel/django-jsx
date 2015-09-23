'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var reactRendererPath = './renderer/react/react-template-renderer.js';

var getArgsAsDict = function getArgsAsDict() {
    var commandArgs = {};
    if (process.argv.length > 2) {
        for (var i = 2; i < process.argv.length; i += 1) {
            var opt = process.argv[i].split('=');
            commandArgs[opt[0]] = opt[1];
        }
    }
    return commandArgs;
};

var getOptions = function getOptions() {
    var options = getArgsAsDict();

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
    var cmdArgs = getArgsAsDict();
    var socketPath = '/tmp/template-server.sock';

    if (cmdArgs.socketPath) {
        socketPath = cmdArgs.socketPath;
    }

    try {
        // Delete stale socket
        _fs2['default'].unlinkSync(socketPath);
    } catch (ex) {}

    server.listen(socketPath, function () {
        console.log('=======================');
        console.log('Template server running');
        console.log('Socket: ' + socketPath);
        console.log('=======================');
    });
};

serve();

// Nothing to be done here