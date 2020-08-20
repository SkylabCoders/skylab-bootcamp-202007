const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
    passport.use(new Strategy({
        // nombre del campo donde están
        userField: 'user', 
        passwordField: 'passport'
    }, (username, password, done) => {
        // creamos petición a mongo
        let client;
        const mongoUrl = 'monodb://localhost:27017';
        const dbName = 'shieldHeroes';
        const collectionName = 'users';

        (async function mongo(){
           try {
                client = await MongoClient.connect(mongoUrl);
                // pillar la base de datos:
                const db = client.db(dbName);
                const collection = db.collection(collectionName);
                // el user de aquí es el declarado en el campo del ejs y arriba en userField
                const user = await collection.findOne( { user: username } );

                // alguien que ya está regidtrado, ahora miramos si la contraseña es correcta o no:
                if(user.password === password) {
                    done(null, user);
                } else {
                    done(null, false);
                }
           } catch (error) {
               // el error por standard tiene varias propiedades y en ellas stack. Y decimos de dónde viene el error
                debug(error.stack);
           }

            client.close();
        }())
        // buscar en la DDBB si existe el usuario

        // si está logueado
        // done (no hay error) - y este es el usuario (null, user)

        // si no está logueado
        // done(null, false)

        // req.user
    })
    );
}

module.exports = localStrategy();

// se puede ejecutar aquí o en index... Mejor en index por si hay que pasar parámetros
// module.exports = localStrategy();