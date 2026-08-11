const asyncHandler = require("../middleware/asyncHandler");

const ApiResponse = require("../utils/ApiResponse");

const {
    fetchCategories,
    fetchCategory
} = require("../services/categoryService");

const getCategories = asyncHandler(async (req, res) => {

    const categories = await fetchCategories();

    return res.status(200).json(
        new ApiResponse(
            200,
            categories,
            "Categories fetched successfully"
        )
    );

});

const getCategory = asyncHandler(async (req, res) => {

    const category = await fetchCategory(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            category,
            "Category fetched successfully"
        )
    );

});

module.exports = {
    getCategories,
    getCategory
};