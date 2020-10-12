const sinon = require('sinon');
const { expect } = require('chai');
const booksRouteController = require('../controllers/booksRouteController');
const Book = require('../models/bookModel');
const axios = require('axios');

describe('BOOKS ROUTE CONTROLLER', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should return response with author', () => {
        const req = {
            query: {
                author: 'asimov'
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
                    data: { totalItems: 1, items: [book] }
                });
            })
        );
        booksRouteController(Book).get(req, res);
    });

    it('should return status 204 when no results found with author', () => {
        const req = {
            query: {
                author: 'asimov'
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
                resolve({});
            })
        );
        booksRouteController(Book).get(req, res);
    });

    it('should return response with title', (done) => {
        const req = {
            query: {
                title: 'garfield'
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
                    data: { totalItems: 1, items: [book] }
                });
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(200)).to.be.true;
    });
    it('should return status 204 when no results found with title', (done) => {
        const req = {
            query: {
                title: 'asimov'
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
                resolve({});
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(204)).to.be.true;
    });
    it('should return response with subject', (done) => {
        const req = {
            query: {
                subject: 'comedy'
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
                    data: { totalItems: 1, items: [book] }
                });
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(200)).to.be.true;
    });
    it('should return status 204 when no results found with subject', (done) => {
        const req = {
            query: {
                subject: 'comedy'
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
                resolve({});
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(204)).to.be.true;
    });
    it('should return response with id', (done) => {
        const req = {
            query: {
                id: 'a1b2d3'
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
                    data: { totalItems: 1, items: [book] }
                });
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(200)).to.be.true;
    });
    it('should return status 204 when no results found with id', (done) => {
        const req = {
            query: {
                id: 'a1b2d3'
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
                resolve({});
            })
        );
        const statusSpy = sinon.spy(res, 'status');
        booksRouteController(Book).get(req, res);
        done();
        expect(statusSpy.calledWith(204)).to.be.true;
    });
});
