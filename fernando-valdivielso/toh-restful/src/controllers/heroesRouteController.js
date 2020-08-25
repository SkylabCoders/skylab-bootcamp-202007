
function heroesController(Hero) {
  const post = (req, res) => {
    const hero = new Hero(req.body);
    if (!req.body.name) {
      res.status(400);
      res.send('name is required')
    }
    hero.save();
    res.status(201);
    res.json(hero);
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

module.exports = heroesController;
