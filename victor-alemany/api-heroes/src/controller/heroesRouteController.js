// const Hero = require('../models/heroModel')

function heroesController(Hero) {
    const post = (req, res) => {
        const hero = new Hero(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('Name is required!');
        } else {
            hero.save();
            // separamos las funciones para poder testeaerlas mejor
            res.status(201)
            res.json(hero);
        }
    }
    const get = (req, res) => {
        const query = {};
        if (req && req.query && req.query.id) {
            query.id = req.query.id;
        }
        Hero.find(query, (error, hero) => {
            if (error) {
                res.send(error);
            }else{
            res.status(201)
            res.json(hero);
            }
        });
    };

    return { get, post };
}

module.exports = heroesController;