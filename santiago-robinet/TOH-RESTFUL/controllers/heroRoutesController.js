const put = ((req, res) => {
    const { hero } = req;

    if (hero) {
        hero.name = req.body.name;
        hero.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json(hero);
        });
    }
});

const patch = ((req, res) => {
    const { hero } = req;

    if(hero && req.body){
        if(req.body._id){
            delete req.body._id
        }
    
        Object.entries(req.body).forEach((item) => {
            const key = item[0];
            const value = item[1];
            hero[key] = value;
        });
    
        hero.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json(hero);
        });
    }

    
});

const deleter = ((req, res) => {
    const { hero } = req;

    if (hero) {
        hero.remove((err) => {
            if (err) {
                res.send(err);
            }
            res.sendStatus(204);
        });
    }
});

const get = ((req, res) => {
    res.send(req.hero);
});

module.exports = { put, patch, deleter, get }