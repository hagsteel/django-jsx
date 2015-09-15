import net from "net";
import fs from "fs";
import {renderer} from "./renderer/react/react-tempate-renderer.js"


const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        try {
            const obj = JSON.parse(data.toString());
            const renderedTemplate = renderer.render(obj.template, obj.context);
            socket.write(renderedTemplate);
        } catch (ex) {
            console.log(ex.stack);
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
    } catch(ex) {
        // Nothing to be done here
    }

    server.listen(socketPath, () => {
        console.log('Template server running');
    });
};

serve();

