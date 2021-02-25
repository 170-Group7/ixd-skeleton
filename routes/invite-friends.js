var friendData = require("../friends.json");

/*
 * GET invite friends page.
 */
exports.view = function (req, res) {
  res.render("invite-friends", friendData);
};
