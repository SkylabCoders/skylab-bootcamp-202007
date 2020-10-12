const callback = require('./callback');

function getBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findById(id, callback(res));
  };
}

module.exports = getBand;
