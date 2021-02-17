
/*
 * GET home page.
 */
var data = require('../videos.json');

exports.view = function(req, res){
  console.log(data);
  res.render('index', data);
};