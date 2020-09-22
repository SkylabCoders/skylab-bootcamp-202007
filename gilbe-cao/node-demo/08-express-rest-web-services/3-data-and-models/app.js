const express = require('express');

const app = express();
const heroRouter = express.Router();
const port = process.env.PORT || 3000;
const Hero = require('./models/heroModel');

heroRouter.route('/heroes').get((req, res) => {
	const query = {};
	Hero.find(query, (err, heroes) => {
		if (err) {
			return res.send(err);
		}
		return res.json(heroes);
	});
});
heroRouter.route('/heroes/:heroId').get((req, res) => {
	Hero.findById(req.params.heroId, (err, hero) => {
		if (err) {
			return res.send(err);
		}
		return res.json(hero);
	});
});
app.use('/api', heroRouter);

app.get('/', (req, res) => {
	res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
