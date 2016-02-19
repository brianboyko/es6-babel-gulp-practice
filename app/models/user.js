var db = require('../../config/database').bookshelf;

var User = db.Model.extend({
  tableName: 'users'
})