const express = require('express');
const router = express.Router();
const openai = require('openai');
// API KEY
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai({ key: apiKey });

router.get('/:insuranceName/:stateName/:businessName', (req, res, next) => {
	const params = req.params;
	// queries for chatgpt
	const query = `Tell me why ${params.insuranceName} insurance is important in ${params.stateName} when I open business of ${params.businessName}`;

	// call ChatGPT API
	openaiClient.chat.completions
		.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'You are a helpful assistant.' },
				{ role: 'user', content: query },
			],
		})
		.then((response) => {
			// extract text from api response
			const result = response.choices[0].message.content;
			console.log(result); // ChatGPT response text
			res.json({ result });
		})
		.catch((error) => {
			console.error('API req error:', error);
		});
});

module.exports = router;
