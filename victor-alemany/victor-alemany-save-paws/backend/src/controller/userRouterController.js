
const put = (req, res) => {
    const { user } = req;

    if(user){
        for(let i in req.body){
            user[i]=req.body[i];
        }
    }

    user.save((error,userReturned) => {
        if (error) {
            res.send(error);
            res.status(404);
        } else {
            res.status(200);
            res.json(userReturned);
        }
    });
};
module.exports={put};