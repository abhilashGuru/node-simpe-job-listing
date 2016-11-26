var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('data.db');
module.exports = db;