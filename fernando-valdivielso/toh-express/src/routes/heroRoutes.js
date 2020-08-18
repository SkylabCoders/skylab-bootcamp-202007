const express = require('express');

const heroRoutes = express.Router();

function router(nav, heroes) {
    heroRoutes.route('/').get((req, res) => {
        res.render('heroes', {
            nav,
            title: 'My Heroes',
            heroes
        })
    })

    heroRoutes.route('/:heroId').get((req, res) => {
        res.render('hero-detail', { nav, hero: heroes[0] })
    })

    return heroRoutes;
}

module.exports = router;





