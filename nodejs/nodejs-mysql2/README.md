# This tutorial uses the mysql2 community-based connector
## from : https://www.npmjs.com/package/mysql2#history-and-why-mysql2

1. Edit the test-mysql2.js with connection info.

```
const connection = mysql.createConnection({
  host: 'host',
  port:3306,
  user: 'user',
  password: 'password',
  database: 'mysql'
});
```

2. Execute
```
node test-mysql2.js
```

