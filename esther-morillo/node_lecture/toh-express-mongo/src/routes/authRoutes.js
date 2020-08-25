const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;
function router(nav) {
    authRoutes
    .route('/logout')
    .post((req, res) => {
        if(req.user) {
            req.logout();
            res.redirect('/auth/signin');
        }
    })
    
	authRoutes
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', { nav }); 
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);
	authRoutes
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				user: req.body.user.toLowerCase()
			};
			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const user = await collection.findOne({ user: newUser.user });
					if (user) {
						res.redirect('/auth/signin');
					} else {
						const result = await collection.insertOne(newUser);
						req.login(result.ops[0], () => {
							res.redirect('/auth/profile');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	authRoutes
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		})
		.post((req) => {
            // destructuring de todo y cogemos el password nuevo
            let { password } = req.body;
            // cojo la primera posición del array que me aparece con 2 posiciones
            [password] = password;
            // passport que hemos puesto user.user
            const { user } = req.user;
            
            (async function mongo (){
                try {
                    client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

                    // para el updateOne primero ponemos todo el objeto y luego le decimos la propiedad que queremos cambiar
                    await collection.updateOne({user}, {$set: {password}});                        

                } catch (error) {
                    debug(error.stack);
                }
				client.close();
			}())
		});
	return authRoutes;
}
module.exports = router;