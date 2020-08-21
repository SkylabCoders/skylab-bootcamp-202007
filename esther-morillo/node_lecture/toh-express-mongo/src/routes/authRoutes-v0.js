const express = require('express');
const debug = require('debug')('app:authRoutes');

// interactuar con la base de datos:
const { MongoClient } = require('mongodb');
const passport = require('passport');

// express.Router es un obj que permite a express conectar las rutas de la req con los templates de una manera ordenada
// para saber qué url conecta con qué ejs o componente
const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
// ahora vamos a usar una colección de usuarios - la estamos creando en esta línea:
const collectionName = 'users';
let client;


// obtiene la nav porque se lo hemos pasdo como argumento desde index.js
// meteremos las rutas que me permitan mostrar
function router(nav) {
   authRoutes.route('/signin')
    .post(passport.authenticate('local', {
        successRedirect: '/auth/profile',
        failureRedirect: '/auth/signin'
    }))
    .get((req, res) => {
        // al hacer el render hay que decirle la carpeta porque en index solo le decimos que los archivos estáticos están en views, pero ahora hemos creado una carpeta dentro auth
        res.render('auth/signin', { nav }) // res.send('GET signup works') --> solo para que pinte sin mandar a un ejs // { nav } para que en el ejs salga pintada la importación del header - enviamos el arrary de los links del nav, que lo hemos pasado por le index invocado, para que llegue como parámetro a la función. A render le pasamos un obj con la propiedad nav (del array de los links). render() como segundo argumento siempre recibe un onjeto.
    })

    // .post((req, res) => {
    //     res.send('hi')
    // }
    // );

    // res.json(req.body); // para ver el contenido del body, que será un objeto con los datos introducidos
    

    authRoutes
        .route('/signup')
        .get((req, res) => {
            res.render('auth/signup', { nav }) 
        })
        .post((req, res) => {
            const newUser = { ...req.body, user: req.body.user.toLowerCase() }; // lo metemos en una const con nombre sin destructurar { user, email, password } - de esta manera nos da mucha más información porque no le decimos que queremos el user, etc.
            // res.json(req.body); // queremos obtener el objeto que nos devuelve - Hay una propiedad ops
            // metemos destructuring assignment para añadir esa propiedad y que no distinga entre un email escrito en mayúsculas o minúsculas ----> email: req.body.email.toLowerCase()
            
            (async function mongo(){
                try {
                    client = await MongoClient.connect(dbUrl)
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName);

                    // buscar si el usuario existe en la db
                    // para el findOne necesitamos un filtro y un callback para ese filtro
                    // el email del objeto es el nombre que tiene el input en el ejs
                    const user = await collection.findOne({ user: newUser.user }); // buscamos en la db

                    if(user) { // user o email
                        // Si el email de usuario existe, redirecciono a signin
                        res.redirect('/auth/signin'); // si aquí meto un render() pintará en esa misma dirección el signin  
                    } else {
                        const result = await collection.insertOne(newUser); // si no está te envío al profile
                        req.login(result.ops[0], () => {
                            res.redirect('/auth/profile')
                        })
                    }

                } catch (error) {
                    debug(error.stack);
                }
                
                client.close();  
            }());
        });


        authRoutes
        .route('/profile')
        .all((req, res, next) => {
            // si no es ni 0, ni falso, ni undefined, ni null, ni cadena vacía
            // hay usuario, continúo, next()
            if(req.user) {
                next();
            } else {
                res.redirect('/auth/signin');
            }
        })
        .get((req, res) => {
            res.render('/auth/profile', { nav, user: req.user });
        })
        .post((req, res) => {
            res.send('POST profile')
        })

        
   
    return authRoutes;
}

module.exports = router;