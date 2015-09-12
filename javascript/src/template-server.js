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
    fs.unlinkSync(socketPath);

    server.listen(socketPath, () => {
        console.log('Template server running');
    });
};

serve();

