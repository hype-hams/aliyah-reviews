require('dotenv').config();
// const axios = require('axios');
const models = require('../model_reviews.js');

// test id 40344
// const headAuth = { Authorization: process.env.API_KEY };
// const serverAPI = 'http://localhost:5432/reviews';  //http://localhost:5432/ //'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews'

module.exports = {
  getReviews: (req, res) => {
    const { product_id } = req.query;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    const sort = req.query.sort || 'helpfulness';

    models.getReviewsDB({
      product_id, sort, page, count,
    })
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err.message));
  },
  // getProductBreakdown: (req, res) => {
  //   const { productId } = req.query;

  //   models.getMetaDB({ productId })
  //     .then((data) => res.status(200).send(data))
  //     .catch((err) => res.status(404).sende(err.message));
  // },
  // postReview: (req, res) => {
  //   const {
  //     productId,
  //     rating,
  //     summary,
  //     body,
  //     recommend,
  //     name,
  //     email,
  //     photos,
  //     characteristics,
  //   } = req.body;
  //   models.postReviewDB({
  //     productId, rating, summary, body, recommend, name, email, photos, characteristics,
  //   }).then((data) => res.status(200).send(data))
  //     .catch((err) => res.status(404).send(err.message));
  // },
  // putHelpful: (req, res) => {
  //   axios.put(`${serverAPI}/${req.body.review_id}/helpful`, req.body, {
  //     headers: headAuth,
  //   })
  //     .then((response) => {
  //       res.status(204).send(response.data);
  //     })
  //     .catch((err) => [
  //       res.status(500).send(err),
  //     ]);
  // },
  // reportReview: (req, res) => {
  //   axios.put(`${serverAPI}/${req.body.review_id}/report`, req.body, {
  //     headers: headAuth,
  //   })
  //     .then((response) => {
  //       res.status(204).send(response.data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
  // },

};
