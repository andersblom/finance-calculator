require('dotenv').config({
	path: './.env',
});


const env = process.env.ENVIRONMENT || 'production';
process.env.NODE_ENV = env;
const port = process.env.API_PORT || 8000;

const app = require('./app');

app.listen(port, () => {
	console.log(`API running on port ${port}`);
});
