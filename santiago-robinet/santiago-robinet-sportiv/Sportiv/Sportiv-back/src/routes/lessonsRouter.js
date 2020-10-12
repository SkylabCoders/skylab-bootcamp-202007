const express = require("express");
const debug = require("debug")("app:lessonsRouter");
const lessonsListRoutesController = require("../controllers/lessonsListRoutesController");
const idController = require("../controllers/lessonController");

const lessonsRouter = express.Router();

function routes(Lesson) {
  const controller = lessonsListRoutesController(Lesson);
  lessonsRouter.route("/").get(controller.get);

  lessonsRouter.use("/:lessonId", (req, res, next) => {
    debug(req.params.lessonId);

    Lesson.find({ _id: req.params.lessonId }, (error, lesson) => {
      if (error) {
        res.send(error);
        res.status(404);
      }
      if (lesson) {
        res.status(200);
        req.lesson = lesson;
        next();
      }
    });
  });

  lessonsRouter.route("/:lessonId").get(idController.get);

  return lessonsRouter;
}

module.exports = routes;
