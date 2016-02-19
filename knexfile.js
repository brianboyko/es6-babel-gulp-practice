// knexfile.js must go in / (root); 

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host     : 'localhost',
      user     : 'postgres',
      password : '',
      database : 'digiquiz',
      charset  : 'utf8'
    }
  }
}
