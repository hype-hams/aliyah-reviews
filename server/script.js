import http from 'k6/http';
import { check, sleep } from 'k6';


// GET/reviews
// export const options = {
//   vus: 1000,
//   duration: '30s',
//   thresholds: {
//     http_req_duration: ['p(90)<2000'],
//   },
// };
// export default function () {
//   const productId = Math.floor(Math.random() * 10000);

//   http.get(`http://localhost:3000/api/reviews?page=1&count=5&product_id=${productId}&sort=helpfulness`);
//   sleep(1);
// }


// GET/reviews/meta

// export const options = {
//   vus: 1000,
//   duration: '30s',
//   thresholds: {
//     http_req_duration: ['p(90)<2000'],
//   },
// };
// export default function () {
//   const productId = Math.floor(Math.random() * 10000);

//   http.get(`http://localhost:3000/api/reviews/meta?product_id=${productId}`);
//   sleep(1);
// }
