function heroController(Hero) {
    function post(req, res) {
        const hero = new Hero(req.body);
        if (!req.body.name && !req.body.user) {
            res.status(400);
            res.send('Name is required')
        }
        hero.save();
        res.status(201)
        return res.json(hero);
    }
    function get(req, res) {
        const query = {};
        if (req.query.id) {
            query.id = req.query.id;

        } else if (req.query.name) {
            query.name = req.query.name;


        } else if (req.query.user) {
            query.user = req.query.user;

        }

        Hero.find(query, (error, heroes) => {
            if (error) res.send(error);

            res.json(heroes);
        })

    }
    return { get, post }
}
module.exports = heroController;