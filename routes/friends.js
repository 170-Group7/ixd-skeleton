var friendData = require("../friends.json");

/*
 * GET friends page.
 */
exports.view = function (req, res) {
  res.render("friends", friendData);
};
