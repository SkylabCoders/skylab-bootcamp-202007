const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

function router(nav) {
	recipesRouter.route('/').get((req, res) => {
		/* 	const { id } = req.params; */
		/* 	res.render('bookView', {
			nav,
			title: 'Library',
			book: books[id]
        }); */
		res.send('Books working');
	});
	recipesRouter.route('/detail/:title').get((req, res) => {
		const { title } = req.params;
		res.render('detail', {
			nav,
			title: 'Detail',
			recipe: {
				title: 'Brown eggs',
				type: 'dairy',
				description: 'Raw organic brown eggs in a basket',
				filename: '0.jpg',
				height: 600,
				width: 400,
				price: 28.1,
				rating: 4
			}
		});
	});
	return recipesRouter;
}

module.exports = router;
