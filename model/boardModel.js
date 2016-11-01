const conn = require('../config/db.js');

exports.getList = function(callback) {
  var sql = 'SELECT * FROM board';
  conn.query(sql, (err, rows, fields) => {
    callback(rows);
  });
}

exports.write = (params, callback) => {
  var sql = 'INSERT INTO board(title, description, author, created) VALUES (?, ?, ?, now())';
  conn.query(sql, params, (err, result) => {
    callback(result.insertId);
  });
}
