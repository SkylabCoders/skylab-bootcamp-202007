const callback = require('./callback');

function newBand(User, Band) {
  return (req, res) => {
    const { id } = req.params;
    const defaultBandInfo = {
      public: false,
      name: '',
      city: '',
      country: '',
      bio: '',
      tags: [],
      logo: 'https://static.thenounproject.com/png/55431-200.png',
      banner:
        'https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.rsocial.w1200.jpg',
      discography: [],
      concerts: [],
      photos: [],
      socialNetwork: {
        twitter: '',
        facebook: '',
        instagram: ''
      }
    };

    Band.create(defaultBandInfo, (err, band) => {
      if (err) res.send(err);
      else {
        User.findByIdAndUpdate(
          id,
          { band: band._id },
          { new: true },
          (error, user) => {
            if (error) res.send(error);
            else {
              User.findById(id)
                .populate('following', 'name city country logo')
                .populate('band', 'name logo')
                .exec(callback(res));
            }
          }
        );
      }
    });
  };
}

module.exports = newBand;
