require('dotenv').config({
	path: './.env',
});

const app = require('./app');
const port = process.env.API_PORT || 8000;

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
