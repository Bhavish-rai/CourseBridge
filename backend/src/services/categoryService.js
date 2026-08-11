const ApiError = require("../utils/ApiError");

const {
    getAllCategories,
    getCategoryById
} = require("../models/categoryModel");

const fetchCategories = async () => {

    return await getAllCategories();

};

const fetchCategory = async (id) => {

    const category = await getCategoryById(id);

    if (!category) {
        throw new ApiError(404, "Category not found");
    }

    return category;

};



module.exports = {
    fetchCategories,
    fetchCategory
};