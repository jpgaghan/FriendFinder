const express = require("express");

const app = express();
var path =require("path")
const friends = require('../data/friends');



module.exports = 
  function (app) {
    app.get("/api/friends", function(req, res) {
      return res.json(friends);
    });
  }

app.post("/api/friends", function(req, res) {
  const newFriend = req.body;
  Friends.push(newFriend);
  res.json(newFriend);
});

function findFriend(friends) {
  console.log(newFriend.score.reduce(accum,0))
}