// knexfile.js must go in / (root); 

var databasehost = process.env.HOST || 'localhost';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host     : databasehost,
      user     : 'postgres',
      password : '',
      database : 'digiquiz_dev'
    }
  }
}
