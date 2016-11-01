const express = require('express');
const router = express.Router();

const boardModel = require('../model/boardModel.js');

const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/node/node_exam/uloads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.send('board!!');
});

router.get('/list', (req, res) => {
  boardModel.getList((rows) => {
    res.render('list', { list: rows });
  })
});

router.route('/write')
.get((req, res) => {
  res.render('write');
})
.post(upload.array('photos', 12), (req, res) => {
  var title = req.body.title;
  var desc = req.body.description;
  var author = req.body.author;
  var files = req.files;

  files.forEach((file) => {
    console.log(file.originalname);
  });

  boardModel.write([title, desc, author], (insertId) => {
    console.log(insertId);
    res.redirect('/board/list');
  })
});

module.exports = router;
