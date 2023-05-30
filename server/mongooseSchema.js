const mongoose = require('mongoose')

const review = mongoose.Schema({
  id: {
    type: NUMBER,
    required: true,
    unique: true
  },
  rating: NUMBER,
  summary: STRING,
  recommend: BOOLEAN,
  response: STRING,
  body: STRING,
  date: NUMBER,
  reviewer_name: STRING,
  reviewer_email: STRING,
  photos: ARRAY,
  helpfulness: NUMBER,
  reported: BOOLEAN,
  product_id: {
    type: NUMBER,
    ref: product_id,
    required: true
  },
})

const characteristics = mongoose.Schema({
  id: {
    type: NUMBER,
    required: true,
    unique: true
  },
  name: STRING,
  product_id: {
    type: NUMBER,
    ref: product_id,
    required: true
  },
})

const characteristics_reviews = mongoose.Schema({
  id: {
    type: NUMBER,
    required: true,
    unique: true
  },
  name: STRING,
  review_id: {
    type: NUMBER,
    ref: review,
    required: true
  },
  characteritic_id: {
    type: NUMBER,
    ref: characteristic,
    required: true
  },
})

const review_photos = mongoose.Schema({
  id: {
    type: NUMBER,
    required: true,
    unique: true
  },
  url: STRING,
  review_id: {
    type: NUMBER,
    ref: review,
    required: true
  },
})