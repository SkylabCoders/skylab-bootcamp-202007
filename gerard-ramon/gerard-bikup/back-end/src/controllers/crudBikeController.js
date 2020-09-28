const debug = require('debug')('app:crudBikeController');
const { ObjectID } = require('mongodb');
const { filter } = require('../Constants/bikeDefaultComponents');
const defaultCompoList = require('../Constants/bikeDefaultComponents');
const axios = require('axios');

const stravaApi = require('../Constants/stravaAPI');

function debugObject(object) {
	Object.entries(object).forEach((prop) => {
		debug(prop);
	});
}

function crudBikeController(UserModel, BikeModel, CompoModel) {
	// Private functions

	function setComponentListInfo(
		compos,
		userId,
		bikeId,
		bikeDistance,
		bikeMinutes
	) {
		const compoReducer = (accumulator, current) => {
			current.compoUserId = userId;
			current.compoBikeId = bikeId;
			current.compoAccumulatedMeters = bikeDistance;
			current.compoAccumulatedMinutes = bikeMinutes;
			return [...accumulator, current];
		};

		return compos.reduce(compoReducer, []);
	}

	async function createNewBikeWithCompos(bikeData) {
		// Create the bike properties
		const createQuery = {};
		Object.entries(bikeData).forEach((prop) => {
			createQuery[prop[0]] = prop[1];
		});

		// Insert bike to DB
		BikeModel.create(createQuery, (error, newBike) => {
			if (error) {
				throw new Error(
					'There has been an error while creating your bike'
				);
			} else {
				const readyCompoList = setComponentListInfo(
					defaultCompoList,
					bikeData.bikeUserId,
					newBike._id,
					bikeData.bikeTotalMeters || 0,
					bikeData.bikeTotalMinutes || 0
				);

				CompoModel.create(
					readyCompoList,
					(createError, createdCompoList) => {
						if (createError) {
							throw new Error(
								'There has been an error while an error creating your bike components'
							);
						} else {
							return { newBike, createdCompoList };
						}
					}
				);
			}
		});
	}

	function createBike(req, res) {
		const { newBikeInfo } = req.body;
		const bikeUserId = req.body._id;

		const bikeQuery = {
			bikeName: newBikeInfo.bikeName,
		};
		BikeModel.findOne(bikeQuery, async (findOneError, bike) => {
			if (findOneError) {
				res.status(400);
			} else {
				if (bike) {
					res.status(409);
					return res.send(false);
				} else {
					const bikeData = { ...newBikeInfo, bikeUserId };
					try {
						await createNewBikeWithCompos(bikeData);
						res.status(201);
						return res.send(true);
					} catch (error) {
						res.status(400);
						return res.send(false);
					}
				}
			}
		});
	}

	function deleteBike(req, res) {
		const { bikeId } = req.body;

		const bikeQuery = {
			_id: new ObjectID(bikeId),
		};

		const compoQuery = {
			compoBikeId: bikeId,
		};

		BikeModel.deleteOne(bikeQuery, (error, deletedBike) => {
			if (error) {
				debug(error);
				return res.send(false);
			} else {
				CompoModel.deleteMany(
					compoQuery,
					(deleteManyError, deletedCompos) => {
						if (deleteManyError) {
							debug(deleteManyError);
							return res.send(false);
						} else {
							return res.send(true);
						}
					}
				);
			}
		});
	}

	function updateBike(req, res) {
		const { bikeInfo, bikeId, isNameChanged } = req.body;

		const filterQuery = {
			_id: new ObjectID(bikeId),
		};

		const updateQuery = {};
		Object.entries(bikeInfo).forEach((prop) => {
			updateQuery[prop[0]] = prop[1];
		});

		// If bikeName is not modified, update it
		if (!isNameChanged) {
			BikeModel.updateOne(
				filterQuery,
				updateQuery,
				(error, updateStatus) => {
					if (error) {
						debug(error);
						res.status(400);
						res.send(false);
					} else {
						res.status(200);
						return res.send(true);
					}
				}
			);
		} else {
			// BikeName is being modified, check if that name exist frist

			const bikeNameQuery = {
				bikeName: bikeInfo.bikeName,
			};
			BikeModel.findOne(bikeNameQuery, (error, foundBike) => {
				if (error) {
					debug(error);
					res.status(400);
					res.send(false);
				} else {
					if (foundBike) {
						res.status(304);
						res.send(false);
					} else {
						// Bike name is avaliable, update it
						BikeModel.updateOne(
							filterQuery,
							updateQuery,
							(updateOneError, updateStatus) => {
								if (updateOneError) {
									debug(updateOneError);
									res.status(400);
									res.send(false);
								} else {
									res.status(200);
									return res.send(true);
								}
							}
						);
					}
				}
			});
		}
	}

	function addWorkout(req, res) {
		const { bikeInfo, bikeId, workoutInfo } = req.body;

		const filterQuery = {
			_id: new ObjectID(bikeId),
		};

		const updateBikeQuery = {};
		Object.entries(bikeInfo).forEach((prop) => {
			updateBikeQuery[prop[0]] = prop[1];
		});

		BikeModel.updateOne(
			filterQuery,
			updateBikeQuery,
			(error, updateStatus) => {
				if (error) {
					res.status(304);
					res.send(false);
				} else {
					const compoFilterQuery = {
						compoBikeId: bikeId,
					};

					const updateComposQuery = {
						$inc: {
							compoAccumulatedMeters: workoutInfo.workoutMeters,
							compoAccumulatedMinutes:
								workoutInfo.workoutTotalMinutes,
						},
					};

					CompoModel.updateMany(
						compoFilterQuery,
						updateComposQuery,
						(updateError, updateManyStatus) => {
							if (updateError) {
								debug(updateError);
								res.status(304);
								res.send(false);
							} else {
								res.status(200);
								return res.send(true);
							}
						}
					);
				}
			}
		);
	}

	function isGearInBikeList(workoutGear, userGearList) {
		return userGearList.indexOf(workoutGear);
	}

	async function loadStravaBikeInfo(req, res) {
		const { bikeList, stravaAccessToken } = req.body;
		let indexedBikeList = {};
		let userStravaGearIdList = [];
		bikeList.forEach((bike) => {
			indexedBikeList[bike.bikeStravaId] = { ...bike };
			userStravaGearIdList.push(bike.bikeStravaId);
		});

		let authConfig = {
			headers: {
				Authorization: `Bearer ${stravaAccessToken}`,
			},
		};

		let processedBikeList = [];
		let workoutList = null;
		let page = 1;
		do {
			let endpoint = `${stravaApi.API_URL}/athlete/activities/?per_page=200&page=${page}`;
			try {
				workoutList = await axios.get(endpoint, authConfig);
				processedBikeList = workoutList.data.reduce(
					(accumulator, current) => {
						const checkBikeExists = isGearInBikeList(
							current.gear_id,
							userStravaGearIdList
						);
						if (checkBikeExists !== -1) {
							accumulator[
								current.gear_id
							].bikeTotalMinutes += Math.round(
								current.moving_time / 60
							);
							accumulator[current.gear_id].bikeLastRoute =
								current.start_date_local;
						}
						return accumulator;
					},
					indexedBikeList
				);

				page++;
			} catch (error) {
				res.status(400);
				return res.send(false);
			}
		} while (workoutList.length > 0);

		res.status(200);
		return res.send(processedBikeList);
	}

	return {
		createBike,
		deleteBike,
		updateBike,
		addWorkout,
		loadStravaBikeInfo,
	};
}

module.exports = crudBikeController;
