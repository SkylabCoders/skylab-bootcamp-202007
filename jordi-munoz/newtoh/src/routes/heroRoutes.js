const express = require('express');

const heroRoutes = express.Router();

function router(nav, heroes) {
  heroRoutes.route('/').get((req, res) => {
    res.render('index.ejs', {
      nav,
      body: 'heroes.component.ejs',
      title: 'My Heroes',
      heroes,
    });
  });

  heroRoutes.route('/:heroId').get((req, res) => {
    res.render('index.ejs', {
      nav,
      body: 'hero-detail.component.ejs',
      hero: heroes[0]
    });
  });

  return heroRoutes;
}

module.exports = router;
