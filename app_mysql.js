var express = require('express');
var app = express();

var bodyParser = require('body-parser');
//memory 저장.
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var config_db = require('./config/db_user');
var sessionStore = new MySQLStore(config_db);
var path = require('path');

var board = require('./router/board.js');
var member = require('./router/member.js');
require('express-dynamic-helpers-patch')(app);

app.dynamicHelpers({
   session: (req, res) => {
     return req.session;
   }
 });
//asdf
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: '123124SDFSDFJ@#$%@#)FJ!@#asd',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

app.use('/board', board);
app.use('/member', member);
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');
app.set('views', './views');

app.locals.pretty = true;

app.listen(3000, () => {
  console.log('Server Start! Port 3000!');
});
