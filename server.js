const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
const friends = require('./app/data/friends.js');

console.log(friends)
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.post("/api/friends", function (req, res) {
//   const newFriend = req.body;
//   Friends.push(newFriend);
//   res.json(newFriend);
// });

// app.get("/api/friends", function (req, res) {
//   return res.json(friends);
// });

// app.get("/survey", function (req, res) {
//   res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, "app/public/home.html"));
// });


app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});



