const express = require('express');
const router = express.Router();
const openai = require('openai');
// API KEY
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai({ key: apiKey });

router.get('/:stateName', (req, res, next) => {
	const stateName = req.params.stateName;
	// queries for chatgpt
	const query = `Tell me the weather in ${stateName}`;

	// call ChatGPT API
	openaiClient.chat.completions
		.create({
			model: 'gpt-3.5-turbo', // GPT-3.5 Davinci engine
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
