const express = require("express");

const router = express.Router();

const {
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");

const {
    createCourseValidation,
    validate
} = require("../validators/courseValidator");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/",
    protect,
    createCourseValidation,
    validate,
    createCourse
);

router.get(
    "/",
    getCourses
);

router.get(
    "/:id",
    getCourse
);

router.put(
    "/:id",
    protect,
    createCourseValidation,
    validate,
    updateCourse
);

router.delete(
    "/:id",
    protect,
    deleteCourse
);

module.exports = router;