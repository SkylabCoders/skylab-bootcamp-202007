const db = require('../modules/modules.js');

function listBySlugMethods(collection){
  async function getItemBySlug (req, res) { 
    try {
      const query = { 'slug': req.params.slug };
      const data = await db(collection).findToArray(query);
      res.status(200);
      res.json(data);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  
  return { getItemBySlug };
}

module.exports = listBySlugMethods;
