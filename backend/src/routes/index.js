const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const courseRoutes = require("./courseRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/auth", authRoutes);

router.use("/courses", courseRoutes);

router.use("/categories", categoryRoutes);

module.exports = router;