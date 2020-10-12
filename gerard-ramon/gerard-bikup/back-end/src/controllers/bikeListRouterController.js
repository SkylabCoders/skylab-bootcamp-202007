const debug = require('debug')('app:bikeListRouterController');

function bikeListRouterController(UserModel, BikeModel, CompoModel) {
	async function findUserBikes(userId) {
		let localBikeList = [];
		const bikeQuery = {
			bikeUserId: userId,
		};

		await BikeModel.find(bikeQuery, (error, bikeList) => {
			if (error) {
				debug(error);
				return error;
			} else {
				bikeList.length &&
					bikeList.forEach((bike, index) => {
						const tempBike = { ...bike._doc };
						localBikeList = [...localBikeList, tempBike];
					});
			}
		});
		return localBikeList;
	}

	async function findUserComponents(userId) {
		const compoQuery = {
			compoUserId: userId,
		};

		let localCompoList = null;

		await CompoModel.find(compoQuery, (error, compoList) => {
			if (error) {
				debug(error);
				return error;
			} else {
				localCompoList = [...compoList];
			}
		});

		return localCompoList;
	}

	// ################## ROUTER PUBLIC METHODS ########################

	async function get(req, res) {
		let count = 0;
		let userBikeList = null;
		let userCompoList = null;

		if (req.query && req.query.bikeUserId) {
			userBikeList = await findUserBikes(req.query.bikeUserId);
			do {
				userCompoList = await findUserComponents(req.query.bikeUserId);
			} while (!userCompoList && count++ < 3);

			debug(`Bike list length: ${userBikeList.length}`);

			Promise.all([userBikeList, userCompoList]).then(
				([bikeList, compoList]) => {
					bikeList = bikeList.reduce((acc, curr) => {
						const bikeComponentList = compoList.filter((compo) => {
							return compo.compoBikeId == curr._id;
						});
						const tempBike = { ...curr, bikeComponentList };

						return [...acc, tempBike];
					}, []);

					res.status(200);
					return res.json(bikeList);
				}
			);
		} else {
			res.status(400);
			return res.send('A query with bikeUserId is required');
		}
	}

	return { get };
}

module.exports = bikeListRouterController;
