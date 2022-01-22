import { Server } from "socket.io";

const io = new Server(3002, {
  path: "/",
});

io.on("connection", (socket) => {
  socket.emit("halo");
});
