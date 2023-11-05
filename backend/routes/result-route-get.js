const express = require('express');
const router = express.Router();
const openai = require('openai');
// API KEY
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai({ key: apiKey });

router.get('/:state/:businessType/:incidentStatistic', (req, res, next) => {
	const params = req.params;
	// queries for chatgpt
	// const query = `Tell me why ${params.insuranceName} insurance is important in ${params.stateName} when I open business of ${params.businessName}`;
	const query = `I want to create and open a new ${businessType} business in ${state}. I want you to recommend me 3 insurances and provide an explanation for each recommendation as to why I should buy it. Here is the most likely natural incident in this state: ${incidentStatistic}. Please use the type of my small business, the geographic location, and the natural incident statistic to recommend me what insurance to get. For example, if I am opening a small bank, I would probably want fraud protection insurance because my business deals with a lot of money. Another example could be if I am opening a business in Florida and it floods frequently, then I would probably want flood protection insurance. I want the response to a string that I can turn into a JSON object like an API request: [{"name": "put name of insurance", "explanation": "put reason why"}, {"name": "put name of insurance", "explanation": "put reason why"}, {"name": "put name of insurance", "explanation": "put reason why"}]`;
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
			res.json({ result });
		})
		.catch((error) => {
			console.error('API req error:', error);
		});
});

module.exports = router;
