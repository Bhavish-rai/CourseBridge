const express = require("express");

const router = express.Router();

const {
    createNotification,
    getMyNotifications,
    markNotificationRead
} = require("../controllers/notificationController");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/",
    protect,
    createNotification
);

router.get(
    "/",
    protect,
    getMyNotifications
);

router.patch(
    "/:notificationId/read",
    protect,
    markNotificationRead
);

module.exports = router;