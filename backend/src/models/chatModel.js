const pool = require("../config/db");

const createChat = async (user1Id, user2Id) => {

    const existing = await pool.query(
        `
        SELECT *
        FROM chats
        WHERE
        (user1_id = $1 AND user2_id = $2)
        OR
        (user1_id = $2 AND user2_id = $1);
        `,
        [user1Id, user2Id]
    );

    if (existing.rows.length > 0) {
        return existing.rows[0];
    }

    const { rows } = await pool.query(
        `
        INSERT INTO chats
        (
            user1_id,
            user2_id
        )
        VALUES
        ($1,$2)
        RETURNING *;
        `,
        [user1Id, user2Id]
    );

    return rows[0];

};

const getUserChats = async (userId) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM chats
        WHERE
        user1_id = $1
        OR
        user2_id = $1
        ORDER BY created_at DESC;
        `,
        [userId]
    );

    return rows;

};

const getMessages = async (chatId) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM messages
        WHERE chat_id = $1
        ORDER BY created_at ASC;
        `,
        [chatId]
    );

    return rows;

};

const saveMessage = async (chatId, senderId, message) => {

    const { rows } = await pool.query(
        `
        INSERT INTO messages
        (
            chat_id,
            sender_id,
            message
        )
        VALUES
        ($1,$2,$3)
        RETURNING *;
        `,
        [chatId, senderId, message]
    );

    return rows[0];

};

module.exports = {
    createChat,
    getUserChats,
    getMessages,
    saveMessage
};