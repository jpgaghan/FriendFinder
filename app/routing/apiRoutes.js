const express = require("express");

const app = express();
var path =require("path")
const friends = require('../data/friends.js');

module.exports = 
  function (app) {
    app.get("/api/friends", function(req, res) {
      return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
      console.log("hello");
      newFriend = req.body;
      console.log(newFriend)
      friends.push(newFriend);
      res.json(newFriend);
    });
  }

function findFriend(friends) {
  console.log(newFriend.score.reduce((accum,currentValue) => accum + currentValue, 0))
}