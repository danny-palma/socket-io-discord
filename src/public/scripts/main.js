const socket = io();

socket.on("server:test", () => {
    console.log("tested")
})