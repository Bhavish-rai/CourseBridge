const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const courseRoutes = require("./courseRoutes");
const categoryRoutes = require("./categoryRoutes");
const exchangeRoutes = require("./exchangeRoutes");
const wishlistRoutes = require("./wishlistRoutes");
const reviewRoutes = require("./reviewRoutes");
const chatRoutes = require("./chatRoutes");
const videoRoutes = require("./videoRoutes");
const notificationRoutes = require("./notificationRoutes");

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/categories", categoryRoutes);
router.use("/exchanges", exchangeRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/reviews", reviewRoutes);
router.use("/chat", chatRoutes);
router.use("/video", videoRoutes);
router.use("/notifications", notificationRoutes);

module.exports = router;