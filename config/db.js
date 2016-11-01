const mysql = require('mysql');
const user = require('./db_user.js');

const conn = mysql.createConnection(user);

conn.connect((err) => {
  if(err) {
    console.log('Error!');
  } else {
    console.log('Connect!');
  }
});

module.exports = conn;
