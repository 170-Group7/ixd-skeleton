/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var handlebars = require("express3-handlebars");

var index = require("./routes/index");
var menu = require("./routes/menu");
var video = require("./routes/video");
var login = require("./routes/login");
var forgotPass = require("./routes/forgot-password");
var inviteFriends = require("./routes/invite-friends");
var newevent = require("./routes/newEvent");
var confirmation = require("./routes/confirmation");
var success = require("./routes/success");
var friends = require("./routes/friends");
var messages = require("./routes/messages");
var yourVideos = require("./routes/your-videos");
var notification = require("./routes/notification");
var schedule = require("./routes/schedule");
const { response } = require("express");
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("IxD secret key"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", function (req, res) {
  res.redirect("/login");
});

app.get("/index", index.view);
app.get("/menu", menu.view);
app.get("/video", video.view);
app.get("/login", login.view);
app.get("/forgot-password", forgotPass.view);
app.get("/invite-friends", inviteFriends.view);
app.get("/newevent", newevent.view);
app.get("/confirmation", confirmation.view);
app.get("/success", success.view);
app.get("/friends", friends.view);
app.get("/messages", messages.view);
app.get("/your-videos", yourVideos.view);
app.get("/notification", notification.view);
app.get("/schedule", schedule.view);
app.post("/notification", notification.sendSMS);

//app.get("/video/:id", video.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
