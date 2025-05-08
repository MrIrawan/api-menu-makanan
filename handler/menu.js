const { nanoid } = require('nanoid');
const db = require('../db');

const storeMenuHandler = async (request, response) => {
    const { name, categories } = request.body;
    const UID = nanoid(18);

    if (!name) {
        return response.status(400).json({ status: "failed to store menu", message: 'Name are required' });
    }

    await db.query(
        `INSERT INTO menus (uid, name, categories) VALUES ($1, $2, $3)`,
        [UID, name, categories ? JSON.stringify(categories) : null]
    )

    return response.status(201).json({
        status: "success to store menu",
        message: "your menu has stored"
    });
};

const getAllMenuHandler = async (request, response) => {
    const { rows } = await db.query(`SELECT * FROM menu_makanan`);

    return response.status(200).json({
        status: "success to get all menu",
        data: rows
    });
};

module.exports = { storeMenuHandler };