const pool = require("../config/db");

const addReview = async (userId, courseId, rating, comment) => {

    const { rows } = await pool.query(
        `
        INSERT INTO reviews
        (
            user_id,
            course_id,
            rating,
            review
        )
        VALUES
        ($1,$2,$3,$4)
        RETURNING *;
        `,
        [userId, courseId, rating, comment]
    );

    return rows[0];

};

const getCourseReviews = async (courseId) => {

    const { rows } = await pool.query(
        `
        SELECT
            r.*,
            u.full_name,
            u.username
        FROM reviews r
        JOIN users u
            ON r.user_id = u.id
        WHERE r.course_id = $1
        ORDER BY r.created_at DESC;
        `,
        [courseId]
    );

    return rows;

};

const getAverageRating = async (courseId) => {

    const { rows } = await pool.query(
        `
        SELECT
            ROUND(AVG(rating)::numeric,1) AS average_rating,
            COUNT(*) AS total_reviews
        FROM reviews
        WHERE course_id = $1;
        `,
        [courseId]
    );

    return rows[0];

};

const updateReview = async (reviewId, rating, comment) => {

    const { rows } = await pool.query(
        `
        UPDATE reviews
        SET
            rating = $1,
            review = $2
        WHERE id = $3
        RETURNING *;
        `,
        [rating, comment, reviewId]
    );

    return rows[0];

};

const deleteReview = async (reviewId) => {

    await pool.query(
        `
        DELETE FROM reviews
        WHERE id = $1;
        `,
        [reviewId]
    );

};

const getReviewById = async (reviewId) => {

    const { rows } = await pool.query(
        `
        SELECT *
        FROM reviews
        WHERE id = $1;
        `,
        [reviewId]
    );

    return rows[0];

};

module.exports = {
    addReview,
    getCourseReviews,
    getAverageRating,
    updateReview,
    deleteReview,
    getReviewById
};