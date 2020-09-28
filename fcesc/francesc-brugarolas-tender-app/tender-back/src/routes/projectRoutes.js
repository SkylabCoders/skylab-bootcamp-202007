const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');
const listBySlugMethods = require('../controllers/listBySlugController');
const itemMethods = require('../controllers/itemRoutesController');
const { ObjectID } = require('mongodb');
const db = require('../modules/modules.js');

function router(collection){
  const projectRoutes = express.Router();

  projectRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  projectRoutes
    .route('/bySlug/:slug')
    .get(listBySlugMethods(collection).getItemBySlug);

  projectRoutes
    .route('/flow/byUser/:userId')
    .get(listByUserMethods(collection).getFlowByUser);

  projectRoutes
    .all('/:projectId', async (req, res, next)=>{
      try {
        const query = { '_id': ObjectID(req.params.projectId) };
        const data = await db(collection).findToArray(query);
        req.data = data;
        next();
      } catch (error) {
        res.send(error);
      }
    })

  projectRoutes
    .route('/:projectId')
    //.patch(itemMethods(collection).updateMany) // not operative yet
    //.delete(itemMethods(collection).remove) // not operative yet
    .get(itemMethods(collection).readOne);

  return projectRoutes;
}

module.exports = router;