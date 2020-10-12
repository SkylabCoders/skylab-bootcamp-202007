const callback = require('./callback');

function removeFollow(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(
      id,
      { $pull: { following: req.body.band } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = removeFollow;
