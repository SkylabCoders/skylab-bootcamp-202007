const express = require('express');
const debug = require('debug');

const projectsRouteController = require('../controllers/projectsRouteController');

const projectRouter = express.Router();

function routes(Project) {
  const controller = projectsRouteController(Project);

  projectRouter
    .route('/:projectId/scores')
    .get(controller.getScores)


  projectRouter
    .route('/')
    .post(controller.post)
    .get(controller.get)
    .delete(controller.deleter)
    .put(controller.put)

  return projectRouter;
}
module.exports = routes;