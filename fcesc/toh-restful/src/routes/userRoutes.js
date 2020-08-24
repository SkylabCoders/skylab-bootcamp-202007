const express = require('express');
const heroRoutesController = require('../controllers/heroRoutesController');
const userRoutesController = require('../controllers/userRoutesController');

const userRoutes = express.Router();

function router(){
  userRoutes
    .route('/')
    .post(userRoutesController.post)
    .get(userRoutesController.get);

  userRoutes
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

  userRoutes
    .route('/:heroId')
    .put(heroRoutesController.put)
    .patch(heroRoutesController.patch)
    .delete(heroRoutesController.deleter)
    .get(heroRoutesController.get);

  return userRoutes;
}

module.exports = router;