var db = require('../helpers/db');

module.exports = function(req, res) {
  var jobId = req.params.id;
  db.get('SELECT * FROM jobs WHERE id = ?', [jobId], function(err, job) {
    if (err) return res.send('Error while getting job details');
    res.render('details', {
      job: job
    });
  });
}