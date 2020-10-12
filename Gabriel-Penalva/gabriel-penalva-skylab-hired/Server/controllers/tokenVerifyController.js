

const jwt = require('jsonwebtoken');
function tokenVerify(req, res, next) {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, 'secretomasprofundo', ((err, decoded) => {
            if (err) {
                res.status(401)
                let error = {
                    error: {
                        code: 1,
                        message: 'Expired or invalid Token, please. logIn Again'
                    }
                }
                return res.json(error);

            } else {
                req.decoded = decoded;
                next();
            }
        }));
    } else {
        res.status(401)
        res.json({
            error: {
                code: 2,
                message: 'no Token  provided on headers'
            }
        });

    }
}
module.exports = tokenVerify; 