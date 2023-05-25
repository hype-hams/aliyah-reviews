

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  product_id INT,
  rating INT,
  date BIGINT,
  summary VARCHAR(1000),
  body VARCHAR(1000),
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(1000),
  reviewer_email TEXT,
  response VARCHAR(1000),
  helpfulness INT
);

CREATE TABLE IF NOT EXISTS characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT,
  name VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT,
  review_id INT,
  value INT,
  FOREIGN KEY (review_id) REFERENCES reviews(id),
  FOREIGN KEY (characteristic_id) REFERENCES characteristics(id)
);

CREATE TABLE IF NOT EXISTS review_photos (
  id SERIAL PRIMARY KEY,
  review_id INT,
  url VARCHAR(1000),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);



------------
COPY reviews (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
FROM '/aliyahindra/Desktop/reviews-data/reviews.csv' DELIMITER ',' CSV HEADER;

COPY characterisitcs (id, product_id, name)
FROM '/aliyahindra/Desktop/reviews-data/reviews.csv' DELIMITER ',' CSV HEADER;

COPY characterisitcs_reviews (id, characteristic_id, review_id, value)
FROM '/aliyahindra/Desktop/reviews-data/reviews.csv' DELIMITER ',' CSV HEADER;

COPY review_photos (id, review_id, url)
FROM '/aliyahindra/Desktop/reviews-data/reviews.csv' DELIMITER ',' CSV HEADER;