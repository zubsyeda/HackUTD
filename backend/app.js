require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: [
			'https://localhost:3000',
			'https://localhost:6000',
			'https://localhost:6000',
		],
		methods: ['GET, POST, PUT, DELETE'],
		credentials: true,
	}),
);

const resultRoutes = require('./routes/result-route');
app.use('/api/chatgpt', resultRoutes);

const bingRoutes = require('./routes/bing-route');
app.use('/api/bing', bingRoutes);

app.listen(5001);
