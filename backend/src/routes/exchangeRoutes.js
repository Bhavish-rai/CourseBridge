const express = require("express");

const router = express.Router();

const {
    createExchange,
    getIncoming,
    getOutgoing,
    acceptRequest,
    rejectRequest,
    cancelRequest
} = require("../controllers/exchangeController");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/",
    protect,
    createExchange
);

router.get(
    "/incoming",
    protect,
    getIncoming
);

router.get(
    "/outgoing",
    protect,
    getOutgoing
);

router.patch(
    "/:id/accept",
    protect,
    acceptRequest
);

router.patch(
    "/:id/reject",
    protect,
    rejectRequest
);

router.patch(
    "/:id/cancel",
    protect,
    cancelRequest
);

module.exports = router;