const debug = require('debug');

const api = function getApi() {
	fetch(
		'https://rapidapi.com/api-sports/api/api-nba?utm_source=google&utm_medium=cpc&utm_campaign=Alpha_111520329332&utm_term=nba%20api_e&gclid=CjwKCAjwkJj6BRA-EiwA0ZVPVj0Ev6BFNNalH88A4_0mTz4qdtO4rm7yulB5l5YRs7eM9RNBS6QMWBoCcf8QAvD_BwE'
	)
		.then((response) => response.text())
		.catch((error) => debug(`There's an error ${error}`));
};
module.exports = api;
