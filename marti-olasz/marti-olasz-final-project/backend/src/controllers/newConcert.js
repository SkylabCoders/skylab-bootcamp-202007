const callback = require('./callback');

function newConcert(Band) {
  return (req, res) => {
    const { id } = req.params;

    Band.findByIdAndUpdate(
      id,
      { $addToSet: { concerts: req.body } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = newConcert;
