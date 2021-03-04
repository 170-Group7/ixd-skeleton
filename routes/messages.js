var messages = require("../message-list.json");

/*
 * GET invite friends page.
 */
exports.view = function (req, res) {
  res.render("messages", messages);
};
