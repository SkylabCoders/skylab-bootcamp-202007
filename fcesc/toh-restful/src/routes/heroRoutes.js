const express = require('express');
const heroRoutesController = require('../controllers/heroRoutesController');
const herolistRoutesController = require('../controllers/herolistRoutesController');

const heroRoutes = express.Router();

const Hero = require('../../database/models/heroModel');

function router(){
  heroRoutes
    .route('/')
    .post(herolistRoutesController.create)
    .get(herolistRoutesController.getList);

  heroRoutes
    .all('/:heroId', (req, res, next) => {
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
    .put(heroRoutesController.updateOne)
    .patch(heroRoutesController.updateMany)
    .delete(heroRoutesController.remove)
    .get(heroRoutesController.read);

  return heroRoutes;
}

module.exports = router;