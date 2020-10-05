const callback = require('./callback');

function removeDisc(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $pull: { discography: { _id: req.body.deleteId } } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = removeDisc;
