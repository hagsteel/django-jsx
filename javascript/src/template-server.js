import net from 'net';
import fs from 'fs';

const reactRendererPath = './renderer/react/react-template-renderer.js';


const getOptions = () => {
    const options = {};

    if (process.argv.length < 3) {
        for (let i = 2; i < process.argv.length; i += 1) {
            const opt = process.argv[i].split("=");
            options[opt[0]] = opt[1];
        }
    }

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
    const socketPath = "/tmp/template-server.sock";
    try {
        // Delete stale socket
        fs.unlinkSync(socketPath);
    } catch (ex) {
        // Nothing to be done here
    }

    server.listen(socketPath, () => {
        console.log('Template server running');
    });
};


serve();

