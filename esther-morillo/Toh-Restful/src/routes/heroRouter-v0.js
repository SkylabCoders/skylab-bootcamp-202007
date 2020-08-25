const express = require('express');

const heroRouter = express.Router();


function routes(Hero) {
    
    heroRouter.route('/')
    .post((req, res) => {
        // en el body no llegará nada si no instalamos body-parser
        const hero = new Hero(req.body);
        // lo que envía se guarda
        hero.save();
        res.status(201).json(hero);
    })
    .get((req, res) => {
        const query = {};

        if(req.query.id) {
            query.id = req.query.id;
        }
        // nos devuelve un array con todas las coincidencias
        Hero.find(query, (error, heroes) => {
            if (error) {
                return res.send(error);
            }
            // nombre que le damos en el export del heroesJson: 'Heroes'
            // si encuentras algo devuélveme el json
            res.json(heroes);
        })
    })

    // con un midleware y así no repetimos código por todo. Es un all, es igual
    // y donde borramos añadimos const { hero } = req;
    heroRouter.use('/:heroId', (req, res, next) => {
        Hero.findById(req.params.heroId, (error, hero) => {
            if (error) {
                res.send(error);
            }

            if (hero) {
                req.hero = hero;
                next();
            }
    })

    // buscamos un único elemento. nos devuelve un objeto
    heroRouter.route('/:heroId')
    .put((req, res) => {
        // necesitamos recibir un héroe, pero a diferencia del post, en el put la información sí que viaja el héroe en la request (trae el hero)
        // este es el que vamos a actualizar
        // obtenemos el héroe
        Hero.findById(req.params.heroId, (error, hero) => {
            if (error) {
                res.send(error);
            } 

            // y necesitamos el hero del body --> que van las propiedades que quiero cambiar
            // obtener los nuevos valores - aquí modificmos la prop nombre que viene en el body
            if (hero) {
                // eslint-disable-next-line no-param-reassign
                hero.name = req.body.name;
                // guardar los valores actualizados - ese nombre, ese héroe
                hero.save(err => {
                    if(err) {
                        res.send(err);
                    }

                    res.json(hero)
                });
            }
        });
    })
    .patch((req, res) => {
        // hace lo mismo que el put
        // y luego por cada propiedad del body actualizo el modelo
        // guardo el modelo y respondo con un  json
        Hero.findById(req.params.heroId, (error, hero) => {
            if (error) {
                res.send(error);
            }

            if (hero) {
                // por cada una de las propiedades que ha enviado el body
                Object.entries(req.body).forEach(item => {
                    const key = item[0];
                    const value = item[1];
                    // eslint-disable-next-line no-param-reassign
                    hero[key] = value;
                })

                hero.save(err => {
                    if (err) {
                        res.send(err);
                    }

                    res.json(hero);
                });
            }
        });
        
    })
    .delete((req, res) => {
        Hero.findById(req.params.heroId, (error, hero) => {
            if (error) {
                res.send(error);
            }

            if (hero) {
                hero.remove((err) => {
                    if (err) {
                        res.send(err);
                    }
                
                res.sendStatus(204);
                });
            }
        });
    })
    .get((req, res) => {
        Hero.findById(req.params.heroId, (error, hero) => {
            if(error) {
                res.render(error);
            }

            res.json(hero);
        })
    })

    return heroRouter;
}

module.exports = routes;