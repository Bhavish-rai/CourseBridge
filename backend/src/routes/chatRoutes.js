const express = require("express");

const router = express.Router();

const {
    createChat,
    getChats,
    getChatMessages,
    createMessage
} = require("../controllers/chatController");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/",
    protect,
    createChat
);

router.get(
    "/",
    protect,
    getChats
);

router.get(
    "/:chatId/messages",
    protect,
    getChatMessages
);

router.post(
    "/:chatId/messages",
    protect,
    createMessage
);

module.exports = router;