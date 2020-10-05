const callback = require('./callback');

function searchBand(Band) {
  return (req, res) => {
    const { text } = req.params;
    Band.find(
      {
        $and: [{ name: { $regex: new RegExp(text, 'i') } }, { public: true }]
      },
      'name city country tags bio logo',
      callback(res)
    );
  };
}

module.exports = searchBand;
