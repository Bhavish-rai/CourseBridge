const pool = require("../config/db");

const createExchangeRequest = async ({
    senderId,
    receiverId,
    senderCourseId,
    receiverCourseId,
    message
}) => {

    const query = `
        INSERT INTO exchange_requests
        (
            sender_id,
            receiver_id,
            sender_course_id,
            receiver_course_id,
            message
        )
        VALUES
        ($1,$2,$3,$4,$5)
        RETURNING *;
    `;

    const values = [
        senderId,
        receiverId,
        senderCourseId,
        receiverCourseId,
        message || null
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];

};

const getIncomingRequests = async (userId) => {

    const query = `
        SELECT
            er.*,
            u.full_name AS sender_name,
            sc.title AS sender_course,
            rc.title AS receiver_course
        FROM exchange_requests er
        JOIN users u
            ON er.sender_id = u.id
        JOIN courses sc
            ON er.sender_course_id = sc.id
        JOIN courses rc
            ON er.receiver_course_id = rc.id
        WHERE er.receiver_id = $1
        ORDER BY er.created_at DESC;
    `;

    const { rows } = await pool.query(query, [userId]);

    return rows;

};

const getOutgoingRequests = async (userId) => {

    const query = `
        SELECT
            er.*,
            u.full_name AS receiver_name,
            sc.title AS sender_course,
            rc.title AS receiver_course
        FROM exchange_requests er
        JOIN users u
            ON er.receiver_id = u.id
        JOIN courses sc
            ON er.sender_course_id = sc.id
        JOIN courses rc
            ON er.receiver_course_id = rc.id
        WHERE er.sender_id = $1
        ORDER BY er.created_at DESC;
    `;

    const { rows } = await pool.query(query, [userId]);

    return rows;

};

const getExchangeById = async (id) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM exchange_requests
        WHERE id = $1;
        `,
        [id]
    );

    return rows[0];

};

const updateExchangeStatus = async (id, status) => {

    const { rows } = await pool.query(
        `
        UPDATE exchange_requests
        SET
            status = $1,
            updated_at = NOW()
        WHERE id = $2
        RETURNING *;
        `,
        [status, id]
    );

    return rows[0];

};

module.exports = {
    createExchangeRequest,
    getIncomingRequests,
    getOutgoingRequests,
    getExchangeById,
    updateExchangeStatus
};