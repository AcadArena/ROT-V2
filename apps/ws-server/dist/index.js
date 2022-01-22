"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(3002, {
    path: "/"
});
io.on("connection", function (socket) {
    socket.emit("halo");
});
