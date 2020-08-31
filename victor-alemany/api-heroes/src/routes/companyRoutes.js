const express = require('express');
const companyRouteController = require('../controller/companyRouterController');
const listCompanyRouteController = require('../controller/listCompanyRouterController');

const companyRoutes = express.Router();

function router(Company) {

    companyRoutes
        .route('/')
        .get(listCompanyRouteController.get)
        .post(listCompanyRouteController.post)

        companyRoutes.use('/:companyId', (req, res, next) => {
            Company.findById(req.params.userId, (error, company) => {
                if (error) {
                    res.send(error);
                }
                if (company) {
                    req.company = company;
                    next();
                } else{
                    res.sendStatus(404);
                }
            });
        });

        companyRoutes
        .route('/:companyId')
        .get(companyRouteController.get)
        .put(companyRouteController.put)
        .patch(companyRouteController.patch)
        .delete(companyRouteController.deleter);

    return companyRoutes;
}

module.exports = router;