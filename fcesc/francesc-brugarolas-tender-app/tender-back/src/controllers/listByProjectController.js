const db = require('../modules/modules.js');

function listByProjectMethods(collection){
  async function getListByProject (req, res) { 
    try {
      const query = { 'project_id': req.params.projectId };
      const data = await db(collection).findToArray(query);
      res.status(200);
      res.json(data);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  
  return { getListByProject };

}

module.exports = listByProjectMethods;
