var time = require("../time.json");
exports.view = function (req, res) {
  res.render("schedule", time);
};
