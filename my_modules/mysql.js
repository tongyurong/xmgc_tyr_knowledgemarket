var _mysql = {};
var conn=_mysql.conn=$mysql.createConnection({
    host:'182.254.219.193',
    port:'3306',
    database:'market',
    user:'TYR',
    password:'TYR!tyr!123',
multipleStatements:true
});

conn.connect();
module.exports = _mysql;
