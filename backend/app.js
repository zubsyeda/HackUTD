require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors");


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const resultRoutes = require('./routes/result-route-post');
app.use('/api/chatgpt', resultRoutes);

const bingRoutes = require('./routes/bing-route');
app.use('/api/bing', bingRoutes);

app.listen(5001);
