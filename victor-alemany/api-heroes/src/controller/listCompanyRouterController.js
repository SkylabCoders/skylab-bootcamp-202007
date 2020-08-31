const Company = require('../models/companyModel')

const post = (req, res) => {
    const company = new Company(req.body);
    company.save();
    res.status(201).json(company);
}
const get = (req, res) => {
    const query = {};
    if (req.query.id) {
        query.id = req.query.id;
    }
    Company.find(query, (error, company) => {
        if (error) {
            res.send(error);
        }
        res.json(company);
    });
};
module.exports = { post, get };