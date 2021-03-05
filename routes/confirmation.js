var time = require("../time.json");

exports.view = function (req, res) {
  res.render("confirmation");
};

exports.newevent = function (req, res) {
  /*
  {
      "title": "CSE170 Lecture1",
      "Participants": "Jack, Dorian",
      "start": "1",
      "end": "3"
    },
  */
  let hour = req.body.time.split(":")[0];
  console.log(hour);
  hourInt = parseInt(hour) - 8 + 1;
  if (hourInt < 0) {
    hourInt += 24;
  }
  time.schedule.push({
    title: req.body.lecture,
    Participants: req.body.participants,
    start: hourInt,
    end: hourInt + 1,
  });
  console.log(req.body.lecture);
  console.log(hourInt);
  console.log(hourInt + 2);
  res.send("success");
};
