const express = require("express");

const router = express.Router();

const {
    addReview,
    getReviews,
    getAverage,
    updateReview,
    deleteReview
} = require("../controllers/reviewController");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/",
    protect,
    addReview
);

router.get(
    "/:courseId",
    getReviews
);

router.get(
    "/:courseId/average",
    getAverage
);

router.put(
    "/:reviewId",
    protect,
    updateReview
);

router.delete(
    "/:reviewId",
    protect,
    deleteReview
);

module.exports = router;