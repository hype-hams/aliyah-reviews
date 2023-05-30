const pool = require('./db_postgres');

module.exports = {
  getReviewsDB: ({
    product_id, sort, page, count,
  }) => {
    const queryStr = `SELECT * FROM reviews
    WHERE product_id = ${product_id}
    ORDER BY ${sort} DESC
    OFFSET ${page}
    LIMIT ${count}`;
    return pool.query(queryStr);
  },
};

// module.exports = {
//   async getMetaDB({ productId }, callback) {
//     const queryStr = `SELECT rating, recommend, name, value FROM reviews
//       CROSS JOIN characteristics
//       CROSS JOIN characteristic_reviews
//       WHERE reviews.product.id = ${productId} AND characteristic_reviews.id = characteristics.id`;
//     await pool.query(queryStr, (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     });
//   },
// };

// DO THESE TO INCEMENT ID PROPERLY WITHOUT DUPS
//SELECT setval('your_sequence_name', (SELECT MAX(id) FROM questions));
// SELECT pg_get_serial_sequence('questions', 'id');

// module.exports = {
//   async postReviewDB({
//     productId,
//     rating,
//     summary,
//     body,
//     recommend,
//     name,
//     email,
//     photos,
//     characteristics
//   }, callback) {
//     const queryStr = `INSERT INTO reviews rating, recommend, name, value FROM reviews
//       CROSS JOIN characteristics
//       CROSS JOIN characteristic_reviews
//       WHERE reviews.product.id = ${productId} AND characteristic_reviews.id = characteristics.id`;
//     await pool.query(queryStr, (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     });
//   },
// };





  // create: (params, callback) => {
  //   // console.log('models file params', params)
  //   const queryStr = 'INSERT INTO reviews (product_id, raitng, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  //   pool.query(queryStr, params, (err, results) => {
  //     callback(err, results);
  //   });
  // },

// (async () => {
//   const client = await pool.connect();
//   const { rows } = await client.query('SELECT * FROM reviews');
//   console.log(rows);
// })();
