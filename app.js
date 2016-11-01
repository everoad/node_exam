const express = require('express');
const bodyParser = require('body-parser');
const board = require('./router/board.js');
const member = require('./router/member.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/board', board);
app.use('/member', member);

app.set('view engine', 'jade');
app.set('views', './views');

app.locals.pretty = true;

app.listen(3000, () => {
  console.log('Server Start! Port 3000!');
});
