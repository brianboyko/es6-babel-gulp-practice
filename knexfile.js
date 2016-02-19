// knexfile.js must go in / (root); 

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user     : 'postgres',
      password : '',
      database : 'digiquiz_dev'
    }
  }
}
