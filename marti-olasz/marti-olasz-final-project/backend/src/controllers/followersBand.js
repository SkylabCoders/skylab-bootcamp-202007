function followersBand(User) {
  return (req, res) => {
    const { id } = req.params;
    User.find({ following: id }, (err, followers) => {
      if (err) res.send(err);
      else {
        res.status(200);
        res.send(`${followers.length}`);
      }
    });
  };
}

module.exports = followersBand;
