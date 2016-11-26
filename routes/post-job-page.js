var db = require('../helpers/db');

module.exports = function postJob(req, res) {  
  if (req.method === 'POST') {
    // Validate post parameters
    var params = req.body;
    if (typeof(params.title) === 'undefined' || params.title.trim() === '' ||
        typeof(params.description) === 'undefined' || params.description.trim() === '' ||
        typeof(params.apply_link) === 'undefined' || params.apply_link.trim() === '' ||
        typeof(params.company_name) === 'undefined' || params.company_name.trim() === '') {
      return res.render('post-job', {
        error: true
      });
    }

    params.created_at = new Date().getTime();

    // Perform insert query
    db.run('INSERT INTO jobs(title, description, apply_link, created_at, company_name) VALUES(?, ?, ?, ?, ?)',
                [params.title, params.description, params.apply_link, params.created_at, params.company_name],
                function(err, result) {
      
      if (err) {        
        return res.render('post-job', {
          error: true
        });
      }

      return res.redirect('/');      
    });

  } else {
    // This is a GET request so we just render the post job page
    return res.render('post-job');
  }
}