const { body, validationResult } = require("express-validator");

const createCourseValidation = [
    body("categoryId")
        .notEmpty()
        .withMessage("Category is required"),

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 5, max: 200 })
        .withMessage("Title must be between 5 and 200 characters"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 20 })
        .withMessage("Description must be at least 20 characters"),

    body("level")
        .isIn(["Beginner", "Intermediate", "Advanced"])
        .withMessage("Invalid level"),

    body("language")
        .optional()
        .isString(),

    body("price")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Price cannot be negative"),

    body("courseLink")
        .isURL()
        .withMessage("Invalid course link")
];

const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    createCourseValidation,
    validate
};