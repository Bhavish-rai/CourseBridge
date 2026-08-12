const ApiError = require("../utils/ApiError");

const {
    addReview,
    getCourseReviews,
    getAverageRating,
    updateReview,
    deleteReview,
    getReviewById
} = require("../models/reviewModel");

const createReview = async (userId, courseId, rating, comment) => {

    return await addReview(userId, courseId, rating, comment);

};

const fetchCourseReviews = async (courseId) => {

    return await getCourseReviews(courseId);

};

const fetchAverageRating = async (courseId) => {

    return await getAverageRating(courseId);

};

const editReview = async (reviewId, userId, rating, comment) => {

    const review = await getReviewById(reviewId);

    if (!review) {
        throw new ApiError(404, "Review not found");
    }

    if (review.user_id !== userId) {
        throw new ApiError(403, "Unauthorized");
    }

    return await updateReview(reviewId, rating, comment);

};

const removeReview = async (reviewId, userId) => {

    const review = await getReviewById(reviewId);

    if (!review) {
        throw new ApiError(404, "Review not found");
    }

    if (review.user_id !== userId) {
        throw new ApiError(403, "Unauthorized");
    }

    await deleteReview(reviewId);

};

module.exports = {
    createReview,
    fetchCourseReviews,
    fetchAverageRating,
    editReview,
    removeReview
};