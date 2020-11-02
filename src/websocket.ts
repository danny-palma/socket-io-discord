import socketIO from "socket.io";
import { Server } from "http";
export default function initsocket(server: Server) {
    const io = socketIO(server)
    io.on("connection", (socket) => {
        socket.emit("server:test");
    })
}
