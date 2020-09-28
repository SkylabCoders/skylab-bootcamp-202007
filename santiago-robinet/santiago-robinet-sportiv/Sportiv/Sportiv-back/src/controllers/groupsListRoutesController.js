
function groupsController(Group){

    function get (req, res) {
        const query = {};
    
        Group.find(query, (error, groups) => {
            if(error){
                res.status(400);
            } else {
                res.status(200);
                res.json(groups);
            }
        })
    }
    return {get}
}

module.exports = groupsController;