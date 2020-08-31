
function methods(Model){
  function create (req, res) {
    const item = new Model(req.body);
    if(!req.body.name){ 
      res.status(400);
      res.send('Item name is required');
    } else {
      item.save((err)=>{res.send(err)});
      res.status(201);
      res.json(item);
    }
  }
  function getList (req, res) {
    const query = {};
    if  (req && req.query && req.query.id) {
      query.id = req.query.id;
    } else if (req && req.query && req.query._id) {
      query._id = req.query._id;
    } else if (req && req.query && req.query.name) {
      query.name = req.query.name; 
    }
    Model.find(query, (err, items)=>{
      if (err) { return res.send(err) }
      res.status(200);
      return res.json(items);
    })
  };
  return { create, getList };
}

module.exports = methods;