var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = {
  url: "postgres://postgres@localhost/development",
  knex: knex
}

knex.migrate.latest([config]);
