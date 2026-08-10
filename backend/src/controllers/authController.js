const asyncHandler = require("../middleware/asyncHandler");

const ApiResponse = require("../utils/ApiResponse");

const {
    registerUser,
    loginUser
} = require("../services/authService");

const register = asyncHandler(async (req, res) => {

    const user = await registerUser(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            user,
            "User registered successfully"
        )
    );

});

const login = asyncHandler(async (req, res) => {

    const result = await loginUser(req.body);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                token: result.token,
                user: result.user
            },
            "Login successful"
        )
    );

});

const getProfile = asyncHandler(async (req, res) => {

    return res.status(200).json(
        new ApiResponse(
            200,
            req.user,
            "Profile fetched successfully"
        )
    );

});

module.exports = {
    register,
    login,
    getProfile
};