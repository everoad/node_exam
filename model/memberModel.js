const conn = require('../config/db.js');

exports.join = (params, callback) => {
  var sql ='INSERT INTO member(mb_email, mb_password) VALUES (?, ?)';
  conn.query(sql, params, (err, result) => {
    callback(result.insertId);
  });
}

exports.login = (params, callback) => {
  var sql = 'SELECT mb_id, mb_password FROM member WHERE mb_email = ?';
  conn.query(sql, params, (err, rows, fields) => {
    callback(rows);
  });
}
