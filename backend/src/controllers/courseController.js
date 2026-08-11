const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    addCourse,
    fetchCourses,
    fetchCourseById,
    editCourse,
    removeCourse
} = require("../services/courseService");

const createCourse = asyncHandler(async (req, res) => {

    const course = await addCourse({
        ...req.body,
        userId: req.user.id
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            course,
            "Course created successfully"
        )
    );

});

const getCourses = asyncHandler(async (req, res) => {

    const courses = await fetchCourses();

    return res.status(200).json(
        new ApiResponse(
            200,
            courses,
            "Courses fetched successfully"
        )
    );

});

const getCourse = asyncHandler(async (req, res) => {

    const course = await fetchCourseById(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            course,
            "Course fetched successfully"
        )
    );

});

const updateCourse = asyncHandler(async (req, res) => {

    const course = await editCourse(
        req.params.id,
        req.body,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            course,
            "Course updated successfully"
        )
    );

});

const deleteCourse = asyncHandler(async (req, res) => {

    await removeCourse(
        req.params.id,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Course deleted successfully"
        )
    );

});

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse
};