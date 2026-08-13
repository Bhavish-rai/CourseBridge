const express = require("express");

const router = express.Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
const {
    register,
    login,
    getProfile
} = require("../controllers/authController");

const {
    registerValidation,
    loginValidation
} = require("../validators/authValidator");

const validate = require("../middleware/validationMiddleware");

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