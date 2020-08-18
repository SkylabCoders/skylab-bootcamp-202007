const express = require('express');

const heroRoutes = express.Router();

function router(nav, heroes) {

    heroRoutes.route('/').get((request, response) => {
        response.render('heroes', { nav, title: 'my Heroes', heroes });
    });
    heroRoutes.route('/:heroid').get((request, response) => {
        const ID = +request.params.heroid;
        response.render('hero-detail', { nav, hero: heroes.find((hero) => hero.id === ID) });
    });
    return heroRoutes;
}
module.exports = router;