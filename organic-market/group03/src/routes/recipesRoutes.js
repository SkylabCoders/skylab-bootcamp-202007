const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

function router() {
	recipesRouter.route('/').get((req, res) => {
		(async function query() {
			try {
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('heroes', {
					nav,
					title: 'My Heros',
					heroes: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
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
