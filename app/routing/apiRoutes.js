var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newProfile = req.body;
    var currentProfile = req.body.answers;
    console.log("This is the current profile answers" + currentProfile);

    var currentDiff = 0;
    //setting object to hold the best match as for loops go through and compare answers
    var bestFriend = {
      name: "",
      photo: "",
      difference: 40
    };
    //loop through the friends objects in data/friends
    for (var i = 0; i < friends.length; i++) {
      var friendAnswers = friends[i].answers;
      currentDiff = 0;
      //loops through the current friend's answers being looked at in first loop
      for (var j = 0; j < friendAnswers.length; j++) {
        currentDiff += Math.abs(friendAnswers[j] - currentProfile[j]);
      }
      // pushing least difference to bestFriend object which will be sent as match
      if (currentDiff < bestFriend.difference) {
        (bestFriend.name = friends[i].name),
        (bestFriend.photo = friends[i].photo),
        (bestFriend.difference = currentDiff);
      }
      console.log(bestFriend);
    }

    friends.push(newProfile);
    res.json(bestFriend);
  });
};
