const { Pool } = require('pg');
require('dotenv').config();
// console.log(process.env.DB_NAME);
// console.log(process.env.DB_USER);

const pool = new Pool({
  host: process.env.DB_HOST,
  database: 'ratingsreviews', //process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.PORT,
  max: 100,
  idelTimeOutMillis: 1000,
  allowExitOnIdle: true,
});

// (async () => {
//   const client = await pool.connect();
//   const { rows } = await client.query('EXPLAIN ANALYZE SELECT * FROM reviews WHERE id = 1');
//   console.log(rows);
// })();

module.exports = pool;
