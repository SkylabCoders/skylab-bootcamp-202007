const { expect } = require('chai');
const heroRouteController = require('./heroRouteController');
const mongoose = require('mongoose');
const heroModel = require('../../models/heroModel');
const { deleter } = require('./heroRouteController');

describe('describe hero route', () => {
	// heroes-test, aquest heroes ha de ser igual al nom de la colecció
	// El before es igual al beforeAll en sintaxis mocha
	before(() => mongoose.connect('mongodb://localhost:27017/heroes-test'));

	describe('delete function', () => {});
	let data = [{ id: 13, name: 'Bombasto' }];

	let hero = new heroModel(data);

	beforeEach(() => {
		// HeroModel es asyncrono o sincrono? Trae una promesa?
		heroModel.deleteMany();
		const result = heroModel.insertOne({ hero });
		expect(result).to.exist;
		expect(result.ops[0]).to.equal(true);
	});
	it('should delete erase one existing hero', async () => {
		let req = {};
		req.hero = hero;

		try {
			await deleter(req, res);
			const result = await heroModel.find();
			expect(result.length).to.be(0);
		} catch (err) {
			console.log(err);
		}
	});

	describe('should put', () => {});

	describe('should post', () => {});

	describe('should get', () => {});
});
