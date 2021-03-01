from mysql.connector import (connection)

import sys

if len(sys.argv) != 4 :
	_host = sys.argv[1]	
	_port = sys.argv[2]	
	_user = sys.argv[3]
	_pass = sys.argv[4]
else :
	_host = '127.0.0.1'
	_port = '3306'
	_user = 'demo'
	_pass = 'demo'
cnx = connection.MySQLConnection(user=_user, password=_pass, host=_host, port=_port, database='demo')

cnx.close()

