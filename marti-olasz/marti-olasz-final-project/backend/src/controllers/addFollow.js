const callback = require('./callback');

function addFollow(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(
      id,
      { $addToSet: { following: req.body.band } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = addFollow;
