require('dotenv').config();
const app = require('./index');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
