var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
      var newProfile = req.body;
      var currentProfile = req.body.answers;
      console.log("This is the current profile answers" + currentProfile);
      //max difference answer could be 4*10
      var totalDiff = 40;
      var difference = 0;
      var bestFriend;

      for(var i = 0; i < friends.length; i++){
        var friendAnswers = friends[i].answers;
        console.log("FriendAnswers" + friendAnswers);
        
        for(var j = 0; j < friendAnswers.length; j++){
          difference += Math.abs(friendAnswers[j] - currentProfile[j]);
          console.log("difference between friends and current" + difference);

        }

         if (difference <= totalDiff) {
           totalDiff = difference;
           console.log("totalDifference" + totalDiff);
           bestFriend = friends[i];
           console.log("Winning Bestie: " +bestFriend);
         }

        
      }


      friends.push(newProfile);
      //res.json(newFriend);
    });
}