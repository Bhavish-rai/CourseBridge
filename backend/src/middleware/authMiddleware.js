const jwt = require("jsonwebtoken");

const asyncHandler = require("./asyncHandler");

const ApiError = require("../utils/ApiError");

const {
    findUserById
} = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {

    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {

        token = req.headers.authorization.split(" ")[1];

    }

    if (!token) {
        throw new ApiError(
            401,
            "Authentication token missing"
        );
    }

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    const user = await findUserById(decoded.id);

    if (!user) {
        throw new ApiError(
            401,
            "User not found"
        );
    }

    req.user = user;

    next();

});

module.exports = {
    protect
};