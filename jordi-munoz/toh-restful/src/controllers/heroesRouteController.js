const Hero = require('../models/heroModel');

function heroesController(Hero) {
  const post = (req, res) => {
    const hero = new Hero(req.body);
    if (!req.body.name) {
      res.status(400);
      res.send('Name is required!');
    }
    hero.save();
    res.status(201);
    res.json(hero);
  }

  const get = (req, res) => {
    const query = {};
    if (req && req.query && req.query.id) {
      query.id = req.query.id;
    }
    Hero.find(query, (error, heroes) => {
      if (error) {
        res.send(error);
      }
      res.status(200);
      res.json(heroes);
    });
  }
  return { post, get };
}

module.exports = heroesController;
