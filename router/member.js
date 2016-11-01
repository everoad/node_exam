const express = require('express');
const router = express.Router();
const memberModel = require('../model/memberModel.js');

router.route('/join')
.get((req, res) => {
  res.render('join');
})
.post((req, res) => {
  var mb_email = req.body.mb_email;
  var mb_pwd = req.body.mb_pwd;
  memberModel.join([mb_email, mb_pwd], (insertId) => {
    res.send('insertId : ' + insertId);
  });
});

router.route('/login')
.get((req, res) => {
  res.render('login');
})
.post((req, res) => {
  var mb_email = req.body.mb_email;
  var mb_pwd = req.body.mb_pwd;
  memberModel.login([mb_email], (rows) => {
    if(!rows[0]) {
      res.send('존재 x');
    } else if(mb_pwd !== rows[0].mb_password) {
      res.send('비밀번호 틀림');
    } else {
      res.send('성공');
    }
  });
});

module.exports = router;
