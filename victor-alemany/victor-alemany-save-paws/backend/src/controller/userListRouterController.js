function userController(User) {

    const post = (req, res) => {
        const user = new User(req.body);

        if (!req.body) {
            res.send('user is required!');
           return  res.status(400);
        } else {
            user.save();
            res.status(200);
            return res.json(user);
        }
    }
    
    const get = (req, res) => {

        User.findOne({auth: req.query.id}, (error, user) => {
            if (error) {
                res.send(error);
                return res.status(404);
            }else{
                res.status(200);
            return res.json(user);
            }
        });
    };

    return { post, get };
}

module.exports=userController;