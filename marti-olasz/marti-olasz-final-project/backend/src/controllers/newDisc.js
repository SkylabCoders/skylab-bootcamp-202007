const callback = require('./callback');

function newDisc(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $addToSet: { discography: req.body } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = newDisc;
