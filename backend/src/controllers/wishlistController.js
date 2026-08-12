const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    saveCourse,
    fetchWishlist,
    deleteWishlistCourse
} = require("../services/wishlistService");

const addWishlist = asyncHandler(async (req, res) => {

    const wishlist = await saveCourse(
        req.user.id,
        req.body.courseId
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            wishlist,
            "Course added to wishlist successfully"
        )
    );

});

const getWishlist = asyncHandler(async (req, res) => {

    const wishlist = await fetchWishlist(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            wishlist,
            "Wishlist fetched successfully"
        )
    );

});

const removeWishlist = asyncHandler(async (req, res) => {

    await deleteWishlistCourse(
        req.user.id,
        req.params.courseId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Course removed from wishlist successfully"
        )
    );

});

module.exports = {
    addWishlist,
    getWishlist,
    removeWishlist
};