const ApiError = require("../utils/ApiError");

const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../models/courseModel");

const addCourse = async (courseData) => {

    return await createCourse(courseData);

};

const fetchCourses = async () => {

    return await getAllCourses();

};

const fetchCourseById = async (id) => {

    const course = await getCourseById(id);

    if (!course) {
        throw new ApiError(404, "Course not found");
    }

    return course;

};

const editCourse = async (id, data, userId) => {

    const course = await getCourseById(id);

    if (!course)
        throw new ApiError(404, "Course not found");

    if (course.user_id !== userId)
        throw new ApiError(403, "Unauthorized");

    return await updateCourse(id, data);

};

const removeCourse = async (id, userId) => {

    const course = await getCourseById(id);

    if (!course)
        throw new ApiError(404, "Course not found");

    if (course.user_id !== userId)
        throw new ApiError(403, "Unauthorized");

    await deleteCourse(id);

};



module.exports = {
    addCourse,
    fetchCourses,
    fetchCourseById,
    editCourse,
    removeCourse
};