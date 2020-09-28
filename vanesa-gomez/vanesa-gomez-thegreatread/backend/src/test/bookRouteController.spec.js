const sinon = require('sinon');
const { expect } = require('chai');
const bookRouteController = require('../controllers/bookRouteController');
const Book = require('../models/bookModel');
const axios = require('axios');

describe('BOOK ROUTE CONTROLLER', () => {
    afterEach(() => {
        sinon.restore();
    });
    it('should return response with id', (done) => {
        const req = {
            params: {
                bookId: 'a1b2d3'
            }
        };
        const res = {
            status: () => {},
            json: () => {}
        };

        const book = {
            volumeInfo: {
                industryIdentifiers: [{ identifier: 1 }],
                imageLinks: {},
                categories: [{}]
            }
        };

        sinon.stub(axios, 'get').returns(
            new Promise((resolve, reject) => {
                resolve({
                    data: { items: [book] }
                });
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        bookRouteController.get(req, res);
        done();
        expect(statusSpy.calledWith(200)).to.be.true;
    });
});
