var twilio = require("twilio");
require("dotenv").config();
const accountSID = process.env.TWILIOSID;
const accountToken = process.env.TWILIOTOKEN;
const accountNumber = process.env.TWILIOPHONE;
const client = new twilio(accountSID, accountToken);
exports.view = function (req, res) {
  res.render("notification");
};

exports.sendSMS = function (req, res) {
  console.log(client.username);
  phones = req.body.phones;
  console.log(phones);
  for (let i in phones) {
    console.log(phones[i] + " " + accountNumber);
    client.messages
      .create({
        body: "good morning, I am testing twilio~ how's your lab?",
        to: phones[i],
        from: accountNumber,
      })
      .then(message => console.log("sent:" + message.sid));
  }
  res.send("ok");
};
