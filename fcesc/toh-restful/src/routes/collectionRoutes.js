const express = require('express');
const itemRoutesController = require('../controllers/itemRoutesController');
const methods = require('../controllers/listRoutesController');

function router(Model){
  const crudRoutes = express.Router();

  crudRoutes
    .route('/')
    .post(methods(Model).create)
    .get(methods(Model).getList);

  crudRoutes
    .all('/:itemId', (req, res, next) => {
      Model.findById(req.params.itemId, (error, item) =>{
        if (error) { res.send(error) }
        if (item) {
          req.item = item;
          next();
        } else {
          res.sendStatus(404);
        }
      })
    });

  crudRoutes
    .route('/:itemId')
    .put(itemRoutesController.updateOne)
    .patch(itemRoutesController.updateMany)
    .delete(itemRoutesController.remove)
    .get(itemRoutesController.read);

  return crudRoutes;
}

module.exports = router;