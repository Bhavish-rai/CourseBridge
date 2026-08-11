const pool = require("../config/db");

const getAllCategories = async () => {

    const query = `
        SELECT
            id,
            name,
            description,
            created_at
        FROM categories
        ORDER BY name ASC;
    `;

    const { rows } = await pool.query(query);

    return rows;

};

const getCategoryById = async (id) => {

    const query = `
        SELECT *
        FROM categories
        WHERE id=$1;
    `;

    const { rows } = await pool.query(query, [id]);

    return rows[0];

};

module.exports = {
    getAllCategories,
    getCategoryById
};