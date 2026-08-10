const pool = require("../config/db");

/**
 * Find user by email
 */
const findUserByEmail = async (email) => {
    const query = `
        SELECT *
        FROM users
        WHERE email = $1
    `;

    const { rows } = await pool.query(query, [email]);
    return rows[0];
};

/**
 * Find user by username
 */
const findUserByUsername = async (username) => {
    const query = `
        SELECT *
        FROM users
        WHERE username = $1
    `;

    const { rows } = await pool.query(query, [username]);
    return rows[0];
};

/**
 * Find user by ID
 */
const findUserById = async (id) => {
    const query = `
        SELECT
            id,
            full_name,
            username,
            email,
            profile_image,
            bio,
            role,
            is_verified,
            created_at,
            updated_at
        FROM users
        WHERE id = $1
    `;

    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

/**
 * Create a new user
 */
const createUser = async ({
    fullName,
    username,
    email,
    password
}) => {

    const query = `
        INSERT INTO users
        (
            full_name,
            username,
            email,
            password
        )
        VALUES
        (
            $1,
            $2,
            $3,
            $4
        )
        RETURNING
            id,
            full_name,
            username,
            email,
            profile_image,
            bio,
            role,
            is_verified,
            created_at,
            updated_at
    `;

    const values = [
        fullName,
        username,
        email,
        password
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserByUsername,
    findUserById
};