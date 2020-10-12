const debug = require("debug")("app:lessonController");

const get = (req, res) => {
  const { lesson } = req;

  if (lesson) {
    res.status(200);
    res.json(lesson);
  } else {
    res.status(404);
  }
};

module.exports = { get };
