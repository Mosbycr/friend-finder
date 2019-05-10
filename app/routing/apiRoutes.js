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
     var currentDiff = 0;
      var bestFriend = {
        name: "",
        photo: "",
        difference: 50
      }

      for(var i = 0; i < friends.length; i++){
        var friendAnswers = friends[i].answers;
        console.log("Friend name: " + friends[i].name);
        console.log("FriendAnswers" + friendAnswers);
        currentDiff = 0;

        
        for(var j = 0; j < friendAnswers.length; j++){
          currentDiff += Math.abs(friendAnswers[j] - currentProfile[j]);
          console.log("difference: " + currentDiff);
        }

         if (currentDiff < bestFriend.difference) {
          bestFriend.name = friends[i].name,
          bestFriend.photo = friends[i].photo,
          bestFriend.difference = currentDiff  
         }
         console.log(bestFriend); 
      }


      friends.push(newProfile);
      //res.json(newFriend);
    });
}