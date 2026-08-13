const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    addNotification,
    fetchNotifications,
    readNotification
} = require("../services/notificationService");

const createNotification = asyncHandler(async (req, res) => {

    const notification = await addNotification(
        req.user.id,
        req.body.title,
        req.body.message,
        req.body.type
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            notification,
            "Notification created successfully"
        )
    );

});

const getMyNotifications = asyncHandler(async (req, res) => {

    const notifications = await fetchNotifications(
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            notifications,
            "Notifications fetched successfully"
        )
    );

});

const markNotificationRead = asyncHandler(async (req, res) => {

    const notification = await readNotification(
        req.params.notificationId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            notification,
            "Notification marked as read"
        )
    );

});

module.exports = {
    createNotification,
    getMyNotifications,
    markNotificationRead
};