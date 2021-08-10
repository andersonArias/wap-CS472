const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let sess;

app.get("/", (req, res) => {
  res.send(
    "<!DOCTYPE html>\n" +
      '<html lang="en">\n' +
      "<head>\n" +
      '    <meta charset="UTF-8">\n' +
      "</head>\n" +
      "<body>\n" +
      '<form action="/result" method="post">\n' +
      "    Name:\n" +
      '    <input type="text" name="name" >\n' +
      "    Age:\n" +
      '    <input type="number" name="age" >\n' +
      "\n" +
      '    <input type="submit" value="Submit">\n' +
      "</form>\n" +
      "</body>\n" +
      "</html>"
  );
});
app.post("/result", (req, res) => {
  sess = req.session;
  sess.name = req.body.name;
  sess.age = req.body.age;
  console.log("IN FORM SESSION IS " + sess + " NAME IS " + sess.name);
  res.redirect(302, "/result");
});

app.get("/result", (req, res) => {
  sess = req.session;
  console.log("AFTER FORM SESSION IS " + sess + " NAME IS " + sess.name);
  if (sess.name && sess.age) {
    res.send(`Welcome ${sess.name}, you are ${sess.age} years old`);
  } else {
    res.redirect(303, "/");
  }
});
app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});
