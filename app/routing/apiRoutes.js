var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
      var newProfile = req.body;
      var currentProfile = req.body.answers;
      console.log(currentProfile);
      //max difference answer could be 4*10
      var totalDiff = 40;
      var bestFriend;

      for(var i = 0; i < friends.length; i++){
        var friendAnswers = friends[i].answers;
        console.log(friendAnswers);
        var difference = 0;

        for(var j = 0; j < friendAnswers.length; j++){
          difference += difference + Math.abs(friendAnswers[j] - currentProfile[j]);
          console.log(difference);

        }

         if (difference <= totalDiff) {
           totalDiff = difference;
           console.log(totalDiff);
           bestFriend = friends[i];
           console.log(bestFriend);
         }

        
      }


      friends.push(newProfile);
      //res.json(newFriend);
    });
}