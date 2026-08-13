const {
    createNotification,
    getNotifications,
    markAsRead
} = require("../models/notificationModel");

const addNotification = async (
    userId,
    title,
    message,
    type
) => {

    return await createNotification(
        userId,
        title,
        message,
        type
    );

};

const fetchNotifications = async (userId) => {

    return await getNotifications(userId);

};

const readNotification = async (notificationId) => {

    return await markAsRead(notificationId);

};

module.exports = {
    addNotification,
    fetchNotifications,
    readNotification
};