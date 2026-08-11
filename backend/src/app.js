const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Welcome to CourseBridge API 🚀"
    });

});

app.use("/api/v1", routes);

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});

app.use(errorHandler);

module.exports = app;