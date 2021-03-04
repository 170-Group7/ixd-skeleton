var friendData = require("../friends.json");

/*
 * GET invite friends page.
 */
exports.view = function (req, res) {
  res.render("friends", data);
  newFriend ={
    name: request.query.name,
  };
  data.friends.push(newFriend);
  console.log(request.query.name);
  repsonse.render("friends", data)
};

