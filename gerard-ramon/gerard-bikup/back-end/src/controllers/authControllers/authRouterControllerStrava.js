const debug = require('debug')('app:authRouterControllerStrava');
const axios = require('axios');

const stravaApi = require('../../Constants/stravaAPI');
const bikeTypes = require('../../Constants/bikeTypes');
const { ObjectID } = require('mongodb');

function debugObject(object) {
	Object.entries(object).forEach((prop) => {
		debug(prop);
	});
}

function generateTempBikeObject(stravaBike) {
	const tempBike = {};
	tempBike.bikeTotalMeters = stravaBike.data.distance;
	tempBike.bikeTotalMinutes = 0;
	tempBike.bikeName = stravaBike.data.name;
	tempBike.bikeDriveStyle = 'moderate';
	tempBike.bikeBrand = stravaBike.data.brand_name;
	tempBike.bikeModel = stravaBike.data.model_name;
	tempBike.bikeStravaId = stravaBike.data.id;

	switch (stravaBike.data.frame_type) {
		case 1:
			tempBike.bikeType = bikeTypes.MOUNTAIN;
			break;
		case 2:
			tempBike.bikeType = bikeTypes.CROSS_GRAVEL;
			break;
		case 3:
			tempBike.bikeType = bikeTypes.ROAD;
			break;
		case 4:
			tempBike.bikeType = bikeTypes.ENDURO_DOWNHILL;
			break;
		default:
			debug(
				`The bike frame type ${stravaBike.frame_type} is not defined`
			);
	}

	return tempBike;
}

function authRouterControllerStrava(UserModel) {
	function post(req, res) {
		if (req.authUser && req.authMethod) {
			const user = req.authUser;
			const userId = req.userId;

			// Req.authmethod can be register || login
			if (req.authMethod === 'register') {
				let authConfig = {
					headers: {
						Authorization: 'Bearer ' + user.access_token,
					},
				};

				// If user exists in DB, update it with tokens & bikes, if not, create a new user

				if (userId) {
					// Add tokens to user & create strava bikes
					UserModel.findById(userId, (error, foundUser) => {
						if (error) {
							res.status(400);
							return res.send(false);
						} else {
							foundUser.stravaUserId = user.athlete.id;
							foundUser.stravaAccessToken = user.access_token;
							foundUser.stravaRefreshToken = user.refresh_token;
							foundUser.stravaTokenExpire = user.expires_at;
							foundUser.save(async (saveError, updatedUser) => {
								if (saveError) {
									res.status(400);
									res.send(false);
								} else {
									// This needs refactor as it is the same code block than the register one
									const updateTempUser = {
										...updatedUser._doc,
									};

									const authStravaUser = await axios.get(
										`${stravaApi.API_URL}/athlete`,
										authConfig
									);

									if (authStravaUser.status === 200) {
										const { bikes } = authStravaUser.data;
										const tempBikeList = [...bikes];
										let returnBikeList = [];

										tempBikeList.forEach(async (bike) => {
											try {
												const endpoint = `${stravaApi.API_URL}/gear/${bike.id}`;
												const completeBike = await axios.get(
													endpoint,
													authConfig
												);

												const tempBike = generateTempBikeObject(
													completeBike
												);

												returnBikeList = [
													...returnBikeList,
													tempBike,
												];

												if (
													returnBikeList.length ===
													tempBikeList.length
												) {
													updateTempUser.bikeList = returnBikeList;
													res.status(201);
													return res.json(
														updateTempUser
													);
												}
											} catch (tempBikeListError) {
												debug(tempBikeListError);
												res.status(400);
												return res.send(
													'There has been an error loading strava bikes'
												);
											}
										});
									} else {
										res.status(201);
										return res.json(updatedUser);
									}
								}
							});
						}
					});
				} else {
					// Register new user with strava
					debug('User did not exist, creating a new user...');
					const insertUser = {
						username: user.athlete.username,
						profilePicture: user.athlete.profile,
						stravaUserId: user.athlete.id,
						stravaAccessToken: user.access_token,
						stravaRefreshToken: user.refresh_token,
						stravaTokenExpire: user.expires_at,
					};
					UserModel.create(insertUser, async (error, newUser) => {
						if (error) {
							debug(error);
							res.status(400);
							return res.send(error);
						} else {
							const tempUser = { ...newUser._doc };

							const authStravaUser = await axios.get(
								`${stravaApi.API_URL}/athlete`,
								authConfig
							);

							if (authStravaUser.status === 200) {
								const { bikes } = authStravaUser.data;
								const tempBikeList = [...bikes];
								let returnBikeList = [];

								tempBikeList.forEach(async (bike) => {
									try {
										const endpoint = `${stravaApi.API_URL}/gear/${bike.id}`;
										const completeBike = await axios.get(
											endpoint,
											authConfig
										);

										const tempBike = generateTempBikeObject(
											completeBike
										);

										returnBikeList = [
											...returnBikeList,
											tempBike,
										];

										if (
											returnBikeList.length ===
											tempBikeList.length
										) {
											tempUser.bikeList = returnBikeList;
											res.status(201);
											return res.json(tempUser);
										}
									} catch (catchError) {
										debug(catchError);
										res.status(400);
										return res.send(
											'There has been an error loading strava bikes'
										);
									}
								});
							} else {
								res.status(201);
								return res.json(newUser);
							}
						}
					});
				}
			} else {
				// login & update user tokens
				if (req.existingUser) {
					const existingUser = { ...req.existingUser._doc };
					existingUser.stravaAccessToken = user.access_token;
					existingUser.stravaRefreshToken = user.refresh_token;

					const searchQuery = {
						stravaUserId: user.athlete.id,
					};
					const updateQuery = {
						$set: {
							stravaAccessToken: user.access_token,
							stravaRefreshToken: user.refresh_token,
						},
					};

					UserModel.updateOne(
						searchQuery,
						updateQuery,
						(error, updatedUser) => {
							if (error) {
								debug(error);
								res.status(400);
								return res.send(error);
							} else {
								res.status(200);
								return res.json(existingUser);
							}
						}
					);
				} else {
					res.status(400);
					res.send(
						'existinguser is requiered in order to login a user'
					);
				}
			}
		} else {
			res.status(400);
			res.send(
				'authuser & authMetod are requiered in order to register or login a user'
			);
		}
	}

	return { post };
}

module.exports = authRouterControllerStrava;
