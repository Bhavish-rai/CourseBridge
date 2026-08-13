const pool = require("../config/db");

const startCall = async (chatId, callerId, receiverId) => {

    const { rows } = await pool.query(
        `
        INSERT INTO video_calls
        (
            chat_id,
            caller_id,
            receiver_id
        )
        VALUES
        ($1,$2,$3)
        RETURNING *;
        `,
        [chatId, callerId, receiverId]
    );

    return rows[0];

};

const endCall = async (callId) => {

    const { rows } = await pool.query(
        `
        UPDATE video_calls
        SET
            status='ended',
            ended_at=NOW()
        WHERE id=$1
        RETURNING *;
        `,
        [callId]
    );

    return rows[0];

};

const getHistory = async (userId) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM video_calls
        WHERE
        caller_id=$1
        OR
        receiver_id=$1
        ORDER BY created_at DESC;
        `,
        [userId]
    );

    return rows;

};

module.exports = {
    startCall,
    endCall,
    getHistory
};