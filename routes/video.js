var messages = require("../video-messages.json");
exports.view = function (req, res) {
  res.render("video", messages);
};
