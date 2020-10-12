const db = require('../modules/modules.js');
const debug = require('debug')('server:listByUserController.js');
const orderEventsFlow = require('./../utils/orderEventsFlow');

function listByUserMethods(collection){
  async function getListByUser (req, res) { 
    try {
      const query = { 'clearance.user_id': req.params.userId };
      const data = await db(collection).findToArray(query);
      res.status(200);
      res.json(data);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function getFlowByUser(req, res){
    try {
      const query = { 'clearance.user_id': req.params.userId };
      const projection = { 'events': 1 };
      const data = await db(collection).findProjectionToArray(query, projection);
      const filteredData = data.map(group => group.events);
      const result = orderEventsFlow(filteredData);
      res.status(200);
      res.json(result);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  
  return { getListByUser, getFlowByUser };
}

module.exports = listByUserMethods;
