const jwt = require('jsonwebtoken')

function loginRouteController(User) {
    function post(req, res) {
        let query
        if (req && req.body && req.body.username && req.body.password) {
            query = { email: req.body.username }

            User.find(query, (err, detail) => {
                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on search'
                        }
                    });
                }

                else if ((detail.length > 0) && (detail[0].password === req.body.password)) {
                    const payload = {
                        check: true
                    };
                    const token = jwt.sign(payload, 'secretomasprofundo', { expiresIn: 1440 });

                    res.json({ message: 'Login Correctly', user: detail[0], token });
                }
                else {
                    res.status(401)
                    res.json({
                        error: {
                            code: 3,
                            message: 'Incorrect password or Username'
                        }
                    })

                }
            })
        }
        else {
            res.status(400)
            res.json({
                error: {
                    code: 4,
                    message: 'Incorrect params Request'
                }
            });
        }
    }
    return { post }
}
module.exports = loginRouteController