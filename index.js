var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var expressSession = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


var db = require('./config/db');

var port = process.env.PORT || 3000;

mongoose.connect(db.url);

var User = require('./app/models/user');
var Industry = require('./app/models/industry');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(expressSession({
	secret: 'secretsecret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


var authRoutes = require('./app/routes/authApi');
var dataRoutes = require('./app/routes/dataApi');



app.use('/user/', authRoutes);
app.use('/data/', dataRoutes);

app.get('*', function(req, res) {

	console.log("Get request to: ");
  console.log(req.url);
	res.render('index');
});


app.listen(port);

console.log("Listening to 3000.");



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

exports = module.exports = app;