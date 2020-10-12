const callback = require('./callback');

function updateUser(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true })
      .populate('following', 'name city country logo')
      .populate('band', 'name logo')
      .exec(callback(res));
  };
}

module.exports = updateUser;
