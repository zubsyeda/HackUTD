const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.BING_API_KEY;
const endpoint = 'https://api.bing.microsoft.com/v7.0/news/search';

async function searchNews(query) {
	try {
		const response = await axios.get(endpoint, {
			params: {
				q: query,
			},
			headers: {
				'Ocp-Apim-Subscription-Key': apiKey,
			},
		});

		return response.data.value;
	} catch (error) {
		console.error('Bing News Search API 오류:', error);
		throw error;
	}
}

router.get('/:keyword', (req, res, next) => {
	const keyword = req.params.keyword;
	let result = [];
	// Bing News Search req
	searchNews(keyword)
		.then((newsItems) => {
			newsItems.forEach((item) => {
				const itemObject = {
					name: item.name,
					image: item.image.thumbnail.contentUrl ?? '',
					description: item.description,
					url: item.url,
				};
				result.push(itemObject);
			});
			console.log(result);
			res.json({ result });
		})
		.catch((error) => {
			console.error('오류:', error);
		});
});

module.exports = router;
