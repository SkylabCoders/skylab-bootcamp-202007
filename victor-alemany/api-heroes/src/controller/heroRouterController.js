const get = (req, res) => {
    const { hero } = req;
    if (hero) {
        res.status(200);
        res.json(hero);
    }
    else {
        res.status(404);
    }
};
const put = (req, res) => {
    const { hero } = req;
    hero.name = req.body.name;
    debugger
    hero.save((error) => {
        if (error) {
            res.send(error);
            res.status(404);
        } else {
            res.status(204);
            res.json(hero);
        }
    });
};

const patch = (req, res) => {
    const { hero } = req;
    // eslint-disable-next-line no-underscore-dangle
    if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        hero[key] = value;
    });
    hero.save((error) => {
        if (error) {
            res.send(error);
            res.status(404);
        }
        else{
        res.json(hero);
        res.status(204);
        }
    });
};
const deleter = (req, res) => {
    const { hero } = req;
    hero.remove((error) => {
        if (error) {
            res.send(error);
            res.sendStatus(400);
        }
        else{
        res.status(204);
        }
    });
};
// estos parámetros apuntan a funciones de arriba y se ejecutan en heroRoute como callbacks
module.exports = { get, put, patch, deleter };