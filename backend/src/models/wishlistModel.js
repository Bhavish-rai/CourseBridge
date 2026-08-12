const pool = require("../config/db");

const addToWishlist = async (userId, courseId) => {

    const { rows } = await pool.query(
        `
        INSERT INTO wishlists
        (
            user_id,
            course_id
        )
        VALUES
        ($1,$2)
        RETURNING *;
        `,
        [userId, courseId]
    );

    return rows[0];

};

const getWishlist = async (userId) => {

    const { rows } = await pool.query(
        `
        SELECT
            w.id,
            c.id AS course_id,
            c.title,
            c.price,
            c.thumbnail,
            c.level,
            c.language,
            u.full_name AS instructor
        FROM wishlists w
        JOIN courses c
            ON w.course_id = c.id
        JOIN users u
            ON c.user_id = u.id
        WHERE w.user_id = $1
        ORDER BY w.created_at DESC;
        `,
        [userId]
    );

    return rows;

};

const removeFromWishlist = async (userId, courseId) => {

    await pool.query(
        `
        DELETE FROM wishlists
        WHERE user_id=$1
        AND course_id=$2;
        `,
        [userId, courseId]
    );

};

module.exports = {
    addToWishlist,
    getWishlist,
    removeFromWishlist
};  