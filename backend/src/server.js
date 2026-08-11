require("dotenv").config();

require("./config/db");

const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


server.listen(PORT, () => {

    console.log("\n========================================");
    console.log("🚀 CourseBridge Backend Started");
    console.log("========================================");
    console.log(`🌍 Environment : ${process.env.NODE_ENV}`);
    console.log(`📌 Port        : ${PORT}`);
    console.log("========================================\n");

});