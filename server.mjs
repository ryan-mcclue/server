import { WebSocketServer } from "ws";
const SERVER_PORT = 6970;
const wss = new WebSocketServer({
    port: SERVER_PORT
});
wss.on("connection", (ws) => {
    console.log("connection recieved");
});
console.log(`listening: localhost:${SERVER_PORT}`);
//# sourceMappingURL=server.mjs.map