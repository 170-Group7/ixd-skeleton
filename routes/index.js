/*
 * GET home page.
 */
var videos = require("../video.json");
exports.view = function (req, res) {
  res.render("index", videos);
};
