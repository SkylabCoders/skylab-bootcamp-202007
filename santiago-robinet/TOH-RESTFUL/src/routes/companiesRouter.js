const express = require('express');

const companiesRouter = express.Router();

function routes(Company){

    companiesRouter.route('/')
    .get((req, res) => {
        Company.find({}, (error, companies) =>{
            if(error){
                res.send(error);
            }

            res.json(companies);
        })
    })
    .post((req, res) => {
        const company = new Company(req.body);
        company.save();
        res.status(201).json(company);
    })

    companiesRouter.use('/:companyId', (req, res, next) => {
        Company.findById(req.params.companyId, (error, company) => {
            if (error){
                res.send(error);
            }

            if(company){
                req.company = company;
                next()
            } else {
                res.sendStatus(404);
            }

        })
    })

    companiesRouter.route('/:companyId')
    .get((req, res) => {
        res.send(req.company);
    })

    return companiesRouter;
}

module.exports = routes;
