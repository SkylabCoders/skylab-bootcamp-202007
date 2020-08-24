
const express = require('express');

const heroRouter = express.Router();

function routes(Hero) {

    heroRouter.route('/')

        .post((req, res) => {
            const hero = new Hero(req.body);
            hero.save();
            res.status(201).json(hero);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.id) {
                query.id = req.query.id;
                Hero.find(query, (err, heroes) => {
                    if (err)
                        return res.send(err);
                    return res.json(heroes);
                })
            } else if (req.query.name) {
                query.name = req.query.name;
                Hero.find(query, (err, heroes) => {
                    if (err)
                        return res.send(err);
                    return res.json(heroes);
                })
            } else {

                Hero.find({}, (err, heroes) => {
                    if (err)
                        return res.send(err);
                    return res.json(heroes);
                })
            }


        })

    heroRouter.route('/:heroId')
        .patch((req, res) => {
            Hero.findById(req.params.heroId, (error, hero) => {
                if (error) res.send('error')
                if (hero) {
                    if (req.body._id) {
                        delete req.body._id
                    }
                    Object.entries(req.body).forEach(element => {
                        const key = element[0];
                        const value = element[1];
                        hero[key] = value;
                    });
                    hero.save(err => {
                        if (err) res.send(err)
                        res.json(hero);
                    })
                }

            });

        })
        .delete((req, res) => {
            Hero.findById(req.params.heroId, (error, hero) => {
                if (error) res.send('error')
                if (hero) {
                    hero.remove((err) => {
                        if (err) res.send(err)
                        res.sendStatus(204)
                    })
                }
            })
        })
        .put((req, res) => {
            Hero.findById(req.params.heroId, (error, hero) => {
                if (error) res.send(error);
                if (hero)
                    hero.name = req.body.name;
                hero.save(err => {
                    if (err) res.send(err);
                    res.json(hero)
                });
            });
        })
        .get((req, res) => {

            Hero.findById(req.params.heroId, (error, hero) => {
                if (error) res.send('error')
                res.json(hero)
            });
        })


    return heroRouter;
}

module.exports = routes;



