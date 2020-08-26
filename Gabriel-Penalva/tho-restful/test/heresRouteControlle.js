const crud = require('../controllers/heroesRouteController');

const req = { hero: 'Testing' };
let res;

describe('testing heroes route', () => {
    crud.get(req, res);



})