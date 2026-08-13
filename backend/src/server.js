require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");

// Just importing db.js is enough because it connects automatically
require("./config/db");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

require("./sockets/socket")(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log("========================================");
    console.log("🚀 CourseBridge Backend Started");
    console.log(`🌍 Environment : ${process.env.NODE_ENV}`);
    console.log(`📌 Port        : ${PORT}`);
    console.log("========================================");
});