const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

function router() {
	recipesRouter.route('/').get((req, res) => {
		/* 	const { id } = req.params; */
		/* 	res.render('bookView', {
			nav,
			title: 'Library',
			book: books[id]
        }); */
		res.send('Books working');
	});
	recipesRouter.route('/detail/:id').get((req, res) => {
		const { id } = req.params;
		/*  res.render("bookView", {
          nav,
          title: "Library",
          book: books[id],
        }); */
		res.send('Detail working');
	});
	return recipesRouter;
}

module.exports = router;
