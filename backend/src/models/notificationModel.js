const pool = require("../config/db");

const createNotification = async (
    userId,
    title,
    message,
    type
) => {

    const { rows } = await pool.query(
        `
        INSERT INTO notifications
        (
            user_id,
            title,
            message,
            type
        )
        VALUES
        ($1,$2,$3,$4)
        RETURNING *;
        `,
        [userId, title, message, type]
    );

    return rows[0];

};

const getNotifications = async (userId) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM notifications
        WHERE user_id=$1
        ORDER BY created_at DESC;
        `,
        [userId]
    );

    return rows;

};

const markAsRead = async (notificationId) => {

    const { rows } = await pool.query(
        `
        UPDATE notifications
        SET is_read=true
        WHERE id=$1
        RETURNING *;
        `,
        [notificationId]
    );

    return rows[0];

};

module.exports = {
    createNotification,
    getNotifications,
    markAsRead
};