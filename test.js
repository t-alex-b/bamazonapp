var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sneed2thesql"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected');
  connection.query('CREATE DATABASE mydb', function(err, result) {
    if (err) throw err;
    console.log('db created')
  });
});