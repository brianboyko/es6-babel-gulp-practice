var config = require(./knexfile.js);
var env = 'digiquiz';
var knex = require('knex')(config[env])

module.exports = {
  url: "postgres://postgres@localhost/digiquiz",
  knex: knex;
}

knex.migrate.latest([config]);
