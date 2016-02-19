var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = {
  url: "postgres://postgres@localhost/digiquiz_dev",
  knex: knex
}

knex.migrate.latest([config]);
