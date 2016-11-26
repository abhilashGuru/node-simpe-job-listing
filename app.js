var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var indexPage = require('./routes/index-page.js');
var detailsPage = require('./routes/details-page.js');
var postJobPage = require('./routes/post-job-page.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', indexPage);
app.get('/details/:id', detailsPage);
app.get('/post-job', postJobPage);
app.post('/post-job', postJobPage);

var port = process.env.PORT || 3100;
app.listen(port, function() {
  console.log('Application is running at port:', port);
});