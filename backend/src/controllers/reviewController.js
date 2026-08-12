const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    createReview,
    fetchCourseReviews,
    fetchAverageRating,
    editReview,
    removeReview
} = require("../services/reviewService");

const addReview = asyncHandler(async (req, res) => {

    const review = await createReview(
        req.user.id,
        req.body.courseId,
        req.body.rating,
        req.body.comment
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            review,
            "Review added successfully"
        )
    );

});

const getReviews = asyncHandler(async (req, res) => {

    const reviews = await fetchCourseReviews(
        req.params.courseId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            reviews,
            "Reviews fetched successfully"
        )
    );

});

const getAverage = asyncHandler(async (req, res) => {

    const average = await fetchAverageRating(
        req.params.courseId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            average,
            "Average rating fetched successfully"
        )
    );

});

const updateReview = asyncHandler(async (req, res) => {

    const review = await editReview(
        req.params.reviewId,
        req.user.id,
        req.body.rating,
        req.body.comment
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            review,
            "Review updated successfully"
        )
    );

});

const deleteReview = asyncHandler(async (req, res) => {

    await removeReview(
        req.params.reviewId,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Review deleted successfully"
        )
    );

});

module.exports = {
    addReview,
    getReviews,
    getAverage,
    updateReview,
    deleteReview
};