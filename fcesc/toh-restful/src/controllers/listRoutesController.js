
function methods(Model){
  function create (req, res) {
    const hero = new Model(req.body);
    hero.save((err)=>{res.send(err)});
    res.status(201).json(hero);
  }
  function getList (req, res) {
    const query = {};
    if  (req.query.id) {
      query.id = req.query.id;
      Model.find(query, (err, heroes)=>{
        if (err) { return res.send(err) }
        return res.json(heroes);
      })
    } else if (req.query.name) {
      query.name = req.query.name;
      Model.find(query, (err, heroes)=>{
        if (err) { return res.send(err) }
        return res.json(heroes);
      }) 
    } else {
      Model.find({}, (err, heroes)=>{
        if (err) { return res.send(err) }
        return res.json(heroes);
      })
    }
  };
  return { create, getList };
}

module.exports = methods;