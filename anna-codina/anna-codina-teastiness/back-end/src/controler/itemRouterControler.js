const get = (req, res) => {
  const { item } = req;
  res.json(item);
  res.status(200);
};

const put = (req, res) => {
  const { item } = req;
  for (let i in req.body) {
    item[i] = req.body[i];
  }
  item.save((error) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json(item);
  });
};

const deleter = ({ item }, res) => {
  let error = null;
  item.remove((removeError) => {
    error = removeError;
    if (error) {
      res.json(error);
      res.status(400);
    } else {
      res.json(item);
      res.status(200);
    }
  });
};

module.exports = { get, put, deleter };
