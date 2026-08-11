const pool = require("../config/db");

/**
 * Create Course
 */
const createCourse = async ({
    userId,
    categoryId,
    title,
    description,
    level,
    language,
    price,
    exchangeAvailable,
    thumbnail,
    courseLink,
    tags
}) => {

    const query = `
        INSERT INTO courses
        (
            user_id,
            category_id,
            title,
            description,
            level,
            language,
            price,
            exchange_available,
            thumbnail,
            course_link,
            tags
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
        )
        RETURNING *;
    `;

    const values = [
        userId,
        categoryId,
        title,
        description,
        level,
        language || "English",
        price || 0,
        exchangeAvailable ?? true,
        thumbnail || null,
        courseLink,
        tags || []
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];
};

/**
 * Search + Filter + Pagination
 */
const getAllCourses = async ({
    page = 1,
    limit = 10,
    search = "",
    category = ""
}) => {

    const offset = (page - 1) * limit;

    let query = `
        SELECT
            c.*,
            u.full_name,
            u.username,
            cat.name AS category
        FROM courses c
        JOIN users u
            ON c.user_id = u.id
        JOIN categories cat
            ON c.category_id = cat.id
        WHERE 1=1
    `;

    const values = [];
    let index = 1;

    if (search) {
        query += `
            AND
            (
                LOWER(c.title) LIKE LOWER($${index})
                OR LOWER(c.description) LIKE LOWER($${index})
            )
        `;

        values.push(`%${search}%`);
        index++;
    }

    if (category) {

        query += `
            AND cat.name = $${index}
        `;

        values.push(category);
        index++;

    }

    query += `
        ORDER BY c.created_at DESC
        LIMIT $${index}
        OFFSET $${index + 1}
    `;

    values.push(limit);
    values.push(offset);

    const { rows } = await pool.query(query, values);

    return rows;
};

/**
 * Get Course By Id
 */
const getCourseById = async (id) => {

    const { rows } = await pool.query(
        `
        SELECT
            c.*,
            u.full_name,
            u.username,
            cat.name AS category
        FROM courses c
        JOIN users u
            ON c.user_id = u.id
        JOIN categories cat
            ON c.category_id = cat.id
        WHERE c.id=$1
        `,
        [id]
    );

    return rows[0];

};

/**
 * Update Course
 */
const updateCourse = async (id, data) => {

    const query = `
        UPDATE courses
        SET
            category_id=$1,
            title=$2,
            description=$3,
            level=$4,
            language=$5,
            price=$6,
            exchange_available=$7,
            thumbnail=$8,
            course_link=$9,
            tags=$10,
            updated_at=NOW()
        WHERE id=$11
        RETURNING *;
    `;

    const values = [
        data.categoryId,
        data.title,
        data.description,
        data.level,
        data.language,
        data.price,
        data.exchangeAvailable,
        data.thumbnail,
        data.courseLink,
        data.tags,
        id
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];

};

const deleteCourse = async (id) => {

    await pool.query(
        "DELETE FROM courses WHERE id=$1",
        [id]
    );

};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};