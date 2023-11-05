require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const resultRoutes = require('./routes/result-route');
app.use('/api/chatgpt', resultRoutes);

app.listen(6000);
