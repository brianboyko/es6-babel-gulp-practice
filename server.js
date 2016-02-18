require("babel-polyfill");


var express      = require('express');
var path         = require('path');
var session      = require('express-session');
var passport     = require('passport');
var flash        = require('connect-flash')
var bodyParser   = require('body-parser');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var configDB     = require('./config/database.js')
  var pg         = require('pg');
  var knex       = require('knex');

// ======================
// CONFIGURATION
// ======================
const PORT = process.env.PORT || 8080;

// DATABASE =============
var dbClient = new pg.Client(configDB.url); 

require('./config/passport')(passport);

// EXPRESS ==============
var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs'); // not sure I want to use ejs, but will keep it for now.

// PASSPORT ============
app.use(session({secret: 'thisisthepassportseeeeeeeekrit' }));// any string of text will do.
app.use(passport.initialize());
app.use(passport.session()); // persisitent login sessions.
app.use(flash()); // use connect-flash for flash messages stored in session. 

// ROUTES ==============
require('./app/routes.js')(app, passport);

//===========================
// DATABASE CONNECTIONS
// thanks go to: http://uitblog.com/postgres-with-passport/
//===========================
dbClient.connect(function(err){
  if(err){
    return console.error("Could not connect to Postgres ", err); 
  }
  dbClient.query('SELECT NOW() AS "theTime"', function(err, result){
    if(err){
      return console.error("Error running query", err);
    }
    console.log('The time is: ', result.rows[0].theTime);
    dbClient.end(); 
  })
})







//===========================
// LAUNCH
//===========================

app.listen(PORT);
console.log('Application now running on port ' + PORT)

