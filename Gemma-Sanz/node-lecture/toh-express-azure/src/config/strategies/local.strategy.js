const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
	passport.use(
		// Aqui tenemos que tener claro el campo de la vista lo que queremos traerle
		new Strategy(
			{
				// el string del usernameFiels tiene que ser igual al nombre del control del input en la vista
				usernameField: 'user',
				passwordField: 'password'
			},
			(username, password, done) => {
				let client;
				const mongoUrl = 'mongodb://localhost:27017';
				const dbName = 'shieldHeroes';
				const collectionName = 'users';

				(async function mongo() {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);

						const user = await collection.findOne({ user: username });

						// Aquí autorizamos, si el usuario introducido coincide con la contraseña le dejamos loguearse
						if (user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}
					} catch (error) {
						debug(error.stack);
					}

					client.close();
				})();

				//  este middleware lo que hace es buscar en la DDBB si existe el usuario
				// si esta logueado devuelve done(null, user)
				// si no esta logueado done(null, false)
				// estos datos los almacena en req.user
			}
		)
	);
}

// como es una función podemos ejecutarla aquí o el lugar donde queremos exportarla. Si tiene que recibir parametros mejor ejecutarla al sitio donde queremos ejecutarla
module.exports = localStrategy();
