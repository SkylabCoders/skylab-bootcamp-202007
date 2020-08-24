const express = require('express');
const heroRoutesController = require('../controllers/heroRoutesController');
const herolistRoutesController = require('../controllers/herolistRoutesController');

const heroRoutes = express.Router();

function router(Hero){
  heroRoutes
    .route('/')
    .post(herolistRoutesController.post)
    .get(herolistRoutesController.get);

  heroRoutes
    .use('/:heroId', (req, res, next) => {
      Hero.findById(req.params.heroId, (error, hero) =>{
        if (error) { res.send(error) }
        if (hero) {
          req.hero = hero;
          next();
        } else {
          res.sendStatus(404);
        }
      })
    });

  heroRoutes
    .route('/:heroId')
    .put(heroRoutesController.put)
    .patch(heroRoutesController.patch)
    .delete(heroRoutesController.deleter)
    .get(heroRoutesController.get);

  return heroRoutes;
}

module.exports = router;