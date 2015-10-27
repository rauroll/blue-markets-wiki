var express = require('express');
var app = express();
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var db = require('./config/db');

var port = process.env.PORT || 3000;

//mongoose.connect(db.url);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('X-HTTP-Method-Override'));


var router = express.Router();

require('./app/routes')(router);
app.use('/', router);


app.listen(port);

console.log("Listening to 3000.");

exports = module.exports = app;