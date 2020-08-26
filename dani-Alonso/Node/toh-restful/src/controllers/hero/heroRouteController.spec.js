const { expect, describe, before, beforeEach, it } = require('chai');
const { mongoose } = require('mongoose');
const heroRouteController = require('./heroRouteController');
const { heroModel } = require('../../models/heroModel');

describe('describe hero route', () => {
	before(() => mongoose.connect('mongodb://localhost/:27017/heroes-test'));

	const hero = [
		{
			id: 13,
			name: 'Bombasto'
		}
	];
	beforeEach(() => {
		(async function () {
			await heroModel.deleteMany();
			const result = heroModel.insertOne();
			expect(result).to.exist;
			expect(result.ops[0]).to.equal(true);
		})();
	});

	it('should erase one existing hero', async () => {
		let req = {};
		req.hero = hero;
		await deleter(req, res);
		const result = await heroModel.find();
		expect(result.length).to.be(0);
	});

	describe('should delete', () => {});

	describe('should put', () => {});
	describe('should post', () => {});
	describe('should get', () => {});
});
