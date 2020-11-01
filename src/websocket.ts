import socketIO from "socket.io"
export default function initsocket(server: any) {
    const io = socketIO(server)
    io.on("connection", (socket) => {
        socket.emit("server:test");
    })
}
