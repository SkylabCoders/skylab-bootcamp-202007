const  { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
    beforeEach(() => {
        sinon.restore();
    });
    
    describe('PUT', () => {
       
        
    });

})






// 200 get, que puede acceder
// 404 no lo encuentra
// 201 del post, que crea -  también el put
// 204 el ok del delete