const get = (req, res) => {

    const { alert } = req;
    if (alert) {
        res.status(200);
        return res.json(alert);
    }
    return res.status(404);
};

const put = (req, res) => {
    const { alert } = req;

    if(req.body.active)alert.active = req.body.active;
    if(req.body.comments){
        const sumatory= alert.comments;
        alert.comments = sumatory + req.body.comments;
    }
    if(req.body.followed){
        let arrayUpdated = [];  
        const checked = alert.followed.some((id)=> req.body.followed === id);
        console.log(checked);
    
        if(checked){
           arrayUpdated = alert.followed.filter((id)=> req.body.followed !== id);
           alert.followed = arrayUpdated;
        }
        
        else{
            alert.followed = [...alert.followed, req.body.followed];
        }
    }

    alert.save((error, returnedAlert) => {
        if (error) {
            res.status(400);
        }else{
            res.status(200);
            return res.json(returnedAlert);  
        }
    });
};

module.exports = { get, put };