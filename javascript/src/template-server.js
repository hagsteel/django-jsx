import net from "net";
import fs from "fs";
import {renderer} from "./renderer/tempate-renderer";


const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        const obj = JSON.parse(data.toString());
        const renderedTemplate = renderer.render(obj.template, obj.context);
        socket.write(renderedTemplate);
        socket.end();
    });

});


const serve = () => {
    const socketPath = "/tmp/template-server.sock";
    try {
        // Delete stale socket
        fs.unlinkSync(socketPath);
    } catch(ex) {
        // Nothing to be done here
    }

    server.listen(socketPath, () => {
        console.log('Template server running');
    });
};

serve();

