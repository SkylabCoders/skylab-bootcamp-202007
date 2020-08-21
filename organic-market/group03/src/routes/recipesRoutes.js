const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

function router() {
	recipesRouter.route('/:id').get((req, res) => {
		const { id } = req.params;
		res.render('bookView', {
			nav,
			title: 'Library',
			book: books[id]
		});
	});
	return recipesRouter;
}

module.exports = router;
