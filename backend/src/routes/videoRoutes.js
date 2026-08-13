const express = require("express");

const router = express.Router();

const {
    startVideoCall,
    endVideoCall,
    getCallHistory
} = require("../controllers/videoController");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/start",
    protect,
    startVideoCall
);

router.patch(
    "/end/:callId",
    protect,
    endVideoCall
);

router.get(
    "/history",
    protect,
    getCallHistory
);

module.exports = router;