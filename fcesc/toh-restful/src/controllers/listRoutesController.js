
function methods(Model){
  function create (req, res) {
    const item = new Model(req.body);
    if(!req.body.name){ 
      res.status(400);
      res.send('Item name is required');
    }
    item.save((err)=>{res.send(err)});
    res.status(201);
    res.json(item);
  }
  function getList (req, res) {
    const query = {};
    if  (req.query.id) {
      query.id = req.query.id;
      Model.find(query, (err, heroes)=>{
        if (err) { return res.send(err) }
        res.status(200);
        return res.json(heroes);
      })
    } else if (req.query.name) {
      query.name = req.query.name;
      Model.find(query, (err, heroes)=>{
        if (err) { return res.send(err) }
        res.status(200);
        return res.json(heroes);
      }) 
    } else {
      Model.find({}, (err, heroes)=>{
        if (err) { return res.send(err) }
        res.status(200);
        return res.json(heroes);
      })
    }
  };
  return { create, getList };
}

module.exports = methods;