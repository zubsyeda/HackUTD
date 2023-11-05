require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const resultRoutes = require('./routes/result-route');
app.use('/api/chatgpt', resultRoutes);

const bingRoutes = require('./routes/bing-route');
app.use('/api/bing', bingRoutes);

app.listen(3000);
