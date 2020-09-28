const debug = require('debug')('app:bikesRouterController');
const { ObjectID } = require('mongodb');

function bikeRouterController(BikeModel, CompoModel) {
	let tempBike = null;

	async function loadBikeById(bikeId) {
		const bikeQuery = {
			_id: new ObjectID(bikeId),
		};

		await BikeModel.find(bikeQuery, (error, bike) => {
			if (error) {
				debug(error);
				return error;
			} else {
				[tempBike] = bike;
				tempBike = { ...tempBike._doc };
			}
		});

		return tempBike;
	}

	async function loadBikeComponents(bikeId) {
		let tempCompoList = null;
		const compoQuery = {
			compoBikeId: bikeId,
		};

		await CompoModel.find(compoQuery, (error, compoList) => {
			if (error) {
				debug(error);
				return error;
			} else {
				tempCompoList = [...compoList];
			}
		});

		return tempCompoList;
	}

	async function get(req, res) {
		let count = 0;
		let bikeComponents = null;
		if (req.params && req.params.bikeId) {
			try {
				const bike = await loadBikeById(req.params.bikeId);

				do {
					bikeComponents = await loadBikeComponents(
						req.params.bikeId
					);
				} while (!bikeComponents && count++ < 3);

				bike.bikeComponents = bikeComponents;

				res.status(200);
				res.json(bike);
			} catch (error) {
				res.status(400);
				return res.send(error);
			}
		} else {
			res.status(400);
			return res.send('BikeId is required');
		}
	}

	return { get, loadBikeById, loadBikeComponents };
}

module.exports = bikeRouterController;
