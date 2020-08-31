/* test de Beto

const { expect } = require('chai');
const deleter = require('./heroDelete');
const {
	models: { HeroModel }
} = require('../models/heroModel');
const { mongoose } = require('mongoose');

describe('delete hero', () => {
	before(() => mongoose.connect('mongodb://localhost:27017/heroes-test'));

	let hero = [
		{
			id: 13,
			name: 'Bombasto'
		}
	];

	beforeEach(() => {
		(async function () {
			await HeroModel.deleteMany();
			const result = HeroModel.insertOne({ hero });
			expect(result).to.exist;
			expect(result.ops[0]).to.equal(true);
		})();
	});

	it('delete should erase one existing hero', async () => {
		let req = {};
		req.hero = hero;
        try {

            await deleter(req, res);
            const result = await HeroModel.find()
            expect(result.length).to.be(0)
        }catch(err) {
            console.log(err)
        }
	});
});

*/
