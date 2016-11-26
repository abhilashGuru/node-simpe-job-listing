var db = require('../helpers/db');

module.exports = function(req, res) {
  db.all('SELECT * FROM jobs ORDER BY created_at DESC', function(err, rows) {
    res.render('index', {
      jobs: rows
    });
  });
}