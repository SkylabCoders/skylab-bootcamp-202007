
function lessonsController(Lesson){

    function get (req, res) {
        const query = {};
    
        Lesson.find(query, (error, lessons) => {
            if(error){
                res.status(400);
            } else {
                res.status(200);
                res.json(lessons);
            }
        })
    }
    return {get}
}

module.exports = lessonsController;