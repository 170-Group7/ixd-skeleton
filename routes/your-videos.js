var videos = require("../video.json");

/*
 * GET Your Videos page.
 */
exports.view = function (req, res) {
  res.render("your-videos", videos);
};
