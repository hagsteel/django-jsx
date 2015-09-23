import net from 'net';
import fs from 'fs';

const reactRendererPath = './renderer/react/react-template-renderer.js';


const getArgsAsDict = () => {
    const commandArgs = {};
    if (process.argv.length > 2) {
        for (let i = 2; i < process.argv.length; i += 1) {
            const opt = process.argv[i].split("=");
            commandArgs[opt[0]] = opt[1];
        }
    }
    return commandArgs;
};

const getOptions = () => {
    const options = getArgsAsDict();

    if (options.renderer === undefined) {
        options.renderer = require(reactRendererPath).renderer;
    } else {
        options.renderer = require(options.renderer);
    }

    return options;
};


const server = net.createServer((socket) => {
    const options = getOptions();
    const renderer = options.renderer;

    socket.on("data", (data) => {
        try {
            const obj = JSON.parse(data.toString());
            const renderedTemplate = renderer.render(obj.template, obj.context, obj.request);
            socket.write("0" + renderedTemplate);
        } catch (ex) {
            socket.write("1" + ex.stack);
        } finally {
            socket.end();
        }
    });

});


const serve = () => {
    const cmdArgs = getArgsAsDict();
    let socketPath = "/tmp/template-server.sock";

    if (cmdArgs.socketPath) {
        socketPath = cmdArgs.socketPath;
    }

    try {
        // Delete stale socket
        fs.unlinkSync(socketPath);
    } catch (ex) {
        // Nothing to be done here
    }

    server.listen(socketPath, () => {
        console.log('=======================');
        console.log('Template server running');
        console.log('Socket: ' + socketPath);
        console.log('=======================');
    });
};


serve();

