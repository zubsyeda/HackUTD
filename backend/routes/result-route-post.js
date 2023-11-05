const express = require('express');
const router = express.Router();
const openai = require('openai');
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai({ key: apiKey });

router.post('/', (req, res, next) => {
	console.log(req.body)
	const { state, businessType, incidentStatistic } = req.body;
	console.log(state+"forbackend")
	console.log(businessType+"forbackend")
	const query = `I want to create and open a new ${businessType} business in ${state}. I want you to recommend me 3 insurances and provide an explanation for each recommendation as to why I should buy it. Here is the most likely natural incident in this state: ${incidentStatistic}. Please use the type of my small business, the geographic location, and the natural incident statistic to recommend me what insurance to get. For example, if I am opening a small bank, I would probably want fraud protection insurance because my business deals with a lot of money. Another example could be if I am opening a business in Florida and it floods frequently, then I would probably want flood protection insurance. Please use a bulleted list`;

	openaiClient.chat.completions
		.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'You are a helpful assistant.' },
				{ role: 'user', content: query },
			],
		})
		.then((response) => {
			const result = response.choices[0].message.content;
			console.log(result)
			res.json({ result });
		})
		.catch((error) => {
			console.error('API req error:', error);
		});
});

module.exports = router;
