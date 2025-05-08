const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PG_PASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
});

pool.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err.stack));

module.exports = pool