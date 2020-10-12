const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');
const listByProjectMethods = require('../controllers/listByProjectController');
const itemMethods = require('../controllers/itemRoutesController');

function router(collection){
  const budgetRoutes = express.Router();

  budgetRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  budgetRoutes
    .route('/flow/byUser/:userId')
    .get(listByUserMethods(collection).getFlowByUser);

  budgetRoutes
    .route('/byProject/:projectId')
    .get(listByProjectMethods(collection).getListByProject);

  budgetRoutes
    .all('/:budgetId', async (req, res, next)=>{
      try {
        const query = { '_id': ObjectID(req.params.budgetId) };
        const data = await db(collection).findToArray(query);
        req.data = data;
        next();
      } catch (error) {
        res.send(error);
      }
    })

  budgetRoutes
    .route('/:budgetId')
    //.patch(itemMethods(collection).updateMany) // not operative yet
    //.delete(itemMethods(collection).remove) // not operative yet
    .get(itemMethods(collection).readOne);

  return budgetRoutes;
}

module.exports = router;