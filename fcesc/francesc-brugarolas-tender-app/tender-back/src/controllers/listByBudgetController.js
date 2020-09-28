const db = require('../modules/modules.js');

function listByBudgetMethods(collection){
  async function getListByBudget (req, res) { 
    try {
      const query = { 'budget_id': req.params.budgetId };
      const data = await db(collection).findToArray(query);
      res.status(200);
      res.json(data);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  
  return { getListByBudget };

}

module.exports = listByBudgetMethods;