const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	console.log('GET Request in results');
	res.json({ message: 'test' });
});

module.exports = router;
