const mysql = require("mysql");
const dbConfig = require("./src/config/db.config");
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

migration.init(connection, __dirname + '/migrations', function() {
  console.log("terminou a execução das migrações");
})

module.exports = connection;