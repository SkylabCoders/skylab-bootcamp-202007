const path = require('path');

exports.create = (req, res) => {
  const remove = path.join(__dirname, '..', '..', 'public');
  const relPath = req.file.path.replace(remove, '');
  res.json({ path: relPath });
};
