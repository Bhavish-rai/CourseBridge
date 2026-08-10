const express = require("express");

const router = express.Router();

const {
    register,
    login,
    getProfile
} = require("../controllers/authController");

const {
    registerValidation,
    loginValidation,
    validate
} = require("../validators/authValidator");

const {
    protect
} = require("../middleware/authMiddleware");

router.post(
    "/register",
    registerValidation,
    validate,
    register
);

router.post(
    "/login",
    loginValidation,
    validate,
    login
);

router.get(
    "/me",
    protect,
    getProfile
);

module.exports = router;