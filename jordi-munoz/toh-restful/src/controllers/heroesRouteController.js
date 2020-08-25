const Hero = require('../models/heroModel');

function controller() {
  const post = (req, res) => {
    const hero = new Hero(req.body);
    hero.save();
    res.status(201).json(hero);
  }

  const get = (req, res) => {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
    Hero.find(query, (error, heroes) => {
      if (error) {
        res.send(error);
      }
      res.json(heroes);
    });
  }
  return { post, get }
}

module.exports = controller();
