const callback = require('./callback');

function removePhoto(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $pull: { photos: req.body.deleteId } },
      { new: true },
      callback(res)
    );
  };
}

module.exports = removePhoto;
