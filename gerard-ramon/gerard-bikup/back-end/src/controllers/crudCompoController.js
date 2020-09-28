const debug = require('debug')('app:crudCompoController');
const { ObjectID } = require('mongodb');

const defaultCompos = require('../Constants/bikeDefaultComponents');

function debugObject(object) {
	Object.entries(object).forEach((prop) => {
		debug(prop);
	});
}

function checkCompoDisplayName(compoType) {
	let result = defaultCompos.find((compo) => {
		return compo.compoType === compoType;
	});

	return result.compoDisplayName;
}

function crudBikeController(BikeModel, CompoModel) {
	// Private functions
	function createCompo(req, res) {
		const { compoInfo, userId, bikeId } = req.body;
		const compoQuery = {};
		Object.entries(compoInfo).forEach((prop) => {
			compoQuery[prop[0]] = prop[1];
		});
		compoQuery.compoBikeId = bikeId;
		compoQuery.compoUserId = userId;
		compoQuery.compoDisplayName = checkCompoDisplayName(
			compoInfo.compoType
		);

		CompoModel.create(compoQuery, (error, createdCompo) => {
			if (error) {
				res.status(400);
				res.send(false);
			} else {
				res.status(201);
				return res.json(createdCompo);
			}
		});
	}

	function resetCompo(req, res) {
		const { compoId } = req.body;

		CompoModel.findById(compoId, (error, compo) => {
			if (error) {
				res.status(304);
				res.send(false);
			} else {
				compo.compoAccumulatedMeters = 0;
				compo.compoAccumulatedMinutes = 0;
				compo.save((saveError, savedStatus) => {
					if (saveError) {
						res.status(304);
						res.send(false);
					} else {
						res.status(200);
						res.send(true);
					}
				});
			}
		});
	}

	function deleteCompo(req, res) {
		const { compoId } = req.body;

		const compoQuery = {
			_id: new ObjectID(compoId),
		};

		CompoModel.deleteOne(compoQuery, (error, deletedStatus) => {
			if (error) {
				res.status(304);
				return res.send(false);
			} else {
				res.status(200);
				return res.send(true);
			}
		});
	}

	return { createCompo, resetCompo, deleteCompo };
}

module.exports = crudBikeController;
