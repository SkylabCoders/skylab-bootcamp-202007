const User = require('../../database/models/userModel');

const post = (req, res)=>{
  const user = new User(req.body);
  console.log(req.body);
  user.save((err)=>{res.send(err)});
  res.status(201).json(user);
};
const get = (req, res)=>{
  const query = {};
  if  (req.query.id) {
    query.id = req.query.id;
    User.find(query, (err, Useres)=>{
      if (err) { return res.send(err) }
      return res.json(Useres);
    })
  } else if (req.query.name) {
    query.name = req.query.name;
    User.find(query, (err, Useres)=>{
      if (err) { return res.send(err) }
      return res.json(Useres);
    }) 
  } else {
    User.find({}, (err, Useres)=>{
      if (err) { return res.send(err) }
      return res.json(Useres);
    })
  }
};

module.exports = { post, get };