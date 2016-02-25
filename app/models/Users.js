require("babel-polyfill");


// app/models/user.js

// we pass in the database connection (db), which is then used on the various Knex commands. 


var Users = function(db){

  return {
    signupLocal: function(username, hashpass) {
      var created_on = new Date();
      console.log("Creating new user: ", username)
      return db('users').insert({
        'username': username,
        'hashpass': hashpass,
        'created_on': created_on
      }).returning('id')
    },
    signupFacebook: function(fbUsername, fbId, fbToken){
      var created_on = new Date();
      return db('users').insert({
        'facebook_username': fbUsername,
        'facebook_id': fbId,
        'facebook_token': fbToken,
        'created_on': created_on
      })
    },
    updateUserEmail: function(username, userId) {
      return db('users')
        .where('id', userId) 
        .update({
          'email': email
        });
    },      
    // will implement these later. 
    // signupFacebook: function(username, facebookId, facebookToken, email) {
    //   return db('users').insert({
    //     'username': username,
    //     'email': email,
    //     'facebook_id': facebookId,
    //     'facebook_token': facebookToken
    //   });
    // },
    // updateFacebook: function(facebookId, facebookToken, userId) {
    //   return db('users')
    //     .where('id', userId) 
    //     .update({
    //       'facebook_id': facebookId,
    //       'facebook_token': facebookToken
    //     });
    // },
    // signupTwitter: function(twitterName, twitterToken, twitterDisplayName, email) {
    //   return db('users').insert({
    //     'username': username,
    //     'email': email,
    //     'twitterDisplayName': twitterDisplayName,
    //     'twitter_username': twitterName,
    //     'twitter_token': twitterToken
    //   });
    // },

    // updateTwitter: function((twitterName, twitterToken, twitterDisplayName, userId) {
    //   return db('users')
    //     .where('id', userId) 
    //     .update({
    //       'twitterDisplayName': twitterDisplayName,
    //       'twitter_username': twitterName,
    //       'twitter_token': twitterToken
    //     });
    // },
    // signupGoogle: function(username, googleId, googleToken, googleName, email, googleEmail) {
    //   return db('users').insert({
    //     'username': username,
    //     'email': email,
    //     'google_id': googleId,
    //     'google_token': googleToken,
    //     'google_name': googleName,
    //     'google_email': googleEmail
    //   });
    // },
    // updateGoogle: function(googleId, googleToken, googleName, googleEmailuserId) {
    //   return db('users')
    //     .where('id', userId) 
    //     .update({
    //       'google_id': googleId,
    //       'google_token': googleToken,
    //       'google_name': googleName,
    //       'google_email': googleEmail
    //     });
    // },

// can this be done via async/await?
    findWhere: function(keypair){  // for example: {'username':'bob'}
            console.log("UserModel: findWhere", JSON.stringify(keypair))

      return db('users')
        .where(keypair)
        .select()
    },
    findOne: function(keypair){  // for example: {'username':'bob'}
            console.log("UserModel: findOne", JSON.stringify(keypair))

      return db('users')
        .where(keypair)
        .select()
    },
  }

}

module.exports = Users;