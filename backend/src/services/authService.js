const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../utils/ApiError");

const {
    createUser,
    findUserByEmail,
    findUserByUsername
} = require("../models/userModel");

const registerUser = async ({
    fullName,
    username,
    email,
    password
}) => {

    const existingEmail = await findUserByEmail(email);

    if (existingEmail) {
        throw new ApiError(409, "Email already exists");
    }

    const existingUsername = await findUserByUsername(username);

    if (existingUsername) {
        throw new ApiError(409, "Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
        fullName,
        username,
        email,
        password: hashedPassword
    });

    return user;
};

const loginUser = async ({
    email,
    password
}) => {

    const user = await findUserByEmail(email);

    if (!user) {
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    return {
        token,
        user: {
            id: user.id,
            fullName: user.full_name,
            username: user.username,
            email: user.email,
            profileImage: user.profile_image,
            bio: user.bio,
            role: user.role,
            isVerified: user.is_verified
        }
    };
};

module.exports = {
    registerUser,
    loginUser
};