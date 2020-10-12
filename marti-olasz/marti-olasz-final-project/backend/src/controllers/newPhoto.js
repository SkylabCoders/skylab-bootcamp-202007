const callback = require('./callback');

function newPhoto(Band) {
  return (req, res) => {
    const { id } = req.params;

    Band.findByIdAndUpdate(
      id,
      { $addToSet: { photos: req.body.PhotoId } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = newPhoto;
