var express = require("express");

var app = express();
var path =require("path")
var friends = require('../data/friends');
var currentArray=[] 
var newfriendScore = 0;
var currentfriendScore = 0;
var currentScore = 0;
var currentmatchBenchmark = 100;
var currentmatchIndex = 0;

module.exports = 
  function (app) {
    app.get("/api/friends", function(req, res) {
      console.log('get call');
      
      return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
      console.log('made the call');
      
      newFriend = req.body;
      friends.push(newFriend);

      console.log(newFriend);
      console.log(findFriend(friends, newFriend));
      
      
      res.json(findFriend(friends, newFriend));
    });
  }

findFriend = (friends, newFriend) => {

  newFriend.scores.forEach(function(index) {
    newfriendScore = parseInt(newfriendScore) + parseInt(index);
  });

  friends.forEach(function(key) {
    key.scores.forEach(function(iteration) {
      currentfriendScore = parseInt(currentfriendScore) + parseInt(iteration);
    })
    currentArray.push(currentfriendScore);
    currentfriendScore=0;
  })
 
  for(var i=0; i<currentArray.length-1;i++) {
    currentScore = Math.abs(currentArray[i]-newfriendScore)
    if (currentmatchBenchmark>=currentScore) {
      currentmatchBenchmark = currentScore
      currentmatchIndex=i
    }
  }
  currentmatchBenchmark=100;
  newfriendScore = 0;
  currentArray = []
  console.log(friends[currentmatchIndex])
  return friends[currentmatchIndex];
}