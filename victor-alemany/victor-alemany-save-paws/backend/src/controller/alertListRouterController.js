function alertController(Alert) {
    
    const get = (req, res) => {
        const query = {};
        if (req && req.query && req.query.id) {
            query.id = req.query.id;
        }
        Alert.find(query, (error, alert) => {
            if (error) {
                res.send(error);
                res.status(404);
            }else{
            res.status(200)
            res.json(alert);
            }
        });
    };

    const post = (req, res) => {
        const alert = new Alert(req.body);

        if (!req.body) {
            res.send('information is required!')
            return  res.status(400);
        } else {
            alert.save((error, returnedAlert) => {
                if (error) {
                    res.status(404);
                }else{
                    res.status(200);
                    return res.json(returnedAlert);  
                }
            })
        }
    }

    return { get, post };
}

module.exports = alertController;