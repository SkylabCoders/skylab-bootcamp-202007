const get = (req, res) => {
    const { company } = req;
    res.json(company);
};
const put = (req, res) => {
    const { company } = req;
    // Si no pones alguna propiedad se la vuela
    company.name = req.body.name;
    company.email = req.body.email;
    company.password = req.body.password;

    company.save((error) => {
        if (error) {
            res.send(error);
        }
        res.json(company);
    });
};
const patch = (req, res) => {
    const { company } = req;

    company.name = req.body.name;
    company.email = req.body.email;
    company.password = req.body.password;

    // eslint-disable-next-line no-underscore-dangle
    /* if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
    } */
    Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        company[key] = value;
    });
    company.save((error) => {
        if (error) {
            res.send(error);
        }
        res.json(company);
    });
};
const deleter = (req, res) => {
    const { company } = req;
    company.remove((error) => {
        if (error) {
            res.send(error);
        }
        res.sendStatus(204);
    });
};

module.exports = { get, put, patch, deleter };