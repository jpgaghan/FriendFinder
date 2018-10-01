const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const friends = require('./app/data/friends.js');

console.log(friends)
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});



