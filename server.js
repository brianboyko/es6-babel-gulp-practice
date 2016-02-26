// use es6
require("babel-polyfill");
// set environment
process.env.NODE_ENV = 'development' // 'production'

// requirements
var webpack      = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var config       = require('./webpack.config')
var express      = require('express');
  var app        = express();
var path         = require('path');
var session      = require('express-session');
var passport     = require('passport');
var flash        = require('connect-flash')
var bodyParser   = require('body-parser');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var pg           = require('pg')
var db           = require('./config/db.js').knex
  // db.knex is our database connection.

// ======================
// CONFIGURATION
// ======================
const PORT = process.env.PORT || 8080;
require('./config/passport')(passport, db);

// DATABASE =============


// EXPRESS ==============

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs'); // not sure I want to use ejs, but will keep it for now.


// FRONT PAGE
  app.use(express.static(path.join(__dirname, 'client')))


// PASSPORT ============

app.use(session({secret: 'thisisthepassportseeeeeeeekrit' }));// any string of text will do.
app.use(passport.initialize());
app.use(passport.session()); // persisitent login sessions.
app.use(flash()); // use connect-flash for flash messages stored in session.

// WEBPACK =============
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// ROUTES ==============
require('./app/routes.js')(app, passport);



//===========================
// LAUNCH
//===========================

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT)
  }
})

// // REACT & REDUX ROOT.
//
// // requirements
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
//
// // containers
// import App from './containers/App'
//
// // store
// import configureStore from './store/configureStore'
//
// const store = configureStore({})
// const history = syncHistoryWithStore(browserHistory, store)
// const rootElement = document.getElementById('root')
//
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )
