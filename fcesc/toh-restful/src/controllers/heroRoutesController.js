const put = (req, res) => {
  const { hero } = req;
  if (hero) {
    req.hero = hero;
    res.send('what');
  }
};
const deleter = (req, res)=>{
  const { hero } = req;
  if (hero) {
    hero.remove((err)=>{
      if(err) { res.send(err) }
      res.sendStatus(204);
    })
  }
};
const patch = (req, res)=>{
  const { hero } = req;
  if (hero) {
    hero.remove((err)=>{
      if(err) { res.send(err) }
      res.sendStatus(204);
    })
  }
};
const get = (req, res)=>{
  const { hero } = req;
  if (hero) {
    hero.remove((err)=>{
      if(err) { res.send(err) }
      res.sendStatus(204);
    })
  }
};
module.exports = { get, put, patch, deleter };