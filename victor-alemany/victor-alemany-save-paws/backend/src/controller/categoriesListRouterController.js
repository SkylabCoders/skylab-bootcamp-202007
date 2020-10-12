function categoriesController(Category) {
    
    const get = (req, res) => {
        const query = {};

        Category.find(query, (error, category) => {
            if (error) {
                res.send(error);
                res.status(404);
            }else{
            res.status(200)
            res.json(category);
            }
        });
    };

    return { get };
}

module.exports = categoriesController;