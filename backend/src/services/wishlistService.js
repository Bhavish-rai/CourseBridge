const {
    addToWishlist,
    getWishlist,
    removeFromWishlist
} = require("../models/wishlistModel");

const saveCourse = async (userId, courseId) => {

    return await addToWishlist(userId, courseId);

};

const fetchWishlist = async (userId) => {

    return await getWishlist(userId);

};

const deleteWishlistCourse = async (userId, courseId) => {

    await removeFromWishlist(userId, courseId);

};

module.exports = {
    saveCourse,
    fetchWishlist,
    deleteWishlistCourse
};