require("babel-polyfill");

exports.up = function(knex, Promise) {

      return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('type');
            table.string('local_login_email');
            table.string('local_password_hash');
            table.string('facebook_id');
            table.string('facebook_token');
            table.string('twitter_token');
            table.string('twitter_display_name');
            table.string('twitter_username');
            table.string('google_id');
            table.string('google_token');
            table.string('google_email');
            table.string('google_name');
            table.string('first_name');
            table.string('lastname');
            table.json('metadata_json');
            table.timestamp('created_on').defaultTo(knex.fn.now());
            table.timestamp('last_login').defaultTo(knex.fn.now());
        }),

        knex.schema.createTable('decks', function(table) {
            table.increments('id').primary();
            table.integer('creator_id')
                 .references('id')
                 .inTable('users');
            table.string('name');
            table.string('topic');
            table.string('type')
            table.string('availability');
            table.text('description');
            table.json('metadata_json');
        }),

        knex.schema.createTable('questions', function(table) {
            table.increments('id').primary();
            table.integer('deck_id')
                 .references('id')
                 .inTable('decks');
            table.string('author_id')
                 .references('id')
                 .inTable('users');
            table.text('question');
            table.text('correct_answer');
            table.json('acceptable_answers_json');
            table.json('metadata_json');
        }),

        knex.schema.createTable('games', function(table) {
            table.increments('id').primary();
            table.integer('owner_id')
                 .references('id')
                 .inTable('users');
            table.string('deck_id')
                 .references('id')
                 .inTable('decks');
            table.timestamp('created_on').defaultTo(knex.fn.now());
            table.json('results_json');
            table.json('metadata_json'); 
        }),

        knex.schema.createTable('users_decks', function(table) {
            table.increments('id').primary();
            table.integer('owner_id')
                 .references('id')
                 .inTable('users');
            table.string('deck_id')
                 .references('id')
                 .inTable('decks');
        }),

        knex.schema.createTable('users_games', function(table) {
            table.increments('id').primary();
            table.integer('owner_id')
                 .references('id')
                 .inTable('users');
            table.string('game_id')
                 .references('id')
                 .inTable('games');
        }),

        knex.schema.createTable('teacher_student', function(table){
            table.increments('id').primary();
            table.integer('teacher_id')
                 .references('id')
                 .inTable('users');
            table.integer('student_id')
                 .references('id')
                 .inTable('users');
        })

    ])
  
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('decks'),
        knex.schema.dropTable('questions'),
        knex.schema.dropTable('games'),
        knex.schema.dropTable('users_decks'),
        knex.schema.dropTable('users_games'),
        knex.schema.dropTable('teacher_student')   
          
    ])
};
