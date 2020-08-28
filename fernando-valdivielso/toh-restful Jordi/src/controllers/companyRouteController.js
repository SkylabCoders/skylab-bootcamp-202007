const Company = require('../models/companyModel');

function controller() {
  const get = (req, res) => {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
    Company.find(query, (error, companies) => {
      if (error) {
        res.send(error);
      }
      res.json(companies);
    });
  }
  return { get }
}

module.exports = controller();