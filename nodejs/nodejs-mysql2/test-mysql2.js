const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: '10.0.1.3',
  port:3306,
  user: 'myroot',
  password: 'Welcome1!',
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



