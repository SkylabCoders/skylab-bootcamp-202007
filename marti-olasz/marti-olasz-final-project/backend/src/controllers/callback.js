function callback(res) {
  return (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.json(result);
    }
  };
}

module.exports = callback;
