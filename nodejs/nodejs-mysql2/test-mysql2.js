const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'host',
  port:3306,
  user: 'user',
  password: 'password',
  database: 'mysql'
});
 
// simple query
connection.promise().query(
  'SELECT user,host FROM mysql.user').then (
  ([rows, fields]) => {
    console.log(rows); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } )
  .catch(console.log).then ( 
    () => {
      connection.end() 
    }
);



