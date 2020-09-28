const debug = require('debug')('app:compoRouterController');
const { ObjectID } = require('mongodb');

function compoListRouterController(CompoModel) {
    function get(req, res) {
        if (req.params && req.params.compoId) {
            const compoQuery = {
                _id: new ObjectID(req.params.compoId)
            };

            CompoModel.find(compoQuery, (error, compo) => {
                if (error) {
                    res.status(400);
                    return res.send(
                        'Oops! We could not load this component. Try again'
                    );
                } else {
                    res.status(200);
                    return res.json(compo);
                }
            });
        } else {
            res.status(400);
            return res.send('A bike query with compoId is required');
        }
    }

    return { get };
}

module.exports = compoListRouterController;
