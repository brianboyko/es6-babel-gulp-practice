require("babel-polyfill");
var request = require('request');
var bcrypt = require('bcrypt');

// STORIES! 

// as a user, I want to: 
/*.3

* login locally
* login with facebook
* login with google
* login with twitter
* login with linkedin
* login with steam


* Get a profile by name
* Add a profile
* amend a profile 
* delete my profile
* create a profile for someone else. 

* get a list of all the profiles I'm in charge of (as a teacher)

* make a deck (save a deck I've created);
* edit a deck
* delete a deck
* get all my decks
* get all public decks
* get a list of premium decks
* add a deck from public decks
* add a deck from premium decks
* get a particular deck's questions
* send a deck to another user
* publish a free deck
* publish a premium deck


* create a game
* store info about a game
* retrive info about a game
* retrieve info about a player of a game
* retrieve overall info about all players of that game, 
* retrieve data on all games I've played. 

*/

/*------------------------------------
// This module.exports is a function. It's the way that we
// pass in the live database connection ("knex") and use it with
// all the various module methods (which are returned.)  Trying
// to just export an object of methods will not work without
// the live database. 


module.exports for users.js
  signupLocal: -- takes a username and a hashed password,
  returns a promise to insert that username and hashed password
  into the database. 

  signupFacebook -- using the passport framework, it takes
  a username, a facebook ID, and a facebook token and returns
  a promise to insert that username and facebook info into
  the database.  

  updateFacebook -- Takes a facebook ID, facebook Token, and userID (an int)
  if a user already exists, this is a way for  them to add their
  facebook profile to their user info. 
    Checks to see if user exists. If so, returns false; if not,
    takes username, hashedPass, facebookID, facebookToken and inserts them in the database. 
    If FacebookID is null, works with just username and hashpass. 
  
  addProfile -- takes a userID#, and profile text, updateing
  the profile to include the new profile text.  

  getUserByName -- a helper function that returns a user record
  if you only have the username. 

  getUserById -- a helper function that returns a user's record
  if you only have the id#

  getUserByFacebook -- a helper function that returns a user's record
  if you only have the facebookID. 


-------------------------------------*/

var makeHash = function(password){
  var hash;
  return new Promise(function(resolve, reject){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
          resolve(hash);
      });
    });
  })
}


module.exports = function(knex) {

  return {
    signupLocal: function(login, password, first_name, last_name, email, type) {
      var hashedPass = makeHash(password);
      var joinDate = new Date(); 
      return knex('users').insert({
        'login': login,
        'password': hashedPass,
        'type': type,
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'joined_on': joinDate,
        'last_login': joinDate
      });
    },

    // signupFacebook: function(username, facebookId, facebookToken) {
    //   return knex('users').insert({
    //     'username': username,
    //     'fb_id': facebookId,
    //     'fb_token': facebookToken
    //   });
    // },

    // updateFacebook: function(facebookId, facebookToken, userId) {
    //   return knex('users')
    //     .where('id', userId) 
    //     .update({
    //       'fb_id': facebookId,
    //       'fb_token': facebookToken
    //     });
    // },

    replaceMetadata: function(login, metadata){
      // replaceMetadata overwrites all of metadata_json
      
      // metadata should be an object. 
      metadata = JSON.stringify(metadata); 
      knex('users')
        .where({'login': login})
        .update({'metadata_json':metadata});
    },

    setMetadata: async function(login, metadata){
      // setMetadata replaces -only- the properties
      // that the metadata has.  
      
      var data = await knex('users')
        .where({'login': login})
        .select('metadata_json');

      data = JSON.parse(data[0]); 

      data = Object.assign(data, metadata);

      knex('users')
        .where({'login': login})
        .update({'metadata_json': data});

    },


    getUserByName: function(username){
      //Are we returning an array or a promise here? 
      return knex('users')
        .where({'username':username})
        .select();
    },
    getUserById: function(id){
      //I'm not sure, but I believe we're returning a promise here. 
      return knex('users')
        .where({'id':id})
        .select();
    }

    
  }

};