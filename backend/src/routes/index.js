const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const courseRoutes = require("./courseRoutes");
const categoryRoutes = require("./categoryRoutes");
const exchangeRoutes = require("./exchangeRoutes");
const wishlistRoutes = require("./wishlistRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/auth", authRoutes);

router.use("/courses", courseRoutes);

router.use("/categories", categoryRoutes);

router.use("/exchanges", exchangeRoutes);

router.use("/wishlist", wishlistRoutes);

router.use("/reviews", reviewRoutes);

module.exports = router;