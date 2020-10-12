const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'upload',
      req.params.type,
      req.params.id
    );
    fs.mkdirSync(uploadsDir, { recursive: true });
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${req.params.name}${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

const upload = multer({ storage });

const imageRouter = express.Router();

const controller = require('../controllers/image');

function routes() {
  imageRouter
    .route('/:type/:id/:name')
    .post(upload.single('file'), controller.create);
  // .delete(controller.destroy);

  return imageRouter;
}

module.exports = routes;
